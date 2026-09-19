export interface ImageEntry {
  url: string;
  alt: string;
  credit: string;
  license: string;
}

/**
 * Every image is a verified CC-licensed photo (Flickr / Wikimedia Commons / Rawpixel).
 * Credit + license are required by the license and are rendered in the footer.
 * All URLs returned 200 image/jpeg on 2026-09-19 (see docs/assets/H3.md).
 */
export const IMAGES: Record<string, ImageEntry> = {
  hero: {
    url: "https://live.staticflickr.com/5304/5562366902_debb1365c7_b.jpg",
    alt: "A golden sandstone haveli facade in Jaisalmer at first light",
    credit: "ruffin_ready",
    license: "CC BY",
  },
  haveli: {
    url: "https://live.staticflickr.com/8463/8371568700_a814875b8a_b.jpg",
    alt: "Carved sandstone havelis rising in the golden city of Jaisalmer",
    credit: "michimaya",
    license: "CC BY",
  },
  "haveli-2": {
    url: "https://upload.wikimedia.org/wikipedia/commons/3/32/Jaisalmer_haveli_%285562366902%29.jpg",
    alt: "The ornate facade of a Jaisalmer haveli in warm sandstone",
    credit: "Ryan from Toronto",
    license: "CC BY",
  },
  fort: {
    url: "https://live.staticflickr.com/7183/6992366523_25f267cf91_b.jpg",
    alt: "Jaisalmer Fort, the Sonar Quila, glowing gold in the light",
    credit: "Koshyk",
    license: "CC BY",
  },
  "fort-2": {
    url: "https://live.staticflickr.com/6034/6271487951_89aaf46f25_b.jpg",
    alt: "The ramparts and towers of Jaisalmer Fort",
    credit: "Arian Zwegers",
    license: "CC BY",
  },
  serai: {
    url: "https://live.staticflickr.com/7502/16186037026_c2f0ef03c1_b.jpg",
    alt: "A carved sandstone serai inside the Jaisalmer fort",
    credit: "BOMBMAN",
    license: "CC BY",
  },
  golden: {
    url: "https://live.staticflickr.com/79/248290824_066abdfb51_b.jpg",
    alt: "Jaisalmer, the Golden City, in warm evening light",
    credit: "Peter Garnhum",
    license: "CC BY-NC",
  },
  peacock: {
    url: "https://live.staticflickr.com/7095/7006171106_dd731fc8ac_b.jpg",
    alt: "A peacock standing in the courtyard of a haveli",
    credit: "mejane8",
    license: "CC BY",
  },
  "peacock-2": {
    url: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Peacock_india.jpg",
    alt: "A peacock with its train spread, in India",
    credit: "NIMESH DUSRA",
    license: "CC BY-SA",
  },
  "peacock-3": {
    url: "https://live.staticflickr.com/90/231011405_880600e742_b.jpg",
    alt: "A dancing peacock, its feathers catching the light",
    credit: "Hamed Saber",
    license: "CC BY",
  },
  "peacock-feather": {
    url: "https://live.staticflickr.com/3334/5713153539_ebb08d6e86_b.jpg",
    alt: "A close view of a peacock feather, blue and gold",
    credit: "socialspice.de",
    license: "CC BY",
  },
  jharokha: {
    url: "https://live.staticflickr.com/2375/2279953685_586080b6d8_b.jpg",
    alt: "Carved jharokha windows of the Patwon-ki-Haveli, Jaisalmer",
    credit: "twiga_swala",
    license: "CC BY-SA",
  },
  "hawa-mahal": {
    url: "https://live.staticflickr.com/6032/6271685549_bd0c7f7eea_b.jpg",
    alt: "The honeycomb of windows on the Hawa Mahal, Jaipur",
    credit: "Arian Zwegers",
    license: "CC BY",
  },
  "hawa-mahal-2": {
    url: "https://live.staticflickr.com/71/195387570_6b77770a9d.jpg",
    alt: "The layered windows of the Hawa Mahal in warm light",
    credit: "BOMBMAN",
    license: "CC BY",
  },
  courtyard: {
    url: "https://live.staticflickr.com/1165/1036338121_bc3f650284_b.jpg",
    alt: "A shaded inner courtyard of a Rajasthani haveli",
    credit: "mckaysavage",
    license: "CC BY",
  },
  patwa: {
    url: "https://live.staticflickr.com/2866/13746740683_6be29e3b66_b.jpg",
    alt: "A carved interior wall of the Patwa Haveli, Jaisalmer",
    credit: "lemniscate.io",
    license: "CC BY-NC-ND",
  },
  desert: {
    url: "https://live.staticflickr.com/65535/49259865602_d903117b76_b.jpg",
    alt: "The dunes of the Thar Desert near Jaisalmer",
    credit: "Ninara",
    license: "CC BY",
  },
  "desert-2": {
    url: "https://live.staticflickr.com/65535/49259180718_0092a067c7_b.jpg",
    alt: "Soft dunes of the Thar Desert at low light",
    credit: "Ninara",
    license: "CC BY",
  },
  "room-durbar": {
    url: "https://live.staticflickr.com/7212/7299561956_9781d57d1e_b.jpg",
    alt: "A stately heritage suite with a low bed and warm light",
    credit: "Tara Angkor Hotel",
    license: "CC BY",
  },
  "room-jharokha": {
    url: "https://live.staticflickr.com/7230/7299560894_d9f05867cd_b.jpg",
    alt: "A heritage suite facing a carved window, in soft daylight",
    credit: "Tara Angkor Hotel",
    license: "CC BY",
  },
  "room-peacock": {
    url: "https://live.staticflickr.com/4125/5087467704_3e552a358f_b.jpg",
    alt: "A calm heritage suite with linen and a reading chair",
    credit: "Studio Sarah Lou",
    license: "CC BY",
  },
  "room-courtyard": {
    url: "https://live.staticflickr.com/8710/16819198490_07b05bf4a4_b.jpg",
    alt: "A heritage suite with a made bed and a window onto the courtyard",
    credit: "travelmemo.com",
    license: "CC BY",
  },
  "room-sandstone": {
    url: "https://upload.wikimedia.org/wikipedia/commons/d/d7/H%C3%B4tel_Ch%C3%A2teau_Cran_Chaud_Chicoutimi_-_Suite_avec_lit_King.jpg",
    alt: "A heritage suite with a king bed and warm timber",
    credit: "Simonvezinatremblay",
    license: "CC0",
  },
  "room-extra": {
    url: "https://live.staticflickr.com/1154/4733056101_0d55a0a2ea_b.jpg",
    alt: "A quiet heritage room with a made bed and soft light",
    credit: "gnuckx",
    license: "CC0",
  },
  "room-extra-2": {
    url: "https://live.staticflickr.com/5343/17962466086_10dbd657db_b.jpg",
    alt: "A two-bedroom heritage suite with a low bed",
    credit: "SUPERADRIANME",
    license: "CC BY",
  },
  dining: {
    url: "https://live.staticflickr.com/5787/20475562720_a7cae577aa_b.jpg",
    alt: "A table set with Indian dishes, in warm light",
    credit: "Sean MacEntee",
    license: "CC BY",
  },
  "dining-2": {
    url: "https://live.staticflickr.com/1359/1427593980_64ed31427d_b.jpg",
    alt: "A dining room set for a long meal",
    credit: "markhillary",
    license: "CC BY",
  },
  "dining-3": {
    url: "https://images.rawpixel.com/editor_1024/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAyL2xyL2dldHR5MTA5ZGZjLWltYWdlLmpwZw.jpg",
    alt: "A palace dining room, set and lit for the evening",
    credit: "thegetty",
    license: "CC0",
  },
  "ledger-1": {
    url: "https://upload.wikimedia.org/wikipedia/commons/2/26/Jaisalmer%2C_India%2C_Jaisalmer_Fort%2C_Jain_Temple_Interior.jpg",
    alt: "The carved interior of a Jain temple inside Jaisalmer Fort",
    credit: "Vyacheslav Argenberg",
    license: "CC BY",
  },
  "ledger-2": {
    url: "https://live.staticflickr.com/7029/6457461583_b6ab4d41e0.jpg",
    alt: "The carved sandstone of Jaisalmer, in the light",
    credit: "nevil zaveri",
    license: "CC BY",
  },
  "ledger-3": {
    url: "https://live.staticflickr.com/65535/49249576878_7edb089a70_b.jpg",
    alt: "A carved archway inside Jaisalmer Fort",
    credit: "Ninara",
    license: "CC BY",
  },
  "ledger-4": {
    url: "https://live.staticflickr.com/65535/49250251117_53cb993b35_b.jpg",
    alt: "The carved walls of Jaisalmer Fort",
    credit: "Ninara",
    license: "CC BY",
  },
  "collection-1": {
    url: "https://live.staticflickr.com/65535/49249586413_03de34147b_b.jpg",
    alt: "A carved sandstone wall inside Jaisalmer Fort",
    credit: "Ninara",
    license: "CC BY",
  },
  "collection-2": {
    url: "https://live.staticflickr.com/7162/6574334423_eb6de9c49b.jpg",
    alt: "Reflections on the sandstone of Bikaner",
    credit: "nevil zaveri",
    license: "CC BY",
  },
  "collection-3": {
    url: "https://live.staticflickr.com/7013/6535503191_3e1e071e18.jpg",
    alt: "A row of carved arches in Bikaner",
    credit: "nevil zaveri",
    license: "CC BY",
  },
  "collection-4": {
    url: "https://live.staticflickr.com/1045/1060187328_9354919663_b.jpg",
    alt: "A courtyard in Udaipur, in warm light",
    credit: "mckaysavage",
    license: "CC BY",
  },
  "collection-5": {
    url: "https://live.staticflickr.com/7166/6474918341_ef47bb3883.jpg",
    alt: "A carved haveli in Jaisalmer",
    credit: "nevil zaveri",
    license: "CC BY",
  },
  "collection-6": {
    url: "https://live.staticflickr.com/7028/6476171919_e1f3e3697f.jpg",
    alt: "A window in a Jaisalmer haveli",
    credit: "nevil zaveri",
    license: "CC BY",
  },
  "collection-7": {
    url: "https://live.staticflickr.com/7190/6879682844_4c3d923668_b.jpg",
    alt: "Carved sandstone detail in Jaisalmer",
    credit: "nevil zaveri",
    license: "CC BY",
  },
  "collection-8": {
    url: "https://live.staticflickr.com/7177/6804963524_c4cc46e822_b.jpg",
    alt: "A carved wall in Jaisalmer",
    credit: "nevil zaveri",
    license: "CC BY",
  },
  "collection-9": {
    url: "https://live.staticflickr.com/7167/6469663473_7dcfa97f4b.jpg",
    alt: "A carved haveli facade in Jaisalmer",
    credit: "nevil zaveri",
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
