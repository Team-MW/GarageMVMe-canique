"use client";

import { useState } from "react";
import { site } from "@/lib/site";

export default function BookingSection() {
  const [formData, setFormData] = useState({
    service: "Révision complète & Entretien",
    date: "",
    timeSlot: "Matin (08h30 - 12h00)",
    name: "",
    phone: "",
    vehicle: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getWhatsAppBookingUrl = () => {
    const text = `Bonjour Vincent, je souhaite réserver un rendez-vous au Garage MV Mécanique :
• Prestation : ${formData.service}
• Date souhaitée : ${formData.date || "Dès que possible"} (${formData.timeSlot})
• Véhicule : ${formData.vehicle || "Non spécifié"}
• Nom : ${formData.name}
• Téléphone : ${formData.phone}
${formData.message ? `• Note : ${formData.message}` : ""}`;
    return `https://wa.me/33785826212?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="rdv" style={{
      padding: "5rem 0",
      backgroundColor: "#0d0f14",
      borderTop: "1px solid var(--color-border)",
      borderBottom: "1px solid var(--color-border)",
      position: "relative"
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 3.5rem" }}>
          <div className="slant-tag" style={{ marginBottom: "1rem" }}>
            <span>PRISE EN CHARGE RAPIDE À CASTRES</span>
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 900,
            textTransform: "uppercase",
            fontStyle: "italic",
            color: "#fff",
            lineHeight: 1.15,
            marginBottom: "1rem"
          }}>
            PRENDRE RENDEZ-VOUS <span style={{ color: "var(--color-red)" }}>EN LIGNE</span>
          </h2>
          <p style={{ color: "var(--color-text-muted)", fontSize: "1rem", lineHeight: 1.6 }}>
            Choisissez votre prestation et votre créneau souhaité en quelques clics. Vincent vous confirme votre rendez-vous dans les plus brefs délais.
          </p>
        </div>

        {/* Booking Card */}
        <div style={{
          maxWidth: "840px",
          margin: "0 auto",
          background: "var(--color-card)",
          border: "1px solid var(--color-border-bright)",
          borderRadius: "14px",
          padding: "clamp(1.75rem, 4vw, 3rem)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.6)"
        }}>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "2rem 1rem" }}>
              <div style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                background: "rgba(16, 185, 129, 0.15)",
                color: "#10b981",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.5rem",
                boxShadow: "0 0 20px rgba(16, 185, 129, 0.3)"
              }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>

              <h3 style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.8rem",
                fontWeight: 900,
                color: "#fff",
                textTransform: "uppercase",
                fontStyle: "italic",
                marginBottom: "0.75rem"
              }}>
                Demande de Rendez-vous Enregistrée !
              </h3>

              <p style={{ color: "var(--color-text-muted)", fontSize: "1.05rem", lineHeight: 1.6, maxWidth: "560px", margin: "0 auto 2rem" }}>
                Merci <strong>{formData.name}</strong>. Vincent a bien reçu votre demande pour votre <strong>{formData.service}</strong> et va vous recontacter au <strong>{formData.phone}</strong> pour confirmer votre passage.
              </p>

              <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <a
                  href={getWhatsAppBookingUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ background: "#25D366", borderColor: "#25D366", padding: "0.9rem 1.6rem" }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.585 1.776.88 2.796.88 3.181 0 5.767-2.586 5.767-5.766.001-3.182-2.585-5.767-5.767-5.767zm7.689 5.766c0 4.24-3.449 7.689-7.689 7.689-1.341 0-2.61-.347-3.72-1l-4.133 1.083 1.102-4.028c-.732-1.168-1.144-2.53-1.144-3.744 0-4.24 3.449-7.689 7.689-7.689 4.24 0 7.689 3.449 7.689 7.689z" />
                  </svg>
                  <span>Accélérer via WhatsApp</span>
                </a>

                <a
                  href={site.phoneHref}
                  className="btn-secondary"
                  style={{ padding: "0.9rem 1.6rem" }}
                >
                  <span>Ou Appeler Vincent ({site.phoneDisplay})</span>
                </a>
              </div>

              <div style={{ marginTop: "2rem" }}>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{ background: "none", color: "var(--color-text-dim)", textDecoration: "underline", fontSize: "0.85rem" }}
                >
                  Envoyer une autre demande
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem", marginBottom: "1.5rem" }}>
                
                {/* Prestation selection */}
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#fff", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                    Type de Prestation *
                  </label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.85rem 1rem",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid var(--color-border-bright)",
                      borderRadius: "6px",
                      color: "#fff",
                      fontSize: "0.95rem",
                      outline: "none"
                    }}
                  >
                    <option value="Révision complète & Entretien" style={{ background: "#15171d" }}>Révision complète & Entretien constructeur</option>
                    <option value="Dépannage d'urgence (Vacanciers / Gens de passage)" style={{ background: "#15171d" }}>🚨 Dépannage urgence (Vacanciers / Passage)</option>
                    <option value="Pompe à eau & Circuit de refroidissement" style={{ background: "#15171d" }}>💧 Pompe à eau & Surchauffe</option>
                    <option value="Crevaison & Pneumatiques" style={{ background: "#15171d" }}>🛞 Crevaison / Remplacement pneus</option>
                    <option value="Kit Courroie de Distribution" style={{ background: "#15171d" }}>Courroie de distribution</option>
                    <option value="Embrayage & Transmission" style={{ background: "#15171d" }}>Embrayage & Boîte</option>
                    <option value="Freinage (Plaquettes / Disques)" style={{ background: "#15171d" }}>Freinage (Disques & Plaquettes)</option>
                    <option value="Diagnostic électronique valise" style={{ background: "#15171d" }}>Diagnostic voyant à la valise</option>
                    <option value="Autre demande mécanique" style={{ background: "#15171d" }}>Autre demande mécanique</option>
                  </select>
                </div>

                {/* Date souhaitée */}
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#fff", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                    Date Souhaitée *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.85rem 1rem",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid var(--color-border-bright)",
                      borderRadius: "6px",
                      color: "#fff",
                      fontSize: "0.95rem",
                      outline: "none"
                    }}
                  />
                </div>

                {/* Créneau horaire */}
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#fff", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                    Créneau Souhaité
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.85rem 1rem",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid var(--color-border-bright)",
                      borderRadius: "6px",
                      color: "#fff",
                      fontSize: "0.95rem",
                      outline: "none"
                    }}
                  >
                    <option value="Matin (08h30 - 12h00)" style={{ background: "#15171d" }}>Matin (08h30 - 12h00)</option>
                    <option value="Après-midi (14h00 - 19h00)" style={{ background: "#15171d" }}>Après-midi (14h00 - 19h00)</option>
                    <option value="Urgence dès aujourd'hui" style={{ background: "#15171d" }}>🚨 Dès aujourd&apos;hui (Urgence)</option>
                  </select>
                </div>

                {/* Véhicule */}
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#fff", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                    Véhicule (Marque / Modèle / Immat)
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Peugeot 208, Renault Clio, BMW..."
                    value={formData.vehicle}
                    onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.85rem 1rem",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid var(--color-border-bright)",
                      borderRadius: "6px",
                      color: "#fff",
                      fontSize: "0.95rem",
                      outline: "none"
                    }}
                  />
                </div>

                {/* Nom */}
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#fff", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                    Votre Nom & Prénom *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Jean Dupont"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.85rem 1rem",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid var(--color-border-bright)",
                      borderRadius: "6px",
                      color: "#fff",
                      fontSize: "0.95rem",
                      outline: "none"
                    }}
                  />
                </div>

                {/* Téléphone */}
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#fff", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                    Numéro de Téléphone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="06 .. .. .. .."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.85rem 1rem",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid var(--color-border-bright)",
                      borderRadius: "6px",
                      color: "#fff",
                      fontSize: "0.95rem",
                      outline: "none"
                    }}
                  />
                </div>

              </div>

              {/* Message */}
              <div style={{ marginBottom: "2rem" }}>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#fff", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                  Précisions sur votre panne ou vos besoins (facultatif)
                </label>
                <textarea
                  rows="3"
                  placeholder="Bruit anormal, voyant allumé, révision des 100 000 km, surchauffe..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "0.85rem 1rem",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid var(--color-border-bright)",
                    borderRadius: "6px",
                    color: "#fff",
                    fontSize: "0.95rem",
                    outline: "none",
                    resize: "vertical"
                  }}
                />
              </div>

              {/* Submit Buttons */}
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1.25rem",
                borderTop: "1px solid var(--color-border)",
                paddingTop: "1.75rem"
              }}>
                <div>
                  <div style={{ fontSize: "0.82rem", color: "var(--color-text-dim)" }}>
                    🔒 Vos données restent strictement confidentielles.
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "#ff858d", fontWeight: 600 }}>
                    Urgence absolue ? Appelez directement Vincent au {site.phoneDisplay}
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ padding: "1rem 2rem", fontSize: "1rem", cursor: "pointer" }}
                >
                  <span>Confirmer la demande de RDV</span>
                  <span>→</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}
