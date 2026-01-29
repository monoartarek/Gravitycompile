import React from "react";
import "./AppCarousel.css";

import app1 from "../assets/apps_image/bigo.webp";
import app2 from "../assets/apps_image/eloelo.webp";
import app3 from "../assets/apps_image/likee.webp";
import app4 from "../assets/apps_image/sk.webp";
import app5 from "../assets/apps_image/tiktok.webp";

const apps = [
  { img: app1, name: "Bigo" },
  { img: app2, name: "Eloelo" },
  { img: app3, name: "Likee" },
  { img: app4, name: "SK" },
  { img: app5, name: "TikTok" },
];

// repeat apps enough times for seamless scroll
const repeatedApps = [...apps, ...apps, ...apps];

const AppCarousel = () => {
  return (
    <section className="carousel-section">
      <h2 className="carousel-title">Apps We Served as Agency</h2>
      <div className="carousel-wrapper">
        <div className="carousel-track">
          {repeatedApps.map((app, index) => (
            <div className="carousel-item" key={index}>
              <img src={app.img} alt={app.name} />
              <span className="app-name">{app.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppCarousel;
