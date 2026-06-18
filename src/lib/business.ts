// Single source of truth for Handyman Auto Repair.
// Every section reads from this file. Do not duplicate these facts elsewhere.
// Do not invent new facts (no prices, certifications, or years in business).

export type Hour = {
  day: string;
  open: string | null; // null means closed
  close: string | null;
};

export type ServiceGroup = {
  id: "maintenance" | "repair" | "smog";
  label: string;
  blurb: string;
  // TODO: confirm with owner
  items: string[];
};

export const business = {
  name: "Handyman Auto Repair",
  tagline: "Honest auto repair in Cupertino",

  // A short, true line about how the shop works. Plain English, no hype.
  intro:
    "A local shop run by Dai. He shows you the problem, explains it in plain terms, and fixes what needs fixing.",

  phone: {
    // Confirmed current by owner. An older listing showed (408) 777-0120.
    display: "(408) 876-7716",
    tel: "+14088767716",
  },

  address: {
    street: "5696 Stevens Creek Blvd",
    city: "Cupertino",
    state: "CA",
    zip: "95014",
    full: "5696 Stevens Creek Blvd, Cupertino, CA 95014",
  },

  // The shop reports no public email, so email options stay hidden on the site.
  // Put a real address here to surface them automatically (see hasPublicEmail).
  email: "PLACEHOLDER_EMAIL@example.com",

  owner: "Dai Nguyen", // Confirmed by owner

  // Structured so the hours table and JSON-LD both read from one place.
  // Confirmed by owner: 8 to 4 every day except Sunday.
  hours: [
    { day: "Monday", open: "8:00 AM", close: "4:00 PM" },
    { day: "Tuesday", open: "8:00 AM", close: "4:00 PM" },
    { day: "Wednesday", open: "8:00 AM", close: "4:00 PM" },
    { day: "Thursday", open: "8:00 AM", close: "4:00 PM" },
    { day: "Friday", open: "8:00 AM", close: "4:00 PM" },
    { day: "Saturday", open: "8:00 AM", close: "4:00 PM" },
    { day: "Sunday", open: null, close: null },
  ] as Hour[],

  // Short version for the header, hero, and footer.
  hoursSummary: "Mon to Sat, 8:00 AM to 4:00 PM",

  rating: {
    stars: 4.5,
    count: 331, // TODO: confirm current count before going live
    source: "Google",
  },

  mapsQuery:
    "Handyman Auto Repair, 5696 Stevens Creek Blvd, Cupertino, CA 95014",

  payments: [
    "Visa",
    "MasterCard",
    "Amex",
    "Discover",
    "Cash",
    "Check",
    "Debit",
  ],

  // Grouped sensibly for the services grid.
  // TODO: confirm with owner
  services: [
    {
      id: "maintenance",
      label: "Maintenance",
      blurb: "Keep your car running and catch small problems early.",
      items: [
        "Oil and fluid changes",
        "Tires",
        "Tune-ups",
        "General maintenance",
      ],
    },
    {
      id: "repair",
      label: "Repair",
      blurb: "Diagnose the real problem, then fix what needs fixing.",
      items: [
        "Brakes",
        "Check-engine and diagnostics",
        "AC and heating",
        "Alignment",
        "Alternator and starter",
      ],
    },
    {
      id: "smog",
      label: "Smog",
      blurb: "A licensed Star Station for smog checks and smog repair.",
      items: ["Smog check (Star Station)", "Smog repair"],
    },
  ] as ServiceGroup[],

  // The shop also services Teslas and EVs.
  evNote: "We also service Teslas and EVs.",

  // External links built from the facts above.
  links: {
    // Google Maps embed and directions work from the address with no API key.
    mapEmbed:
      "https://maps.google.com/maps?q=" +
      encodeURIComponent(
        "Handyman Auto Repair, 5696 Stevens Creek Blvd, Cupertino, CA 95014",
      ) +
      "&t=&z=15&ie=UTF8&iwloc=&output=embed",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=" +
      encodeURIComponent(
        "Handyman Auto Repair, 5696 Stevens Creek Blvd, Cupertino, CA 95014",
      ),
    // TODO: replace with the real Google Business Profile listing URL once claimed.
    googleListing:
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent(
        "Handyman Auto Repair, 5696 Stevens Creek Blvd, Cupertino, CA 95014",
      ),
  },

  // Small editable credit line in the footer.
  siteCreditName: "Ankur Barde",
} as const;

export type Business = typeof business;

// The shop may have no public email. Only show email contact options once the
// placeholder above is replaced with a real address.
export const hasPublicEmail = !business.email.startsWith("PLACEHOLDER_EMAIL");
