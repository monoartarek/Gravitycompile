import React from "react";
import "./GravitySection.css"; // CSS specific to this section
import gravityImg from "../assets/gravity/about_poster.webp"; // your image

const GravitySection = () => {
  return (
    <section className="gravity-section">
      {/* Header */}
      <h2 className="gravity-header">
        Gravity Compile Technology - Built from Experience
      </h2>

      {/* Content: Image + Description */}
      <div className="gravity-content">
        <div className="gravity-image">
          <img src={gravityImg} alt="Gravity Technology" />
        </div>
        <div className="gravity-about">
          <p>
            Gravity-Compile Technology leverages years of experience to deliver
            high-performance solutions. Designed for efficiency and reliability,
            it ensures seamless integration into any environment. 
             vitae nulla, corporis mollitia distinctio recusandae velit!
             id consequatur placeat qui ex, molestias consequuntur ipsam! Ad perferendis est minima odit ut inventore rerum impedit vitae nulla, corporis mollitia distinctio recusandae velit!
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis veritatis dolore dolores minima in obcaecati! Ratione sit fugiat laboriosam esse ad hic veritatis repellat, cum ipsa, id consequatur placeat qui ex, molestias consequuntur ipsam! Ad perferendis est minima odit ut inventore rerum impedit
          </p>
        </div>
      </div>
    </section>
  );
};

export default GravitySection;
