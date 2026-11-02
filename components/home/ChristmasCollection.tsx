import type { Product } from "@/domain/product";
import { ProductCard } from "@/components/product/ProductCard";
import { Sparkle } from "@/components/brand/Sparkle";
import { Section, Eyebrow } from "@/components/ui/Section";

/** Colección de temporada: todos los juegos de Navidad, Nochevieja y Reyes. */
export function ChristmasCollection({ products }: { products: Product[] }) {
  if (products.length === 0) return null;

  return (
    <Section labelledBy="navidad-title" className="relative overflow-hidden bg-lavender">
      <Sparkle className="absolute right-6 top-8 h-8 w-8 text-yellow" />
      <Sparkle className="absolute bottom-10 left-6 h-5 w-5 text-coral" />
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <Eyebrow className="text-indigo">Colección de Navidad</Eyebrow>
          <h2 id="navidad-title" className="text-4xl font-black sm:text-5xl">
            De Nochebuena a Reyes
          </h2>
        </div>
        <p className="max-w-sm text-ink/80">
          Juegos para imprimir y sacar en cada comida de estas fiestas: sobremesa, amigo invisible, Nochevieja y misterio.
        </p>
      </div>

      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
