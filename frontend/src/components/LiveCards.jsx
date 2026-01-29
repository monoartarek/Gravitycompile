import { useState } from "react";
import "./LiveCards.css";

import videoPhone from "../assets/others_image/liveCard1.webp";
import audioPhone from "../assets/others_image/liveCard2.webp";

export default function LiveCards() {
  const [activeCard, setActiveCard] = useState("video");

  return (
    <section className="lec-section">
     <h1 className="lec-header">Audio-Video Live</h1>
      <div className="lec-container">
        {/* VIDEO CARD */}
        <div
          className={`lec-card lec-video ${
            activeCard === "video" ? "lec-active" : ""
          }`}
          onClick={() => setActiveCard("video")}
        >
          <div className="lec-content">
            <h2>Video Live</h2>
            <p>Interactive video live streaming for modern communities.</p>
            <ul>
              <li>Social Live</li>
              <li>PK Battles</li>
              <li>Esports Streaming</li>
              <li>Education</li>
            </ul>
            <button>Launch Now</button>
          </div>

          {activeCard === "video" && (
            <div className="lec-image-wrap">
              <img src={videoPhone} alt="Video Live" />
            </div>
          )}
        </div>

        {/* AUDIO CARD */}
        <div
          className={`lec-card lec-audio ${
            activeCard === "audio" ? "lec-active" : ""
          }`}
          onClick={() => setActiveCard("audio")}
        >
          <div className="lec-content">
            <h2>Audio Live</h2>
            <p>Voice rooms and real-time audio experiences.</p>
            <ul>
              <li>Music Events</li>
              <li>Talk Shows</li>
              <li>PK Battles</li>
              <li>Multi-seat Rooms</li>
            </ul>
            <button>Launch Now</button>
          </div>

          {activeCard === "audio" && (
            <div className="lec-image-wrap">
              <img src={audioPhone} alt="Audio Live" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
