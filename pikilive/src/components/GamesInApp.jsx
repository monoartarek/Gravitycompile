import React from "react";
import "./GamesInApp.css";

import gameImg1 from "../assets/games_image/fortune_gems.webp";
import gameImg2 from "../assets/games_image/gates_of_olympus.webp";
import gameImg3 from "../assets/games_image/happy_turntable.webp";
import gameImg4 from "../assets/games_image/lucky_slot.webp";
import gameImg5 from "../assets/games_image/super_turntable.webp";

const gameImages = [gameImg1, gameImg2, gameImg3, gameImg4, gameImg5];

// repeat images to create infinite effect
const repeatedGameImages = [...gameImages, ...gameImages, ...gameImages];

const GamesInApp = () => {
  return (
    <section className="gamesapp-section">
      <h2 className="gamesapp-title">Apps We Served as Agency</h2>

      <div className="gamesapp-viewport">
        <div className="gamesapp-track">
          {repeatedGameImages.map((img, index) => (
            <div className="gamesapp-item" key={index}>
              <img src={img} alt="Game App Logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesInApp;
