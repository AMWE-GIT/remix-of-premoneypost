
const Footer = () => {
  return (
    <footer className="py-10 border-t border-gray-800 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-6">
          <span className="text-white font-medium text-xl md:text-2xl">PreMoneyPost®</span>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-12 h-12 rounded-md border border-gray-700 hover:border-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
