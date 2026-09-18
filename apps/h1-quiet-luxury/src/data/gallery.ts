export interface GalleryEntry {
  image: string;
  caption: string;
}

/** The gallery is a sequence, not a grid of cards — captions are quiet. */
export const GALLERY: GalleryEntry[] = [
  { image: "hero", caption: "The lake at first light" },
  { image: "palace", caption: "The City Palace, across the water" },
  { image: "room-lake", caption: "The Lake Room, made for the day" },
  { image: "jagmandir", caption: "Jagmandir, on its island" },
  { image: "garden", caption: "Morning in the garden" },
  { image: "bath-stone", caption: "The stone bath, Courtyard Suite" },
  { image: "chai", caption: "Chai, the local way" },
  { image: "lake-palace", caption: "The Lake Palace, midday" },
  { image: "pool", caption: "The pool, before the day starts" },
  { image: "monsoon", caption: "Monsoon on the water" },
  { image: "evening", caption: "Udaipur, evening" },
  { image: "garden-palm", caption: "Light on the palm" },
];
