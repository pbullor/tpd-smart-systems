"use client";

import { Lock, Tag, ShieldCheck, LayoutDashboard } from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

const solutions = [
  {
    icon: Lock,
    name: "TPD Smart Lockers",
    description:
      "Lockers inteligentes con apertura QR, auditoría completa, gestión de usuarios y control remoto.",
    features: ["Apertura QR", "Auditoría", "Control remoto"],
    gradient: "from-tpd-teal to-emerald-600",
  },
  {
    icon: Tag,
    name: "TPD Smart ESL",
    description:
      "Etiquetas electrónicas para retail, precios dinámicos y gestión centralizada de góndola.",
    features: ["Precios dinámicos", "E-ink", "Gestión central"],
    gradient: "from-tpd-blue to-cyan-600",
  },
  {
    icon: ShieldCheck,
    name: "TPD Smart Access",
    description:
      "Control de accesos con permisos granulares, trazabilidad completa y gestión de identidades.",
    features: ["Permisos", "Trazabilidad", "Identidades"],
    gradient: "from-violet-600 to-purple-600",
  },
  {
    icon: LayoutDashboard,
    name: "TPD Smart Platform",
    description:
      "Plataforma central para administrar dispositivos, usuarios, eventos e integraciones vía API.",
    features: ["Dashboard", "API REST", "Integraciones"],
    gradient: "from-amber-500 to-orange-600",
  },
];

export default function Solutions() {
  const titleRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useStaggerReveal<HTMLDivElement>(140);

  return (
    <section id="soluciones" className="py-24 px-6 bg-tpd-darker">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Soluciones
          </h2>
          <p className="mt-4 text-tpd-text-muted">
            Productos diseñados para industria, retail, logística y espacios
            corporativos.
          </p>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((sol) => (
            <div
              key={sol.name}
              className="group relative p-6 rounded-xl bg-tpd-card border border-tpd-border hover:border-tpd-teal/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(13,148,136,0.1)] overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${sol.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
              <div className="relative">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${sol.gradient} bg-opacity-20 flex items-center justify-center mb-5 opacity-80 group-hover:opacity-100 transition-all group-hover:scale-110 duration-300`}>
                  <sol.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {sol.name}
                </h3>
                <p className="mt-2 text-sm text-tpd-text-muted leading-relaxed">
                  {sol.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {sol.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-tpd-text-muted border border-tpd-border"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
