import React from "react";
import "./TermsAndConditions.css";
import Header2 from "./header2";
import Footer from "./Footer";

export default function TermsAndConditions() {
  return (
    <><Header2 />
    <div className="terms-container">

      <div className="terms-header">
        <h1>Terms & Conditions</h1>
        <p>Last Updated: January 2026</p>
      </div>

      <div className="terms-content">

        <section>
          <h2>1. Introduction</h2>
          <p>
            Welcome to PikiLive. These Terms and Conditions govern your
            use of our website, applications, and services. By accessing or using
            our services, you agree to comply with these terms.
          </p>
        </section>

        <section>
          <h2>2. Company Overview</h2>
          <p>
            PikiLive is a technology company providing software
            development, live streaming solutions, web applications, mobile
            applications, and digital consultation services for individuals
            and businesses.
          </p>
        </section>

        <section>
          <h2>3. User Accounts</h2>
          <p>
            Users may be required to create an account to access certain
            features. You are responsible for maintaining the confidentiality
            of your account credentials and for all activities under your account.
          </p>
        </section>

        <section>
          <h2>4. Acceptable Use</h2>
          <ul>
            <li>No illegal or harmful activity.</li>
            <li>No unauthorized system access.</li>
            <li>No copying or reverse engineering proprietary software.</li>
            <li>Respect intellectual property rights.</li>
          </ul>
        </section>

        <section>
          <h2>5. Intellectual Property</h2>
          <p>
            All content, designs, code, and software provided by PikiLive
            are protected by intellectual property laws. Users may not reproduce
            or distribute without written permission.
          </p>
        </section>

        <section>
          <h2>6. Payments & Services</h2>
          <p>
            Paid services must be completed according to agreed contracts.
            Prices and service offerings may change without prior notice.
          </p>
        </section>

        <section>
          <h2>7. Limitation of Liability</h2>
          <p>
            PikiLive shall not be liable for indirect or incidental
            damages resulting from the use or inability to use our services.
          </p>
        </section>

        <section>
          <h2>8. Privacy</h2>
          <p>
            Your use of our services is also governed by our Privacy Policy.
          </p>
        </section>

        <section>
          <h2>9. Termination</h2>
          <p>
            We reserve the right to suspend or terminate access to our services
            if users violate these terms.
          </p>
        </section>

        <section>
          <h2>10. Changes to Terms</h2>
          <p>
            PikiLive may update these Terms & Conditions at any time.
            Continued use of the service means you accept updated terms.
          </p>
        </section>

        <section>
          <h2>11. Contact</h2>
          <p>
            For any questions regarding these Terms, please contact:
            support@pikilive.com
          </p>
        </section>

      </div>

    </div>

    <Footer />
    </>
  );
}
