import type { Metadata } from "next";
import { getProducts } from "@/data/products";
import { CatalogGrid } from "@/components/catalog/CatalogGrid";

export const metadata: Metadata = {
  title: "Juegos",
  description: "Todos los juegos de Friendz Quiz: juegos imprimibles, juegos online y juegos de mesa para jugar en grupo.",
  alternates: { canonical: "/juegos" },
};

// Catálogo provisional: los filtros por modalidad, jugadores, duración y temporada llegarán en la siguiente fase.
export default async function JuegosPage() {
  const products = await getProducts();
  return (
    <section aria-labelledby="page-title" className="px-4 py-14 sm:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h1 id="page-title" className="text-4xl font-black sm:text-5xl">Juegos</h1>
        <p className="mt-3 max-w-xl text-lg text-ink/85">Para la mesa, para el móvil o para llevar a cualquier sitio.</p>
        <div className="mt-10">
          <CatalogGrid products={products} />
        </div>
      </div>
    </section>
  );
}
