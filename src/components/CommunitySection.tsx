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
          className="relative w-full aspect-[4/3] md:aspect-[2/1] lg:aspect-[5/2] rounded-2xl overflow-hidden cursor-pointer"
          onClick={() => setModalOpen(true)}
        >
          {/* Background image */}
          <img 
            src={communityBanner} 
            alt="" 
            className="absolute inset-0 w-full h-full object-contain"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Content container - bottom half */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 lg:p-12">
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
