
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-irrelevant-background/95 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-jakarta font-bold bg-gradient-to-r from-irrelevant-primary to-purple-400 text-transparent bg-clip-text">
            Irrelevant
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-irrelevant-textSecondary hover:text-white transition-colors font-medium">Solución</a>
          <a href="#use-cases" className="text-irrelevant-textSecondary hover:text-white transition-colors font-medium">Casos de Uso</a>
          <a href="#benefits" className="text-irrelevant-textSecondary hover:text-white transition-colors font-medium">Beneficios</a>
          <a 
            href="https://wa.me/1234567890?text=Quiero%20automatizar%20mi%20facturación%20con%20Irrelevant"
            target="_blank"
            rel="noopener noreferrer"
            className={`${isScrolled ? 'cta-button !py-2 !px-5 text-sm' : 'bg-irrelevant-interactive hover:bg-irrelevant-interactive/80 text-white px-5 py-2 rounded-lg transition-colors font-medium'}`}
          >
            👉 Contactar
          </a>
        </div>
        
        <Button variant="ghost" className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </div>
    </header>
  );
};

export default Header;
