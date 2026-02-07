

import React, { useEffect, useState } from "react";
import "./AppPreview.css";

import app1 from "../assets/app-preview/app1.webp";
import app2 from "../assets/app-preview/app2.webp";
import app3 from "../assets/app-preview/app3.webp";
import app4 from "../assets/app-preview/app5.webp";
import app5 from "../assets/app-preview/app6.webp";
import app6 from "../assets/app-preview/app7.webp";
import app7 from "../assets/app-preview/app8.webp";

const slides = [app1, app2, app3, app4, app5, app6, app7];

export default function AppPreview() {
  const [active, setActive] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const prev = () =>
    setActive((prev) => (prev - 1 + slides.length) % slides.length);

  const next = () =>
    setActive((prev) => (prev + 1) % slides.length);

  return (
    <section className="app-preview">
      <h1>App Preview</h1>
      <p className="subtitle">
        Here you can see some of our app previews. Use arrows to explore screens.
      </p>

      <div className="preview-container">
        {slides.map((img, i) => {
          let position = i - active;

          if (position < -3) position += slides.length;
          if (position > 3) position -= slides.length;

          const isHidden = Math.abs(position) > 2;

          return (
            <div
              key={i}
              className={`phone ${position === 0 ? "active" : ""}`}
              style={{
                transform: `translateX(${position * 220}px) scale(${
                  position === 0 ? 1 : 0.78
                })`,
                opacity: isHidden ? 0 : position === 0 ? 1 : 0.35,
                zIndex: position === 0 ? 5 : 1,
                pointerEvents: isHidden ? "none" : "auto",
              }}
            >
              <img src={img} alt="app preview" />
            </div>
          );
        })}
      </div>

      <div className="nav-buttons">
        <button onClick={prev}>&#10094;</button>
        <button onClick={next}>&#10095;</button>
      </div>
    </section>
  );
}
