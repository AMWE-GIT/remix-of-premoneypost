import cardBuild from "@/assets/card-build.jpg";
import cardExplore from "@/assets/card-explore.jpg";
import cardCollaborate from "@/assets/card-collaborate.jpg";
import cardInvest from "@/assets/card-invest.jpg";

const WhatWeDoSection = () => {
  const cards = [
    {
      title: "Build",
      description: "Launch companies from idea to operation, shaping ventures at every stage.",
      image: cardBuild
    },
    {
      title: "Explore",
      description: "We explore ideas across industries, studying real problems, markets, and customer behavior to decide which ideas to build into companies.",
      image: cardExplore
    },
    {
      title: "Collaborate",
      description: "We collaborate early with founders. When there's overlap in thinking and ambition, we get involved early to shape direction and execution.",
      image: cardCollaborate
    },
    {
      title: "Invest",
      description: "Provide early-stage capital and partner with founders on ventures across MENA and beyond.",
      image: cardInvest
    }
  ];

  return (
    <section className="pb-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-[#050505] hover:border-white/20 transition-all duration-300"
            >
              {/* Image with 16:9 aspect ratio and neon green tint */}
              <div className="aspect-video w-full overflow-hidden relative">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-neon/30 mix-blend-multiply" />
              </div>
              
              {/* Content */}
              <div className="p-6 flex-grow">
                <h3 className="text-2xl md:text-3xl font-cardo font-semibold mb-3 text-white">{card.title}</h3>
                <p className="font-source-sans font-semibold text-base md:text-lg text-white/80 leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
