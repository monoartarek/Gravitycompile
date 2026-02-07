import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutUsHero from "../components/AboutUsHero";
import GravitySection from "../components/GravitySection";
import AppCarousel from "../components/AppCarousel";
import TalkToExpert from "../components/TalkToExpert";
import CelebrityCarousel from "../components/CelebrityCarousel";

function AboutUs() {
  return (
    <>
      <Header />
      <AboutUsHero />
      <GravitySection />
      <AppCarousel />
      <CelebrityCarousel />
      <TalkToExpert />

      <Footer />
    </>
  );
}

export default AboutUs;
