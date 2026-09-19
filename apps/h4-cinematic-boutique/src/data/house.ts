import { IMAGES } from "./images";

/** The House — the story of the house. */
export const HOUSE = {
  label: "The House",
  title: "A house, kept",
  intro:
    "Nocturne is a house in the old film district of Mumbai, kept since 1962. It is not a hotel that was built to look like a cinema — it is a house that has been keeping the night, and the house now opens it to the people who come to stay.",
  timecode: "TC 00:01:00:00",
  heroImage: IMAGES.house,
  sections: [
    {
      heading: "What the house is",
      body: "Nocturne is a house. In the old film district, the houses are the old family homes of the city — the buildings with the dark windows, the warm lights, the quiet streets. They were built to be kept, and the best of them still are. Nocturne is one of them.",
      image: IMAGES.house2,
    },
    {
      heading: "How it is kept",
      body: "The house is kept the way it was kept — by the family, with the same lights, the same books, the same screens. The night comes in all evening, the city comes to the street, and the guests are received the way they were received. Nothing is added, and nothing is taken away.",
      image: IMAGES.house3,
    },
    {
      heading: "What it is not",
      body: "Nocturne is not a resort, and it is not a boutique hotel. It is a house, kept. There is no pool, no spa, no lobby. There is a bar, a projection, an archive, and the night. That is the whole of it, and it is enough.",
      image: IMAGES.hotelNight,
    },
  ],
};
