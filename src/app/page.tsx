import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AnimatedCounter from "@/components/AnimatedCounter";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import Solutions from "@/components/Solutions";
import UseCases from "@/components/UseCases";
import SmartLockersDetail from "@/components/SmartLockersDetail";
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
        <HowItWorks />
        <About />
        <Solutions />
        <UseCases />
        <SmartLockersDetail />
        <Architecture />
        <WhyTPD />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
