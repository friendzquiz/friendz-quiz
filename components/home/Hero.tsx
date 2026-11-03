import { site } from "@/config/site";
import { Cerebrito } from "@/components/brand/Cerebrito";
import { Sparkle } from "@/components/brand/Sparkle";
import { ButtonLink, ComingSoonButton } from "@/components/ui/ButtonLink";
import { Badge } from "@/components/ui/Badge";

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]" aria-hidden="true">
      <div className="absolute inset-[8%] rounded-full bg-white/25" />
      <Sparkle className="absolute right-[2%] top-[40%] h-9 w-9 text-yellow" />
      <Sparkle className="absolute left-[2%] top-[38%] h-5 w-5 text-white" />

      {/* Tarjeta de pregunta */}
      <div
        className="animate-card-in absolute left-0 top-[12%] w-[52%] rounded-2xl border-2 border-ink bg-white p-3 shadow-card sm:p-4"
        style={{ ["--tilt" as string]: "-7deg", animationDelay: "80ms" }}
      >
        <span className="inline-block rounded-full bg-mint px-2.5 py-0.5 font-display text-[11px] font-bold">Cine</span>
        <p className="mt-2 font-display text-[13px] font-extrabold leading-snug sm:text-[15px]">
          ¿Cómo se llaman los dos ladrones de «Solo en casa»?
        </p>
        <span className="mt-2 inline-block rounded-full bg-coral px-2.5 py-0.5 font-display text-[11px] font-bold">Experto · 2 pts</span>
      </div>

      {/* Tarjeta de emojis */}
      <div
        className="animate-card-in absolute right-0 top-[2%] w-[38%] rounded-2xl border-2 border-ink bg-white p-3 text-center shadow-card"
        style={{ ["--tilt" as string]: "8deg", animationDelay: "200ms" }}
      >
        <p className="font-display text-[11px] font-bold text-indigo">¿Qué peli es?</p>
        <p className="mt-1 text-2xl leading-none sm:text-3xl">🏠👦😱</p>
      </div>

      {/* Marcador */}
      <div
        className="animate-card-in absolute bottom-[4%] left-[4%] w-[44%] rounded-2xl border-2 border-ink bg-yellow p-3 shadow-card"
        style={{ ["--tilt" as string]: "4deg", animationDelay: "320ms" }}
      >
        <p className="font-display text-[11px] font-bold uppercase tracking-wider">Marcador</p>
        <div className="mt-1 flex items-baseline justify-between gap-2 font-display font-extrabold">
          <span className="text-[13px] leading-tight">Los Turrones Duros</span>
          <span className="text-xl font-black">12</span>
        </div>
      </div>

      <Cerebrito mood="happy" pose="wave" className="absolute bottom-[2%] right-[6%] h-[64%] w-auto" />
    </div>
  );
}

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-blue px-4 pb-16 pt-10 sm:px-6 md:pb-24 md:pt-16">
      <Sparkle className="absolute left-[4%] top-8 hidden h-6 w-6 text-yellow md:block" />
      <Sparkle className="absolute bottom-10 left-[44%] hidden h-5 w-5 text-white md:block" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.05fr_1fr] md:gap-8">
        <div>
          <h1 id="hero-title" className="font-black leading-[0.98] tracking-tight">
            <span className="mb-4 block font-display text-sm font-extrabold uppercase tracking-[0.18em] text-ink">Friendz Quiz</span>
            <span className="block text-[44px] text-white sm:text-6xl lg:text-7xl">Jugar.</span>
            <span className="block text-[44px] text-ink sm:text-6xl lg:text-7xl">Reír.</span>
            <span className="relative inline-block text-[44px] sm:text-6xl lg:text-7xl">
              <span className="relative z-10 text-white">Conectar.</span>
              <span aria-hidden="true" className="absolute inset-x-0 bottom-1 z-0 h-4 rounded-full bg-pink sm:h-5" />
            </span>
          </h1>
          <p className="mt-6 max-w-md text-lg font-semibold leading-relaxed text-ink sm:text-xl">
            Retos, quizzes y juegos para imprimir: para divertirte con tu gente y aprender jugando. Una excusa para jugar juntos.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="/juegos">Ver juegos</ButtonLink>
            <ComingSoonButton>
              Jugar online <Badge tone="yellow">Próximamente</Badge>
            </ComingSoonButton>
          </div>
          <p className="mt-4 text-sm font-semibold text-ink">Un reto nuevo cada lunes en {site.instagram.handle} · ¿Jugamos?</p>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}
