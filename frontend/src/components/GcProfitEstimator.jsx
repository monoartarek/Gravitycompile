import { useState } from "react";
import "./GcProfitEstimator.css";

export default function GcProfitEstimator() {
  const [creators, setCreators] = useState(336);
  const [revenue, setRevenue] = useState(700);

  const profit = Math.round(creators * revenue * 0.1);

  return (
    <section className="gc-pe-wrapper">
    <h1 className="gc-pe-title">Profit Estimator</h1>
      <div className="gc-pe-container">

        {/* LEFT SIDE */}
        <div className="gc-pe-left">
          <h2 className="gc-pe-title">
            Profit <span>Estimator</span>
          </h2>

          {/* Creators */}
          <div className="gc-pe-control">
            <div className="gc-pe-label-row">
              <label>Creators</label>
              <span>{creators}</span>
            </div>
            <input
              className="gc-pe-slider"
              type="range"
              min="0"
              max="1000"
              value={creators}
              onChange={(e) => setCreators(e.target.value)}
            />
          </div>

          {/* Revenue */}
          <div className="gc-pe-control">
            <div className="gc-pe-label-row">
              <label>Avg. Revenue / Creator</label>
              <span>${revenue}</span>
            </div>
            <input
              className="gc-pe-slider"
              type="range"
              min="0"
              max="2000"
              value={revenue}
              onChange={(e) => setRevenue(e.target.value)}
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="gc-pe-right">
          <p className="gc-pe-subtitle">YOUR MONTHLY REVENUE (10%)</p>
          <h1 className="gc-pe-amount">
            ${profit.toLocaleString()}
          </h1>
          <button className="gc-pe-btn">Secure License</button>
        </div>

      </div>
    </section>
  );
}
