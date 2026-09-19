import { IMAGES } from "./images";

/** The Projection — the private cinema, set in the back of the house. */
export const PROJECTION = {
  label: "The Projection",
  title: "The private cinema",
  intro:
    "The projection is the private cinema, set in the back of the house. It is the part of the house where the lights go down, the screen comes up, and the house keeps the reel for the first film that was shown there, in 1962.",
  timecode: "TC 00:04:00:00",
  heroImage: IMAGES.projectorRoom,
  sections: [
    {
      heading: "The screen",
      body: "The screen is the screen of the house — the one that has been kept since 1962. The lights go down, the reel turns, and the film is the film. There is no queue, and there is no hurry. The showing is the showing, and it is enough.",
      image: IMAGES.imaxProjector,
    },
    {
      heading: "The reel",
      body: "The reel is the reel of the house — the one that has been kept since 1962. The film is the film the house has always shown, with the reels the house has always kept. The light comes in low and warm, and the showing is the showing. There is no queue, and there is no hurry.",
      image: IMAGES.elginTalkies,
    },
    {
      heading: "The keeping",
      body: "The projection is kept the way it was kept — by the family, with the same reels, the same light, the same screen. The guests are received the way they were received, and the showing is the showing. That is the whole of it, and it is enough.",
      image: IMAGES.fumeoProjector,
    },
  ],
};
