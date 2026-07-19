// Curated portfolio image pipeline.
// Reads full-resolution frames from the source portfolio folder (outside the repo),
// resizes/compresses them to web-ready WebP under public/projects/<slug>/,
// and generates public/og.jpg (1200x630) from the hero frame.
//
// Usage:  node scripts/prepare-images.mjs
// Source root can be overridden:  SRC_ROOT="D:/somewhere" node scripts/prepare-images.mjs

import { mkdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SRC_ROOT = process.env.SRC_ROOT ?? "C:/Users/touch/Desktop/ผลงาน E-Learning";
const OUT_ROOT = path.resolve(import.meta.dirname, "..", "public", "projects");
const MAX_WIDTH = 1600;
const WEBP_QUALITY = 82;

// Hero frame also used for the social-share card.
const OG_SOURCE = ["Factory Lighting Quality", "factory-lighting-quality-scene-1-029.png"];
const OG_OUT = path.resolve(import.meta.dirname, "..", "public", "og.jpg");

// slug -> { srcDir (under SRC_ROOT), files (curated, in display order) }
const manifest = {
  "factory-lighting": {
    srcDir: "Factory Lighting Quality",
    files: [
      "factory-lighting-quality-scene-1-029.png",
      "factory-lighting-quality-scene-5-033.png",
      "factory-lighting-quality-scene-9-037.png",
      "factory-lighting-quality-scene-13-041.png",
      "factory-lighting-quality-scene-17-045.png",
      "factory-lighting-quality-scene-21-049.png",
      "factory-lighting-quality-scene-26-054.png",
      "factory-lighting-quality-scene-30-058.png",
    ],
  },
  "factory-hidden-flaw": {
    srcDir: "Factory Hidden Flaw",
    files: [
      "food-factory-location-requirements-factory-hidden-flaw-scene-1-0182.png",
      "food-factory-location-requirements-factory-hidden-flaw-scene-5-0203.png",
      "food-factory-location-requirements-factory-hidden-flaw-scene-10-0183.png",
      "food-factory-location-requirements-factory-hidden-flaw-scene-15-0188.png",
      "food-factory-location-requirements-factory-hidden-flaw-scene-20-0194.png",
      "food-factory-location-requirements-factory-hidden-flaw-scene-26-0200.png",
      "factory-hidden-flaw-factory-hidden-flaw-scene-27-021.png",
      "factory-hidden-flaw-factory-hidden-flaw-scene-34-028.png",
    ],
  },
  "food-factory-location": {
    srcDir: "Food Factory Location",
    files: [
      "food-factory-location-scene-1-001.png",
      "food-factory-location-scene-4-004.png",
      "food-factory-location-scene-7-007.png",
      "food-factory-location-scene-10-010.png",
      "food-factory-location-scene-13-013.png",
      "food-factory-location-scene-16-016.png",
      "food-factory-location-scene-18-018.png",
      "food-factory-location-scene-20-020.png",
    ],
  },
  // NOTE: this source folder interleaves two unrelated frame sequences — real
  // GMP factory scenes AND an unrelated fairytale/princess storyline. Every
  // filename below was viewed individually and confirmed to be genuine
  // factory/GMP content before inclusion. Do not add more frames from this
  // folder without viewing them first (scene-1-1, 1-3, 6-1, 10-1, 13-1, 20-1
  // are confirmed fairytale frames — never use them).
  "gmp-compliance-audit": {
    srcDir: "Food Factory Location Requirements",
    files: [
      "food-factory-location-requirements-scene-1-2-0209.png",
      "food-factory-location-requirements-scene-2-2-0242.png",
      "food-factory-location-requirements-scene-9-2-0301.png",
      "food-factory-location-requirements-scene-24-2-0260.png",
      "food-factory-location-requirements-scene-27-2-0272.png",
      "food-factory-location-requirements-scene-15-2-0227.png",
      "food-factory-location-requirements-scene-28-1-0275.png",
      "food-factory-location-requirements-scene-30-1-0283.png",
    ],
  },
  "factory-ceiling": {
    srcDir: "Factory Ceiling - Food Safety Standards",
    files: [
      "factory-ceiling-food-safety-scene-1-0059.png",
      "factory-ceiling-food-safety-scene-5-0086.png",
      "factory-ceiling-food-safety-scene-10-0060.png",
      "factory-ceiling-food-safety-scene-14-0064.png",
      "factory-ceiling-food-safety-scene-18-0068.png",
      "factory-ceiling-food-safety-scene-22-0073.png",
      "factory-ceiling-food-safety-scene-27-0078.png",
      "factory-ceiling-food-safety-scene-32-0084.png",
    ],
  },
  "floor-slope-design": {
    srcDir: "Factory Floor Slope Design",
    files: [
      "factory-floor-slope-design-scene-1-0148.png",
      "factory-floor-slope-design-scene-5-0177.png",
      "factory-floor-slope-design-scene-10-0149.png",
      "factory-floor-slope-design-scene-15-0154.png",
      "factory-floor-slope-design-scene-20-0160.png",
      "factory-floor-slope-design-scene-25-0165.png",
      "factory-floor-slope-design-scene-30-0171.png",
      "factory-floor-slope-design-scene-34-0175.png",
    ],
  },
};

let produced = 0;
let totalBytes = 0;

for (const [slug, { srcDir, files }] of Object.entries(manifest)) {
  const outDir = path.join(OUT_ROOT, slug);
  await mkdir(outDir, { recursive: true });

  for (const [index, file] of files.entries()) {
    const src = path.join(SRC_ROOT, srcDir, file);
    const meta = await sharp(src).metadata();
    if ((meta.height ?? 0) > (meta.width ?? 0)) {
      console.warn(`SKIP portrait frame: ${srcDir}/${file}`);
      continue;
    }
    const out = path.join(outDir, `${slug}-${String(index + 1).padStart(2, "0")}.webp`);
    await sharp(src)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: WEBP_QUALITY })
      .toFile(out);
    const { size } = await stat(out);
    produced += 1;
    totalBytes += size;
    console.log(`${path.relative(process.cwd(), out)}  ${(size / 1024).toFixed(0)} KB`);
  }
}

await sharp(path.join(SRC_ROOT, ...OG_SOURCE))
  .resize(1200, 630, { fit: "cover", position: "centre" })
  .jpeg({ quality: 85 })
  .toFile(OG_OUT);
const ogSize = (await stat(OG_OUT)).size;
console.log(`public/og.jpg  ${(ogSize / 1024).toFixed(0)} KB`);

console.log(`\nDone: ${produced} frames + og.jpg, total ${(totalBytes / 1024 / 1024).toFixed(1)} MB`);
