import Header from "../components/Header";
import Footer from "../components/Footer";
import PlansPricingHero from "../components/PlansPricingHero";
import PricingSection from "../components/PricingSection";
import GamePricingSection from "../components/GamePricingSection";
import GamesInApp from "../components/GamesInApp";
import ResellerSection from "../components/ResellerSection";
import GravitySection from "../components/GravitySection";

function PlansPricing() {
  return (
    <>
      <Header />
      <PlansPricingHero />
      <GravitySection />
      <PricingSection />
      <GamePricingSection />
      <GamesInApp />
      <ResellerSection />
      <Footer />
    </>
  );
}

export default PlansPricing;
