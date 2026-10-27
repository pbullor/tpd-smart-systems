"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const clients = [
  { name: "YPF", logo: "/logos/ypf.svg" },
  { name: "Manifesto", logo: "/logos/manifesto.png" },
  { name: "Match Point", logo: "/logos/matchpoint.png" },
];

export default function Clients() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-16 px-6 lg:px-8 bg-tpd-darker overflow-hidden">
      <div ref={ref}>
        <p className="text-center text-sm font-medium tracking-widest uppercase text-tpd-text-muted mb-10">
          Quiénes nos eligen
        </p>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-tpd-darker to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-tpd-darker to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee">
            {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
              <div
                key={`${client.name}-${i}`}
                className="flex-shrink-0 mx-10 sm:mx-14 opacity-40 hover:opacity-100 transition-opacity duration-500"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={48}
                  className="h-8 sm:h-10 w-auto object-contain mix-blend-lighten"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
