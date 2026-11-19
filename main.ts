import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

// Copy POST.json from the repository root into the output directory.
// That is all this program does: the house reads the post itself from X.
const repoDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const postPath = join(repoDir, "POST.json");
const post = JSON.parse(readFileSync(postPath, "utf8"));
if (typeof post !== "object" || post === null || typeof post.url !== "string") {
  throw new Error("POST.json must be an object with a url string");
}

mkdirSync(outDir, { recursive: true });
copyFileSync(postPath, join(outDir, "POST.json"));
