import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const ProcessStepsSection = () => {
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [api, setApi] = useState<any>(null);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    api.on("select", onSelect);
    api.on("reInit", onSelect);
    api.on("scroll", onSelect);
    
    onSelect();

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
      api.off("scroll", onSelect);
    };
  }, [api]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const steps = [
    {
      number: "1",
      title: "Start a conversation",
      description: "Reach out with a short note about your idea or company."
    },
    {
      number: "2",
      title: "Explore possibilities",
      description: "We talk through opportunities, challenges, and potential ways to work together."
    },
    {
      number: "3",
      title: "Decide what makes sense",
      description: "Collaboration, co-building, or selective investment happens only when there's clear alignment."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-cardo font-bold mb-8 text-left pl-4">
          What's next?
        </h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: false,
            containScroll: "trimSnaps",
            dragFree: false,
          }}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent className="-ml-0">
            {steps.map((step, index) => (
              <CarouselItem 
                key={index} 
                className="pr-4 md:basis-1/2 lg:basis-[30%]"
              >
                <div className="p-6 h-full relative flex">
                  {/* Large number */}
                  <span className="text-7xl md:text-8xl font-bold text-neon/40 mr-4 leading-none">
                    {step.number}
                  </span>
                  
                  <div className="flex flex-col justify-center">
                    <h3 className="text-xl md:text-2xl font-medium mb-3 text-white">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                  
                  {/* Separator after each item */}
                  <Separator orientation="vertical" className="absolute right-0 top-6 bottom-6 h-auto bg-white/20" />
                </div>
              </CarouselItem>
            ))}
            
            {/* CTA Item */}
            <CarouselItem className="pr-4 md:basis-1/2 lg:basis-[30%]">
              <div className="p-6 h-full flex items-center justify-center">
                <Button 
                  onClick={scrollToContact}
                  className="bg-neon hover:bg-neon/80 text-neon-foreground text-xl px-10 py-8 font-semibold"
                >
                  Let's begin →
                </Button>
              </div>
            </CarouselItem>
          </CarouselContent>
          
          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-2 mx-auto">
            <CarouselPrevious 
              className={`relative static text-neon-foreground ${
                canScrollPrev 
                  ? "bg-neon hover:bg-neon/80" 
                  : "bg-gray-500 cursor-not-allowed"
              }`} 
              disabled={!canScrollPrev}
            />
            <CarouselNext 
              className={`relative static text-neon-foreground ${
                canScrollNext 
                  ? "bg-neon hover:bg-neon/80" 
                  : "bg-gray-500 cursor-not-allowed"
              }`} 
              disabled={!canScrollNext}
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default ProcessStepsSection;
