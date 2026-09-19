import type { SiteConfig } from "@site-lab/shared";

/**
 * Safar — a five-stay high-altitude house on the Leh road.
 * Fictional brand, concept website. All details are illustrative.
 */
export const site: SiteConfig = {
  name: "Safar",
  legalName: "Safar House, Leh",
  description:
    "A five-stay high-altitude house on the Leh road. The road is the brand — rates include breakfast and one guided passage of the road, the pass, or the lake.",
  url: "https://safar.example",
  city: "Leh",
  region: "Ladakh",
  phone: "+91 1982 4000 1998",
  email: "stay@safar.example",
  address: {
    street: "The Leh road, off the old bazaar lane, Leh",
    city: "Leh",
    region: "Ladakh",
    postalCode: "192101",
    country: "India",
  },
  geo: { lat: 34.1526, lng: 77.5771 },
  hours: [
    { day: "Monday", open: "14:00", close: "00:00" },
    { day: "Tuesday", open: "14:00", close: "00:00" },
    { day: "Wednesday", open: "14:00", close: "00:00" },
    { day: "Thursday", open: "14:00", close: "00:00" },
    { day: "Friday", open: "14:00", close: "00:00" },
    { day: "Saturday", open: "14:00", close: "00:00" },
    { day: "Sunday", open: "14:00", close: "00:00" },
  ],
  priceRange: "₹₹₹",
  image: "https://live.staticflickr.com/2752/4353202924_d6ea1182f0_b.jpg",
  schemaType: "LodgingBusiness",
};

/** Primary reservation target. */
export const RESERVE_HREF = "/reserve";

export interface NavItem {
  label: string;
  href: string;
}

export const NAV: NavItem[] = [
  { label: "The Passage", href: "/passage" },
  { label: "Stays", href: "/stays" },
  { label: "The Table", href: "/table" },
  { label: "The Road", href: "/road" },
  { label: "The Altitude", href: "/altitude" },
  { label: "A Route", href: "/route" },
];