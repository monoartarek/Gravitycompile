import "./DownloadDemo.css";
import demoImg from "../assets/others_image/hero_download.webp";
import qrImg from "../assets/others_image/Gravity Compile.png";

const DownloadDemo = () => {
  return (
    <section className="download-section">
      <h2 className="download-heading">Download Demo App</h2>

      <div className="download-card">
        {/* Left Content */}
        <div className="download-content">
          <h3>
            Fully Functional <br />
            Audio-Video Live Streaming App
          </h3>

          <p>
            Experience real time audio & video live with powerful features
          </p>
        </div>

        {/* Right Image */}
        <div className="download-image">
          <img src={qrImg} alt="QR Code" />
            <span>Download Apk</span>
        </div>
      </div>
    </section>
  );
};

export default DownloadDemo;
