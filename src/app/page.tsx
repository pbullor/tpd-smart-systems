import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AnimatedCounter from "@/components/AnimatedCounter";
import About from "@/components/About";
import Platform from "@/components/Platform";
import Solutions from "@/components/Solutions";
import UseCases from "@/components/UseCases";
import Architecture from "@/components/Architecture";
import WhyTPD from "@/components/WhyTPD";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TPD Smart Systems",
  url: "https://tpdsmart.com",
  logo: "https://tpdsmart.com/icon-512.png",
  description:
    "Soluciones tecnológicas para conectar, automatizar y administrar espacios físicos inteligentes. Smart Lockers, ESL, Access Control y plataforma IoT.",
  email: "hola@tpdsmart.com",
  sameAs: [],
  knowsAbout: [
    "Industrial IoT",
    "Smart Lockers",
    "Electronic Shelf Labels",
    "Access Control",
    "Building Automation",
  ],
  offers: {
    "@type": "AggregateOffer",
    description:
      "Soluciones de IoT industrial: Smart Lockers, ESL, Control de Acceso, Plataforma IoT",
    priceCurrency: "USD",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <AnimatedCounter />
        <About />
        <Platform />
        <Solutions />
        <UseCases />
        <Architecture />
        <WhyTPD />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
