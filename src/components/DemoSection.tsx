
import { useEffect, useRef, useState } from 'react';

const DemoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInView, setIsInView] = useState(false);
  
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
  
  return (
    <section className="bg-gradient-to-br from-irrelevant-interactive to-irrelevant-background py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="badge-primary inline-block mb-4">DEMOSTRACIÓN</span>
          <h2 className="mb-6">
            Mira cómo 
            <span className="bg-gradient-to-r from-irrelevant-primary to-purple-400 text-transparent bg-clip-text"> transformamos </span>
            tu operación contable
          </h2>
          <p className="max-w-3xl mx-auto">
            Una breve demostración de cómo Irrelevant automatiza tus procesos de facturación y causación.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          {/* Video Player */}
          <div className="relative aspect-video bg-black">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster="https://storage.googleapis.com/cluvi/irrelevant/video-poster.jpg"
              playsInline
            >
              <source src="https://storage.googleapis.com/cluvi/irrelevant/demo-video.mp4" type="video/mp4" />
              <track 
                kind="captions"
                label="Spanish"
                src="https://storage.googleapis.com/cluvi/irrelevant/captions.vtt" 
                srcLang="es" 
                default
              />
              Your browser does not support the video tag.
            </video>
            
            {/* Play/Pause Overlay */}
            <div 
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-opacity cursor-pointer"
              onClick={togglePlayPause}
            >
              {!isPlaying && (
                <div className="w-20 h-20 rounded-full bg-irrelevant-primary flex items-center justify-center animate-pulse-glow">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
            
            {/* CTA Button Overlay */}
            <div className="absolute bottom-6 right-6">
              <a 
                href="https://wa.me/1234567890?text=Quiero%20implementar%20esta%20solución%20en%20mi%20empresa"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-irrelevant-primary hover:bg-opacity-90 text-white font-bold py-3 px-5 rounded-lg shadow-lg transition-all duration-300 flex items-center"
              >
                👉 Quiero implementarlo
              </a>
            </div>
          </div>
          
          {/* Video Controls */}
          <div className="bg-irrelevant-component p-4">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex items-center space-x-4">
                <button 
                  onClick={togglePlayPause}
                  className="text-white hover:text-irrelevant-primary transition-colors"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </button>
                
                <div className="text-sm text-irrelevant-textSecondary">Automatización de facturación y causación</div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button 
                  className="text-white hover:text-irrelevant-primary transition-colors"
                  aria-label="Enable captions"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </button>
                
                <button 
                  className="text-white hover:text-irrelevant-primary transition-colors"
                  aria-label="Full screen"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
