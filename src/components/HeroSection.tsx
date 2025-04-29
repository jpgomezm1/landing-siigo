import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const videoRef = useRef();
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
            <source src="https://storage.googleapis.com/cluvi/irrelevant/hotel-service-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-20 px-4 sm:px-6 w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center">
          
          <h1 className="font-jakarta font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 w-full">
            TU CONCIERGE DEBERÍA 
            <span className="block bg-gradient-to-r from-irrelevant-primary to-purple-400 text-transparent bg-clip-text">
              ESTAR DISPONIBLE 24/7
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white mb-6 sm:mb-8 w-full">
            Automatiza la atención a tus huéspedes. Mejora su experiencia sin aumentar costos operativos. 
            <span className="font-bold text-irrelevant-primary"> Tu AI Concierge multilingüe responde en segundos.</span>
          </p>
          
          <a 
            href="https://wa.me/1234567890?text=Quiero%20implementar%20el%20AI%20Concierge%20en%20mi%20hotel"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-irrelevant-primary hover:bg-irrelevant-primary/90 text-white font-bold py-3 sm:py-4 px-4 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-irrelevant-primary/30 text-xs sm:text-sm md:text-base w-full sm:w-auto mx-auto"
          >
            <span className="inline-flex items-center justify-center font-bold">
              QUIERO UN AI CONCIERGE PARA MI HOTEL
            </span>
          </a>
          
          <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 justify-center items-center w-full">
            <div className="flex items-center bg-irrelevant-background/70 border border-irrelevant-border py-2 px-3 sm:px-4 rounded-lg w-full max-w-xs mx-auto">
              <svg className="min-w-4 w-4 h-4 sm:w-5 sm:h-5 mr-2 text-irrelevant-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-xs">Disponible 24/7</span>
            </div>
            <div className="flex items-center bg-irrelevant-background/70 border border-irrelevant-border py-2 px-3 sm:px-4 rounded-lg w-full max-w-xs mx-auto">
              <svg className="min-w-4 w-4 h-4 sm:w-5 sm:h-5 mr-2 text-irrelevant-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 5H21V19H3V5Z M3 12H21 M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-xs">Multilingüe</span>
            </div>
            <div className="flex items-center bg-irrelevant-background/70 border border-irrelevant-border py-2 px-3 sm:px-4 rounded-lg w-full max-w-xs mx-auto">
              <svg className="min-w-4 w-4 h-4 sm:w-5 sm:h-5 mr-2 text-irrelevant-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-xs">IA Avanzada</span>
            </div>
            <div className="flex items-center bg-irrelevant-background/70 border border-irrelevant-border py-2 px-3 sm:px-4 rounded-lg w-full max-w-xs mx-auto">
              <svg className="min-w-4 w-4 h-4 sm:w-5 sm:h-5 mr-2 text-irrelevant-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-xs">Implementación en 6 semanas</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-irrelevant-textSecondary text-xs mb-1 sm:mb-2">Descubre más</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-irrelevant-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;