import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#111111]/80 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <nav className="grid grid-cols-3 items-center h-16">
          {/* Left: Community */}
          <div className="flex justify-start">
            <a 
              href="#community" 
              className="text-sm font-source-sans font-semibold hover:opacity-70 transition-opacity"
            >
              Community
            </a>
          </div>
          
          {/* Center: Logo */}
          <div className="flex justify-center">
            <a href="#" className="text-2xl font-bold tracking-tighter">
              <img src="/lovable-uploads/1e6ceb65-666a-4a1e-9283-286a21d449e1.png" alt="PMP Logo" className="h-6" />
            </a>
          </div>
          
          {/* Right: Contact */}
          <div className="flex justify-end">
            <a 
              href="#contact" 
              className="text-sm font-source-sans font-semibold hover:opacity-70 transition-opacity"
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
