
const Footer = () => {
  return (
    <footer className="py-8 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <span className="text-white font-cardo font-bold text-xl md:text-2xl">PreMoneyPost<sup className="text-[0.5em] align-super">®</sup></span>
          <p className="text-white/50 text-xs font-source-sans">
            © 2026 PreMoneyPost<sup className="text-[0.5em]">®</sup>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
