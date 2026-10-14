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

          <div style={{ maxWidth: "720px", marginBottom: "3rem" }}>
            <div className="slant-tag" style={{ marginBottom: "1rem" }}>
              <span>LA DIFFÉRENCE HM AUTO 24</span>
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
              POURQUOI LES CONDUCTEURS DE BERGERAC FONT CONFIANCE À <span style={{ color: "var(--color-red)" }}>HM AUTO 24</span> ?
            </h2>
            <p style={{
              color: "var(--color-text-muted)",
              marginTop: "1rem",
              fontSize: "1.05rem",
              lineHeight: 1.6
            }}>
              Un garage récent mené par un mécanicien passionné et ultra-réactif. Quand d&apos;autres vous donnent rendez-vous dans 10 jours, nous trouvons la solution tout de suite.
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
                DIAGNOSTIC IMMÉDIAT
              </h3>
              <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", lineHeight: 1.5 }}>
                Votre voyant moteur est allumé ? Venez directement. La valise est branchée sans vous faire attendre des semaines.
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
                DÉPLACEMENT À DOMICILE
              </h3>
              <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", lineHeight: 1.5 }}>
                Batterie à plat ou panne immobilisante ? Déplacement possible chez vous à Bergerac pour vous éviter un remorquage coûteux.
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
                TRANSPARENCE & SÉRIEUX
              </h3>
              <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", lineHeight: 1.5 }}>
                Explications claires de la panne, pièces montrées avant travaux et devis transparent. Pas de mauvaises surprises.
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
                  5.0 ★
                </div>
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.15rem",
                  fontWeight: 800,
                  color: "#fff",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem"
                }}>
                  SATISFACTION 100%
                </h3>
                <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", lineHeight: 1.5 }}>
                  Un score parfait de 5/5 sur Google avec 7 avis vérifiés.
                </p>
              </div>

              <a
                href={site.phoneHref}
                className="btn-primary"
                style={{ marginTop: "1.25rem", padding: "0.65rem 1rem", fontSize: "0.85rem", width: "100%" }}
              >
                Contacter le mécanicien
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
