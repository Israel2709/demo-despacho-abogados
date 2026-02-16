import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { PRACTICE_AREAS } from "@/lib/constants";
import { SITE } from "@/lib/constants";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return PRACTICE_AREAS.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = PRACTICE_AREAS.find((a) => a.slug === slug);
  if (!area) return {};
  return {
    title: area.title,
    description: area.description,
    openGraph: {
      title: `${area.title} | ${SITE.name}`,
      description: area.description,
    },
  };
}

const areaContent: Record<string, { intro: string; sections: { title: string; content: string }[] }> = {
  "derecho-corporativo": {
    intro:
      "Nuestra práctica en derecho corporativo abarca la constitución, estructuración y operación de sociedades, así como transacciones de fusión y adquisición, gobierno corporativo y asesoría a consejos de administración.",
    sections: [
      {
        title: "Constitución y estructuración",
        content:
          "Asesoramos en la constitución de sociedades anónimas, de responsabilidad limitada y otros vehículos societarios. Diseñamos estructuras que optimicen la operación, fiscalidad y protección patrimonial.",
      },
      {
        title: "Fusiones y adquisiciones",
        content:
          "Representamos a compradores y vendedores en transacciones M&A. Realizamos due diligence legal, negociación de acuerdos y cierre de operaciones.",
      },
      {
        title: "Gobierno corporativo",
        content:
          "Asesoramos a consejos de administración en cumplimiento normativo, conflictos de interés, comités de auditoría y mejores prácticas de gobierno.",
      },
    ],
  },
  "litigio-civil-mercantil": {
    intro:
      "Representamos a clientes en juicios civiles y mercantiles, arbitraje nacional e internacional, y mediación. Nuestra experiencia incluye controversias contractuales, responsabilidad civil y temas societarios.",
    sections: [
      {
        title: "Litigio civil",
        content:
          "Juicios en materia civil: responsabilidad, daños y perjuicios, arrendamiento, propiedad y temas familiares con implicaciones patrimoniales.",
      },
      {
        title: "Litigio mercantil",
        content:
          "Controversias comerciales, incumplimiento contractual, quiebras, títulos de crédito y temas societarios ante tribunales competentes.",
      },
      {
        title: "Arbitraje",
        content:
          "Representación en arbitrajes ante el CAM, ICC y otras instituciones. Experiencia en arbitraje comercial internacional.",
      },
    ],
  },
  "derecho-laboral": {
    intro:
      "Asesoramos a empresas en relaciones laborales, contratación, despido, negociaciones colectivas y cumplimiento de la normativa laboral. Prevenimos contingencias y resolvemos conflictos.",
    sections: [
      {
        title: "Contratación y despido",
        content:
          "Estructuración de contratos laborales, terminación de relaciones de trabajo, liquidaciones y defensa ante autoridades laborales.",
      },
      {
        title: "Negociaciones colectivas",
        content:
          "Asesoría en negociación de contratos colectivos, relaciones con sindicatos y prevención de conflictos laborales.",
      },
      {
        title: "Cumplimiento normativo",
        content:
          "Auditorías de cumplimiento laboral, subcontratación, outsourcing y adaptación a reformas recientes.",
      },
    ],
  },
  "contratos-cumplimiento": {
    intro:
      "Redacción y negociación de contratos comerciales, cumplimiento regulatorio y prevención de riesgos legales. Ayudamos a las empresas a operar con seguridad jurídica.",
    sections: [
      {
        title: "Contratos comerciales",
        content:
          "Redacción y negociación de contratos de compraventa, suministro, distribución, franquicia, joint venture y otros acuerdos comerciales.",
      },
      {
        title: "Cumplimiento regulatorio",
        content:
          "Programas de compliance, códigos de ética, prevención de lavado de dinero y cumplimiento sectorial.",
      },
      {
        title: "Prevención de riesgos",
        content:
          "Identificación de riesgos legales, auditorías y recomendaciones para reducir exposición a contingencias.",
      },
    ],
  },
  "asesoria-preventiva": {
    intro:
      "Auditorías legales, due diligence, compliance y estrategias para prevenir litigios y riesgos corporativos. Trabajamos de forma proactiva para anticipar problemas.",
    sections: [
      {
        title: "Auditorías legales",
        content:
          "Revisión integral de la situación legal de la empresa: contratos, cumplimiento, litigios y obligaciones pendientes.",
      },
      {
        title: "Due diligence",
        content:
          "Investigación legal en contextos de M&A, inversión o adquisición de activos para identificar riesgos y oportunidades.",
      },
      {
        title: "Estrategia preventiva",
        content:
          "Diseño de políticas, procedimientos y estructuras que reduzcan la probabilidad de litigios y sanciones.",
      },
    ],
  },
};

export default async function AreaDetailPage({ params }: Props) {
  const { slug } = await params;
  const area = PRACTICE_AREAS.find((a) => a.slug === slug);
  if (!area) notFound();

  const content = areaContent[slug] ?? {
    intro: area.description,
    sections: [],
  };

  return (
    <>
      <Section className="pt-24 md:pt-32">
        <div className="grid lg:grid-cols-4 gap-12">
          <aside className="lg:col-span-1">
            <nav aria-label="Navegación del área">
              <h2 className="text-xs font-medium tracking-wider uppercase text-[var(--muted)] mb-4">
                Áreas de práctica
              </h2>
              <ul className="space-y-2">
                {PRACTICE_AREAS.map((a) => (
                  <li key={a.slug}>
                    <Link
                      href={`/areas/${a.slug}`}
                      className={`block py-2 text-sm transition-colors ${
                        a.slug === slug
                          ? "text-[var(--gold)] font-medium"
                          : "text-[var(--muted)] hover:text-[var(--foreground)]"
                      }`}
                    >
                      {a.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className="lg:col-span-3">
            <h1 className="font-serif text-4xl md:text-5xl font-medium text-[var(--foreground)] mb-6">
              {area.title}
            </h1>
            <p className="text-lg text-[var(--muted)] leading-relaxed mb-12">
              {content.intro}
            </p>

            <div className="space-y-12">
              {content.sections.map((section, i) => (
                <div key={i}>
                  <h2 className="font-serif text-2xl font-medium text-[var(--foreground)] mb-4">
                    {section.title}
                  </h2>
                  <p className="text-[var(--muted)] leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-12 border-t border-[var(--border)]">
              <p className="text-[var(--muted)] mb-4">
                ¿Requiere asesoría en esta materia?
              </p>
              <Link
                href="/consulta"
                className="inline-flex items-center justify-center px-6 py-3 bg-[var(--navy)] text-[var(--warm-white)] font-medium text-sm tracking-wide uppercase hover:bg-[var(--navy-light)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--gold)]"
              >
                Solicitar consulta
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
