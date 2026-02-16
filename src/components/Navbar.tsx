"use client";

import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/areas", label: "Áreas de práctica" },
  { href: "/equipo", label: "Equipo" },
  { href: "/experiencia", label: "Experiencia" },
  { href: "/publicaciones", label: "Publicaciones" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-sm">
      <nav className="mx-auto max-w-6xl px-6 md:px-8" aria-label="Navegación principal">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <Link
            href="/"
            className="font-serif text-xl md:text-2xl font-medium text-[var(--foreground)] hover:text-[var(--gold)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--gold)] focus-visible:outline-offset-2"
          >
            Herrera & Asociados
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--gold)]"
              aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            >
              {theme === "dark" ? (
                <span className="text-lg" aria-hidden>☀</span>
              ) : (
                <span className="text-lg" aria-hidden>☽</span>
              )}
            </button>
            <Button href="/consulta" variant="primary" className="text-xs px-4 py-2">
              Agendar consulta
            </Button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 text-[var(--muted)] hover:text-[var(--foreground)]"
              aria-label={theme === "dark" ? "Modo claro" : "Modo oscuro"}
            >
              {theme === "dark" ? "☀" : "☽"}
            </button>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="p-2 text-[var(--foreground)]"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96" : "max-h-0"}`}
          aria-hidden={!open}
        >
          <div className="py-4 space-y-4 border-t border-[var(--border)]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-sm font-medium text-[var(--foreground)] hover:text-[var(--gold)]"
              >
                {link.label}
              </Link>
            ))}
            <Button href="/consulta" variant="primary" className="w-full justify-center">
              Agendar consulta
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
