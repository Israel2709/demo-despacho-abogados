import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { TEAM } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Equipo",
  description:
    "Conozca a los socios y profesionales de Herrera & Asociados. Especialistas en derecho corporativo, litigio, laboral y compliance.",
  openGraph: {
    title: "Equipo | Herrera & Asociados",
    description: "Nuestro equipo legal de expertos.",
  },
};

export default function EquipoPage() {
  return (
    <>
      <Section className="pt-24 md:pt-32">
        <div className="max-w-2xl mb-16">
          <Badge className="mb-4">Equipo</Badge>
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-[var(--foreground)] mb-6">
            Nuestro equipo legal
          </h1>
          <p className="text-[var(--muted)] text-lg leading-relaxed">
            Socios y profesionales con amplia trayectoria en sus respectivas especialidades.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {TEAM.map((member) => (
            <Link
              key={member.slug}
              href={`/equipo/${member.slug}`}
              className="group flex gap-6 border border-[var(--border)] p-6 md:p-8 transition-all hover:border-[var(--gold)]/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--gold)]"
            >
              <div className="flex-shrink-0 w-24 h-24 bg-[var(--border)]/50 flex items-center justify-center text-2xl font-serif text-[var(--muted)]">
                {member.name.charAt(0)}
              </div>
              <div>
                <h2 className="font-serif text-2xl font-medium text-[var(--foreground)] group-hover:text-[var(--gold)] transition-colors">
                  {member.name}
                </h2>
                <p className="text-[var(--gold)] font-medium mt-1">{member.role}</p>
                <p className="text-[var(--muted)] mt-2">{member.specialty}</p>
                <p className="text-sm text-[var(--muted)] mt-4">
                  {member.bio}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
