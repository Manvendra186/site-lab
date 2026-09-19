export interface Suite {
  slug: string;
  name: string;
  lineage: string;
  aspect: string;
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

export const SUITES: Suite[] = [
  {
    slug: "durbar",
    name: "The Durbar Suite",
    lineage: "No. 01",
    aspect: "The audience hall",
    view: "The courtyard",
    size: "42 m²",
    sleeps: "2 guests",
    rate: "from ₹28,000 / night",
    description:
      "The largest of the five, set where the haveli received its guests. High ceiling, a low bed, and the courtyard light coming in all day.",
    tagline: "The room the haveli kept for its guests, where the light comes in all day.",
    longDescription: [
      "The Durbar Suite is where the haveli received its guests — the room with the high ceiling and the wide window, where the light comes in all day and the whole house can be heard, quietly, going about its business. It is the largest of the five, and the one we keep for the people who come to stay a long while.",
      "The bed is low and the linen is heavy. There is a reading chair by the window, a small shelf of the family's books, and a door that opens onto the courtyard. The haveli is close here, and the room is built to let it in.",
    ],
    image: "room-durbar",
    detailImages: ["room-extra-2", "courtyard"],
    amenities: [
      "Low bed, heavy linen",
      "Courtyard door",
      "Reading chair + family books",
      "Rain shower",
      "Heritage hour included",
    ],
  },
  {
    slug: "jharokha",
    name: "The Jharokha Suite",
    lineage: "No. 02",
    aspect: "The carved window",
    view: "The fort",
    size: "34 m²",
    sleeps: "2 guests",
    rate: "from ₹24,000 / night",
    description:
      "The suite that faces the carved window. The jharokha looks out over the fort, and the light comes in broken and gold.",
    tagline: "Face the carved window, where the light comes in broken and gold.",
    longDescription: [
      "The Jharokha Suite faces the carved window — the jharokha that looks out over the fort. In the morning the light comes in broken and gold, through the lattice, and the room is warm before it is bright. It is the suite we keep for the people who come to watch the light.",
      "The bed is low and the linen is heavy. There is a window seat, a small shelf of the family's books, and a door that opens onto the corridor. The fort is close here, and the room is built to let it in.",
    ],
    image: "room-jharokha",
    detailImages: ["jharokha", "room-extra"],
    amenities: [
      "Low bed, heavy linen",
      "Jharokha window seat",
      "Reading chair + family books",
      "Rain shower",
      "Heritage hour included",
    ],
  },
  {
    slug: "peacock",
    name: "The Peacock Suite",
    lineage: "No. 03",
    aspect: "The courtyard birds",
    view: "The courtyard",
    size: "30 m²",
    sleeps: "2 guests",
    rate: "from ₹22,000 / night",
    description:
      "The suite by the courtyard, where the peacocks come. The room is quiet, and the birds do most of the talking.",
    tagline: "By the courtyard, where the peacocks come and the room stays quiet.",
    longDescription: [
      "The Peacock Suite is by the courtyard, where the peacocks come. In the morning they are on the wall, and in the afternoon they are in the tree, and the room is quiet enough to hear them. It is the suite we keep for the people who come to do nothing, well.",
      "The bed is low and the linen is heavy. There is a reading chair, a small shelf of the family's books, and a window that opens onto the courtyard. The birds are close here, and the room is built to let them in.",
    ],
    image: "room-peacock",
    detailImages: ["peacock", "room-extra"],
    amenities: [
      "Low bed, heavy linen",
      "Courtyard window",
      "Reading chair + family books",
      "Rain shower",
      "Heritage hour included",
    ],
  },
  {
    slug: "courtyard",
    name: "The Courtyard Suite",
    lineage: "No. 04",
    aspect: "The open court",
    view: "The courtyard",
    size: "32 m²",
    sleeps: "2–3 guests",
    rate: "from ₹23,000 / night",
    description:
      "The suite that opens straight onto the courtyard. The sky comes in, and the light comes in with it, and the room is never dark.",
    tagline: "Open onto the courtyard, where the sky comes in and the room is never dark.",
    longDescription: [
      "The Courtyard Suite opens straight onto the courtyard — the part of the haveli where the sky comes in. In the morning the light comes in low and gold, and in the afternoon it comes in high and white, and the room is never dark. It is the suite we keep for the people who come to be in the open.",
      "The bed is low and the linen is heavy. There is a second chair, a small shelf of the family's books, and a door that opens onto the courtyard. The sky is close here, and the room is built to let it in.",
    ],
    image: "room-courtyard",
    detailImages: ["courtyard", "room-extra-2"],
    amenities: [
      "Low bed + second chair",
      "Courtyard door",
      "Reading chair + family books",
      "Rain shower",
      "Heritage hour included",
    ],
  },
  {
    slug: "sandstone",
    name: "The Sandstone Suite",
    lineage: "No. 05",
    aspect: "The carved wall",
    view: "The fort",
    size: "36 m²",
    sleeps: "2 guests",
    rate: "from ₹25,000 / night",
    description:
      "The suite under the carved wall. The sandstone is close, and the light comes in off it, warm and slow.",
    tagline: "Under the carved wall, where the sandstone is close and the light is slow.",
    longDescription: [
      "The Sandstone Suite is under the carved wall — the part of the haveli where the sandstone is close and the light comes in off it, warm and slow. In the morning the wall is gold, and in the afternoon it is white, and the room is never the same colour twice. It is the suite we keep for the people who come to watch the stone.",
      "The bed is low and the linen is heavy. There is a reading chair, a small shelf of the family's books, and a window that looks out over the fort. The stone is close here, and the room is built to let it in.",
    ],
    image: "room-sandstone",
    detailImages: ["patwa", "room-extra"],
    amenities: [
      "Low bed, heavy linen",
      "Carved-wall window",
      "Reading chair + family books",
      "Rain shower",
      "Heritage hour included",
    ],
  },
];

export function suite(slug: string): Suite {
  const s = SUITES.find((x) => x.slug === slug);
  if (!s) throw new Error(`Unknown suite: ${slug}`);
  return s;
}


