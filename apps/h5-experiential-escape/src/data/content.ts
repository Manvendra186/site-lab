import { IMAGES } from "./images";

/** Home page content. */
export const HOME = {
  heroLabel: "Leh · the high country",
  heroTitle: "The road is the point.",
  heroIntro:
    "Safar is a five-stay house on the Leh road. The road comes in all day, the cold comes to the pass, and the guests are received the way they were received.",
  heroImage: IMAGES.hero,
  waypoint: "Stage 00",

  houseLabel: "The house",
  houseTitle: "A house, kept",
  houseBody: [
    "Safar is a house — the old family home of the Leh road, with the cold windows, the warm lights, the quiet passes. It was built to be kept, and it has been kept, by one family, since 1998.",
    "The family now opens it to the people who come to stay. Nothing is added, and nothing is taken away. The road comes in all day, the cold comes to the pass, and the guests are received the way they were received.",
  ],
  houseImage: IMAGES.house,

  facts: [
    { value: "5", label: "Stays" },
    { value: "1", label: "Road" },
    { value: "1", label: "Pass" },
    { value: "1998", label: "Kept since" },
  ],

  manifesto:
    "A house is not a hotel that was built to look like a road. It is a house that has been keeping the passage. That is the whole of it, and it is enough.",

  visitLabel: "Visit",
  visitTitle: "Come and stay",
  visitBody:
    "The house is open to the people who come to stay. Rates include breakfast and one passage — a guided walk of the road, the pass, or the lake. Tell us when you would like to come, and we will do the rest.",
};

/** Reserve page content. */
export const RESERVE = {
  label: "Reserve",
  title: "Come and stay",
  intro:
    "Tell us when you would like to come, and which stay you would like. We will do the rest, and we will reply within one working day.",
  waypoint: "Stage 07",
  details: {
    hours: "Check-in from 2 pm, check-out by 12 noon.",
    address: "The Leh road, off the old bazaar lane, Leh 192101.",
  },
  demoNote:
    "This is a demonstration. Nothing is sent or stored — for a real stay we would reply within one working day.",
  reach: [
    {
      title: "By air",
      body: "Leh (IXL) is the nearest airport, about forty minutes by road. We can arrange a car.",
    },
    {
      title: "By road",
      body: "The Manali–Leh and Srinagar–Leh highways both reach the house. The road is the point.",
    },
    {
      title: "The passage",
      body: "Included with every stay — a guided walk of the road, the pass, or the lake, at a time that suits you.",
    },
    {
      title: "The table",
      body: "Set in the cold. The menu is short and it changes with the day. Tell us if you have a preference.",
    },
  ],
};