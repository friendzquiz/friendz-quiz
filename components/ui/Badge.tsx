import type { ReactNode } from "react";

type Tone = "mint" | "yellow" | "coral" | "pink" | "lavender" | "ink" | "white";

const tones: Record<Tone, string> = {
  mint: "bg-mint text-ink",
  yellow: "bg-yellow text-ink",
  coral: "bg-coral text-ink",
  pink: "bg-pink text-ink",
  lavender: "bg-lavender text-indigo",
  ink: "bg-ink text-white",
  white: "bg-white text-ink",
};

export function Badge({ children, tone = "mint", className = "" }: { children: ReactNode; tone?: Tone; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 font-display text-[13px] font-bold leading-none ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
