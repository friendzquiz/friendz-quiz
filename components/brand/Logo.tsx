/** Logotipo definitivo (logo F: Cerebrito con bombilla + FRIENDZ QUIZ). SVG servido desde /public/brand. */
export function Logo({ className = "", variant = "color" }: { className?: string; variant?: "color" | "blanco" }) {
  const src = variant === "blanco" ? "/brand/logo-friendz-quiz-blanco.svg" : "/brand/logo-friendz-quiz.svg";
  return (
    // eslint-disable-next-line @next/next/no-img-element -- SVG vectorial pequeño, no necesita optimización
    <img src={src} alt="Friendz Quiz" width={729} height={150} className={`h-8 w-auto ${className}`} />
  );
}
