import type { Metadata } from "next";
import { getProducts } from "@/data/products";
import { CatalogGrid } from "@/components/catalog/CatalogGrid";

export const metadata: Metadata = {
  title: "Imprimibles",
  description: "Juegos para descargar, imprimir en casa y jugar en grupo.",
  alternates: { canonical: "/packs-imprimibles" },
};

export default async function PacksPage() {
  const products = await getProducts({ modality: "printable" });
  return (
    <section aria-labelledby="page-title" className="px-4 py-14 sm:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h1 id="page-title" className="text-4xl font-black sm:text-5xl">Imprimibles</h1>
        <p className="mt-3 max-w-xl text-lg text-ink/85">Descárgalos, imprímelos en casa y sácalos en la próxima reunión.</p>
        <div className="mt-10">
          <CatalogGrid products={products} />
        </div>
      </div>
    </section>
  );
}
