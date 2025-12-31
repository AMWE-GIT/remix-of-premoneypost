import { ReactNode } from 'react';

interface StarfieldWrapperProps {
  children: ReactNode;
}

const StarfieldWrapper = ({ children }: StarfieldWrapperProps) => {
  return (
    <div className="relative">
      {/* Starfield layer - sits behind content */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(2px 2px at 20px 30px, white 1px, transparent 1px),
            radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.9) 1px, transparent 1px),
            radial-gradient(2px 2px at 50px 160px, rgba(255,255,255,0.8) 1px, transparent 1px),
            radial-gradient(2px 2px at 90px 40px, white 1px, transparent 1px),
            radial-gradient(2px 2px at 130px 80px, rgba(255,255,255,0.85) 1px, transparent 1px),
            radial-gradient(2.5px 2.5px at 160px 120px, white 1px, transparent 1px),
            radial-gradient(2px 2px at 200px 50px, rgba(255,255,255,0.7) 1px, transparent 1px),
            radial-gradient(2px 2px at 220px 90px, white 1px, transparent 1px),
            radial-gradient(2px 2px at 260px 150px, rgba(255,255,255,0.9) 1px, transparent 1px),
            radial-gradient(2px 2px at 300px 30px, white 1px, transparent 1px),
            radial-gradient(2.5px 2.5px at 340px 100px, rgba(255,255,255,0.95) 1px, transparent 1px),
            radial-gradient(2px 2px at 380px 60px, white 1px, transparent 1px),
            radial-gradient(2px 2px at 420px 140px, rgba(255,255,255,0.8) 1px, transparent 1px),
            radial-gradient(2px 2px at 460px 20px, white 1px, transparent 1px),
            radial-gradient(2px 2px at 500px 80px, rgba(255,255,255,0.85) 1px, transparent 1px),
            radial-gradient(2px 2px at 540px 130px, white 1px, transparent 1px),
            radial-gradient(2.5px 2.5px at 580px 45px, rgba(255,255,255,0.9) 1px, transparent 1px),
            radial-gradient(2px 2px at 620px 110px, white 1px, transparent 1px),
            radial-gradient(2px 2px at 80px 200px, rgba(255,255,255,0.85) 1px, transparent 1px),
            radial-gradient(2px 2px at 150px 250px, white 1px, transparent 1px),
            radial-gradient(2px 2px at 230px 220px, rgba(255,255,255,0.8) 1px, transparent 1px),
            radial-gradient(2.5px 2.5px at 310px 280px, white 1px, transparent 1px),
            radial-gradient(2px 2px at 390px 240px, rgba(255,255,255,0.9) 1px, transparent 1px),
            radial-gradient(2px 2px at 470px 300px, white 1px, transparent 1px),
            radial-gradient(2px 2px at 550px 260px, rgba(255,255,255,0.7) 1px, transparent 1px)
          `,
          backgroundSize: '650px 350px',
          backgroundRepeat: 'repeat',
          opacity: 1,
        }}
      />
      {/* Content layer */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default StarfieldWrapper;
