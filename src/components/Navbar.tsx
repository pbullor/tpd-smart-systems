"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Casos de uso", href: "#casos-de-uso" },
  { label: "Arquitectura", href: "#arquitectura" },
  { label: "Por qué TPD", href: "#por-que-tpd" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-tpd-darker/80 backdrop-blur-md border-b border-tpd-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-tpd-teal to-tpd-blue flex items-center justify-center text-white font-bold text-sm">
            T
          </div>
          <span className="text-lg font-semibold text-white">
            TPD <span className="text-tpd-teal-light">Smart Systems</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-tpd-text-muted hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="text-sm px-5 py-2 rounded-lg bg-tpd-teal hover:bg-tpd-teal-light text-white transition-colors font-medium"
          >
            Contactar
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-tpd-darker border-t border-tpd-border px-6 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-sm text-tpd-text-muted hover:text-white transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="block mt-2 text-center text-sm px-5 py-2 rounded-lg bg-tpd-teal hover:bg-tpd-teal-light text-white transition-colors font-medium"
            onClick={() => setOpen(false)}
          >
            Contactar
          </a>
        </div>
      )}
    </nav>
  );
}
