
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section className="flex items-center justify-center relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10 py-20 flex flex-col items-center justify-center text-center min-h-screen">
        <img 
          src="/lovable-uploads/1e6ceb65-666a-4a1e-9283-286a21d449e1.png" 
          alt="PMP Logo" 
          className="mb-8 w-40 h-40" // Increased size by ~30% from w-32 h-32 to w-40 h-40
        />
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl animate-fade-in">
          Crafting Exceptional
          <span className="block">Brands & Experiences</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          We build and nurture innovative brands that connect with people and drive business forward.
        </p>
        <Button 
          onClick={scrollToContact} 
          className="bg-[#65B741] hover:bg-[#4E9F3D] text-white text-lg px-8 py-6 animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          Contact
        </Button>
      </div>
    </section>
  );
};

export default Hero;
