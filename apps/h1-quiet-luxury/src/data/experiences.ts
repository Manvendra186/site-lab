export interface Experience {
  slug: string;
  name: string;
  time: string;
  description: string;
  image: string;
}

/** One experience is included with every stay. The rest are offered, not pushed. */
export const EXPERIENCES: Experience[] = [
  {
    slug: "morning-on-the-lake",
    name: "Morning on the Lake",
    time: "First light, about 60 minutes",
    description:
      "A small boat, a single oar, and the lake before the day starts. No schedule, no commentary — the boat goes where the light is.",
    image: "jagmandir",
  },
  {
    slug: "afternoon-tea",
    name: "Afternoon Tea",
    time: "4 pm, on the veranda",
    description:
      "Chai made the local way, with whatever the garden and the market offered that morning. Served slowly, on the veranda, in whatever order you like.",
    image: "chai",
  },
  {
    slug: "the-garden-walk",
    name: "The Garden Walk",
    time: "Any hour, 2 acres",
    description:
      "Two acres of old planting — neem, mango, jasmine — laid out in long, unhurried paths. The gardener will show you the way if you ask, and leave you to it if you don't.",
    image: "garden",
  },
  {
    slug: "one-treatment",
    name: "One Treatment",
    time: "75 minutes, the wellness room",
    description:
      "A single treatment, chosen with you: an abhyanga massage, a head massage, or a quiet hour in the wellness room. Included with every stay, once.",
    image: "spa-room",
  },
];
