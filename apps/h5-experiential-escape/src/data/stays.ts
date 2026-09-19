import { IMAGES, type ImageEntry } from "./images";

export interface Stay {
  slug: string;
  name: string;
  aspect: string;
  view: string;
  size: string;
  sleeps: string;
  rate: string;
  waypoint: string;
  elevation: string;
  description: string;
  tagline: string;
  longDescription: string[];
  amenities: string[];
  image: ImageEntry;
  detailImages: ImageEntry[];
}

/** Stays — each named for a stage of the journey. */
export const STAYS: Stay[] = [
  {
    slug: "the-approach",
    name: "The Approach",
    aspect: "The first stage",
    view: "The road",
    size: "38 m²",
    sleeps: "2 guests",
    rate: "from ₹24,000 / night",
    waypoint: "Stage 01",
    elevation: "3,500 m",
    description:
      "The stay at the entrance, where the journey begins. A low bed, a single warm light, and the road coming in through the glass.",
    tagline: "The first stage — where the journey begins and the road comes in.",
    longDescription: [
      "The Approach is the stay at the entrance — the first stage of the journey. The journey begins here, with a low bed, a single warm light, and the road coming in through the glass. It is the stay we keep for the people who come to arrive, slowly.",
      "The bed is low and the linen is heavy. There is a reading chair by the window, a small shelf of the house's books, and a door that opens onto the road. The road is close here, and the stay is built to let it in.",
    ],
    amenities: [
      "Low bed, heavy linen",
      "Road window",
      "Reading chair + house books",
      "Rain shower",
      "One passage included",
    ],
    image: IMAGES.stayApproach,
    detailImages: [IMAGES.spare1, IMAGES.road2],
  },
  {
    slug: "the-pass",
    name: "The Pass",
    aspect: "The high point",
    view: "The pass",
    size: "42 m²",
    sleeps: "2 guests",
    rate: "from ₹28,000 / night",
    waypoint: "Stage 02",
    elevation: "4,200 m",
    description:
      "The stay at the summit, where the road climbs and the light comes in off the cold. The highest stay in the house.",
    tagline: "The high point — where the road climbs and the light comes in off the cold.",
    longDescription: [
      "The Pass is the stay at the summit — the high point of the journey. The road climbs here, and the light comes in off the cold. It is the highest stay in the house, and the one we keep for the people who come to see the pass.",
      "The bed is low and the linen is heavy. There is a window that looks out onto the pass, a small shelf of the house's books, and a door that opens onto the road. The pass is close here, and the stay is built to let it in.",
    ],
    amenities: [
      "Low bed, heavy linen",
      "Pass window",
      "Reading chair + house books",
      "Rain shower",
      "One passage included",
    ],
    image: IMAGES.stayPass,
    detailImages: [IMAGES.spare2, IMAGES.road4],
  },
  {
    slug: "the-valley",
    name: "The Valley",
    aspect: "The quiet",
    view: "The valley",
    size: "40 m²",
    sleeps: "2 guests",
    rate: "from ₹26,000 / night",
    waypoint: "Stage 03",
    elevation: "3,600 m",
    description:
      "The stay in the low country, where the road comes down and the valley comes in through the glass. The quietest stay in the house.",
    tagline: "The quiet — where the road comes down and the valley comes in.",
    longDescription: [
      "The Valley is the stay in the low country — the quiet of the journey. The road comes down here, and the valley comes in through the glass. It is the quietest stay in the house, and the one we keep for the people who come to rest.",
      "The bed is low and the linen is heavy. There is a window that looks out onto the valley, a small shelf of the house's books, and a door that opens onto the road. The valley is close here, and the stay is built to let it in.",
    ],
    amenities: [
      "Low bed, heavy linen",
      "Valley window",
      "Reading chair + house books",
      "Rain shower",
      "One passage included",
    ],
    image: IMAGES.stayValley,
    detailImages: [IMAGES.spare3, IMAGES.road3],
  },
  {
    slug: "the-lake",
    name: "The Lake",
    aspect: "The stillness",
    view: "The lake",
    size: "44 m²",
    sleeps: "2 guests",
    rate: "from ₹30,000 / night",
    waypoint: "Stage 04",
    elevation: "3,700 m",
    description:
      "The stay by the water, where the road comes to the lake and the water comes in cold and slow. The still stay in the house.",
    tagline: "The stillness — where the road comes to the lake and the water comes in.",
    longDescription: [
      "The Lake is the stay by the water — the stillness of the journey. The road comes to the lake here, and the water comes in cold and slow. It is the still stay in the house, and the one we keep for the people who come to be still.",
      "The bed is low and the linen is heavy. There is a window that looks out onto the lake, a small shelf of the house's books, and a door that opens onto the road. The lake is close here, and the stay is built to let it in.",
    ],
    amenities: [
      "Low bed, heavy linen",
      "Lake window",
      "Reading chair + house books",
      "Rain shower",
      "One passage included",
    ],
    image: IMAGES.stayLake,
    detailImages: [IMAGES.spare4, IMAGES.road3],
  },
  {
    slug: "the-return",
    name: "The Return",
    aspect: "The last stage",
    view: "The road back",
    size: "36 m²",
    sleeps: "2 guests",
    rate: "from ₹22,000 / night",
    waypoint: "Stage 05",
    elevation: "3,400 m",
    description:
      "The stay at the end, where the journey comes back and the road comes back through the glass. The last stay in the house.",
    tagline: "The last stage — where the journey comes back and the road comes back.",
    longDescription: [
      "The Return is the stay at the end — the last stage of the journey. The journey comes back here, and the road comes back through the glass. It is the last stay in the house, and the one we keep for the people who come to leave, slowly.",
      "The bed is low and the linen is heavy. There is a window that looks out onto the road, a small shelf of the house's books, and a door that opens onto the road. The road is close here, and the stay is built to let it in.",
    ],
    amenities: [
      "Low bed, heavy linen",
      "Road window",
      "Reading chair + house books",
      "Rain shower",
      "One passage included",
    ],
    image: IMAGES.stayReturn,
    detailImages: [IMAGES.spare5, IMAGES.road2],
  },
];

export function getStay(slug: string): Stay | undefined {
  return STAYS.find((s) => s.slug === slug);
}