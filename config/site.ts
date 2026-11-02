export interface NavItem {
  label: string;
  href: string;
}

export const site = {
  name: "Friendz Quiz",
  url: "https://friendzquiz.com",
  claim: "Jugar. Reír. Conectar.",
  title: "Friendz Quiz | Juegos para jugar, reír y conectar",
  description:
    "Juegos para poner a prueba tu cabeza, romper el hielo y hacer que cualquier reunión sea más divertida. Juegos imprimibles y, muy pronto, partidas online.",
  locale: "es_ES",
  instagram: {
    handle: "@friendzquiz",
    url: "https://www.instagram.com/friendzquiz/",
  },
  /** Navegación aprobada. Jugar online, Mis juegos y Mi cuenta llegarán después. */
  nav: [
    { label: "Inicio", href: "/" },
    { label: "Juegos", href: "/juegos" },
    { label: "Imprimibles", href: "/packs-imprimibles" },
    { label: "Cómo funciona", href: "/como-funciona" },
    { label: "Para empresas", href: "/para-empresas" },
    { label: "Sobre Friendz Quiz", href: "/sobre-friendz-quiz" },
  ] satisfies NavItem[],
  legal: [
    { label: "Aviso legal", href: "/legal/aviso-legal" },
    { label: "Privacidad", href: "/legal/privacidad" },
    { label: "Cookies", href: "/legal/cookies" },
    { label: "Condiciones de venta", href: "/legal/condiciones-de-venta" },
    { label: "Productos digitales", href: "/legal/productos-digitales" },
  ] satisfies NavItem[],
  /** Calendario semanal de retos de Instagram. */
  weeklyChallenges: [
    { day: "Lunes", topic: "Adivinanzas" },
    { day: "Martes", topic: "Reto matemático" },
    { day: "Miércoles", topic: "Cine" },
    { day: "Jueves", topic: "Lengua y literatura" },
    { day: "Viernes", topic: "Curiosidades por el mundo" },
  ],
} as const;
