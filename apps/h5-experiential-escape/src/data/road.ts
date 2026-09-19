import { IMAGES, type ImageEntry } from "./images";

export interface RoadSection {
  heading: string;
  body: string;
  image: ImageEntry;
}

/** The Road — the experiences, the passage of the road. */
export const ROAD = {
  label: "The Road",
  title: "The passage of the road",
  intro:
    "The road is the brand. Every stay includes one passage — a guided walk of the road, the pass, or the lake. The road comes in all day, the cold comes to the pass, and the guests are received the way they were received.",
  waypoint: "Stage 06",
  heroImage: IMAGES.road,
  sections: [
    {
      heading: "The road",
      body: "The road is the road. It climbs and it comes down, and the light comes in off the cold. The passage is a guided walk of the road, at a time that suits you. The road is the point.",
      image: IMAGES.road2,
    },
    {
      heading: "The pass",
      body: "The pass is the pass. It is the high point of the journey, and the light comes in off the cold. The passage is a guided walk of the pass, at a time that suits you. The pass is the point.",
      image: IMAGES.road4,
    },
    {
      heading: "The lake",
      body: "The lake is the lake. It is the stillness of the journey, and the water comes in cold and slow. The passage is a guided walk of the lake, at a time that suits you. The lake is the point.",
      image: IMAGES.road3,
    },
  ] as RoadSection[],
};