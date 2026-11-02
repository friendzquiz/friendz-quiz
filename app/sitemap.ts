import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { getProducts } from "@/data/products";
import { productPath } from "@/domain/product";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = site.nav.map((item) => ({ url: `${site.url}${item.href === "/" ? "" : item.href}` }));
  const products = (await getProducts({ includePlaceholders: false })).map((p) => ({
    url: `${site.url}${productPath(p)}`,
    lastModified: p.updatedAt,
  }));
  return [...pages, ...products];
}
