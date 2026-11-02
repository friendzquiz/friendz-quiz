import { z } from "zod";

/**
 * Modelo de producto de Friendz Quiz.
 * Sin dependencias de React ni de Next: lo reutilizarán la API y la futura app.
 * Producto ≠ canal de venta: un producto tiene identidad propia y una lista de canales.
 */

export const modalities = ["printable", "online", "physical"] as const;
export const productStatuses = ["draft", "coming_soon", "available", "sold_out", "archived"] as const;
export const difficulties = ["easy", "expert", "mixed"] as const;
export const channelTypes = ["gumroad", "amazon", "friendzquiz", "other"] as const;
export const imageRoles = ["cover", "includes", "interior", "ambience", "summary"] as const;

export type Modality = (typeof modalities)[number];
export type ProductStatus = (typeof productStatuses)[number];
export type Difficulty = (typeof difficulties)[number];
export type ChannelType = (typeof channelTypes)[number];
export type ImageRole = (typeof imageRoles)[number];

const slugSchema = z
  .string()
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "El slug solo admite minúsculas, números y guiones");

export const salesChannelSchema = z.object({
  type: z.enum(channelTypes),
  /** Texto del botón cuando el canal no es el habitual, p. ej. «Comprar en Amazon». */
  label: z.string().min(1).optional(),
  /** Enlace del botón de compra (en Gumroad, la URL de pago directo). */
  url: z.string().url(),
  /** Página pública del producto en el canal, para compartir en redes. */
  productPageUrl: z.string().url().optional(),
  /** Precio en este canal si difiere del precio de referencia. */
  priceCents: z.number().int().nonnegative().optional(),
  marketplace: z.string().optional(),
  asin: z.string().optional(),
  active: z.boolean(),
});

export const productImageSchema = z.object({
  role: z.enum(imageRoles),
  src: z.string().startsWith("/"),
  alt: z.string().min(3),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
});

export const productSchema = z
  .object({
    /** Identificador interno permanente. No cambia aunque cambien nombre o slug. */
    id: z.string().regex(/^FQ-\d{4}$/),
    slug: slugSchema,
    name: z.string().min(2),
    category: z.string().min(2),
    shortDescription: z.string().min(10).max(160),
    description: z.string().min(20),
    minAge: z.number().int().min(0).optional(),
    players: z.object({ min: z.number().int().min(1), max: z.number().int().min(1) }),
    duration: z.string().min(2),
    difficulty: z.enum(difficulties).optional(),
    modalities: z.array(z.enum(modalities)).min(1),
    theme: z.string().optional(),
    season: z.string().optional(),
    includes: z.array(z.string()).default([]),
    format: z.string().optional(),
    priceCents: z.number().int().nonnegative().optional(),
    currency: z.literal("EUR").default("EUR"),
    status: z.enum(productStatuses),
    featured: z.boolean().default(false),
    /** Contenido de ejemplo todavía no aprobado: nunca debe publicarse como real. */
    placeholder: z.boolean().default(false),
    images: z.array(productImageSchema).default([]),
    channels: z.array(salesChannelSchema).default([]),
    seo: z
      .object({
        title: z.string().max(70),
        description: z.string().max(170),
        keywords: z.array(z.string()).default([]),
      })
      .optional(),
    createdAt: z.string().date(),
    updatedAt: z.string().date(),
  })
  .refine((p) => p.players.max >= p.players.min, {
    message: "El máximo de jugadores no puede ser menor que el mínimo",
    path: ["players"],
  });

export type ProductInput = z.input<typeof productSchema>;
export type Product = z.output<typeof productSchema>;
export type SalesChannel = z.output<typeof salesChannelSchema>;
export type ProductImage = z.output<typeof productImageSchema>;

/** Estados que pueden verse en la web pública. */
export const publicStatuses: readonly ProductStatus[] = ["coming_soon", "available", "sold_out"];

export function isPublic(product: Product): boolean {
  return publicStatuses.includes(product.status);
}

export function activeChannels(product: Product): SalesChannel[] {
  return product.status === "available" ? product.channels.filter((c) => c.active) : [];
}

export function coverImage(product: Product): ProductImage | undefined {
  return product.images.find((img) => img.role === "cover");
}

export function formatPrice(cents: number, currency: "EUR" = "EUR"): string {
  return new Intl.NumberFormat("es-ES", { style: "currency", currency }).format(cents / 100);
}

export function formatPlayers({ min, max }: Product["players"]): string {
  return min === max ? `${min} jugadores` : `De ${min} a ${max} jugadores`;
}

export function productPath(product: Pick<Product, "slug">): string {
  return `/juegos/${product.slug}`;
}
