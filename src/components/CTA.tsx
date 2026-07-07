"use client";

import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function CTA() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="contacto" className="py-24 px-6 bg-tpd-darker">
      <div ref={ref} className="max-w-3xl mx-auto text-center">
        <div className="relative p-12 rounded-2xl overflow-hidden border border-tpd-border">
          <div className="absolute inset-0 bg-gradient-to-br from-tpd-teal/10 to-tpd-blue/10" />
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-tpd-teal/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-tpd-blue/5 rounded-full blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Conectemos tu infraestructura física
            </h2>
            <p className="mt-4 text-tpd-text-muted max-w-xl mx-auto">
              Hablemos sobre cómo TPD Smart Systems puede transformar tus
              espacios en infraestructura inteligente.
            </p>
            <a
              href="mailto:contacto@tpdsmart.com"
              className="group inline-flex items-center gap-2 mt-8 px-8 py-3.5 rounded-lg bg-tpd-teal hover:bg-tpd-teal-light text-white font-medium transition-all hover:shadow-[0_0_40px_rgba(13,148,136,0.3)] hover:scale-105"
            >
              Contactar a TPD Smart Systems
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
