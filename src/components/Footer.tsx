import { ExternalLink, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-tpd-border/60 bg-tpd-darker">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-14">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-tpd-teal to-tpd-blue flex items-center justify-center text-white font-bold text-sm">
                T
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-base font-bold text-white tracking-tight">
                  TPD
                </span>
                <span className="text-xs font-medium text-tpd-text-muted tracking-wide">
                  Smart Systems
                </span>
              </div>
            </div>
            <p className="text-sm text-tpd-text-muted leading-relaxed">
              Tecnología propia para infraestructura inteligente.
            </p>
            <p className="text-xs text-tpd-text-dim mt-1">
              Industrial IoT Solutions
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div>
              <div className="text-xs text-tpd-text-dim tracking-widest uppercase mb-4">
                Soluciones
              </div>
              <ul className="space-y-2.5">
                {[
                  "Smart Lockers",
                  "Smart ESL",
                  "Smart Access",
                  "Smart Platform",
                ].map((s) => (
                  <li key={s}>
                    <a
                      href="#soluciones"
                      className="text-sm text-tpd-text-muted hover:text-white transition-colors duration-200"
                    >
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-xs text-tpd-text-dim tracking-widest uppercase mb-4">
                Contacto
              </div>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="mailto:contacto@tpdsmart.com"
                    className="flex items-center gap-2 text-sm text-tpd-text-muted hover:text-white transition-colors duration-200"
                  >
                    <Mail size={14} strokeWidth={1.5} />
                    contacto@tpdsmart.com
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm text-tpd-text-muted hover:text-white transition-colors duration-200"
                  >
                    <ExternalLink size={14} strokeWidth={1.5} />
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-tpd-border/40 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-tpd-text-dim">
            &copy; {new Date().getFullYear()} TPD Smart Systems. Todos los
            derechos reservados.
          </p>
          <p className="text-xs text-tpd-text-dim">
            Buenos Aires, Argentina
          </p>
        </div>
      </div>
    </footer>
  );
}
