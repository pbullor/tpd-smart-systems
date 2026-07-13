"use client";

import {
  Lock,
  Tag,
  ShieldCheck,
  LayoutDashboard,
  ArrowRight,
} from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

const solutions = [
  {
    icon: Lock,
    name: "TPD Smart Lockers",
    tagline: "Gestión inteligente de espacios de guarda",
    description:
      "Lockers con apertura QR, gestión de usuarios, auditoría completa y control remoto. Hardware industrial con licencia perpetua.",
    benefits: [
      "Apertura sin contacto vía QR",
      "Auditoría y trazabilidad",
      "Control remoto en tiempo real",
      "API para integraciones",
    ],
    href: "https://lockers.tpdsmart.com",
    cta: "Ver producto",
    external: true,
  },
  {
    icon: Tag,
    name: "TPD Smart ESL",
    tagline: "Etiquetas electrónicas para retail",
    description:
      "Precios dinámicos, actualización centralizada y gestión de góndola desde una única plataforma. Sin intervención manual en sucursal.",
    benefits: [
      "Actualización masiva de precios",
      "Gestión multi-sucursal",
      "Tecnología e-ink",
      "Integración con ERP",
    ],
    href: "#contacto",
    cta: "Más información",
    external: false,
  },
  {
    icon: ShieldCheck,
    name: "TPD Smart Access",
    tagline: "Control de accesos y trazabilidad",
    description:
      "Gestión de identidades, permisos granulares y registro completo de ingresos. Control centralizado de múltiples puntos de acceso.",
    benefits: [
      "Permisos por rol y horario",
      "Registro de cada acceso",
      "Gestión de identidades",
      "Multi-punto centralizado",
    ],
    href: "#contacto",
    cta: "Más información",
    external: false,
  },
  {
    icon: LayoutDashboard,
    name: "TPD Smart Platform",
    tagline: "Plataforma central de administración",
    description:
      "El sistema operativo de tu infraestructura inteligente. Administra dispositivos, usuarios, eventos e integraciones desde un solo lugar.",
    benefits: [
      "Dashboard en tiempo real",
      "API REST documentada",
      "Multi-tenant",
      "Reportes y auditoría",
    ],
    href: "#contacto",
    cta: "Más información",
    external: false,
  },
];

export default function Solutions() {
  const titleRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useStaggerReveal<HTMLDivElement>(140);

  return (
    <section id="soluciones" className="py-28 px-6 lg:px-8 bg-tpd-darker">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs text-tpd-teal-light tracking-widest uppercase mb-4">
            Portfolio de soluciones
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Soluciones de infraestructura inteligente
          </h2>
          <p className="mt-5 text-tpd-text-muted leading-relaxed">
            Cuatro líneas de producto diseñadas para operar de forma
            independiente o integrada bajo una misma plataforma tecnológica.
          </p>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 gap-5">
          {solutions.map((sol) => (
            <div
              key={sol.name}
              className="group p-7 rounded-xl bg-tpd-card border border-tpd-border hover:border-tpd-border-hover transition-all duration-300 hover:bg-tpd-card-hover"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="w-11 h-11 shrink-0 rounded-lg bg-tpd-teal/8 flex items-center justify-center group-hover:bg-tpd-teal/12 transition-colors duration-300">
                  <sol.icon
                    size={21}
                    className="text-tpd-teal-light"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">
                    {sol.name}
                  </h3>
                  <p className="text-xs text-tpd-text-dim mt-0.5">
                    {sol.tagline}
                  </p>
                </div>
              </div>

              <p className="text-sm text-tpd-text-muted leading-relaxed mb-5">
                {sol.description}
              </p>

              <ul className="space-y-2 mb-6">
                {sol.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-sm">
                    <span className="w-1 h-1 rounded-full bg-tpd-teal-light shrink-0" />
                    <span className="text-tpd-text">{b}</span>
                  </li>
                ))}
              </ul>

              <a
                href={sol.href}
                {...(sol.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="inline-flex items-center gap-1.5 text-xs text-tpd-teal-light hover:text-white transition-colors duration-200 font-medium tracking-wide uppercase"
              >
                {sol.cta}
                <ArrowRight
                  size={13}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
