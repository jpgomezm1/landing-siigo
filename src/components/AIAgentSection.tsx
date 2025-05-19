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
              src="https://storage.googleapis.com/cluvi/Images%20Web%20irrelevant/sales-irrelevant.png" 
              alt="QuoteBot - Tu Asistente de Ventas"
              className="relative z-10 mx-auto max-w-full"
              style={{ maxHeight: '500px' }}
            />
            
            {/* Name badge */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-irrelevant-primary text-white px-4 py-2 rounded-lg font-bold shadow-lg">
              MR.IRRELEVANT
            </div>
          </div>
          
          {/* Chat bubbles */}
          <div className={`absolute top-14 -left-4 bg-white text-black p-3 rounded-lg shadow-lg transform ${isInView ? 'animate-slide-in' : 'opacity-0'}`} style={{ maxWidth: '220px', animationDelay: '0.3s' }}>
            <p className="text-sm font-medium">¡Hola! Soy Mr.Irrelevant, tu asistente de ventas inteligente que monitorea tus cotizaciones 24/7 👋</p>
            <div className="absolute left-4 -bottom-2 w-4 h-4 bg-white transform rotate-45"></div>
          </div>
          
          <div className={`absolute top-1/3 -right-4 bg-irrelevant-primary text-white p-3 rounded-lg shadow-lg transform ${isInView ? 'animate-slide-in' : 'opacity-0'}`} style={{ maxWidth: '220px', animationDelay: '0.6s' }}>
            <p className="text-sm font-medium">Te aviso al instante cuando un cliente muestra interés en tu propuesta, para que nunca pierdas una oportunidad ⚡</p>
            <div className="absolute right-4 -bottom-2 w-4 h-4 bg-irrelevant-primary transform rotate-45"></div>
          </div>
          
          <div className={`absolute bottom-20 -left-4 bg-white text-black p-3 rounded-lg shadow-lg transform ${isInView ? 'animate-slide-in' : 'opacity-0'}`} style={{ maxWidth: '220px', animationDelay: '0.9s' }}>
            <p className="text-sm font-medium">Hago seguimiento automático a través de WhatsApp y email cuando detectamos que un cliente está interesado en tu cotización 📱</p>
            <div className="absolute left-4 -bottom-2 w-4 h-4 bg-white transform rotate-45"></div>
          </div>
        </div>
        
        {/* Content */}
        <div>
          
          <h2 className="mb-6">
            CONOCE A 
            <span className="bg-gradient-to-r from-irrelevant-primary to-purple-400 text-transparent bg-clip-text"> MR.IRRELEVANT</span>
          </h2>
          
          <p className="mb-6 text-lg">
            Tu asistente de ventas virtual que monitorea tus cotizaciones las 24 horas, todos los días. Nunca pierde una oportunidad, realiza seguimiento automático y te mantiene informado sobre el comportamiento de tus clientes potenciales.
          </p>
          
          <div className="space-y-6 mb-10">
            <div className="flex items-start">
              <div className="bg-irrelevant-interactive p-3 rounded-full mr-4 flex-shrink-0">
                <svg className="h-6 w-6 text-irrelevant-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6L20 6M20 6V9M20 6L13 13M12 11L4 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">Alertas en tiempo real</h4>
                <p className="text-irrelevant-textSecondary">
                  Recibe notificaciones inmediatas cuando un cliente abre tu cotización, con datos de cuántas veces y por cuánto tiempo la revisó.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-irrelevant-interactive p-3 rounded-full mr-4 flex-shrink-0">
                <svg className="h-6 w-6 text-irrelevant-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">Seguimiento automático</h4>
                <p className="text-irrelevant-textSecondary">
                  Envía mensajes personalizados por WhatsApp o email en el momento perfecto, basándose en la interacción del cliente con tu propuesta.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-irrelevant-interactive p-3 rounded-full mr-4 flex-shrink-0">
                <svg className="h-6 w-6 text-irrelevant-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 8L21 12M21 12L17 16M21 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">Priorización inteligente</h4>
                <p className="text-irrelevant-textSecondary">
                  Identifica automáticamente cuáles leads están más interesados, permitiéndote enfocar tus esfuerzos en los clientes con mayor potencial.
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
              <h4 className="font-bold mb-1">Integración con tu CRM</h4>
              <p className="text-sm">Toda la información se sincroniza directamente con tu sistema de gestión de clientes, manteniendo todo centralizado</p>
            </div>
          </div>
          
          <a 
            href="https://wa.me/573183351733?text=Quiero%20a%20QuoteBot%20para%20monitorear%20mis%20cotizaciones"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-irrelevant-primary hover:bg-irrelevant-primary/90 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-irrelevant-primary/30 inline-flex items-center"
          >
            QUIERO A MR.IRRELEVANT EN MI EQUIPO DE VENTAS
          </a>
        </div>
      </div>
    </section>
  );
};

export default AIAgentSection;