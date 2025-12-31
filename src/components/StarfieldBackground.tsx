import { ReactNode } from 'react';

interface StarfieldBackgroundProps {
  children: ReactNode;
}

const StarfieldBackground = ({ children }: StarfieldBackgroundProps) => {
  return (
    <div className="relative">
      {/* Background layer with stars */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(1.5px 1.5px at 20px 30px, white, transparent),
            radial-gradient(1px 1px at 40px 70px, rgba(255,255,255,0.8), transparent),
            radial-gradient(1.2px 1.2px at 50px 160px, rgba(255,255,255,0.9), transparent),
            radial-gradient(1.5px 1.5px at 90px 40px, white, transparent),
            radial-gradient(1.2px 1.2px at 130px 80px, rgba(255,255,255,0.7), transparent),
            radial-gradient(1px 1px at 160px 120px, white, transparent),
            radial-gradient(1.8px 1.8px at 200px 50px, rgba(255,255,255,0.6), transparent),
            radial-gradient(1.3px 1.3px at 220px 150px, white, transparent),
            radial-gradient(1px 1px at 250px 90px, rgba(255,255,255,0.8), transparent),
            radial-gradient(1.5px 1.5px at 280px 180px, white, transparent),
            radial-gradient(1.2px 1.2px at 310px 30px, rgba(255,255,255,0.9), transparent),
            radial-gradient(1px 1px at 350px 110px, white, transparent),
            radial-gradient(1.4px 1.4px at 380px 60px, rgba(255,255,255,0.7), transparent),
            radial-gradient(1.6px 1.6px at 420px 140px, white, transparent),
            radial-gradient(1px 1px at 460px 20px, rgba(255,255,255,0.8), transparent),
            radial-gradient(1.3px 1.3px at 500px 100px, white, transparent)
          `,
          backgroundSize: '520px 200px',
          backgroundRepeat: 'repeat',
          opacity: 0.6,
        }}
      />
      {/* Second layer for more density */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(1px 1px at 10px 10px, rgba(255,255,255,0.5), transparent),
            radial-gradient(1.2px 1.2px at 60px 50px, rgba(255,255,255,0.4), transparent),
            radial-gradient(0.8px 0.8px at 100px 90px, rgba(255,255,255,0.6), transparent),
            radial-gradient(1px 1px at 150px 30px, rgba(255,255,255,0.5), transparent),
            radial-gradient(1.1px 1.1px at 180px 130px, rgba(255,255,255,0.4), transparent),
            radial-gradient(0.9px 0.9px at 230px 70px, rgba(255,255,255,0.5), transparent),
            radial-gradient(1px 1px at 270px 170px, rgba(255,255,255,0.6), transparent),
            radial-gradient(1.2px 1.2px at 320px 110px, rgba(255,255,255,0.4), transparent),
            radial-gradient(0.8px 0.8px at 370px 40px, rgba(255,255,255,0.5), transparent),
            radial-gradient(1px 1px at 400px 160px, rgba(255,255,255,0.6), transparent)
          `,
          backgroundSize: '420px 180px',
          backgroundRepeat: 'repeat',
          opacity: 0.4,
        }}
      />
      {/* Content layer */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default StarfieldBackground;
