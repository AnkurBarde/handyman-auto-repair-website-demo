import { Clock, MapPin, Navigation, CreditCard } from "lucide-react";
import { business } from "@/lib/business";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

export function HoursLocation() {
  return (
    <section id="hours" className="bg-mist py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Hours and location"
          title="Find us on Stevens Creek"
          lead="Drop by during shop hours or call ahead. We are easy to reach on Stevens Creek Boulevard."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Details */}
          <div className="rounded-2xl border border-line bg-paper p-6 sm:p-8">
            <div className="flex items-center gap-2.5">
              <Clock className="h-5 w-5 text-accent-strong" aria-hidden="true" />
              <h3 className="text-lg font-bold text-ink">Hours</h3>
            </div>

            <dl className="mt-4 divide-y divide-line">
              {business.hours.map((h) => {
                const closed = !h.open || !h.close;
                return (
                  <div
                    key={h.day}
                    className="flex items-center justify-between py-2.5 text-[0.95rem]"
                  >
                    <dt className="font-medium text-ink">{h.day}</dt>
                    <dd
                      className={
                        closed
                          ? "text-steel"
                          : "font-medium tabular-nums text-ink"
                      }
                    >
                      {closed ? "Closed" : `${h.open} – ${h.close}`}
                    </dd>
                  </div>
                );
              })}
            </dl>

            <div className="mt-7 border-t border-line pt-7">
              <div className="flex items-center gap-2.5">
                <MapPin className="h-5 w-5 text-accent-strong" aria-hidden="true" />
                <h3 className="text-lg font-bold text-ink">Location</h3>
              </div>
              <address className="mt-3 not-italic leading-relaxed text-steel">
                {business.address.street}
                <br />
                {business.address.city}, {business.address.state}{" "}
                {business.address.zip}
              </address>
              <a
                href={business.links.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent-strong transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:rounded"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Get directions
              </a>
            </div>

            <div className="mt-7 flex items-start gap-2.5 border-t border-line pt-7 text-sm text-steel">
              <CreditCard
                className="mt-0.5 h-5 w-5 shrink-0 text-accent-strong"
                aria-hidden="true"
              />
              <p>
                <span className="font-semibold text-ink">Payments: </span>
                {business.payments.join(", ")}
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-2xl border border-line bg-paper shadow-sm">
            <iframe
              title={`Map to ${business.name}`}
              src={business.links.mapEmbed}
              className="h-full min-h-[22rem] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
