import { site } from "@/lib/site";

export default function ContactLocation() {
  return (
    <section id="contact" style={{
      padding: "5rem 0",
      position: "relative",
    }}>
      <div className="container">
        
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: "2.5rem",
          alignItems: "stretch"
        }}>
          {/* Left: Contact Info & Opening Hours */}
          <div style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: "12px",
            padding: "2.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}>
            <div>
              <div className="slant-tag" style={{ marginBottom: "1rem" }}>
                <span>HORAIRES & COORDONNÉES</span>
              </div>
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                fontWeight: 900,
                textTransform: "uppercase",
                fontStyle: "italic",
                color: "#fff",
                lineHeight: 1.15,
                marginBottom: "1rem"
              }}>
                RENDEZ-VOUS EN ATELIER OU INTERVENTION <span style={{ color: "var(--color-red)" }}>RAPIDE</span>
              </h2>
              <p style={{ color: "var(--color-text-muted)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "2rem" }}>
                Besoin d&apos;un diagnostic d&apos;urgence, d&apos;une révision ou d&apos;un remplacement de batterie à domicile ? Appelez directement le mécanicien.
              </p>

              {/* Info blocks */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
                
                {/* Phone */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "8px",
                    background: "rgba(225, 29, 42, 0.15)",
                    color: "var(--color-red)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: "44px"
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.8rem", color: "var(--color-text-dim)", textTransform: "uppercase", fontWeight: 700 }}>Téléphone direct</div>
                    <a href={site.phoneHref} style={{ fontSize: "1.2rem", fontWeight: 800, color: "#fff", fontFamily: "var(--font-display)" }}>
                      {site.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "8px",
                    background: "rgba(255, 255, 255, 0.05)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: "44px"
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.8rem", color: "var(--color-text-dim)", textTransform: "uppercase", fontWeight: 700 }}>Adresse de l&apos;atelier</div>
                    <div style={{ fontSize: "1rem", fontWeight: 700, color: "#fff" }}>
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
                    padding: "0.4rem 0",
                    borderBottom: i < site.hours.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                    color: h.hours === "Fermé" ? "var(--color-text-dim)" : "var(--color-text-main)"
                  }}>
                    <span style={{ fontWeight: 600 }}>{h.days}</span>
                    <span style={{ fontWeight: 700, color: h.hours === "Fermé" ? "var(--color-text-dim)" : "var(--color-red)" }}>
                      {h.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <a href={site.phoneHref} className="btn-primary" style={{ flex: 1, minWidth: "200px" }}>
                <span>Appeler maintenant</span>
              </a>
              <a
                href={site.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ flex: 1, minWidth: "180px" }}
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
            minHeight: "450px"
          }}>
            {/* Embedded Google Maps view for Bergerac */}
            <div style={{ flex: 1, width: "100%", minHeight: "320px", position: "relative" }}>
              <iframe
                title="Localisation HM Auto 24 Bergerac"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45465.94073352726!2d0.45781358963287664!3d44.85408933560706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ab2a549911ea11%3A0x406651748138980!2sBergerac!5e0!3m2!1sfr!2sfr!4v1710000000000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(1.1)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div style={{ padding: "1.5rem", background: "#0c0d11", borderTop: "1px solid var(--color-border)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "var(--color-red)", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.08em" }}>
                    Dordogne (24)
                  </div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#fff", fontFamily: "var(--font-display)" }}>
                    HM AUTO 24 • BERGERAC
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
                    39 Route Pierre Pinson, 24100 Bergerac
                  </div>
                </div>
                <a
                  href={site.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ padding: "0.6rem 1rem", fontSize: "0.85rem" }}
                >
                  Itinéraire
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
