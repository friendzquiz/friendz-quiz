import Link from "next/link";
import { site } from "@/config/site";
import { Logo } from "@/components/brand/Logo";
import { MobileMenu } from "./MobileMenu";

export function SiteHeader({ currentPath = "/" }: { currentPath?: string }) {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-indigo focus:px-4 focus:py-2 focus:text-white"
      >
        Saltar al contenido
      </a>
      <div className="relative mx-auto flex h-18 max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" aria-label="Friendz Quiz, inicio" className="inline-flex min-h-11 items-center rounded-full">
          <Logo />
        </Link>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {site.nav.slice(1).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={currentPath === item.href ? "page" : undefined}
                  className="inline-flex min-h-11 items-center rounded-full px-3 font-display text-[15px] font-bold text-ink transition-colors hover:bg-lavender aria-[current=page]:text-indigo"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <MobileMenu items={site.nav} currentPath={currentPath} />
      </div>
    </header>
  );
}
