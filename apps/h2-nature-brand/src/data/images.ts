export interface ImageEntry {
  url: string;
  alt: string;
  credit: string;
  license: string;
}

/**
 * Every image is a verified CC-licensed photo (Flickr / Wikimedia Commons).
 * Credit + license are required by the license and are rendered in the footer.
 * All URLs returned 200 image/jpeg on 2026-09-19 (see docs/assets/H2.md).
 */
export const IMAGES: Record<string, ImageEntry> = {
  hero: {
    url: "https://live.staticflickr.com/65535/53129125541_098b2643e9_b.jpg",
    alt: "Mist drifting through a dense evergreen forest at first light",
    credit: "solarisgirl",
    license: "CC BY-SA",
  },
  mist: {
    url: "https://live.staticflickr.com/65535/53129537920_c6f066edbc_b.jpg",
    alt: "Low mist rolling between dark green tree trunks",
    credit: "solarisgirl",
    license: "CC BY-SA",
  },
  acorn: {
    url: "https://live.staticflickr.com/3523/3464926161_901ed9dee2_b.jpg",
    alt: "A single acorn on the mossy forest floor",
    credit: "Manoj Kengudelu",
    license: "CC BY",
  },
  bliss: {
    url: "https://live.staticflickr.com/3571/3438907648_371c0502f0_b.jpg",
    alt: "Green forest canopy seen from below, light filtering through",
    credit: "nevervoidphotography",
    license: "CC BY-NC",
  },
  hikers: {
    url: "https://live.staticflickr.com/65535/53128536887_441d6d3f4a_b.jpg",
    alt: "Two hikers on a trail through a misty evergreen forest",
    credit: "solarisgirl",
    license: "CC BY-SA",
  },
  canopy: {
    url: "https://live.staticflickr.com/7285/8742280067_41abfce384_b.jpg",
    alt: "Tall forest canopy with light turning over the leaves",
    credit: "Nicholas_T",
    license: "CC BY",
  },
  "canopy-2": {
    url: "https://live.staticflickr.com/7238/7359946398_6b0172f83d_b.jpg",
    alt: "Dense green canopy, leaves layered in the light",
    credit: "Nicholas_T",
    license: "CC BY",
  },
  "canopy-3": {
    url: "https://live.staticflickr.com/2454/4102003865_3164f64a04_b.jpg",
    alt: "Looking up through a tall, layered forest canopy",
    credit: "terry.1953",
    license: "CC BY-ND",
  },
  fern: {
    url: "https://live.staticflickr.com/1702/26010000172_b0f6c32be2_b.jpg",
    alt: "Giant tree ferns unfurling in the understory",
    credit: "#ODF",
    license: "CC BY",
  },
  "fern-2": {
    url: "https://live.staticflickr.com/2027/2213398937_1d41bd1d3a_b.jpg",
    alt: "A rainforest fern frond, wet and vivid green",
    credit: "robstephaustralia",
    license: "CC BY",
  },
  "fern-3": {
    url: "https://live.staticflickr.com/65535/48532456756_c7b46d71fe_b.jpg",
    alt: "Fern fronds layered in soft green light",
    credit: "Poytr",
    license: "CC BY-NC",
  },
  moss: {
    url: "https://live.staticflickr.com/7309/11237986645_f089000040_b.jpg",
    alt: "Moss spores on the dark forest floor",
    credit: "Moose Winans",
    license: "CC BY-NC",
  },
  "moss-2": {
    url: "https://live.staticflickr.com/8237/8521054137_336c7848cb.jpg",
    alt: "A tree trunk clothed in wet green moss",
    credit: "zoomyboy.com",
    license: "CC BY-NC",
  },
  "moss-3": {
    url: "https://live.staticflickr.com/2674/3884734510_5b14e92fb5_b.jpg",
    alt: "Moss and lichen on a shaded forest rock",
    credit: "Martin Cathrae",
    license: "CC BY-SA",
  },
  bamboo: {
    url: "https://live.staticflickr.com/8178/7988632041_d03b5c209b_b.jpg",
    alt: "A quiet stand of bamboo, simple and vertical",
    credit: "JFXie",
    license: "CC BY",
  },
  "bamboo-2": {
    url: "https://live.staticflickr.com/7573/16234698106_4888bffaab_b.jpg",
    alt: "A bamboo forest, stalks rising out of frame",
    credit: "Joe Parks",
    license: "CC BY-NC",
  },
  "bamboo-3": {
    url: "https://live.staticflickr.com/2763/4537297458_65e8a60049_b.jpg",
    alt: "Bamboo culms and leaves in dappled light",
    credit: "PhBasumata",
    license: "CC BY-SA",
  },
  waterfall: {
    url: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Dudhsagar_Waterfall%2C_India.jpg",
    alt: "A wide waterfall pouring over dark rock in the Western Ghats",
    credit: "Hemant.4611f77",
    license: "CC0",
  },
  "waterfall-2": {
    url: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Waterfall%2C_India_DSCN5097.JPG",
    alt: "A forest waterfall in India, mist at its base",
    credit: "Sukanta Pal",
    license: "CC BY-SA",
  },
  "waterfall-3": {
    url: "https://live.staticflickr.com/5816/22529783894_e2c8f15d88_b.jpg",
    alt: "A slender waterfall threading through green foliage",
    credit: "Szfery",
    license: "CC BY-NC",
  },
  coffee: {
    url: "https://live.staticflickr.com/41/105208286_efe90a148f_b.jpg",
    alt: "A coffee plantation in Karnataka, rows of red-berried bushes",
    credit: "jo.in.pink",
    license: "CC BY",
  },
  "coffee-2": {
    url: "https://live.staticflickr.com/7397/8795695625_aaee0438c4_b.jpg",
    alt: "Coffee shrubs in a shaded hillside plantation",
    credit: "mckaysavage",
    license: "CC BY",
  },
  fig: {
    url: "https://live.staticflickr.com/133/376422514_092b53cf7e_b.jpg",
    alt: "A banyan tree with hanging aerial roots",
    credit: "mckaysavage",
    license: "CC BY",
  },
  "fig-2": {
    url: "https://live.staticflickr.com/3069/2798679001_463a9c98a0_b.jpg",
    alt: "The great banyan, a wide green canopy of roots and leaves",
    credit: "mckaysavage",
    license: "CC BY",
  },
  "fig-3": {
    url: "https://live.staticflickr.com/2086/2525792447_17b0d02f8d.jpg",
    alt: "A fig tree in a garden, light on the leaves",
    credit: "Koshyk",
    license: "CC BY",
  },
  panorama: {
    url: "https://live.staticflickr.com/6127/5928489696_7dd3af1126_b.jpg",
    alt: "A wide panorama of misty green hills in Munnar",
    credit: "FullofTravel",
    license: "CC BY",
  },
  shola: {
    url: "https://live.staticflickr.com/3189/2635903608_a038e85b0d_b.jpg",
    alt: "Shola grasslands and forest patches on a hillside",
    credit: "wildxplorer",
    license: "CC BY",
  },
  wilson: {
    url: "https://live.staticflickr.com/1235/1152021848_8cfe58b43d_b.jpg",
    alt: "A monsoon panorama over Wilson Hill, green and clouded",
    credit: "nevil zaveri",
    license: "CC BY",
  },
  "tea-mist": {
    url: "https://live.staticflickr.com/5124/5224428014_f64ca3f3a5_b.jpg",
    alt: "Mist over a green hillside plantation",
    credit: "FullofTravel",
    license: "CC BY",
  },
  path: {
    url: "https://live.staticflickr.com/2583/3772968946_3fd9515ee4_b.jpg",
    alt: "A forest path curving between tall trees",
    credit: "Yixler",
    license: "CC BY",
  },
  "path-2": {
    url: "https://live.staticflickr.com/7428/13959130744_0e27a99b70_b.jpg",
    alt: "A quiet path through a dense forest",
    credit: "*rboed*",
    license: "CC BY",
  },
  "path-3": {
    url: "https://live.staticflickr.com/2405/2412337543_b20e3194e5_b.jpg",
    alt: "A leafy trail through the undergrowth",
    credit: "blue_quartz",
    license: "CC BY-SA",
  },
  bird: {
    url: "https://live.staticflickr.com/7236/7340883078_1deb50c118_b.jpg",
    alt: "A blue jay perched on a branch",
    credit: "VinothChandar",
    license: "CC BY",
  },
  "bird-2": {
    url: "https://live.staticflickr.com/7035/6666039571_2044e15d79_b.jpg",
    alt: "A green bee-eater on a bare twig",
    credit: "VinothChandar",
    license: "CC BY",
  },
  hornbill: {
    url: "https://live.staticflickr.com/65535/52752685130_367a045466_b.jpg",
    alt: "A Malabar pied hornbill in flight",
    credit: "Hari K Patibanda",
    license: "CC BY-NC",
  },
  "room-fern": {
    url: "https://live.staticflickr.com/3758/10233446656_834567f5c6_b.jpg",
    alt: "A wood-themed bedroom with a low bed and warm light",
    credit: "LifeInMegapixels",
    license: "CC BY-NC-SA",
  },
  "room-2": {
    url: "https://live.staticflickr.com/3724/10656909925_862077c842_b.jpg",
    alt: "A calm bedroom interior with linen and soft daylight",
    credit: "shalommama",
    license: "CC BY",
  },
  "room-3": {
    url: "https://live.staticflickr.com/5553/14984774798_fa533840cb_b.jpg",
    alt: "A cabin bedroom with a simple bed and timber walls",
    credit: "vastateparksstaff",
    license: "CC BY",
  },
  "room-4": {
    url: "https://live.staticflickr.com/65535/52632552808_f5e8ebfd08_b.jpg",
    alt: "A hotel room bed dressed in plain linen",
    credit: "Thomas Hawk",
    license: "CC BY-NC",
  },
  "room-5": {
    url: "https://live.staticflickr.com/6146/5976795574_f860ce1a55_b.jpg",
    alt: "A quiet hotel room with a made bed and a window",
    credit: "cdsessums",
    license: "CC BY-SA",
  },
  table: {
    url: "https://live.staticflickr.com/1320/1408305261_c21a402c9e_b.jpg",
    alt: "A wooden dining table set for dinner",
    credit: "blmurch",
    license: "CC BY",
  },
  "table-2": {
    url: "https://live.staticflickr.com/3562/3379995693_33a488895b_b.jpg",
    alt: "A wood dining table set with plates and glassware",
    credit: "jjkadaba69",
    license: "CC BY",
  },
};

export function image(key: string): ImageEntry {
  const img = IMAGES[key];
  if (!img) throw new Error(`Unknown image: ${key}`);
  return img;
}

/** Unique photo credits, for the footer attribution line. */
export function credits(): { credit: string; license: string }[] {
  const seen = new Map<string, string>();
  for (const img of Object.values(IMAGES)) {
    if (!seen.has(img.credit)) seen.set(img.credit, img.license);
  }
  return Array.from(seen, ([credit, license]) => ({ credit, license }));
}
