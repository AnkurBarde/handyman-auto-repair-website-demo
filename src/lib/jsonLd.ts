import { business } from "./business";

// TODO: set to the real production domain once connected.
export const SITE_URL = "https://handyman-auto-repair.vercel.app";

// "8:00 AM" -> "08:00", "4:00 PM" -> "16:00" for schema.org openingHours.
function to24h(time: string): string {
  const match = time.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) return time;
  let hour = Number(match[1]);
  const minute = match[2];
  const period = match[3].toUpperCase();
  if (period === "PM" && hour !== 12) hour += 12;
  if (period === "AM" && hour === 12) hour = 0;
  return `${String(hour).padStart(2, "0")}:${minute}`;
}

// LocalBusiness (AutoRepair) structured data, built only from confirmed facts.
export function autoRepairJsonLd() {
  const openDays = business.hours.filter((h) => h.open && h.close);

  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: business.name,
    description: business.intro,
    image: `${SITE_URL}/images/storefront.jpg`,
    url: SITE_URL,
    telephone: business.phone.tel,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: business.address.city,
    },
    openingHoursSpecification: openDays.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.day,
      opens: to24h(h.open as string),
      closes: to24h(h.close as string),
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.rating.stars,
      reviewCount: business.rating.count,
      bestRating: 5,
    },
    paymentAccepted: business.payments.join(", "),
  };
}
