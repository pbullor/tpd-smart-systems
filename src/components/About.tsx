"use client";

import { Server, KeyRound, Layers, MapPin } from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

const pillars = [
  {
    icon: Server,
    title: "Plataforma tecnológica propia",
    text: "Software desarrollado internamente para administrar dispositivos, usuarios, permisos y eventos en tiempo real.",
  },
  {
    icon: KeyRound,
    title: "Licencia perpetua",
    text: "Sin costos recurrentes de licencia. Nuestros clientes son dueños de la tecnología que implementan.",
  },
  {
    icon: Layers,
    title: "Arquitectura modular",
    text: "Cada componente opera de forma independiente y se integra mediante APIs. Escalable por diseño.",
  },
  {
    icon: MapPin,
    title: "Desarrollo local",
    text: "Ingeniería, soporte y evolución de producto desde Argentina. Cercanía real con cada proyecto.",
  },
];

export default function About() {
  const titleRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useStaggerReveal<HTMLDivElement>(120);

  return (
    <section id="nosotros" className="py-28 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            ¿Por qué TPD Smart Systems?
          </h2>
          <p className="mt-5 text-tpd-text-muted leading-relaxed">
            Diseñamos, desarrollamos e implementamos tecnología propia para
            infraestructura inteligente. Cada solución se adapta a la operación
            del cliente sin dependencias de terceros.
          </p>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((item) => (
            <div
              key={item.title}
              className="group p-6 rounded-xl bg-tpd-card border border-tpd-border hover:border-tpd-border-hover transition-all duration-300 hover:bg-tpd-card-hover"
            >
              <div className="w-11 h-11 rounded-lg bg-tpd-teal/8 flex items-center justify-center mb-5 group-hover:bg-tpd-teal/12 transition-colors duration-300">
                <item.icon
                  size={21}
                  className="text-tpd-teal-light"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-[0.95rem] font-semibold text-white leading-snug">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm text-tpd-text-muted leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
