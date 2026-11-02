import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

export const metadata: Metadata = {
  title: "Jugar online",
  description: "Muy pronto podrás crear una partida, compartir el código y jugar desde el móvil.",
  alternates: { canonical: "/jugar" },
};

export default function Page() {
  return <PlaceholderPage title="Jugar online" intro="Muy pronto podrás crear una partida, compartir el código y jugar desde el móvil." />;
}
