import { useState, useEffect, useRef } from 'react';

const AIAgentSection = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="ai-agent" ref={sectionRef} className="section-container relative overflow-hidden py-24">
      {/* Background gradient effect */}
      <div className="absolute -top-80 -right-80 w-96 h-96 bg-irrelevant-primary opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-80 -left-80 w-96 h-96 bg-purple-600 opacity-10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image with Chat bubbles */}
        <div className={`relative ${isInView ? 'animate-float' : ''}`}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-irrelevant-primary to-purple-600 opacity-20 rounded-full blur-xl transform scale-90"></div>
            <img 
              src="https://storage.googleapis.com/cluvi/concierge-AI.png" 
              alt="AI Concierge - Tu Asistente Virtual de Hotel"
              className="relative z-10 mx-auto max-w-full"
              style={{ maxHeight: '500px' }}
            />
            
            {/* Name badge */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-irrelevant-primary text-white px-4 py-2 rounded-lg font-bold shadow-lg">
              AI CONCIERGE
            </div>
          </div>
          
          {/* Chat bubbles */}
          <div className={`absolute top-14 -left-4 bg-white text-black p-3 rounded-lg shadow-lg transform ${isInView ? 'animate-slide-in' : 'opacity-0'}`} style={{ maxWidth: '220px', animationDelay: '0.3s' }}>
            <p className="text-sm font-medium">¡Bienvenido a The Hotel! Soy tu AI Concierge disponible 24/7 para asistirte en todo momento 👋</p>
            <div className="absolute left-4 -bottom-2 w-4 h-4 bg-white transform rotate-45"></div>
          </div>
          
          <div className={`absolute top-1/3 -right-4 bg-irrelevant-primary text-white p-3 rounded-lg shadow-lg transform ${isInView ? 'animate-slide-in' : 'opacity-0'}`} style={{ maxWidth: '220px', animationDelay: '0.6s' }}>
            <p className="text-sm font-medium">Puedo responder consultas, gestionar solicitudes y brindarte recomendaciones personalizadas en tu idioma ⚡</p>
            <div className="absolute right-4 -bottom-2 w-4 h-4 bg-irrelevant-primary transform rotate-45"></div>
          </div>
          
          <div className={`absolute bottom-20 -left-4 bg-white text-black p-3 rounded-lg shadow-lg transform ${isInView ? 'animate-slide-in' : 'opacity-0'}`} style={{ maxWidth: '220px', animationDelay: '0.9s' }}>
            <p className="text-sm font-medium">Estoy disponible por WhatsApp, en la web del hotel o mediante el código QR en tu habitación 📱</p>
            <div className="absolute left-4 -bottom-2 w-4 h-4 bg-white transform rotate-45"></div>
          </div>
        </div>
        
        {/* Content */}
        <div>
          
          <h2 className="mb-6">
            CONOCE AL 
            <span className="bg-gradient-to-r from-irrelevant-primary to-purple-400 text-transparent bg-clip-text"> AI CONCIERGE</span>
          </h2>
          
          <p className="mb-6 text-lg">
            Tu asistente virtual de hotel que trabaja las 24 horas, todos los días. Nunca descansa, habla múltiples idiomas y está siempre disponible para tus huéspedes a través de múltiples canales para brindar una experiencia excepcional.
          </p>
          
          <div className="space-y-6 mb-10">
            <div className="flex items-start">
              <div className="bg-irrelevant-interactive p-3 rounded-full mr-4 flex-shrink-0">
                <svg className="h-6 w-6 text-irrelevant-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">Disponibilidad total</h4>
                <p className="text-irrelevant-textSecondary">
                  Responde a cualquier hora, incluso durante la madrugada, fines de semana y temporadas altas. Atención constante.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-irrelevant-interactive p-3 rounded-full mr-4 flex-shrink-0">
                <svg className="h-6 w-6 text-irrelevant-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 5H21V19H3V5Z M3 12H21 M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">Comunicación multilingüe</h4>
                <p className="text-irrelevant-textSecondary">
                  Interactúa fluidamente en español e inglés, eliminando las barreras de idioma con tus huéspedes internacionales.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-irrelevant-interactive p-3 rounded-full mr-4 flex-shrink-0">
                <svg className="h-6 w-6 text-irrelevant-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 9L11 12L8 15M13 9H16M13 15H16M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">Multicanal y accesible</h4>
                <p className="text-irrelevant-textSecondary">
                  Accesible por WhatsApp, web, QR o donde tu hotel lo necesite. Experiencia consistente en todos los canales.
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center bg-irrelevant-primary/10 rounded-xl p-4 mb-8">
            <div className="mr-4">
              <svg className="w-12 h-12 text-irrelevant-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h4 className="font-bold mb-1">Integración con sistemas hoteleros</h4>
              <p className="text-sm">Se conecta con tu sistema de reservas y gestión para brindar información precisa y actualizada</p>
            </div>
          </div>
          
          <a 
            href="https://wa.me/1234567890?text=Quiero%20implementar%20el%20AI%20Concierge%20en%20mi%20hotel"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-irrelevant-primary hover:bg-irrelevant-primary/90 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-irrelevant-primary/30 inline-flex items-center"
          >
            QUIERO UN AI CONCIERGE PARA MI HOTEL
          </a>
        </div>
      </div>
    </section>
  );
};

export default AIAgentSection;