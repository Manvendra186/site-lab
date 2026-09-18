export type SiteStatus = "planned" | "briefed" | "building" | "qa" | "done";

export interface SiteEntry {
  id: string;
  brand: string;
  niche: string;
  direction: string;
  status: SiteStatus;
  port: number;
  app: string;
}

export const NICHES = ["Hotel", "Architect", "Interior", "Barber", "School", "Hospital"] as const;

export const SITES: SiteEntry[] = [
  { id: "H1", brand: "Sthira", niche: "Hotel", direction: "Quiet Luxury Retreat", status: "building", port: 3001, app: "h1-quiet-luxury" },
  { id: "H2", brand: "Understory", niche: "Hotel", direction: "Nature as Brand", status: "planned", port: 3002, app: "h2-nature-brand" },
  { id: "H3", brand: "The Alkari", niche: "Hotel", direction: "Heritage Grandeur", status: "planned", port: 3003, app: "h3-heritage-grandeur" },
  { id: "H4", brand: "Nocturne", niche: "Hotel", direction: "Cinematic Boutique", status: "planned", port: 3004, app: "h4-cinematic-boutique" },
  { id: "H5", brand: "Safar", niche: "Hotel", direction: "Experiential Escape", status: "planned", port: 3005, app: "h5-experiential-escape" },
  { id: "A1", brand: "Studio Basalt", niche: "Architect", direction: "Project Monograph", status: "planned", port: 3006, app: "a1-project-monograph" },
  { id: "A2", brand: "Field & Form", niche: "Architect", direction: "Living Publication", status: "planned", port: 3007, app: "a2-living-publication" },
  { id: "A3", brand: "Index Studio", niche: "Architect", direction: "Smart Archive", status: "planned", port: 3008, app: "a3-smart-archive" },
  { id: "A4", brand: "Tecton", niche: "Architect", direction: "Research Editorial", status: "planned", port: 3009, app: "a4-research-editorial" },
  { id: "A5", brand: "Line & Void", niche: "Architect", direction: "Radical Restraint", status: "planned", port: 3010, app: "a5-radical-restraint" },
  { id: "I1", brand: "Hearth Studio", niche: "Interior", direction: "Warm Editorial", status: "planned", port: 3011, app: "i1-warm-editorial" },
  { id: "I2", brand: "The Collector's Room", niche: "Interior", direction: "Maximalist Collector", status: "planned", port: 3012, app: "i2-maximalist-collector" },
  { id: "I3", brand: "Studio Noir", niche: "Interior", direction: "Dark Minimal Luxury", status: "planned", port: 3013, app: "i3-dark-minimal" },
  { id: "I4", brand: "Verma & Co.", niche: "Interior", direction: "Design House", status: "planned", port: 3014, app: "i4-design-house" },
  { id: "I5", brand: "Mitti", niche: "Interior", direction: "Indian Craft & Context", status: "planned", port: 3015, app: "i5-indian-craft" },
  { id: "B1", brand: "The Corner Chair", niche: "Barber", direction: "Local Culture", status: "planned", port: 3016, app: "b1-local-culture" },
  { id: "B2", brand: "Blade & Verse", niche: "Barber", direction: "Concept Brand", status: "planned", port: 3017, app: "b2-concept-brand" },
  { id: "B3", brand: "Maison Coupe", niche: "Barber", direction: "Fashion Premium", status: "planned", port: 3018, app: "b3-fashion-premium" },
  { id: "B4", brand: "The Old Blade", niche: "Barber", direction: "Atmosphere Video", status: "planned", port: 3019, app: "b4-atmosphere-video" },
  { id: "B5", brand: "Guild of Blades", niche: "Barber", direction: "Craft + People", status: "planned", port: 3020, app: "b5-craft-people" },
  { id: "S1", brand: "Roots & Rivers", niche: "School", direction: "Nature-first Learning", status: "planned", port: 3021, app: "s1-nature-first" },
  { id: "S2", brand: "Meridian International", niche: "School", direction: "Global Campus", status: "planned", port: 3022, app: "s2-global-campus" },
  { id: "S3", brand: "Northgate University", niche: "School", direction: "Future-ready University", status: "planned", port: 3023, app: "s3-future-ready" },
  { id: "S4", brand: "Saraswati Institute of Science", niche: "School", direction: "Research Authority", status: "planned", port: 3024, app: "s4-research-authority" },
  { id: "S5", brand: "The Neighborhood School", niche: "School", direction: "Community-first", status: "planned", port: 3025, app: "s5-community-first" },
  { id: "C1", brand: "Meridian Health", niche: "Hospital", direction: "Search-first Clinical", status: "planned", port: 3026, app: "c1-search-first" },
  { id: "C2", brand: "Sahay Hospital", niche: "Hospital", direction: "Care Pathway", status: "planned", port: 3027, app: "c2-care-pathway" },
  { id: "C3", brand: "The Everyday Clinic", niche: "Hospital", direction: "Human-centered Clinic", status: "planned", port: 3028, app: "c3-human-centered" },
  { id: "C4", brand: "Aarogya Multispecialty", niche: "Hospital", direction: "Indian Multispecialty", status: "planned", port: 3029, app: "c4-indian-multispecialty" },
  { id: "C5", brand: "Vishwam Institute of Medicine", niche: "Hospital", direction: "Research-led Medicine", status: "planned", port: 3030, app: "c5-research-led" },
];