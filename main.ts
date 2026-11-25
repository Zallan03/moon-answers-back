// The Moon Finally Answers Back.
// v2 — revised in this session: added "and howls" so the line answers
// everything the brief names (wishes, howls, late-night promises) and
// the Moon's grievance covers the full four billion years of noise.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Four billion years of wishes and howls, and not one of you ever wished me a happy birthday. I see how it is.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(`Wrote ${line.length} characters to ${join(outDir, "entry.txt")}`);
