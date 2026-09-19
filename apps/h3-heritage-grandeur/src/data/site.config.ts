import type { SiteConfig } from "@site-lab/shared";

/**
 * The Alkari — a heritage haveli inside the Jaisalmer fort.
 * Fictional brand, concept website. All details are illustrative.
 */
export const site: SiteConfig = {
  name: "The Alkari",
  legalName: "The Alkari, a Jaisalmer haveli",
  description:
    "A five-suite haveli inside the Jaisalmer fort, kept by the Alkari family for six generations. Rates include breakfast and one heritage hour — a guided walk of the haveli and the fort.",
  url: "https://alkari.example",
  city: "Jaisalmer",
  region: "Rajasthan",
  phone: "+91 151 000 0000",
  email: "stay@alkari.example",
  address: {
    street: "Inside the fort, off the old bazaar lane",
    city: "Jaisalmer",
    region: "Rajasthan",
    postalCode: "345001",
    country: "India",
  },
  geo: { lat: 26.9159, lng: 70.9056 },
  hours: [
    { day: "Monday", open: "08:00", close: "22:00" },
    { day: "Tuesday", open: "08:00", close: "22:00" },
    { day: "Wednesday", open: "08:00", close: "22:00" },
    { day: "Thursday", open: "08:00", close: "22:00" },
    { day: "Friday", open: "08:00", close: "22:00" },
    { day: "Saturday", open: "08:00", close: "22:00" },
    { day: "Sunday", open: "08:00", close: "22:00" },
  ],
  priceRange: "₹₹₹",
  image: "https://live.staticflickr.com/5304/5562366902_debb1365c7_b.jpg",
  schemaType: "LodgingBusiness",
};

/** Primary reservation target. */
export const RESERVE_HREF = "/reserve";

export interface NavItem {
  label: string;
  href: string;
}

export const NAV: NavItem[] = [
  { label: "The Haveli", href: "/the-haveli" },
  { label: "Suites", href: "/suites" },
  { label: "Courtyards", href: "/courtyards" },
  { label: "The Banquet", href: "/banquet" },
  { label: "The Ledger", href: "/ledger" },
  { label: "The Collection", href: "/collection" },
];
