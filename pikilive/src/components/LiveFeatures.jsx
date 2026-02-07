import React from "react";
import "./LiveFeatures.css";
import gravityImg from "../assets/gravity/about_poster.webp";

const features = [1, 2, 3, 4, 5];

const LiveFeature = () => {
  return (
    <section className="gc-live-feature-section">
      <h2 className="gc-live-feature-header">Powerful Live Features</h2>

      {features.map((_, index) => (
        <div
          key={index}
          className={`gc-live-feature-content ${
            index % 2 === 1 ? "gc-reverse" : ""
          }`}
        >
          <div className="gc-live-feature-image">
            <img src={gravityImg} alt="Gravity Technology" />
          </div>

          <div className="gc-live-feature-about">
            <h6>PK Battle – Real-Time Competitive Live Streaming</h6>
            <p>
              Real-time PK Battles turn passive viewers into active participants—
              bringing excitement, tension, and fan interaction to your live
              streams.
            </p>
            <ul>
              <li>Dual-host interactive mode</li>
              <li>Real-time scoreboards & countdown timers</li>
              <li>Audience gifting</li>
              <li>Custom battle themes</li>
              <li>Seamless transitions</li>
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default LiveFeature;
