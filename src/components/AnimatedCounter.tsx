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
          const duration = 1800;
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
      <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-tpd-teal-light to-tpd-blue-light bg-clip-text text-transparent">
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-tpd-text-muted">{label}</div>
    </div>
  );
}

const stats = [
  { end: 500, suffix: "+", label: "Dispositivos desplegados" },
  { end: 99.9, suffix: "%", label: "Uptime de plataforma" },
  { end: 24, suffix: "/7", label: "Monitoreo continuo" },
  { end: 10, suffix: "+", label: "Industrias alcanzadas" },
];

export default function AnimatedCounter() {
  return (
    <section className="py-16 px-6 border-y border-tpd-border bg-tpd-darker/50">
      <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s) => (
          <Counter key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}
