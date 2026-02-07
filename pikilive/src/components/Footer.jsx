import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company Section */}
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/download-app">Download App</a></li>
            <li><a href="/plans-pricing">App Pricing</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Privacy Policy</a></li>
            {/* <li><a href="#">Terms & Conditions</a></li> */}
            <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
        </div>

        {/* Reach Us Section */}
        <div className="footer-column">
          <h3>Reach us at</h3>
          <p>📧 pikilive@gmail.com</p>
          <p>📞 +880 1775215693</p>
        </div>

        {/* Office Section */}
        <div className="footer-column">
          <h3>Office</h3>
          <p>
            Chanmari,Charkamlapur,<br />
            Faridpur shadar<br />
            Faridpur,Dhaka
          </p>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} PikiLive. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;



