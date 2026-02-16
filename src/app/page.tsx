import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { CardLink } from "@/components/ui/Card";
import { Timeline } from "@/components/ui/Timeline";
import { Badge } from "@/components/ui/Badge";
import {
  SITE,
  PRACTICE_AREAS,
  TEAM,
  EXPERIENCE_ITEMS,
  PUBLICATIONS,
} from "@/lib/constants";
export default function HomePage() {
  return (
    <>
      {/* 1. Hero editorial centrado */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-[var(--warm-white)] overflow-hidden">
        {/* Background images */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
          style={{ backgroundImage: "url('/hero-mobile.png')" }}
          aria-hidden
        />
        <div
          className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat md:block"
          style={{ backgroundImage: "url('/hero-desktop.png')" }}
          aria-hidden
        />
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/50" aria-hidden />
        {/* Content */}
        <div className="relative z-10 mx-auto max-w-3xl px-6 md:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6 animate-fade-in">
            Herrera & Asociados
          </h1>
          <p className="font-serif text-xl md:text-2xl text-[var(--charcoal)] mb-10 animate-fade-in" style={{ animationDelay: "100ms" }}>
            {SITE.slogan}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "200ms" }}>
            <Button href="/consulta" variant="primary" className="!bg-[var(--warm-white)] !text-[var(--navy)] border-[var(--warm-white)] hover:!bg-[var(--navy-light)] hover:!text-[var(--warm-white)] hover:border-[var(--navy-light)]">
              Solicitar consulta
            </Button>
            <Button href="/areas" variant="outline">
              Áreas de práctica
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Nuestra filosofía */}
      <Section id="filosofia">
        <div className="max-w-3xl mx-auto">
          <Badge className="mb-6">Nuestra filosofía</Badge>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-[var(--foreground)] mb-8">
            Estrategia, ética y análisis
          </h2>
          <div className="prose prose-lg max-w-none text-[var(--muted)] leading-relaxed space-y-6">
            <p>
              En Herrera & Asociados creemos que el derecho debe ser una herramienta de construcción, no solo de defensa. Nuestra labor combina el rigor técnico con una visión estratégica que anticipa riesgos y genera oportunidades para nuestros clientes.
            </p>
            <p>
              La ética profesional guía cada decisión. Analizamos cada caso con profundidad, considerando no solo el marco legal vigente sino las implicaciones comerciales, reputacionales y humanas. Trabajamos con discreción absoluta, entendiendo que la confidencialidad es la base de toda relación de confianza.
            </p>
            <p>
              Nuestro enfoque es preventivo cuando es posible y resolutivo cuando es necesario. Asesoramos a empresas e individuos que buscan socios legales con experiencia, criterio y compromiso con la excelencia.
            </p>
          </div>
        </div>
      </Section>

      {/* 3. Áreas de práctica */}
      <Section className="bg-[var(--background)]" id="areas">
        <div className="mb-12">
          <Badge className="mb-4">Áreas de práctica</Badge>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-[var(--foreground)]">
            Especialidades
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PRACTICE_AREAS.map((area, i) => (
            <CardLink
              key={area.slug}
              href={`/areas/${area.slug}`}
              className="animate-fade-in"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <h3 className="font-serif text-xl font-medium text-[var(--foreground)] mb-2">
                {area.title}
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {area.description}
              </p>
              <span className="inline-block mt-4 text-sm font-medium text-[var(--gold)] tracking-wide">
                Conocer más →
              </span>
            </CardLink>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/areas" variant="secondary">
            Ver todas las áreas
          </Button>
        </div>
      </Section>

      {/* 4. Experiencia destacada */}
      <Section id="experiencia">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <Badge className="mb-4">Experiencia</Badge>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-[var(--foreground)] mb-6">
              Trayectoria y sectores
            </h2>
            <p className="text-[var(--muted)] leading-relaxed mb-8">
              Más de 15 años de experiencia atendiendo sectores financiero, inmobiliario, tecnológico e industrial. Casos representativos en arbitraje, fusiones y litigio comercial.
            </p>
            <Button href="/experiencia" variant="secondary">
              Ver experiencia completa
            </Button>
          </div>
          <div>
            <Timeline items={EXPERIENCE_ITEMS} />
          </div>
        </div>
      </Section>

      {/* 5. Equipo legal */}
      <Section className="bg-[var(--background)]" id="equipo">
        <div className="mb-12">
          <Badge className="mb-4">Equipo</Badge>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-[var(--foreground)]">
            Nuestro equipo legal
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member, i) => (
            <Link
              key={member.slug}
              href={`/equipo/${member.slug}`}
              className="group border border-[var(--border)] bg-[var(--background)] p-6 transition-all hover:border-[var(--gold)]/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--gold)] animate-fade-in"
              style={{ animationDelay: `${i * 80}ms` } as React.CSSProperties}
            >
              <div className="aspect-square bg-[var(--border)]/50 mb-4 flex items-center justify-center text-[var(--muted)] text-4xl font-serif">
                {member.name.charAt(0)}
              </div>
              <h3 className="font-serif text-lg font-medium text-[var(--foreground)] group-hover:text-[var(--gold)] transition-colors">
                {member.name}
              </h3>
              <p className="text-sm text-[var(--gold)] font-medium mt-1">{member.role}</p>
              <p className="text-sm text-[var(--muted)] mt-2">{member.specialty}</p>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/equipo" variant="secondary">
            Conocer al equipo
          </Button>
        </div>
      </Section>

      {/* 6. Publicaciones / Insights */}
      <Section id="publicaciones">
        <div className="mb-12">
          <Badge className="mb-4">Publicaciones</Badge>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-[var(--foreground)]">
            Insights y análisis
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {PUBLICATIONS.map((post, i) => (
            <article
              key={post.slug}
              className="border border-[var(--border)] p-6 md:p-8 transition-colors hover:border-[var(--charcoal)]/30 animate-fade-in"
              style={{ animationDelay: `${i * 80}ms` } as React.CSSProperties}
            >
              <span className="text-xs font-medium tracking-wider uppercase text-[var(--gold)]">
                {post.category}
              </span>
              <h3 className="font-serif text-xl font-medium text-[var(--foreground)] mt-2 mb-2">
                <Link
                  href={`/publicaciones/${post.slug}`}
                  className="hover:text-[var(--gold)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--gold)] rounded"
                >
                  {post.title}
                </Link>
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <time className="text-xs text-[var(--muted)]" dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("es-MX", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/publicaciones" variant="secondary">
            Ver todas las publicaciones
          </Button>
        </div>
      </Section>

      {/* 7. CTA institucional final */}
      <section className="bg-[var(--navy)] text-[var(--warm-white)] py-20 md:py-28 hero-texture">
        <div className="mx-auto max-w-3xl px-6 md:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
            Hablemos de su caso
          </h2>
          <p className="text-[var(--charcoal)] text-lg mb-10">
            Agende una consulta para evaluar su situación y explorar las mejores opciones.
          </p>
          <Button
            href="/consulta"
            className="bg-[var(--gold)] text-[var(--navy)] border-[var(--gold)] hover:bg-[var(--gold-muted)] hover:border-[var(--gold-muted)]"
          >
            Solicitar consulta
          </Button>
        </div>
      </section>
    </>
  );
}
