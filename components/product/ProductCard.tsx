import Image from "next/image";
import Link from "next/link";
import { coverImage, formatPlayers, formatPrice, productPath, type Product } from "@/domain/product";
import { DifficultyText, ModalityBadges, StatusBadge } from "./ProductBadges";
import { ProductArt } from "./ProductArt";

/**
 * Tarjeta de producto genérica: sirve para imprimibles, online y físicos.
 * Toda la tarjeta es clicable mediante el enlace del título.
 */
export function ProductCard({ product, headingLevel = "h3" }: { product: Product; headingLevel?: "h2" | "h3" }) {
  const cover = coverImage(product);
  const Heading = headingLevel;
  const ctaLabel = product.status === "available" ? "Ver juego" : "Ver detalles";
  const [firstModality = "printable"] = product.modalities;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-card border-2 border-ink bg-white transition-transform duration-200 motion-safe:hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden border-b-2 border-ink bg-lavender">
        {cover ? (
          <Image
            src={cover.src}
            alt=""
            width={cover.width}
            height={cover.height}
            sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 90vw"
            className="h-full w-full object-cover object-top transition-transform duration-300 motion-safe:group-hover:scale-[1.03]"
          />
        ) : (
          <ProductArt modality={firstModality} />
        )}
        <div className="absolute left-3 top-3">
          <StatusBadge product={product} />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <ModalityBadges product={product} />
        <Heading className="text-xl font-extrabold leading-tight">
          <Link href={productPath(product)} className="after:absolute after:inset-0 after:content-['']">
            {product.name}
          </Link>
        </Heading>
        <p className="text-[15px] leading-relaxed text-ink/80">{product.shortDescription}</p>
        <dl className="mt-auto grid grid-cols-2 gap-x-3 gap-y-1 text-sm text-ink/75">
          <div>
            <dt className="sr-only">Jugadores</dt>
            <dd>{formatPlayers(product.players)}</dd>
          </div>
          {product.difficulty && (
            <div>
              <dt className="sr-only">Dificultad</dt>
              <dd>
                <DifficultyText product={product} />
              </dd>
            </div>
          )}
        </dl>
        <div className="flex items-center justify-between border-t border-ink/10 pt-3">
          <span className="font-display text-lg font-black">
            {product.status === "available" && product.priceCents !== undefined ? formatPrice(product.priceCents) : ""}
          </span>
          <span aria-hidden="true" className="font-display text-sm font-extrabold text-indigo group-hover:underline">
            {ctaLabel} →
          </span>
        </div>
      </div>
    </article>
  );
}
