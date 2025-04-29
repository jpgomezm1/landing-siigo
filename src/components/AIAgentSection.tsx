
import { useState, useEffect, useRef } from 'react';

const AIAgentSection = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
    <section id="ai-agent" ref={sectionRef} className="section-container relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute -top-80 -right-80 w-96 h-96 bg-irrelevant-primary opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-80 -left-80 w-96 h-96 bg-purple-600 opacity-10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className={`relative ${isInView ? 'animate-float' : ''}`}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-irrelevant-primary to-purple-600 opacity-20 rounded-full blur-xl transform scale-90"></div>
            <img 
              src="https://storage.googleapis.com/cluvi/irrelevant-accountant.png" 
              alt="Asistente Contable IA"
              className="relative z-10 mx-auto max-w-full"
              style={{ maxHeight: '500px' }}
            />
          </div>
          
          {/* Chat bubbles */}
          <div className={`absolute top-10 -left-4 bg-white text-black p-3 rounded-lg shadow-lg transform ${isInView ? 'animate-slide-in' : 'opacity-0'}`} style={{ maxWidth: '180px', animationDelay: '0.3s' }}>
            <p className="text-sm font-medium">¡Hola! Soy tu asistente contable virtual 👋</p>
            <div className="absolute left-4 -bottom-2 w-4 h-4 bg-white transform rotate-45"></div>
          </div>
          
          <div className={`absolute top-1/3 -right-4 bg-irrelevant-primary text-white p-3 rounded-lg shadow-lg transform ${isInView ? 'animate-slide-in' : 'opacity-0'}`} style={{ maxWidth: '180px', animationDelay: '0.6s' }}>
            <p className="text-sm font-medium">Puedo procesar tus facturas 24/7 sin errores ⚡</p>
            <div className="absolute right-4 -bottom-2 w-4 h-4 bg-irrelevant-primary transform rotate-45"></div>
          </div>
          
          <div className={`absolute bottom-20 -left-4 bg-white text-black p-3 rounded-lg shadow-lg transform ${isInView ? 'animate-slide-in' : 'opacity-0'}`} style={{ maxWidth: '180px', animationDelay: '0.9s' }}>
            <p className="text-sm font-medium">Solo envíame una imagen o PDF y lo haré automáticamente 🤖</p>
            <div className="absolute left-4 -bottom-2 w-4 h-4 bg-white transform rotate-45"></div>
          </div>
        </div>
        
        {/* Content */}
        <div>
          <span className="badge-primary inline-block mb-4">INNOVACIÓN</span>
          <h2 className="mb-6">
            CONOCE A TU NUEVO
            <span className="block bg-gradient-to-r from-irrelevant-primary to-purple-400 text-transparent bg-clip-text">
              ASISTENTE CONTABLE VIRTUAL
            </span>
          </h2>
          
          <p className="mb-8 text-lg">
            Tu contador IA que nunca duerme, no comete errores y está disponible 24/7 para procesar toda tu información contable en tiempo real.
          </p>
          
          <div className="space-y-6 mb-10">
            <div className="flex items-start">
              <div className="bg-irrelevant-interactive p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-irrelevant-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">Simple</h4>
                <p className="text-irrelevant-textSecondary">
                  Solo reenvía un correo o envía una foto por WhatsApp y tu Agente IA hará el resto.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-irrelevant-interactive p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-irrelevant-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">Inteligente</h4>
                <p className="text-irrelevant-textSecondary">
                  Reconoce, clasifica y causa automáticamente cualquier tipo de factura con precisión.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-irrelevant-interactive p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-irrelevant-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">Disponible 24/7</h4>
                <p className="text-irrelevant-textSecondary">
                  Procesa facturas incluso fuera de horario laboral, sin demoras ni tiempos de espera.
                </p>
              </div>
            </div>
          </div>
          
          <a 
            href="https://wa.me/1234567890?text=Quiero%20mi%20asistente%20contable%20IA"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button inline-flex items-center"
          >
            👉 QUIERO MI ASISTENTE CONTABLE IA
          </a>
        </div>
      </div>
    </section>
  );
};

export default AIAgentSection;
