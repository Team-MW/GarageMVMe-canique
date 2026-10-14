import Link from "next/link";
import { site } from "@/lib/site";

export default function Navbar() {
  return (
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 100,
      backgroundColor: "rgba(9, 10, 12, 0.92)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--color-border)",
    }}>
      <div className="container" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "76px",
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
          <div style={{
            width: "44px",
            height: "44px",
            background: "linear-gradient(135deg, var(--color-red) 0%, #8a0c14 100%)",
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 900,
            fontFamily: "var(--font-display)",
            fontSize: "1.25rem",
            color: "#fff",
            fontStyle: "italic",
            boxShadow: "0 0 16px rgba(225, 29, 42, 0.4)",
            transform: "skewX(-6deg)"
          }}>
            HM
          </div>
          <div>
            <div style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "1.25rem",
              lineHeight: 1.1,
              letterSpacing: "0.04em",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              gap: "6px"
            }}>
              HM AUTO <span style={{ color: "var(--color-red)" }}>24</span>
            </div>
            <div style={{
              fontSize: "0.75rem",
              color: "var(--color-text-muted)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              fontWeight: 600
            }}>
              Bergerac • Mécanique & Diagnostic
            </div>
          </div>
        </Link>

        {/* Navigation Desktop */}
        <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <a href="#services" className="nav-link">
            Services
          </a>
          <a href="#atouts" className="nav-link">
            Pourquoi HM Auto
          </a>
          <a href="#avis" className="nav-link">
            Avis clients (5/5)
          </a>
          <a href="#contact" className="nav-link">
            Horaires & Accès
          </a>
        </nav>

        {/* Phone CTA Button */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <a href={site.phoneHref} className="btn-primary" style={{ padding: "0.65rem 1.25rem", fontSize: "0.9rem" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
            </svg>
            <span>{site.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
