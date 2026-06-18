import Image from "next/image";
import { Eye, Package, BadgeDollarSign, MessageSquare, type LucideIcon } from "lucide-react";
import { business } from "@/lib/business";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

type Point = { icon: LucideIcon; title: string; body: string };

const points: Point[] = [
  {
    icon: Eye,
    title: "He shows you the problem",
    body: "Dai walks you to the car and points out the worn or broken part before any work starts.",
  },
  {
    icon: Package,
    title: "You keep your old parts",
    body: "Ask for the parts we take off and we hand them back. Nothing to wonder about.",
  },
  {
    icon: BadgeDollarSign,
    title: "Fair, up-front pricing",
    body: "You get the price before the work. If a repair can wait, we tell you it can wait.",
  },
  {
    icon: MessageSquare,
    title: "Explained in plain terms",
    body: "No jargon. You leave knowing what was wrong and what we did about it.",
  },
];

export function WhyUs() {
  return (
    <section id="why" className="bg-ink py-16 text-white sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Why this shop"
          title="Honest work you can see"
          lead={`Run by ${business.owner}, the kind of mechanic who explains the repair instead of just handing you a bill.`}
          tone="dark"
        />

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="order-last lg:order-first">
            <div className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40 sm:aspect-[4/3] lg:aspect-[5/6]">
              <Image
                src="/images/dai-at-work.svg"
                alt={`${business.owner} working on a car at ${business.name}`}
                fill
                sizes="(max-width: 1024px) 100vw, 540px"
                className="object-cover"
              />
            </div>
          </div>

          <ul className="grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2">
            {points.map((point) => (
              <li key={point.title} className="bg-ink p-6 sm:p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-accent ring-1 ring-white/10">
                  <point.icon className="h-[1.4rem] w-[1.4rem]" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-white">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {point.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
