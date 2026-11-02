import type { Metadata } from "next";
import { business } from "@/config/business";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

export const metadata: Metadata = {
  title: "Política de cookies",
  robots: { index: false },
  alternates: { canonical: "/legal/cookies" },
};

// Texto legal pendiente de redacción y validación profesional. No inventar datos.
export default function Page() {
  return (
    <PlaceholderPage title="Política de cookies" intro="Texto pendiente de redacción y revisión legal antes de publicar la web.">
      <dl className="mx-auto max-w-md space-y-2 rounded-card border-2 border-ink bg-white p-6 text-sm">
        <div><dt className="font-bold">Titular</dt><dd>{business.ownerName}</dd></div>
        <div><dt className="font-bold">NIF</dt><dd>{business.taxId}</dd></div>
        <div><dt className="font-bold">Domicilio</dt><dd>{business.address}</dd></div>
        <div><dt className="font-bold">Correo</dt><dd>{business.email}</dd></div>
      </dl>
    </PlaceholderPage>
  );
}
