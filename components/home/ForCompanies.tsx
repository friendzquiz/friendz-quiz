import { Cerebrito } from "@/components/brand/Cerebrito";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section, Eyebrow } from "@/components/ui/Section";

const uses = ["Team building", "Eventos", "Reuniones", "Dinámicas de grupo"];

export function ForCompanies() {
  return (
    <Section labelledBy="empresas-title" className="bg-lavender">
      <div className="grid items-center gap-10 md:grid-cols-[auto_1fr]">
        <Cerebrito mood="thinking" pose="chin" className="mx-auto h-44 w-auto md:h-56" />
        <div>
          <Eyebrow className="text-indigo">Para empresas</Eyebrow>
          <h2 id="empresas-title" className="text-4xl font-black sm:text-5xl">
            El rompehielos que tu equipo sí quiere jugar
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink/85">
            Preguntas, retos y piques sanos para conectar a la gente, sin dinámicas forzadas.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {uses.map((u) => (
              <li key={u} className="rounded-full border-2 border-ink bg-white px-4 py-2 font-display font-extrabold">
                {u}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <ButtonLink href="/para-empresas">Descubrir Friendz Quiz para empresas</ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
