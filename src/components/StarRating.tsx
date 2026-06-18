import { Star } from "lucide-react";
import { cn } from "@/lib/cn";

// Renders 5 stars with precise fractional fill (e.g. 4.5).
export function StarRating({
  value,
  size = 18,
  className,
}: {
  value: number;
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={cn("inline-flex items-center gap-0.5", className)}
      role="img"
      aria-label={`${value} out of 5 stars`}
    >
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.max(0, Math.min(1, value - i)) * 100;
        return (
          <span
            key={i}
            className="relative inline-block"
            style={{ width: size, height: size }}
            aria-hidden="true"
          >
            <Star
              className="absolute inset-0 text-accent/30"
              style={{ width: size, height: size }}
              strokeWidth={1.75}
            />
            <span
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fill}%` }}
            >
              <Star
                className="text-accent"
                style={{ width: size, height: size }}
                fill="currentColor"
                strokeWidth={1.75}
              />
            </span>
          </span>
        );
      })}
    </span>
  );
}
