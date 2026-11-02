import type { Product } from "@/domain/product";
import { ProductCard } from "@/components/product/ProductCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section, Eyebrow } from "@/components/ui/Section";

export function FeaturedGames({ products }: { products: Product[] }) {
  return (
    <Section labelledBy="juegos-title" className="bg-white">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <Eyebrow className="text-indigo">Juegos</Eyebrow>
          <h2 id="juegos-title" className="text-4xl font-black sm:text-5xl">
            ¿A qué jugamos?
          </h2>
        </div>
        <p className="max-w-sm text-ink/80">Para la mesa, para el móvil o para llevar a cualquier sitio. Elige cómo jugar.</p>
      </div>

      {products.length > 0 ? (
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-10 rounded-card bg-grey p-8 text-center">Estamos preparando los primeros juegos. ¡Vuelve muy pronto!</p>
      )}

      <div className="mt-10 flex justify-center">
        <ButtonLink href="/juegos" variant="outline">
          Ver todos los juegos
        </ButtonLink>
      </div>
    </Section>
  );
}
