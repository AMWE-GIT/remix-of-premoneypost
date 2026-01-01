import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCommunity = () => {
    document.getElementById("community")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-black">
      <img
        src={heroBanner}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Contrast + seamless blend into next section */}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black" />

      <div className="container relative z-10 mx-auto flex flex-col items-center justify-center px-4 py-20 text-center">
        <img
          src="/lovable-uploads/1e6ceb65-666a-4a1e-9283-286a21d449e1.png"
          alt="PMP Logo"
          className="h-40 w-40 drop-shadow-lg"
        />
        <h1 className="mt-6 max-w-6xl mx-auto text-center animate-fade-in font-cardo text-5xl font-bold tracking-tight text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)] md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl 2xl:whitespace-nowrap [text-wrap:balance]">
          We build and partner on new ventures.
        </h1>
        <h2
          className="mb-10 mt-6 max-w-4xl animate-fade-in font-cardo text-2xl font-bold text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] md:text-3xl lg:text-4xl"
          style={{ animationDelay: "0.15s" }}
        >
          PreMoneyPost<sup className="text-sm align-super">®</sup> builds companies, explores ideas across industries, and invests early alongside founders.
        </h2>
        <div className="flex animate-fade-in flex-col items-center gap-4" style={{ animationDelay: "0.4s" }}>
          <Button onClick={scrollToContact} className="px-8 py-6 text-lg">
            Start a Conversation
          </Button>
          <button
            onClick={scrollToCommunity}
            className="font-source-sans font-semibold text-white/80 underline underline-offset-4 transition-colors hover:text-white"
          >
            Join the PreMoneyPost Community
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
