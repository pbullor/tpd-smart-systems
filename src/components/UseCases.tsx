"use client";

import { Building, Factory, ShoppingCart, Truck } from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

const cases = [
  {
    icon: Building,
    industry: "Corporate Offices",
    title: "Espacios de trabajo inteligentes",
    text: "Lockers con asignación dinámica, control de acceso por credencial y gestión centralizada de permisos para edificios corporativos y coworkings.",
  },
  {
    icon: Factory,
    industry: "Industria",
    title: "Operaciones con trazabilidad completa",
    text: "Guarda segura de herramientas e insumos, control de acceso a áreas restringidas y registro auditable de cada operación en planta.",
  },
  {
    icon: ShoppingCart,
    industry: "Retail",
    title: "Gestión de precios y góndola",
    text: "Etiquetas electrónicas para actualización masiva de precios, reducción de errores en sucursal y gestión centralizada multi-tienda.",
  },
  {
    icon: Truck,
    industry: "Logística",
    title: "Última milla y puntos de entrega",
    text: "Lockers como puntos de retiro y entrega autónoma. El destinatario recibe un código QR y retira cuando lo necesite, sin coordinación.",
  },
];

export default function UseCases() {
  const titleRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useStaggerReveal<HTMLDivElement>(120);

  return (
    <section id="casos-de-uso" className="py-28 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs text-tpd-teal-light tracking-widest uppercase mb-4">
            Aplicaciones
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Casos de uso
          </h2>
          <p className="mt-5 text-tpd-text-muted leading-relaxed">
            Nuestra tecnología opera en múltiples verticales, adaptándose a los
            requerimientos específicos de cada industria.
          </p>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {cases.map((c) => (
            <div
              key={c.industry}
              className="group p-7 rounded-xl bg-tpd-card border border-tpd-border hover:border-tpd-border-hover transition-all duration-300 hover:bg-tpd-card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-tpd-teal/8 flex items-center justify-center group-hover:bg-tpd-teal/12 transition-colors duration-300">
                  <c.icon
                    size={19}
                    className="text-tpd-teal-light"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <p className="text-[10px] text-tpd-text-dim tracking-widest uppercase">
                    {c.industry}
                  </p>
                  <h3 className="text-sm font-semibold text-white mt-0.5">
                    {c.title}
                  </h3>
                </div>
              </div>
              <p className="text-sm text-tpd-text-muted leading-relaxed">
                {c.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
