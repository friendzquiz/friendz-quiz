import type { Metadata } from "next";
import { site } from "@/config/site";
import { getFeaturedProducts, getHighlightedPrintable, getSeasonProducts } from "@/data/products";
import { HomePage } from "@/components/home/HomePage";

export const metadata: Metadata = {
  title: { absolute: site.title },
  description: site.description,
  alternates: { canonical: "/" },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/og.png`,
  sameAs: [site.instagram.url],
};

export default async function Page() {
  // La Home solo habla con la capa de datos, nunca con los archivos del catálogo.
  const [featured, highlightedPrintable, christmas] = await Promise.all([
    getFeaturedProducts(4),
    getHighlightedPrintable(),
    getSeasonProducts("Navidad"),
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <HomePage featured={featured} highlightedPrintable={highlightedPrintable} christmas={christmas} />
    </>
  );
}
