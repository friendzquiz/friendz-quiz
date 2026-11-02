import { productSchema, isPublic, type Modality, type Product, type ProductInput } from "@/domain/product";
import { productSources } from "@/content/products";

/**
 * Capa de acceso a datos del catálogo.
 * La interfaz (funciones asíncronas que devuelven `Product`) es la que usará
 * la web siempre. Hoy lee archivos locales; mañana podrá leer de Supabase o
 * de una API sin que cambie ningún componente.
 */

export interface ProductQuery {
  modality?: Modality;
  featured?: boolean;
  /** Temporada o colección, p. ej. «Navidad». */
  season?: string;
  limit?: number;
  /** Incluir productos de ejemplo pendientes de aprobación (por defecto sí, hasta tener catálogo real). */
  includePlaceholders?: boolean;
}

export function parseCatalog(sources: ProductInput[]): Product[] {
  const products = sources.map((source, index) => {
    const result = productSchema.safeParse(source);
    if (!result.success) {
      const issues = result.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join("; ");
      throw new Error(`Producto inválido en el catálogo (posición ${index}): ${issues}`);
    }
    return result.data;
  });

  const seen = new Map<string, string>();
  for (const p of products) {
    for (const key of [`id:${p.id}`, `slug:${p.slug}`]) {
      if (seen.has(key)) throw new Error(`Valor duplicado en el catálogo: ${key}`);
      seen.set(key, p.name);
    }
  }
  return products;
}

let cache: Product[] | undefined;

function catalog(): Product[] {
  cache ??= parseCatalog(productSources);
  return cache;
}

const statusOrder = { available: 0, coming_soon: 1, sold_out: 2, draft: 3, archived: 4 } as const;

export function filterProducts(products: Product[], query: ProductQuery = {}): Product[] {
  const { modality, featured, season, limit, includePlaceholders = true } = query;
  const result = products
    .filter(isPublic)
    .filter((p) => includePlaceholders || !p.placeholder)
    .filter((p) => (modality ? p.modalities.includes(modality) : true))
    .filter((p) => (featured === undefined ? true : p.featured === featured))
    .filter((p) => (season === undefined ? true : p.season === season))
    .sort((a, b) => statusOrder[a.status] - statusOrder[b.status] || a.id.localeCompare(b.id));
  return limit === undefined ? result : result.slice(0, limit);
}

export async function getProducts(query: ProductQuery = {}): Promise<Product[]> {
  return filterProducts(catalog(), query);
}

export async function getFeaturedProducts(limit = 4): Promise<Product[]> {
  return filterProducts(catalog(), { featured: true, limit });
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  return catalog().find((p) => p.slug === slug && isPublic(p));
}

/** Juegos de una colección de temporada, p. ej. la de Navidad. */
export async function getSeasonProducts(season: string): Promise<Product[]> {
  return filterProducts(catalog(), { season, includePlaceholders: false });
}

/** Producto imprimible que se destaca en la Home. */
export async function getHighlightedPrintable(): Promise<Product | undefined> {
  const [first] = filterProducts(catalog(), { modality: "printable", featured: true, includePlaceholders: false });
  return first;
}
