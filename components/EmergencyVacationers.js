import { site } from "@/lib/site";

export default function EmergencyVacationers() {
  return (
    <section id="urgence" style={{
      padding: "4.5rem 0",
      position: "relative",
      background: "radial-gradient(circle at 50% 50%, rgba(225, 29, 42, 0.12) 0%, rgba(9, 10, 12, 1) 75%)",
      borderTop: "1px solid rgba(225, 29, 42, 0.3)",
      borderBottom: "1px solid rgba(225, 29, 42, 0.3)"
    }}>
      <div className="container">
        
        {/* Main Card with Alert / High-Priority Styling */}
        <div style={{
          background: "linear-gradient(135deg, #161821 0%, #0d0f14 100%)",
          border: "2px solid rgba(225, 29, 42, 0.45)",
          borderRadius: "14px",
          padding: "clamp(2rem, 4vw, 3.5rem)",
          boxShadow: "0 15px 50px rgba(0,0,0,0.8), 0 0 40px rgba(225, 29, 42, 0.15)",
          position: "relative",
          overflow: "hidden"
        }}>
          {/* Top highlight bar */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "5px",
            background: "linear-gradient(90deg, var(--color-red) 0%, #ff6b75 50%, var(--color-red) 100%)"
          }} />

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem",
            alignItems: "center"
          }}>
            
            {/* Left Content */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "1rem" }}>
                <span style={{
                  backgroundColor: "var(--color-red)",
                  color: "#fff",
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "0.8rem",
                  padding: "4px 10px",
                  borderRadius: "4px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em"
                }}>
                  🚨 SERVICE EXPRESS PRIORITAIRE
                </span>
                <span style={{ color: "#f87171", fontSize: "0.85rem", fontWeight: 700 }}>
                  Castres & Environs (81)
                </span>
              </div>

              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.9rem, 3.8vw, 2.7rem)",
                fontWeight: 900,
                textTransform: "uppercase",
                fontStyle: "italic",
                color: "#fff",
                lineHeight: 1.15,
                marginBottom: "1.2rem"
              }}>
                EN PANNE SUR LA ROUTE ? <span style={{ color: "var(--color-red)" }}>DÉPANNAGE RAPIDE</span> POUR LES VACANCIERS & GENS DE PASSAGE
              </h2>

              <p style={{
                color: "var(--color-text-muted)",
                fontSize: "1.02rem",
                lineHeight: 1.6,
                marginBottom: "1.8rem"
              }}>
                Vous êtes en vacances dans la région ou de passage à Castres et un problème survient sur votre véhicule ? <strong>Vincent comprend l&apos;urgence</strong> et intervient sans vous faire patienter plusieurs jours pour vous permettre de reprendre la route sereinement.
              </p>

              {/* 3 Common Emergency Scenarios */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
                <div style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px",
                  padding: "0.85rem 1rem"
                }}>
                  <div style={{ color: "var(--color-red)", fontWeight: 800, fontFamily: "var(--font-display)", fontSize: "0.9rem", marginBottom: "3px" }}>
                    💧 POMPE À EAU & REFROIDISSEMENT
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>
                    Surchauffe moteur, fuite de liquide : réparation et purge rapide.
                  </div>
                </div>

                <div style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px",
                  padding: "0.85rem 1rem"
                }}>
                  <div style={{ color: "var(--color-red)", fontWeight: 800, fontFamily: "var(--font-display)", fontSize: "0.9rem", marginBottom: "3px" }}>
                    🛞 CREVAISON EXPRESS
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>
                    Remplacement ou mèche immédiate pour repartir sans encombre.
                  </div>
                </div>

                <div style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px",
                  padding: "0.85rem 1rem"
                }}>
                  <div style={{ color: "var(--color-red)", fontWeight: 800, fontFamily: "var(--font-display)", fontSize: "0.9rem", marginBottom: "3px" }}>
                    ⚡ VOYANT MOTEUR & DÉMARRAGE
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>
                    Passage valise immédiat, diagnostic franc et précis.
                  </div>
                </div>
              </div>
            </div>

            {/* Right Call Action Box - GROS BOUTON APPELER */}
            <div style={{
              background: "rgba(0, 0, 0, 0.4)",
              border: "1px solid rgba(225, 29, 42, 0.35)",
              borderRadius: "12px",
              padding: "2rem",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "inset 0 0 30px rgba(225, 29, 42, 0.08)"
            }}>
              <div style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, var(--color-red) 0%, #991b1b 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                boxShadow: "0 0 25px rgba(225, 29, 42, 0.5)",
                marginBottom: "1.25rem"
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>

              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.1rem",
                fontWeight: 800,
                textTransform: "uppercase",
                color: "#fff",
                letterSpacing: "0.06em",
                marginBottom: "0.35rem"
              }}>
                Ligne Directe Dépannage
              </div>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "1.5rem", maxWidth: "280px" }}>
                Expliquez directement votre problème à Vincent pour une prise en charge au plus vite.
              </p>

              {/* HUGE CALL BUTTON */}
              <a
                href={site.phoneHref}
                className="btn-call-hero"
                style={{ width: "100%", justifyContent: "center", padding: "1.2rem 1.5rem" }}
              >
                <div className="btn-call-hero-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div style={{ textAlign: "left" }}>
                  <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#ffe4e6", display: "block", fontWeight: 700 }}>
                    Appeler Vincent Maintenant
                  </span>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "1.35rem", fontWeight: 900, color: "#fff" }}>
                    {site.phoneDisplay}
                  </span>
                </div>
              </a>

              <div style={{ marginTop: "1rem", fontSize: "0.8rem", color: "var(--color-text-dim)" }}>
                Atelier situé au 49 Chemin des Meules, Castres
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
