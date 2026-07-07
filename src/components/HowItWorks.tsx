"use client";

import { Wifi, MonitorSmartphone, Zap } from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    icon: Wifi,
    number: "01",
    title: "Dispositivos conectados",
    text: "Lockers, etiquetas electrónicas, cerraduras y sensores se conectan a una red segura dentro de tu espacio físico.",
  },
  {
    icon: MonitorSmartphone,
    number: "02",
    title: "Control desde cualquier lugar",
    text: "Desde una plataforma web o una app móvil, tu equipo administra dispositivos, usuarios y permisos en tiempo real.",
  },
  {
    icon: Zap,
    number: "03",
    title: "Automatización inteligente",
    text: "El sistema toma decisiones en base a reglas: asigna lockers, actualiza precios, registra accesos y genera reportes automáticos.",
  },
];

export default function HowItWorks() {
  const titleRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useStaggerReveal<HTMLDivElement>(150);

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-6">
          <div className="inline-block mb-4 px-3 py-1 rounded-md bg-tpd-blue/10 text-tpd-blue-light text-xs font-medium tracking-wide uppercase border border-tpd-blue/20">
            Simple de entender
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            ¿Qué es infraestructura inteligente?
          </h2>
          <p className="mt-4 text-tpd-text-muted text-lg leading-relaxed">
            Es hacer que los objetos físicos de tu empresa — lockers, estantes,
            puertas, góndolas — se conecten a internet para que puedas
            controlarlos, monitorearlos y automatizarlos desde una pantalla.
          </p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-3 gap-6 mt-16">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative p-6 rounded-xl bg-tpd-card border border-tpd-border hover:border-tpd-teal/30 transition-all duration-300"
            >
              <span className="absolute -top-4 left-6 text-5xl font-bold text-tpd-teal/10 group-hover:text-tpd-teal/20 transition-colors">
                {step.number}
              </span>
              <div className="relative pt-4">
                <div className="w-12 h-12 rounded-lg bg-tpd-teal/10 flex items-center justify-center mb-4 group-hover:bg-tpd-teal/20 transition-colors">
                  <step.icon size={24} className="text-tpd-teal-light" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-tpd-text-muted leading-relaxed">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
