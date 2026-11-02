import type { Product } from "@/domain/product";
import { ProductCard } from "@/components/product/ProductCard";

export function CatalogGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return <p className="rounded-card bg-grey p-8 text-center">Todavía no hay juegos en esta sección. ¡Vuelve muy pronto!</p>;
  }
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => (
        <li key={p.id}>
          <ProductCard product={p} headingLevel="h2" />
        </li>
      ))}
    </ul>
  );
}
