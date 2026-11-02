import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  labelledBy?: string;
}

/** Contenedor de sección con márgenes y ancho máximo comunes. */
export function Section({ id, children, className = "", labelledBy }: SectionProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`px-4 py-16 sm:px-6 md:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`mb-3 font-display text-sm font-extrabold uppercase tracking-[0.14em] ${className}`}>{children}</p>;
}
