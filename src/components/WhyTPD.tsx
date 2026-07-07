"use client";

import {
  Server,
  Cpu,
  Layers,
  Plug,
  Link2,
  MapPin,
  Headphones,
  KeyRound,
} from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

const benefits = [
  { icon: Server, text: "Plataforma tecnológica propia" },
  { icon: Cpu, text: "Industrial IoT" },
  { icon: Layers, text: "Arquitectura escalable" },
  { icon: Plug, text: "API abierta" },
  { icon: Link2, text: "Integraciones" },
  { icon: MapPin, text: "Desarrollo local" },
  { icon: Headphones, text: "Soporte directo" },
  { icon: KeyRound, text: "Licencia perpetua" },
];

export default function WhyTPD() {
  const titleRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useStaggerReveal<HTMLDivElement>(70);

  return (
    <section id="por-que-tpd" className="py-28 px-6 lg:px-8 bg-tpd-darker">
      <div className="max-w-5xl mx-auto">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Ventajas competitivas
          </h2>
          <p className="mt-5 text-tpd-text-muted leading-relaxed">
            Tecnología, cercanía y visión de producto. Todo lo que necesitás
            para una implementación exitosa y sostenible en el tiempo.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {benefits.map((b) => (
            <div
              key={b.text}
              className="group flex flex-col items-center text-center p-5 rounded-xl bg-tpd-card border border-tpd-border hover:border-tpd-border-hover transition-all duration-300 hover:bg-tpd-card-hover"
            >
              <div className="w-10 h-10 rounded-lg bg-tpd-teal/8 flex items-center justify-center mb-3 group-hover:bg-tpd-teal/12 transition-colors duration-300">
                <b.icon
                  size={19}
                  className="text-tpd-teal-light"
                  strokeWidth={1.5}
                />
              </div>
              <span className="text-sm text-white font-medium leading-snug">
                {b.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
