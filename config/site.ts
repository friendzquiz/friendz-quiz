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
    "Retos, quizzes y juegos para imprimir: para divertirte con tu gente y aprender jugando. Una excusa para jugar juntos.",
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
  /** Un reto nuevo cada lunes; las temáticas van en ciclo continuo. */
  challengeCycle: ["Lógica", "Lengua y palabras", "Cine", "Curiosidades"],
  /** Cómo se vive cada reto durante la semana en Instagram. */
  weeklyChallenges: [
    { day: "Lunes", topic: "Reto nuevo" },
    { day: "Martes", topic: "Pista" },
    { day: "Miércoles", topic: "Quiz en stories" },
    { day: "Jueves", topic: "Último día" },
    { day: "Viernes", topic: "Solución" },
  ],
} as const;
