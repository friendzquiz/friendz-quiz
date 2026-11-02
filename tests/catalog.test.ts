import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { productSources } from "@/content/products";
import {
  filterProducts,
  getFeaturedProducts,
  getHighlightedPrintable,
  getProductBySlug,
  parseCatalog,
} from "@/data/products";
import { activeChannels, formatPlayers, formatPrice, productPath, type ProductInput } from "@/domain/product";

const base: ProductInput = {
  id: "FQ-9000",
  slug: "prueba",
  name: "Prueba",
  category: "Test",
  shortDescription: "Descripción corta de prueba.",
  description: "Descripción completa de prueba para el test.",
  players: { min: 2, max: 4 },
  duration: "Variable",
  modalities: ["printable"],
  status: "available",
  createdAt: "2026-10-31",
  updatedAt: "2026-10-31",
};

test("el catálogo real es válido y no repite id ni slug", () => {
  const products = parseCatalog(productSources);
  assert.ok(products.length > 0);
});

test("rechaza un producto con datos inválidos", () => {
  assert.throws(() => parseCatalog([{ ...base, slug: "Con Espacios" }]), /Producto inválido/);
  assert.throws(() => parseCatalog([{ ...base, players: { min: 5, max: 2 } }]), /Producto inválido/);
});

test("rechaza ids o slugs duplicados", () => {
  assert.throws(() => parseCatalog([base, { ...base, slug: "otro" }]), /duplicado/);
});

test("los borradores y archivados nunca se muestran", () => {
  const products = parseCatalog([
    base,
    { ...base, id: "FQ-9001", slug: "borrador", status: "draft" },
    { ...base, id: "FQ-9002", slug: "archivado", status: "archived" },
    { ...base, id: "FQ-9003", slug: "pronto", status: "coming_soon" },
  ]);
  assert.deepEqual(filterProducts(products).map((p) => p.slug), ["prueba", "pronto"]);
});

test("filtra por modalidad, destacado y ejemplos", () => {
  const products = parseCatalog([
    base,
    { ...base, id: "FQ-9001", slug: "online", modalities: ["online"], featured: true },
    { ...base, id: "FQ-9002", slug: "ejemplo", featured: true, placeholder: true },
  ]);
  assert.deepEqual(filterProducts(products, { modality: "online" }).map((p) => p.slug), ["online"]);
  assert.deepEqual(filterProducts(products, { featured: true }).map((p) => p.slug), ["online", "ejemplo"]);
  assert.deepEqual(filterProducts(products, { includePlaceholders: false }).map((p) => p.slug), ["prueba", "online"]);
  assert.equal(filterProducts(products, { limit: 1 }).length, 1);
});

test("solo hay canales de compra si el producto está disponible", () => {
  const channel = { type: "gumroad" as const, url: "https://example.com/p", active: true };
  const [available, soon] = parseCatalog([
    { ...base, channels: [channel, { ...channel, active: false }] },
    { ...base, id: "FQ-9001", slug: "pronto", status: "coming_soon", channels: [channel] },
  ]);
  assert.equal(activeChannels(available!).length, 1);
  assert.equal(activeChannels(soon!).length, 0);
});

test("Sobremesa Navideña es el imprimible destacado y vive en /juegos/", async () => {
  const highlighted = await getHighlightedPrintable();
  assert.equal(highlighted?.slug, "sobremesa-navidena");
  assert.equal(productPath(highlighted!), "/juegos/sobremesa-navidena");
  assert.equal(highlighted?.placeholder, false);
  assert.ok(await getProductBySlug("sobremesa-navidena"));
});

test("los destacados de la Home salen de la capa de datos", async () => {
  const featured = await getFeaturedProducts(4);
  assert.ok(featured.length > 0 && featured.length <= 4);
  assert.equal(featured[0]?.status, "available");
});

test("todas las imágenes del catálogo existen", () => {
  for (const p of parseCatalog(productSources)) {
    for (const img of p.images) {
      assert.ok(existsSync(join(process.cwd(), "public", img.src)), `Falta ${img.src}`);
    }
  }
});

test("formatea precio y jugadores en español", () => {
  assert.equal(formatPrice(599).replace(/\s/g, " "), "5,99 €");
  assert.equal(formatPlayers({ min: 2, max: 12 }), "De 2 a 12 jugadores");
  assert.equal(formatPlayers({ min: 4, max: 4 }), "4 jugadores");
});

test("Sobremesa Navideña se compra por Gumroad con el enlace de pago directo", async () => {
  const product = await getProductBySlug("sobremesa-navidena");
  const [channel] = activeChannels(product!);
  assert.equal(channel?.type, "gumroad");
  assert.ok(channel?.url.startsWith("https://friendzquiz.gumroad.com/l/sobremesa-navidena"));
});

test("Bingo de la Sobremesa se compra por Gumroad y no muestra precio hasta decidirlo", async () => {
  const product = await getProductBySlug("bingo-sobremesa");
  assert.ok(product);
  assert.equal(product.priceCents, undefined);
  const [channel] = activeChannels(product);
  assert.equal(channel?.url, "https://friendzquiz.gumroad.com/l/bingo-sobremesa?wanted=true");
});
