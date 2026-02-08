import React from "react";
import "./GamePricingSection.css";
import gameImage from "../assets/others_image/game_bg.webp";
import { Link } from "react-router-dom";  

const GamePricingSection = () => {
  return (
    <section className="game-pricing-wrapper">
      {/* Header */}
      <h1 className="game-pricing-header">Games Pricing</h1>

      {/* Main Card */}
      <div className="game-pricing-section">
        {/* Left: Image */}
        <div className="game-pricing-image">
          <img src={gameImage} alt="Game Promo" />
        </div>

        {/* Right: Info */}
        <div className="game-pricing-info">
          <h2>In-App Game Rental Plan</h2>

          <p><strong>Setup Fee:</strong> $500</p>
          <p><strong>Monthly Rental:</strong> 20% of Game Profit (GGR)</p>

          
          <Link to="/contact-us">
           <button className="start-button">Start Now</button>
          </Link>

          <p className="note">
            A $500 credit recharge is required for gaming. This will be used for
            in-game billing and refunded if unused.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GamePricingSection;
