import { IMAGES } from "./images";

/** Home page content. */
export const HOME = {
  heroLabel: "Mumbai · the old film district",
  heroTitle: "The night is the brand.",
  heroIntro:
    "Nocturne is a twelve-room house in the old film district of Mumbai. The night comes in all evening, the city comes to the street, and the guests are received the way they were received.",
  timecode: "TC 00:00:00:00",

  houseLabel: "The house",
  houseTitle: "A house, kept",
  houseBody: [
    "Nocturne is a house — the old family home of the film district, with the dark windows, the warm lights, the quiet streets. It was built to be kept, and it has been kept, by one family, since 1962.",
    "The family now opens it to the people who come to stay. Nothing is added, and nothing is taken away. The night comes in all evening, the city comes to the street, and the guests are received the way they were received.",
  ],
  houseImage: IMAGES.house,

  facts: [
    { value: "12", label: "Rooms" },
    { value: "1", label: "Cinema" },
    { value: "1", label: "Bar" },
    { value: "1962", label: "Kept since" },
  ],

  manifesto:
    "A house is not a hotel that was built to look like a cinema. It is a house that has been keeping the night. That is the whole of it, and it is enough.",

  visitLabel: "Visit",
  visitTitle: "Come and stay",
  visitBody:
    "The house is open to the people who come to stay. Rates include breakfast and one screening — a private showing in the house's cinema. Tell us when you would like to come, and we will do the rest.",
};

/** Reserve page content. */
export const RESERVE = {
  label: "Reserve",
  title: "Come and stay",
  intro:
    "Tell us when you would like to come, and which room you would like. We will do the rest, and we will reply within one working day.",
  timecode: "TC 00:07:00:00",
  details: {
    hours: "Check-in from 2 pm, check-out by 12 noon.",
    address: "The old film district, off the old bazaar lane, Fort, Mumbai 400001.",
  },
  demoNote:
    "This is a demonstration. Nothing is sent or stored — for a real stay we would reply within one working day.",
  reach: [
    {
      title: "By air",
      body: "Mumbai (BOM) is the nearest airport, about forty minutes by road. We can arrange a car.",
    },
    {
      title: "By rail",
      body: "Mumbai Central is on the main line. The house is a short walk from the station.",
    },
    {
      title: "The screening",
      body: "Included with every stay — a private showing in the house's cinema, at a time that suits you.",
    },
    {
      title: "The bar",
      body: "Set in the dark. The menu is short and it changes with the night. Tell us if you have a preference.",
    },
  ],
};
