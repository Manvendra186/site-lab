export interface FieldNote {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  body: string[];
}

/**
 * Field Notes — short, slow notes from the lodge, written like a field
 * guide. Numbered, dated, and published rarely.
 */
export const FIELD_NOTES: FieldNote[] = [
  {
    slug: "on-the-middle-layer",
    title: "On the middle layer",
    date: "June 2026",
    excerpt:
      "A forest is not one thing. It is layers, and the middle one is the quietest. That is where we live, and it is the reason the lodge is small.",
    image: "fern",
    body: [
      "A forest is not one thing. It is layers: the canopy, high and bright; the understory, where the light goes soft and green; and the floor, where the moss keeps the rain. The middle one is the quietest, and it is the one most people walk through without noticing.",
      "We built into that middle band on purpose. The rooms are low, the roof is high, and the veranda is always in the shade. You live in the understory, and the forest does the showing. We just keep the light low and the table set.",
      "The lodge is small because the middle layer is small. It is the band between the treetops and the ground, and it is not much wider than the rooms. That is the whole design brief: be in the middle, be low, be green, and get out of the way.",
    ],
  },
  {
    slug: "what-the-mist-does-at-five-thirty",
    title: "What the mist does at five-thirty",
    date: "April 2026",
    excerpt:
      "At five-thirty the forest is not a colour. It is a process: grey going to green going to something that has no name. The birds know this. They start before the light does.",
    image: "mist",
    body: [
      "At five-thirty the forest is not a colour. It is a process: grey going to green going to something that has no name. The mist comes in low, over the ferns, and the whole understory goes soft. The birds start before the light does, and they are not performing — they are just there.",
      "The veranda is the best seat in the house at this hour. There is nothing to do but sit and watch the mist lift. The forest does not hurry. It does not need to. It has been doing this longer than the lodge has been here, and it will keep doing it after the lodge is gone.",
      "Most guests are up by then, and most of them say very little. That is how you know it was worth getting up for. The mist does the talking, and the forest listens, and the lodge just keeps the light low.",
    ],
  },
  {
    slug: "a-note-on-ferns",
    title: "A note on ferns",
    date: "February 2026",
    excerpt:
      "Ferns are the oldest of the green things. They were here before the trees, before the flowers, before the birds had a name for the place. The Fern Room is named for them, and it is the lowest of the five.",
    image: "fern-2",
    body: [
      "Ferns are the oldest of the green things. They were here before the trees, before the flowers, before the birds had a name for the place. They do not make seeds; they make spores, and the spores go where the wind takes them, and the ferns come back where the light is soft.",
      "The Fern Room is named for them, and it is the lowest of the five. The window is at the height of the fronds, and in the morning the room is green before it is light. The ferns come in first, and the sun comes in after, low and slow.",
      "We do not cut them, and we do not move them. They are the forest, and the forest is the brand. The room is just a window into them, and the window is open all the way, and the ferns do the rest.",
    ],
  },
  {
    slug: "staying-in-the-shade",
    title: "Staying in the shade",
    date: "December 2025",
    excerpt:
      "Some people stay two nights. Some stay a week. The lodge does not treat them differently, except that the longer you stay, the more the forest stops performing and starts being.",
    image: "path",
    body: [
      "Some people stay two nights. Some stay a week. The lodge does not treat them differently, except that the longer you stay, the more the forest stops performing and starts being. In the first day, everything is presented: the breakfast is laid, the veranda is set, the day has a shape.",
      "By the second day, you have stopped waiting for the shape and started making your own. You are up before the mist, and you are on the veranda before the light, and you have stopped asking the forest to do anything. That is when the stay begins.",
      "We keep a shelf of field guides that belong to the lodge, not to any guest. They are worn in the places that matter. Take one. Leave it where you find it, or do not. Both are fine. The forest does not mind, and neither do we.",
    ],
  },
];

export function fieldNote(slug: string): FieldNote {
  const n = FIELD_NOTES.find((x) => x.slug === slug);
  if (!n) throw new Error(`Unknown field note: ${slug}`);
  return n;
}