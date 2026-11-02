import { Cerebrito } from "@/components/brand/Cerebrito";
import { Sparkle } from "@/components/brand/Sparkle";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="px-4 pb-20 sm:px-6">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border-2 border-ink bg-yellow px-6 py-12 text-center sm:px-12 md:py-16">
        <Sparkle className="absolute left-8 top-8 h-8 w-8 text-white" />
        <Sparkle className="absolute bottom-10 right-10 h-6 w-6 text-coral" />
        <Cerebrito mood="happy" pose="up" className="mx-auto h-28 w-auto" />
        <h2 id="cta-title" className="mt-4 text-4xl font-black sm:text-6xl">
          ¿Listos para jugar?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-lg">Elige un juego, junta a tu gente y que empiece la partida.</p>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/juegos">Ver juegos</ButtonLink>
        </div>
      </div>
    </section>
  );
}
