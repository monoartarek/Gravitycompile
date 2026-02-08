import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
import heroPreview from "../assets/others_image/Home.png";
import { Link } from "react-router-dom";


export default function Hero() {
  const navigate = useNavigate(); //  must be inside component

  const fullText = "Live Streaming App...";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!deleting && index <= fullText.length) {
      timeout = setTimeout(() => {
        setText(fullText.slice(0, index));
        setIndex(index + 1);
      }, 50);
    } else if (deleting && index >= 0) {
      timeout = setTimeout(() => {
        setText(fullText.slice(0, index));
        setIndex(index - 1);
      }, 50);
    }

    if (index === fullText.length && !deleting) {
      timeout = setTimeout(() => setDeleting(true), 1500);
    }

    if (index === 0 && deleting) {
      timeout = setTimeout(() => setDeleting(false), 500);
    }

    return () => clearTimeout(timeout);
  }, [index, deleting, fullText]);

  return (
    <section className="hero-sections">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-typing">
            Start Your Own <br />
            <span>{text}</span>
          </h1>
          <p>
            Get a complete live streaming app like Bigo on a $1,000/month rental
            or own the full source code. Full control over your app, hosts,
            agency, and earnings - all under your brand. PikiLive app Price 3000$ with 100 animations.<br />
          </p>
      
          <Link to="/contact-us">
            <button className="hero-btn">Contact Us</button>
          </Link>
        </div>

        <div className="hero-image">
          <img src={heroPreview} alt="App Preview" />
        </div>
      </div>
    </section>
  );
}
