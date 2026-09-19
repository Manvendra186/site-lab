/**
 * H4 — Nocturne · verified image manifest.
 *
 * Every URL below was verified live (HTTP 200, image/*, ≥ 600px) on
 * 2026-09-19. See docs/assets/H4.md for the full manifest and licenses.
 * All photography is Flickr CC — credited per image and in the footer.
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
    url: "https://live.staticflickr.com/7764/18356808621_bc388cb90b_b.jpg",
    alt: "Mumbai at night, the city lights coming in through the dark",
    credit: "Vidur Malhotra",
    license: "CC PDM",
  },
  house: {
    url: "https://live.staticflickr.com/168/441517360_ff14d9ea8f_b.jpg",
    alt: "The house at night, the dark windows and the warm lights",
    credit: "Swami Stream",
    license: "CC BY",
  },
  house2: {
    url: "https://live.staticflickr.com/3331/3239559032_e1c44e5fbf_b.jpg",
    alt: "The quiet street, the warm light coming in low",
    credit: "Swami Stream",
    license: "CC BY",
  },
  house3: {
    url: "https://live.staticflickr.com/3178/2841127620_f4d522307e_b.jpg",
    alt: "The night coming in, the city close through the glass",
    credit: "souravdas",
    license: "CC BY",
  },
  hotelNight: {
    url: "https://live.staticflickr.com/146/441524823_bdbdc5f516_b.jpg",
    alt: "The house kept in the dark, the light coming in slow",
    credit: "Swami Stream",
    license: "CC BY",
  },

  // The projection
  projectorRoom: {
    url: "https://live.staticflickr.com/40/78471773_83c5eafa13_b.jpg",
    alt: "The projection room, the lights low and the screen coming up",
    credit: "Jace",
    license: "CC BY-NC-SA",
  },
  imaxProjector: {
    url: "https://live.staticflickr.com/4062/4315362107_7a97d2f5a9_b.jpg",
    alt: "The reel turning, the light coming in off the screen",
    credit: "William Hook",
    license: "CC BY-SA",
  },
  elginTalkies: {
    url: "https://live.staticflickr.com/3239/2615117767_11e82566e8_b.jpg",
    alt: "The first film, the title card in the light",
    credit: "lecercle",
    license: "CC BY-NC-SA",
  },
  fumeoProjector: {
    url: "https://live.staticflickr.com/4113/5041646591_7ee4579df9_b.jpg",
    alt: "The showing, the light coming in low and warm",
    credit: "tj.blackwell",
    license: "CC BY-NC",
  },

  // The bar
  bar: {
    url: "https://live.staticflickr.com/8150/7306688180_b9218a8c7c_b.jpg",
    alt: "The bar set in the dark, the light low and the drinks slow",
    credit: "Dave Catchpole",
    license: "CC BY",
  },
  bar2: {
    url: "https://live.staticflickr.com/7253/7747297998_bd55bd3557_b.jpg",
    alt: "The drink, the light coming in off the glass",
    credit: "Lori L. Stalteri",
    license: "CC BY",
  },
  bar3: {
    url: "https://live.staticflickr.com/3525/4054641125_e0fe8bdcdf.jpg",
    alt: "The bar kept, the same light and the same room",
    credit: "spiralcraft",
    license: "CC BY-NC",
  },
  bar4: {
    url: "https://live.staticflickr.com/2707/4055381694_7ec5343f7f.jpg",
    alt: "The night at the bar, the room warm before it is bright",
    credit: "spiralcraft",
    license: "CC BY-NC",
  },

  // Rooms
  roomLobby: {
    url: "https://live.staticflickr.com/3218/3006411015_fc6e4fde2e_b.jpg",
    alt: "The Lobby, the first frame, the street coming in through the glass",
    credit: "kotramif",
    license: "CC BY",
  },
  roomReel: {
    url: "https://live.staticflickr.com/4452/37818456796_0560e67a34_b.jpg",
    alt: "The Reel, by the courtyard, the light coming in broken and warm",
    credit: "James E. Petts",
    license: "CC BY-SA",
  },
  roomCut: {
    url: "https://live.staticflickr.com/3197/2341217120_2b8ba3ecba_b.jpg",
    alt: "The Cut, by the bar, the night cut and the room warm",
    credit: "Steve Spezz",
    license: "CC BY",
  },
  roomFade: {
    url: "https://live.staticflickr.com/4506/37609908340_65afcc7f71_b.jpg",
    alt: "The Fade, by the sea, the night fading and the light slow",
    credit: "James E. Petts",
    license: "CC BY-SA",
  },
  roomFrame: {
    url: "https://live.staticflickr.com/3485/3844003897_5c05cf21be_b.jpg",
    alt: "The Frame, with the view, the night framed and the city in the glass",
    credit: "thomas pix",
    license: "CC BY",
  },
  roomExtra: {
    url: "https://live.staticflickr.com/55/184461015_696dc2ae30_b.jpg",
    alt: "The room kept, the bed low and the linen heavy",
    credit: "mlaaker",
    license: "CC BY-NC-SA",
  },

  // A day
  rooftop: {
    url: "https://live.staticflickr.com/3170/2985854069_130539750a_b.jpg",
    alt: "The rooftop, the city coming in through the dark",
    credit: "alexbfree",
    license: "CC BY-NC-SA",
  },
  marineDrive: {
    url: "https://live.staticflickr.com/8104/8491802261_3f469bea0a_b.jpg",
    alt: "Marine Drive at night, the lights coming in slow",
    credit: "Flickr",
    license: "CC BY",
  },
  marineDrive2: {
    url: "https://live.staticflickr.com/2575/3709925915_9735d85d51_b.jpg",
    alt: "The sea at night, the light coming in off the water",
    credit: "AbhijeetRane",
    license: "CC BY",
  },
  seaLink: {
    url: "https://live.staticflickr.com/3376/3643805715_d406b563fa_b.jpg",
    alt: "The sea link, the city coming in through the glass",
    credit: "Amit K",
    license: "CC BY-SA",
  },
  seaFace: {
    url: "https://live.staticflickr.com/1396/536875365_f51bcf4e4f_b.jpg",
    alt: "The sea face, the night fading and the light slow",
    credit: "Swami Stream",
    license: "CC BY",
  },
  cityNight: {
    url: "https://live.staticflickr.com/2522/3769804042_7325f58e76_b.jpg",
    alt: "The city at night, the lights coming in through the dark",
    credit: "t3rmin4t0r",
    license: "CC BY",
  },
  mumbaiSprings: {
    url: "https://live.staticflickr.com/336/18154117490_cbab34bdc6_b.jpg",
    alt: "Mumbai in the night, the street coming in through the glass",
    credit: "Vidur Malhotra",
    license: "CC BY-SA",
  },

  // The archive
  archive1: {
    url: "https://live.staticflickr.com/2756/4316098828_037eb8788a_b.jpg",
    alt: "The reel, in the light",
    credit: "William Hook",
    license: "CC BY-SA",
  },
  archive2: {
    url: "https://live.staticflickr.com/4064/4316097118_bbbce16dd1_b.jpg",
    alt: "The still, in the dark",
    credit: "William Hook",
    license: "CC BY-SA",
  },
  archive3: {
    url: "https://live.staticflickr.com/7422/13668736373_39d525da45_b.jpg",
    alt: "The title card, in the light",
    credit: "Unhindered by Talent",
    license: "CC BY-SA",
  },
  archive4: {
    url: "https://live.staticflickr.com/2627/4106842721_69ef486b81_b.jpg",
    alt: "The frame, in the light",
    credit: "big-ashb",
    license: "CC BY",
  },
  archive5: {
    url: "https://live.staticflickr.com/7142/6662553005_5a12d15278_b.jpg",
    alt: "The reel, in the dark",
    credit: "Steve Snodgrass",
    license: "CC BY",
  },
  archive6: {
    url: "https://live.staticflickr.com/2931/14382343796_c4b2605e9b.jpg",
    alt: "The still, in the light",
    credit: "ToGa Wanderings",
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
