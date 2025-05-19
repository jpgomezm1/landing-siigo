import { useState } from 'react';

const UseCasesSection = () => {
  const [activeTab, setActiveTab] = useState("due-diligence");
  
  const dueDiligenceCases = [
    {
      title: "Fondos de Venture Capital",
      description: "Ideal para analistas de fondos de inversión que evalúan múltiples startups y necesitan sistematizar la recopilación y análisis de información.",
      benefits: ["Reducción del 70% en tiempo de análisis", "Decisiones basadas en datos"],
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Equipos de Investment Banking",
      description: "Perfecto para equipos que necesitan procesar grandes volúmenes de documentación financiera y generar reportes de análisis consistentes y profesionales.",
      benefits: ["Automatización de extracción de métricas", "Centralización de información"],
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 21V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V21M19 21L21 21M19 21H14M5 21L3 21M5 21H10M9 6.99998H10M9 11H10M14 6.99998H15M14 11H15M10 16H14C14.5523 16 15 16.4477 15 17V21M10 21V17C10 16.4477 9.55228 16 9 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Family Offices",
      description: "Para oficinas familiares de inversión que evalúan oportunidades en startups y necesitan mantener procesos rigurosos de due diligence con recursos limitados.",
      benefits: ["Consistencia en evaluación", "Documentación profesional"],
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];
  
  const analyticsCases = [
    {
      title: "Portafolios Complejos",
      description: "Monitorea el rendimiento de múltiples inversiones en tu portafolio, evaluando métricas clave y generando análisis comparativos para optimizar la gestión.",
      benefits: ["Dashboard unificado de portafolio", "Detección temprana de riesgos"],
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Alineación con Tesis de Inversión",
      description: "Analiza automáticamente cómo cada oportunidad se alinea con los criterios específicos de tu tesis de inversión, priorizando las startups más compatibles.",
      benefits: ["Evaluación objetiva de criterios", "Priorización inteligente"],
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 16L8.58579 11.4142C9.36683 10.6332 10.6332 10.6332 11.4142 11.4142L16 16M14 14L15.5858 12.4142C16.3668 11.6332 17.6332 11.6332 18.4142 12.4142L20 14M14 8H14.01M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Integración con CRM y Workflows",
      description: "Conecta InvestFlow con tus sistemas existentes para crear un flujo de trabajo completo, desde el primer contacto hasta el cierre de inversión.",
      benefits: ["Flujo de trabajo centralizado", "Vista 360° de oportunidades"],
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 21H17C18.1046 21 19 20.1046 19 19V9.41421C19 9.149 18.8946 8.89464 18.7071 8.70711L13.2929 3.29289C13.1054 3.10536 12.851 3 12.5858 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13 3V8C13 8.55228 13.4477 9 14 9H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
          <span className="bg-irrelevant-primary/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full uppercase tracking-wider">Casos de uso</span>
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
          La solución para 
          <span className="bg-gradient-to-r from-irrelevant-primary to-purple-400 text-transparent bg-clip-text"> fondos de inversión </span>
          de alto rendimiento
        </h2>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-irrelevant-textSecondary">
          InvestFlow transforma el proceso manual de due diligence en un flujo eficiente y estructurado, permitiéndote tomar decisiones más informadas sobre tus inversiones.
        </p>
      </div>
      
      {/* Tabs navigation */}
      <div className="flex justify-center mb-8 sm:mb-10 md:mb-12 px-4">
        <div className="bg-irrelevant-interactive p-1 sm:p-1.5 rounded-full inline-flex flex-col sm:flex-row">
          <button 
            onClick={() => setActiveTab("due-diligence")}
            className={`py-2 sm:py-3 px-4 sm:px-6 rounded-full text-xs sm:text-sm font-medium transition-all mb-1 sm:mb-0 ${
              activeTab === 'due-diligence' 
                ? 'bg-irrelevant-primary text-white shadow-md' 
                : 'text-white hover:text-irrelevant-primary'
            }`}
          >
            Automatización de Due Diligence
          </button>
          <button 
            onClick={() => setActiveTab("analytics")}
            className={`py-2 sm:py-3 px-4 sm:px-6 rounded-full text-xs sm:text-sm font-medium transition-all ${
              activeTab === 'analytics' 
                ? 'bg-irrelevant-primary text-white shadow-md' 
                : 'text-white hover:text-irrelevant-primary'
            }`}
          >
            Analytics Avanzado
          </button>
        </div>
      </div>
      
      {/* Illustration/Diagram */}
      <div className="max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16 p-4 sm:p-6 bg-irrelevant-component/50 rounded-xl border border-irrelevant-border mx-4 sm:mx-6 md:mx-auto">
        {activeTab === 'due-diligence' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-irrelevant-primary to-purple-400 text-transparent bg-clip-text">
                De documentos dispersos a Investment Memos profesionales
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-irrelevant-textSecondary mb-4 sm:mb-6">
                Transforma información no estructurada en documentos alineados con la tesis de inversión del fondo, reduciendo drásticamente el tiempo de análisis.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-irrelevant-primary/20 text-irrelevant-primary flex items-center justify-center mr-2 sm:mr-3 mt-0.5 text-xs sm:text-sm">1</div>
                  <div>
                    <h4 className="font-bold mb-1 text-sm sm:text-base">Ingesta documentos</h4>
                    <p className="text-xs sm:text-sm text-irrelevant-textSecondary">Importa PDFs, hojas de cálculo y presentaciones en un solo clic</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-irrelevant-primary/20 text-irrelevant-primary flex items-center justify-center mr-2 sm:mr-3 mt-0.5 text-xs sm:text-sm">2</div>
                  <div>
                    <h4 className="font-bold mb-1 text-sm sm:text-base">Procesamiento IA automático</h4>
                    <p className="text-xs sm:text-sm text-irrelevant-textSecondary">Extracción inteligente de métricas, entidades y datos clave</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-irrelevant-primary/20 text-irrelevant-primary flex items-center justify-center mr-2 sm:mr-3 mt-0.5 text-xs sm:text-sm">3</div>
                  <div>
                    <h4 className="font-bold mb-1 text-sm sm:text-base">Genera Investment Memos</h4>
                    <p className="text-xs sm:text-sm text-irrelevant-textSecondary">Documentos estructurados y personalizados con la identidad del fondo</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-6 md:mt-0">
              <div className="relative w-full max-w-xs">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl transform rotate-3"></div>
                <img 
                  src="https://storage.googleapis.com/cluvi/Images%20Web%20irrelevant/cotizando_irrelevant.png" 
                  alt="Due Diligence automatizado" 
                  className="relative z-10 rounded-xl shadow-lg object-cover w-full"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-irrelevant-primary to-purple-400 text-transparent bg-clip-text">
                Análisis inteligente de oportunidades de inversión
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-irrelevant-textSecondary mb-4 sm:mb-6">
                Evalúa la alineación con tu tesis de inversión y obtén insights profundos sobre cada startup utilizando IA y procesamiento avanzado de datos.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-irrelevant-primary/20 text-irrelevant-primary flex items-center justify-center mr-2 sm:mr-3 mt-0.5 text-xs sm:text-sm">1</div>
                  <div>
                    <h4 className="font-bold mb-1 text-sm sm:text-base">Consultas en lenguaje natural</h4>
                    <p className="text-xs sm:text-sm text-irrelevant-textSecondary">Pregunta sobre cualquier aspecto de la startup y obtén respuestas con citas</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-irrelevant-primary/20 text-irrelevant-primary flex items-center justify-center mr-2 sm:mr-3 mt-0.5 text-xs sm:text-sm">2</div>
                  <div>
                    <h4 className="font-bold mb-1 text-sm sm:text-base">Evaluación de alineación</h4>
                    <p className="text-xs sm:text-sm text-irrelevant-textSecondary">Detecta automáticamente compatibilidad con criterios de inversión del fondo</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-irrelevant-primary/20 text-irrelevant-primary flex items-center justify-center mr-2 sm:mr-3 mt-0.5 text-xs sm:text-sm">3</div>
                  <div>
                    <h4 className="font-bold mb-1 text-sm sm:text-base">Dashboard centralizado</h4>
                    <p className="text-xs sm:text-sm text-irrelevant-textSecondary">Visualiza KPIs clave y progreso de due diligence de todo tu pipeline</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-6 md:mt-0">
              <div className="relative w-full max-w-xs">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl transform -rotate-3"></div>
                <img 
                  src="https://storage.googleapis.com/cluvi/Images%20Web%20irrelevant/closing_irrelevant.png" 
                  alt="Analytics avanzado" 
                  className="relative z-10 rounded-xl shadow-lg object-cover w-full"
                />
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Cards */}
      <div className="px-4 sm:px-6">
        {activeTab === 'due-diligence' ? renderCaseCards(dueDiligenceCases) : renderCaseCards(analyticsCases)}
      </div>
      
      <div className="text-center mt-8 sm:mt-12 md:mt-16 px-4">
        <a 
          href="https://wa.me/573183351733?text=Quiero%20implementar%20InvestFlow%20en%20mi%20fondo%20de%20inversión"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-irrelevant-primary hover:bg-irrelevant-primary/90 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-irrelevant-primary/30 text-xs sm:text-sm inline-block w-full sm:w-auto"
        >
          <span className="inline-flex items-center justify-center font-bold">
            QUIERO INVESTFLOW PARA MI FONDO DE INVERSIÓN
          </span>
        </a>
      </div>
    </section>
  );
};

export default UseCasesSection;