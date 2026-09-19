import { IMAGES, type ImageEntry } from "./images";

export interface DayMoment {
  time: string;
  title: string;
  body: string;
  image: ImageEntry;
}

/** A Day — the rhythm of a stay, from the first frame to the last. */
export const DAY = {
  label: "A Day",
  title: "The rhythm of a stay",
  intro:
    "A day at the house is the rhythm of a stay. The night comes in, the city comes to the street, and the house keeps the light. This is the rhythm, from the first frame to the last.",
  timecode: "TC 00:06:00:00",
  moments: [
    {
      time: "18:00",
      title: "The arrival",
      body: "The night begins. The house is kept, the lights are low, and the street is coming in through the glass.",
      image: IMAGES.cityNight,
    },
    {
      time: "19:30",
      title: "The bar",
      body: "The bar is set. The drinks are slow, the light is low, and the room is warm before it is bright.",
      image: IMAGES.bar,
    },
    {
      time: "21:00",
      title: "The projection",
      body: "The lights go down. The reel turns, the screen comes up, and the film is the film.",
      image: IMAGES.projectorRoom,
    },
    {
      time: "23:00",
      title: "The room",
      body: "The room is kept. The bed is low, the linen is heavy, and the night is coming in through the glass.",
      image: IMAGES.roomLobby,
    },
    {
      time: "06:00",
      title: "The sea",
      body: "The night fades. The sea is coming in, the light is slow, and the city is waking up.",
      image: IMAGES.seaFace,
    },
    {
      time: "08:00",
      title: "The street",
      body: "The day begins. The street is coming in, the city is waking up, and the house is keeping the light.",
      image: IMAGES.marineDrive,
    },
  ] as DayMoment[],
};
