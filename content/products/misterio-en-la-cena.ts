import type { ProductInput } from "@/domain/product";

// Enlace de Gumroad pendiente: el juego se muestra como «Próximamente» hasta tenerlo.
// Precio pendiente de decidir con el resto de la colección.
const product: ProductInput = {
  id: "FQ-0006",
  slug: "misterio-en-la-cena",
  name: "Misterio en la Cena",
  category: "Misterio",
  shortDescription: "¿Quién se ha comido el postre? Personajes, objetivos secretos y un culpable al azar.",
  description:
    "Un juego de misterio para jugar durante la cena. Cada persona interpreta un personaje con objetivos secretos y una de ellas, al azar, se ha comido el postre. Después de cada acto se lee un informe y al final la mesa vota quién ha sido. Quien organiza también juega.",
  minAge: 16,
  players: { min: 6, max: 12 },
  duration: "Toda la cena",
  modalities: ["printable"],
  theme: "Misterio",
  season: "Navidad",
  includes: [
    "12 personajes con dosier",
    "Baraja Culpable / Inocente",
    "Invitaciones para cada personaje",
    "Informes para leer en voz alta",
    "Papeletas de acusación",
    "6 diplomas",
  ],
  format: "PDF A4 de 19 páginas para imprimir en casa",
  currency: "EUR",
  status: "coming_soon",
  featured: true,
  images: [
    {
      role: "cover",
      src: "/products/misterio-en-la-cena/portada.webp",
      alt: "Portada de Misterio en la Cena: ¿Quién se ha comido el postre?, de Friendz Quiz",
      width: 900,
      height: 1272,
    },
    {
      role: "interior",
      src: "/products/misterio-en-la-cena/interior-1.webp",
      alt: "Página interior con un dosier de personaje",
      width: 900,
      height: 1272,
    },
    {
      role: "interior",
      src: "/products/misterio-en-la-cena/interior-2.webp",
      alt: "Página interior con la baraja Culpable / Inocente",
      width: 900,
      height: 1272,
    },
  ],
  channels: [],
  seo: {
    title: "Misterio en la Cena · ¿Quién se ha comido el postre? | Friendz Quiz",
    description:
      "Juego de misterio imprimible para la cena: 12 personajes, objetivos secretos y un culpable al azar. De 6 a 12 jugadores.",
    keywords: ["juego de misterio para cenas", "cena con misterio imprimible", "juego de asesinato para Navidad"],
  },
  createdAt: "2026-11-01",
  updatedAt: "2026-11-01",
};

export default product;
