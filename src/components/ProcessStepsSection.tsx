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
      title: "Explore working together",
      description: "Collaboration, co-building or selective investment. We explore ways to work together."
    },
    {
      number: "4",
      title: "Community",
      description: "Be part of a community of like-minded founders supporting each other on the journey. Whether we work together now or later."
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-cardo font-bold mb-12 text-left">
            What's next?
          </h2>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: false,
            containScroll: "trimSnaps",
            dragFree: true,
          }}
          setApi={setApi}
          className="w-full touch-pan-x"
        >
          <CarouselContent className="-ml-0">
            {steps.map((step, index) => (
              <CarouselItem 
                key={index} 
                className="pr-4 md:basis-1/2 lg:basis-[30%]"
              >
                <div className="p-6 h-full relative flex">
                  {/* Large number */}
                  <span className="text-7xl md:text-8xl font-bold text-neon mr-4 leading-none">
                    {step.number}
                  </span>
                  
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-cardo font-semibold mb-2 text-white">{step.title}</h3>
                    <p className="text-base md:text-lg font-source-sans font-semibold text-white/80">{step.description}</p>
                  </div>
                  
                </div>
              </CarouselItem>
            ))}
            
            {/* CTA Item */}
            <CarouselItem className="pl-2 md:basis-1/3 lg:basis-[18%]">
              <div className="h-full flex items-center justify-start">
                <Button 
                  onClick={scrollToContact}
                  className="text-xl px-10 py-7 font-semibold"
                >
                  Let's Begin
                </Button>
              </div>
            </CarouselItem>
          </CarouselContent>
          
          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-2 mx-auto">
            <CarouselPrevious 
              className={`relative static translate-y-0 ${
                canScrollPrev 
                  ? "" 
                  : "opacity-50 cursor-not-allowed"
              }`} 
              disabled={!canScrollPrev}
            />
            <CarouselNext 
              className={`relative static translate-y-0 ${
                canScrollNext 
                  ? "" 
                  : "opacity-50 cursor-not-allowed"
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
