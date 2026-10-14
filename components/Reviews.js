import { site } from "@/lib/site";

export default function Reviews() {
  return (
    <section id="avis" style={{
      padding: "5rem 0",
      backgroundColor: "#0d0f14",
      borderTop: "1px solid var(--color-border)",
      borderBottom: "1px solid var(--color-border)",
    }}>
      <div className="container">
        
        {/* Header */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1.5rem",
          marginBottom: "3rem"
        }}>
          <div>
            <div className="slant-tag" style={{ marginBottom: "0.85rem" }}>
              <span>AVIS CLIENTS GOOGLE VÉRIFIÉS</span>
            </div>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 3.8vw, 2.8rem)",
              fontWeight: 900,
              textTransform: "uppercase",
              fontStyle: "italic",
              lineHeight: 1.15
            }}>
              EXCELLENCE RECONNUE : <span style={{ color: "var(--color-red)" }}>4.9 / 5</span>
            </h2>
            <p style={{ color: "var(--color-text-muted)", fontSize: "0.95rem", marginTop: "0.5rem" }}>
              Découvrez les retours des conducteurs de Castres et des vacanciers dépannés en urgence par Vincent.
            </p>
          </div>

          {/* Badge Google 4.9/5 avec 48 avis */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            background: "rgba(255, 255, 255, 0.04)",
            border: "1px solid var(--color-border-bright)",
            borderRadius: "10px",
            padding: "1rem 1.5rem",
            boxShadow: "0 8px 24px rgba(0,0,0,0.4)"
          }}>
            <div style={{
              width: "46px",
              height: "46px",
              borderRadius: "50%",
              background: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              color: "#4285F4",
              fontSize: "1.5rem",
              boxShadow: "0 2px 10px rgba(0,0,0,0.2)"
            }}>
              G
            </div>
            <div>
              <div style={{ display: "flex", gap: "3px", color: "#f59e0b", marginBottom: "3px" }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="18" height="18" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div style={{ fontSize: "0.92rem", color: "#fff", fontWeight: 800 }}>
                {site.rating.score} sur 5 • <span style={{ color: "#38bdf8", fontWeight: 700 }}>{site.rating.reviewsCount} avis Google</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem"
        }}>
          {site.testimonials.map((review, i) => (
            <div
              key={i}
              style={{
                background: "var(--color-card)",
                border: "1px solid var(--color-border)",
                borderRadius: "10px",
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 6px 20px rgba(0,0,0,0.3)"
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <div style={{ display: "flex", gap: "3px", color: "#f59e0b" }}>
                    {[...Array(review.rating)].map((_, idx) => (
                      <svg key={idx} width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span style={{ fontSize: "0.72rem", color: "#10b981", fontWeight: 700, background: "rgba(16, 185, 129, 0.12)", padding: "2px 6px", borderRadius: "4px" }}>
                    ✓ Avis Vérifié
                  </span>
                </div>
                <p style={{
                  fontSize: "0.93rem",
                  color: "var(--color-text-main)",
                  lineHeight: 1.6,
                  fontStyle: "italic",
                  marginBottom: "1.5rem"
                }}>
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderTop: "1px solid var(--color-border)",
                paddingTop: "0.85rem"
              }}>
                <div style={{ fontWeight: 800, color: "#fff", fontSize: "0.9rem" }}>
                  {review.author}
                </div>
                <div style={{ fontSize: "0.78rem", color: "var(--color-text-dim)" }}>
                  {review.date}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
