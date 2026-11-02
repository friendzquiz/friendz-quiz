import type { ProductInput } from "@/domain/product";

// Enlace de Gumroad pendiente: el juego se muestra como «Próximamente» hasta tenerlo.
// Precio pendiente de decidir con el resto de la colección.
const product: ProductInput = {
  id: "FQ-0005",
  slug: "el-amigo-gamberro",
  name: "El Amigo Gamberro",
  category: "Amigo invisible",
  shortDescription: "El amigo invisible sin presupuesto y con mucho pique.",
  description:
    "Cada persona trae, envuelto, algo que ya no quiere. Los regalos cambian de manos con pruebas y cartas Giro, y nadie los abre hasta el final. Gana quien consiga quedarse con el mejor… o librarse del peor.",
  minAge: 16,
  players: { min: 4, max: 20 },
  duration: "De 45 a 90 minutos",
  modalities: ["printable"],
  theme: "Amigo invisible",
  season: "Navidad",
  includes: [
    "30 pruebas",
    "24 cartas Giro",
    "6 cartas especiales",
    "Papeletas de votación",
    "6 diplomas",
    "Reglas para jugar sin presupuesto",
  ],
  format: "PDF A4 de 16 páginas para imprimir en casa",
  currency: "EUR",
  status: "coming_soon",
  featured: true,
  images: [
    {
      role: "cover",
      src: "/products/el-amigo-gamberro/portada.webp",
      alt: "Portada de El Amigo Gamberro, de Friendz Quiz",
      width: 900,
      height: 1272,
    },
    {
      role: "interior",
      src: "/products/el-amigo-gamberro/interior-1.webp",
      alt: "Página interior con las reglas de El Amigo Gamberro",
      width: 900,
      height: 1272,
    },
    {
      role: "interior",
      src: "/products/el-amigo-gamberro/interior-2.webp",
      alt: "Página interior con cartas Giro",
      width: 900,
      height: 1272,
    },
  ],
  channels: [],
  seo: {
    title: "El Amigo Gamberro · Amigo invisible sin presupuesto | Friendz Quiz",
    description:
      "Amigo invisible imprimible sin presupuesto: cada uno trae algo que ya no quiere y los regalos cambian de manos con pruebas y cartas Giro.",
    keywords: ["amigo invisible sin presupuesto", "amigo invisible divertido", "juego de regalos imprimible"],
  },
  createdAt: "2026-11-01",
  updatedAt: "2026-11-01",
};

export default product;
