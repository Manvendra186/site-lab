import { IMAGES, type ImageEntry } from "./images";

export interface AltitudeImage {
  image: ImageEntry;
  caption: string;
}

/** The Altitude — the gallery, the high-altitude light. */
export const ALTITUDE = {
  label: "The Altitude",
  title: "The high-altitude light",
  intro:
    "The altitude is the light. The high-altitude sky comes in cold and slow, and the cold comes to the pass. This is the light, from the first stage to the last.",
  waypoint: "Stage 06",
  images: [
    {
      image: IMAGES.altitude1,
      caption: "The sky, the high-altitude light coming in cold and slow",
    },
    {
      image: IMAGES.altitude2,
      caption: "The cold, the light coming in off the high country",
    },
    {
      image: IMAGES.altitude3,
      caption: "The light, the high-altitude sky coming in cold",
    },
    {
      image: IMAGES.altitude4,
      caption: "The sky, the cold coming in slow",
    },
    {
      image: IMAGES.altitude5,
      caption: "The light, the high country coming in cold and slow",
    },
  ] as AltitudeImage[],
};