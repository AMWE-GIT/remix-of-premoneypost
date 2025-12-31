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
          className="relative w-full aspect-[4/3] md:aspect-[2/1] lg:aspect-[5/2] rounded-2xl overflow-hidden cursor-pointer group"
          onClick={() => setModalOpen(true)}
        >
          {/* Background image */}
          <img 
            src={communityBanner} 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/40" />
          
          {/* Content container - bottom half */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 lg:p-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-cardo font-bold text-white mb-4">
                The PreMoneyPost<sup className="text-sm align-super">®</sup> Community
              </h2>
              <p className="font-source-sans font-semibold text-base md:text-lg lg:text-xl text-white/80 mb-8">
                A small, private network of founders and early-stage leaders sharing ideas, feedback, and trusted introductions.
              </p>
              
              <Button 
                onClick={(e) => {
                  e.stopPropagation();
                  setModalOpen(true);
                }}
                className="px-8 py-4 text-base"
              >
                Request an Invite
              </Button>
              
              <p className="font-source-sans font-semibold text-white/60 text-sm mt-4">
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
