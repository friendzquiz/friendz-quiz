import type { Modality } from "@/domain/product";
import { Cerebrito, type CerebritoMood, type CerebritoPose } from "@/components/brand/Cerebrito";
import { Sparkle } from "@/components/brand/Sparkle";

/**
 * Ilustración de marca para productos que aún no tienen imagen.
 * Cambia el fondo y la pose según la modalidad, con el mismo Cerebrito.
 */
const looks: Record<Modality, { bg: string; mood: CerebritoMood; pose: CerebritoPose; deco: string }> = {
  printable: { bg: "bg-mint", mood: "happy", pose: "hips", deco: "text-cream" },
  online: { bg: "bg-blue", mood: "surprised", pose: "up", deco: "text-yellow" },
  physical: { bg: "bg-yellow", mood: "thinking", pose: "chin", deco: "text-white" },
};

export function ProductArt({ modality }: { modality: Modality }) {
  const look = looks[modality];
  return (
    <div className={`relative flex h-full w-full items-end justify-center overflow-hidden ${look.bg}`} aria-hidden="true">
      {modality === "online" && (
        <span className="absolute left-5 top-14 rounded-xl bg-white px-3 py-1.5 font-display text-sm font-black tracking-[0.2em] text-indigo">
          FZ4821
        </span>
      )}
      {modality === "physical" && (
        <>
          <span className="absolute left-[18%] top-[16%] h-24 w-16 -rotate-12 rounded-xl border-2 border-ink bg-white" />
          <span className="absolute left-[26%] top-[12%] h-24 w-16 rotate-6 rounded-xl border-2 border-ink bg-coral" />
        </>
      )}
      {modality === "printable" && (
        <span className="absolute right-[14%] top-[14%] h-28 w-20 rotate-6 rounded-lg bg-white shadow-card" />
      )}
      <Sparkle className={`absolute right-6 top-6 h-6 w-6 ${look.deco}`} />
      <Sparkle className={`absolute bottom-10 left-6 h-4 w-4 ${look.deco}`} />
      <Cerebrito mood={look.mood} pose={look.pose} className="relative -mb-4 h-[72%] w-auto" />
    </div>
  );
}
