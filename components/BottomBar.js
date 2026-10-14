import { site } from "@/lib/site";

export default function BottomBar() {
  return (
    <>
      <footer style={{
        backgroundColor: "#060709",
        borderTop: "2px solid var(--color-red)",
        padding: "2.25rem 0 5rem 0",
        position: "relative",
        zIndex: 50
      }}>
        <div className="container">
          
          {/* Main Footer Info Row */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.75rem"
          }}>
            
            {/* Left: Red Pill Phone Call Button */}
            <a
              href={site.phoneHref}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "1rem",
                background: "#0e1015",
                border: "1px solid var(--color-border-bright)",
                padding: "0.65rem 1.35rem 0.65rem 0.65rem",
                borderRadius: "40px",
                textDecoration: "none",
                transition: "transform 0.2s ease, box-shadow 0.2s ease"
              }}
            >
              <div style={{
                width: "46px",
                height: "46px",
                borderRadius: "50%",
                backgroundColor: "var(--color-red)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                boxShadow: "0 0 18px rgba(225, 29, 42, 0.55)"
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: "0.72rem", color: "var(--color-red)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  APPEL DIRECT VINCENT • RÉPONSE RAPIDE
                </div>
                <div style={{ fontSize: "1.2rem", fontWeight: 900, color: "#fff", fontFamily: "var(--font-display)" }}>
                  {site.phoneDisplay}
                </div>
              </div>
            </a>

            {/* Center: Branding & Hours */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
              <div style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "1px solid var(--color-border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-text-muted)"
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 000 20M2 12h20" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: "0.95rem", fontWeight: 800, color: "#fff", fontFamily: "var(--font-display)" }}>
                  GARAGE MV MÉCANIQUE
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>
                  Atelier de Vincent • Castres (81)
                </div>
              </div>
            </div>

            {/* Right: Address Pin */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
              <div style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "1px solid var(--color-border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-red)"
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: "0.92rem", fontWeight: 700, color: "#fff" }}>
                  49 Chemin des Meules
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>
                  81100 Castres (Tarn)
                </div>
              </div>
            </div>

          </div>

          {/* Copyright strip */}
          <div style={{
            marginTop: "1.75rem",
            paddingTop: "1.25rem",
            borderTop: "1px solid rgba(255, 255, 255, 0.05)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "0.78rem",
            color: "var(--color-text-dim)",
            gap: "0.5rem"
          }}>
            <div>
              © {new Date().getFullYear()} Garage MV Mécanique. Mécanique générale, révisions et dépannage urgence à Castres.
            </div>
            <div>
              Patron : Vincent • Note 4,9/5 (48 avis)
            </div>
          </div>

        </div>
      </footer>

      {/* Floating Sticky Mobile Bottom Action Bar */}
      <div className="mobile-floating-bar" style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 90,
        backgroundColor: "rgba(10, 11, 14, 0.96)",
        backdropFilter: "blur(12px)",
        borderTop: "1px solid var(--color-border-bright)",
        padding: "0.75rem 1rem",
        display: "none",
        gap: "0.75rem",
        boxShadow: "0 -4px 20px rgba(0,0,0,0.6)"
      }}>
        {/* Call button */}
        <a
          href={site.phoneHref}
          style={{
            flex: 1.2,
            backgroundColor: "var(--color-red)",
            color: "#fff",
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "0.92rem",
            textTransform: "uppercase",
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
            padding: "0.75rem",
            boxShadow: "0 0 15px rgba(225, 29, 42, 0.4)"
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
          </svg>
          <span>Appeler Vincent</span>
        </a>

        {/* RDV button */}
        <a
          href="#rdv"
          style={{
            flex: 1,
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            border: "1px solid var(--color-border-bright)",
            color: "#fff",
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "0.85rem",
            textTransform: "uppercase",
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
            padding: "0.75rem"
          }}
        >
          <span>📅 Prendre RDV</span>
        </a>
      </div>
    </>
  );
}
