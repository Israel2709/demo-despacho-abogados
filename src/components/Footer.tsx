import Link from "next/link";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

const footerLinks = [
  { href: "/areas", label: "Áreas de práctica" },
  { href: "/equipo", label: "Equipo" },
  { href: "/experiencia", label: "Experiencia" },
  { href: "/publicaciones", label: "Publicaciones" },
  { href: "/contacto", label: "Contacto" },
  { href: "/consulta", label: "Agendar consulta" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--navy)] text-[var(--warm-white)]">
      <div className="mx-auto max-w-6xl px-6 md:px-8 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-serif text-xl font-medium mb-4">Herrera & Asociados</h3>
            <p className="text-sm text-[var(--charcoal)] leading-relaxed mb-4">
              Estrategia jurídica con visión y rigor.
            </p>
            <p className="text-xs text-[var(--muted)]">
              Lun–Vie 9:00–18:00
            </p>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-wider uppercase text-[var(--gold)] mb-4">
              Navegación
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--charcoal)] hover:text-[var(--warm-white)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-wider uppercase text-[var(--gold)] mb-4">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+525567891234"
                  className="flex items-center gap-3 text-sm text-[var(--charcoal)] hover:text-[var(--warm-white)] transition-colors"
                >
                  <HiOutlinePhone size={18} aria-hidden />
                  +52 55 6789 1234
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@herreraasociados.demo"
                  className="flex items-center gap-3 text-sm text-[var(--charcoal)] hover:text-[var(--warm-white)] transition-colors"
                >
                  <HiOutlineMail size={18} aria-hidden />
                  contacto@herreraasociados.demo
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-sm text-[var(--charcoal)]">
                  <HiOutlineLocationMarker size={18} className="flex-shrink-0 mt-0.5" aria-hidden />
                  Paseo de la Reforma 250, CDMX
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-wider uppercase text-[var(--gold)] mb-4">
              Áreas de práctica
            </h4>
            <ul className="space-y-2 text-sm text-[var(--charcoal)]">
              <li>Derecho corporativo</li>
              <li>Litigio civil y mercantil</li>
              <li>Derecho laboral</li>
              <li>Contratos y cumplimiento</li>
              <li>Asesoría preventiva</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--border)]/20">
          <p className="text-xs text-[var(--muted)]">
            © {new Date().getFullYear()} Herrera & Asociados. Sitio demo ficticio.
          </p>
        </div>
      </div>
    </footer>
  );
}
