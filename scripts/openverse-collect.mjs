// Collects licensed image candidates from the Openverse API for a given search term.
// Usage: node scripts/openverse-collect.mjs "udaipur lake dawn" [pageSize]
const [term, size] = process.argv.slice(2);
if (!term) {
  console.error("usage: node scripts/openverse-collect.mjs \"<search term>\" [pageSize]");
  process.exit(1);
}
const pageSize = size ? Number(size) : 8;
const url = `https://api.openverse.org/v1/images/?q=${encodeURIComponent(term)}&page_size=${pageSize}`;
const res = await fetch(url, { headers: { Accept: "application/json" } });
if (!res.ok) {
  console.error(`HTTP ${res.status} ${res.statusText}`);
  process.exit(1);
}
const data = await res.json();
for (const r of data.results ?? []) {
  console.log(
    [r.license?.toUpperCase(), r.creator || "?", JSON.stringify(r.title || ""), r.url].join(" | ")
  );
}
