/** Site-wide copy. No component hard-codes business text — it lives here. */

export const HOME = {
  heroLabel: "Kodagu · Western Ghats",
  heroTitle: "The understory.",
  heroIntro:
    "A five-room lodge in the low green light of a Coorg forest — where the canopy lets go and the ferns take over. Breakfast, walks, and the birds are included.",
  forestLabel: "The forest",
  forestTitle: "We live in the middle layer",
  forestBody: [
    "A forest is not one thing. It is layers: the canopy, high and bright; the understory, where the light goes soft and green; and the floor, where the moss keeps the rain. Understory is in the middle — not the treetops, not the ground, the quiet band between.",
    "The lodge is five rooms set into that band, under a roof of old timber, with a veranda that looks out through ferns. Nothing here is a spectacle. The forest does the showing; we just keep the light low and the table set.",
  ],
  facts: [
    { value: "5", label: "rooms, no more" },
    { value: "3", label: "layers of forest" },
    { value: "1", label: "table, one seating" },
    { value: "05:30", label: "the mist lifts" },
  ],
  manifesto:
    "The canopy keeps the weather. The floor keeps the rain. The understory keeps the quiet — and that is where we live.",
  visitLabel: "Getting here",
  visitTitle: "An hour from Madikeri",
  visitBody:
    "Understory is an hour from Madikeri, on the Kudremukh forest road. The last stretch is a single lane through coffee and shola. We arrange the drive when you reserve; the forest does the rest.",
};

export const FOREST = {
  label: "The Forest",
  title: "Three layers, one quiet band",
  intro:
    "Coorg forest is layered. We built into the middle — the understory — where the light is green, the air is cool, and the birds do most of the talking.",
  body: [
    "The Western Ghats are old, and they are layered. The canopy stands twenty metres up, bright and open, where the hornbills and the sun work together. Below it, the understory closes in: ferns, moss, the slow green of shade. And below that, the forest floor, where the rain is kept and the mushrooms come out after it.",
    "Understory sits in that middle band. The rooms are low, the roof is high, and the veranda is always in the shade. You can stand on it at any hour and the forest will not perform for you — it will just be there, doing its slow work.",
    "We keep the lodge small on purpose. Five rooms means the forest is never crowded, and the forest is never crowded means the birds stay. That is the whole design brief: be small, be low, be green, and get out of the way.",
  ],
  layers: [
    {
      number: "01",
      name: "The canopy",
      height: "18–25 m",
      body: "Tall evergreens — rosewood, indigo, the big figs. Bright, open, and loud with birds. We look up at it from the veranda.",
      image: "canopy",
    },
    {
      number: "02",
      name: "The understory",
      height: "2–8 m",
      body: "Ferns, moss, and the low green light. This is where the lodge lives — cool, shaded, and quiet. The rooms open straight into it.",
      image: "fern",
    },
    {
      number: "03",
      name: "The forest floor",
      height: "0–2 m",
      body: "Moss, leaf litter, and the mushrooms that come out after rain. We walk it on the morning trails, slowly, and say very little.",
      image: "moss",
    },
  ],
  principles: [
    {
      title: "Small, so the forest stays",
      body: "Five rooms, one table, one veranda. The lodge is small enough that the forest never notices it is there.",
    },
    {
      title: "Low, so the light stays green",
      body: "The roof is high but the rooms are low. You live in the shade, and the light comes in soft, the way it does in the understory.",
    },
    {
      title: "Quiet, so the birds stay",
      body: "No music on the veranda, no loud mornings. The forest is loud enough. Our job is to not add to it.",
    },
  ],
};

export const DAYS = {
  label: "Days",
  title: "A day in the understory",
  intro:
    "There is no schedule, but there is a rhythm. This is the shape of a day here, if you let the forest set it.",
  hours: [
    {
      time: "05:30",
      name: "The mist lifts",
      body: "The forest is grey and wet. If you are up, the veranda is the best seat in the house. The birds start before the light does.",
    },
    {
      time: "07:00",
      name: "Breakfast",
      body: "One seating, at the table. What the garden and the market offered that morning, made slowly. Coffee from the valley, not a pod.",
    },
    {
      time: "10:00",
      name: "The walk",
      body: "A short trail through the understory, with the keeper if you like. Ferns, moss, and the occasional hornbill. No counting, no naming, unless you want to.",
    },
    {
      time: "13:00",
      name: "The long lunch",
      body: "A plate, a glass of something cold, and the veranda. The afternoon is for doing nothing in particular, well.",
    },
    {
      time: "16:00",
      name: "Tea, the Coorg way",
      body: "Chai made with milk and a little sugar, served in the small cups. The forest goes gold, and the light comes in low.",
    },
    {
      time: "19:00",
      name: "Dinner",
      body: "One seating, at the table, to the people in the house. The forest goes dark, and the fire goes on, and that is the whole service.",
    },
  ],
};

export const TABLE = {
  label: "The Table",
  title: "One table, one seating",
  intro:
    "The kitchen serves one seating a day, at the one table, to the people in the house. That is the whole service, and it is enough.",
  body: [
    "The menu is short and it changes with the market. The garden gives what it gives — greens, chillies, the herbs that grow in the shade. The valley gives the coffee and the honey. The rest comes from the small farms on the road down, and it is good, and it is local, and it is enough.",
    "We do not do a big breakfast spread. We do a good one: eggs from the farm, bread from the oven, the fruit that is ripe, and the chai that is always on. Dinner is the same idea, made slower, with the fire going.",
    "If you have a diet, tell us when you reserve. The kitchen is small and the menu is short, which means we can make it yours without much fuss.",
  ],
  menu: [
    { course: "Breakfast", items: "Farm eggs · oven bread · ripe fruit · Coorg chai" },
    { course: "Lunch", items: "A plate of the day · a cold glass · the veranda" },
    { course: "Tea", items: "Chai, the Coorg way · whatever the garden gave" },
    { course: "Dinner", items: "One seating, at the table, with the fire going" },
  ],
};

export const RESERVE = {
  label: "Contact & Reserve",
  title: "Reserve a stay",
  intro:
    "Tell us when you would like to come, and how many of you there are. We reply within one working day — usually sooner, unless the mist is doing something worth watching.",
  details: {
    address: "Kudremukh forest road, Madikeri, Kodagu, Karnataka 571203, India",
    phone: "+91 8272 000 000",
    email: "stay@understory.example",
    hours: "Front desk, 8:00–22:00 · Check-in from 2:00 · Check-out by 12:00",
  },
  reach: [
    { title: "By air", body: "Kochi (COK) is the nearest airport, about three hours by road. We arrange the drive when you reserve." },
    { title: "By rail", body: "Madikeri station is twenty minutes away, on the way up to the forest road." },
    { title: "By road", body: "The lodge is on the Kudremukh forest road, off NH-275. The last stretch is a single lane through coffee and shola." },
    { title: "Parking", body: "Covered parking for two cars is included with every stay. More on request." },
  ],
  demoNote:
    "Understory is a fictional brand and this is a concept website. All contact details are illustrative; the form is a demonstration and does not send or store anything.",
};
