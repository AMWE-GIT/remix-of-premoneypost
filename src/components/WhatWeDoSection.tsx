const WhatWeDoSection = () => {
  const cards = [
    {
      title: "Build",
      description: "We build our own companies. From early ideas to launched products, we create ventures we intend to own and grow.",
      gradient: "from-neon/20 to-neon/5"
    },
    {
      title: "Explore",
      description: "We explore ideas across industries. We spend time understanding problems, markets, and opportunities before committing to what to build or back.",
      gradient: "from-[#9b87f5]/20 to-[#7E69AB]/10"
    },
    {
      title: "Collaborate",
      description: "We collaborate early with founders. When there's overlap in thinking and ambition, we get involved early to shape direction and execution.",
      gradient: "from-neon/20 to-neon/5"
    },
    {
      title: "Invest",
      description: "We invest selectively. In some cases, we commit capital or resources to ideas and companies with clear potential.",
      gradient: "from-[#9b87f5]/20 to-[#7E69AB]/10"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-black/50 hover:border-white/20 transition-all duration-300"
            >
              {/* Image placeholder with 16:9 aspect ratio */}
              <div className={`aspect-video w-full bg-gradient-to-br ${card.gradient}`} />
              
              {/* Content */}
              <div className="p-6 flex-grow">
                <h3 className="text-xl md:text-2xl font-cardo font-semibold mb-3 text-white">{card.title}</h3>
                <p className="font-source-sans font-semibold text-base text-white/80 leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
