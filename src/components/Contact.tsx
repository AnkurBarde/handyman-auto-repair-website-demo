import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { business, hasPublicEmail } from "@/lib/business";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" className="bg-paper py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Tell us what your car needs"
          lead="Send a message and we will get back to you. For anything urgent, calling the shop is fastest."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          {/* Direct contact */}
          <div className="lg:col-span-2">
            <div className="flex h-full flex-col rounded-2xl bg-ink p-6 text-white sm:p-8">
              <h3 className="text-xl font-bold">Prefer to talk?</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                Call the shop and talk it through. No phone trees, no scripts.
              </p>

              <a
                href={`tel:${business.phone.tel}`}
                className="mt-6 inline-flex h-13 items-center justify-center gap-2 rounded-full bg-accent px-6 text-base font-semibold text-ink transition duration-200 hover:-translate-y-0.5 hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                aria-label={`Call ${business.name} at ${business.phone.display}`}
              >
                <Phone className="h-5 w-5" aria-hidden="true" strokeWidth={2.25} />
                {business.phone.display}
              </a>

              <dl className="mt-8 space-y-5 border-t border-white/10 pt-8 text-sm">
                {hasPublicEmail ? (
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                    <div>
                      <dt className="font-semibold text-white">Email</dt>
                      <dd>
                        <a
                          href={`mailto:${business.email}`}
                          className="text-white/70 underline-offset-2 hover:text-white hover:underline"
                        >
                          {business.email}
                        </a>
                      </dd>
                    </div>
                  </div>
                ) : null}

                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <div>
                    <dt className="font-semibold text-white">Hours</dt>
                    <dd className="text-white/70">{business.hoursSummary}</dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <div>
                    <dt className="font-semibold text-white">Shop</dt>
                    <dd className="text-white/70">
                      {business.address.street}, {business.address.city}
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
