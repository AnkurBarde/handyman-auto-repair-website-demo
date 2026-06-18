import { Phone } from "lucide-react";
import { business } from "@/lib/business";
import { cn } from "@/lib/cn";

type Variant = "accent" | "dark" | "outline" | "outlineLight";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 active:translate-y-px";

const variants: Record<Variant, string> = {
  // Dark text on amber. High contrast and on-brand. Primary action.
  accent:
    "bg-accent text-ink shadow-sm hover:-translate-y-0.5 hover:shadow-md hover:brightness-95 focus-visible:ring-offset-paper",
  dark: "bg-ink text-white hover:bg-graphite focus-visible:ring-offset-paper",
  outline:
    "border border-line bg-paper text-ink hover:border-ink/30 hover:bg-mist focus-visible:ring-offset-paper",
  outlineLight:
    "border border-white/25 text-white hover:border-white/50 hover:bg-white/10 focus-visible:ring-offset-ink",
};

const sizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-[0.95rem]",
  lg: "h-14 px-7 text-base",
};

export function CallButton({
  variant = "accent",
  size = "md",
  label,
  className,
}: {
  variant?: Variant;
  size?: keyof typeof sizes;
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={`tel:${business.phone.tel}`}
      className={cn(base, variants[variant], sizes[size], className)}
      aria-label={`Call ${business.name} at ${business.phone.display}`}
    >
      <Phone className="h-[1.05em] w-[1.05em]" aria-hidden="true" strokeWidth={2.25} />
      <span>{label ?? `Call ${business.phone.display}`}</span>
    </a>
  );
}
