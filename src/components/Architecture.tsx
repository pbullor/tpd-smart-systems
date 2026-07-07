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
  { icon: Smartphone, label: "Usuario / App", color: "from-blue-500 to-blue-600" },
  { icon: Cloud, label: "TPD Smart Platform", color: "from-tpd-teal to-emerald-600" },
  { icon: Router, label: "Gateway", color: "from-violet-500 to-purple-600" },
  { icon: Cpu, label: "Controller", color: "from-amber-500 to-orange-600" },
  { icon: Lock, label: "Locker", color: "from-tpd-teal to-tpd-blue" },
];

function AnimatedConnector({ horizontal }: { horizontal: boolean }) {
  return horizontal ? (
    <div className="relative w-12 flex items-center mb-6">
      <div className="w-full h-px bg-tpd-border" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-tpd-teal-light animate-ping-slow" />
      </div>
    </div>
  ) : (
    <div className="relative h-8 flex justify-center">
      <div className="h-full w-px bg-tpd-border" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-tpd-teal-light animate-ping-slow" />
      </div>
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
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="arquitectura" className="py-24 px-6 bg-tpd-darker">
      <div className="max-w-5xl mx-auto">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Arquitectura
          </h2>
          <p className="mt-4 text-tpd-text-muted">
            Flujo completo desde el usuario hasta el dispositivo físico.
          </p>
        </div>

        <div ref={diagramRef}>
          {/* Desktop horizontal */}
          <div className="hidden md:flex items-center justify-center gap-0">
            {steps.map((step, i) => (
              <div key={step.label} className="flex items-center">
                <div
                  className="flex flex-col items-center gap-3"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.9)",
                    transition: `all 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 0.15}s`,
                  }}
                >
                  <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${step.color} p-px`}>
                    <div className="w-full h-full rounded-xl bg-tpd-card flex items-center justify-center hover:bg-tpd-card/50 transition-colors">
                      <step.icon size={32} className="text-white/80" />
                    </div>
                  </div>
                  <span className="text-xs text-tpd-text-muted text-center max-w-[100px] font-medium">
                    {step.label}
                  </span>
                </div>
                {i < steps.length - 1 && <AnimatedConnector horizontal />}
              </div>
            ))}
          </div>

          {/* Mobile vertical */}
          <div className="md:hidden flex flex-col items-center gap-0">
            {steps.map((step, i) => (
              <div key={step.label} className="flex flex-col items-center">
                <div
                  className="flex items-center gap-4"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateX(0)" : "translateX(-20px)",
                    transition: `all 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 0.15}s`,
                  }}
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} p-px`}>
                    <div className="w-full h-full rounded-xl bg-tpd-card flex items-center justify-center">
                      <step.icon size={28} className="text-white/80" />
                    </div>
                  </div>
                  <span className="text-sm text-tpd-text-muted w-40 font-medium">
                    {step.label}
                  </span>
                </div>
                {i < steps.length - 1 && <AnimatedConnector horizontal={false} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
