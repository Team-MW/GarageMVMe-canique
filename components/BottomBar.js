import { site } from "@/lib/site";

export default function BottomBar() {
  return (
    <footer style={{
      backgroundColor: "#060709",
      borderTop: "2px solid var(--color-red)",
      padding: "1.75rem 0",
      position: "relative",
      zIndex: 50
    }}>
      <div className="container">
        
        {/* Recreated from poster's bottom bar */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1.5rem"
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
              padding: "0.6rem 1.25rem 0.6rem 0.6rem",
              borderRadius: "40px",
              textDecoration: "none",
              transition: "transform 0.2s ease"
            }}
          >
            <div style={{
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              backgroundColor: "var(--color-red)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              boxShadow: "0 0 15px rgba(225, 29, 42, 0.5)"
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: "0.72rem", color: "var(--color-red)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                APPEL & DEVIS SANS ATTENTE
              </div>
              <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#fff", fontFamily: "var(--font-display)" }}>
                {site.phoneDisplay}
              </div>
            </div>
          </a>

          {/* Center: Branding & Opening hours */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
            <div style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              border: "1px solid var(--color-border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--color-text-muted)"
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 000 20M2 12h20" />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "#fff", fontFamily: "var(--font-display)" }}>
                HM AUTO 24
              </div>
              <div style={{ fontSize: "0.78rem", color: "var(--color-text-muted)" }}>
                Ouvert 6j/7 dès 9h00
              </div>
            </div>
          </div>

          {/* Right: Address Pin */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
            <div style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              border: "1px solid var(--color-border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--color-red)"
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#fff" }}>
                39 Route Pierre Pinson
              </div>
              <div style={{ fontSize: "0.78rem", color: "var(--color-text-muted)" }}>
                24100 Bergerac (Dordogne)
              </div>
            </div>
          </div>

        </div>

        {/* Copyright strip */}
        <div style={{
          marginTop: "1.5rem",
          paddingTop: "1.25rem",
          borderTop: "1px solid rgba(255, 255, 255, 0.05)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: "0.75rem",
          color: "var(--color-text-dim)"
        }}>
          <div>
            © {new Date().getFullYear()} HM Auto 24. Garage automobile & dépannage à Bergerac.
          </div>
          <div>
            Design inspiré haute performance • Site vitrine professionnel
          </div>
        </div>

      </div>
    </footer>
  );
}
