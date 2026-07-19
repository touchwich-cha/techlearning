// One-off conversion of curated, watermark-cleaned NotebookLM slide exports
// (see "Web ต้นแบบ/ผลงาน HR เพิ่มเติม") into web-ready WebP images.
// Source PNGs already had the NotebookLM watermark covered by a scratchpad script;
// this just resizes/compresses and drops them into public/.
//
// Usage: node scripts/prepare-hr-slides.mjs

import { mkdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SRC_DIR =
  "C:/Users/touch/AppData/Local/Temp/claude/C--Users-touch-Desktop-------E-Learning/94d9a5e6-5e0b-4962-a55d-6ba9ffdd7fdc/scratchpad/hr-slides-review/clean";
const PROJECTS_ROOT = path.resolve(import.meta.dirname, "..", "public", "projects");
const SYSTEMS_ROOT = path.resolve(import.meta.dirname, "..", "public", "systems");
const MAX_WIDTH = 1600;
const WEBP_QUALITY = 82;

const jobs = [
  { src: "Modern_HR_Reimagined__slide-06.png", out: path.join(PROJECTS_ROOT, "logical-test", "logical-test-03.webp") },
  { src: "Modern_HR_Transformation__slide-03.png", out: path.join(PROJECTS_ROOT, "logical-test", "logical-test-04.webp") },
  { src: "Modern_HR_Reimagined__slide-10.png", out: path.join(PROJECTS_ROOT, "gamifications", "gamifications-04.webp") },
  { src: "Modern_HR_Reimagined__slide-11.png", out: path.join(PROJECTS_ROOT, "gamifications", "gamifications-05.webp") },
  { src: "Modern_HR_Transformation__slide-07.png", out: path.join(PROJECTS_ROOT, "gamifications", "gamifications-06.webp") },
  { src: "Modern_HR_Reimagined__slide-08.png", out: path.join(SYSTEMS_ROOT, "onboardpro", "onboardpro-01.webp") },
];

for (const { src, out } of jobs) {
  await mkdir(path.dirname(out), { recursive: true });
  await sharp(path.join(SRC_DIR, src))
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: WEBP_QUALITY })
    .toFile(out);
  const { size } = await stat(out);
  console.log(`${path.relative(process.cwd(), out)}  ${(size / 1024).toFixed(0)} KB`);
}
