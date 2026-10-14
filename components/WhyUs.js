import { site } from "@/lib/site";

export default function WhyUs() {
  return (
    <section id="atouts" style={{
      padding: "5rem 0",
      position: "relative",
    }}>
      <div className="container">
        
        {/* Banner with skewed racing style */}
        <div style={{
          background: "linear-gradient(135deg, #12141a 0%, #0c0d11 100%)",
          border: "1px solid var(--color-border-bright)",
          borderRadius: "12px",
          padding: "3rem 2.5rem",
          position: "relative",
          overflow: "hidden"
        }}>
          {/* Subtle red line accent top */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "160px",
            height: "4px",
            backgroundColor: "var(--color-red)"
          }} />

          <div style={{ maxWidth: "750px", marginBottom: "3rem" }}>
            <div className="slant-tag" style={{ marginBottom: "1rem" }}>
              <span>LES ENGAGEMENTS DE VINCENT</span>
            </div>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 3.8vw, 2.8rem)",
              fontWeight: 900,
              textTransform: "uppercase",
              fontStyle: "italic",
              lineHeight: 1.15,
              color: "#fff"
            }}>
              POURQUOI LES CONDUCTEURS DE CASTRES FONT CONFIANCE AU <span style={{ color: "var(--color-red)" }}>GARAGE MV MÉCANIQUE</span> ?
            </h2>
            <p style={{
              color: "var(--color-text-muted)",
              marginTop: "1rem",
              fontSize: "1.05rem",
              lineHeight: 1.6
            }}>
              Un atelier à taille humaine dirigé par <strong>Vincent</strong>. Ici, pas de discours commercial superflu : une écoute bienveillante, une grande réactivité pour les pannes urgentes et des prix toujours honnêtes.
            </p>
          </div>

          {/* Comparative Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem"
          }}>
            <div style={{
              background: "rgba(255, 255, 255, 0.02)",
              border: "1px solid var(--color-border)",
              borderRadius: "8px",
              padding: "1.8rem"
            }}>
              <div style={{
                display: "inline-block",
                color: "var(--color-red)",
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "2rem",
                marginBottom: "0.5rem"
              }}>
                01
              </div>
              <h3 style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.15rem",
                fontWeight: 800,
                color: "#fff",
                textTransform: "uppercase",
                marginBottom: "0.5rem"
              }}>
                DÉPANNAGE EXPRESS & VACANCIERS
              </h3>
              <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", lineHeight: 1.5 }}>
                En panne sur la route de Castres (crevaison, pompe à eau, alternateur) ? Vincent fait tout pour vous dépanner au plus vite et sauver vos vacances.
              </p>
            </div>

            <div style={{
              background: "rgba(255, 255, 255, 0.02)",
              border: "1px solid var(--color-border)",
              borderRadius: "8px",
              padding: "1.8rem"
            }}>
              <div style={{
                display: "inline-block",
                color: "var(--color-red)",
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "2rem",
                marginBottom: "0.5rem"
              }}>
                02
              </div>
              <h3 style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.15rem",
                fontWeight: 800,
                color: "#fff",
                textTransform: "uppercase",
                marginBottom: "0.5rem"
              }}>
                RÉVISIONS COMPLÈTES & MOTEUR
              </h3>
              <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", lineHeight: 1.5 }}>
                Vidange, distribution, freins, embrayage : révision complète réalisée selon le carnet d&apos;entretien constructeur pour préserver la santé de votre véhicule.
              </p>
            </div>

            <div style={{
              background: "rgba(255, 255, 255, 0.02)",
              border: "1px solid var(--color-border)",
              borderRadius: "8px",
              padding: "1.8rem"
            }}>
              <div style={{
                display: "inline-block",
                color: "var(--color-red)",
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "2rem",
                marginBottom: "0.5rem"
              }}>
                03
              </div>
              <h3 style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.15rem",
                fontWeight: 800,
                color: "#fff",
                textTransform: "uppercase",
                marginBottom: "0.5rem"
              }}>
                ACCUEIL SYMPA & PRIX RAISONNABLES
              </h3>
              <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", lineHeight: 1.5 }}>
                Vincent vous accueille toujours chaleureusement. Explications claires, pièces montrées avant travaux et devis transparent : aucun surcoût injustifié.
              </p>
            </div>

            <div style={{
              background: "rgba(225, 29, 42, 0.08)",
              border: "1px solid rgba(225, 29, 42, 0.35)",
              borderRadius: "8px",
              padding: "1.8rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}>
              <div>
                <div style={{
                  color: "#ff4d58",
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "2rem",
                  marginBottom: "0.5rem"
                }}>
                  4.9 ★
                </div>
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.15rem",
                  fontWeight: 800,
                  color: "#fff",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem"
                }}>
                  48 AVIS VÉRIFIÉS GOOGLE
                </h3>
                <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", lineHeight: 1.5 }}>
                  Une réputation exemplaire bâtie sur la confiance, le sérieux et la satisfaction de nos clients.
                </p>
              </div>

              <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <a
                  href="#rdv"
                  className="btn-primary"
                  style={{ padding: "0.65rem 1rem", fontSize: "0.85rem", width: "100%", textAlign: "center" }}
                >
                  📅 Prendre RDV en ligne
                </a>
                <a
                  href={site.phoneHref}
                  className="btn-secondary"
                  style={{ padding: "0.6rem 1rem", fontSize: "0.85rem", width: "100%", textAlign: "center" }}
                >
                  Appeler Vincent : {site.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
