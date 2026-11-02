import type { ProductInput } from "@/domain/product";

const product: ProductInput = {
  id: "FQ-0001",
  slug: "sobremesa-navidena",
  name: "Sobremesa Navideña",
  category: "Sobremesa",
  shortDescription: "Quiz, adivinanzas, retos y charla para que la sobremesa dure hasta las campanadas.",
  description:
    "Un juego imprimible para jugar en grupo después de la cena de Nochebuena, Navidad o Nochevieja. Más de 100 tarjetas de preguntas, adivinanzas y charla, pasatiempos a contrarreloj, villancicos para cantar a dos coros, 12 retos para las campanadas y un marcador por jugador o equipo.",
  players: { min: 2, max: 12 },
  duration: "Variable",
  difficulty: "mixed",
  modalities: ["printable"],
  theme: "Navidad y Nochevieja",
  season: "Navidad",
  includes: [
    "60 tarjetas de quiz en 4 categorías",
    "35 tarjetas de adivinanzas y emojis",
    "20 tarjetas de charla de sobremesa",
    "2 sopas de letras, crucigrama y laberinto",
    "Retos de mates a contrarreloj",
    "5 villancicos para cantar",
    "12 retos para las 12 campanadas",
    "Marcador por jugador o equipo y soluciones",
  ],
  format: "PDF A4 de 56 páginas, para imprimir en casa a doble cara",
  priceCents: 599,
  currency: "EUR",
  status: "available",
  featured: true,
  images: [
    {
      role: "cover",
      src: "/products/sobremesa-navidena/portada.webp",
      alt: "Portada de Sobremesa Navideña: el Cerebrito con gorro de Papá Noel asomado sobre un mantel de cuadros",
      width: 900,
      height: 1272,
    },
    {
      role: "interior",
      src: "/products/sobremesa-navidena/tarjetas.webp",
      alt: "Hoja de tarjetas del quiz navideño con preguntas numeradas y niveles Fácil y Experto",
      width: 900,
      height: 1272,
    },
    {
      role: "interior",
      src: "/products/sobremesa-navidena/sabias-que.webp",
      alt: "Página «¿Sabías que…?» con dos curiosidades navideñas y el Cerebrito sorprendido",
      width: 900,
      height: 1272,
    },
  ],
  channels: [
    {
      type: "gumroad",
      url: "https://friendzquiz.gumroad.com/l/sobremesa-navidena?wanted=true",
      productPageUrl: "https://friendzquiz.gumroad.com/l/sobremesa-navidena",
      active: true,
    },
  ],
  seo: {
    title: "Sobremesa Navideña · Juego imprimible | Friendz Quiz",
    description:
      "Juegos imprimibles para la sobremesa de Navidad: quiz, adivinanzas, retos y charla para 2 a 12 jugadores. Descárgalo, imprímelo y a jugar.",
    keywords: ["juegos para la sobremesa de Navidad", "quiz navideño imprimible", "juegos para Nochevieja"],
  },
  createdAt: "2026-10-31",
  updatedAt: "2026-11-02",
};

export default product;
