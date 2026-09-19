export interface GalleryEntry {
  image: string;
  caption: string;
}

/**
 * The gallery is a sequence, not a grid of cards — captions are quiet,
 * like the labels on a herbarium sheet.
 */
export const GALLERY: GalleryEntry[] = [
  { image: "hero", caption: "The understory at first light" },
  { image: "canopy", caption: "The canopy, twenty metres up" },
  { image: "fern", caption: "Tree ferns, the middle layer" },
  { image: "moss", caption: "The forest floor, after rain" },
  { image: "fig", caption: "The big figs, over the Fig Room" },
  { image: "bamboo", caption: "The bamboo, in the wind" },
  { image: "waterfall", caption: "The falls, on the way down" },
  { image: "coffee", caption: "The coffee, on the road" },
  { image: "path", caption: "The morning trail" },
  { image: "hornbill", caption: "A Malabar pied hornbill" },
  { image: "panorama", caption: "The hills, from the veranda" },
  { image: "table", caption: "The table, one seating" },
];
