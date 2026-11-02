import { activeChannels, formatPrice, type Product } from "@/domain/product";
import { channelLabel } from "@/domain/labels";
import { ButtonLink } from "@/components/ui/ButtonLink";

/**
 * Un botón por cada canal de venta activo. No conoce ningún proveedor concreto:
 * cambiar Gumroad por otro canal se hace en el archivo del producto.
 * Es un enlace normal (no una ventana integrada) para no cargar scripts de terceros.
 */
export function BuyButtons({ product }: { product: Product }) {
  const channels = activeChannels(product);
  if (channels.length === 0) return null;
  return (
    <div className="flex flex-wrap items-center gap-4">
      {channels.map((channel, i) => (
        <ButtonLink key={channel.url} href={channel.url} external variant={i === 0 ? "primary" : "outline"}>
          {channelLabel(channel)}
        </ButtonLink>
      ))}
      {product.priceCents !== undefined && (
        <span className="font-display text-2xl font-black">{formatPrice(product.priceCents)}</span>
      )}
    </div>
  );
}
