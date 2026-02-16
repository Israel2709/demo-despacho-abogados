interface TimelineItem {
  year?: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: readonly TimelineItem[];
  className?: string;
}

export function Timeline({ items, className = "" }: TimelineProps) {
  return (
    <div className={`space-y-0 ${className}`}>
      {items.map((item, i) => (
        <div
          key={i}
          className="relative flex gap-8 md:gap-12 pb-12 last:pb-0 animate-fade-in"
          style={{ animationDelay: `${i * 80}ms` }}
        >
          <div className="flex-shrink-0 w-20 md:w-24 text-right">
            {item.year && (
              <span className="font-serif text-lg md:text-xl text-[var(--gold)]">
                {item.year}
              </span>
            )}
          </div>
          <div className="flex-1 min-w-0 border-l-2 border-[var(--border)] pl-8 md:pl-12 -ml-1">
            <h3 className="font-serif text-lg md:text-xl font-medium text-[var(--foreground)] mb-2">
              {item.title}
            </h3>
            <p className="text-[var(--muted)] text-sm md:text-base leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
