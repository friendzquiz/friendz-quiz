import { Cerebrito } from "@/components/brand/Cerebrito";
import { Sparkle } from "@/components/brand/Sparkle";
import { SocialLinks } from "@/components/brand/SocialLinks";
import { Section, Eyebrow } from "@/components/ui/Section";

/**
 * Temas de los retos alrededor del Cerebrito. Sin orden ni calendario:
 * se pueden añadir o cambiar temas sin tocar el diseño.
 */
const topics = [
  { label: "Lógica", tone: "bg-yellow", pos: "left-[2%] top-[8%] -rotate-6" },
  { label: "Palabras", tone: "bg-mint", pos: "right-[2%] top-[4%] rotate-6" },
  { label: "Cine", tone: "bg-pink", pos: "left-[0%] top-[46%] rotate-3" },
  { label: "Curiosidades", tone: "bg-white", pos: "right-[0%] top-[44%] -rotate-3" },
  { label: "Adivinanzas", tone: "bg-blue", pos: "left-[8%] bottom-[4%] rotate-2" },
  { label: "¿Y el próximo?", tone: "bg-coral", pos: "right-[6%] bottom-[2%] -rotate-2" },
];

function TopicsAroundCerebrito() {
  return (
    <>
      {/* Escritorio y tableta: temas alrededor del Cerebrito */}
      <div className="relative mx-auto hidden aspect-[5/4] w-full max-w-[520px] sm:block" aria-hidden="true">
        <div className="absolute inset-[14%] rounded-full bg-blue" />
        <Sparkle className="absolute left-[44%] top-[2%] h-7 w-7 text-yellow" />
        <Cerebrito mood="happy" pose="up" className="absolute left-1/2 top-1/2 h-[56%] w-auto -translate-x-1/2 -translate-y-1/2" />
        {topics.map((t) => (
          <span
            key={t.label}
            className={`absolute rounded-full border-2 border-ink px-4 py-2 font-display text-lg font-black shadow-card ${t.tone} ${t.pos}`}
          >
            {t.label}
          </span>
        ))}
      </div>
      {/* Móvil: Cerebrito y temas debajo */}
      <div className="sm:hidden" aria-hidden="true">
        <div className="relative mx-auto h-44 w-44">
          <div className="absolute inset-0 rounded-full bg-blue" />
          <Cerebrito mood="happy" pose="up" className="absolute left-1/2 top-1/2 h-[78%] w-auto -translate-x-1/2 -translate-y-1/2" />
        </div>
        <ul className="mt-5 flex flex-wrap justify-center gap-2">
          {topics.map((t) => (
            <li key={t.label} className={`rounded-full border-2 border-ink px-3 py-1.5 font-display font-black ${t.tone}`}>
              {t.label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

/** Comunidad: retos semanales y todas las redes. Sin incrustar feeds (evita cookies de terceros). */
export function Community() {
  return (
    <Section labelledBy="comunidad-title" className="bg-lavender">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <Eyebrow className="text-indigo">Comunidad</Eyebrow>
          <h2 id="comunidad-title" className="text-4xl font-black sm:text-5xl">
            Un reto nuevo cada lunes
          </h2>
          <p className="mt-4 max-w-md text-lg text-ink/85">
            Friendz Quiz nació en las redes: retos de lógica, palabras, cine, curiosidades… para resolver, comentar y compartir con quien siempre dice que lo sabe todo.
          </p>
          <p className="mt-6 font-display text-sm font-extrabold uppercase tracking-wider text-indigo">Síguenos y juega</p>
          <SocialLinks withLabels className="mt-3" />
        </div>
        <TopicsAroundCerebrito />
      </div>
    </Section>
  );
}
