import { IMAGES, type ImageEntry } from "./images";

export interface ArchiveItem {
  image: ImageEntry;
  caption: string;
  place: string;
}

/** The Archive — a gallery of the house's frames. */
export const ARCHIVE = {
  label: "The Archive",
  title: "A gallery of frames",
  intro:
    "The archive is the gallery of frames, kept by the house. The reels, the stills, the titles, the light. A gallery of the house's frames, kept by the family and open to the people who come to stay.",
  timecode: "TC 00:05:00:00",
  items: [
    { image: IMAGES.archive1, caption: "The reel, in the light", place: "The projection" },
    { image: IMAGES.archive2, caption: "The still, in the dark", place: "The archive" },
    { image: IMAGES.archive3, caption: "The title card", place: "The house" },
    { image: IMAGES.archive4, caption: "The frame, in the light", place: "The projection" },
    { image: IMAGES.archive5, caption: "The reel, in the dark", place: "The archive" },
    { image: IMAGES.archive6, caption: "The still, in the light", place: "The house" },
  ] as ArchiveItem[],
};
