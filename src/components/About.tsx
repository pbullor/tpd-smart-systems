"use client";

import { Building2, Cpu, Globe } from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

const highlights = [
  {
    icon: Building2,
    title: "Infraestructura física",
    text: "Automatización y gestión de espacios corporativos, retail e industriales.",
  },
  {
    icon: Cpu,
    title: "Industrial IoT",
    text: "Dispositivos conectados, controladores y gateways para operaciones inteligentes.",
  },
  {
    icon: Globe,
    title: "Plataforma centralizada",
    text: "Software propio para administrar dispositivos, usuarios y eventos en tiempo real.",
  },
];

export default function About() {
  const titleRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useStaggerReveal<HTMLDivElement>(120);

  return (
    <section id="nosotros" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Quiénes somos
          </h2>
          <p className="mt-6 text-lg text-tpd-text-muted leading-relaxed">
            TPD nace de Tu Precio Digital y evoluciona hacia una plataforma de
            soluciones inteligentes para infraestructura física, retail,
            logística e industria.
          </p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group p-6 rounded-xl bg-tpd-card border border-tpd-border hover:border-tpd-teal/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(13,148,136,0.08)] hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-tpd-teal/10 flex items-center justify-center mb-4 group-hover:bg-tpd-teal/20 transition-colors">
                <item.icon size={24} className="text-tpd-teal-light" />
              </div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-tpd-text-muted leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
