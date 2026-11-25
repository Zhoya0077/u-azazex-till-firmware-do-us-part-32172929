import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "In sickness and in health, in Wi-Fi and in airplane mode, I promise my favourite error will always be loving you.";

// Self-checking gate: the entry must be one line, 1-200 chars, not only whitespace.
if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${entry.length}`);
}
if (entry.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (entry.includes("\n") || entry.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
