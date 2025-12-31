import { useState } from 'react';
import { Button } from "@/components/ui/button";
import CommunityModal from './CommunityModal';

const CommunitySection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="community" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        {/* Full-width responsive box */}
        <div className="relative w-full aspect-[2/1] md:aspect-[3/1] lg:aspect-[4/1] rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f1a]">
          {/* Background pattern overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--neon))_1px,_transparent_1px)] bg-[length:40px_40px]" />
          </div>
          
          {/* Content container - bottom half */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 lg:p-12">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-cardo font-bold text-foreground mb-3">
                The PreMoneyPost® Community
              </h2>
              <p className="font-pt-serif text-sm md:text-base text-muted-foreground mb-6">
                A small, private network of founders and early-stage leaders sharing ideas, feedback, and trusted introductions.
              </p>
              
              <Button 
                onClick={() => setModalOpen(true)}
                className="bg-neon hover:bg-neon/80 hover:shadow-lg hover:shadow-neon/20 text-neon-foreground font-medium px-6 py-3 rounded-xl transition-all duration-300"
              >
                Request an invite
              </Button>
              
              <p className="text-gray-500 text-xs mt-3">
                Invites are limited and extended based on engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <CommunityModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
};

export default CommunitySection;
