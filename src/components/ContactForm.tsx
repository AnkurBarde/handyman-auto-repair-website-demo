"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { business } from "@/lib/business";

// TODO: paste Formspree endpoint (e.g. https://formspree.io/f/abcd1234).
// While this is "REPLACE_ME" the form shows a success state but does not send.
const FORMSPREE_ENDPOINT = "REPLACE_ME";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink placeholder:text-steel/60 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget; // capture before any await
    setStatus("submitting");

    // Demo guard: never post anywhere until a real endpoint is configured.
    if (FORMSPREE_ENDPOINT === "REPLACE_ME") {
      await new Promise((resolve) => setTimeout(resolve, 700));
      setStatus("success");
      return;
    }

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      setStatus(response.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="flex flex-col items-start rounded-2xl border border-line bg-paper p-8 text-center"
        aria-live="polite"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent-strong">
          <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
        </span>
        <h3 className="mt-4 text-left text-xl font-bold text-ink">
          Thanks, we got your message
        </h3>
        <p className="mt-2 text-left leading-relaxed text-steel">
          We will get back to you about your vehicle. Need a faster answer? Call
          us at{" "}
          <a
            href={`tel:${business.phone.tel}`}
            className="font-semibold text-accent-strong hover:text-ink"
          >
            {business.phone.display}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex h-11 items-center rounded-full border border-line px-5 text-sm font-semibold text-ink transition-colors hover:bg-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          Send another message
        </button>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-line bg-paper p-6 sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={fieldClass}
          />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="(408) 555-0123"
            className={fieldClass}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
            Email{" "}
            <span className="font-normal text-steel">(optional)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={fieldClass}
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="mb-1.5 block text-sm font-medium text-ink"
          >
            Your vehicle and what you need
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="Year, make, and model, plus what is going on with it."
            className={`${fieldClass} resize-y`}
          />
        </div>
      </div>

      {status === "error" ? (
        <div
          className="mt-5 flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
          role="alert"
        >
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
          <span>
            Something went wrong sending your message. Please try again, or call
            us at{" "}
            <a href={`tel:${business.phone.tel}`} className="font-semibold underline">
              {business.phone.display}
            </a>
            .
          </span>
        </div>
      ) : null}

      <button
        type="submit"
        disabled={submitting}
        className="mt-6 inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-base font-semibold text-ink shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        aria-live="polite"
      >
        {submitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" aria-hidden="true" />
            Send message
          </>
        )}
      </button>
    </form>
  );
}
