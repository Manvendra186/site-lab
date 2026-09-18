export interface Room {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string[];
  image: string;
  detailImages: string[];
  size: string;
  sleeps: string;
  view: string;
  rate: string;
  amenities: string[];
}

export const ROOMS: Room[] = [
  {
    slug: "lake-room",
    name: "The Lake Room",
    tagline: "A bed facing the water, nothing else asked of you.",
    description:
      "The room most guests choose first. A wide bed, a long window, and the lake taking the light from first to last.",
    longDescription: [
      "The Lake Room opens directly onto the water. Mornings begin with the lake turning from grey to gold; evenings end with it going the other way. There is a bed, a writing table, and a shelf of books that stay where they are.",
      "The window is the point. It is wide, low, and unobstructed, so the room does most of its work while you are doing none of it.",
    ],
    image: "room-lake",
    detailImages: ["bath-detail", "lake-dusk"],
    size: "42 m²",
    sleeps: "2 guests",
    view: "Lake",
    rate: "from ₹28,000 / night",
    amenities: ["King bed", "Lake-facing window", "Rain shower", "Reading chair", "Breakfast included"],
  },
  {
    slug: "garden-room",
    name: "The Garden Room",
    tagline: "Shade, birds, and the smell of wet stone after rain.",
    description:
      "Set into the garden wall, this room trades the view for the sound: birds at dawn, leaves all day, quiet all night.",
    longDescription: [
      "The Garden Room is the quietest room in the house. It sits low, under the old neem tree, and its door opens onto a private stretch of lawn.",
      "Guests who write tend to choose it. The light is soft and even, and the only thing that ever interrupts is the gardener, and he is careful.",
    ],
    image: "room-garden",
    detailImages: ["garden", "bath-stone"],
    size: "38 m²",
    sleeps: "2 guests",
    view: "Garden",
    rate: "from ₹22,000 / night",
    amenities: ["Queen bed", "Private lawn", "Writing desk", "Breakfast included"],
  },
  {
    slug: "courtyard-suite",
    name: "The Courtyard Suite",
    tagline: "A private courtyard, a stone bath, and room to think.",
    description:
      "The largest of the ground-floor rooms, built around its own small courtyard. The bath is carved stone; the light comes from above.",
    longDescription: [
      "The Courtyard Suite is arranged the way old houses were: a room, a bath, and a courtyard between them, open to the sky. Water is kept in the courtyard in the monsoon, and the sound of it is the closest thing the house has to music.",
      "It suits two people who want space, or one person who wants it badly.",
    ],
    image: "bath-stone",
    detailImages: ["bath-mirror", "palace-bank"],
    size: "56 m²",
    sleeps: "2 guests",
    view: "Courtyard",
    rate: "from ₹34,000 / night",
    amenities: ["King bed", "Private courtyard", "Stone bath", "Sitting area", "Breakfast included"],
  },
  {
    slug: "writers-room",
    name: "The Writer's Room",
    tagline: "Kept for long stays. The desk is the best in the house.",
    description:
      "A narrow room with a deep desk, a good chair, and a window that faces the garden wall. Long stays are priced for it.",
    longDescription: [
      "The Writer's Room was set up for a novelist who stayed four months and asked for nothing to change. The desk is deep, the chair is old and correct, and the kettle is always within reach.",
      "Stays of a week or more are offered at a reduced rate, and the room is held for returning writers when they come back.",
    ],
    image: "bath-detail",
    detailImages: ["room-garden", "chai"],
    size: "34 m²",
    sleeps: "1–2 guests",
    view: "Garden wall",
    rate: "from ₹24,000 / night",
    amenities: ["Double bed", "Deep writing desk", "Long-stay rates", "Breakfast included"],
  },
  {
    slug: "pavilion-room",
    name: "The Pavilion Room",
    tagline: "An open veranda where the day can be watched, not done.",
    description:
      "Half room, half veranda. The bed is inside; the chair is outside, in the shade, facing the water.",
    longDescription: [
      "The Pavilion Room borrows from the old lakeside pavilions: a solid inner room and an open outer one, joined by a wide doorway. Most of the day is spent on the veranda.",
      "The veranda chair faces the water at a slight angle, which is exactly right for watching boats go by without committing to it.",
    ],
    image: "bath-mirror",
    detailImages: ["lake-palace", "bath-detail"],
    size: "48 m²",
    sleeps: "2 guests",
    view: "Lake, from veranda",
    rate: "from ₹30,000 / night",
    amenities: ["King bed", "Open veranda", "Veranda chair", "Breakfast included"],
  },
  {
    slug: "old-house-suite",
    name: "The Old House Suite",
    tagline: "The original wing. Thicker walls, older light.",
    description:
      "In the part of the house that was here first. The walls are thick, the ceilings are low, and the view across the lake is the widest in the house.",
    longDescription: [
      "The Old House Suite occupies the original wing, and it shows: the walls are thick, the floors are cool, and the light comes in lower and warmer than in the newer rooms.",
      "From its window, the lake is widest. On clear mornings the far shore is a line; on misty ones it is a rumour.",
    ],
    image: "lake-palace",
    detailImages: ["room-lake", "palace"],
    size: "62 m²",
    sleeps: "2 guests",
    view: "Lake, widest in the house",
    rate: "from ₹42,000 / night",
    amenities: ["King bed", "Widest lake view", "Original wing", "Sitting room", "Breakfast included"],
  },
];

export function room(slug: string): Room {
  const r = ROOMS.find((x) => x.slug === slug);
  if (!r) throw new Error(`Unknown room: ${slug}`);
  return r;
}
