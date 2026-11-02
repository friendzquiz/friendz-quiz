import type { ProductInput } from "@/domain/product";

const product: ProductInput = {
  id: "FQ-0002",
  slug: "bingo-sobremesa",
  name: "Bingo de la Sobremesa",
  category: "Bingo",
  shortDescription: "Marca lo que pasa en todas las comidas de Navidad y Nochevieja. 16 cartones distintos para imprimir.",
  description:
    "Un bingo imprimible con las cosas que pasan en todas las comidas navideñas. Cada persona tiene su cartón y va marcando lo que ocurre en la mesa, sin árbitro y sin preparar nada. Incluye 8 cartones de Nochebuena y Navidad, 8 de Nochevieja, reglas, lista de situaciones y diploma para quien gane.",
  minAge: 16,
  players: { min: 4, max: 16 },
  duration: "Toda la comida",
  modalities: ["printable"],
  theme: "Navidad y Nochevieja",
  season: "Navidad",
  includes: [
    "8 cartones de Nochebuena y Navidad",
    "8 cartones de Nochevieja",
    "Los 16 cartones son distintos",
    "Reglas y Regla de la mesa",
    "Lista de todas las situaciones",
    "Diploma para quien gane",
  ],
  format: "PDF A4 de 16 páginas para imprimir en casa",
  // Precio pendiente de decidir con el resto de la colección: no se muestra hasta tenerlo.
  currency: "EUR",
  status: "available",
  featured: true,
  images: [
    {
      role: "cover",
      src: "/products/bingo-sobremesa/portada.webp",
      alt: "Portada del Bingo de la Sobremesa: el Cerebrito con gorro de Papá Noel junto a un cartón de bingo sobre un mantel de cuadros amarillo",
      width: 900,
      height: 1272,
    },
    {
      role: "interior",
      src: "/products/bingo-sobremesa/carton-navidad.webp",
      alt: "Dos cartones del bingo de Nochebuena y Navidad con 16 situaciones cada uno",
      width: 900,
      height: 1272,
    },
    {
      role: "interior",
      src: "/products/bingo-sobremesa/carton-nochevieja.webp",
      alt: "Dos cartones del bingo de Nochevieja con cabecera oscura",
      width: 900,
      height: 1272,
    },
  ],
  channels: [
    {
      type: "gumroad",
      url: "https://friendzquiz.gumroad.com/l/bingo-sobremesa?wanted=true",
      productPageUrl: "https://friendzquiz.gumroad.com/l/bingo-sobremesa",
      active: true,
    },
  ],
  seo: {
    title: "Bingo de la Sobremesa · Imprimible navideño | Friendz Quiz",
    description:
      "Bingo imprimible para las comidas de Navidad y Nochevieja: 16 cartones distintos para 4 a 16 jugadores. Descárgalo, imprímelo y a la mesa.",
    keywords: ["bingo navideño imprimible", "juegos para la comida de Navidad", "bingo de Nochevieja"],
  },
  createdAt: "2026-10-31",
  updatedAt: "2026-10-31",
};

export default product;
