import {
  Wrench,
  Droplets,
  BadgeCheck,
  Droplet,
  Disc3,
  Settings2,
  CircleDot,
  ScanLine,
  Thermometer,
  Ruler,
  Zap,
  Wind,
  Hammer,
  Check,
  type LucideIcon,
} from "lucide-react";
import { business } from "@/lib/business";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

// Group header icon by group id.
const groupIcon: Record<string, LucideIcon> = {
  maintenance: Droplets,
  repair: Wrench,
  smog: BadgeCheck,
};

// Per-service icon. Falls back to a check mark for anything unmapped.
const itemIcon: Record<string, LucideIcon> = {
  "Oil and fluid changes": Droplet,
  Tires: Disc3,
  "Tune-ups": Settings2,
  "General maintenance": Wrench,
  Brakes: CircleDot,
  "Check-engine and diagnostics": ScanLine,
  "AC and heating": Thermometer,
  Alignment: Ruler,
  "Alternator and starter": Zap,
  "Smog check (Star Station)": Wind,
  "Smog repair": Hammer,
};

export function Services() {
  // TODO: confirm with owner — service list and groupings live in src/lib/business.ts.
  return (
    <section id="services" className="bg-mist py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="Service for most cars, trucks, and EVs"
          lead="From a smog check to a check-engine light, we handle the everyday work that keeps your car safe and running."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {business.services.map((group) => {
            const GroupIcon = groupIcon[group.id] ?? Wrench;
            return (
              <div
                key={group.id}
                className="group rounded-2xl border border-line bg-paper p-6 transition duration-200 hover:-translate-y-1 hover:border-ink/15 hover:shadow-lg hover:shadow-ink/5"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-accent transition-colors">
                    <GroupIcon className="h-[1.45rem] w-[1.45rem]" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-bold text-ink">{group.label}</h3>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-steel">
                  {group.blurb}
                </p>

                <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
                  {group.items.map((item) => {
                    const ItemIcon = itemIcon[item] ?? Check;
                    return (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-[0.95rem] text-ink"
                      >
                        <ItemIcon
                          className="h-4 w-4 shrink-0 text-accent-strong"
                          aria-hidden="true"
                          strokeWidth={2}
                        />
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        {/* EV / Tesla note */}
        <div className="mt-5 flex flex-col gap-3 rounded-2xl border border-accent/30 bg-accent/[0.06] px-6 py-5 sm:flex-row sm:items-center sm:gap-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-ink">
            <Zap className="h-5 w-5" aria-hidden="true" />
          </span>
          <p className="text-[0.95rem] font-medium text-ink">
            {business.evNote} Same plain-spoken service, whether you drive gas,
            hybrid, or electric.
          </p>
        </div>
      </Container>
    </section>
  );
}
