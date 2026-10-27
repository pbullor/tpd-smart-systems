"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const clients = [
  { name: "YPF", logo: "/logos/ypf.svg" },
  { name: "Manifesto", logo: "/logos/manifesto.svg" },
  { name: "Match Point", logo: "/logos/matchpoint.svg" },
];

export default function Clients() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-20 px-6 lg:px-8 bg-tpd-dark">
      <div ref={ref} className="max-w-5xl mx-auto">
        <p className="text-center text-sm font-medium tracking-widest uppercase text-tpd-text-muted mb-12">
          Quiénes nos eligen
        </p>

        <div className="flex flex-wrap items-center justify-center gap-12 sm:gap-16">
          {clients.map((client) => (
            <div
              key={client.name}
              className="opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={48}
                className="h-10 sm:h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
