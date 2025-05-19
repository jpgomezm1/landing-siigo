import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('#mobile-menu') && !event.target.closest('#mobile-menu-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-irrelevant-background/95 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <img 
              src="https://storage.googleapis.com/cluvi/nuevo_irre-removebg-preview.png" 
              alt="Irrelevant Logo" 
              className={`transition-all duration-300 ${isScrolled ? 'h-10' : 'h-12'}`}
            />
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a 
            href="#features" 
            className="text-irrelevant-textSecondary hover:text-white transition-colors font-medium relative group"
          >
            Solución
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-irrelevant-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#use-cases" 
            className="text-irrelevant-textSecondary hover:text-white transition-colors font-medium relative group"
          >
            Casos de Uso
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-irrelevant-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#benefits" 
            className="text-irrelevant-textSecondary hover:text-white transition-colors font-medium relative group"
          >
            Beneficios
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-irrelevant-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="https://wa.me/573183351733?text=Quiero%20automatizar%20mi%20facturación%20con%20Irrelevant"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              isScrolled 
                ? 'bg-irrelevant-primary hover:bg-irrelevant-primary/90 text-white py-2 px-5 rounded-lg transition-all duration-300 shadow-md shadow-irrelevant-primary/20 hover:shadow-irrelevant-primary/30 text-sm font-bold' 
                : 'bg-irrelevant-background/30 hover:bg-irrelevant-background/50 backdrop-blur-sm text-white px-5 py-2 rounded-lg transition-all duration-300 font-medium border border-irrelevant-border'
            }`}
          >
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              Contactar
            </span>
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          id="mobile-menu-button"
          className="md:hidden text-white p-1 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        id="mobile-menu"
        className={`md:hidden fixed inset-0 z-40 bg-irrelevant-background/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ top: '71px' }}
      >
        <div className="flex flex-col h-full px-6 py-8 space-y-6">
          <a 
            href="#features" 
            className="text-white hover:text-irrelevant-primary transition-colors font-medium py-3 border-b border-irrelevant-border"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Solución
          </a>
          <a 
            href="#use-cases" 
            className="text-white hover:text-irrelevant-primary transition-colors font-medium py-3 border-b border-irrelevant-border"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Casos de Uso
          </a>
          <a 
            href="#benefits" 
            className="text-white hover:text-irrelevant-primary transition-colors font-medium py-3 border-b border-irrelevant-border"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Beneficios
          </a>
          <div className="pt-6">
            <a 
              href="https://wa.me/1234567890?text=Quiero%20automatizar%20mi%20facturación%20con%20Irrelevant"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-irrelevant-primary w-full flex items-center justify-center py-3 px-5 rounded-lg text-white font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;