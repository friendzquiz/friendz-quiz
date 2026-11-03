import Link from "next/link";
import { site } from "@/config/site";
import { Logo } from "@/components/brand/Logo";
import { SocialLinks } from "@/components/brand/SocialLinks";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-white px-4 py-12 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-ink/80">{site.claim} Una excusa para jugar juntos: en la mesa, en Instagram cada lunes y muy pronto en el móvil.</p>
          <SocialLinks className="mt-4" />
        </div>
        <nav aria-label="Secciones">
          <h2 className="mb-3 text-base font-extrabold">Friendz Quiz</h2>
          <ul className="space-y-1">
            {site.nav.slice(1).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-10 items-center text-sm hover:text-indigo hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Legal">
          <h2 className="mb-3 text-base font-extrabold">Legal</h2>
          <ul className="space-y-1">
            {site.legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-10 items-center text-sm hover:text-indigo hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="mx-auto mt-10 max-w-6xl border-t border-ink/10 pt-6 text-sm text-ink/70">
        © {new Date().getFullYear()} Friendz Quiz ·{" "}
        <a href={site.instagram.url} className="hover:text-indigo hover:underline" target="_blank" rel="noopener noreferrer">
          {site.instagram.handle} en Instagram<span className="sr-only"> (se abre en una pestaña nueva)</span>
        </a>
      </p>
    </footer>
  );
}
