import type { Product } from "@/domain/product";
import { Hero } from "./Hero";
import { FeaturedGames } from "./FeaturedGames";
import { PrintablePacks } from "./PrintablePacks";
import { OnlineComingSoon } from "./OnlineComingSoon";
import { ForCompanies } from "./ForCompanies";
import { Community } from "./Community";

export interface HomePageData {
  featured: Product[];
  highlightedPrintable?: Product;
  /** Colección de temporada (ahora no se muestra en la Home). */
  christmas?: Product[];
}

/** Vista de la Home. Recibe los datos ya cargados: no sabe de dónde vienen. */
export function HomePage({ featured, highlightedPrintable }: HomePageData) {
  return (
    <>
      <Hero />
      <FeaturedGames products={featured} />
      <PrintablePacks product={highlightedPrintable} />
      <Community />
      <OnlineComingSoon />
      <ForCompanies />
    </>
  );
}
