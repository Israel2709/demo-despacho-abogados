import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { PUBLICATIONS } from "@/lib/constants";
import { SITE } from "@/lib/constants";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return PUBLICATIONS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = PUBLICATIONS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | ${SITE.name}`,
      description: post.excerpt,
    },
  };
}

const postContent: Record<string, string> = {
  "reformas-recientes-derecho-laboral": `
Las reformas recientes en materia laboral han introducido cambios significativos que toda empresa debe considerar. La subcontratación, el registro de sindicatos y contratos colectivos, y las nuevas obligaciones en materia de teletrabajo son solo algunos de los temas que requieren atención.

En este artículo analizamos los principales cambios normativos y sus implicaciones prácticas. La adaptación a la nueva regulación no es opcional: el incumplimiento puede derivar en sanciones, multas y conflictos laborales que afecten la operación y reputación de la empresa.

Recomendamos realizar una auditoría de cumplimiento laboral para identificar brechas y diseñar un plan de implementación. La asesoría preventiva permite anticipar riesgos y evitar contingencias costosas.
  `,
  "clausulas-clave-contratos-comerciales": `
Todo contrato comercial debe contemplar ciertos elementos esenciales que protejan los intereses de las partes y reduzcan la incertidumbre. Entre las cláusulas clave se encuentran: objeto y alcance del contrato, obligaciones de las partes, precio y forma de pago, vigencia y terminación, confidencialidad, propiedad intelectual, limitación de responsabilidad, y resolución de controversias.

La redacción imprecisa de estas cláusulas puede dar lugar a interpretaciones divergentes y litigios. Es fundamental que un abogado especializado revise y negocie los términos antes de la firma.

En nuestra práctica, hemos visto numerosos casos en los que una cláusula mal redactada generó pérdidas significativas. La inversión en asesoría contractual previa es siempre menor que el costo de un litigio.
  `,
  "prevencion-riesgos-legales-empresas": `
La prevención de riesgos legales debe ser parte integral de la estrategia de toda empresa. Un programa de compliance efectivo incluye: identificación de riesgos, políticas y procedimientos, capacitación, monitoreo y mejora continua.

Las áreas de mayor exposición suelen ser: contratación laboral, cumplimiento fiscal, protección de datos, contratos con proveedores y clientes, y gobierno corporativo. Una auditoría legal periódica permite detectar vulnerabilidades antes de que se materialicen en sanciones o litigios.

La asesoría preventiva no es un gasto, sino una inversión. Las empresas que invierten en compliance tienden a tener menos contingencias, mejor reputación y mayor confianza de inversionistas y socios comerciales.
  `,
};

export default async function PublicacionDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = PUBLICATIONS.find((p) => p.slug === slug);
  if (!post) notFound();

  const content = postContent[slug] ?? post.excerpt;

  return (
    <>
      <Section className="pt-24 md:pt-32">
        <article className="max-w-3xl mx-auto">
          <Badge className="mb-4">{post.category}</Badge>
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-[var(--foreground)] mb-4">
            {post.title}
          </h1>
          <time className="text-[var(--muted)]" dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("es-MX", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>

          <div className="mt-12 prose prose-lg max-w-none">
            {content.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-[var(--muted)] leading-relaxed mb-6">
                {paragraph.trim()}
              </p>
            ))}
          </div>

          <div className="mt-16 pt-12 border-t border-[var(--border)]">
            <Link
              href="/publicaciones"
              className="text-sm font-medium text-[var(--gold)] hover:underline"
            >
              ← Volver a publicaciones
            </Link>
          </div>
        </article>
      </Section>
    </>
  );
}
