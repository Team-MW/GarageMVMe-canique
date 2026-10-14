import Image from "next/image";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section style={{
      position: "relative",
      paddingTop: "2.5rem",
      paddingBottom: "3rem",
      overflow: "hidden",
    }}>
      {/* Background ambient red glow */}
      <div style={{
        position: "absolute",
        top: "-150px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "800px",
        height: "500px",
        background: "radial-gradient(ellipse at center, rgba(225, 29, 42, 0.15) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 0
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        
        {/* Top Tagline from poster */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
          <div style={{ width: "3px", height: "20px", backgroundColor: "var(--color-red)" }} />
          <p style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(0.75rem, 2vw, 0.9rem)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#fff"
          }}>
            RÉACTIVITÉ. SÉRIEUX. <span style={{ color: "var(--color-red)" }}>PERFORMANCE.</span>
          </p>
        </div>

        {/* Hero Grid */}
        <div className="hero-grid" style={{
          display: "grid",
          gap: "2.5rem",
          alignItems: "start",
          marginBottom: "2rem"
        }}>
          {/* Left Column: Headlines */}
          <div>
            <h1 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.4rem, 5.5vw, 4.8rem)",
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
              fontStyle: "italic",
              marginBottom: "1.5rem"
            }}>
              <span style={{ display: "block", color: "#ffffff" }}>
                REPRENEZ LA ROUTE
              </span>
              <span style={{
                display: "block",
                color: "var(--color-red)",
                textShadow: "0 0 40px rgba(225, 29, 42, 0.45)"
              }}>
                SANS ATTENDRE.
              </span>
            </h1>

            {/* Poster-inspired black ribbon with red racing slashes */}
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
              background: "#0c0d11",
              border: "1px solid var(--color-border-bright)",
              padding: "0.75rem 1.25rem",
              transform: "skewX(-10deg)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.6)",
              marginBottom: "1.8rem",
              maxWidth: "100%"
            }}>
              <div style={{ transform: "skewX(10deg)" }}>
                <span style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(0.8rem, 2vw, 0.95rem)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#fff",
                }}>
                  HM AUTO 24 À BERGERAC
                </span>
                <span style={{
                  color: "var(--color-red)",
                  fontWeight: 700,
                  fontSize: "clamp(0.75rem, 1.8vw, 0.85rem)",
                  marginLeft: "0.6rem",
                  textTransform: "uppercase"
                }}>
                  • PRISE EN CHARGE IMMÉDIATE
                </span>
              </div>
              <div className="racing-slash" style={{ transform: "skewX(10deg)" }}>
                <span />
                <span />
              </div>
            </div>

            <p style={{
              fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
              color: "var(--color-text-muted)",
              lineHeight: 1.6,
              maxWidth: "560px",
              marginBottom: "2rem"
            }}>
              Mécanique générale toutes marques et diagnostic immédiat à la valise. Déplacement possible à domicile sur Bergerac pour vos urgences de démarrage et batterie.
            </p>

            {/* CTA Group */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem" }}>
              <a href={site.phoneHref} className="btn-primary" style={{ padding: "0.95rem 1.8rem", fontSize: "1rem" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                </svg>
                <span>Appeler le {site.phoneDisplay}</span>
              </a>

              <a href="#services" className="btn-secondary">
                <span>Découvrir nos services</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Google Rating 5/5 Badge */}
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.85rem",
              marginTop: "2rem",
              padding: "0.55rem 1rem",
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid var(--color-border)",
              borderRadius: "30px"
            }}>
              <div style={{ display: "flex", gap: "3px", color: "#f59e0b" }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#fff" }}>
                5.0 / 5 • <span style={{ color: "var(--color-text-muted)", fontWeight: 500 }}>7 avis Google</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Circular Red Badges */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.4rem",
            background: "rgba(18, 20, 24, 0.75)",
            border: "1px solid var(--color-border)",
            borderRadius: "12px",
            padding: "1.75rem",
            backdropFilter: "blur(8px)",
            boxShadow: "0 10px 35px rgba(0,0,0,0.4)"
          }}>
            {/* Feature 1 */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1.1rem" }}>
              <div style={{
                width: "46px",
                height: "46px",
                minWidth: "46px",
                borderRadius: "50%",
                backgroundColor: "var(--color-red)",
                boxShadow: "0 0 18px var(--color-red-glow)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff"
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M12 14l3-3" />
                  <path d="M3.34 19a10 10 0 1117.32 0" />
                </svg>
              </div>
              <div>
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  color: "#fff",
                  lineHeight: 1.2
                }}>
                  DIAGNOSTIC IMMÉDIAT
                </h3>
                <p style={{ fontSize: "0.84rem", color: "var(--color-text-muted)", marginTop: "0.25rem", lineHeight: 1.4 }}>
                  Pas de délai d&apos;une semaine. Recherche de panne et passage à la valise sans traîner.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1.1rem" }}>
              <div style={{
                width: "46px",
                height: "46px",
                minWidth: "46px",
                borderRadius: "50%",
                backgroundColor: "var(--color-red)",
                boxShadow: "0 0 18px var(--color-red-glow)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff"
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <div>
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  color: "#fff",
                  lineHeight: 1.2
                }}>
                  DÉPANNAGE À DOMICILE
                </h3>
                <p style={{ fontSize: "0.84rem", color: "var(--color-text-muted)", marginTop: "0.25rem", lineHeight: 1.4 }}>
                  Votre véhicule ne démarre plus ? Intervention sur place à Bergerac (pose batterie, démarrage).
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1.1rem" }}>
              <div style={{
                width: "46px",
                height: "46px",
                minWidth: "46px",
                borderRadius: "50%",
                backgroundColor: "var(--color-red)",
                boxShadow: "0 0 18px var(--color-red-glow)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff"
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <div>
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  color: "#fff",
                  lineHeight: 1.2
                }}>
                  MÉCANIQUE MINUTIEUSE
                </h3>
                <p style={{ fontSize: "0.84rem", color: "var(--color-text-muted)", marginTop: "0.25rem", lineHeight: 1.4 }}>
                  Entretien soigné, distribution, embrayage, freinage. Rigueur et passion de l&apos;automobile.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1.1rem" }}>
              <div style={{
                width: "46px",
                height: "46px",
                minWidth: "46px",
                borderRadius: "50%",
                backgroundColor: "var(--color-red)",
                boxShadow: "0 0 18px var(--color-red-glow)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff"
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div>
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  color: "#fff",
                  lineHeight: 1.2
                }}>
                  PRIX JUSTE & DEVIS CLAIR
                </h3>
                <p style={{ fontSize: "0.84rem", color: "var(--color-text-muted)", marginTop: "0.25rem", lineHeight: 1.4 }}>
                  Aucune réparation imposée sans accord. Transparence totale pour un démarrage en confiance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Central Photographic Hero Banner */}
        <div style={{
          position: "relative",
          width: "100%",
          borderRadius: "12px",
          overflow: "hidden",
          border: "1px solid var(--color-border)",
          boxShadow: "0 20px 50px rgba(0,0,0,0.7)",
          height: "380px",
          marginBottom: "2.5rem"
        }}>
          <Image
            src="/images/hero.jpg"
            alt="HM Auto 24 - Mécanique et Performance à Bergerac"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(9,10,12,0.95) 0%, rgba(9,10,12,0.2) 50%, rgba(9,10,12,0.6) 100%)",
            pointerEvents: "none"
          }} />

          {/* Overlay text on car */}
          <div style={{
            position: "absolute",
            bottom: "1.5rem",
            left: "1.5rem",
            right: "1.5rem",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem"
          }}>
            <div>
              <span className="badge-red" style={{ marginBottom: "0.5rem" }}>GARAGE RÉCENT & MOTIVÉ</span>
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.2rem, 3vw, 2rem)",
                fontWeight: 800,
                color: "#fff",
                textTransform: "uppercase",
                fontStyle: "italic",
                lineHeight: 1.15
              }}>
                LE PROFESSIONNALISME D&apos;UN PASSIONNÉ.
              </h2>
            </div>
            <a href={site.phoneHref} className="btn-primary" style={{ padding: "0.75rem 1.4rem", fontSize: "0.9rem" }}>
              Appel direct : {site.phoneDisplay}
            </a>
          </div>
        </div>

        {/* Bottom 3-Photo Showcase Bar */}
        <div className="hero-preview-strip" style={{
          background: "#0c0e12",
          border: "1px solid var(--color-border)",
          borderRadius: "12px",
          padding: "1.5rem",
          display: "grid",
          gap: "2rem",
          alignItems: "center"
        }}>
          {/* 3 Photos row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem" }}>
            <div style={{ position: "relative", height: "105px", borderRadius: "6px", overflow: "hidden", border: "1px solid var(--color-border)" }}>
              <Image src="/images/atelier.jpg" alt="Atelier mécanique HM Auto 24" fill style={{ objectFit: "cover" }} />
              <div style={{ position: "absolute", bottom: "4px", left: "6px", fontSize: "0.68rem", fontWeight: 700, fontFamily: "var(--font-display)", color: "#fff", background: "rgba(0,0,0,0.7)", padding: "2px 5px", borderRadius: "3px" }}>
                ATELIER
              </div>
            </div>
            <div style={{ position: "relative", height: "105px", borderRadius: "6px", overflow: "hidden", border: "1px solid var(--color-border)" }}>
              <Image src="/images/freinage.jpg" alt="Freinage disques plaquettes" fill style={{ objectFit: "cover" }} />
              <div style={{ position: "absolute", bottom: "4px", left: "6px", fontSize: "0.68rem", fontWeight: 700, fontFamily: "var(--font-display)", color: "#fff", background: "rgba(0,0,0,0.7)", padding: "2px 5px", borderRadius: "3px" }}>
                FREINAGE
              </div>
            </div>
            <div style={{ position: "relative", height: "105px", borderRadius: "6px", overflow: "hidden", border: "1px solid var(--color-border)" }}>
              <Image src="/images/diagnostic.jpg" alt="Valise diagnostic électronique" fill style={{ objectFit: "cover" }} />
              <div style={{ position: "absolute", bottom: "4px", left: "6px", fontSize: "0.68rem", fontWeight: 700, fontFamily: "var(--font-display)", color: "#fff", background: "rgba(0,0,0,0.7)", padding: "2px 5px", borderRadius: "3px" }}>
                DIAGNOSTIC
              </div>
            </div>
          </div>

          <div>
            <h3 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)",
              fontWeight: 800,
              textTransform: "uppercase",
              fontStyle: "italic",
              lineHeight: 1.2
            }}>
              <span style={{ color: "#fff" }}>LA RIGUEUR MÉCANIQUE. </span>
              <span style={{ color: "var(--color-red)" }}>LA CONFIANCE EN PLUS.</span>
            </h3>
            <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", marginTop: "0.5rem", lineHeight: 1.5 }}>
              Chaque véhicule est inspecté avec soin. Pas de surcoût, pas d&apos;attente inutile : une vraie écoute pour résoudre votre problème rapidement.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
