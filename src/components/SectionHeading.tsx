import { cn } from "@/lib/cn";

// Eyebrow + title + optional lead. Left-aligned by default to keep the
// layout intentional rather than everything-centered.
export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = "light",
  className,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  const titleColor = tone === "dark" ? "text-white" : "text-ink";
  const leadColor = tone === "dark" ? "text-white/70" : "text-steel";

  return (
    <div className={cn("max-w-2xl", className)}>
      <div className="flex items-center gap-2.5">
        <span className="h-px w-8 bg-accent" aria-hidden="true" />
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-strong">
          {eyebrow}
        </span>
      </div>
      <h2
        className={cn(
          "mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl",
          titleColor,
        )}
      >
        {title}
      </h2>
      {lead ? (
        <p className={cn("mt-4 text-base leading-relaxed sm:text-lg", leadColor)}>
          {lead}
        </p>
      ) : null}
    </div>
  );
}
