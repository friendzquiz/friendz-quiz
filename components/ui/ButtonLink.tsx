import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "light";

const variants: Record<Variant, string> = {
  // Deep Indigo + blanco (6,1:1)
  primary: "bg-indigo text-white hover:bg-ink",
  // Coral + Ink (6,3:1): nunca texto blanco sobre coral
  secondary: "bg-coral text-ink hover:bg-yellow",
  outline: "border-2 border-ink text-ink hover:bg-ink hover:text-white",
  // Para fondos oscuros (sección online)
  light: "bg-white text-indigo hover:bg-yellow hover:text-ink",
};

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
  "aria-describedby"?: string;
}

export function ButtonLink({ href, children, variant = "primary", external, className = "", ...rest }: ButtonLinkProps) {
  const classes = `inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 font-display text-base font-extrabold transition-colors duration-200 ${variants[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
        <span className="sr-only"> (se abre en una pestaña nueva)</span>
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}

/** Botón deshabilitado visualmente para funciones que todavía no existen. */
export function ComingSoonButton({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex min-h-12 cursor-not-allowed items-center justify-center gap-2 rounded-full border-2 border-dashed border-ink/50 px-6 py-3 font-display text-base font-extrabold text-ink ${className}`}
      aria-disabled="true"
    >
      {children}
    </span>
  );
}
