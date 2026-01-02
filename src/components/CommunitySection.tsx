import { useState } from 'react';
import { Button } from "@/components/ui/button";
import CommunityModal from './CommunityModal';
import communityBanner from '@/assets/community-banner.jpg';

const CommunitySection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="community" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        {/* Full-width responsive box */}
        <div 
          className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[3/1] rounded-2xl overflow-hidden cursor-pointer bg-black"
          onClick={() => setModalOpen(true)}
        >
          {/* Background fill layer - blurred to fill edges */}
          <img 
            src={communityBanner} 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover scale-110 blur-md brightness-50 pointer-events-none"
            loading="lazy"
            decoding="async"
          />
          {/* Foreground image - full image, never cropped */}
          <img 
            src={communityBanner} 
            alt="PreMoneyPost Community" 
            className="absolute inset-0 w-full h-full object-contain z-10 pointer-events-none"
            loading="lazy"
            decoding="async"
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10 z-20" />
          
          {/* Content container - bottom half */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 lg:p-12 z-30">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-cardo font-bold text-white mb-4 md:whitespace-nowrap">
                The PreMoneyPost<sup className="text-sm align-super">®</sup> Community
              </h2>
              <p className="font-source-sans font-semibold text-lg md:text-xl lg:text-2xl text-white/80 mb-8">
                A small, private group of founders and early-stage operators sharing ideas, experiences, and support as they grow. We host occasional events, gatherings, and sessions to help the community learn from each other.
              </p>
              
              <Button 
                onClick={(e) => {
                  e.stopPropagation();
                  setModalOpen(true);
                }}
                className="px-8 py-6 text-lg"
              >
                Request an Invite
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <CommunityModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
};

export default CommunitySection;
