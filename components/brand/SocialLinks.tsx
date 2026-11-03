import { site } from "@/config/site";

type Network = (typeof site.social)[number]["network"];

function Icon({ network }: { network: Network }) {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", "aria-hidden": true } as const;
  switch (network) {
    case "instagram":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4.2" />
          <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "tiktok":
      return (
        <svg {...common} fill="currentColor">
          <path d="M16.6 3c.4 2.2 1.9 3.8 4.1 4v3.1c-1.5 0-2.9-.4-4.1-1.2v6.3a5.8 5.8 0 1 1-5.8-5.8c.3 0 .6 0 .9.1v3.2a2.7 2.7 0 1 0 1.9 2.6V3h3Z" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...common} fill="currentColor">
          <path d="M13.5 21v-7.6h2.6l.4-3h-3V8.5c0-.9.3-1.5 1.5-1.5h1.6V4.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21h3.1Z" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...common} fill="currentColor">
          <path d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.6 12 5.6 12 5.6s-6 0-7.9.5A3 3 0 0 0 2 8.2 31 31 0 0 0 1.6 12 31 31 0 0 0 2 15.8a3 3 0 0 0 2.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 0 0 2.1-2.1c.3-1.2.4-2.5.4-3.8s-.1-2.6-.4-3.8ZM10 15V9l5.2 3L10 15Z" />
        </svg>
      );
  }
}

/** Enlaces a todas las redes de Friendz Quiz. */
export function SocialLinks({ withLabels = false, className = "" }: { withLabels?: boolean; className?: string }) {
  const items = site.social.filter((s) => s.url);
  return (
    <ul className={`flex flex-wrap gap-3 ${className}`} aria-label="Redes sociales de Friendz Quiz">
      {items.map((s) => (
        <li key={s.network}>
          <a
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-ink bg-white font-display font-extrabold text-ink transition-colors hover:bg-blue ${
              withLabels ? "px-4 py-2" : "h-11 w-11 justify-center"
            }`}
          >
            <Icon network={s.network} />
            {withLabels ? <span>{s.label}</span> : <span className="sr-only">{s.label}</span>}
            <span className="sr-only"> (se abre en una pestaña nueva)</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
