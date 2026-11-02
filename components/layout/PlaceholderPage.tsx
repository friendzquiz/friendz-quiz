import type { ReactNode } from "react";
import { Cerebrito } from "@/components/brand/Cerebrito";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Badge } from "@/components/ui/Badge";

/** Página provisional con la identidad de la marca, para secciones aún en construcción. */
export function PlaceholderPage({ title, intro, children }: { title: string; intro: string; children?: ReactNode }) {
  return (
    <section aria-labelledby="page-title" className="px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <Cerebrito mood="thinking" pose="chin" className="mx-auto h-36 w-auto" />
        <div className="mt-6">
          <Badge tone="yellow">En construcción</Badge>
        </div>
        <h1 id="page-title" className="mt-4 text-4xl font-black sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-ink/85">{intro}</p>
        {children && <div className="mt-8 text-left">{children}</div>}
        <div className="mt-10 flex justify-center">
          <ButtonLink href="/juegos">Ver juegos</ButtonLink>
        </div>
      </div>
    </section>
  );
}
