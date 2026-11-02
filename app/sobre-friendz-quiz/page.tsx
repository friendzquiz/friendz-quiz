import type { Metadata } from "next";
import { site } from "@/config/site";
import { Cerebrito } from "@/components/brand/Cerebrito";
import { Sparkle } from "@/components/brand/Sparkle";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Eyebrow } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Sobre Friendz Quiz",
  description: "Friendz Quiz tiene dos misiones: divertirnos juntos y aprender jugando. Retos, quizzes y juegos para imprimir.",
  alternates: { canonical: "/sobre-friendz-quiz" },
};

const missions = [
  { title: "Divertirnos juntos", text: "Juegos para la sobremesa, la cena con amigos o la fiesta: que todo el mundo participe y nadie se quede mirando el móvil." },
  { title: "Aprender jugando", text: "Retos de lógica, palabras, cine y curiosidades. Cada dato está comprobado, porque aprender también puede ser una forma de pasarlo bien." },
];

export default function Page() {
  return (
    <>
      <section aria-labelledby="page-title" className="relative overflow-hidden bg-blue px-4 py-16 sm:px-6 md:py-24">
        <Sparkle className="absolute right-[8%] top-10 h-8 w-8 text-yellow" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.3fr_1fr]">
          <div>
            <Eyebrow className="text-ink">Sobre Friendz Quiz</Eyebrow>
            <h1 id="page-title" className="text-4xl font-black text-white sm:text-6xl">Una excusa para jugar juntos</h1>
            <p className="mt-5 max-w-xl text-lg font-semibold text-ink">
              Friendz Quiz nació en Instagram, con retos para resolver y compartir. Hoy también creamos juegos para imprimir y sacar en la mesa, y muy pronto podrás jugar desde el móvil.
            </p>
          </div>
          <Cerebrito mood="happy" pose="wave" className="mx-auto h-56 w-auto md:h-72" />
        </div>
      </section>

      <section aria-labelledby="misiones-title" className="px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Eyebrow className="text-indigo">Lo que nos mueve</Eyebrow>
          <h2 id="misiones-title" className="text-4xl font-black sm:text-5xl">Dos misiones que pesan lo mismo</h2>
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {missions.map((m, i) => (
              <li key={m.title} className="rounded-card border-2 border-ink bg-white p-6 sm:p-8">
                <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full font-display text-lg font-black ${i === 0 ? "bg-pink" : "bg-mint"}`} aria-hidden="true">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-2xl font-black">{m.title}</h3>
                <p className="mt-2 text-lg text-ink/85">{m.text}</p>
              </li>
            ))}
          </ul>
          <blockquote className="mx-auto mt-12 max-w-3xl rounded-card bg-lavender p-8 text-center">
            <p className="font-display text-2xl font-black leading-snug sm:text-3xl">
              «Porque aprender también puede ser una forma de pasarlo bien. Y pasarlo bien es todavía mejor cuando lo haces con otros.»
            </p>
          </blockquote>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/juegos">Ver juegos</ButtonLink>
            <ButtonLink href={site.instagram.url} variant="outline" external>
              Un reto cada lunes en {site.instagram.handle}
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
