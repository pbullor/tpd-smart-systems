"use client";

import {
  LayoutDashboard,
  Users,
  Lock,
  Plug,
  ShieldCheck,
  ClipboardList,
  BarChart3,
  Settings,
} from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

const modules = [
  { icon: LayoutDashboard, label: "Dashboard", desc: "Vista general en tiempo real" },
  { icon: Users, label: "Usuarios", desc: "Roles, permisos y grupos" },
  { icon: Lock, label: "Dispositivos", desc: "Lockers, ESL, accesos" },
  { icon: Plug, label: "API REST", desc: "Documentada y versionada" },
  { icon: ShieldCheck, label: "Permisos", desc: "Granulares por recurso" },
  { icon: ClipboardList, label: "Auditoría", desc: "Registro de cada evento" },
  { icon: BarChart3, label: "Reportes", desc: "Exportables y programables" },
  { icon: Settings, label: "Configuración", desc: "Multi-tenant y escalable" },
];

export default function Platform() {
  const titleRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useStaggerReveal<HTMLDivElement>(80);

  return (
    <section id="plataforma" className="py-28 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs text-tpd-teal-light tracking-widest uppercase mb-4">
            Plataforma central
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            TPD Smart Platform
          </h2>
          <p className="mt-5 text-tpd-text-muted leading-relaxed">
            El sistema operativo de tu infraestructura inteligente.
            Administración centralizada de dispositivos, usuarios, eventos e
            integraciones desde una única interfaz.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto mb-14">
          <div className="rounded-xl border border-tpd-border bg-tpd-card overflow-hidden">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-tpd-border bg-tpd-darker/50">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-0.5 rounded bg-tpd-darker/80 text-[10px] text-tpd-text-dim font-mono">
                  platform.tpdsmart.com
                </div>
              </div>
            </div>

            {/* Platform UI mockup */}
            <div className="flex min-h-[320px]">
              {/* Sidebar */}
              <div className="hidden sm:block w-48 border-r border-tpd-border bg-tpd-darker/30 p-4">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-6 h-6 rounded bg-gradient-to-br from-tpd-teal to-tpd-blue flex items-center justify-center text-white text-[9px] font-bold">
                    T
                  </div>
                  <span className="text-xs font-semibold text-white">
                    TPD Platform
                  </span>
                </div>
                {["Dashboard", "Dispositivos", "Usuarios", "Permisos", "Auditoría", "Reportes", "API", "Config"].map(
                  (item, i) => (
                    <div
                      key={item}
                      className={`px-3 py-2 rounded-md text-xs mb-0.5 ${
                        i === 0
                          ? "bg-tpd-teal/10 text-tpd-teal-light font-medium"
                          : "text-tpd-text-dim hover:text-tpd-text-muted"
                      }`}
                    >
                      {item}
                    </div>
                  )
                )}
              </div>

              {/* Main content */}
              <div className="flex-1 p-5">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <div className="text-sm font-semibold text-white">
                      Dashboard
                    </div>
                    <div className="text-[10px] text-tpd-text-dim mt-0.5">
                      Vista general del sistema
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-md bg-tpd-teal/10 text-[10px] text-tpd-teal-light font-medium">
                    En línea
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
                  {[
                    { label: "Dispositivos", value: "148", status: "activos" },
                    { label: "Usuarios", value: "1,240", status: "registrados" },
                    { label: "Eventos hoy", value: "3,891", status: "procesados" },
                    { label: "Uptime", value: "99.9%", status: "último mes" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="p-3 rounded-lg bg-tpd-darker/50 border border-tpd-border/60"
                    >
                      <div className="text-[10px] text-tpd-text-dim">
                        {s.label}
                      </div>
                      <div className="text-lg font-bold text-white mt-0.5">
                        {s.value}
                      </div>
                      <div className="text-[9px] text-tpd-teal-light">
                        {s.status}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Activity */}
                <div className="rounded-lg bg-tpd-darker/50 border border-tpd-border/60 p-3">
                  <div className="text-[10px] text-tpd-text-dim mb-2 uppercase tracking-wider">
                    Actividad reciente
                  </div>
                  {[
                    "Locker A-12 abierto por usuario #1847",
                    "Permiso actualizado: Grupo Operaciones",
                    "ESL Sucursal Norte: 240 precios actualizados",
                    "Acceso registrado: Puerta 3 — Edificio Central",
                  ].map((log, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 py-1.5 text-[11px] text-tpd-text-muted border-t border-tpd-border/30 first:border-0"
                    >
                      <span className="w-1 h-1 rounded-full bg-tpd-teal-light/60 shrink-0" />
                      {log}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {modules.map((m) => (
            <div
              key={m.label}
              className="group flex flex-col items-center text-center p-5 rounded-xl bg-tpd-card border border-tpd-border hover:border-tpd-border-hover transition-all duration-300 hover:bg-tpd-card-hover"
            >
              <div className="w-10 h-10 rounded-lg bg-tpd-teal/8 flex items-center justify-center mb-3 group-hover:bg-tpd-teal/12 transition-colors duration-300">
                <m.icon
                  size={19}
                  className="text-tpd-teal-light"
                  strokeWidth={1.5}
                />
              </div>
              <div className="text-sm font-medium text-white">{m.label}</div>
              <div className="text-[11px] text-tpd-text-dim mt-1">
                {m.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
