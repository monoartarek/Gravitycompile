import Header from "../components/Header";
import Footer from "../components/Footer";
import DownloadAppHero from "../components/DownloadAppHero";
import AppPreview from "../components/AppPreview";
import DownloadDemo from "../components/DownloadDemo";
import Features from "../components/Features";


function DownloadApp() {
  return (
    <>
      <Header />
      <DownloadAppHero />
      <Features />
      <AppPreview />
      <DownloadDemo />


      <Footer />
    </>
  );
}

export default DownloadApp;
