import React, { useState, useEffect } from "react";
import "./AboutUsHero.css";
import heroPreview from "../assets/others_image/hero_about.webp";
import { Link } from "react-router-dom";


export default function Hero() {
  const fullText = "About Us...";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!deleting && index <= fullText.length) {
      // Typing
      timeout = setTimeout(() => {
        setText(fullText.slice(0, index));
        setIndex(index + 1);
      }, 50);
    } else if (deleting && index >= 0) {
      // Deleting
      timeout = setTimeout(() => {
        setText(fullText.slice(0, index));
        setIndex(index - 1);
      }, 50);
    }

    // Pause at the end of typing
    if (index === fullText.length && !deleting) {
      timeout = setTimeout(() => setDeleting(true), 1500); // 1.5s pause
    }

    // Pause at the end of deleting
    if (index === 0 && deleting) {
      timeout = setTimeout(() => setDeleting(false), 500); // 0.5s pause
    }

    return () => clearTimeout(timeout);
  }, [index, deleting, fullText]);

  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* TEXT */}
        <div className="hero-text">
          <h1 className="hero-typing">
            <span>{text}</span>
            {/* <span className="cursor">|</span> */}
          </h1>
          <p>
            Get a complete live streaming app like Bigo on a $1,000/month rental
            or own the full source code. Full control over your app, hosts,
            agency, and earnings — all under your brand.
          </p>
          <Link to="/contact-us">
            <button className="hero-btn">Contact Us</button>
          </Link>
        </div>

        {/* IMAGE */}
        <div className="hero-image">
          <img src={heroPreview} alt="App Preview" />
        </div>
      </div>
    </section>
  );
}
