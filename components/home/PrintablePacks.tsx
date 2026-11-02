import Image from "next/image";
import { coverImage, formatPlayers, formatPrice, productPath, type Product } from "@/domain/product";
import { Sparkle } from "@/components/brand/Sparkle";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Badge } from "@/components/ui/Badge";
import { Section, Eyebrow } from "@/components/ui/Section";

const steps = [
  { n: "1", title: "Descárgalo", text: "Recibes el PDF al momento." },
  { n: "2", title: "Imprímelo", text: "En casa, en A4 y a doble cara: está todo preparado." },
  { n: "3", title: "A jugar", text: "En grupo o por equipos, con marcador." },
];

export function PrintablePacks({ product }: { product?: Product }) {
  if (!product) return null;
  const cover = coverImage(product);
  const interiors = product.images.filter((img) => img.role === "interior").slice(0, 2);

  return (
    <Section labelledBy="packs-title">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Abanico con portada y páginas reales del juego */}
        <div className="relative mx-auto h-[360px] w-full max-w-[440px] sm:h-[440px]">
          <div className="absolute inset-x-6 bottom-0 top-10 rounded-[2rem] bg-coral" aria-hidden="true" />
          <Sparkle className="absolute right-2 top-2 h-8 w-8 text-yellow" />
          {interiors.map((img, i) => (
            <Image
              key={img.src}
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              sizes="220px"
              className={`absolute top-6 w-[44%] rounded-lg border-2 border-ink shadow-card ${
                i === 0 ? "left-[4%] -rotate-[9deg]" : "right-[4%] rotate-[9deg]"
              }`}
            />
          ))}
          {cover && (
            <Image
              src={cover.src}
              alt={cover.alt}
              width={cover.width}
              height={cover.height}
              sizes="260px"
              className="absolute left-1/2 top-0 w-[54%] -translate-x-1/2 rounded-lg border-2 border-ink shadow-card"
            />
          )}
        </div>

        <div>
          <Eyebrow className="text-indigo">Imprimibles</Eyebrow>
          <h2 id="packs-title" className="text-4xl font-black sm:text-5xl">
            Imprime la diversión
          </h2>
          <p className="mt-4 max-w-lg text-lg text-ink/85">
            Una de las formas de jugar hoy con Friendz Quiz: juegos listos para imprimir y sacar en cualquier reunión.
          </p>

          <ol className="mt-8 grid gap-3 sm:grid-cols-3">
            {steps.map((s) => (
              <li key={s.n} className="rounded-2xl border-2 border-ink bg-white p-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow font-display text-lg font-black" aria-hidden="true">
                  {s.n}
                </span>
                <p className="mt-3 font-display text-lg font-extrabold">{s.title}</p>
                <p className="text-sm text-ink/80">{s.text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-8 rounded-card border-2 border-ink bg-white p-5 sm:p-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="mint">Nuevo</Badge>
              {product.season && <Badge tone="pink">{product.season}</Badge>}
            </div>
            <h3 className="mt-3 text-2xl font-black">{product.name}</h3>
            <p className="mt-2 text-ink/80">{product.shortDescription}</p>
            <p className="mt-2 text-sm text-ink/70">
              {formatPlayers(product.players)} · {product.format}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <ButtonLink href={productPath(product)} aria-describedby="packs-title">
                Ver juego
              </ButtonLink>
              {product.priceCents !== undefined && (
                <span className="font-display text-2xl font-black">{formatPrice(product.priceCents)}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
