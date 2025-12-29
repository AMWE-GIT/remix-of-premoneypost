import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";

const ValuesSection = () => {
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [api, setApi] = useState<any>(null);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    // Listen for all relevant events to ensure buttons update correctly
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    api.on("scroll", onSelect);
    
    // Call once to set initial state
    onSelect();

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
      api.off("scroll", onSelect);
    };
  }, [api]);

  const values = [
    { 
      title: "Innovation", 
      description: "We constantly push boundaries and explore new possibilities in everything we do. Innovation is not just encouraged—it's essential to our identity." 
    },
    { 
      title: "Excellence", 
      description: "We hold ourselves to the highest standards in every aspect of our work. Mediocrity is never an option." 
    },
    { 
      title: "Integrity", 
      description: "We believe in transparency, honesty, and ethical business practices. Our word is our bond." 
    },
    { 
      title: "Human Connection", 
      description: "At the heart of our brands is a deep understanding of human needs, desires, and emotions. We create to connect." 
    },
    { 
      title: "Sustainability", 
      description: "We're committed to responsible business practices that respect our planet and contribute positively to our communities." 
    }
  ];

  return (
    <section id="values" className="py-4 bg-black">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 pl-4">Values</h2>
        </div>
        
        <div>
          <Carousel
            opts={{
              align: "start",
              loop: false,
              containScroll: "trimSnaps",
              dragFree: false, // Changed to false for more predictable scrolling
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="-ml-0">
              {values.map((value, index) => (
                <CarouselItem 
                  key={index} 
                  className="pr-4 md:basis-1/2 lg:basis-[28%]"
                >
                  <div className="p-6 h-full relative">
                    <h3 className="text-2xl font-medium mb-4 text-white">{value.title}</h3>
                    <p className="text-white">{value.description}</p>
                    
                    {/* Add separator after each item except the last one */}
                    {index < values.length - 1 && (
                      <Separator orientation="vertical" className="absolute right-0 top-6 bottom-6 h-auto bg-white/20" />
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Center the navigation buttons */}
            <div className="flex justify-center mt-8 gap-2 mx-auto">
              <CarouselPrevious 
                className={`relative static text-white ${
                  canScrollPrev 
                    ? "bg-[#65B741] hover:bg-[#4E9F3D]" 
                    : "bg-gray-500 cursor-not-allowed"
                }`} 
                disabled={!canScrollPrev}
              />
              <CarouselNext 
                className={`relative static text-white ${
                  canScrollNext 
                    ? "bg-[#65B741] hover:bg-[#4E9F3D]" 
                    : "bg-gray-500 cursor-not-allowed"
                }`} 
                disabled={!canScrollNext}
              />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
