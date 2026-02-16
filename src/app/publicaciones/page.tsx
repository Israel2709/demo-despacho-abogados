import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { PUBLICATIONS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Publicaciones",
  description:
    "Artículos y análisis sobre derecho laboral, contratos comerciales, compliance y prevención de riesgos legales.",
  openGraph: {
    title: "Publicaciones | Herrera & Asociados",
    description: "Insights y análisis jurídico.",
  },
};

export default function PublicacionesPage() {
  return (
    <>
      <Section className="pt-24 md:pt-32">
        <div className="max-w-2xl mb-16">
          <Badge className="mb-4">Publicaciones</Badge>
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-[var(--foreground)] mb-6">
            Insights y análisis
          </h1>
          <p className="text-[var(--muted)] text-lg leading-relaxed">
            Artículos sobre temas legales relevantes para empresas y profesionales.
          </p>
        </div>

        <div className="space-y-12">
          {PUBLICATIONS.map((post) => (
            <article
              key={post.slug}
              className="border-b border-[var(--border)] pb-12 last:border-0 last:pb-0"
            >
              <span className="text-xs font-medium tracking-wider uppercase text-[var(--gold)]">
                {post.category}
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-[var(--foreground)] mt-2 mb-4">
                <Link
                  href={`/publicaciones/${post.slug}`}
                  className="hover:text-[var(--gold)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--gold)] rounded"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-[var(--muted)] leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-4">
                <time className="text-sm text-[var(--muted)]" dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("es-MX", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <Link
                  href={`/publicaciones/${post.slug}`}
                  className="text-sm font-medium text-[var(--gold)] hover:underline"
                >
                  Leer más →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
