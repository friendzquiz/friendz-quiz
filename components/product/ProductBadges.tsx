import type { Product } from "@/domain/product";
import { difficultyLabels, modalityLabels, statusLabels } from "@/domain/labels";
import { Badge } from "@/components/ui/Badge";

const modalityTone = { printable: "mint", online: "lavender", physical: "yellow" } as const;

export function ModalityBadges({ product }: { product: Product }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Modalidad">
      {product.modalities.map((m) => (
        <li key={m}>
          <Badge tone={modalityTone[m]}>{modalityLabels[m]}</Badge>
        </li>
      ))}
    </ul>
  );
}

export function StatusBadge({ product }: { product: Product }) {
  if (product.status === "available") return null;
  return <Badge tone={product.status === "coming_soon" ? "ink" : "coral"}>{statusLabels[product.status]}</Badge>;
}

export function DifficultyText({ product }: { product: Product }) {
  if (!product.difficulty) return null;
  return <>{difficultyLabels[product.difficulty]}</>;
}
