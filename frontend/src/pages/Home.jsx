import Header from "../components/Header";
import Hero from "../components/Hero";
import AppPreview from "../components/AppPreview";
import GravitySection from "../components/GravitySection";
import AppCarousel from "../components/AppCarousel";
import PricingSection from "../components/PricingSection";
import GamePricingSection from "../components/GamePricingSection";
import GamesInApp from "../components/GamesInApp";
import LiveFeatures from "../components/LiveFeatures";
import WhyChooseUs from "../components/WhyChooseUs";
import GcProfitEstimator from "../components/GcProfitEstimator";
import DownloadDemo from "../components/DownloadDemo";
import TalkToExpert from "../components/TalkToExpert";
import Footer from "../components/Footer";
import LiveCards from "../components/LiveCards";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AppPreview />
      <GravitySection />
      <AppCarousel />
      <LiveCards />
      <PricingSection />
      <GamePricingSection />
      <GamesInApp />
      <LiveFeatures />
      <WhyChooseUs />
      <GcProfitEstimator />
      <DownloadDemo />
      <TalkToExpert />
      <Footer />
    </>
  );
}

export default Home;
