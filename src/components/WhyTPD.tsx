"use client";

import {
  MapPin,
  Settings,
  HardDrive,
  MonitorSmartphone,
  Plug,
  Headphones,
  TrendingUp,
} from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

const reasons = [
  { icon: MapPin, text: "Desarrollo local" },
  { icon: Settings, text: "Soluciones adaptables" },
  { icon: HardDrive, text: "Hardware industrial" },
  { icon: MonitorSmartphone, text: "Plataforma propia" },
  { icon: Plug, text: "Integración vía API" },
  { icon: Headphones, text: "Soporte cercano" },
  { icon: TrendingUp, text: "Escalabilidad" },
];

export default function WhyTPD() {
  const titleRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useStaggerReveal<HTMLDivElement>(80);

  return (
    <section id="por-que-tpd" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Por qué TPD
          </h2>
          <p className="mt-4 text-tpd-text-muted">
            Combinamos tecnología, cercanía y visión de producto para ofrecer
            soluciones que realmente se adaptan a tu operación.
          </p>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {reasons.map((r) => (
            <div
              key={r.text}
              className="group flex items-center gap-4 p-4 rounded-xl bg-tpd-card border border-tpd-border hover:border-tpd-teal/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(13,148,136,0.06)] hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 shrink-0 rounded-lg bg-tpd-teal/10 flex items-center justify-center group-hover:bg-tpd-teal/20 transition-colors duration-300">
                <r.icon size={20} className="text-tpd-teal-light" />
              </div>
              <span className="text-white font-medium">{r.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
