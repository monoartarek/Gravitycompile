import React, { useState, useEffect } from "react";
import "./Header.css";

export default function HeroWithHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-us" },
    { name: "Download", path: "/download-app" },
    { name: "Contact", path: "/contact-us" },
  ];

  const currentPath = window.location.pathname;

  // 🔥 SCROLL DETECTION (FIX)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="hero-header">
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-left">
          <a href="/" className="brand">GC</a>
        </div>

        <div className="nav-center">
          {links.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className={`nav-link ${currentPath === item.path ? "active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="nav-right">
          <a href="/plans-pricing" className="pricing-btn">
            Plans & Pricing
            <span className="arrow-circle">↗</span>
          </a>

          <button
            className="hamburger"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>✕</button>

        {links.map((item) => (
          <a
            key={item.name}
            href={item.path}
            className={`mobile-link ${currentPath === item.path ? "active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            {item.name}
          </a>
        ))}

        <a
          href="/plans-pricing"
          className="mobile-pricing"
          onClick={() => setMenuOpen(false)}
        >
          Plans & Pricing <span className="arrow-circle">↗</span>
        </a>
      </div>
    </header>
  );
}
