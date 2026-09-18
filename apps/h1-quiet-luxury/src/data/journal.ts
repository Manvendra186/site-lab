export interface JournalEntry {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  body: string[];
}

export const JOURNAL: JournalEntry[] = [
  {
    slug: "on-keeping-a-house-quiet",
    title: "On keeping a house quiet",
    date: "March 2026",
    excerpt:
      "Quiet is not the absence of sound. It is the absence of demand. A house can be full of birds, water, and wind and still be quiet — if none of it is asking for anything.",
    image: "lake-dusk",
    body: [
      "Quiet is not the absence of sound. It is the absence of demand. A house can be full of birds, water, and wind and still be quiet — if none of it is asking for anything.",
      "We think about this when we change a room. Not the colour, not the furniture — the sound it makes. A hard floor returns every footstep. A heavy curtain takes it away. The decision is not aesthetic; it is about what the room will ask of you.",
      "The lake does this for the whole house. It takes the sound of the road, the sound of the city, the sound of the day, and returns a version of each that is lower and slower. Guests often say the house is silent. It is not. It is just not asking.",
      "That is the whole design brief, really: build a place that does not ask. The rest — the linen, the stone, the single seating — is just how you keep your word.",
    ],
  },
  {
    slug: "what-the-lake-does-at-six",
    title: "What the lake does at six",
    date: "January 2026",
    excerpt:
      "At six in the morning the lake is not a colour. It is a process: grey going to gold going to something that has no name. The boats know this. They are out early, and they are patient.",
    image: "hero",
    body: [
      "At six in the morning the lake is not a colour. It is a process: grey going to gold going to something that has no name. The boats know this. They are out early, and they are patient.",
      "We keep one boat for the house. It is small, it is old, and it is the only vehicle on the property that goes anywhere worth going. The oar is the only engine.",
      "There is a rule we do not write down: you do not take a phone on the boat. Not because we are against phones, but because the lake at six is the one thing in the day that does not need to be recorded to be true.",
      "Most guests break the rule once, and then keep it. That is how you know it was worth having.",
    ],
  },
  {
    slug: "a-note-on-linen",
    title: "A note on linen",
    date: "November 2025",
    excerpt:
      "Linen is the only fabric that improves with being used. It creases, it softens, it remembers. A hotel that irons everything perfectly is, in a sense, a hotel that has never been lived in.",
    image: "room-garden",
    body: [
      "Linen is the only fabric that improves with being used. It creases, it softens, it remembers. A hotel that irons everything perfectly is, in a sense, a hotel that has never been lived in.",
      "Our sheets are linen, washed in the house, dried in the garden when the weather allows. They come off the line with a crease in them, and we have stopped apologising for it.",
      "The towels are heavier than you expect. That is deliberate. A quiet house should feel substantial in the hand — the kind of quiet you can hold.",
      "If you prefer cotton, we have cotton. We will not tell you it is inferior. We will only tell you that the linen gets better, and the cotton stays the same, and you can decide which you prefer.",
    ],
  },
  {
    slug: "staying-longer",
    title: "Staying longer",
    date: "September 2025",
    excerpt:
      "Some people stay three nights. Some stay three months. The house does not treat them differently, except that the longer you stay, the more it stops performing and starts being.",
    image: "chai-wallah",
    body: [
      "Some people stay three nights. Some stay three months. The house does not treat them differently, except that the longer you stay, the more it stops performing and starts being.",
      "In the first week, everything is presented: the breakfast is laid, the veranda is set, the day has a shape. By the second week, you have stopped waiting for the shape and started making your own. That is when the stay begins.",
      "We keep a shelf of books that belong to the house, not to any guest. They are worn in the places that matter. Take one. Leave it where you find it, or do not. Both are fine.",
      "Long stays are priced for it, and the Writer's Room is held for the people who come back. Most of them do.",
    ],
  },
];

export function journalEntry(slug: string): JournalEntry {
  const e = JOURNAL.find((x) => x.slug === slug);
  if (!e) throw new Error(`Unknown journal entry: ${slug}`);
  return e;
}
