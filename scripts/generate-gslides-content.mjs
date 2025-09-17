#!/usr/bin/env node
/**
 * Generate Google Slides content JSON from deck-outline.md
 * Output: docs/discovery-output/gslides/content.json
 */
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";

const OUT_PATH = "docs/discovery-output/gslides/content.json";
const DECK_OUTLINE = "docs/discovery-output/deck-outline.md";

function splitSlides(md) {
  const lines = md.split(/\r?\n/);
  const slides = [];
  let current = null;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const m = line.match(/^##\s*(Optional\s+)?Slide\s*(\d+)\s*—\s*(.+)$/);
    if (m) {
      if (current) slides.push(current);
      current = { num: parseInt(m[2], 10), optional: !!m[1], title: m[3].trim(), lines: [] };
      continue;
    }
    if (current) current.lines.push(line);
  }
  if (current) slides.push(current);
  return slides;
}

function parseTable(lines) {
  const tableLines = lines.filter((l) => /^\|.*\|$/.test(l.trim()));
  if (tableLines.length < 2) return null;
  const header = tableLines[0];
  const headers = header
    .slice(1, -1)
    .split("|")
    .map((s) => s.trim())
    .filter(Boolean);
  const rows = [];
  for (let i = 2; i < tableLines.length; i++) {
    // skip header & separator
    const row = tableLines[i]
      .slice(1, -1)
      .split("|")
      .map((s) => s.trim());
    if (row.length && row.some(Boolean)) rows.push(row);
  }
  return { headers, rows };
}

function extractField(lines, label) {
  const rx = new RegExp(
    "^-?\\s*" + label.replace(/[.*+?^\${}()|[\]\\]/g, "\\$&") + "\\s*:\\s*(.*)$"
  );
  for (const l of lines) {
    const m = l.match(rx);
    if (m) return m[1].trim();
  }
  return "";
}

function extractBullets(lines) {
  const bullets = [];
  for (const l of lines) {
    const m = l.match(/^\s*-\s+(.*)$/);
    if (m) bullets.push(m[1]);
  }
  return bullets;
}

function buildSlides(slideBlocks) {
  const slides = [];
  for (const b of slideBlocks) {
    if (b.num === 1) {
      slides.push({
        type: "title",
        title: extractField(b.lines, "Headline") || b.title,
        subtitle: extractField(b.lines, "Subhead") || "",
      });
      continue;
    }
    // Table
    const table = parseTable(b.lines);
    if (table) {
      slides.push({
        type: "table",
        title: b.title,
        headers: table.headers,
        rows: table.rows,
        notes: extractField(b.lines, "Takeaway"),
      });
      continue;
    }
    // Statement slide
    const statement = extractField(b.lines, "Statement");
    if (statement) {
      slides.push({
        type: "statement",
        title: b.title,
        text: statement,
        notes: extractField(b.lines, "Why now"),
      });
      continue;
    }
    // Default bullets
    const bullets = extractBullets(b.lines);
    slides.push({ type: "bullets", title: b.title, bullets });
  }
  return slides;
}

async function main() {
  const md = await readFile(DECK_OUTLINE, "utf8");
  const blocks = splitSlides(md);
  if (!blocks.length) throw new Error("No slides found in deck-outline.md");
  const slides = buildSlides(blocks);
  const json = {
    deckTitle: "Customer Discovery — RangeFit",
    slides,
  };
  await mkdir(dirname(OUT_PATH), { recursive: true });
  await writeFile(OUT_PATH, JSON.stringify(json, null, 2), "utf8");
  console.log("Wrote", OUT_PATH, "with", slides.length, "slides");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

