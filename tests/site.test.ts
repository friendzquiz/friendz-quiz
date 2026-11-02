import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { brandColors } from "@/config/brand";
import { hasPendingBusinessData } from "@/config/business";
import { site } from "@/config/site";

const root = process.cwd();

test("los tokens de globals.css coinciden con el Brand Master", () => {
  const css = readFileSync(join(root, "app/globals.css"), "utf8");
  for (const [key, color] of Object.entries(brandColors)) {
    const match = css.match(new RegExp(`--color-${key}:\\s*(#[0-9A-Fa-f]{6})`));
    assert.ok(match, `Falta el token --color-${key}`);
    assert.equal(match![1]!.toUpperCase(), color.hex.toUpperCase(), `--color-${key} no coincide`);
  }
});

test("ningún color fuera del Brand Master en los componentes", () => {
  const allowed = new Set(Object.values(brandColors).map((c) => c.hex.toUpperCase()));
  const files = ["components", "app"].flatMap((dir) => listFiles(join(root, dir)));
  for (const file of files.filter((f) => /\.(tsx|css)$/.test(f) && !f.endsWith("globals.css"))) {
    const hexes = readFileSync(file, "utf8").match(/#[0-9A-Fa-f]{6}\b/g) ?? [];
    for (const hex of hexes) assert.ok(allowed.has(hex.toUpperCase()), `${hex} en ${file} no es del Brand Master`);
  }
});

test("cada enlace de la navegación y del pie tiene página", () => {
  for (const item of [...site.nav, ...site.legal]) {
    const page = item.href === "/" ? "app/page.tsx" : `app${item.href}/page.tsx`;
    assert.ok(existsSync(join(root, page)), `Falta ${page} para ${item.label}`);
  }
});

test("la web avisa de que faltan datos legales", () => {
  assert.equal(hasPendingBusinessData(), true);
});

function listFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    return statSync(full).isDirectory() ? listFiles(full) : [full];
  });
}
