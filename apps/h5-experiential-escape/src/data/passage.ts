import { IMAGES, type ImageEntry } from "./images";

export interface PassageSection {
  heading: string;
  body: string;
  image: ImageEntry;
}

/** The Passage — the story of the house. */
export const PASSAGE = {
  label: "The Passage",
  title: "A house, kept",
  intro:
    "Safar is a house in the high country of Ladakh, kept since 1998. It is not a hotel that was built to look like a road — it is a house that has been keeping the passage, and the house now opens it to the people who come to stay.",
  waypoint: "Stage 00",
  heroImage: IMAGES.passage,
  sections: [
    {
      heading: "What the house is",
      body: "Safar is a house. In the high country, the houses are the old family homes of the road — the buildings with the cold windows, the warm lights, the quiet passes. They were built to be kept, and the best of them still are. Safar is one of them.",
      image: IMAGES.house,
    },
    {
      heading: "How it is kept",
      body: "The house is kept the way it was kept — by the family, with the same lights, the same books, the same road. The road comes in all day, the cold comes to the pass, and the guests are received the way they were received. Nothing is added, and nothing is taken away.",
      image: IMAGES.passage2,
    },
    {
      heading: "What it is not",
      body: "Safar is not a resort, and it is not a boutique hotel. It is a house, kept. There is no pool, no spa, no lobby. There is a table, a road, a pass, and the cold. That is the whole of it, and it is enough.",
      image: IMAGES.house2,
    },
  ] as PassageSection[],
};