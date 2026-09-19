import type { SiteConfig } from "@site-lab/shared";

/**
 * Understory — a Coorg forest lodge.
 * Fictional brand, concept website. All details are illustrative.
 */
export const site: SiteConfig = {
  name: "Understory",
  legalName: "Understory, a Coorg forest lodge",
  description:
    "A five-room lodge in the understory of a Coorg forest — ferns, moss, and the low green light where the canopy lets go. Breakfast, walks, and the birds are included.",
  url: "https://understory.example",
  city: "Kodagu (Coorg)",
  region: "Karnataka",
  phone: "+91 8272 000 000",
  email: "stay@understory.example",
  address: {
    street: "Kudremukh forest road, off NH-275",
    city: "Madikeri",
    region: "Kodagu, Karnataka",
    postalCode: "571203",
    country: "India",
  },
  geo: { lat: 12.4252, lng: 75.7369 },
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
  image: "https://live.staticflickr.com/65535/53129125541_098b2643e9_b.jpg",
  schemaType: "LodgingBusiness",
};

/** Primary reservation target. */
export const RESERVE_HREF = "/reserve";

export interface NavItem {
  label: string;
  href: string;
}

export const NAV: NavItem[] = [
  { label: "The Forest", href: "/the-forest" },
  { label: "Stays", href: "/stays" },
  { label: "Days", href: "/days" },
  { label: "The Table", href: "/the-table" },
  { label: "Field Notes", href: "/field-notes" },
  { label: "Gallery", href: "/gallery" },
];
