"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Plataforma", href: "#plataforma" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Smart Lockers", href: "https://lockers.tpdsmart.com", external: true },
  { label: "Casos de uso", href: "#casos-de-uso" },
  { label: "Arquitectura", href: "#arquitectura" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-tpd-darker/90 backdrop-blur-xl border-b border-tpd-border/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <Image src="/logo-isotipo.svg" alt="" width={32} height={32} className="w-8 h-8" />
          <div className="flex items-baseline gap-1.5">
            <span className="text-[1.1rem] font-bold text-white tracking-tight">
              TPD
            </span>
            <span className="text-[0.8rem] font-medium text-tpd-text-muted tracking-wide">
              Smart Systems
            </span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={`text-[0.82rem] transition-colors duration-200 ${
                link.external
                  ? "text-tpd-teal-light hover:text-white inline-flex items-center gap-1"
                  : "text-tpd-text-muted hover:text-white"
              }`}
            >
              {link.label}
              {link.external && <ArrowUpRight size={12} />}
            </a>
          ))}
          <a
            href="#contacto"
            className="text-[0.82rem] px-5 py-2 rounded-lg bg-tpd-teal/90 hover:bg-tpd-teal text-white transition-all duration-200 font-medium"
          >
            Contactar
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-tpd-darker/95 backdrop-blur-xl border-t border-tpd-border/60 px-6 pb-5 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={`block py-3 text-sm transition-colors ${
                link.external
                  ? "text-tpd-teal-light hover:text-white inline-flex items-center gap-1"
                  : "text-tpd-text-muted hover:text-white"
              }`}
              onClick={() => setOpen(false)}
            >
              {link.label}
              {link.external && <ArrowUpRight size={12} />}
            </a>
          ))}
          <a
            href="#contacto"
            className="block mt-3 text-center text-sm px-5 py-2.5 rounded-lg bg-tpd-teal/90 hover:bg-tpd-teal text-white transition-colors font-medium"
            onClick={() => setOpen(false)}
          >
            Contactar
          </a>
        </div>
      )}
    </nav>
  );
}
