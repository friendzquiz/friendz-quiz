# Arquitectura de la web de Friendz Quiz

Documento vivo. Recoge las decisiones técnicas para que se entiendan dentro de dos años.

## Capas

```
UI (app/, components/)
  ↓ solo llama a
Capa de datos (data/products.ts: getProducts, getFeaturedProducts, getProductBySlug…)
  ↓ hoy lee
Fuente actual (content/products/*.ts, validada con Zod)
  ↓ mañana
Supabase / API (sin cambios en la UI)
```

- `domain/`: tipos, esquemas y reglas (producto, modalidad, estado, canal de venta). Sin React ni Next: reutilizable por la futura app.
- `data/`: única puerta de acceso a los datos. La Home y el catálogo nunca importan `content/` directamente.
- `components/`: presentación. Reciben datos ya preparados.
- `config/`: marca (`brand.ts`), web y navegación (`site.ts`) y datos legales (`business.ts`).

## Modelo de producto

- Identificador interno permanente (`FQ-0001`) y URL estable bajo `/juegos/[slug]`.
- Modalidades: `printable`, `online`, `physical` (un producto puede tener varias).
- Estados: `draft`, `coming_soon`, `available`, `sold_out`, `archived`. Solo los tres centrales son públicos.
- Producto ≠ canal de venta: `channels` admite `gumroad`, `amazon`, `friendzquiz` y `other`. Cambiar de proveedor es cambiar un canal.
- `placeholder: true` marca contenido de ejemplo pendiente de aprobación.

## Decisiones de esta fase

| Decisión | Motivo |
| --- | --- |
| Catálogo en archivos, sin base de datos | Gumroad cobra y entrega; no hay datos que guardar. Supabase entra con los juegos online o el pago propio |
| Nunito como única tipografía | Misma línea en toda la marca: textos en 400-600, titulares, botones y precios en 700-900 |
| Deep Indigo + blanco en botones principales, Coral + Ink en secundarios | Contraste comprobado: el azul y el coral no admiten texto blanco pequeño |
| Instagram sin incrustar | Evitar cookies y scripts de terceros |
| Sin shadcn/ui por ahora | La Home no necesita sus componentes; se añadirá con el acordeón de FAQ o el aviso de cookies |
| Animaciones mínimas | Entrada de las tarjetas del hero y elevación al pasar el ratón; se desactivan con «reducir movimiento» |

## Preparado para el futuro

- Juegos online: modalidad `online`, ruta `/jugar` reservada, sección «Próxima partida: online» lista para convertirse en la entrada real.
- App: la lógica vive en `domain/` y `data/`; nada crítico depende del navegador.
- Rutas reservadas pendientes: `/jugar/[slug]`, `/partida/[codigo]`, `/mi-cuenta`, `/mis-juegos`.
