// Verifies image URLs over HTTP (HEAD, falling back to GET range).
// Usage: node scripts/verify-images.mjs <urls.txt>   (one URL per line)
import { readFileSync } from "node:fs";

const file = process.argv[2];
if (!file) {
  console.error("usage: node scripts/verify-images.mjs <urls.txt>");
  process.exit(1);
}
const urls = readFileSync(file, "utf8")
  .split(/\r?\n/)
  .map((l) => l.trim())
  .filter(Boolean);

for (const url of urls) {
  try {
    let res = await fetch(url, { method: "HEAD", redirect: "follow" });
    if (res.status === 405 || res.status === 501) {
      res = await fetch(url, { method: "GET", headers: { Range: "bytes=0-0" } });
    }
    const len = res.headers.get("content-length") ?? res.headers.get("content-range") ?? "?";
    console.log(`${res.status} ${res.headers.get("content-type") ?? "?"} ${len} ${url}`);
  } catch (err) {
    console.log(`ERR ${err.message} ${url}`);
  }
}
