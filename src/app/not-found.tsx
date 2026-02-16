import Link from "next/link";
import { Section } from "@/components/ui/Section";

export default function NotFound() {
  return (
    <Section className="pt-32 min-h-[60vh] flex flex-col items-center justify-center text-center">
      <h1 className="font-serif text-4xl md:text-6xl font-medium text-[var(--foreground)] mb-4">
        404
      </h1>
      <p className="text-[var(--muted)] text-lg mb-8">
        La página que busca no existe o ha sido movida.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center px-6 py-3 bg-[var(--navy)] text-[var(--warm-white)] font-medium text-sm tracking-wide uppercase hover:bg-[var(--navy-light)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--gold)]"
      >
        Volver al inicio
      </Link>
    </Section>
  );
}
