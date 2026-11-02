import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

export const metadata: Metadata = {
  title: "Cómo funciona",
  description: "Elige un juego, descárgalo, imprímelo y a jugar. Muy pronto, también desde el móvil.",
  alternates: { canonical: "/como-funciona" },
};

export default function Page() {
  return <PlaceholderPage title="Cómo funciona" intro="Elige un juego, descárgalo, imprímelo y a jugar. Muy pronto, también desde el móvil." />;
}
