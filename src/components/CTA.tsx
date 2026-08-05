"use client";

import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function CTA() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="contacto" className="py-28 px-6 lg:px-8">
      <div ref={ref} className="max-w-3xl mx-auto text-center">
        <div className="relative p-14 rounded-2xl overflow-hidden border border-tpd-border bg-tpd-card">
          <div className="absolute inset-0 bg-gradient-to-br from-tpd-teal/[0.04] to-tpd-blue/[0.04]" />
          <div className="absolute -top-32 -right-32 w-72 h-72 bg-tpd-teal/[0.03] rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-tpd-blue/[0.03] rounded-full blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Conectemos tu infraestructura física
            </h2>
            <p className="mt-5 text-tpd-text-muted max-w-lg mx-auto leading-relaxed">
              Agendá una reunión técnica con nuestro equipo para evaluar cómo
              TPD Smart Systems puede integrarse a tu operación.
            </p>
            <a
              href="mailto:hola@tpdsmart.com"
              className="group inline-flex items-center gap-2 mt-8 px-7 py-3 rounded-lg bg-tpd-teal hover:bg-tpd-teal-light text-white text-sm font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(13,148,136,0.25)]"
            >
              Contactar a TPD Smart Systems
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
