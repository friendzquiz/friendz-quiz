import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

export const metadata: Metadata = {
  title: "Sobre Friendz Quiz",
  description: "Nacimos en Instagram con un reto diario. Hoy creamos juegos para jugar, reír y conectar.",
  alternates: { canonical: "/sobre-friendz-quiz" },
};

export default function Page() {
  return <PlaceholderPage title="Sobre Friendz Quiz" intro="Nacimos en Instagram con un reto diario. Hoy creamos juegos para jugar, reír y conectar." />;
}
