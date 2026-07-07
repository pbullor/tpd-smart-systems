"use client";

import {
  Smartphone,
  Cloud,
  Router,
  Cpu,
  Lock,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    icon: Smartphone,
    label: "Usuario",
    sublabel: "Aplicación móvil",
    color: "from-blue-500/20 to-blue-600/20",
    iconColor: "text-blue-400",
  },
  {
    icon: Cloud,
    label: "TPD Smart Platform",
    sublabel: "Cloud / On-premise",
    color: "from-tpd-teal/20 to-emerald-600/20",
    iconColor: "text-tpd-teal-light",
  },
  {
    icon: Router,
    label: "Gateway G1",
    sublabel: "Comunicación segura",
    color: "from-violet-500/20 to-purple-600/20",
    iconColor: "text-violet-400",
  },
  {
    icon: Cpu,
    label: "Controller C12",
    sublabel: "Control de hardware",
    color: "from-amber-500/20 to-orange-600/20",
    iconColor: "text-amber-400",
  },
  {
    icon: Lock,
    label: "Dispositivo",
    sublabel: "Locker / ESL / Acceso",
    color: "from-tpd-teal/20 to-tpd-blue/20",
    iconColor: "text-tpd-teal-light",
  },
];

function Connector({ horizontal, index }: { horizontal: boolean; index: number }) {
  return horizontal ? (
    <div className="relative flex items-center" style={{ width: 56 }}>
      <div className="absolute inset-y-1/2 left-0 right-0 border-t border-dashed border-tpd-border-hover" />
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-tpd-teal-light animate-ping-slow"
        style={{ animationDelay: `${index * 0.4}s` }}
      />
    </div>
  ) : (
    <div className="relative flex justify-center" style={{ height: 40 }}>
      <div className="absolute inset-x-1/2 top-0 bottom-0 border-l border-dashed border-tpd-border-hover" />
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-tpd-teal-light animate-ping-slow"
        style={{ animationDelay: `${index * 0.4}s` }}
      />
    </div>
  );
}

export default function Architecture() {
  const titleRef = useScrollReveal<HTMLDivElement>();
  const diagramRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = diagramRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="arquitectura" className="py-28 px-6 lg:px-8 bg-tpd-darker">
      <div className="max-w-5xl mx-auto">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs text-tpd-teal-light tracking-widest uppercase mb-4">
            Stack tecnológico
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Arquitectura del sistema
          </h2>
          <p className="mt-5 text-tpd-text-muted leading-relaxed">
            Flujo completo de comunicación desde el usuario hasta el dispositivo
            físico. Cada capa opera de forma independiente y se comunica
            mediante protocolos seguros.
          </p>
        </div>

        <div
          ref={diagramRef}
          className="rounded-xl border border-tpd-border bg-tpd-card p-8 sm:p-10"
        >
          {/* Desktop horizontal */}
          <div className="hidden lg:flex items-center justify-center">
            {steps.map((step, i) => (
              <div key={step.label} className="flex items-center">
                <div
                  className="flex flex-col items-center"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible
                      ? "translateY(0) scale(1)"
                      : "translateY(16px) scale(0.95)",
                    transition: `all 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 0.12}s`,
                  }}
                >
                  <div
                    className={`w-[72px] h-[72px] rounded-xl bg-gradient-to-br ${step.color} border border-tpd-border flex items-center justify-center`}
                  >
                    <step.icon
                      size={28}
                      className={step.iconColor}
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="mt-3 text-center">
                    <div className="text-xs font-semibold text-white leading-tight">
                      {step.label}
                    </div>
                    <div className="text-[10px] text-tpd-text-dim mt-0.5">
                      {step.sublabel}
                    </div>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="mb-8">
                    <Connector horizontal index={i} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile vertical */}
          <div className="lg:hidden flex flex-col items-center">
            {steps.map((step, i) => (
              <div key={step.label} className="flex flex-col items-center">
                <div
                  className="flex items-center gap-4 w-full max-w-[280px]"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateX(0)" : "translateX(-16px)",
                    transition: `all 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 0.12}s`,
                  }}
                >
                  <div
                    className={`w-14 h-14 shrink-0 rounded-xl bg-gradient-to-br ${step.color} border border-tpd-border flex items-center justify-center`}
                  >
                    <step.icon
                      size={24}
                      className={step.iconColor}
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      {step.label}
                    </div>
                    <div className="text-[11px] text-tpd-text-dim">
                      {step.sublabel}
                    </div>
                  </div>
                </div>
                {i < steps.length - 1 && <Connector horizontal={false} index={i} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
