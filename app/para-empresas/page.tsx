import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

export const metadata: Metadata = {
  title: "Friendz Quiz para empresas",
  description: "Juegos de preguntas y retos para team building, eventos, reuniones y dinámicas de grupo.",
  alternates: { canonical: "/para-empresas" },
};

export default function Page() {
  return <PlaceholderPage title="Friendz Quiz para empresas" intro="Juegos de preguntas y retos para team building, eventos, reuniones y dinámicas de grupo." />;
}
