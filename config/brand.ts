/**
 * Brand Master de Friendz Quiz.
 * Única fuente de colores de la marca. Cada color tiene una función fija.
 * `app/globals.css` declara los mismos valores como tokens de Tailwind
 * (un test comprueba que coinciden).
 */

export type BrandColorName =
  | "blue"
  | "pink"
  | "coral"
  | "yellow"
  | "mint"
  | "cream"
  | "ink"
  | "indigo"
  | "lavender"
  | "grey";

export interface BrandColor {
  name: string;
  hex: `#${string}`;
  role: string;
  /** Color de texto permitido encima (contraste comprobado). */
  textOn: string;
}

export const brandColors: Record<BrandColorName, BrandColor> = {
  blue: {
    name: "Friendz Blue",
    hex: "#7180E8",
    role: "Color de marca: ilustraciones, fondos de sección y titulares grandes",
    textOn: "Ink, o blanco solo en tamaño grande (3,5:1)",
  },
  pink: {
    name: "Brain Pink",
    hex: "#F58DB8",
    role: "Cerebrito y elementos destacados",
    textOn: "Ink",
  },
  coral: {
    name: "Energy Coral",
    hex: "#FF8066",
    role: "Botones secundarios, retos y avisos con energía",
    textOn: "Ink (6,3:1). Nunca blanco",
  },
  yellow: {
    name: "Play Yellow",
    hex: "#FFD166",
    role: "Acentos, estrellas, nivel Fácil, recompensas",
    textOn: "Ink",
  },
  mint: {
    name: "Fresh Mint",
    hex: "#8FD8C5",
    role: "Etiquetas de categoría, mensajes positivos, descubrimiento",
    textOn: "Ink",
  },
  cream: {
    name: "Warm Cream",
    hex: "#FFF7EA",
    role: "Fondos cálidos y bloques editoriales",
    textOn: "Ink o Deep Indigo",
  },
  ink: {
    name: "Friendz Ink",
    hex: "#20233A",
    role: "Texto principal",
    textOn: "—",
  },
  indigo: {
    name: "Deep Indigo",
    hex: "#4A56C4",
    role: "Botón principal, enlaces, foco del teclado, sección online",
    textOn: "Blanco (6,1:1)",
  },
  lavender: {
    name: "Lavender",
    hex: "#EEF0FB",
    role: "Fondos de tarjetas y secciones suaves",
    textOn: "Ink o Deep Indigo",
  },
  grey: {
    name: "Soft Grey",
    hex: "#F1F1F5",
    role: "Bordes, separadores y fondos neutros",
    textOn: "Ink",
  },
};

/** Tonos del Cerebrito, derivados de Brain Pink. Solo para la ilustración. */
export const brainTones = {
  body: "#F9B4CD",
  fold: "#F290B6",
  shade: "#F6A3C3",
  limb: "#EE8EB1",
  mouth: "#E2638F",
  mouthInner: "#FFC9D9",
  hatHighlight: "#FF9C88",
  hatFur: "#FFFFFF",
  hatFurShade: "#EFE6DC",
} as const;
