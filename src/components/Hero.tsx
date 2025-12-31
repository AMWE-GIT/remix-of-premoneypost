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
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/15" />

      <div className="container relative z-10 mx-auto flex flex-col items-center justify-center px-4 py-20 text-center">
        <img
          src="/lovable-uploads/1e6ceb65-666a-4a1e-9283-286a21d449e1.png"
          alt="PMP Logo"
          className="mb-8 h-40 w-40 drop-shadow-lg"
        />
        <h1 className="max-w-4xl animate-fade-in font-cardo text-4xl font-bold tracking-tight text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)] md:text-5xl lg:text-6xl">
          We build and partner on new ventures.
        </h1>
        <p
          className="mb-10 mt-6 max-w-2xl animate-fade-in font-source-sans text-base font-semibold text-white/90 drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] md:text-lg"
          style={{ animationDelay: "0.2s" }}
        >
          PreMoneyPost® builds companies. We explore ideas across industries, collaborate with early-stage founders, and invest selectively.
        </p>
        <div className="flex animate-fade-in flex-col items-center gap-4" style={{ animationDelay: "0.4s" }}>
          <Button onClick={scrollToContact} className="bg-neon px-8 py-6 text-lg text-neon-foreground hover:bg-neon/80">
            Start a Conversation
          </Button>
          <button
            onClick={scrollToCommunity}
            className="font-source-sans font-semibold text-white/80 underline underline-offset-4 transition-colors hover:text-white"
          >
            Learn about the community
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
