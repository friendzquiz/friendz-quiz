"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import type { NavItem } from "@/config/site";

/** Menú desplegable para móvil y tablet. Se cierra con Escape y al elegir un enlace. */
export function MobileMenu({ items, currentPath = "/" }: { items: readonly NavItem[]; currentPath?: string }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex min-h-12 min-w-12 items-center justify-center gap-2 rounded-full border-2 border-ink px-4 font-display font-extrabold"
      >
        <span aria-hidden="true" className="relative block h-3 w-5">
          <span className={`absolute left-0 h-0.5 w-5 bg-ink transition-transform ${open ? "top-1.5 rotate-45" : "top-0"}`} />
          <span className={`absolute left-0 top-1.5 h-0.5 w-5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`absolute left-0 h-0.5 w-5 bg-ink transition-transform ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
        </span>
        Menú
      </button>
      <nav
        id={panelId}
        aria-label="Principal"
        hidden={!open}
        className="absolute inset-x-4 top-full mt-2 rounded-card border-2 border-ink bg-white p-3 shadow-card"
      >
        <ul className="flex flex-col">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={currentPath === item.href ? "page" : undefined}
                className="flex min-h-12 items-center rounded-xl px-4 font-display text-lg font-extrabold hover:bg-lavender aria-[current=page]:text-indigo"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
