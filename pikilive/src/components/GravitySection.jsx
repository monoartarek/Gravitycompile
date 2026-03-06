import React from "react";
import "./GravitySection.css"; // CSS specific to this section
// import gravityImg from "../assets/gravity/about_poster.webp"; // your image
import gravityVideo from "../assets/others_image/promoVideo.mp4"; // your video

const GravitySection = () => {
  return (
    <section className="gravity-section">
      {/* Header */}
      <h2 className="gravity-header">
        Piki Live Technology - Built from Experience
      </h2>

      {/* Content: Image + Description */}
      <div className="gravity-content">
            <div className="gravity-video">
              <video autoPlay loop muted playsInline>
                <source src={gravityVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
       
      </div>
    </section>
  );
};

export default GravitySection;
