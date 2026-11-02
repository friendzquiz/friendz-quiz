import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug, getProducts } from "@/data/products";
import { formatPlayers, productPath } from "@/domain/product";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";
import { BuyButtons } from "@/components/product/BuyButtons";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return (await getProducts()).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getProductBySlug((await params).slug);
  if (!product) return {};
  return {
    title: { absolute: product.seo?.title ?? `${product.name} | Friendz Quiz` },
    description: product.seo?.description ?? product.shortDescription,
    keywords: product.seo?.keywords,
    alternates: { canonical: productPath(product) },
  };
}

// Ficha provisional. La ficha completa (galería, qué incluye, cómo se juega, FAQ y compra) es la siguiente fase.
export default async function ProductPage({ params }: Props) {
  const product = await getProductBySlug((await params).slug);
  if (!product) notFound();
  return (
    <PlaceholderPage title={product.name} intro={product.shortDescription}>
      <ul className="mx-auto max-w-md space-y-1 rounded-card border-2 border-ink bg-white p-6">
        <li>{formatPlayers(product.players)}</li>
        <li>Duración: {product.duration}</li>
        {product.format && <li>{product.format}</li>}
      </ul>
      <div className="mt-6 flex justify-center">
        <BuyButtons product={product} />
      </div>
    </PlaceholderPage>
  );
}
