import type { ProductInput } from "@/domain/product";
import sobremesaNavidena from "./sobremesa-navidena";
import bingoSobremesa from "./bingo-sobremesa";
import amigoInvisibleConRetos from "./amigo-invisible-con-retos";
import manualDeLaBuenaSuerte from "./manual-de-la-buena-suerte";
import elAmigoGamberro from "./el-amigo-gamberro";
import misterioEnLaCena from "./misterio-en-la-cena";
import quienHaRobadoLaReceta from "./quien-ha-robado-la-receta-del-roscon";

/**
 * Fuente de datos actual del catálogo: un archivo por producto.
 * Solo la capa `data/` importa este archivo. Para añadir un juego: crea su
 * archivo en esta carpeta y añádelo a la lista.
 */
export const productSources: ProductInput[] = [
  sobremesaNavidena,
  bingoSobremesa,
  amigoInvisibleConRetos,
  manualDeLaBuenaSuerte,
  elAmigoGamberro,
  misterioEnLaCena,
  quienHaRobadoLaReceta,
];
