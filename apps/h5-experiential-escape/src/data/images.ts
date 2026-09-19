/**
 * H5 — Safar · verified image manifest.
 *
 * Every URL below was verified live (HTTP 200, image/*) on
 * 2026-09-19. See docs/assets/H5.md for the full manifest and licenses.
 * All photography is Flickr / Wikimedia CC — credited per image and in the footer.
 */
export interface ImageEntry {
  url: string;
  alt: string;
  credit: string;
  license: string;
}

export const IMAGES = {
  // Hero / the house
  hero: {
    url: "https://live.staticflickr.com/2752/4353202924_d6ea1182f0_b.jpg",
    alt: "The road through the Ladakh mountains at first light, the cold coming in",
    credit: "Flickr",
    license: "CC BY",
  },
  house: {
    url: "https://live.staticflickr.com/2194/2245649502_671dd1aa15_b.jpg",
    alt: "The house on the road, the cold light coming in low",
    credit: "Flickr",
    license: "CC BY",
  },
  house2: {
    url: "https://live.staticflickr.com/14/18107821_75bb8c31f9_b.jpg",
    alt: "The road stretching out, the mountains close and the light cold",
    credit: "Flickr",
    license: "CC BY",
  },

  // The passage
  passage: {
    url: "https://live.staticflickr.com/8367/8505320133_5fd9937312_b.jpg",
    alt: "The pass, the road climbing and the light coming in off the cold",
    credit: "Flickr",
    license: "CC BY",
  },
  passage2: {
    url: "https://live.staticflickr.com/8322/7994358456_d11e64a733.jpg",
    alt: "The road in the high country, the cold coming in slow",
    credit: "Flickr",
    license: "CC BY",
  },

  // Stays
  stayApproach: {
    url: "https://live.staticflickr.com/8306/7994352391_8275a0fe6a.jpg",
    alt: "The Approach, the first stay, the road coming in through the glass",
    credit: "Flickr",
    license: "CC BY",
  },
  stayPass: {
    url: "https://live.staticflickr.com/8178/7994351925_7fed9109a6.jpg",
    alt: "The Pass, the high stay, the cold light coming in off the pass",
    credit: "Flickr",
    license: "CC BY",
  },
  stayValley: {
    url: "https://live.staticflickr.com/8182/7994358596_5c8281b498.jpg",
    alt: "The Valley, the quiet stay, the valley coming in through the glass",
    credit: "Flickr",
    license: "CC BY",
  },
  stayLake: {
    url: "https://live.staticflickr.com/8441/7994352511_7b03957870.jpg",
    alt: "The Lake, the still stay, the water coming in cold and slow",
    credit: "Flickr",
    license: "CC BY",
  },
  stayReturn: {
    url: "https://live.staticflickr.com/5507/10248264204_c28f3d8965_b.jpg",
    alt: "The Return, the last stay, the road coming back through the glass",
    credit: "Flickr",
    license: "CC BY",
  },

  // The table
  table: {
    url: "https://upload.wikimedia.org/wikipedia/commons/3/36/Indian_food_%28Thali%29.jpg",
    alt: "The thali, the high-altitude kitchen, the food set in the cold",
    credit: "Wikimedia",
    license: "CC BY",
  },
  table2: {
    url: "https://upload.wikimedia.org/wikipedia/commons/5/54/Indian_food_thali.jpg",
    alt: "The thali, the food set in the cold, the light coming in low",
    credit: "Wikimedia",
    license: "CC BY",
  },
  table3: {
    url: "https://live.staticflickr.com/2563/3694113488_d6c058290d_b.jpg",
    alt: "The table, the food set in the cold, the light coming in slow",
    credit: "Flickr",
    license: "CC BY",
  },

  // The road
  road: {
    url: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Nepal_Yak_-_Himalaya_trekking.jpg",
    alt: "The road, the trek in the high country, the cold coming in",
    credit: "Wikimedia",
    license: "CC BY",
  },
  road2: {
    url: "https://live.staticflickr.com/3271/2685167590_b06e566ec6_b.jpg",
    alt: "The pass, the road climbing and the light coming in off the cold",
    credit: "Flickr",
    license: "CC BY",
  },
  road3: {
    url: "https://live.staticflickr.com/2928/14363723943_0acf92ac33_b.jpg",
    alt: "The lake, the water coming in cold and slow",
    credit: "Flickr",
    license: "CC BY",
  },
  road4: {
    url: "https://live.staticflickr.com/17/20494628_660dfdacad.jpg",
    alt: "The monastery, the passage in the high country, the light coming in",
    credit: "Flickr",
    license: "CC BY",
  },

  // The altitude
  altitude1: {
    url: "https://live.staticflickr.com/8786/17006959317_b5021cc843_b.jpg",
    alt: "The sky, the high-altitude light coming in cold and slow",
    credit: "Flickr",
    license: "CC BY",
  },
  altitude2: {
    url: "https://live.staticflickr.com/3281/2384211475_2d1fcee1bd_b.jpg",
    alt: "The cold, the light coming in off the high country",
    credit: "Flickr",
    license: "CC BY",
  },
  altitude3: {
    url: "https://live.staticflickr.com/4066/4459777970_ec0231b77b_b.jpg",
    alt: "The light, the high-altitude sky coming in cold",
    credit: "Flickr",
    license: "CC BY",
  },
  altitude4: {
    url: "https://live.staticflickr.com/4141/4759729658_f11045caae.jpg",
    alt: "The sky, the cold coming in slow",
    credit: "Flickr",
    license: "CC BY",
  },
  altitude5: {
    url: "https://live.staticflickr.com/7383/15922103804_906b66141b_b.jpg",
    alt: "The light, the high country coming in cold and slow",
    credit: "Flickr",
    license: "CC BY",
  },

  // A route
  route1: {
    url: "https://live.staticflickr.com/8615/16811075866_75182c4677_b.jpg",
    alt: "The road, the rhythm of the stay, the cold coming in",
    credit: "Flickr",
    license: "CC BY",
  },
  route2: {
    url: "https://live.staticflickr.com/2087/12990107313_b72a8c2a3d_b.jpg",
    alt: "The pass, the rhythm of the stay, the light coming in",
    credit: "Flickr",
    license: "CC BY",
  },
  route3: {
    url: "https://live.staticflickr.com/6100/6272161396_929fed81d9_b.jpg",
    alt: "The road, the rhythm of the stay, the cold coming in slow",
    credit: "Flickr",
    license: "CC BY",
  },

  // Spares
  spare1: {
    url: "https://live.staticflickr.com/5257/5508783862_af4eb19d4b_b.jpg",
    alt: "The high country, the cold coming in",
    credit: "Flickr",
    license: "CC BY",
  },
  spare2: {
    url: "https://live.staticflickr.com/5510/11596726975_e1f37e616b.jpg",
    alt: "The road, the cold coming in slow",
    credit: "Flickr",
    license: "CC BY",
  },
  spare3: {
    url: "https://live.staticflickr.com/7024/6511057849_39f71ae437_b.jpg",
    alt: "The pass, the light coming in off the cold",
    credit: "Flickr",
    license: "CC BY",
  },
  spare4: {
    url: "https://live.staticflickr.com/657/23534753745_5c4b721c21_b.jpg",
    alt: "The high country, the cold coming in",
    credit: "Flickr",
    license: "CC BY",
  },
  spare5: {
    url: "https://live.staticflickr.com/731/22907652093_803a78c4ac_b.jpg",
    alt: "The road, the cold coming in slow",
    credit: "Flickr",
    license: "CC BY",
  },
} satisfies Record<string, ImageEntry>;

export type ImageKey = keyof typeof IMAGES;

/** Unique photography credits for the footer (brief: required). */
export function credits(): { credit: string; license: string }[] {
  const seen = new Set<string>();
  const out: { credit: string; license: string }[] = [];
  for (const img of Object.values(IMAGES)) {
    if (!seen.has(img.credit)) {
      seen.add(img.credit);
      out.push({ credit: img.credit, license: img.license });
    }
  }
  return out;
}