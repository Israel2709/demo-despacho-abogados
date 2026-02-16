import Link from "next/link";
import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

interface BaseProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
}

interface ButtonAsButton extends BaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  href?: never;
}

interface ButtonAsLink extends BaseProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children"> {
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--navy)] text-[var(--warm-white)] hover:bg-[var(--navy-light)] border border-[var(--navy)] transition-colors",
  secondary:
    "bg-transparent text-[var(--foreground)] border border-[var(--border)] hover:border-[var(--charcoal)] transition-colors",
  outline:
    "bg-transparent text-[var(--warm-white)] border border-[var(--warm-white)] hover:bg-[var(--warm-white)] hover:text-[var(--navy)] transition-colors",
  ghost:
    "bg-transparent text-[var(--foreground)] hover:bg-[var(--border)]/30 transition-colors",
};

const base =
  "inline-flex items-center justify-center gap-2 px-6 py-3 font-medium text-sm tracking-wide uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)] disabled:opacity-50 disabled:pointer-events-none";

export function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`.trim();

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...rest } = props as ButtonAsButton;
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
