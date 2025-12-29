
const Footer = () => {
  return (
    <footer className="py-10 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center gap-4">
          <div>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 hover:border-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Pre Money Post. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
