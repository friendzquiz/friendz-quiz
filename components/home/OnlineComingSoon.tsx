import { Cerebrito } from "@/components/brand/Cerebrito";
import { Sparkle } from "@/components/brand/Sparkle";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow } from "@/components/ui/Section";

const features = [
  "Crea una partida",
  "Comparte el código",
  "Invita a tus amigos",
  "Juega desde el móvil",
  "Compite y mira los resultados",
];

const players = [
  { name: "Laura", tone: "bg-pink" },
  { name: "Los Turrones Duros", tone: "bg-yellow" },
  { name: "Marcos", tone: "bg-mint" },
];

/** Vista conceptual de la futura partida online. No es funcional. */
function PhoneMock() {
  return (
    <div className="relative mx-auto w-[260px] sm:w-[280px]" aria-hidden="true">
      <div className="rounded-[2.5rem] border-[6px] border-ink bg-white p-5 text-ink shadow-card">
        <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-grey" />
        <p className="text-center font-display text-xs font-bold uppercase tracking-widest text-ink/70">Código de partida</p>
        <p className="mt-1 text-center font-display text-4xl font-black tracking-[0.2em] text-indigo">FZ4821</p>
        <p className="mt-5 font-display text-sm font-extrabold">En la sala · 3 jugadores</p>
        <ul className="mt-2 space-y-2">
          {players.map((p) => (
            <li key={p.name} className="flex items-center gap-2 rounded-xl bg-grey px-3 py-2">
              <span className={`h-6 w-6 rounded-full ${p.tone}`} />
              <span className="text-sm font-semibold">{p.name}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5 rounded-full bg-coral py-3 text-center font-display font-extrabold text-ink">Empezar partida</div>
      </div>
      <Cerebrito mood="surprised" pose="up" className="absolute -right-10 -top-12 h-28 w-auto sm:-right-14" />
    </div>
  );
}

export function OnlineComingSoon() {
  return (
    <section id="online" aria-labelledby="online-title" className="on-dark relative overflow-hidden bg-indigo px-4 py-16 text-white sm:px-6 md:py-24">
      <Sparkle className="absolute left-[6%] top-10 h-6 w-6 text-yellow" />
      <Sparkle className="absolute bottom-12 right-[8%] h-10 w-10 text-pink" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.1fr_1fr]">
        <div>
          <Eyebrow className="text-yellow">Jugar online</Eyebrow>
          <h2 id="online-title" className="text-4xl font-black sm:text-5xl">
            Próxima partida: online
          </h2>
          <p className="mt-4 max-w-lg text-lg text-white/90">
            Estamos construyendo la forma de jugar a Friendz Quiz desde el móvil, estéis juntos en la misma mesa o cada uno en su casa.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {features.map((f, i) => (
              <li key={f} className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 font-display font-extrabold">
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-yellow text-ink" aria-hidden="true">
                  {i + 1}
                </span>
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Badge tone="yellow">En desarrollo</Badge>
            <p className="text-white/90">Te avisaremos por Instagram en cuanto puedas jugar.</p>
          </div>
        </div>
        <PhoneMock />
      </div>
    </section>
  );
}
