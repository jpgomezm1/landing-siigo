import { useState } from 'react';

const UseCasesSection = () => {
  const [activeTab, setActiveTab] = useState("preStay");
  
  const preStayCases = [
    {
      title: "Reservas y consultas previas",
      description: "El AI Concierge brinda información detallada sobre habitaciones, servicios y políticas antes de la llegada, resolviendo dudas instantáneamente.",
      benefits: ["Respuestas inmediatas", "Conversión de reservas 24/7"],
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Planificación del viaje",
      description: "Proporciona información sobre transporte, clima local y sugerencias de empaque, ayudando a los huéspedes a prepararse adecuadamente.",
      benefits: ["Recomendaciones personalizadas", "Mayor satisfacción pre-hospedaje"],
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 20L3 17V7L9 4M9 20L15 17M9 20V4M15 17L21 20V10L15 7M15 17V7M9 4L15 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Check-in digital",
      description: "Guía a los huéspedes a través del proceso de check-in digital, resolviendo dudas y facilitando una llegada sin complicaciones.",
      benefits: ["Reducción de filas", "Primera impresión mejorada"],
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];
  
  const duringStagCases = [
    {
      title: "Asistencia en la habitación",
      description: "Responde consultas sobre el funcionamiento de dispositivos, temperatura, servicios a la habitación y cualquier necesidad durante la estancia.",
      benefits: ["Servicio instantáneo", "Menos llamadas al personal"],
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Recomendaciones locales",
      description: "Ofrece recomendaciones personalizadas sobre restaurantes, atracciones y actividades en la zona, adaptadas a las preferencias del huésped.",
      benefits: ["Experiencia de viaje mejorada", "Recomendaciones actualizadas"],
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.6569 16.6569C16.7202 17.5935 15.4616 18.1716 14.1229 18.2803C12.7843 18.389 11.4522 18.0206 10.3744 17.2438C9.29661 16.467 8.54781 15.3322 8.27248 14.0559C7.99715 12.7796 8.21077 11.4399 8.8672 10.3176C9.52363 9.19521 10.5663 8.36716 11.796 7.99703C13.0257 7.6269 14.3539 7.74268 15.4982 8.32152C16.6425 8.90036 17.5205 9.90232 17.9642 11.1224C18.408 12.3425 18.386 13.6845 17.9032 14.8893M17.6569 16.6569L21 20M12 8L12 12L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Gestión de servicios",
      description: "Facilita la reserva de servicios del hotel como spa, restaurante, gimnasio o servicio de limpieza, todo a través de una conversación natural.",
      benefits: ["Reservas sin fricción", "Mayor uso de servicios del hotel"],
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];
  
  const renderCaseCards = (cases) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {cases.map((item, index) => (
          <div 
            key={index} 
            className="bg-gradient-to-br from-irrelevant-component to-irrelevant-component/80 rounded-xl border border-irrelevant-border overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-irrelevant-primary/10 hover:border-irrelevant-primary/30"
          >
            <div className="p-4 sm:p-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-irrelevant-background flex items-center justify-center mb-3 sm:mb-4">
                {item.icon}
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{item.title}</h3>
              
              <p className="text-xs sm:text-sm text-irrelevant-textSecondary mb-4 sm:mb-6">
                {item.description}
              </p>
              
              <div className="pt-3 sm:pt-4 border-t border-irrelevant-border">
                {item.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center mb-2 last:mb-0">
                    <div className="w-2 h-2 rounded-full bg-irrelevant-primary mr-2"></div>
                    <span className="text-xs sm:text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  return (
    <section id="use-cases" className="section-container py-12 sm:py-16 md:py-24 bg-gradient-to-b from-irrelevant-background to-irrelevant-background/90">
      <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4">
        <div className="inline-block text-irrelevant-primary text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
          <span className="bg-irrelevant-primary/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full uppercase tracking-wider">Funcionalidades clave</span>
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
          Solución para 
          <span className="bg-gradient-to-r from-irrelevant-primary to-purple-400 text-transparent bg-clip-text"> cada momento </span>
          de la experiencia
        </h2>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-irrelevant-textSecondary">
          El AI Concierge de irrelevant está presente en cada etapa del viaje de tus huéspedes, mejorando su experiencia en todo momento.
        </p>
      </div>
      
      {/* Tabs navigation */}
      <div className="flex justify-center mb-8 sm:mb-10 md:mb-12 px-4">
        <div className="bg-irrelevant-interactive p-1 sm:p-1.5 rounded-full inline-flex flex-col sm:flex-row">
          <button 
            onClick={() => setActiveTab("preStay")}
            className={`py-2 sm:py-3 px-4 sm:px-6 rounded-full text-xs sm:text-sm font-medium transition-all mb-1 sm:mb-0 ${
              activeTab === 'preStay' 
                ? 'bg-irrelevant-primary text-white shadow-md' 
                : 'text-white hover:text-irrelevant-primary'
            }`}
          >
            Antes de la Llegada
          </button>
          <button 
            onClick={() => setActiveTab("duringStay")}
            className={`py-2 sm:py-3 px-4 sm:px-6 rounded-full text-xs sm:text-sm font-medium transition-all ${
              activeTab === 'duringStay' 
                ? 'bg-irrelevant-primary text-white shadow-md' 
                : 'text-white hover:text-irrelevant-primary'
            }`}
          >
            Durante la Estancia
          </button>
        </div>
      </div>
      
      {/* Illustration/Diagram */}
      <div className="max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16 p-4 sm:p-6 bg-irrelevant-component/50 rounded-xl border border-irrelevant-border mx-4 sm:mx-6 md:mx-auto">
        {activeTab === 'preStay' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-irrelevant-primary to-purple-400 text-transparent bg-clip-text">
                Optimiza la experiencia antes de la llegada
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-irrelevant-textSecondary mb-4 sm:mb-6">
                Desde la reserva hasta el check-in, el AI Concierge brinda asistencia personalizada para que la experiencia del huésped sea perfecta desde el inicio.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-irrelevant-primary/20 text-irrelevant-primary flex items-center justify-center mr-2 sm:mr-3 mt-0.5 text-xs sm:text-sm">1</div>
                  <div>
                    <h4 className="font-bold mb-1 text-sm sm:text-base">Resolución de dudas instantánea</h4>
                    <p className="text-xs sm:text-sm text-irrelevant-textSecondary">Respuestas inmediatas sobre disponibilidad, servicios y políticas</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-irrelevant-primary/20 text-irrelevant-primary flex items-center justify-center mr-2 sm:mr-3 mt-0.5 text-xs sm:text-sm">2</div>
                  <div>
                    <h4 className="font-bold mb-1 text-sm sm:text-base">Confirmación y recordatorios</h4>
                    <p className="text-xs sm:text-sm text-irrelevant-textSecondary">Mensajes proactivos para aumentar anticipación y reducir cancelaciones</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-irrelevant-primary/20 text-irrelevant-primary flex items-center justify-center mr-2 sm:mr-3 mt-0.5 text-xs sm:text-sm">3</div>
                  <div>
                    <h4 className="font-bold mb-1 text-sm sm:text-base">Asistencia multilingüe</h4>
                    <p className="text-xs sm:text-sm text-irrelevant-textSecondary">Comunicación fluida en el idioma del huésped, sin barreras</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-6 md:mt-0">
              <div className="relative w-full max-w-xs">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl transform rotate-3"></div>
                <img 
                  src="https://storage.googleapis.com/cluvi/welcome-agent.png" 
                  alt="Experiencia pre-hospedaje" 
                  className="relative z-10 rounded-xl shadow-lg object-cover w-full"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-irrelevant-primary to-purple-400 text-transparent bg-clip-text">
                Eleva la satisfacción durante la estancia
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-irrelevant-textSecondary mb-4 sm:mb-6">
                El AI Concierge está disponible 24/7 para atender todas las necesidades de tus huéspedes mientras disfrutan su hospedaje.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-irrelevant-primary/20 text-irrelevant-primary flex items-center justify-center mr-2 sm:mr-3 mt-0.5 text-xs sm:text-sm">1</div>
                  <div>
                    <h4 className="font-bold mb-1 text-sm sm:text-base">Atención inmediata a solicitudes</h4>
                    <p className="text-xs sm:text-sm text-irrelevant-textSecondary">Gestión de cualquier necesidad sin esperas ni llamadas</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-irrelevant-primary/20 text-irrelevant-primary flex items-center justify-center mr-2 sm:mr-3 mt-0.5 text-xs sm:text-sm">2</div>
                  <div>
                    <h4 className="font-bold mb-1 text-sm sm:text-base">Personalización de la experiencia</h4>
                    <p className="text-xs sm:text-sm text-irrelevant-textSecondary">Recomendaciones adaptadas a los gustos de cada huésped</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-irrelevant-primary/20 text-irrelevant-primary flex items-center justify-center mr-2 sm:mr-3 mt-0.5 text-xs sm:text-sm">3</div>
                  <div>
                    <h4 className="font-bold mb-1 text-sm sm:text-base">Resolución proactiva de problemas</h4>
                    <p className="text-xs sm:text-sm text-irrelevant-textSecondary">Anticipación a necesidades para prevenir inconvenientes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-6 md:mt-0">
              <div className="relative w-full max-w-xs">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl transform -rotate-3"></div>
                <img 
                  src="https://storage.googleapis.com/cluvi/experience-agent.png" 
                  alt="Experiencia durante la estancia" 
                  className="relative z-10 rounded-xl shadow-lg object-cover w-full"
                />
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Cards */}
      <div className="px-4 sm:px-6">
        {activeTab === 'preStay' ? renderCaseCards(preStayCases) : renderCaseCards(duringStagCases)}
      </div>
      
      <div className="text-center mt-8 sm:mt-12 md:mt-16 px-4">
        <a 
          href="https://wa.me/1234567890?text=Quiero%20implementar%20el%20AI%20Concierge%20en%20mi%20hotel"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-irrelevant-primary hover:bg-irrelevant-primary/90 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-irrelevant-primary/30 text-xs sm:text-sm inline-block w-full sm:w-auto"
        >
          <span className="inline-flex items-center justify-center font-bold">
            QUIERO UN AI CONCIERGE PARA MI HOTEL
          </span>
        </a>
      </div>
    </section>
  );
};

export default UseCasesSection;