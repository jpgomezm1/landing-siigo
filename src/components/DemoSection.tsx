import { useEffect, useRef, useState } from 'react';

const DemoSection = () => {
  const demoRef = useRef();
  const [activeStep, setActiveStep] = useState(1);
  const [showNotification, setShowNotification] = useState(false);
  const [showTrackingData, setShowTrackingData] = useState(false);
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
  
  // Efecto para mostrar la notificación después de unos segundos
  useEffect(() => {
    if (isInView && activeStep === 2) {
      const timer = setTimeout(() => {
        setShowNotification(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, activeStep]);
  
  // Efecto para mostrar los datos de tracking cuando corresponda
  useEffect(() => {
    if (isInView && activeStep === 3) {
      const timer = setTimeout(() => {
        setShowTrackingData(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, activeStep]);
  
  // Función para avanzar al siguiente paso
  const nextStep = () => {
    if (activeStep < 3) {
      setActiveStep(activeStep + 1);
      // Resetear estados
      setShowNotification(false);
      setShowTrackingData(false);
    } else {
      // Si estamos en el último paso, volver al primero
      setActiveStep(1);
      setShowNotification(false);
      setShowTrackingData(false);
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
            Mira cómo 
            <span className="bg-gradient-to-r from-irrelevant-primary to-purple-400 text-transparent bg-clip-text"> transformamos </span>
            tus cotizaciones
          </h2>
          <p className="max-w-2xl mx-auto text-irrelevant-textSecondary">
            Descubre cómo nuestras cotizaciones inteligentes te permiten hacer seguimiento a cada interacción de tus clientes con tus propuestas comerciales.
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
                      {step === 1 ? 'Cotización' : step === 2 ? 'Cliente' : 'Analytics'}
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
                        {step === 1 ? 'Crea tu cotización' : step === 2 ? 'El cliente interactúa' : 'Analiza el comportamiento'}
                      </div>
                      {step < 3 && (
                        <div className={`absolute top-10 left-5 w-0.5 h-14 ${activeStep > step ? 'bg-irrelevant-primary' : 'bg-irrelevant-interactive/30'}`}></div>
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Main Demo Content */}
                <div className="flex-1 relative">
                  {/* Step 1: Creación de cotización */}
                  {activeStep === 1 && (
                    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-500 transform">
                      {/* Mockup de cotización */}
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
                        <div className="flex justify-between items-center">
                          <div>
                            <img src="https://storage.googleapis.com/cluvi/logIrr-removebg-preview.png" alt="Irrelevant" className="h-20" />
                          </div>
                          <div className="text-sm opacity-90">Cotización #IRQ-2025-0142</div>
                        </div>
                        <div className="mt-6">
                          <h3 className="text-2xl font-bold">Propuesta comercial para</h3>
                          <div className="text-3xl font-black mt-1">CARLOS RODRÍGUEZ</div>
                        </div>
                      </div>
                      
                      <div className="p-4">
                        <div className="border-b border-gray-200 pb-4 mb-4">
                          <h4 className="font-bold text-lg text-gray-800">Solución de Automatización Inteligente</h4>
                          <p className="text-sm text-gray-600 mt-2">Transformamos tu proceso comercial con tecnología de punta.</p>
                        </div>
                        
                        <div className="space-y-3">
                          {/* Servicios */}
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="text-sm font-medium text-gray-800">Implementación de plataforma base</div>
                              <div className="text-xs text-gray-500">Incluye configuración inicial y 2 integraciones</div>
                            </div>
                            <div className="text-sm font-bold text-gray-800">$2,500,000</div>
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="text-sm font-medium text-gray-800">Personalización de marca</div>
                              <div className="text-xs text-gray-500">Adaptación a la imagen corporativa</div>
                            </div>
                            <div className="text-sm font-bold text-gray-800">$850,000</div>
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="text-sm font-medium text-gray-800">Integración CRM/ERP</div>
                              <div className="text-xs text-gray-500">Conexión con sistemas existentes</div>
                            </div>
                            <div className="text-sm font-bold text-gray-800">$1,200,000</div>
                          </div>
                          
                          {/* Total */}
                          <div className="border-t border-gray-200 pt-3 mt-4">
                            <div className="flex justify-between items-center font-bold">
                              <div className="text-gray-800">TOTAL</div>
                              <div className="text-irrelevant-primary text-lg">$4,550,000</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6 flex justify-center">
                          <button className="bg-irrelevant-primary text-white py-2 px-6 rounded-lg text-sm font-bold">
                            ACEPTAR PROPUESTA
                          </button>
                        </div>
                      </div>
                      
                      {/* URL compartible */}
                      <div className="bg-gray-100 p-3 text-center border-t border-gray-200">
                        <div className="text-xs text-gray-500">URL compartible:</div>
                        <div className="text-sm text-gray-700 font-mono bg-white rounded px-3 py-1 mt-1 border border-gray-200">
                          irrelevant-cotizaciones.netlify.app/quote/IRQ-2025-0142
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Step 2: Cliente interactuando */}
                  {activeStep === 2 && (
                    <div className="relative">
                      {/* Mockup de dispositivo cliente */}
                      <div className="bg-gray-800 rounded-xl p-3 shadow-xl">
                        <div className="h-5 w-full rounded-t-lg bg-gray-700 flex items-center px-2">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          </div>
                          <div className="flex-1 text-center">
                            <div className="text-white text-xs truncate">irrelevant-cotizaciones.netlify.app/quote/IRQ-2025-0142</div>
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-b-lg overflow-hidden">
                          {/* Contenido similar al paso 1 pero con indicadores de interacción */}
                          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
                            <div className="flex justify-between items-center">
                              <div>
                                <img src="https://storage.googleapis.com/cluvi/logIrr-removebg-preview.png" alt="Irrelevant" className="h-20" />
                              </div>
                              <div className="text-xs opacity-90">Cotización #IRQ-2025-0142</div>
                            </div>
                            <div className="mt-4">
                              <h3 className="text-xl font-bold">Propuesta comercial para</h3>
                              <div className="text-2xl font-black mt-1">CARLOS RODRÍGUEZ</div>
                            </div>
                          </div>
                          
                          <div className="p-3">
                            <div className="border-b border-gray-200 pb-3 mb-3">
                              <h4 className="font-bold text-gray-800">Solución de Automatización Inteligente</h4>
                              <p className="text-xs text-gray-600 mt-1">Transformamos tu proceso comercial con tecnología de punta.</p>
                            </div>
                            
                            <div className="space-y-2">
                              {/* Resaltar el área que el usuario está viendo */}
                              <div className="flex justify-between items-center">
                                <div>
                                  <div className="text-xs font-medium text-gray-800">Implementación de plataforma base</div>
                                  <div className="text-xs text-gray-500">Incluye configuración inicial y 2 integraciones</div>
                                </div>
                                <div className="text-xs font-bold text-gray-800">$2,500,000</div>
                              </div>
                              
                              <div className="flex justify-between items-center bg-yellow-50 p-1 rounded border border-yellow-200">
                                <div>
                                  <div className="text-xs font-medium text-gray-800">Personalización de marca</div>
                                  <div className="text-xs text-gray-500">Adaptación a la imagen corporativa</div>
                                </div>
                                <div className="text-xs font-bold text-gray-800">$850,000</div>
                              </div>
                              
                              <div className="flex justify-between items-center">
                                <div>
                                  <div className="text-xs font-medium text-gray-800">Integración CRM/ERP</div>
                                  <div className="text-xs text-gray-500">Conexión con sistemas existentes</div>
                                </div>
                                <div className="text-xs font-bold text-gray-800">$1,200,000</div>
                              </div>
                              
                              {/* Total */}
                              <div className="border-t border-gray-200 pt-2 mt-3">
                                <div className="flex justify-between items-center font-bold">
                                  <div className="text-gray-800 text-xs">TOTAL</div>
                                  <div className="text-irrelevant-primary text-sm">$4,550,000</div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="mt-4 flex justify-center">
                              <button className="bg-irrelevant-primary text-white py-1.5 px-5 rounded-lg text-xs font-bold">
                                ACEPTAR PROPUESTA
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Notificación emergente */}
                      {showNotification && (
                        <div className="absolute top-5 right-0 transform translate-x-1/2 bg-white rounded-lg shadow-xl border border-irrelevant-primary/20 p-3 w-64 animate-bounce-slow">
                          <div className="flex items-start">
                            <div className="bg-green-100 rounded-full p-2 mr-3">
                              <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="none">
                                <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                            <div>
                              <div className="text-sm font-bold text-gray-800">¡Carlos está revisando tu propuesta ahora!</div>
                              <div className="text-xs text-gray-600 mt-1">Se está enfocando en los detalles de personalización</div>
                              <div className="text-xs text-irrelevant-primary mt-2 font-medium">Hace 27 segundos</div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {/* Step 3: Analytics y seguimiento */}
                  {activeStep === 3 && (
                    <div className="bg-irrelevant-background/70 backdrop-blur-sm rounded-lg overflow-hidden shadow-md border border-irrelevant-border transition-all duration-500 transform p-4">
                      <div className="mb-4 border-b border-irrelevant-border pb-4">
                        <h3 className="text-lg font-bold">Dashboard de Seguimiento</h3>
                        <p className="text-xs text-irrelevant-textSecondary mt-1">Cotización #IRQ-2025-0142 para Carlos Rodríguez</p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Stats generales */}
                        <div className="bg-irrelevant-component p-3 rounded-lg border border-irrelevant-border/50">
                          <h4 className="text-sm font-bold mb-3">Estadísticas generales</h4>
                          
                          <div className="space-y-3">
                            <div className={`transition-all duration-700 ${showTrackingData ? 'opacity-100' : 'opacity-0'}`}>
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-xs">Vistas totales</span>
                                <span className="text-xs font-bold text-irrelevant-primary">5</span>
                              </div>
                              <div className="h-1.5 bg-irrelevant-interactive/30 rounded-full">
                                <div className="h-full bg-irrelevant-primary rounded-full" style={{width: '50%'}}></div>
                              </div>
                            </div>
                            
                            <div className={`transition-all duration-700 delay-200 ${showTrackingData ? 'opacity-100' : 'opacity-0'}`}>
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-xs">Tiempo promedio</span>
                                <span className="text-xs font-bold text-irrelevant-primary">3:42 min</span>
                              </div>
                              <div className="h-1.5 bg-irrelevant-interactive/30 rounded-full">
                                <div className="h-full bg-irrelevant-primary rounded-full" style={{width: '70%'}}></div>
                              </div>
                            </div>
                            
                            <div className={`transition-all duration-700 delay-300 ${showTrackingData ? 'opacity-100' : 'opacity-0'}`}>
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-xs">Compartida</span>
                                <span className="text-xs font-bold text-irrelevant-primary">2 veces</span>
                              </div>
                              <div className="h-1.5 bg-irrelevant-interactive/30 rounded-full">
                                <div className="h-full bg-irrelevant-primary rounded-full" style={{width: '25%'}}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Heatmap */}
                        <div className="bg-irrelevant-component p-3 rounded-lg border border-irrelevant-border/50">
                          <h4 className="text-sm font-bold mb-3">Mapa de calor (interés)</h4>
                          
                          <div className={`space-y-2 transition-all duration-700 delay-400 ${showTrackingData ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="flex justify-between items-center">
                              <span className="text-xs">Implementación base</span>
                              <div className="w-24 h-2 bg-gradient-to-r from-green-300 to-green-500 rounded-full"></div>
                            </div>
                            
                            <div className="flex justify-between items-center">
                              <span className="text-xs">Personalización de marca</span>
                              <div className="w-36 h-2 bg-gradient-to-r from-red-300 to-red-500 rounded-full"></div>
                            </div>
                            
                            <div className="flex justify-between items-center">
                              <span className="text-xs">Integración CRM/ERP</span>
                              <div className="w-12 h-2 bg-gradient-to-r from-blue-300 to-blue-500 rounded-full"></div>
                            </div>
                            
                            <div className="flex justify-between items-center">
                              <span className="text-xs">Precio total</span>
                              <div className="w-20 h-2 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Historial de actividad */}
                        <div className="bg-irrelevant-component p-3 rounded-lg border border-irrelevant-border/50 md:col-span-2">
                          <h4 className="text-sm font-bold mb-3">Historial de actividad</h4>
                          
                          <div className={`space-y-3 transition-all duration-700 delay-600 ${showTrackingData ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="flex items-start">
                              <div className="min-w-8 h-8 rounded-full bg-irrelevant-primary/20 flex items-center justify-center text-irrelevant-primary text-xs mr-2">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                                  <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </div>
                              <div>
                                <div className="flex items-baseline">
                                  <span className="text-xs font-bold">Carlos abrió la cotización</span>
                                  <span className="text-[10px] text-irrelevant-textSecondary ml-2">hoy 10:42 AM</span>
                                </div>
                                <p className="text-[10px] text-irrelevant-textSecondary mt-0.5">
                                  Dispositivo: iPhone 14 - Chrome Mobile
                                </p>
                              </div>
                            </div>
                            
                            <div className="flex items-start">
                              <div className="min-w-8 h-8 rounded-full bg-irrelevant-primary/20 flex items-center justify-center text-irrelevant-primary text-xs mr-2">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                                  <path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </div>
                              <div>
                                <div className="flex items-baseline">
                                  <span className="text-xs font-bold">Carlos compartió la cotización</span>
                                  <span className="text-[10px] text-irrelevant-textSecondary ml-2">hoy 11:15 AM</span>
                                </div>
                                <p className="text-[10px] text-irrelevant-textSecondary mt-0.5">
                                  Enviada a: m.lopez@empresa.com
                                </p>
                              </div>
                            </div>
                            
                            <div className="flex items-start">
                              <div className="min-w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs mr-2">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                                  <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </div>
                              <div>
                                <div className="flex items-baseline">
                                  <span className="text-xs font-bold">María López abrió la cotización</span>
                                  <span className="text-[10px] text-irrelevant-textSecondary ml-2">hoy 11:30 AM</span>
                                </div>
                                <p className="text-[10px] text-irrelevant-textSecondary mt-0.5">
                                  Dispositivo: MacBook Pro - Safari Desktop
                                </p>
                              </div>
                            </div>
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
          <div className="mt-8 text-center">
            <h3 className="text-xl font-bold mb-4">Convierte tus propuestas en herramientas de venta inteligentes</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-irrelevant-component p-4 rounded-lg border border-irrelevant-border">
                <div className="w-8 h-8 rounded-full bg-irrelevant-primary/20 text-irrelevant-primary flex items-center justify-center mx-auto mb-3">1</div>
                <h4 className="font-bold mb-2">Cotizaciones personalizadas</h4>
                <p className="text-sm text-irrelevant-textSecondary">Crea propuestas web atractivas con tu marca y detalles específicos para cada cliente</p>
              </div>
              <div className="bg-irrelevant-component p-4 rounded-lg border border-irrelevant-border">
                <div className="w-8 h-8 rounded-full bg-irrelevant-primary/20 text-irrelevant-primary flex items-center justify-center mx-auto mb-3">2</div>
                <h4 className="font-bold mb-2">Seguimiento en tiempo real</h4>
                <p className="text-sm text-irrelevant-textSecondary">Recibe alertas cuando tus clientes interactúan con tus propuestas</p>
              </div>
              <div className="bg-irrelevant-component p-4 rounded-lg border border-irrelevant-border">
                <div className="w-8 h-8 rounded-full bg-irrelevant-primary/20 text-irrelevant-primary flex items-center justify-center mx-auto mb-3">3</div>
                <h4 className="font-bold mb-2">Analytics detallado</h4>
                <p className="text-sm text-irrelevant-textSecondary">Analiza el comportamiento de tus clientes y mejora tu estrategia comercial</p>
              </div>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="text-center mt-10">
            <a 
              href="https://wa.me/573183351733?text=Me%20interesan%20las%20cotizaciones%20inteligentes%20con%20seguimiento%20que%20vi%20en%20su%20sitio"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-irrelevant-primary hover:bg-irrelevant-primary/90 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-irrelevant-primary/30 inline-flex items-center"
            >
              QUIERO COTIZACIONES INTELIGENTES EN MI EMPRESA
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