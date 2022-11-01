import { AboutUsSection } from "./components/AboutUsSection";
import { ContactSection } from "./components/ContactSection";
import { FaqSection } from "./components/FaqSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { NavbarSection } from "./components/NavbarSection";
import { ServicesSection } from "./components/ServicesSection";
import { WhatsappButton } from "./components/WhatsappButton";

function App() {
  return (
    <>
      <NavbarSection />
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <FaqSection />
      <ContactSection />
      <Footer />
      <WhatsappButton />
    </>
  );
}

export default App;
