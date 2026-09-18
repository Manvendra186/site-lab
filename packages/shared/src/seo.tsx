import type { Metadata } from "next";

export interface SiteConfig {
  name: string;
  legalName?: string;
  description: string;
  /** Canonical base URL, e.g. https://sthira.example */
  url: string;
  city?: string;
  region?: string;
  phone?: string;
  email?: string;
  address?: { street: string; city: string; region: string; postalCode: string; country: string };
  geo?: { lat: number; lng: number };
  hours?: { day: string; open: string; close: string }[];
  priceRange?: string;
  image?: string;
  /** schema.org type, e.g. "LodgingBusiness" */
  schemaType?: string;
}

export interface PageMeta {
  title: string;
  description?: string;
  /** Absolute canonical path, e.g. https://sthira.example/rooms */
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function buildMetadata(site: SiteConfig, page: PageMeta): Metadata {
  const title = page.title.includes(site.name) ? page.title : `${page.title} — ${site.name}`;
  const description = page.description ?? site.description;
  return {
    metadataBase: new URL(site.url),
    title,
    description,
    alternates: page.path ? { canonical: page.path } : undefined,
    openGraph: {
      title,
      description,
      url: page.path ?? site.url,
      siteName: site.name,
      type: "website",
      images: page.ogImage
        ? [{ url: page.ogImage }]
        : site.image
          ? [{ url: site.image }]
          : undefined,
    },
    twitter: { card: "summary_large_image", title, description },
    robots: page.noIndex ? { index: false, follow: false } : undefined,
  };
}

export function jsonLd(schema: Record<string, unknown>) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function localBusinessSchema(
  site: SiteConfig,
  extra: Record<string, unknown> = {}
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": site.schemaType ?? "LocalBusiness",
    name: site.name,
    description: site.description,
    url: site.url,
    ...(site.image ? { image: site.image } : {}),
    ...(site.phone ? { telephone: site.phone } : {}),
    ...(site.email ? { email: site.email } : {}),
    ...(site.address
      ? {
          address: {
            "@type": "PostalAddress",
            streetAddress: site.address.street,
            addressLocality: site.address.city,
            addressRegion: site.address.region,
            postalCode: site.address.postalCode,
            addressCountry: site.address.country,
          },
        }
      : {}),
    ...(site.geo
      ? { geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng } }
      : {}),
    ...(site.hours?.length
      ? {
          openingHoursSpecification: site.hours.map((h) => ({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: h.day,
            opens: h.open,
            closes: h.close,
          })),
        }
      : {}),
    ...(site.priceRange ? { priceRange: site.priceRange } : {}),
    ...extra,
  };
}
