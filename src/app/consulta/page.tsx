import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { ConsultaForm } from "@/components/ConsultaForm";

export const metadata: Metadata = {
  title: "Agendar consulta",
  description:
    "Solicite una consulta con Herrera & Asociados. Presencial o virtual. Respuesta en 24 horas hábiles.",
  openGraph: {
    title: "Agendar consulta | Herrera & Asociados",
    description: "Solicite una consulta con nuestro despacho.",
  },
};

export default function ConsultaPage() {
  return (
    <>
      <Section className="pt-24 md:pt-32">
        <div className="max-w-3xl mx-auto mb-16">
          <Badge className="mb-4">Agendar consulta</Badge>
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-[var(--foreground)] mb-6">
            Solicitar consulta
          </h1>
          <p className="text-[var(--muted)] text-lg leading-relaxed">
            Complete el formulario con los datos de su asunto. Un miembro de nuestro equipo revisará su solicitud y se pondrá en contacto para confirmar la cita. La información proporcionada es confidencial.
          </p>
        </div>

        <ConsultaForm />
      </Section>
    </>
  );
}
