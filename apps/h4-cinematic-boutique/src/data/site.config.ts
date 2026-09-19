import type { SiteConfig } from "@site-lab/shared";

/**
 * Nocturne — a twelve-room boutique house in the old film district of Mumbai.
 * Fictional brand, concept website. All details are illustrative.
 */
export const site: SiteConfig = {
  name: "Nocturne",
  legalName: "Nocturne House, Mumbai",
  description:
    "A twelve-room boutique house in the old film district of Mumbai. The night is the brand — rates include breakfast and one private screening in the house's cinema.",
  url: "https://nocturne.example",
  city: "Mumbai",
  region: "Maharashtra",
  phone: "+91 22 4000 1962",
  email: "stay@nocturne.example",
  address: {
    street: "The old film district, off the old bazaar lane, Fort",
    city: "Mumbai",
    region: "Maharashtra",
    postalCode: "400001",
    country: "India",
  },
  geo: { lat: 18.9322, lng: 72.8309 },
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
  image: "https://live.staticflickr.com/7764/18356808621_bc388cb90b_b.jpg",
  schemaType: "LodgingBusiness",
};

/** Primary reservation target. */
export const RESERVE_HREF = "/reserve";

export interface NavItem {
  label: string;
  href: string;
}

export const NAV: NavItem[] = [
  { label: "The House", href: "/house" },
  { label: "Rooms", href: "/rooms" },
  { label: "The Bar", href: "/bar" },
  { label: "The Projection", href: "/projection" },
  { label: "The Archive", href: "/archive" },
  { label: "A Day", href: "/day" },
];
