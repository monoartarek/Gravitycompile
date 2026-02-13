// import TalkToExpert from "./components/TalkToExpert";

// function App() {
//   return <TalkToExpert />;
// }

// export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import DownloadApp from "./pages/DownloadApp";
import PlansPricing from "./pages/PlansPricing";
import ContactUs from "./pages/ContactUs";
import WhatsAppChat from "./components/WhatsAppChat";
import TermsAndConditions from "./components/TermsAndConditions";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
// import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/download-app" element={<DownloadApp />} />
        <Route path="/plans-pricing" element={<PlansPricing />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/faqs" element={<FAQ />} />
        <Route path="/blogs" element={<Blog />} />
        {/* <Route path="/privacy-policy" element={<PrivacyPolicy />} /> */}
        
      </Routes>
      <WhatsAppChat />
    </BrowserRouter>
  );
}

export default App;
