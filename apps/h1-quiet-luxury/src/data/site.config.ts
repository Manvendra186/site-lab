import type { SiteConfig } from "@site-lab/shared";
import { IMAGES } from "./images";

/**
 * Sthira — a 14-room private lakeside house, Udaipur.
 * All contact details are DEMO (fictional brand, concept website).
 */
export const site: SiteConfig = {
  name: "Sthira",
  legalName: "Sthira — a quiet lakeside house (concept)",
  description:
    "Sthira is a 14-room private house on the edge of Lake Pichola, Udaipur. Breakfast and one experience are included with every stay.",
  url: "https://sthira.example",
  city: "Udaipur",
  region: "Rajasthan",
  phone: "+91 294 000 0000",
  email: "stay@sthira.example",
  address: {
    street: "12 Lake Edge Road",
    city: "Udaipur",
    region: "Rajasthan",
    postalCode: "313001",
    country: "India",
  },
  geo: { lat: 24.5955, lng: 73.6941 },
  hours: [
    { day: "Monday", open: "00:00", close: "23:59" },
    { day: "Tuesday", open: "00:00", close: "23:59" },
    { day: "Wednesday", open: "00:00", close: "23:59" },
    { day: "Thursday", open: "00:00", close: "23:59" },
    { day: "Friday", open: "00:00", close: "23:59" },
    { day: "Saturday", open: "00:00", close: "23:59" },
    { day: "Sunday", open: "00:00", close: "23:59" },
  ],
  priceRange: "₹₹₹",
  image: IMAGES.hero.url,
  schemaType: "LodgingBusiness",
};

export const NAV = [
  { label: "The House", href: "/about" },
  { label: "Rooms", href: "/rooms" },
  { label: "Experiences", href: "/experiences" },
  { label: "Dining", href: "/dining" },
  { label: "Wellness", href: "/wellness" },
  { label: "Journal", href: "/journal" },
  { label: "Gallery", href: "/gallery" },
] as const;

export const RESERVE_HREF = "/contact#reserve";
