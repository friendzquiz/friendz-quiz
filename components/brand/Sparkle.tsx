/** Estrella de cuatro puntas de la marca. Decorativa. Hereda el color con `currentColor`. */
export function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" focusable="false">
      <path d="M20,2 Q22,18 38,20 Q22,22 20,38 Q18,22 2,20 Q18,18 20,2 Z" fill="currentColor" />
    </svg>
  );
}
