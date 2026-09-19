export interface Room {
  slug: string;
  name: string;
  specimen: string;
  family: string;
  view: string;
  size: string;
  sleeps: string;
  rate: string;
  description: string;
  tagline: string;
  longDescription: string[];
  image: string;
  detailImages: string[];
  amenities: string[];
}

/**
 * Five rooms, each named for the plant it opens onto.
 * The "specimen" + "family" fields give each room a herbarium label.
 */
export const ROOMS: Room[] = [
  {
    slug: "fern-room",
    name: "The Fern Room",
    specimen: "Specimen 01",
    family: "Tree ferns · Cyatheaceae",
    view: "The ferns",
    size: "28 m²",
    sleeps: "2 guests",
    rate: "from ₹18,500 / night",
    description:
      "The room that opens straight onto the ferns. Low bed, high roof, and the green of the fronds moving in the window.",
    tagline: "Open onto the ferns, where the light is soft and the air is cool.",
    longDescription: [
      "The Fern Room is the lowest of the five, set into the understory so the window is at the height of the fronds. In the morning the room is green before it is light — the ferns come in first, and the sun comes in after, low and slow.",
      "The bed is low and the linen is heavy. There is a reading chair in the corner, a small shelf of field guides, and a window that opens all the way. The forest is loud enough; the room is built to let it in.",
    ],
    image: "fern",
    detailImages: ["room-fern", "fern-2"],
    amenities: [
      "Low bed, heavy linen",
      "Window opens all the way",
      "Reading chair + field guides",
      "Rain shower",
      "Veranda access",
    ],
  },
  {
    slug: "moss-room",
    name: "The Moss Room",
    specimen: "Specimen 02",
    family: "Mosses · Bryophyta",
    view: "The moss",
    size: "26 m²",
    sleeps: "2 guests",
    rate: "from ₹17,500 / night",
    description:
      "The quietest room, facing the moss. After rain the whole window goes soft and the room smells of the floor of the forest.",
    tagline: "Face the moss, where the rain is kept and the light goes low.",
    longDescription: [
      "The Moss Room faces the part of the forest where the rain is kept. After a shower the window goes soft and green, and the room smells of the forest floor — wet leaf, cool stone, the slow work of the moss.",
      "It is the quietest of the five, and the one we keep for the people who come to do nothing. The bed is low, the light is low, and the only sound is the rain, when it comes.",
    ],
    image: "moss",
    detailImages: ["room-2", "moss-2"],
    amenities: [
      "Low bed, heavy linen",
      "Moss-facing window",
      "Reading chair + field guides",
      "Rain shower",
      "Veranda access",
    ],
  },
  {
    slug: "fig-room",
    name: "The Fig Room",
    specimen: "Specimen 03",
    family: "Figs · Moraceae",
    view: "The figs",
    size: "32 m²",
    sleeps: "2–3 guests",
    rate: "from ₹21,000 / night",
    description:
      "The largest room, under the big figs. The roots come in at the window and the light comes in through them, broken and green.",
    tagline: "Under the big figs, where the roots come in at the window.",
    longDescription: [
      "The Fig Room is the largest of the five, and it sits under the big figs — the ones with the roots that come down to the ground and the canopy that goes up out of sight. The light comes in through the leaves, broken and green, and it moves all day.",
      "It is the room for the people who want a little more space: a low bed, a second chair, and a window that looks straight up into the figs. The forest is close here, and the room is built to let it in.",
    ],
    image: "fig",
    detailImages: ["room-3", "fig-2"],
    amenities: [
      "Low bed + second chair",
      "Fig-facing window",
      "Reading chair + field guides",
      "Rain shower",
      "Veranda access",
    ],
  },
  {
    slug: "bamboo-room",
    name: "The Bamboo Room",
    specimen: "Specimen 04",
    family: "Bamboo · Poaceae",
    view: "The bamboo",
    size: "27 m²",
    sleeps: "2 guests",
    rate: "from ₹18,000 / night",
    description:
      "The room by the bamboo. In the wind the culms go quiet and then loud again, and the light comes in in thin green lines.",
    tagline: "By the bamboo, where the wind goes quiet and then loud again.",
    longDescription: [
      "The Bamboo Room is by the stand of bamboo, the part of the forest that moves with the wind. In the morning the culms are still and the light comes in in thin green lines; in the afternoon the wind comes and the whole window goes quiet and then loud again.",
      "It is a light room, and a bright one, and the one we keep for the people who like the sound of the forest moving. The bed is low, the linen is heavy, and the window opens onto the bamboo.",
    ],
    image: "bamboo",
    detailImages: ["room-4", "bamboo-2"],
    amenities: [
      "Low bed, heavy linen",
      "Bamboo-facing window",
      "Reading chair + field guides",
      "Rain shower",
      "Veranda access",
    ],
  },
  {
    slug: "canopy-room",
    name: "The Canopy Room",
    specimen: "Specimen 05",
    family: "Evergreens · various",
    view: "The canopy",
    size: "34 m²",
    sleeps: "2–3 guests",
    rate: "from ₹24,000 / night",
    description:
      "The highest room, under the canopy. The roof is high and the window looks up, and the birds are close enough to hear them think.",
    tagline: "Under the canopy, where the roof is high and the window looks up.",
    longDescription: [
      "The Canopy Room is the highest of the five, set under the canopy so the window looks up. The roof is high and the light comes in from above, and the birds are close enough to hear them think — the hornbills in the morning, the smaller ones all day.",
      "It is the room for the people who want to be in the trees without being in the trees. The bed is low, the light is high, and the forest is loud enough. Our job is to not add to it.",
    ],
    image: "canopy",
    detailImages: ["room-5", "canopy-2"],
    amenities: [
      "Low bed + second chair",
      "Canopy-facing window",
      "Reading chair + field guides",
      "Rain shower",
      "Veranda access",
    ],
  },
];

export function room(slug: string): Room {
  const r = ROOMS.find((x) => x.slug === slug);
  if (!r) throw new Error(`Unknown room: ${slug}`);
  return r;
}