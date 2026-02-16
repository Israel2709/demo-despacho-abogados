import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Timeline } from "@/components/ui/Timeline";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { EXPERIENCE_ITEMS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Experiencia",
  description:
    "Más de 15 años de trayectoria. Casos representativos en sectores financiero, inmobiliario, tecnológico e industrial.",
  openGraph: {
    title: "Experiencia | Herrera & Asociados",
    description: "Nuestra trayectoria y sectores atendidos.",
  },
};

const SECTORS = [
  {
    title: "Sector financiero",
    description: "Asesoría a instituciones financieras en cumplimiento regulatorio, fusiones y litigio comercial.",
  },
  {
    title: "Sector inmobiliario",
    description: "Estructuración de desarrollos, due diligence, contratos y controversias inmobiliarias.",
  },
  {
    title: "Sector tecnológico",
    description: "Startups y empresas de tecnología: rondas de inversión, propiedad intelectual y contratos.",
  },
  {
    title: "Sector industrial",
    description: "Relaciones laborales, contratos de suministro, compliance y litigio comercial.",
  },
];

const CASES = [
  {
    title: "Arbitraje comercial internacional",
    description: "Representación en arbitraje ante la Cámara de Comercio Internacional por controversia contractual entre socios.",
  },
  {
    title: "Fusión de empresas medianas",
    description: "Asesoría integral en fusión de dos empresas del sector industrial, incluyendo due diligence y negociación.",
  },
  {
    title: "Reestructuración societaria",
    description: "Diseño e implementación de reestructuración de grupo empresarial para optimización fiscal y operativa.",
  },
  {
    title: "Litigio mercantil",
    description: "Defensa exitosa en juicio por incumplimiento contractual en sector de servicios.",
  },
];

export default function ExperienciaPage() {
  return (
    <>
      <Section className="pt-24 md:pt-32">
        <div className="max-w-2xl mb-16">
          <Badge className="mb-4">Experiencia</Badge>
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-[var(--foreground)] mb-6">
            Trayectoria y casos
          </h1>
          <p className="text-[var(--muted)] text-lg leading-relaxed">
            Más de 15 años atendiendo a empresas e individuos en sectores diversos. Respetamos la confidencialidad de nuestros clientes; los casos se presentan de forma genérica.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="font-serif text-2xl font-medium text-[var(--foreground)] mb-8">
            Hitos
          </h2>
          <Timeline items={EXPERIENCE_ITEMS} />
        </div>

        <div className="mb-20">
          <h2 className="font-serif text-2xl font-medium text-[var(--foreground)] mb-8">
            Sectores atendidos
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {SECTORS.map((sector) => (
              <Card key={sector.title} as="article">
                <h3 className="font-serif text-xl font-medium text-[var(--foreground)] mb-2">
                  {sector.title}
                </h3>
                <p className="text-[var(--muted)] leading-relaxed">
                  {sector.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-serif text-2xl font-medium text-[var(--foreground)] mb-8">
            Casos representativos
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {CASES.map((c) => (
              <Card key={c.title} as="article">
                <h3 className="font-serif text-xl font-medium text-[var(--foreground)] mb-2">
                  {c.title}
                </h3>
                <p className="text-[var(--muted)] leading-relaxed">
                  {c.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
