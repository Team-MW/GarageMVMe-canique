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
              <span>AVIS CLIENTS GOOGLE</span>
            </div>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 3.8vw, 2.8rem)",
              fontWeight: 900,
              textTransform: "uppercase",
              fontStyle: "italic",
              lineHeight: 1.15
            }}>
              NOTE PARFAITE DE <span style={{ color: "var(--color-red)" }}>5.0 / 5</span>
            </h2>
          </div>

          {/* Badge Google */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            background: "rgba(255, 255, 255, 0.04)",
            border: "1px solid var(--color-border)",
            borderRadius: "10px",
            padding: "1rem 1.5rem"
          }}>
            <div style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              color: "#4285F4",
              fontSize: "1.4rem"
            }}>
              G
            </div>
            <div>
              <div style={{ display: "flex", gap: "3px", color: "#f59e0b", marginBottom: "2px" }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div style={{ fontSize: "0.85rem", color: "#fff", fontWeight: 700 }}>
                5.0 sur 5 • 7 avis réels
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem"
        }}>
          {site.testimonials.map((review, i) => (
            <div
              key={i}
              style={{
                background: "var(--color-card)",
                border: "1px solid var(--color-border)",
                borderRadius: "10px",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <div>
                <div style={{ display: "flex", gap: "3px", color: "#f59e0b", marginBottom: "1rem" }}>
                  {[...Array(review.rating)].map((_, idx) => (
                    <svg key={idx} width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p style={{
                  fontSize: "0.95rem",
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
                paddingTop: "1rem"
              }}>
                <div style={{ fontWeight: 700, color: "#fff", fontSize: "0.9rem" }}>
                  {review.author}
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--color-text-dim)" }}>
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
