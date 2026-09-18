import { describe, expect, it } from "vitest";
import { buildMetadata, localBusinessSchema, type SiteConfig } from "../seo";

const site: SiteConfig = {
  name: "Sthira",
  description: "A 14-room private house on the edge of Lake Pichola, Udaipur.",
  url: "https://sthira.example",
  image: "https://sthira.example/og.jpg",
  phone: "+91 291 244 0000",
  email: "stay@sthira.example",
  address: {
    street: "12 Lake Road",
    city: "Udaipur",
    region: "Rajasthan",
    postalCode: "313001",
    country: "India",
  },
  geo: { lat: 24.577, lng: 73.681 },
  schemaType: "LodgingBusiness",
};

describe("buildMetadata", () => {
  it("appends the site name to the title", () => {
    const meta = buildMetadata(site, { title: "Rooms" });
    expect(meta.title).toBe("Rooms — Sthira");
  });

  it("does not duplicate the site name when already present", () => {
    const meta = buildMetadata(site, { title: "Sthira — Rooms" });
    expect(meta.title).toBe("Sthira — Rooms");
  });

  it("falls back to the site description when none is given", () => {
    const meta = buildMetadata(site, { title: "Rooms" });
    expect(meta.description).toBe(site.description);
  });

  it("prefers the page description when provided", () => {
    const meta = buildMetadata(site, { title: "Rooms", description: "All rooms." });
    expect(meta.description).toBe("All rooms.");
  });

  it("sets canonical alternates when a path is given", () => {
    const meta = buildMetadata(site, { title: "Rooms", path: "https://sthira.example/rooms" });
    expect(meta.alternates).toEqual({ canonical: "https://sthira.example/rooms" });
  });

  it("omits alternates when no path is given", () => {
    const meta = buildMetadata(site, { title: "Rooms" });
    expect(meta.alternates).toBeUndefined();
  });

  it("sets noindex robots when requested", () => {
    const meta = buildMetadata(site, { title: "Rooms", noIndex: true });
    expect(meta.robots).toEqual({ index: false, follow: false });
  });

  it("uses the page og image, falling back to the site image", () => {
    const withPage = buildMetadata(site, {
      title: "Rooms",
      ogImage: "https://sthira.example/rooms.jpg",
    });
    expect(withPage.openGraph?.images).toEqual([{ url: "https://sthira.example/rooms.jpg" }]);

    const withSite = buildMetadata(site, { title: "Rooms" });
    expect(withSite.openGraph?.images).toEqual([{ url: site.image }]);
  });

  it("leaves og images undefined when neither page nor site image is set", () => {
    const meta = buildMetadata({ ...site, image: undefined }, { title: "Rooms" });
    expect(meta.openGraph?.images).toBeUndefined();
  });
});

describe("localBusinessSchema", () => {
  it("builds a LodgingBusiness schema with address and geo", () => {
    const schema = localBusinessSchema(site);
    expect(schema["@type"]).toBe("LodgingBusiness");
    expect(schema.name).toBe("Sthira");
    expect(schema.address).toMatchObject({
      streetAddress: "12 Lake Road",
      addressCountry: "India",
    });
    expect(schema.geo).toEqual({
      "@type": "GeoCoordinates",
      latitude: 24.577,
      longitude: 73.681,
    });
  });

  it("defaults to LocalBusiness when schemaType is absent", () => {
    const schema = localBusinessSchema({ ...site, schemaType: undefined });
    expect(schema["@type"]).toBe("LocalBusiness");
  });

  it("omits optional fields that are not set", () => {
    const schema = localBusinessSchema({
      name: "X",
      description: "d",
      url: "https://x.example",
    });
    expect(schema).not.toHaveProperty("telephone");
    expect(schema).not.toHaveProperty("address");
    expect(schema).not.toHaveProperty("geo");
    expect(schema).not.toHaveProperty("openingHoursSpecification");
  });

  it("includes opening hours when provided", () => {
    const schema = localBusinessSchema({
      ...site,
      hours: [{ day: "Monday", open: "08:00", close: "20:00" }],
    });
    expect(schema.openingHoursSpecification).toEqual([
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Monday",
        opens: "08:00",
        closes: "20:00",
      },
    ]);
  });

  it("merges extra fields last so they can override", () => {
    const schema = localBusinessSchema(site, { checkinTime: "14:00" });
    expect(schema.checkinTime).toBe("14:00");
  });
});
