import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import AnimatedCounter from "@/components/AnimatedCounter";
import Solutions from "@/components/Solutions";
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
        <About />
        <Solutions />
        <SmartLockersDetail />
        <Architecture />
        <WhyTPD />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
