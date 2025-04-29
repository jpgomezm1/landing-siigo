import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const videoRef = useRef();
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-irrelevant-background/90 backdrop-blur-sm z-10"></div>
        <div className="relative h-full w-full">
          <video 
            ref={videoRef}
            autoPlay 
            muted 
            loop 
            playsInline
            className="object-cover w-full h-full opacity-30"
          >
            <source src="https://storage.googleapis.com/cluvi/irrelevant/data-flow-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      
      {/* Content */}
      <div className="section-container relative z-20 px-4 sm:px-6 w-full">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          
          <h1 className="font-jakarta font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6">
            TUS FACTURAS DEBERÍAN 
            <span className="block bg-gradient-to-r from-irrelevant-primary to-purple-400 text-transparent bg-clip-text">
              HACERSE SOLAS
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-white mb-6 sm:mb-8 max-w-3xl">
            Automatiza tu facturación y causación. Escala ventas sin aumentar costos operativos. 
            <span className="font-bold text-irrelevant-primary"> En menos de 5 días estás facturando sin digitar.</span>
          </p>
          
          <a 
            href="https://wa.me/1234567890?text=Quiero%20automatizar%20mi%20facturación%20con%20Irrelevant"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-irrelevant-primary hover:bg-irrelevant-primary/90 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-irrelevant-primary/30 text-sm sm:text-base w-full sm:w-auto"
          >
            <span className="inline-flex items-center justify-center font-bold">
              QUIERO AUTOMATIZAR MI FACTURACIÓN
            </span>
          </a>
          
          <div className="mt-8 sm:mt-12 flex flex-wrap gap-3 sm:gap-6 justify-center items-center">
            <div className="flex items-center bg-irrelevant-background/70 border border-irrelevant-border py-2 px-3 sm:px-4 rounded-lg w-full sm:w-auto">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-irrelevant-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-xs sm:text-sm">Compatible 100% con Siigo</span>
            </div>
            <div className="flex items-center bg-irrelevant-background/70 border border-irrelevant-border py-2 px-3 sm:px-4 rounded-lg w-full sm:w-auto">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-irrelevant-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4V6M12 8V12M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-xs sm:text-sm">Potenciado por IA avanzada</span>
            </div>
            <div className="flex items-center bg-irrelevant-background/70 border border-irrelevant-border py-2 px-3 sm:px-4 rounded-lg w-full sm:w-auto">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-irrelevant-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-xs sm:text-sm">Parte del ecosistema Irrelevant</span>
            </div>
            <div className="flex items-center bg-irrelevant-background/70 border border-irrelevant-border py-2 px-3 sm:px-4 rounded-lg w-full sm:w-auto">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-irrelevant-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-xs sm:text-sm">Implementación en 5 días</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-irrelevant-textSecondary text-xs sm:text-sm mb-1 sm:mb-2">Descubre más</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-irrelevant-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;