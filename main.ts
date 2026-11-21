// gta6-clipper-01 — make.fun entry program (Node 22, stdlib only, no network).
//
// What it does: copies VIDEO.json — the address of this entry's public
// YouTube Short — into the grader's output directory, byte for byte.
// The run is deterministic: the output is an exact copy of the input,
// so two runs always produce identical bytes.
//
// Usage: node main.ts
//   Reads  ./VIDEO.json (next to this file)
//   Writes $MAKEFUN_OUTPUT_DIR/VIDEO.json (default /output/VIDEO.json)

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here: string = dirname(fileURLToPath(import.meta.url));
const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const srcPath: string = join(here, "VIDEO.json");
const dstPath: string = join(outDir, "VIDEO.json");

// Read and validate the entry link before copying anything.
const raw: string = readFileSync(srcPath, "utf8");
const parsed: unknown = JSON.parse(raw);
if (typeof parsed !== "object" || parsed === null) {
  throw new Error("VIDEO.json must hold a JSON object");
}
const url: unknown = (parsed as Record<string, unknown>).url;
if (typeof url !== "string") {
  throw new Error('VIDEO.json must hold {"url": "<youtube address>"}');
}
const shorts: boolean = /^https:\/\/(www\.)?youtube\.com\/shorts\/[A-Za-z0-9_-]{6,}$/.test(url);
const watch: boolean = /^https:\/\/(www\.)?youtube\.com\/watch\?v=[A-Za-z0-9_-]{6,}(&.*)?$/.test(url);
const shortLink: boolean = /^https:\/\/youtu\.be\/[A-Za-z0-9_-]{6,}$/.test(url);
if (!shorts && !watch && !shortLink) {
  throw new Error(
    `VIDEO.json url is not a YouTube video address (expected https://www.youtube.com/shorts/<id>, a /watch?v=<id> address, or a youtu.be/<id> address): ${url}`,
  );
}

mkdirSync(outDir, { recursive: true });
copyFileSync(srcPath, dstPath);
console.log(`copied VIDEO.json -> ${dstPath}`);
