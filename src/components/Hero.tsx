"use client";

import { ArrowRight, MessageSquare } from "lucide-react";
import NetworkBackground from "./NetworkBackground";
import { useEffect, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-tpd-teal/5 via-transparent to-tpd-dark" />
      <NetworkBackground />

      <div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "all 1s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div
          className="inline-block mb-6 px-4 py-1.5 rounded-full border border-tpd-teal/30 text-xs text-tpd-teal-light tracking-wide uppercase bg-tpd-teal/5 backdrop-blur-sm"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s",
          }}
        >
          <span className="inline-block w-2 h-2 rounded-full bg-tpd-teal-light mr-2 animate-pulse" />
          Industrial IoT &amp; Smart Infrastructure
        </div>

        <h1
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s",
          }}
        >
          Smart Infrastructure
          <br />
          <span className="bg-gradient-to-r from-tpd-teal-light to-tpd-blue-light bg-clip-text text-transparent">
            &amp; Industrial IoT Solutions
          </span>
        </h1>

        <p
          className="mt-6 text-lg sm:text-xl text-tpd-text-muted max-w-2xl mx-auto leading-relaxed"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 0.5s",
          }}
        >
          TPD Smart Systems desarrolla soluciones tecnológicas para conectar,
          automatizar y administrar espacios físicos inteligentes.
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
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-tpd-teal hover:bg-tpd-teal-light text-white font-medium transition-all hover:shadow-[0_0_30px_rgba(13,148,136,0.3)] hover:scale-105"
          >
            Ver soluciones
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#contacto"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-tpd-border text-tpd-text hover:bg-white/5 hover:border-tpd-teal/40 transition-all"
          >
            <MessageSquare size={18} />
            Contactar
          </a>
        </div>

        <div
          className="mt-20 flex justify-center"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 1.5s ease 1.2s",
          }}
        >
          <div className="animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-tpd-text-muted/30 flex justify-center pt-2">
              <div className="w-1 h-2 rounded-full bg-tpd-teal-light" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
