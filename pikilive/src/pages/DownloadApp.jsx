import Header from "../components/Header";
import Footer from "../components/Footer";
import DownloadAppHero from "../components/DownloadAppHero";
import AppPreview from "../components/AppPreview";
import DownloadDemo from "../components/DownloadDemo";
import Features from "../components/Features";
import GravitySection from "../components/GravitySection";


function DownloadApp() {
  return (
    <>
      <Header />
      <DownloadAppHero />
      <Features />
      <AppPreview />
      <DownloadDemo />
      <GravitySection />


      <Footer />
    </>
  );
}

export default DownloadApp;
