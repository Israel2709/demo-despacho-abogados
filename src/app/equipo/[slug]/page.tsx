import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { TEAM } from "@/lib/constants";
import { SITE } from "@/lib/constants";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return TEAM.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const member = TEAM.find((m) => m.slug === slug);
  if (!member) return {};
  return {
    title: member.name,
    description: `${member.role} - ${member.specialty}. ${member.bio}`,
    openGraph: {
      title: `${member.name} | ${SITE.name}`,
      description: member.bio,
    },
  };
}

export default async function TeamMemberPage({ params }: Props) {
  const { slug } = await params;
  const member = TEAM.find((m) => m.slug === slug);
  if (!member) notFound();

  return (
    <>
      <Section className="pt-24 md:pt-32">
        <div className="grid lg:grid-cols-4 gap-12">
          <aside className="lg:col-span-1">
            <div className="aspect-square bg-[var(--border)]/50 flex items-center justify-center text-6xl font-serif text-[var(--muted)]">
              {member.name.charAt(0)}
            </div>
            <nav className="mt-8" aria-label="Navegación del equipo">
              <h2 className="text-xs font-medium tracking-wider uppercase text-[var(--muted)] mb-4">
                Equipo
              </h2>
              <ul className="space-y-2">
                {TEAM.map((m) => (
                  <li key={m.slug}>
                    <Link
                      href={`/equipo/${m.slug}`}
                      className={`block py-2 text-sm transition-colors ${
                        m.slug === slug
                          ? "text-[var(--gold)] font-medium"
                          : "text-[var(--muted)] hover:text-[var(--foreground)]"
                      }`}
                    >
                      {m.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className="lg:col-span-3">
            <h1 className="font-serif text-4xl md:text-5xl font-medium text-[var(--foreground)] mb-2">
              {member.name}
            </h1>
            <p className="text-[var(--gold)] font-medium text-lg">{member.role}</p>
            <p className="text-[var(--muted)] mt-2">{member.specialty}</p>

            <div className="mt-12 prose prose-lg max-w-none">
              <h2 className="font-serif text-2xl font-medium text-[var(--foreground)] mb-4">
                Trayectoria
              </h2>
              <p className="text-[var(--muted)] leading-relaxed">
                {member.bio}
              </p>
            </div>

            <div className="mt-16 pt-12 border-t border-[var(--border)]">
              <p className="text-[var(--muted)] mb-4">
                ¿Desea agendar una consulta con {member.name.split(" ")[0]}?
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
