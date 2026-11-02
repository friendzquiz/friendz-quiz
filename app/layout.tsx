import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import type { ReactNode } from "react";
import { site } from "@/config/site";
import { brandColors } from "@/config/brand";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import "./globals.css";

// next/font descarga las fuentes al compilar y las sirve desde el propio dominio:
// los visitantes no hacen ninguna petición a Google Fonts.
// Nunito es la única tipografía de la web: textos (400-600), titulares y botones (700-900).
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"], variable: "--font-nunito", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: "%s | Friendz Quiz" },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    locale: site.locale,
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Friendz Quiz · Jugar. Reír. Conectar." }],
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description, images: ["/og.png"] },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: brandColors.cream.hex,
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={nunito.variable}>
      <body>
        <SiteHeader />
        <main id="contenido" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
