import React from "react";
import "./CelebrityCarousel.css";

import celebImg1 from "../assets/celebrity/akthepanda.webp";
import celebImg2 from "../assets/celebrity/alexhendy.webp";
import celebImg3 from "../assets/celebrity/amelia.webp";
import celebImg4 from "../assets/celebrity/antsxi.webp";
import celebImg5 from "../assets/celebrity/arshdeep.webp";

import instaLogo from "../assets/celebrity/instagram.png";
import tiktokLogo from "../assets/celebrity/tiktok.png";

// Celebrity data
const celebrities = [
  {
    img: celebImg1,
    name: "akthepanda",
    profession: "Actor",
    instagram: "1.2M",
    tiktok: "500K",
  },
  {
    img: celebImg2,
    name: "alexhendy",
    profession: "Singer",
    instagram: "950K",
    tiktok: "800K",
  },
  {
    img: celebImg3,
    name: "amelia",
    profession: "Influencer",
    instagram: "2.1M",
    tiktok: "1.5M",
  },
  {
    img: celebImg4,
    name: "antsxi",
    profession: "Dancer",
    instagram: "1.5M",
    tiktok: "700K",
  },
  {
    img: celebImg5,
    name: "arshdeep",
    profession: "Model",
    instagram: "900K",
    tiktok: "600K",
  },
];

// Repeat for infinite scroll
const repeatedCelebrities = [...celebrities, ...celebrities, ...celebrities];

const CelebrityCarousel = () => {
  return (
    <section className="celebrity-section">
      <h2 className="celebrity-title">Our Celebrity Clients</h2>

      <div className="celebrity-viewport">
        <div className="celebrity-track">
          {repeatedCelebrities.map((celeb, index) => (
            <div className="celebrity-item" key={index}>
              <img src={celeb.img} alt={celeb.name} className="celebrity-photo" />
              <div className="celebrity-info">
                <div classname="bioname">
                <h3 className="celebrity-name">{celeb.name}</h3>
                <p className="celebrity-profession">{celeb.profession}</p>
                </div>
                <div className="celebrity-socials">
                  <div className="celebrity-social">
                    <img src={instaLogo} alt="Instagram" />
                    <span>{celeb.instagram}</span>
                  </div>
                  <div className="celebrity-social">
                    <img src={tiktokLogo} alt="TikTok" />
                    <span>{celeb.tiktok}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CelebrityCarousel;