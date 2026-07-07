export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-tpd-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-tpd-teal to-tpd-blue flex items-center justify-center text-white font-bold text-sm">
            T
          </div>
          <div>
            <div className="text-sm font-semibold text-white">
              TPD Smart Systems
            </div>
            <div className="text-xs text-tpd-text-muted">
              Industrial IoT Solutions
            </div>
          </div>
        </div>
        <div className="text-sm text-tpd-text-muted">
          contacto@tpdsmart.com
        </div>
      </div>
    </footer>
  );
}
