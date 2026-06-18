import { Wrench } from "lucide-react";
import { business } from "@/lib/business";
import { Container } from "./Container";
import { CallButton } from "./CallButton";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why us" },
  { href: "#reviews", label: "Reviews" },
  { href: "#hours", label: "Hours" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a
          href="#top"
          className="flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          aria-label={`${business.name}, back to top`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink text-accent">
            <Wrench className="h-5 w-5" strokeWidth={2.25} aria-hidden="true" />
          </span>
          <span className="font-display text-[1.05rem] font-bold leading-none tracking-tight text-ink">
            Handyman
            <span className="ml-1 font-semibold text-steel">Auto Repair</span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-steel transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <CallButton size="sm" className="hidden sm:inline-flex" />
        <CallButton size="sm" label="Call" className="sm:hidden" />
      </Container>
    </header>
  );
}
