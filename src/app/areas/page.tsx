import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { CardLink } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SITE, PRACTICE_AREAS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Áreas de práctica",
  description:
    "Especialidades: derecho corporativo, litigio civil y mercantil, derecho laboral, contratos y cumplimiento, asesoría preventiva.",
  openGraph: {
    title: "Áreas de práctica | Herrera & Asociados",
    description: "Conozca nuestras especialidades legales.",
  },
};

export default function AreasPage() {
  return (
    <>
      <Section className="pt-24 md:pt-32">
        <div className="max-w-2xl mb-16">
          <Badge className="mb-4">Áreas de práctica</Badge>
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-[var(--foreground)] mb-6">
            Nuestras especialidades
          </h1>
          <p className="text-[var(--muted)] text-lg leading-relaxed">
            Ofrecemos asesoría integral en las principales ramas del derecho que afectan a empresas e individuos.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {PRACTICE_AREAS.map((area) => (
            <CardLink key={area.slug} href={`/areas/${area.slug}`}>
              <h2 className="font-serif text-2xl font-medium text-[var(--foreground)] mb-3">
                {area.title}
              </h2>
              <p className="text-[var(--muted)] leading-relaxed mb-4">
                {area.description}
              </p>
              <span className="text-sm font-medium text-[var(--gold)] tracking-wide">
                Conocer más →
              </span>
            </CardLink>
          ))}
        </div>
      </Section>
    </>
  );
}
