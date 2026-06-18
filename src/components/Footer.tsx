import { Wrench, Phone, Mail, Navigation } from "lucide-react";
import { business, hasPublicEmail } from "@/lib/business";
import { Container } from "./Container";
import { StarRating } from "./StarRating";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white/70">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-accent ring-1 ring-white/10">
                <Wrench className="h-5 w-5" strokeWidth={2.25} aria-hidden="true" />
              </span>
              <span className="font-display text-base font-bold leading-none text-white">
                {business.name}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed">{business.tagline}.</p>
            <div className="mt-4 flex items-center gap-2">
              <StarRating value={business.rating.stars} size={15} />
              <span className="text-sm text-white/60">
                {business.rating.stars} on {business.rating.source}
              </span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h2>
            <address className="mt-4 space-y-3 text-sm not-italic">
              <p className="leading-relaxed">
                {business.address.street}
                <br />
                {business.address.city}, {business.address.state}{" "}
                {business.address.zip}
              </p>
              <p>
                <a
                  href={`tel:${business.phone.tel}`}
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
                  {business.phone.display}
                </a>
              </p>
              {hasPublicEmail ? (
                <p>
                  <a
                    href={`mailto:${business.email}`}
                    className="inline-flex items-center gap-2 hover:text-white"
                  >
                    <Mail className="h-4 w-4 text-accent" aria-hidden="true" />
                    {business.email}
                  </a>
                </p>
              ) : null}
              <p>
                <a
                  href={business.links.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  <Navigation className="h-4 w-4 text-accent" aria-hidden="true" />
                  Get directions
                </a>
              </p>
            </address>
          </div>

          {/* Hours */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Hours
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex justify-between gap-4">
                <span>Mon – Sat</span>
                <span className="tabular-nums text-white">8:00 AM – 4:00 PM</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sunday</span>
                <span className="text-white/50">Closed</span>
              </li>
            </ul>
          </div>

          {/* Payments */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Payments
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {business.payments.map((p) => (
                <li
                  key={p}
                  className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-white/80"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.name}. All rights reserved.
          </p>
          {/* Edit this credit line, or remove it. */}
          <p>Website by {business.siteCreditName}</p>
        </div>
      </Container>
    </footer>
  );
}
