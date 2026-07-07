"use client";

import {
  Building,
  ShoppingCart,
  GraduationCap,
  Stethoscope,
  Truck,
  Briefcase,
} from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

const cases = [
  {
    icon: Building,
    industry: "Oficinas corporativas",
    problem: "Los empleados pierden tiempo buscando lockers disponibles, y nadie sabe quién tiene qué.",
    solution: "Con TPD Smart Lockers, cada empleado reserva un locker desde su celular, lo abre con QR, y el sistema lleva el control automático.",
  },
  {
    icon: ShoppingCart,
    industry: "Retail",
    problem: "Cambiar precios en góndola es lento, con errores, y requiere personal recorriendo todo el local.",
    solution: "Con TPD Smart ESL, los precios se actualizan en segundos desde una sola pantalla, en todas las sucursales a la vez.",
  },
  {
    icon: GraduationCap,
    industry: "Universidades",
    problem: "Los casilleros se asignan una vez al año y no se sabe si se usan o están abandonados.",
    solution: "Smart Lockers permite rotación automática, asignación temporal por cuatrimestre y auditoría de uso real.",
  },
  {
    icon: Stethoscope,
    industry: "Hospitales y clínicas",
    problem: "Insumos y pertenencias de pacientes se guardan sin trazabilidad ni seguridad.",
    solution: "Lockers con control de acceso por rol, registro de cada apertura y permisos diferenciados por área.",
  },
  {
    icon: Truck,
    industry: "Logística y delivery",
    problem: "Las entregas de última milla fallan cuando el destinatario no está presente.",
    solution: "Lockers de punto de entrega: el repartidor deja el paquete, el cliente lo retira con QR cuando quiera.",
  },
  {
    icon: Briefcase,
    industry: "Coworkings y edificios",
    problem: "El control de acceso es manual, con llaves que se pierden y sin registro de quién entra o sale.",
    solution: "TPD Smart Access gestiona permisos digitales, registra cada ingreso y permite acceso remoto temporal.",
  },
];

export default function UseCases() {
  const titleRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useStaggerReveal<HTMLDivElement>(100);

  return (
    <section id="casos-de-uso" className="py-24 px-6 bg-tpd-darker">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Casos de uso reales
          </h2>
          <p className="mt-4 text-tpd-text-muted text-lg">
            Problemas concretos que resolvemos en cada industria.
          </p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div
              key={c.industry}
              className="group p-6 rounded-xl bg-tpd-card border border-tpd-border hover:border-tpd-teal/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(13,148,136,0.08)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-tpd-teal/10 flex items-center justify-center group-hover:bg-tpd-teal/20 transition-colors">
                  <c.icon size={20} className="text-tpd-teal-light" />
                </div>
                <h3 className="font-semibold text-white">{c.industry}</h3>
              </div>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-red-400/60" />
                  <p className="text-sm text-tpd-text-muted leading-relaxed">
                    {c.problem}
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-tpd-teal-light" />
                  <p className="text-sm text-tpd-text leading-relaxed">
                    {c.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
