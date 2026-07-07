"use client";

import { ArrowRight, MessageSquare } from "lucide-react";
import NetworkBackground from "./NetworkBackground";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      requestAnimationFrame(() => setVisible(true));
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-tpd-teal/[0.03] via-transparent to-tpd-dark" />
      <NetworkBackground />

      <div
        className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "all 1s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div
          className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-tpd-border text-xs text-tpd-text-muted tracking-widest uppercase"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-tpd-teal-light animate-pulse" />
          Industrial IoT Solutions
        </div>

        <h1
          className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.15] tracking-tight"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s",
          }}
        >
          Tecnología propia para
          <br />
          <span className="bg-gradient-to-r from-tpd-teal-light to-tpd-blue-light bg-clip-text text-transparent">
            infraestructura inteligente
          </span>
        </h1>

        <p
          className="mt-7 text-base sm:text-lg text-tpd-text-muted max-w-2xl mx-auto leading-relaxed"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 0.5s",
          }}
        >
          TPD Smart Systems desarrolla soluciones de Industrial IoT para
          conectar hardware, software e infraestructura mediante una plataforma
          tecnológica propia, escalable y preparada para evolucionar junto a
          nuestros clientes.
        </p>

        <div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 0.7s",
          }}
        >
          <a
            href="#soluciones"
            className="group inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-tpd-teal hover:bg-tpd-teal-light text-white text-sm font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(13,148,136,0.25)]"
          >
            Ver soluciones
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg border border-tpd-border text-sm text-tpd-text hover:bg-white/[0.03] hover:border-tpd-border-hover transition-all duration-300"
          >
            <MessageSquare size={16} />
            Contactar
          </a>
        </div>

        <div
          className="mt-24"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 1.5s ease 1.4s",
          }}
        >
          <div className="animate-bounce">
            <div className="w-5 h-9 rounded-full border border-tpd-text-dim/40 flex justify-center pt-2">
              <div className="w-0.5 h-1.5 rounded-full bg-tpd-teal-light/70" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
