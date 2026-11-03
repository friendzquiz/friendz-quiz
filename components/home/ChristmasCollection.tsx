import type { Product } from "@/domain/product";
import { Cerebrito } from "@/components/brand/Cerebrito";
import { Sparkle } from "@/components/brand/Sparkle";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Eyebrow } from "@/components/ui/Section";

/** Banner de la colección de temporada. No repite las fichas: lleva al catálogo de imprimibles. */
export function ChristmasCollection({ products }: { products: Product[] }) {
  if (products.length === 0) return null;
  const moments = ["Sobremesa", "Amigo invisible", "Nochevieja", "Misterio", "Reyes"];

  return (
    <section aria-labelledby="navidad-title" className="px-4 py-12 sm:px-6 md:py-16">
      <div className="relative mx-auto grid max-w-6xl items-center gap-8 overflow-hidden rounded-[2rem] border-2 border-ink bg-lavender px-6 py-10 sm:px-10 md:grid-cols-[1fr_auto]">
        <Sparkle className="absolute right-8 top-6 h-8 w-8 text-yellow" />
        <Sparkle className="absolute bottom-8 left-[48%] h-5 w-5 text-coral" />
        <div>
          <Eyebrow className="text-indigo">Colección de Navidad</Eyebrow>
          <h2 id="navidad-title" className="text-4xl font-black sm:text-5xl">
            De Nochebuena a Reyes
          </h2>
          <p className="mt-3 max-w-xl text-lg text-ink/85">
            {products.length} juegos para imprimir y sacar en cada comida de estas fiestas.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {moments.map((m) => (
              <li key={m} className="rounded-full border-2 border-ink bg-white px-3 py-1 font-display text-sm font-extrabold">
                {m}
              </li>
            ))}
          </ul>
          <div className="mt-7">
            <ButtonLink href="/packs-imprimibles">Ver la colección</ButtonLink>
          </div>
        </div>
        <Cerebrito mood="happy" pose="wave" hat className="mx-auto h-44 w-auto md:h-56" />
      </div>
    </section>
  );
}
