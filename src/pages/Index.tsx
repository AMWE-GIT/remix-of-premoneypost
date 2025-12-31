import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import WhatWeDoSection from "../components/WhatWeDoSection";
import ProcessStepsSection from "../components/ProcessStepsSection";
import CommunitySection from "../components/CommunitySection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <WhatWeDoSection />
      <ProcessStepsSection />
      <CommunitySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
