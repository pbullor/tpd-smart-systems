"use client";

import {
  QrCode,
  Users,
  ClipboardList,
  HardDrive,
  KeyRound,
  Plug,
  Layers,
} from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

const features = [
  {
    icon: QrCode,
    title: "Apertura mediante QR",
    text: "Apertura segura desde app móvil, sin contacto físico ni llaves.",
  },
  {
    icon: Users,
    title: "Gestión de usuarios y permisos",
    text: "Asignación de lockers, roles y permisos granulares por usuario.",
  },
  {
    icon: ClipboardList,
    title: "Auditoría completa",
    text: "Registro detallado de cada apertura, cierre y evento del sistema.",
  },
  {
    icon: HardDrive,
    title: "Hardware industrial",
    text: "Controladores y cerraduras de grado industrial, diseñados para uso intensivo.",
  },
  {
    icon: KeyRound,
    title: "Licencia perpetua",
    text: "Sin pagos recurrentes por licencia de software. El sistema es tuyo.",
  },
  {
    icon: Plug,
    title: "API para integraciones",
    text: "Conectá con tus sistemas existentes: ERP, HR, control de acceso y más.",
  },
  {
    icon: Layers,
    title: "Implementación por etapas",
    text: "Arrancar con un módulo y escalar progresivamente según la necesidad.",
  },
];

export default function SmartLockersDetail() {
  const titleRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useStaggerReveal<HTMLDivElement>(90);

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tpd-teal/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-tpd-blue/3 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-md bg-tpd-teal/10 text-tpd-teal-light text-xs font-medium tracking-wide uppercase border border-tpd-teal/20">
            Producto destacado
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            TPD Smart Lockers
          </h2>
          <p className="mt-4 text-tpd-text-muted">
            Solución integral de lockers inteligentes para oficinas,
            universidades, hospitales, retail y logística.
          </p>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feat) => (
            <div
              key={feat.title}
              className="group flex gap-4 p-5 rounded-xl bg-tpd-card border border-tpd-border hover:border-tpd-teal/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(13,148,136,0.06)] hover:bg-tpd-card/80"
            >
              <div className="shrink-0 w-10 h-10 rounded-lg bg-tpd-teal/10 flex items-center justify-center group-hover:bg-tpd-teal/20 transition-colors duration-300">
                <feat.icon size={20} className="text-tpd-teal-light" />
              </div>
              <div>
                <h3 className="font-semibold text-white">{feat.title}</h3>
                <p className="mt-1 text-sm text-tpd-text-muted leading-relaxed">
                  {feat.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
