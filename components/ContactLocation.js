import { site } from "@/lib/site";

export default function ContactLocation() {
  return (
    <section id="contact" style={{
      padding: "5rem 0",
      position: "relative",
    }}>
      <div className="container">
        
        <div className="contact-grid" style={{
          display: "grid",
          gap: "2.5rem",
          alignItems: "stretch"
        }}>
          {/* Left: Contact Info & Opening Hours */}
          <div style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: "12px",
            padding: "clamp(1.5rem, 3vw, 2.5rem)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}>
            <div>
              <div className="slant-tag" style={{ marginBottom: "1rem" }}>
                <span>COORDONNÉES & HORAIRES CASTRES</span>
              </div>
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.6rem, 3.2vw, 2.5rem)",
                fontWeight: 900,
                textTransform: "uppercase",
                fontStyle: "italic",
                color: "#fff",
                lineHeight: 1.15,
                marginBottom: "1rem"
              }}>
                ATELIER DE VINCENT & <span style={{ color: "var(--color-red)" }}>DÉPANNAGES</span>
              </h2>
              <p style={{ color: "var(--color-text-muted)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "2rem" }}>
                Besoin d&apos;une révision, d&apos;un remplacement de pompe à eau, de pneus en urgence ou d&apos;un diagnostic ? Rendez-nous visite à Castres ou appelez Vincent directement.
              </p>

              {/* Info blocks */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
                
                {/* Phone */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "10px",
                    background: "rgba(225, 29, 42, 0.15)",
                    color: "var(--color-red)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: "48px",
                    boxShadow: "0 0 15px rgba(225, 29, 42, 0.2)"
                  }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.78rem", color: "var(--color-text-dim)", textTransform: "uppercase", fontWeight: 700 }}>
                      Ligne Directe Vincent (Patron)
                    </div>
                    <a href={site.phoneHref} style={{ fontSize: "1.3rem", fontWeight: 900, color: "#fff", fontFamily: "var(--font-display)" }}>
                      {site.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "10px",
                    background: "rgba(255, 255, 255, 0.05)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: "48px"
                  }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.78rem", color: "var(--color-text-dim)", textTransform: "uppercase", fontWeight: 700 }}>
                      Adresse de l&apos;atelier
                    </div>
                    <div style={{ fontSize: "1.05rem", fontWeight: 800, color: "#fff" }}>
                      {site.fullAddress}
                    </div>
                  </div>
                </div>

              </div>

              {/* Hours Table */}
              <div style={{
                background: "rgba(0,0,0,0.35)",
                border: "1px solid var(--color-border)",
                borderRadius: "8px",
                padding: "1.25rem",
                marginBottom: "2rem"
              }}>
                <div style={{ fontSize: "0.85rem", fontWeight: 800, fontFamily: "var(--font-display)", textTransform: "uppercase", color: "#fff", marginBottom: "0.75rem", letterSpacing: "0.05em" }}>
                  Horaires d&apos;ouverture
                </div>
                {site.hours.map((h, i) => (
                  <div key={i} style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "0.88rem",
                    padding: "0.45rem 0",
                    borderBottom: i < site.hours.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                    color: "var(--color-text-main)"
                  }}>
                    <span style={{ fontWeight: 600 }}>{h.days}</span>
                    <span style={{ fontWeight: 700, color: "var(--color-red)" }}>
                      {h.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <a href={site.phoneHref} className="btn-primary" style={{ flex: 1, minWidth: "180px", textAlign: "center" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                </svg>
                <span>Appeler maintenant</span>
              </a>
              <a
                href={site.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ flex: 1, minWidth: "180px", textAlign: "center" }}
              >
                <span>Ouvrir l&apos;itinéraire GPS</span>
              </a>
            </div>
          </div>

          {/* Right: Map / Direction Visual Card */}
          <div style={{
            background: "var(--color-card)",
            border: "1px solid var(--color-border)",
            borderRadius: "12px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            minHeight: "420px"
          }}>
            <div style={{ flex: 1, width: "100%", minHeight: "300px", position: "relative" }}>
              <iframe
                title="Localisation Garage MV Mécanique Castres"
                src="https://www.google.com/maps?q=49+Chemin+des+Meules+81100+Castres&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(1.1)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div style={{ padding: "1.25rem 1.5rem", background: "#0c0d11", borderTop: "1px solid var(--color-border)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "var(--color-red)", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.08em" }}>
                    Tarn (81) • Castres
                  </div>
                  <div style={{ fontSize: "1.05rem", fontWeight: 800, color: "#fff", fontFamily: "var(--font-display)" }}>
                    GARAGE MV MÉCANIQUE • VINCENT
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "var(--color-text-muted)" }}>
                    49 Chemin des Meules, 81100 Castres
                  </div>
                </div>
                <a
                  href={site.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ padding: "0.6rem 1.1rem", fontSize: "0.85rem" }}
                >
                  Itinéraire GPS
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
