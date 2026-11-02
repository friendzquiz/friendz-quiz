import type { Metadata } from "next";
import { Cerebrito } from "@/components/brand/Cerebrito";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Eyebrow } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Cómo funciona",
  description: "Elige un juego, descárgalo al momento, imprímelo en casa a doble cara y a jugar.",
  alternates: { canonical: "/como-funciona" },
};

const steps = [
  { title: "Elige tu juego", text: "Para la sobremesa, el amigo invisible, una cena de misterio o el día de Reyes. En cada ficha verás para cuántas personas es y qué incluye." },
  { title: "Descárgalo al momento", text: "Pagas de forma segura y recibes el PDF enseguida. Sin envíos ni esperas." },
  { title: "Imprímelo a doble cara", text: "Todo el PDF está preparado para imprimirse de una vez a doble cara, girando por el lado largo: cada carta cae detrás de su reverso y lo que se recorta lleva detrás una página en blanco a propósito." },
  { title: "Recorta y a jugar", text: "Las hojas con el símbolo de copias se pueden imprimir más veces si sois más. Junta a tu gente, reparte y que empiece la partida." },
];

export default function Page() {
  return (
    <section aria-labelledby="page-title" className="px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <Eyebrow className="text-indigo">Cómo funciona</Eyebrow>
            <h1 id="page-title" className="text-4xl font-black sm:text-6xl">Descargar, imprimir y jugar</h1>
            <p className="mt-4 max-w-xl text-lg text-ink/85">Nuestros juegos son PDF para imprimir en casa. Interiores en blanco, para gastar poca tinta.</p>
          </div>
          <Cerebrito mood="happy" pose="up" className="mx-auto h-40 w-auto" />
        </div>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-card border-2 border-ink bg-white p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue font-display text-lg font-black text-ink" aria-hidden="true">
                {i + 1}
              </span>
              <h2 className="mt-4 text-2xl font-black">{s.title}</h2>
              <p className="mt-2 text-ink/85">{s.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10 rounded-card bg-lavender p-6 text-ink">
          Los juegos son para uso personal y familiar: imprime tantas copias como necesites para jugar, pero no se pueden revender ni compartir.
        </p>
        <div className="mt-10 flex justify-center">
          <ButtonLink href="/juegos">Ver juegos</ButtonLink>
        </div>
      </div>
    </section>
  );
}
