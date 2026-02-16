import Link from "next/link";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article";
}

export function Card({ children, className = "", as: Component = "div" }: CardProps) {
  return (
    <Component
      className={`border border-[var(--border)] bg-[var(--background)] p-6 md:p-8 transition-colors hover:border-[var(--charcoal)]/30 ${className}`}
    >
      {children}
    </Component>
  );
}

interface CardLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function CardLink({ href, children, className = "", style }: CardLinkProps) {
  return (
    <Link
      href={href}
      style={style}
      className={`block border border-[var(--border)] bg-[var(--background)] p-6 md:p-8 transition-all hover:border-[var(--gold)]/40 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--gold)] ${className}`}
    >
      {children}
    </Link>
  );
}
