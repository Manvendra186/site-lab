import { IMAGES, type ImageEntry } from "./images";

export interface TableSection {
  heading: string;
  body: string;
  image: ImageEntry;
}

/** The Table — the food, set in the cold. */
export const TABLE = {
  label: "The Table",
  title: "Set in the cold",
  intro:
    "The table is set in the cold. The menu is short and it changes with the day. The food is the food — the high-altitude kitchen, the thali, the light coming in low.",
  waypoint: "Stage 06",
  heroImage: IMAGES.table,
  sections: [
    {
      heading: "What is set",
      body: "The table is set with the food of the high country — the thali, the bread, the tea. The menu is short and it changes with the day. The food is the food, and the light is the light.",
      image: IMAGES.table2,
    },
    {
      heading: "How it is set",
      body: "The table is set the way it was set — by the family, with the same plates, the same cups, the same light. The food comes in all day, the cold comes to the pass, and the guests are received the way they were received.",
      image: IMAGES.table3,
    },
    {
      heading: "What it is not",
      body: "The table is not a restaurant, and it is not a café. It is a table, set. There is no menu, no wine list, no service. There is the food, the light, and the cold. That is the whole of it, and it is enough.",
      image: IMAGES.table,
    },
  ] as TableSection[],
};