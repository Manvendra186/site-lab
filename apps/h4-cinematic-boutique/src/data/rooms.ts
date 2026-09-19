import { IMAGES, type ImageEntry } from "./images";

export interface Room {
  slug: string;
  name: string;
  aspect: string;
  view: string;
  size: string;
  sleeps: string;
  rate: string;
  timecode: string;
  description: string;
  tagline: string;
  longDescription: string[];
  amenities: string[];
  image: ImageEntry;
  detailImages: ImageEntry[];
}

/** Rooms — each named for a part of the film process. */
export const ROOMS: Room[] = [
  {
    slug: "the-lobby",
    name: "The Lobby",
    aspect: "The first frame",
    view: "The street",
    size: "38 m²",
    sleeps: "2 guests",
    rate: "from ₹24,000 / night",
    timecode: "TC 02:00:00:00",
    description:
      "The room at the entrance, where the night begins. A low bed, a single warm light, and the street coming in through the glass.",
    tagline: "The first frame — where the night begins and the street comes in.",
    longDescription: [
      "The Lobby is the room at the entrance — the first frame of the stay. The night begins here, with a low bed, a single warm light, and the street coming in through the glass. It is the room we keep for the people who come to arrive, slowly.",
      "The bed is low and the linen is heavy. There is a reading chair by the window, a small shelf of the house's books, and a door that opens onto the street. The city is close here, and the room is built to let it in.",
    ],
    amenities: [
      "Low bed, heavy linen",
      "Street window",
      "Reading chair + house books",
      "Rain shower",
      "One screening included",
    ],
    image: IMAGES.roomLobby,
    detailImages: [IMAGES.roomExtra, IMAGES.cityNight],
  },
  {
    slug: "the-reel",
    name: "The Reel",
    aspect: "The story",
    view: "The courtyard",
    size: "34 m²",
    sleeps: "2 guests",
    rate: "from ₹22,000 / night",
    timecode: "TC 02:08:00:00",
    description:
      "The room by the courtyard, where the story is kept. The reel turns, and the light comes in broken and warm.",
    tagline: "By the courtyard, where the story is kept and the light comes in broken.",
    longDescription: [
      "The Reel is the room by the courtyard — the part of the house where the story is kept. The reel turns, and the light comes in broken and warm, through the lattice. It is the room we keep for the people who come to watch the light.",
      "The bed is low and the linen is heavy. There is a window seat, a small shelf of the house's books, and a door that opens onto the courtyard. The story is close here, and the room is built to let it in.",
    ],
    amenities: [
      "Low bed, heavy linen",
      "Courtyard window seat",
      "Reading chair + house books",
      "Rain shower",
      "One screening included",
    ],
    image: IMAGES.roomReel,
    detailImages: [IMAGES.roomExtra, IMAGES.house2],
  },
  {
    slug: "the-cut",
    name: "The Cut",
    aspect: "The transition",
    view: "The bar",
    size: "30 m²",
    sleeps: "2 guests",
    rate: "from ₹21,000 / night",
    timecode: "TC 02:16:00:00",
    description:
      "The room by the bar, where the night is cut. The light comes in low, and the room is warm before it is bright.",
    tagline: "By the bar, where the night is cut and the room is warm before it is bright.",
    longDescription: [
      "The Cut is the room by the bar — the part of the house where the night is cut. The light comes in low, and the room is warm before it is bright. It is the room we keep for the people who come to stay a little longer.",
      "The bed is low and the linen is heavy. There is a reading chair, a small shelf of the house's books, and a window that looks out over the bar. The night is close here, and the room is built to let it in.",
    ],
    amenities: [
      "Low bed, heavy linen",
      "Bar window",
      "Reading chair + house books",
      "Rain shower",
      "One screening included",
    ],
    image: IMAGES.roomCut,
    detailImages: [IMAGES.roomExtra, IMAGES.bar],
  },
  {
    slug: "the-fade",
    name: "The Fade",
    aspect: "The quiet",
    view: "The sea",
    size: "32 m²",
    sleeps: "2–3 guests",
    rate: "from ₹23,000 / night",
    timecode: "TC 02:24:00:00",
    description:
      "The room by the sea, where the night fades. The light comes in slow, and the room is never the same twice.",
    tagline: "By the sea, where the night fades and the light comes in slow.",
    longDescription: [
      "The Fade is the room by the sea — the part of the house where the night fades. The light comes in slow, and the room is never the same twice. It is the room we keep for the people who come to do nothing, well.",
      "The bed is low and the linen is heavy. There is a second chair, a small shelf of the house's books, and a window that looks out over the sea. The night is close here, and the room is built to let it in.",
    ],
    amenities: [
      "Low bed + second chair",
      "Sea window",
      "Reading chair + house books",
      "Rain shower",
      "One screening included",
    ],
    image: IMAGES.roomFade,
    detailImages: [IMAGES.roomExtra, IMAGES.seaFace],
  },
  {
    slug: "the-frame",
    name: "The Frame",
    aspect: "The composition",
    view: "The city",
    size: "36 m²",
    sleeps: "2 guests",
    rate: "from ₹25,000 / night",
    timecode: "TC 02:32:00:00",
    description:
      "The room with the view, where the night is framed. The city comes in through the glass, and the light comes in off it.",
    tagline: "With the view, where the night is framed and the city comes in through the glass.",
    longDescription: [
      "The Frame is the room with the view — the part of the house where the night is framed. The city comes in through the glass, and the light comes in off it, warm and slow. It is the room we keep for the people who come to watch the city.",
      "The bed is low and the linen is heavy. There is a reading chair, a small shelf of the house's books, and a window that looks out over the city. The night is close here, and the room is built to let it in.",
    ],
    amenities: [
      "Low bed, heavy linen",
      "City window",
      "Reading chair + house books",
      "Rain shower",
      "One screening included",
    ],
    image: IMAGES.roomFrame,
    detailImages: [IMAGES.roomExtra, IMAGES.cityNight],
  },
];

export const ROOMS_INDEX = {
  label: "Rooms",
  title: "Five rooms, kept",
  intro:
    "Five rooms, each named for a part of the film process. The bed is low, the linen is heavy, and the night comes in through the glass. Rates include breakfast and one screening in the house's cinema.",
  timecode: "TC 00:02:00:00",
};

export function getRoom(slug: string): Room | undefined {
  return ROOMS.find((room) => room.slug === slug);
}
