import Image from "next/image";
import { MapPin, Clock, BadgeCheck, Zap } from "lucide-react";
import { business } from "@/lib/business";
import { Container } from "./Container";
import { CallButton } from "./CallButton";
import { StarRating } from "./StarRating";

const chips = [
  { icon: BadgeCheck, label: "Star-certified smog station" },
  { icon: Zap, label: "Teslas and EVs welcome" },
  { icon: Clock, label: business.hoursSummary },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-accent/10 via-paper to-mist/50"
    >
      <Container className="grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-12 lg:gap-12 lg:py-24">
        {/* Copy */}
        <div className="lg:col-span-6">
          <div className="flex items-center gap-2 text-sm font-medium text-steel">
            <MapPin className="h-4 w-4 text-accent-strong" aria-hidden="true" />
            <span>{business.name} · Cupertino, CA</span>
          </div>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {business.tagline}.
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-steel">
            {business.intro}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
            <StarRating value={business.rating.stars} size={20} />
            <span className="text-sm font-semibold text-ink">
              {business.rating.stars} on {business.rating.source}
            </span>
            <span className="text-sm text-steel">
              · around {business.rating.count} reviews
            </span>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CallButton size="lg" />
            <a
              href="#services"
              className="inline-flex h-14 items-center justify-center rounded-full border border-line bg-paper px-7 text-base font-semibold text-ink transition duration-200 hover:border-ink/30 hover:bg-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              See our services
            </a>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-5 gap-y-2.5">
            {chips.map((chip) => (
              <li
                key={chip.label}
                className="flex items-center gap-2 text-sm font-medium text-steel"
              >
                <chip.icon
                  className="h-4 w-4 text-accent-strong"
                  aria-hidden="true"
                />
                {chip.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Image with floating rating card */}
        <div className="lg:col-span-6">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line shadow-xl shadow-ink/5 sm:aspect-[16/11]">
              <Image
                src="/images/storefront.jpg"
                alt={`A vehicle up on a lift in the service bay at ${business.name} in ${business.address.city}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 540px"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-5 left-5 hidden rounded-xl border border-line bg-paper px-4 py-3 shadow-lg shadow-ink/10 sm:flex sm:items-center sm:gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink text-accent">
                <BadgeCheck className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <StarRating value={business.rating.stars} size={15} />
                  <span className="text-sm font-bold text-ink">
                    {business.rating.stars}
                  </span>
                </div>
                <div className="text-xs text-steel">
                  Rated on {business.rating.source}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
