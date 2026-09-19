export interface LedgerEntry {
  id: string;
  year: string;
  title: string;
  body: string;
  image: string;
  note: string;
}

/**
 * The Ledger — a court record of the haveli, kept by the family.
 * Six entries, oldest to newest. The years are illustrative.
 */
export const LEDGER: LedgerEntry[] = [
  {
    id: "founding",
    year: "1874",
    title: "The haveli is raised",
    body: "The first stone is laid by the family's masons, in the sandstone of the fort. The haveli is built to be kept, not to be sold — a house for the family, and for the guests the family receives.",
    image: "ledger-1",
    note: "The founding entry of the ledger.",
  },
  {
    id: "carving",
    year: "1902",
    title: "The walls are carved",
    body: "The carved walls are finished over the course of a season. The jharokhas, the arches, the small figures in the stone — all of it is done by hand, and the family keeps the names of the masons who did it.",
    image: "ledger-2",
    note: "The carving entry of the ledger.",
  },
  {
    id: "banquet",
    year: "1930",
    title: "The banquet hall is set",
    body: "The banquet hall is set for the first long meal. The table is long, the light is low, and the family keeps the recipe for the first dish that was served there.",
    image: "ledger-3",
    note: "The banquet entry of the ledger.",
  },
  {
    id: "peacock",
    year: "1958",
    title: "The peacocks come",
    body: "The peacocks come to the courtyard, and they stay. The family keeps a note of the first one, and the room by the courtyard is named for it. The birds are part of the haveli now.",
    image: "ledger-4",
    note: "The peacock entry of the ledger.",
  },
  {
    id: "keeping",
    year: "1986",
    title: "The haveli is kept",
    body: "The haveli is kept through the change, and the family keeps the ledger, the books, and the recipes. The house is not sold, and the guests are still received, and the light still comes in all day.",
    image: "collection-1",
    note: "The keeping entry of the ledger.",
  },
  {
    id: "today",
    year: "Today",
    title: "The haveli is open",
    body: "The haveli is open to the people who come to stay. The five suites are kept as they were kept, the banquet is set as it was set, and the ledger is still kept by the family. The light still comes in all day.",
    image: "collection-2",
    note: "The present entry of the ledger.",
  },
];

export function ledgerEntry(id: string): LedgerEntry {
  const e = LEDGER.find((x) => x.id === id);
  if (!e) throw new Error(`Unknown ledger entry: ${id}`);
  return e;
}
