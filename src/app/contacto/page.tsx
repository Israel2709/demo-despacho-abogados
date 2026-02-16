import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { ContactForm } from "@/components/ContactForm";
import { SITE } from "@/lib/constants";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctenos. Paseo de la Reforma 250, CDMX. Lun–Vie 9:00–18:00. +52 55 6789 1234.",
  openGraph: {
    title: "Contacto | Herrera & Asociados",
    description: "Póngase en contacto con nuestro despacho.",
  },
};

export default function ContactoPage() {
  return (
    <>
      <Section className="pt-24 md:pt-32">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <Badge className="mb-4">Contacto</Badge>
            <h1 className="font-serif text-4xl md:text-5xl font-medium text-[var(--foreground)] mb-6">
              Hablemos
            </h1>
            <p className="text-[var(--muted)] text-lg leading-relaxed mb-12">
              Complete el formulario y nos pondremos en contacto a la brevedad. Para asuntos urgentes, llame directamente.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <HiOutlinePhone size={24} className="flex-shrink-0 text-[var(--gold)]" aria-hidden />
                <div>
                  <p className="text-xs font-medium tracking-wider uppercase text-[var(--muted)]">Teléfono</p>
                  <a
                    href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                    className="text-[var(--foreground)] hover:text-[var(--gold)] transition-colors"
                  >
                    {SITE.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <HiOutlineMail size={24} className="flex-shrink-0 text-[var(--gold)]" aria-hidden />
                <div>
                  <p className="text-xs font-medium tracking-wider uppercase text-[var(--muted)]">Correo</p>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-[var(--foreground)] hover:text-[var(--gold)] transition-colors"
                  >
                    {SITE.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <HiOutlineLocationMarker size={24} className="flex-shrink-0 text-[var(--gold)]" aria-hidden />
                <div>
                  <p className="text-xs font-medium tracking-wider uppercase text-[var(--muted)]">Dirección</p>
                  <p className="text-[var(--foreground)]">{SITE.address}</p>
                  <p className="text-sm text-[var(--muted)] mt-1">{SITE.schedule}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 border border-[var(--border)] bg-[var(--background)]">
              <p className="text-sm text-[var(--muted)]">
                <strong className="text-[var(--foreground)]">Mapa:</strong> Paseo de la Reforma 250, Col. Cuauhtémoc, CDMX. Zona de fácil acceso en transporte público.
              </p>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
