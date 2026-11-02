import type { ProductInput } from "@/domain/product";

// Enlace de Gumroad pendiente: el juego se muestra como «Próximamente» hasta tenerlo.
// Precio pendiente de decidir con el resto de la colección.
const product: ProductInput = {
  id: "FQ-0007",
  slug: "quien-ha-robado-la-receta-del-roscon",
  name: "¿Quién ha robado la receta del roscón?",
  category: "Misterio",
  shortDescription: "Personajes, acciones secretas, 84 pruebas y un culpable entre vosotros.",
  description:
    "Alguien ha robado la receta secreta del roscón. Se juegan al menos 5 pruebas con temática de cocina; después de cada una se lee un informe con las tres misiones que podía cumplir el culpable, y al final cada persona acusa en secreto. Personajes, acciones, pruebas y culpable salen al azar: cada partida es distinta.",
  minAge: 16,
  players: { min: 4, max: 12 },
  duration: "5 pruebas como mínimo",
  modalities: ["printable"],
  theme: "Misterio",
  season: "Navidad",
  includes: [
    "12 personajes con su confesión",
    "Baraja Culpable / Inocente",
    "24 cartas de acciones secretas",
    "84 tarjetas de pruebas",
    "Informes y tarjetas de «¿A qué sabe?»",
    "Marcador, papeletas y 6 diplomas",
  ],
  format: "PDF A4 de 41 páginas para imprimir en casa",
  currency: "EUR",
  status: "coming_soon",
  featured: true,
  images: [
    {
      role: "cover",
      src: "/products/quien-ha-robado-la-receta-del-roscon/portada.webp",
      alt: "Portada de ¿Quién ha robado la receta del roscón?, de Friendz Quiz",
      width: 900,
      height: 1272,
    },
    {
      role: "interior",
      src: "/products/quien-ha-robado-la-receta-del-roscon/interior-1.webp",
      alt: "Página interior con la carta de Culpable y sus misiones",
      width: 900,
      height: 1272,
    },
    {
      role: "interior",
      src: "/products/quien-ha-robado-la-receta-del-roscon/interior-2.webp",
      alt: "Página interior con tarjetas de pruebas",
      width: 900,
      height: 1272,
    },
  ],
  channels: [],
  seo: {
    title: "¿Quién ha robado la receta del roscón? | Friendz Quiz",
    description:
      "Juego de misterio imprimible para Reyes: personajes, acciones secretas, 84 pruebas y un culpable al azar. De 4 a 12 jugadores.",
    keywords: ["juego roscón de Reyes", "juego de misterio imprimible", "juegos para Reyes"],
  },
  createdAt: "2026-11-01",
  updatedAt: "2026-11-01",
};

export default product;
