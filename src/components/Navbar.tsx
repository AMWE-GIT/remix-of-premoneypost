
import { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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

  const navigationLinks = [
    { href: "#brands", label: "Brands" },
    { href: "#about", label: "About" },
    { href: "#values", label: "Values" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#111111]/80 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-center h-16 relative">
          <div className="flex items-center gap-8">
            <a href="#" className="text-2xl font-bold tracking-tighter">
              <img src="/lovable-uploads/1e6ceb65-666a-4a1e-9283-286a21d449e1.png" alt="PMP Logo" className="h-6" />
            </a>
            <ul className="hidden md:flex space-x-8 text-sm font-light">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:opacity-70 transition-opacity">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <button className="md:hidden absolute right-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] bg-[#111111] text-white border-l border-[#222]">
              <div className="flex flex-col gap-6 mt-8">
                <a href="#" className="text-2xl font-bold tracking-tighter mb-4">
                  <img src="/lovable-uploads/1e6ceb65-666a-4a1e-9283-286a21d449e1.png" alt="PMP Logo" className="h-6" />
                </a>
                <nav className="flex flex-col gap-4">
                  {navigationLinks.map((link) => (
                    <a 
                      key={link.href}
                      href={link.href} 
                      className="text-lg hover:text-gray-300 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
