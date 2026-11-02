# Friendz Quiz · Web

Primera versión de la web de Friendz Quiz: Home real, catálogo provisional y páginas base.
Next.js + TypeScript + Tailwind CSS. Sin base de datos, sin usuarios y sin pagos en esta fase.

## Arrancar en local

Necesitas Node.js 20 o superior.

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm test` | Tests del catálogo, la marca y la navegación |
| `npm run typecheck` | Comprobación de tipos de TypeScript |
| `npm run build` | Compilación de producción (valida el catálogo) |

La tipografía Nunito se descarga al compilar con `next/font` y se sirve desde la propia web:
los visitantes no hacen peticiones a Google Fonts.

## Añadir un juego o pack

1. Crea `content/products/mi-juego.ts` siguiendo `sobremesa-navidena.ts`.
2. Añádelo a la lista de `content/products/index.ts`.
3. Pon sus imágenes en `public/products/mi-juego/`.
4. Ejecuta `npm test`: si falta un dato o una imagen, el test lo dice.

No hay que tocar ninguna página ni componente.

## Estructura

Ver `docs/arquitectura.md`.
