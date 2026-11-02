import type { Product } from "@/domain/product";
import { Hero } from "./Hero";
import { FeaturedGames } from "./FeaturedGames";
import { PrintablePacks } from "./PrintablePacks";
import { ChristmasCollection } from "./ChristmasCollection";
import { OnlineComingSoon } from "./OnlineComingSoon";
import { ForCompanies } from "./ForCompanies";
import { Community } from "./Community";
import { FinalCta } from "./FinalCta";

export interface HomePageData {
  featured: Product[];
  highlightedPrintable?: Product;
  christmas: Product[];
}

/** Vista de la Home. Recibe los datos ya cargados: no sabe de dónde vienen. */
export function HomePage({ featured, highlightedPrintable, christmas }: HomePageData) {
  return (
    <>
      <Hero />
      <FeaturedGames products={featured} />
      <ChristmasCollection products={christmas} />
      <PrintablePacks product={highlightedPrintable} />
      <OnlineComingSoon />
      <ForCompanies />
      <Community />
      <FinalCta />
    </>
  );
}
