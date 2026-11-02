import type { ProductInput } from "@/domain/product";

// Enlace de Gumroad pendiente: el juego se muestra como «Próximamente» hasta tenerlo.
// Precio pendiente de decidir con el resto de la colección.
const product: ProductInput = {
  id: "FQ-0004",
  slug: "manual-de-la-buena-suerte",
  name: "Manual de la Buena Suerte",
  category: "Nochevieja",
  shortDescription: "Las tradiciones de Nochevieja de España y del mundo, con checklist, deseos y cápsula del tiempo.",
  description:
    "Un manual imprimible para la última noche del año: de dónde vienen las uvas y las campanadas, cómo se celebra en otros países, mitos y realidades, una checklist de la buena suerte, una hoja de deseos y una cápsula del tiempo para abrir el año que viene.",
  minAge: 16,
  players: { min: 1, max: 12 },
  duration: "Toda la noche",
  modalities: ["printable"],
  theme: "Nochevieja",
  season: "Navidad",
  includes: [
    "Historia de las uvas y las campanadas",
    "13 tradiciones de Nochevieja por el mundo",
    "Mito o realidad de las supersticiones",
    "Checklist de la buena suerte",
    "Hoja de deseos",
    "Cápsula del tiempo para cada persona",
  ],
  format: "PDF A4 de 17 páginas para imprimir en casa",
  currency: "EUR",
  status: "coming_soon",
  featured: false,
  images: [
    {
      role: "cover",
      src: "/products/manual-de-la-buena-suerte/portada.webp",
      alt: "Portada del Manual de la Buena Suerte de Nochevieja, de Friendz Quiz",
      width: 900,
      height: 1272,
    },
    {
      role: "interior",
      src: "/products/manual-de-la-buena-suerte/interior-1.webp",
      alt: "Página interior del manual con la historia de las campanadas",
      width: 900,
      height: 1272,
    },
    {
      role: "interior",
      src: "/products/manual-de-la-buena-suerte/interior-2.webp",
      alt: "Página interior con tradiciones de Nochevieja por el mundo",
      width: 900,
      height: 1272,
    },
  ],
  channels: [],
  seo: {
    title: "Manual de la Buena Suerte · Nochevieja | Friendz Quiz",
    description:
      "Imprimible de Nochevieja con tradiciones de España y del mundo, mitos, checklist de la buena suerte, deseos y cápsula del tiempo.",
    keywords: ["tradiciones de Nochevieja", "imprimible Nochevieja", "supersticiones de fin de año"],
  },
  createdAt: "2026-11-01",
  updatedAt: "2026-11-01",
};

export default product;
