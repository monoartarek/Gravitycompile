import React from "react";
import "./ResellerSection.css";
import { Link } from "react-router-dom"; // Import Link for navigation
// import handshakeImage from "../assets/others_image/8f6191bf-1cce-461a-bda6-3ad055cf00b7.png"; // update path if needed

export default function ResellerSection() {
  return (
    <section className="reseller-section">
      <div className="reseller-content">
        {/* Text area */}
        <div className="text-area">
          <h2>Become Our Reseller Partner</h2>
          <p>
            Reseller Partners are companies or individuals who resell Gigo products and
            services under their own network, or refer potential clients to us.
          </p>
          <Link to="/contact-us">
            <button className="btn-partner">Become Partner</button>
          </Link>
        </div>

        {/* Image area */}
        {/* <div className="image-area">
          <img src={handshakeImage} alt="Handshake" />
        </div> */}
      </div>
    </section>
  );
}
