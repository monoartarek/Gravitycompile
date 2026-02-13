import React from "react";
import "./PricingSection.css";
import { Link } from "react-router-dom";

export default function PricingSection() {
  return (
    <section className="pricing-section">
      <h2 className="pricing-title">Plans & Pricing</h2>

      <div className="pricing-grid">
        {/* Rental Plan */}
        <div className="pricing-card blue">
          <div className="card-header">
            <span className="crown">👑</span>
            <h3>Rental Plan</h3>
            <p className="subtitle">Best for Agencies & Growing Business</p>
          </div>

          <div className="price">
            <h1>$1000 <span>/Monthly</span></h1>
            <p className="discount">
              <del>$2000</del> <strong>50% OFF</strong>
            </p>
          </div>

          <Link to="/contact-us">
            <button className="cta-btn">Start Now</button>
          </Link>

          <div className="features1">
            <h4>Includes</h4>
            <ul>
              <li>✔ Android App Publish</li>
              <li>✔ 70 Gifts, 100 Frames & 20 Entry Rides</li>
              <li>✔ Complete Tech Management</li>
              <li>✔ 1 Website</li>
              <li>✔ Logo, Banner & Theme Design</li>
              <li>✔ Super Admin & Admin Dashboard</li>
              <li>✔ Agency & Reseller Dashboard</li>
              <li>✔ Dedicated Support Manager</li>
            </ul>
            <p className="note">
              Note: A one-time App setup fee of $500 will be charged for
              publishing the App on Play Store and App Store.
            </p>
          </div>
        </div>

        {/* Ownership Plan */}
        <div className="pricing-card purple">
          <div className="card-header">
            <span className="crown">👑 👑</span>
            <h3>Ownership Plan</h3>
            <p className="subtitle">Best for Brands & Enterprise</p>
          </div>

          <div className="price">
            <h1>Get a quote</h1>
            <p className="custom">Custom Pricing Based on Your Need</p>
          </div>

          <Link to="/contact-us">
            <button className="cta-btn">Contact Sales</button>
          </Link>

          <div className="features1">
            <h4>Includes</h4>
            <ul>
              <li>✔ Lifetime App Ownership</li>
              <li>✔ Android App Publish</li>
              <li>✔ 70 Gifts, 100 Frames & 20 Entry Rides</li>
              <li>✔ 1 Website</li>
              <li>✔ Logo, Banner & Theme Design</li>
              <li>✔ Super Admin & Admin Dashboard</li>
              <li>✔ Agency & Reseller Dashboard</li>
              <li>✔ Dedicated Support Manager</li>
              <li>✔ Free Tech Management for 3 Months</li>
              <li>✔ Free Bug Fixes for 3 Months</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
