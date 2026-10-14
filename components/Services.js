import Image from "next/image";
import { site } from "@/lib/site";

export default function Services() {
  return (
    <section id="services" style={{
      padding: "5rem 0",
      backgroundColor: "#0d0f14",
      borderTop: "1px solid var(--color-border)",
      borderBottom: "1px solid var(--color-border)",
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "1.5rem",
          marginBottom: "3.5rem"
        }}>
          <div>
            <div className="slant-tag" style={{ marginBottom: "0.85rem" }}>
              <span>ATELIER MÉCANIQUE À CASTRES</span>
            </div>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 900,
              textTransform: "uppercase",
              fontStyle: "italic",
              lineHeight: 1.1
            }}>
              MÉCANIQUE GÉNÉRALE & <span style={{ color: "var(--color-red)" }}>RÉVISIONS COMPLÈTES</span>
            </h2>
          </div>
          <p style={{
            color: "var(--color-text-muted)",
            maxWidth: "480px",
            fontSize: "0.95rem",
            lineHeight: 1.6
          }}>
            De l&apos;entretien constructeur à la réparation d&apos;urgence sur la route des vacances, Vincent prend soin de votre véhicule avec minutie et au juste prix.
          </p>
        </div>

        {/* Services Grid (4 Cards) */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem"
        }}>
          {site.services.map((service, index) => (
            <div
              key={service.id}
              className="service-card"
              style={{
                backgroundColor: "var(--color-card)",
                border: "1px solid var(--color-border)",
                borderRadius: "10px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Image banner */}
              <div style={{ position: "relative", height: "190px", width: "100%" }}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(21, 23, 29, 1) 0%, rgba(21, 23, 29, 0.2) 60%)"
                }} />
                <div style={{
                  position: "absolute",
                  top: "12px",
                  left: "12px",
                  background: "var(--color-red)",
                  color: "#fff",
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "0.8rem",
                  padding: "3px 8px",
                  borderRadius: "3px",
                  transform: "skewX(-8deg)"
                }}>
                  0{index + 1}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: "0.8rem", color: "var(--color-red)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.35rem" }}>
                  {service.subtitle}
                </div>
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.25rem",
                  fontWeight: 800,
                  color: "#fff",
                  marginBottom: "0.75rem",
                  textTransform: "uppercase"
                }}>
                  {service.title}
                </h3>
                <p style={{
                  fontSize: "0.88rem",
                  color: "var(--color-text-muted)",
                  lineHeight: 1.5,
                  marginBottom: "1.25rem",
                  flex: 1
                }}>
                  {service.desc}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.5rem" }}>
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "0.75rem",
                        padding: "0.2rem 0.55rem",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid var(--color-border)",
                        borderRadius: "3px",
                        color: "var(--color-text-main)"
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action CTA with pure CSS hover */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
                  <a
                    href="#rdv"
                    className="service-cta"
                    style={{ justifyContent: "center", textAlign: "center" }}
                  >
                    <span>Prendre RDV</span>
                  </a>
                  <a
                    href={site.phoneHref}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "5px",
                      padding: "0.75rem",
                      backgroundColor: "var(--color-red)",
                      borderRadius: "6px",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      fontFamily: "var(--font-display)",
                      textTransform: "uppercase"
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                    </svg>
                    <span>Appeler</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
