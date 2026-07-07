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

export default function Home() {
  return (
    <>
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
