
import { useState, useEffect } from 'react';

const SolutionArchitecture = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    const element = document.getElementById('solution-architecture');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="solution-architecture" className="bg-irrelevant-component py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="badge-primary inline-block mb-4">ARQUITECTURA</span>
          <h2 className="mb-6">
            Cómo funciona la 
            <span className="bg-gradient-to-r from-irrelevant-primary to-purple-400 text-transparent bg-clip-text"> automatización inteligente</span>
          </h2>
          <p className="max-w-3xl mx-auto">
            Nuestra plataforma utiliza tecnología de punta para transformar tus procesos contables manuales en flujos automatizados y precisos.
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          {/* Architecture diagram */}
          <div className={`bg-irrelevant-interactive rounded-2xl p-8 md:p-12 relative ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
            {/* Connection lines */}
            <div className="absolute top-1/2 left-12 right-12 h-1 bg-gradient-to-r from-blue-500 via-irrelevant-primary to-purple-500 transform -translate-y-1/2 z-0 hidden md:block"></div>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10 relative z-10">
              {/* Input */}
              <div className={`flex flex-col items-center text-center ${isVisible ? 'animate-slide-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
                <div className="w-20 h-20 rounded-full bg-blue-500 bg-opacity-20 flex items-center justify-center mb-4">
                  <span className="text-3xl">📥</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Entrada</h3>
                <p className="text-sm">
                  Recibe facturas desde múltiples fuentes: Email, WhatsApp, fotos, XML
                </p>
                <div className="hidden md:flex flex-col items-center mt-4">
                  <svg className="w-8 h-8 text-irrelevant-primary animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>

              {/* Processing */}
              <div className={`flex flex-col items-center text-center ${isVisible ? 'animate-slide-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
                <div className="w-20 h-20 rounded-full bg-irrelevant-primary bg-opacity-20 flex items-center justify-center mb-4 relative">
                  <span className="text-3xl">🧠</span>
                  <div className="absolute inset-0 rounded-full border-2 border-irrelevant-primary animate-pulse"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">Procesamiento</h3>
                <p className="text-sm">
                  Núcleo de IA que extrae, clasifica y estructura toda la información
                </p>
                <div className="hidden md:flex flex-col items-center mt-4">
                  <svg className="w-8 h-8 text-irrelevant-primary animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>

              {/* Integration */}
              <div className={`flex flex-col items-center text-center ${isVisible ? 'animate-slide-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
                <div className="w-20 h-20 rounded-full bg-purple-500 bg-opacity-20 flex items-center justify-center mb-4">
                  <span className="text-3xl">🔄</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Integración</h3>
                <p className="text-sm">
                  Conexión perfecta con Siigo y otros sistemas contables
                </p>
                <div className="hidden md:flex flex-col items-center mt-4">
                  <svg className="w-8 h-8 text-irrelevant-primary animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>

              {/* Output */}
              <div className={`flex flex-col items-center text-center ${isVisible ? 'animate-slide-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
                <div className="w-20 h-20 rounded-full bg-green-500 bg-opacity-20 flex items-center justify-center mb-4">
                  <span className="text-3xl">📤</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Salida</h3>
                <p className="text-sm">
                  Facturas y causaciones completamente automatizadas y listas para usar
                </p>
                <div className="hidden md:flex flex-col items-center mt-4">
                  <svg className="w-8 h-8 text-irrelevant-primary animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>

              {/* Result */}
              <div className={`flex flex-col items-center text-center ${isVisible ? 'animate-slide-in' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
                <div className="w-20 h-20 rounded-full bg-amber-500 bg-opacity-20 flex items-center justify-center mb-4">
                  <span className="text-3xl">🏆</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Resultado</h3>
                <p className="text-sm">
                  Métricas de negocio mejoradas: tiempo, exactitud, costos reducidos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionArchitecture;
