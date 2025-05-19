import { useEffect, useRef, useState } from 'react';

const DemoSection = () => {
  const demoRef = useRef();
  const [activeStep, setActiveStep] = useState(1);
  const [showInsights, setShowInsights] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [isInView, setIsInView] = useState(false);
  
  // Controlar la aparición de elementos cuando están en la vista
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    
    const element = demoRef.current;
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);
  
  // Efecto para mostrar insights después de unos segundos
  useEffect(() => {
    if (isInView && activeStep === 2) {
      const timer = setTimeout(() => {
        setShowInsights(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, activeStep]);
  
  // Efecto para mostrar análisis cuando corresponda
  useEffect(() => {
    if (isInView && activeStep === 3) {
      const timer = setTimeout(() => {
        setShowAnalysis(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, activeStep]);
  
  // Función para avanzar al siguiente paso
  const nextStep = () => {
    if (activeStep < 3) {
      setActiveStep(activeStep + 1);
      // Resetear estados
      setShowInsights(false);
      setShowAnalysis(false);
    } else {
      // Si estamos en el último paso, volver al primero
      setActiveStep(1);
      setShowInsights(false);
      setShowAnalysis(false);
    }
  };
  
  return (
    <section className="py-24 bg-gradient-to-b from-irrelevant-background to-irrelevant-background/80">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="inline-block text-irrelevant-primary text-sm font-semibold mb-4">
            <span className="bg-irrelevant-primary/10 px-4 py-2 rounded-full uppercase tracking-wider">Ver para creer</span>
          </div>
          <h2 className="mb-6">
            Descubre cómo 
            <span className="bg-gradient-to-r from-irrelevant-primary to-purple-400 text-transparent bg-clip-text"> transformamos </span>
            el due diligence
          </h2>
          <p className="max-w-2xl mx-auto text-irrelevant-textSecondary">
            Experimenta la potencia de la IA aplicada al análisis de inversiones y comprende cómo InvestFlow procesa documentos, extrae insights valiosos y genera Investment Memos profesionales.
          </p>
        </div>
        
        <div ref={demoRef} className="relative max-w-5xl mx-auto">
          {/* Demo Container */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-irrelevant-component border border-irrelevant-border/30">
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 rounded-xl p-0.5 bg-gradient-to-r from-irrelevant-primary/30 to-purple-400/30 z-0">
              <div className="w-full h-full bg-irrelevant-component rounded-xl"></div>
            </div>
            
            {/* Demo Content */}
            <div className="relative z-10 rounded-lg overflow-hidden p-4 sm:p-6">
              {/* Step Indicator - Mobile */}
              <div className="md:hidden flex justify-between items-center mb-4 px-2">
                {[1, 2, 3].map((step) => (
                  <div 
                    key={step} 
                    className={`relative flex flex-col items-center ${activeStep >= step ? 'text-irrelevant-primary' : 'text-irrelevant-textSecondary'}`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activeStep >= step ? 'bg-irrelevant-primary text-white' : 'bg-irrelevant-interactive/30'}`}>
                      {step}
                    </div>
                    <div className="text-xs mt-1 font-medium">
                      {step === 1 ? 'Ingesta' : step === 2 ? 'Procesamiento' : 'Generación'}
                    </div>
                    {step < 3 && (
                      <div className={`absolute top-4 left-full w-full h-0.5 ${activeStep > step ? 'bg-irrelevant-primary' : 'bg-irrelevant-interactive/30'}`} style={{ width: 'calc(100% - 2rem)' }}></div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                {/* Step Indicator - Desktop */}
                <div className="hidden md:flex flex-col justify-start space-y-8 pt-4">
                  {[1, 2, 3].map((step) => (
                    <div 
                      key={step} 
                      className={`relative flex items-center ${activeStep >= step ? 'text-irrelevant-primary' : 'text-irrelevant-textSecondary'}`}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activeStep >= step ? 'bg-irrelevant-primary text-white' : 'bg-irrelevant-interactive/30'}`}>
                        {step}
                      </div>
                      <div className="ml-3 font-medium">
                        {step === 1 ? 'Ingesta de documentos' : step === 2 ? 'Procesamiento con IA' : 'Generación de Investment Memo'}
                      </div>
                      {step < 3 && (
                        <div className={`absolute top-10 left-5 w-0.5 h-14 ${activeStep > step ? 'bg-irrelevant-primary' : 'bg-irrelevant-interactive/30'}`}></div>
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Main Demo Content */}
                <div className="flex-1 relative">
                  {/* Step 1: Ingesta de documentos */}
                  {activeStep === 1 && (
                    <div className="bg-irrelevant-background rounded-lg overflow-hidden shadow-md transition-all duration-500 transform">
                      {/* Cabecera del sistema */}
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9 12H15M12 9V15M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <h3 className="text-xl font-bold">InvestFlow</h3>
                          </div>
                          <div className="text-sm opacity-90">Proyecto: FinTech-XYZ</div>
                        </div>
                        <div className="mt-4">
                          <h3 className="text-2xl font-bold">Módulo de Ingesta Documental</h3>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-8 mb-6 bg-white">
                          <svg className="w-16 h-16 text-gray-400 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 16L8.58579 11.4142C9.36683 10.6332 10.6332 10.6332 11.4142 11.4142L16 16M14 14L15.5858 12.4142C16.3668 11.6332 17.6332 11.6332 18.4142 12.4142L20 14M14 8H14.01M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <p className="text-center text-gray-600 mb-4">Arrastra y suelta todos los documentos relacionados con la startup</p>
                          <button className="bg-irrelevant-primary text-white px-4 py-2 rounded-lg text-sm">
                            O selecciona archivos
                          </button>
                        </div>
                        
                        <div className="space-y-3">
                          <p className="text-sm text-gray-600 mb-2 font-medium">Documentos aceptados:</p>
                          
                          <div className="flex flex-wrap gap-3">
                            <div className="flex items-center bg-blue-50 px-3 py-2 rounded-lg border border-blue-200">
                              <svg className="w-5 h-5 text-blue-600 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9M13 2L20 9M13 2V9H20M8 12H16M8 16H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                              <span className="text-xs">Documentos PDF</span>
                            </div>
                            
                            <div className="flex items-center bg-green-50 px-3 py-2 rounded-lg border border-green-200">
                              <svg className="w-5 h-5 text-green-600 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 21H17C18.1046 21 19 20.1046 19 19V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9 7H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9 11H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9 15H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                              <span className="text-xs">Archivos DOCX</span>
                            </div>
                            
                            <div className="flex items-center bg-orange-50 px-3 py-2 rounded-lg border border-orange-200">
                              <svg className="w-5 h-5 text-orange-600 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 16L8.58579 11.4142C9.36683 10.6332 10.6332 10.6332 11.4142 11.4142L16 16M14 14L15.5858 12.4142C16.3668 11.6332 17.6332 11.6332 18.4142 12.4142L20 14M14 8H14.01M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                              <span className="text-xs">Presentaciones PPTX</span>
                            </div>
                            
                            <div className="flex items-center bg-purple-50 px-3 py-2 rounded-lg border border-purple-200">
                              <svg className="w-5 h-5 text-purple-600 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 13H10C10.5523 13 11 12.5523 11 12V4C11 3.44772 10.5523 3 10 3H4C3.44772 3 3 3.44772 3 4V12C3 12.5523 3.44772 13 4 13ZM4 13H10C10.5523 13 11 13.4477 11 14V20C11 20.5523 10.5523 21 10 21H4C3.44772 21 3 20.5523 3 20V14C3 13.4477 3.44772 13 4 13ZM14 21H20C20.5523 21 21 20.5523 21 20V12C21 11.4477 20.5523 11 20 11H14C13.4477 11 13 11.4477 13 12V20C13 20.5523 13.4477 21 14 21ZM14 3H20C20.5523 3 21 3.44772 21 4V8C21 8.55228 20.5523 9 20 9H14C13.4477 9 13 8.55228 13 8V4C13 3.44772 13.4477 3 14 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                              <span className="text-xs">Hojas de cálculo XLS/CSV</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-8 bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <div className="flex items-start">
                            <div className="bg-blue-100 p-2 rounded-full mr-3">
                              <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 16H12V12H11M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                            <div>
                              <h4 className="text-sm font-bold text-gray-800 mb-1">¿Qué sucede en esta etapa?</h4>
                              <p className="text-xs text-gray-600">
                                InvestFlow acepta múltiples formatos de documentos: pitch decks, estados financieros, informes de mercado, análisis de competidores y más. Todos son procesados y almacenados de manera segura para su análisis.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border-t border-gray-200 p-4 bg-gray-50">
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-600">5 documentos preparados para ingesta</div>
                          <button className="bg-irrelevant-primary text-white px-4 py-2 rounded-lg text-sm flex items-center">
                            Iniciar procesamiento
                            <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Step 2: Procesamiento con IA */}
                  {activeStep === 2 && (
                    <div className="bg-irrelevant-background rounded-lg overflow-hidden shadow-md transition-all duration-500 transform">
                      {/* Cabecera del sistema */}
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9 12H15M12 9V15M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <h3 className="text-xl font-bold">InvestFlow</h3>
                          </div>
                          <div className="text-sm opacity-90">Proyecto: FinTech-XYZ</div>
                        </div>
                        <div className="mt-4">
                          <h3 className="text-2xl font-bold">Motor de Procesamiento IA</h3>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="mb-6">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-bold text-gray-800">Procesamiento de documentos</h4>
                            <div className="text-sm text-green-600 font-medium flex items-center">
                              <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                              Completado
                            </div>
                          </div>
                          
                          <div className="bg-white rounded-lg border border-gray-200 p-3">
                            <div className="space-y-2">
                              <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                  <svg className="w-5 h-5 text-blue-600 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9M13 2L20 9M13 2V9H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                  <span className="text-sm">Pitch_Deck_FinTech-XYZ.pdf</span>
                                </div>
                                <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Procesado</div>
                              </div>
                              
                              <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                  <svg className="w-5 h-5 text-green-600 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 17V15M12 17V13M15 17V11M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                  <span className="text-sm">Financials_Q2_2025.xlsx</span>
                                </div>
                                <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Procesado</div>
                              </div>
                              
                              <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                  <svg className="w-5 h-5 text-orange-600 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 16L8.58579 11.4142C9.36683 10.6332 10.6332 10.6332 11.4142 11.4142L16 16M14 14L15.5858 12.4142C16.3668 11.6332 17.6332 11.6332 18.4142 12.4142L20 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                  <span className="text-sm">Market_Report_FinTech.pptx</span>
                                </div>
                                <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Procesado</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-bold text-gray-800">Extracción de datos</h4>
                            <div className="text-sm text-green-600 font-medium flex items-center">
                              <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                              Completado
                            </div>
                          </div>
                          
                          {/* Visualización de extracción de datos con animación de aparición */}
                          <div className={`bg-white rounded-lg border border-gray-200 p-4 transition-all duration-700 ${showInsights ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="space-y-4">
                              <div>
                                <h5 className="text-sm font-bold text-gray-700 mb-2">Métricas clave identificadas</h5>
                                <div className="grid grid-cols-2 gap-3">
                                  <div className="bg-blue-50 rounded-lg p-2 border border-blue-100">
                                    <div className="text-xs text-gray-500">ARR (Ingresos recurrentes anuales)</div>
                                    <div className="text-lg font-bold text-blue-700">$3.2M</div>
                                  </div>
                                  <div className="bg-green-50 rounded-lg p-2 border border-green-100">
                                    <div className="text-xs text-gray-500">Crecimiento MoM</div>
                                    <div className="text-lg font-bold text-green-700">18.7%</div>
                                  </div>
                                  <div className="bg-purple-50 rounded-lg p-2 border border-purple-100">
                                    <div className="text-xs text-gray-500">CAC (Coste adquisición)</div>
                                    <div className="text-lg font-bold text-purple-700">$420</div>
                                  </div>
                                  <div className="bg-indigo-50 rounded-lg p-2 border border-indigo-100">
                                    <div className="text-xs text-gray-500">LTV (Valor tiempo de vida)</div>
                                    <div className="text-lg font-bold text-indigo-700">$2,800</div>
                                  </div>
                                </div>
                              </div>
                              
                              <div>
                                <h5 className="text-sm font-bold text-gray-700 mb-2">Equipo fundador</h5>
                                <div className="flex flex-wrap gap-3">
                                <div className="flex items-center bg-gray-50 px-3 py-2 rounded-lg border border-gray-200">
                                    <div className="w-8 h-8 bg-irrelevant-primary/20 rounded-full flex items-center justify-center mr-2">
                                      <span className="text-xs font-bold text-irrelevant-primary">ML</span>
                                    </div>
                                    <div>
                                      <div className="text-xs font-bold">María López</div>
                                      <div className="text-xs text-gray-500">CTO, ex-Google</div>
                                    </div>
                                  </div>
                                  
                                  <div className="flex items-center bg-gray-50 px-3 py-2 rounded-lg border border-gray-200">
                                    <div className="w-8 h-8 bg-irrelevant-primary/20 rounded-full flex items-center justify-center mr-2">
                                      <span className="text-xs font-bold text-irrelevant-primary">AT</span>
                                    </div>
                                    <div>
                                      <div className="text-xs font-bold">Andrés Torres</div>
                                      <div className="text-xs text-gray-500">CFO, ex-JP Morgan</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              <div>
                                <h5 className="text-sm font-bold text-gray-700 mb-2">Mercado identificado</h5>
                                <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                                  <p className="text-xs text-gray-600">Fintech B2B enfocado en pagos transfronterizos para PyMEs en Latinoamérica. Mercado total estimado (TAM) de $14.2B con crecimiento anual del 24%.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <div className="flex items-start">
                            <div className="bg-purple-100 p-2 rounded-full mr-3">
                              <svg className="w-6 h-6 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.5 3H5.5C4.11929 3 3 4.11929 3 5.5V9.5C3 10.8807 4.11929 12 5.5 12H9.5C10.8807 12 12 10.8807 12 9.5V5.5C12 4.11929 10.8807 3 9.5 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9.5 15H5.5C4.11929 15 3 16.1193 3 17.5V21.5C3 22.8807 4.11929 24 5.5 24H9.5C10.8807 24 12 22.8807 12 21.5V17.5C12 16.1193 10.8807 15 9.5 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M21.5 3H17.5C16.1193 3 15 4.11929 15 5.5V9.5C15 10.8807 16.1193 12 17.5 12H21.5C22.8807 12 24 10.8807 24 9.5V5.5C24 4.11929 22.8807 3 21.5 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M15 17.5C15 16.1193 16.1193 15 17.5 15H21.5C22.8807 15 24 16.1193 24 17.5V21.5C24 22.8807 22.8807 24 21.5 24H17.5C16.1193 24 15 22.8807 15 21.5V17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                            <div>
                              <h4 className="text-sm font-bold text-gray-800 mb-1">¿Qué sucede en esta etapa?</h4>
                              <p className="text-xs text-gray-600">
                                La tecnología RAG (Retrieval Augmented Generation) y modelos de IA avanzados extraen automáticamente entidades clave, métricas financieras, información del equipo y datos de mercado de los documentos, organizando todo en una estructura accesible.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border-t border-gray-200 p-4 bg-gray-50">
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-600">Procesamiento completado</div>
                          <button className="bg-irrelevant-primary text-white px-4 py-2 rounded-lg text-sm flex items-center">
                            Generar Investment Memo
                            <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Step 3: Generación de Investment Memo */}
                  {activeStep === 3 && (
                    <div className="bg-irrelevant-background rounded-lg overflow-hidden shadow-md transition-all duration-500 transform">
                      {/* Cabecera del sistema */}
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9 12H15M12 9V15M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <h3 className="text-xl font-bold">InvestFlow</h3>
                          </div>
                          <div className="text-sm opacity-90">Proyecto: FinTech-XYZ</div>
                        </div>
                        <div className="mt-4">
                          <h3 className="text-2xl font-bold">Investment Memo Generated</h3>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex mb-6">
                          <div className="flex-1">
                            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                              <div className="p-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
                                <div className="flex items-center">
                                  <svg className="w-6 h-6 text-gray-700 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 7V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                  <span className="font-bold">Investment Memo - FinTech-XYZ</span>
                                </div>
                                <div className="flex space-x-2">
                                  <button className="bg-gray-200 hover:bg-gray-300 rounded p-1">
                                    <svg className="w-4 h-4 text-gray-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M4 16L8.58579 11.4142C9.36683 10.6332 10.6332 10.6332 11.4142 11.4142L16 16M14 14L15.5858 12.4142C16.3668 11.6332 17.6332 11.6332 18.4142 12.4142L20 14M14 8H14.01M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                  </button>
                                  <button className="bg-gray-200 hover:bg-gray-300 rounded p-1">
                                    <svg className="w-4 h-4 text-gray-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M4 16.5L12 9L20 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                  </button>
                                </div>
                              </div>
                              
                              {/* Documento generado con análisis de la IA */}
                              <div className={`transition-all duration-700 ${showAnalysis ? 'opacity-100' : 'opacity-0'}`}>
                                <div className="p-4 max-h-96 overflow-y-auto bg-white">
                                  <div className="mb-6">
                                    <h1 className="text-xl font-bold text-gray-900 mb-2">Resumen Ejecutivo</h1>
                                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 mb-4">
                                      <p className="text-xs text-gray-700">
                                        <strong>Alineación con tesis: 87% compatible</strong> - Esta startup muestra una fuerte alineación con nuestra tesis de inversión en servicios financieros B2B en mercados emergentes.
                                      </p>
                                    </div>
                                    <p className="text-sm text-gray-700 mb-3">
                                      FinTech-XYZ es una plataforma de pagos transfronterizos para PyMEs en Latinoamérica que reduce costos de transacción hasta en un 70% y tiempos de liquidación de 3-5 días a menos de 24 horas. Con un equipo fundador de primer nivel y tracción inicial sólida, la empresa está bien posicionada para capturar una parte significativa del mercado de $14.2B en rápido crecimiento.
                                    </p>
                                    <div className="flex justify-between items-center text-xs text-gray-500 border-t border-gray-200 pt-2">
                                      <div>Fuentes: Pitch_Deck_FinTech-XYZ.pdf, pág. 4-7</div>
                                      <div>Última actualización: Hoy, 10:45 AM</div>
                                    </div>
                                  </div>
                                  
                                  <div className="mb-6">
                                    <h2 className="text-lg font-bold text-gray-900 mb-2">Tesis de Inversión</h2>
                                    <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5 mb-4">
                                      <li>Mercado enorme y en crecimiento: $14.2B TAM con CAGR del 24%</li>
                                      <li>Propuesta de valor diferenciada: reducción de 70% en costos</li>
                                      <li>Tecnología propietaria: algoritmos de enrutamiento de pagos</li>
                                      <li>Equipo excepcional con experiencia relevante en fintech</li>
                                      <li>Métricas de crecimiento sólidas: 18.7% MoM en últimos 6 meses</li>
                                    </ul>
                                    <div className="flex justify-between items-center text-xs text-gray-500 border-t border-gray-200 pt-2">
                                      <div>Fuentes: Market_Report_FinTech.pptx, Financials_Q2_2025.xlsx</div>
                                      <div>Última actualización: Hoy, 10:47 AM</div>
                                    </div>
                                  </div>
                                  
                                  <div className="mb-6">
                                    <h2 className="text-lg font-bold text-gray-900 mb-2">Análisis Financiero</h2>
                                    <div className="bg-white rounded-lg border border-gray-200 mb-4 overflow-hidden">
                                      <table className="w-full text-sm">
                                        <thead className="bg-gray-50">
                                          <tr>
                                            <th className="text-left p-2 text-xs font-medium text-gray-500">Métrica</th>
                                            <th className="text-right p-2 text-xs font-medium text-gray-500">Actual</th>
                                            <th className="text-right p-2 text-xs font-medium text-gray-500">Proyección (12m)</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr className="border-t border-gray-200">
                                            <td className="p-2 text-xs">ARR</td>
                                            <td className="p-2 text-xs text-right">$3.2M</td>
                                            <td className="p-2 text-xs text-right text-green-600">$7.8M</td>
                                          </tr>
                                          <tr className="border-t border-gray-200">
                                            <td className="p-2 text-xs">Margen bruto</td>
                                            <td className="p-2 text-xs text-right">68%</td>
                                            <td className="p-2 text-xs text-right text-green-600">72%</td>
                                          </tr>
                                          <tr className="border-t border-gray-200">
                                            <td className="p-2 text-xs">CAC</td>
                                            <td className="p-2 text-xs text-right">$420</td>
                                            <td className="p-2 text-xs text-right text-green-600">$380</td>
                                          </tr>
                                          <tr className="border-t border-gray-200">
                                            <td className="p-2 text-xs">LTV</td>
                                            <td className="p-2 text-xs text-right">$2,800</td>
                                            <td className="p-2 text-xs text-right text-green-600">$3,200</td>
                                          </tr>
                                          <tr className="border-t border-gray-200">
                                            <td className="p-2 text-xs">LTV:CAC</td>
                                            <td className="p-2 text-xs text-right">6.7x</td>
                                            <td className="p-2 text-xs text-right text-green-600">8.4x</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                    <div className="flex justify-between items-center text-xs text-gray-500 border-t border-gray-200 pt-2">
                                      <div>Fuentes: Financials_Q2_2025.xlsx</div>
                                      <div>Última actualización: Hoy, 10:49 AM</div>
                                    </div>
                                  </div>
                                  
                                  <div className="text-xs text-gray-500 flex items-center">
                                    <svg className="w-4 h-4 mr-1 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    Documento completo: 43 páginas con análisis detallado
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Panel de evaluación de alineación */}
                          <div className={`ml-6 w-64 transition-all duration-700 delay-300 ${showAnalysis ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="bg-white rounded-lg border border-gray-200 p-4">
                              <h4 className="font-bold text-gray-800 mb-4 text-center">Alineación con Tesis</h4>
                              
                              <div className="mb-6">
                                <div className="relative pt-1">
                                  <div className="text-center mb-2">
                                    <span className="text-2xl font-bold text-green-600">87%</span>
                                  </div>
                                  <div className="flex h-2 overflow-hidden text-xs bg-green-200 rounded-full">
                                    <div className="flex flex-col justify-center text-center text-white bg-green-600 rounded-full" style={{ width: '87%' }}></div>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="space-y-3">
                                <div>
                                  <div className="flex justify-between mb-1">
                                    <span className="text-xs font-medium text-gray-700">Mercado objetivo</span>
                                    <span className="text-xs font-medium text-green-700">95%</span>
                                  </div>
                                  <div className="h-1.5 bg-gray-200 rounded-full">
                                    <div className="h-full bg-green-600 rounded-full" style={{ width: '95%' }}></div>
                                  </div>
                                </div>
                                
                                <div>
                                  <div className="flex justify-between mb-1">
                                    <span className="text-xs font-medium text-gray-700">Modelo de negocio</span>
                                    <span className="text-xs font-medium text-green-700">90%</span>
                                  </div>
                                  <div className="h-1.5 bg-gray-200 rounded-full">
                                    <div className="h-full bg-green-600 rounded-full" style={{ width: '90%' }}></div>
                                  </div>
                                </div>
                                
                                <div>
                                  <div className="flex justify-between mb-1">
                                    <span className="text-xs font-medium text-gray-700">Etapa de desarrollo</span>
                                    <span className="text-xs font-medium text-yellow-700">78%</span>
                                  </div>
                                  <div className="h-1.5 bg-gray-200 rounded-full">
                                    <div className="h-full bg-yellow-500 rounded-full" style={{ width: '78%' }}></div>
                                  </div>
                                </div>
                                
                                <div>
                                  <div className="flex justify-between mb-1">
                                    <span className="text-xs font-medium text-gray-700">Tecnología</span>
                                    <span className="text-xs font-medium text-green-700">88%</span>
                                  </div>
                                  <div className="h-1.5 bg-gray-200 rounded-full">
                                    <div className="h-full bg-green-600 rounded-full" style={{ width: '88%' }}></div>
                                  </div>
                                </div>
                                
                                <div>
                                  <div className="flex justify-between mb-1">
                                    <span className="text-xs font-medium text-gray-700">Retorno potencial</span>
                                    <span className="text-xs font-medium text-green-700">85%</span>
                                  </div>
                                  <div className="h-1.5 bg-gray-200 rounded-full">
                                    <div className="h-full bg-green-600 rounded-full" style={{ width: '85%' }}></div>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="mt-6 pt-4 border-t border-gray-200">
                                <div className="flex items-center justify-center">
                                  <div className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium flex items-center">
                                    <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    Recomendado para inversión
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <div className="flex items-start">
                            <div className="bg-green-100 p-2 rounded-full mr-3">
                              <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                            <div>
                              <h4 className="text-sm font-bold text-gray-800 mb-1">¿Qué sucede en esta etapa?</h4>
                              <p className="text-xs text-gray-600">
                                La IA genera un Investment Memo completo de ~40 páginas, evaluando automáticamente la alineación con la tesis de inversión del fondo. Cada afirmación incluye citas directas a los documentos fuente, permitiendo una revisión más eficiente y reduciendo el tiempo de análisis de días a horas.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border-t border-gray-200 p-4 bg-gray-50">
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-600">Investment Memo generado</div>
                          <div className="flex space-x-3">
                            <button className="border border-gray-300 bg-white text-gray-700 px-4 py-2 rounded-lg text-sm flex items-center">
                              <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 16L8.58579 11.4142C9.36683 10.6332 10.6332 10.6332 11.4142 11.4142L16 16M14 14L15.5858 12.4142C16.3668 11.6332 17.6332 11.6332 18.4142 12.4142L20 14M14 8H14.01M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                              Exportar PDF
                            </button>
                            <button className="bg-irrelevant-primary text-white px-4 py-2 rounded-lg text-sm flex items-center">
                              Compartir con equipo
                              <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.59 16.58L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.58Z" fill="currentColor"/>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Navigation Controls */}
              <div className="mt-6 flex justify-center">
                <button
                  onClick={nextStep}
                  className="bg-irrelevant-primary hover:bg-irrelevant-primary/90 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-irrelevant-primary/30 flex items-center"
                >
                  {activeStep < 3 ? 'Siguiente paso' : 'Volver a empezar'}
                  {activeStep < 3 && (
                    <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          
          {/* Title and Description below demo */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold mb-4">Transforma 15-20 horas de trabajo manual en un proceso eficiente de minutos</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-irrelevant-component p-4 rounded-lg border border-irrelevant-border">
                <div className="w-8 h-8 rounded-full bg-irrelevant-primary/20 text-irrelevant-primary flex items-center justify-center mx-auto mb-3">1</div>
                <h4 className="font-bold mb-2">Ingesta multiformato</h4>
                <p className="text-sm text-irrelevant-textSecondary">Carga cualquier tipo de documento y deja que el sistema los procese automáticamente sin necesidad de formateo previo</p>
              </div>
              <div className="bg-irrelevant-component p-4 rounded-lg border border-irrelevant-border">
                <div className="w-8 h-8 rounded-full bg-irrelevant-primary/20 text-irrelevant-primary flex items-center justify-center mx-auto mb-3">2</div>
                <h4 className="font-bold mb-2">Extracción inteligente de datos</h4>
                <p className="text-sm text-irrelevant-textSecondary">Tecnología RAG que identifica y extrae automáticamente entidades, métricas clave y datos relevantes</p>
              </div>
              <div className="bg-irrelevant-component p-4 rounded-lg border border-irrelevant-border">
                <div className="w-8 h-8 rounded-full bg-irrelevant-primary/20 text-irrelevant-primary flex items-center justify-center mx-auto mb-3">3</div>
                <h4 className="font-bold mb-2">Generación de Investment Memos</h4>
                <p className="text-sm text-irrelevant-textSecondary">Documentos profesionales completos y personalizados, alineados con la tesis de inversión de tu fondo</p>
              </div>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="text-center mt-10">
            <a 
              href="https://wa.me/573183351733?text=Me%20interesa%20InvestFlow%20para%20optimizar%20nuestro%20proceso%20de%20due%20diligence"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-irrelevant-primary hover:bg-irrelevant-primary/90 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-irrelevant-primary/30 inline-flex items-center"
            >
              QUIERO INVESTFLOW PARA MI FONDO DE INVERSIÓN
              <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;