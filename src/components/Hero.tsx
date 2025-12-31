import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToCommunity = () => {
    document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="flex items-center justify-center relative bg-black">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10 py-20 flex flex-col items-center justify-center text-center min-h-screen">
        <img 
          src="/lovable-uploads/1e6ceb65-666a-4a1e-9283-286a21d449e1.png" 
          alt="PMP Logo" 
          className="mb-8 w-40 h-40"
        />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-cardo font-bold tracking-tight mb-6 max-w-4xl animate-fade-in">
          We build and partner on new ventures.
        </h1>
        <p className="text-base md:text-lg font-source-sans font-semibold text-white max-w-2xl mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          PreMoneyPost® builds companies. We explore ideas across industries, collaborate with early-stage founders, and invest selectively.
        </p>
        <div className="flex flex-col items-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            onClick={scrollToContact} 
            className="bg-neon hover:bg-neon/80 text-neon-foreground text-lg px-8 py-6"
          >
            Start a Conversation
          </Button>
          <button 
            onClick={scrollToCommunity}
            className="text-white/80 hover:text-white underline underline-offset-4 transition-colors font-source-sans font-semibold"
          >
            Learn about the community
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
