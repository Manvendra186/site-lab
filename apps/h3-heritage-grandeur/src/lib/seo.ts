import { buildMetadata, localBusinessSchema, type PageMeta } from "@site-lab/shared";
import { site } from "@/data/site.config";

export function pageMeta(page: PageMeta) {
  return buildMetadata(site, page);
}

/** LodgingBusiness JSON-LD for the haveli. */
export function lodgingSchema() {
  return localBusinessSchema(site, {
    checkinTime: "14:00",
    checkoutTime: "12:00",
    numberOfRooms: 5,
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Breakfast", value: true },
      { "@type": "LocationFeatureSpecification", name: "Heritage hour", value: true },
      { "@type": "LocationFeatureSpecification", name: "Courtyard", value: true },
      { "@type": "LocationFeatureSpecification", name: "The banquet", value: true },
    ],
  });
}
