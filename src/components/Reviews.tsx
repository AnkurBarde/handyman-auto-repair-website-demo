import { Quote, ExternalLink } from "lucide-react";
import { business } from "@/lib/business";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { StarRating } from "./StarRating";

// TODO: replace with real approved reviews. These are paraphrased in our own
// words to show the layout. Do not paste real Google or Yelp review text, and
// do not invent customer names.
const testimonials = [
  {
    quote:
      "Dai walked me out to the car and showed me the worn brake pad before he touched anything. Fair price, no pressure.",
    person: "Cupertino driver",
  },
  {
    quote:
      "Took my Tesla in for a check. Straight answer, fixed the same day, and the cost matched the quote.",
    person: "Local EV owner",
  },
  {
    quote:
      "He told me a repair could wait and did not try to sell me anything extra. That is why I keep coming back.",
    person: "Longtime customer",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="bg-paper py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Reviews"
          title={`Rated ${business.rating.stars} on ${business.rating.source}`}
          lead="A few words from drivers around Cupertino, in our own paraphrase until we add approved reviews."
        />

        {/* Rating summary */}
        <div className="mt-10 flex flex-col gap-5 rounded-2xl border border-line bg-mist/60 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div className="flex items-center gap-5">
            <div className="font-display text-5xl font-extrabold leading-none text-ink">
              {business.rating.stars}
            </div>
            <div>
              <StarRating value={business.rating.stars} size={20} />
              <p className="mt-1.5 text-sm text-steel">
                Based on around {business.rating.count} reviews on{" "}
                {business.rating.source}
              </p>
            </div>
          </div>
          <a
            href={business.links.googleListing}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-line bg-paper px-5 text-sm font-semibold text-ink transition duration-200 hover:border-ink/30 hover:bg-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            Read reviews on {business.rating.source}
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        {/* Testimonials */}
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.person}
              className="flex flex-col rounded-2xl border border-line bg-paper p-6"
            >
              <Quote
                className="h-7 w-7 text-accent"
                aria-hidden="true"
                strokeWidth={2}
              />
              <blockquote className="mt-4 flex-1 text-[0.975rem] leading-relaxed text-ink">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 flex items-center justify-between border-t border-line pt-4">
                <span className="text-sm font-semibold text-steel">
                  {t.person}
                </span>
                <StarRating value={5} size={14} />
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
