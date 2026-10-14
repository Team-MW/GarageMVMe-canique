"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { site } from "@/lib/site";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: "rgba(9, 10, 12, 0.95)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid var(--color-border)",
      }}>
        <div className="container" style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "74px",
        }}>
          {/* Logo */}
          <Link href="/" onClick={closeMenu} style={{ display: "flex", alignItems: "center", gap: "0.75rem", zIndex: 101 }}>
            <div style={{
              width: "42px",
              height: "42px",
              background: "linear-gradient(135deg, var(--color-red) 0%, #8a0c14 100%)",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              fontFamily: "var(--font-display)",
              fontSize: "1.2rem",
              color: "#fff",
              fontStyle: "italic",
              boxShadow: "0 0 16px rgba(225, 29, 42, 0.4)",
              transform: "skewX(-6deg)"
            }}>
              HM
            </div>
            <div>
              <div style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "1.2rem",
                lineHeight: 1.1,
                letterSpacing: "0.04em",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                gap: "5px"
              }}>
                HM AUTO <span style={{ color: "var(--color-red)" }}>24</span>
              </div>
              <div style={{
                fontSize: "0.7rem",
                color: "var(--color-text-muted)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                fontWeight: 600
              }}>
                Bergerac • Garage & Dépannage
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <a href="#services" className="nav-link">
              Services
            </a>
            <a href="#atouts" className="nav-link">
              Pourquoi HM Auto
            </a>
            <a href="#avis" className="nav-link">
              Avis clients (5/5)
            </a>
            <a href="#contact" className="nav-link">
              Horaires & Accès
            </a>
          </nav>

          {/* Right Actions: Phone + Burger Button */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
            {/* Phone Button */}
            <a
              href={site.phoneHref}
              className="btn-primary desktop-phone-btn"
              style={{ padding: "0.6rem 1.15rem", fontSize: "0.88rem" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
              </svg>
              <span>{site.phoneDisplay}</span>
            </a>

            {/* Mobile Call Icon Quick Tap */}
            <a
              href={site.phoneHref}
              className="mobile-phone-quick"
              title="Appeler directement"
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "8px",
                backgroundColor: "var(--color-red)",
                color: "#fff",
                display: "none",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 15px rgba(225, 29, 42, 0.4)"
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
              </svg>
            </a>

            {/* Hamburger Toggle Button */}
            <button
              onClick={toggleMenu}
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              className="burger-button"
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "8px",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid var(--color-border-bright)",
                display: "none",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
                cursor: "pointer",
                padding: 0,
                zIndex: 101,
                transition: "all 0.25s ease"
              }}
            >
              <span style={{
                display: "block",
                width: "22px",
                height: "2px",
                backgroundColor: isOpen ? "var(--color-red)" : "#fff",
                borderRadius: "2px",
                transition: "transform 0.3s ease, opacity 0.3s ease",
                transform: isOpen ? "rotate(45deg) translate(5px, 5px)" : "none"
              }} />
              <span style={{
                display: "block",
                width: "22px",
                height: "2px",
                backgroundColor: "#fff",
                borderRadius: "2px",
                transition: "opacity 0.2s ease",
                opacity: isOpen ? 0 : 1
              }} />
              <span style={{
                display: "block",
                width: "22px",
                height: "2px",
                backgroundColor: isOpen ? "var(--color-red)" : "#fff",
                borderRadius: "2px",
                transition: "transform 0.3s ease",
                transform: isOpen ? "rotate(-45deg) translate(5px, -5px)" : "none"
              }} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-menu-drawer ${isOpen ? "open" : ""}`}
        style={{
          position: "fixed",
          top: "74px",
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(9, 10, 12, 0.98)",
          backdropFilter: "blur(20px)",
          zIndex: 99,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "2rem 1.5rem",
          overflowY: "auto",
          transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease",
          transform: isOpen ? "translateY(0)" : "translateY(-100%)",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          borderBottom: "2px solid var(--color-red)"
        }}
      >
        {/* Navigation list */}
        <nav style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginTop: "1rem" }}>
          <a
            href="#services"
            onClick={closeMenu}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.5rem",
              fontWeight: 800,
              textTransform: "uppercase",
              fontStyle: "italic",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: "0.85rem",
              borderBottom: "1px solid var(--color-border)"
            }}
          >
            <span>Nos Services</span>
            <span style={{ color: "var(--color-red)", fontSize: "1.2rem" }}>01</span>
          </a>

          <a
            href="#atouts"
            onClick={closeMenu}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.5rem",
              fontWeight: 800,
              textTransform: "uppercase",
              fontStyle: "italic",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: "0.85rem",
              borderBottom: "1px solid var(--color-border)"
            }}
          >
            <span>Pourquoi HM Auto 24</span>
            <span style={{ color: "var(--color-red)", fontSize: "1.2rem" }}>02</span>
          </a>

          <a
            href="#avis"
            onClick={closeMenu}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.5rem",
              fontWeight: 800,
              textTransform: "uppercase",
              fontStyle: "italic",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: "0.85rem",
              borderBottom: "1px solid var(--color-border)"
            }}
          >
            <span>Avis Clients (5/5)</span>
            <span style={{ color: "var(--color-red)", fontSize: "1.2rem" }}>03</span>
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.5rem",
              fontWeight: 800,
              textTransform: "uppercase",
              fontStyle: "italic",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: "0.85rem",
              borderBottom: "1px solid var(--color-border)"
            }}
          >
            <span>Horaires & Accès</span>
            <span style={{ color: "var(--color-red)", fontSize: "1.2rem" }}>04</span>
          </a>
        </nav>

        {/* Drawer Footer Actions */}
        <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {/* Big Direct Call Button */}
          <a
            href={site.phoneHref}
            className="btn-primary"
            style={{ width: "100%", padding: "1.1rem", fontSize: "1.05rem", textAlign: "center" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
            </svg>
            <span>Appeler le {site.phoneDisplay}</span>
          </a>

          {/* GPS Route Button */}
          <a
            href={site.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="btn-secondary"
            style={{ width: "100%", padding: "0.9rem", textAlign: "center", fontSize: "0.95rem" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            <span>Itinéraire : 39 Route Pierre Pinson</span>
          </a>

          {/* Opening Hours Info in Drawer */}
          <div style={{
            background: "rgba(255, 255, 255, 0.03)",
            border: "1px solid var(--color-border)",
            borderRadius: "8px",
            padding: "0.85rem 1rem",
            fontSize: "0.82rem",
            color: "var(--color-text-muted)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            <span>Lun–Ven 9h–19h • Sam 9h–14h</span>
            <span style={{ color: "#10b981", fontWeight: 700 }}>● Ouvert</span>
          </div>
        </div>
      </div>
    </>
  );
}
