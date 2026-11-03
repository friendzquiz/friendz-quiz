import type { ProductInput } from "@/domain/product";

const product: ProductInput = {
  id: "FQ-0003",
  slug: "amigo-invisible-con-retos",
  name: "Amigo Invisible con Retos",
  category: "Amigo invisible",
  shortDescription: "Retos antes de abrir, tres pistas para adivinar quién ha sido y premios para terminar.",
  description:
    "El amigo invisible de siempre con un giro: antes de abrir cada regalo hay que superar un reto, y después toca adivinar quién te lo ha hecho con tres pistas. Incluye cartas para pedir regalo, etiquetas, tarjetas de retos y pistas, el Modo Ladrón y diplomas para entregar al final.",
  players: { min: 4, max: 20 },
  duration: "Lo que dure el intercambio",
  modalities: ["printable"],
  theme: "Amigo invisible",
  season: "Navidad",
  includes: [
    "40 retos para antes de abrir el regalo",
    "Tarjetas de pistas para adivinar quién ha sido",
    "Cartas para pedir regalo y etiquetas",
    "Modo Ladrón para robar regalos",
    "Página para quien organiza",
    "Diplomas para entregar al final",
  ],
  format: "PDF A4 de 37 páginas, para imprimir en casa a doble cara",
  priceCents: 599,
  currency: "EUR",
  status: "available",
  featured: true,
  images: [
    {
      role: "cover",
      src: "/products/amigo-invisible-con-retos/portada.webp",
      alt: "Portada de Amigo Invisible con Retos, de Friendz Quiz",
      width: 900,
      height: 1272,
    },
    {
      role: "interior",
      src: "/products/amigo-invisible-con-retos/interior-1.webp",
      alt: "Página interior con tarjetas de retos del amigo invisible",
      width: 900,
      height: 1272,
    },
    {
      role: "interior",
      src: "/products/amigo-invisible-con-retos/interior-2.webp",
      alt: "Página interior con diplomas del amigo invisible",
      width: 900,
      height: 1272,
    },
  ],
  channels: [
    {
      type: "gumroad",
      url: "https://friendzquiz.gumroad.com/l/amigo-invisible-retos?wanted=true",
      productPageUrl: "https://friendzquiz.gumroad.com/l/amigo-invisible-retos",
      active: true,
    },
  ],
  seo: {
    title: "Amigo Invisible con Retos · Imprimible | Friendz Quiz",
    description:
      "Amigo invisible imprimible con 40 retos, pistas para adivinar quién ha sido y diplomas. De 4 a 20 jugadores. Descárgalo, imprímelo y a jugar.",
    keywords: ["amigo invisible imprimible", "juego amigo invisible", "retos para amigo invisible"],
  },
  createdAt: "2026-11-01",
  updatedAt: "2026-11-03",
};

export default product;
