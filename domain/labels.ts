import type { Difficulty, Modality, ProductStatus, SalesChannel } from "./product";

/** Textos visibles en español. Separados del modelo para poder traducir o cambiar el tono. */

export const modalityLabels: Record<Modality, string> = {
  printable: "Imprimible",
  online: "Online",
  physical: "Juego físico",
};

export const statusLabels: Record<ProductStatus, string> = {
  draft: "Borrador",
  coming_soon: "Próximamente",
  available: "Disponible",
  sold_out: "Agotado",
  archived: "Archivado",
};

export const difficultyLabels: Record<Difficulty, string> = {
  easy: "Fácil",
  expert: "Experto",
  mixed: "Fácil y experto",
};

/** Texto del botón de compra según el canal. */
export function channelLabel(channel: SalesChannel): string {
  if (channel.label) return channel.label;
  switch (channel.type) {
    case "amazon":
      return "Comprar en Amazon";
    case "gumroad":
    case "friendzquiz":
      return "Comprar el PDF";
    default:
      return "Comprar";
  }
}
