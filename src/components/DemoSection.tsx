import { useEffect, useRef, useState } from 'react';

const DemoSection = () => {
  const videoRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    
    const element = videoRef.current;
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);
  
  useEffect(() => {
    if (videoRef.current) {
      if (isInView && !isPlaying) {
        videoRef.current.play().then(() => setIsPlaying(true)).catch(e => console.log("Autoplay prevented:", e));
      } else if (!isInView && isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, [isInView, isPlaying]);
  
  const togglePlayPause = () => {
    if (!videoRef.current) return;
    
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(e => console.log("Play prevented:", e));
    }
  };
  
  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(!isMuted);
  };
  
  const updateProgress = () => {
    if (!videoRef.current) return;
    const value = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(value);
  };
  
  return (
    <section className="py-24 bg-gradient-to-b from-irrelevant-background to-irrelevant-background/80">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="inline-block text-irrelevant-primary text-sm font-semibold mb-4">
            <span className="bg-irrelevant-primary/10 px-4 py-2 rounded-full uppercase tracking-wider">Ver para creer</span>
          </div>
          <h2 className="mb-6">
            Mira cómo 
            <span className="bg-gradient-to-r from-irrelevant-primary to-purple-400 text-transparent bg-clip-text"> revolucionamos </span>
            la experiencia del huésped
          </h2>
          <p className="max-w-2xl mx-auto text-irrelevant-textSecondary">
            En esta demostración podrás ver el AI Concierge en acción. Así de simple es transformar la atención al huésped en una experiencia excepcional.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Video Container */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-irrelevant-component border border-irrelevant-border/30">
            {/* Video Gradient Border Effect */}
            <div className="absolute inset-0 rounded-xl p-0.5 bg-gradient-to-r from-irrelevant-primary/30 to-purple-400/30 z-0">
              <div className="w-full h-full bg-irrelevant-component rounded-xl"></div>
            </div>
            
            {/* Main Video Element */}
            <div className="relative z-10 rounded-lg overflow-hidden">
              <div className="aspect-video bg-black/20 relative overflow-hidden">
                <video
                  ref={videoRef}
                  className="w-full h-full object-contain"
                  playsInline
                  muted={isMuted}
                  onTimeUpdate={updateProgress}
                  poster="https://storage.googleapis.com/cluvi/irrelevant/concierge-poster.jpg"
                >
                  <source src="https://storage.googleapis.com/cluvi/ai_concierge_demo.mp4" type="video/mp4" />
                  <track 
                    kind="captions"
                    label="Spanish"
                    src="https://storage.googleapis.com/cluvi/irrelevant/captions.vtt" 
                    srcLang="es" 
                    default
                  />
                  Su navegador no soporta videos.
                </video>
                
                {/* Play/Pause Overlay */}
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity cursor-pointer group"
                  onClick={togglePlayPause}
                >
                  {!isPlaying && (
                    <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="w-16 h-16 rounded-full bg-irrelevant-primary/90 flex items-center justify-center shadow-lg shadow-irrelevant-primary/30">
                        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 5.14V19.14L19 12.14L8 5.14Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Bottom Controls */}
                <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 transition-opacity ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
                  {/* Progress bar */}
                  <div className="h-1 w-full bg-white/20 rounded-full mb-3 cursor-pointer">
                    <div 
                      className="h-full bg-irrelevant-primary rounded-full relative"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <button 
                        onClick={togglePlayPause}
                        className="text-white hover:text-irrelevant-primary transition-colors"
                        aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
                      >
                        {isPlaying ? (
                          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 4H6V20H10V4Z" fill="currentColor" />
                            <path d="M18 4H14V20H18V4Z" fill="currentColor" />
                          </svg>
                        ) : (
                          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 5.14V19.14L19 12.14L8 5.14Z" fill="currentColor" />
                          </svg>
                        )}
                      </button>
                      
                      <button 
                        onClick={toggleMute}
                        className="text-white hover:text-irrelevant-primary transition-colors"
                        aria-label={isMuted ? "Activar sonido" : "Silenciar"}
                      >
                        {isMuted ? (
                          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 5L6 9H2V15H6L11 19V5Z" fill="currentColor" />
                            <path d="M23 9L17 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M17 9L23 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        ) : (
                          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 5L6 9H2V15H6L11 19V5Z" fill="currentColor" />
                            <path d="M15.54 8.46C16.4774 9.39764 17.0039 10.6692 17.0039 11.995C17.0039 13.3208 16.4774 14.5924 15.54 15.53" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M19.07 5.93C20.9447 7.80528 21.9979 10.3447 21.9979 13C21.9979 15.6553 20.9447 18.1947 19.07 20.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </button>
                    </div>
                    
                    <span className="text-sm text-white">AI Concierge en acción</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Title and Description below video */}
          <div className="mt-8 text-center">
            <h3 className="text-xl font-bold mb-4">Atención al huésped perfecta en 3 simples pasos</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-irrelevant-component p-4 rounded-lg border border-irrelevant-border">
                <div className="w-8 h-8 rounded-full bg-irrelevant-primary/20 text-irrelevant-primary flex items-center justify-center mx-auto mb-3">1</div>
                <h4 className="font-bold mb-2">El huésped pregunta</h4>
                <p className="text-sm text-irrelevant-textSecondary">Por WhatsApp, web o cualquier canal disponible</p>
              </div>
              <div className="bg-irrelevant-component p-4 rounded-lg border border-irrelevant-border">
                <div className="w-8 h-8 rounded-full bg-irrelevant-primary/20 text-irrelevant-primary flex items-center justify-center mx-auto mb-3">2</div>
                <h4 className="font-bold mb-2">Procesamiento inteligente</h4>
                <p className="text-sm text-irrelevant-textSecondary">El AI Concierge interpreta y contextualiza la consulta</p>
              </div>
              <div className="bg-irrelevant-component p-4 rounded-lg border border-irrelevant-border">
                <div className="w-8 h-8 rounded-full bg-irrelevant-primary/20 text-irrelevant-primary flex items-center justify-center mx-auto mb-3">3</div>
                <h4 className="font-bold mb-2">Respuesta personalizada</h4>
                <p className="text-sm text-irrelevant-textSecondary">Información precisa y personalizada en segundos</p>
              </div>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="text-center mt-10">
            <a 
              href="https://wa.me/1234567890?text=Me%20interesa%20el%20AI%20Concierge%20que%20vi%20en%20el%20video"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-irrelevant-primary hover:bg-irrelevant-primary/90 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-irrelevant-primary/30 inline-flex items-center"
            >
              QUIERO UN AI CONCIERGE PARA MI HOTEL
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;