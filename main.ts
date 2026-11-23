import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// The entry is the X post named by POST.json; the grader reads the post
// itself from X. This program only hands the post file (and the meme
// picture) to the output directory.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(import.meta.dirname, "POST.json"), join(outDir, "POST.json"));
copyFileSync(join(import.meta.dirname, "meme.png"), join(outDir, "meme.png"));
