import { IMAGES, type ImageEntry } from "./images";

export interface RouteMoment {
  time: string;
  title: string;
  body: string;
  image: ImageEntry;
}

/** A Route — the rhythm of a stay, from the first stage to the last. */
export const ROUTE = {
  label: "A Route",
  title: "The rhythm of a stay",
  intro:
    "A day at the house is the rhythm of a stay. The road comes in, the cold comes to the pass, and the house keeps the light. This is the rhythm, from the first stage to the last.",
  waypoint: "Stage 06",
  moments: [
    {
      time: "07:00",
      title: "The approach",
      body: "The day begins. The road is coming in, the light is slow, and the house is keeping the cold.",
      image: IMAGES.route1,
    },
    {
      time: "09:00",
      title: "The pass",
      body: "The road climbs. The light comes in off the cold, and the pass is the pass.",
      image: IMAGES.route2,
    },
    {
      time: "12:00",
      title: "The table",
      body: "The table is set. The food is the food, the light is the light, and the cold is the cold.",
      image: IMAGES.route3,
    },
    {
      time: "15:00",
      title: "The lake",
      body: "The road comes to the lake. The water comes in cold and slow, and the stillness is the stillness.",
      image: IMAGES.road3,
    },
    {
      time: "18:00",
      title: "The return",
      body: "The journey comes back. The road comes back through the glass, and the house is keeping the light.",
      image: IMAGES.road2,
    },
  ] as RouteMoment[],
};