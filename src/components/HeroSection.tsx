
import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
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
      <div className="section-container relative z-20">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <div className="badge-primary mb-6 animate-fade-in">
            <span className="mr-1">✨</span> TECNOLOGÍA PIONERA 
          </div>
          
          <h1 className="font-jakarta font-black mb-6">
            TUS FACTURAS DEBERÍAN 
            <span className="block bg-gradient-to-r from-irrelevant-primary to-purple-400 text-transparent bg-clip-text">
              HACERSE SOLAS
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl font-medium text-white mb-8 max-w-3xl">
            Automatiza tu facturación y causación. Escala ventas sin aumentar costos operativos. 
            <span className="font-bold text-irrelevant-primary"> En menos de 5 días estás facturando sin digitar.</span>
          </p>
          
          <a 
            href="https://wa.me/1234567890?text=Quiero%20automatizar%20mi%20facturación%20con%20Irrelevant"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button group animate-pulse-glow"
          >
            <span className="group-hover:scale-105 transition-transform inline-flex items-center">
              👉 QUIERO AUTOMATIZAR MI FACTURACIÓN
            </span>
          </a>
          
          <div className="mt-12 flex flex-wrap gap-6 justify-center items-center">
            <div className="badge-irrelevant">
              ✅ Compatible 100% con Siigo
            </div>
            <div className="badge-irrelevant">
              🤖 Potenciado por IA avanzada
            </div>
            <div className="badge-irrelevant">
              🚀 Parte del ecosistema Irrelevant
            </div>
            <div className="badge-irrelevant">
              ⏱️ Implementación en 5 días
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-irrelevant-textSecondary text-sm mb-2">Descubre más</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-irrelevant-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
