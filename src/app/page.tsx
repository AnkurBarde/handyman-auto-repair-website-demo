import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Reviews } from "@/components/Reviews";
import { HoursLocation } from "@/components/HoursLocation";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <WhyUs />
        <Reviews />
        <HoursLocation />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
