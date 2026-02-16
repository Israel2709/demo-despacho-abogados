interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div";
}

export function Section({
  children,
  className = "",
  id,
  as: Component = "section",
}: SectionProps) {
  return (
    <Component
      id={id}
      className={`py-16 md:py-24 lg:py-32 ${className}`}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {children}
      </div>
    </Component>
  );
}
