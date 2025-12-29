
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ValuesSection from "../components/ValuesSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <ValuesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
