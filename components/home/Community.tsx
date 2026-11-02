import { site } from "@/config/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section, Eyebrow } from "@/components/ui/Section";

const dayTones = ["bg-blue", "bg-lavender", "bg-lavender", "bg-lavender", "bg-yellow"];

/** Comunidad de Instagram sin incrustar el feed (evita cookies de terceros). */
export function Community() {
  return (
    <Section labelledBy="comunidad-title">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <Eyebrow className="text-indigo">Comunidad</Eyebrow>
          <h2 id="comunidad-title" className="text-4xl font-black sm:text-5xl">
            También jugamos por Instagram
          </h2>
          <p className="mt-4 max-w-md text-lg text-ink/85">
            Friendz Quiz nació allí. Cada lunes hay un reto nuevo para resolver, comentar y compartir con quien siempre dice que lo sabe todo.
          </p>
          <p className="mt-4 font-display text-sm font-extrabold uppercase tracking-wider text-indigo">Las temáticas, por turnos</p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {site.challengeCycle.map((t, i) => (
              <li key={t} className="rounded-full border-2 border-ink bg-white px-3 py-1 font-display text-sm font-extrabold">
                {i + 1}. {t}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <ButtonLink href={site.instagram.url} variant="secondary" external>
              Seguir a {site.instagram.handle}
            </ButtonLink>
          </div>
        </div>
        <ol className="grid grid-cols-2 gap-3 sm:grid-cols-3" aria-label="La semana de cada reto">
          {site.weeklyChallenges.map((c, i) => (
            <li
              key={c.day}
              className={`flex min-h-32 flex-col justify-between rounded-2xl border-2 border-ink p-4 ${dayTones[i] ?? "bg-white"} ${
                i === 4 ? "col-span-2" : ""
              }`}
            >
              <span className="font-display text-sm font-extrabold uppercase tracking-wider">{c.day}</span>
              <span className="font-display text-lg font-black leading-tight">{c.topic}</span>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
