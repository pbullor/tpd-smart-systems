"use client";

import { useEffect, useRef, useState } from "react";

interface CounterProps {
  end: number;
  suffix?: string;
  label: string;
}

function Counter({ end, suffix = "", label }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const start = performance.now();

          function step(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
        {count}
        <span className="text-tpd-teal-light">{suffix}</span>
      </div>
      <div className="mt-1.5 text-xs text-tpd-text-muted tracking-wide uppercase">
        {label}
      </div>
    </div>
  );
}

const stats = [
  { end: 500, suffix: "+", label: "Dispositivos desplegados" },
  { end: 99, suffix: ".9%", label: "Disponibilidad" },
  { end: 24, suffix: "/7", label: "Monitoreo continuo" },
  { end: 4, suffix: "", label: "Líneas de producto" },
];

export default function AnimatedCounter() {
  return (
    <section className="py-16 px-6 border-y border-tpd-border/60 bg-tpd-darker/80">
      <div className="max-w-4xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((s) => (
          <Counter key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}
