import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const WorkflowSection = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  const steps = [
    {
      id: 1,
      title: "Creación de Cotización",
      description: "Crea hermosas cotizaciones personalizadas con nuestra IA en segundos, adaptadas a la identidad de tu marca.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      visualContent: (
        <div className="relative bg-gray-800 rounded-lg overflow-hidden border border-purple-500/30">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-5 text-white">
            <div className="flex justify-between items-center">
              <div>
                <img src="https://storage.googleapis.com/cluvi/nuevo_irre-removebg-preview.png" alt="Logo" className="h-10" />
              </div>
              <div className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">Cotización #IRQ-2025-0142</div>
            </div>
            <div className="mt-5">
              <h3 className="text-xl font-bold text-white">Propuesta para</h3>
              <div className="text-2xl font-black mt-1 text-white">TECNOSOLUCIONES S.A.</div>
            </div>
          </div>
          
          <div className="p-5 text-white bg-gray-800">
            <div className="border-b border-gray-600 pb-3 mb-4">
              <h4 className="font-bold text-lg">Implementación Cloud Avanzada</h4>
              <p className="text-gray-300 mt-1">Solución personalizada basada en sus requerimientos específicos</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-gray-700/50 rounded-lg border border-gray-600">
                <div>
                  <div className="font-medium text-white">Migración de infraestructura</div>
                  <div className="text-gray-300">Incluye servidores y bases de datos</div>
                </div>
                <div className="font-bold text-white">$8,500,000</div>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-gray-700/50 rounded-lg border border-gray-600">
                <div>
                  <div className="font-medium text-white">Implementación de seguridad</div>
                  <div className="text-gray-300">Protocolos avanzados y monitoreo</div>
                </div>
                <div className="font-bold text-white">$4,200,000</div>
              </div>
              
              <div className="border-t border-gray-600 pt-3 mt-3">
                <div className="flex justify-between items-center font-bold">
                  <div className="text-white">TOTAL</div>
                  <div className="text-purple-400 text-xl">$12,700,000</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* AI Generation animation overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center backdrop-blur-sm">
            <div className="bg-gray-900/90 backdrop-blur-sm px-5 py-4 rounded-lg shadow-lg border border-purple-500/50">
              <div className="flex items-center space-x-3">
                <div className="animate-pulse">
                  <svg className="w-7 h-7 text-purple-400" viewBox="0 0 24 24" fill="none">
                    <path d="M9.6 3H5.4C4.08 3 3 4.08 3 5.4V9.6C3 10.92 4.08 12 5.4 12H9.6C10.92 12 12 10.92 12 9.6V5.4C12 4.08 10.92 3 9.6 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.6 15H5.4C4.08 15 3 16.08 3 17.4V21.6C3 22.92 4.08 24 5.4 24H9.6C10.92 24 12 22.92 12 21.6V17.4C12 16.08 10.92 15 9.6 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21.6 3H17.4C16.08 3 15 4.08 15 5.4V9.6C15 10.92 16.08 12 17.4 12H21.6C22.92 12 24 10.92 24 9.6V5.4C24 4.08 22.92 3 21.6 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 18.6H18.6V22.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 18H19.5C17.01 18 15 19.8 15 22.05V24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="font-medium text-base text-white">Generando con IA...</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Generación de Link Único",
      description: "El sistema genera automáticamente un enlace único y personalizado para tu cotización, listo para ser compartido.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      visualContent: (
        <div className="p-6 bg-gray-800 rounded-lg border border-purple-500/40 shadow-lg space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-purple-500/20 rounded-full p-2">
                <svg className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9l-7-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13 2v7h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="text-base font-bold text-white">Propuesta - TecnoSoluciones</div>
                <div className="text-sm text-gray-300">Creada hace 1 minuto</div>
              </div>
            </div>
            <div className="bg-green-900/40 text-green-400 text-sm font-medium px-3 py-1.5 rounded-full border border-green-500/30">
              Lista para compartir
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="text-base font-bold text-white">Link único para seguimiento</div>
            <div className="flex">
              <div className="bg-gray-900 border border-gray-700 rounded-l-lg py-3 px-4 text-sm font-mono flex-grow truncate text-gray-300">
                https://irrelevant-quotes.com/p/tecnosoluciones-r42xz9
              </div>
              <button className="bg-purple-600 hover:bg-purple-700 text-white rounded-r-lg px-4 text-sm font-medium">
                Copiar
              </button>
            </div>
            <div className="text-sm text-gray-400">
              Este enlace permite el seguimiento completo de todas las interacciones
            </div>
          </div>
          
          <div className="bg-gray-900/60 rounded-lg p-4 space-y-3 border border-gray-700">
            <div className="text-base font-bold text-white">Compartir cotización</div>
            <div className="flex space-x-3">
              <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 text-sm font-medium flex items-center">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none">
                  <path d="M4 20V4h16v16H4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 8h7M7 12h10M7 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Email
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white rounded-lg px-4 py-2 text-sm font-medium flex items-center">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none">
                  <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2M9 3a4 4 0 100 8 4 4 0 000-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                WhatsApp
              </button>
              <button className="bg-gray-600 hover:bg-gray-700 text-white rounded-lg px-4 py-2 text-sm font-medium flex items-center">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none">
                  <path d="M8 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-3M11 11l9-9M21 2h-9v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Más
              </button>
            </div>
          </div>
          
          {/* Animation */}
          <div className="absolute top-3 right-3 animate-pulse">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Interacción del Cliente",
      description: "El cliente visualiza tu propuesta personalizada y navega por ella. El sistema registra cada detalle de esta interacción.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      visualContent: (
        <div className="relative">
          {/* Client device frame */}
          <div className="bg-gray-900 rounded-xl p-4 shadow-lg border border-gray-700">
            <div className="h-7 w-full rounded-t-lg bg-gray-800 flex items-center px-3">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 text-center">
                <div className="text-white text-sm truncate font-medium">irrelevant-quotes.com/p/tecnosoluciones-r42xz9</div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-b-lg overflow-hidden">
              {/* Cotización con áreas de interés resaltadas */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
                <div className="flex justify-between items-center">
                  <div>
                    <img src="https://storage.googleapis.com/cluvi/nuevo_irre-removebg-preview.png" alt="Logo" className="h-8" />
                  </div>
                  <div className="text-sm opacity-90 font-medium">Cotización #IRQ-2025-0142</div>
                </div>
                <div className="mt-3">
                  <h3 className="text-lg font-bold">Propuesta para</h3>
                  <div className="text-xl font-black mt-1">TECNOSOLUCIONES S.A.</div>
                </div>
              </div>
              
              <div className="p-4 text-white">
                <div className="border-b border-gray-700 pb-3 mb-3">
                  <h4 className="font-bold text-white">Implementación Cloud Avanzada</h4>
                  <p className="text-sm text-gray-300">Solución personalizada basada en sus requerimientos específicos</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-gray-700/30 rounded-lg">
                    <div>
                      <div className="font-medium text-white">Migración de infraestructura</div>
                      <div className="text-sm text-gray-300">Incluye servidores y bases de datos</div>
                    </div>
                    <div className="font-bold text-white">$8,500,000</div>
                  </div>
                  
                  {/* Este item está siendo visto actualmente - resaltado */}
                  <div className="flex justify-between items-center bg-yellow-500/20 p-3 rounded-lg border-2 border-yellow-500">
                    <div>
                      <div className="font-medium text-white">Implementación de seguridad</div>
                      <div className="text-sm text-yellow-200">Protocolos avanzados y monitoreo</div>
                    </div>
                    <div className="font-bold text-white">$4,200,000</div>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-3 mt-3">
                    <div className="flex justify-between items-center font-bold">
                      <div className="text-white">TOTAL</div>
                      <div className="text-purple-400 text-lg">$12,700,000</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-center">
                  <button className="bg-purple-600 text-white py-2 px-5 rounded-lg text-sm font-bold hover:bg-purple-700">
                    ACEPTAR PROPUESTA
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mouse cursor animation */}
          <div className="absolute top-1/2 right-1/3 animate-pulse">
            <svg className="w-7 h-7 text-white drop-shadow-lg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.9 3.74a.75.75 0 01.99-.07L15 12l-2.07 6.2a.75.75 0 01-1.43-.47l1.1-3.29-8.64-7.63a.75.75 0 01-.07-.99l.01-.08z" />
            </svg>
          </div>
          
          {/* Tracking pop-up */}
          <div className="absolute -top-4 -right-4 bg-gray-800 rounded-lg shadow-xl border-2 border-purple-500/50 p-4 w-56 animate-bounce-slow">
            <div className="flex items-start space-x-3">
              <div className="bg-green-900/60 rounded-full p-2 mt-0.5 border border-green-500/50">
                <svg className="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="none">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold text-white">Usuario activo ahora</div>
                <div className="text-sm text-gray-300">Tiempo en página: 2m 15s</div>
                <div className="text-sm text-purple-400 font-medium mt-1">Interesado en: Seguridad</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Seguimiento Inteligente",
      description: "En base al comportamiento detectado, el sistema activa automáticamente las acciones de seguimiento más efectivas.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      visualContent: (
        <div className="grid grid-cols-2 gap-4">
          {/* Panel izquierdo: Automatización */}
          <div className="bg-gray-800 rounded-lg border border-purple-500/40 shadow-md p-5">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-purple-500/20 rounded-full p-2 border border-purple-500/30">
                <svg className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="none">
                  <path d="M10.1 2.182a1 1 0 011.8 0l1.822 3.699a1 1 0 00.753.55l4.074.594a1 1 0 01.554 1.705l-2.944 2.878a1 1 0 00-.287.884l.695 4.056a1 1 0 01-1.45 1.054l-3.643-1.916a1 1 0 00-.932 0l-3.643 1.916a1 1 0 01-1.45-1.054l.696-4.056a1 1 0 00-.288-.884L3.905 8.732a1 1 0 01.555-1.705l4.073-.594a1 1 0 00.754-.55L10.1 2.184z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div>
                <div className="text-base font-bold text-white">Acciones automáticas</div>
                <div className="text-sm text-gray-300">Basadas en comportamiento detectado</div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start bg-gray-900/60 rounded-lg p-3 border border-gray-700">
                <div className="bg-green-900/60 rounded-full p-2 mt-0.5 mr-3 border border-green-500/30">
                  <svg className="w-4 h-4 text-green-400" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Email de seguimiento</div>
                  <div className="text-sm text-gray-300">Enviado automáticamente después de 20 min de actividad</div>
                </div>
              </div>
              
              <div className="flex items-start bg-gray-900/60 rounded-lg p-3 border border-gray-700">
                <div className="bg-blue-900/60 rounded-full p-2 mt-0.5 mr-3 border border-blue-500/30">
                  <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="none">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Recordatorio para vendedor</div>
                  <div className="text-sm text-gray-300">Programado para mañana a las 9:00 AM</div>
                </div>
              </div>
              
              <div className="flex items-start bg-purple-500/10 rounded-lg p-3 border-2 border-purple-500/50">
                <div className="bg-purple-900/60 rounded-full p-2 mt-0.5 mr-3 border border-purple-500/50">
                  <svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="none">
                    <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-white">WhatsApp personalizado</div>
                  <div className="text-sm text-purple-200">Enfocado en aspectos de seguridad (interés detectado)</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Panel derecho: Mensajes */}
          <div className="bg-gray-800 rounded-lg border border-purple-500/40 shadow-md p-5">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-purple-500/20 rounded-full p-2 border border-purple-500/30">
                <svg className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="none">
                  <path d="M3 8l7.8904 5.2603c.6718.4479 1.5476.4479 2.2192 0L21 8M5 19h14c1.1046 0 2-.8954 2-2V7c0-1.1046-.8954-2-2-2H5c-1.1046 0-2 .8954-2 2v10c0 1.1046.8954 2 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="text-base font-bold text-white">Mensaje personalizado</div>
                <div className="text-sm text-gray-300">Generado automáticamente</div>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-4 text-white space-y-3 border border-gray-700 shadow-sm relative">
              <div className="font-bold text-white text-base">Asunto: Sobre su interés en nuestra solución de seguridad</div>
              
              <p className="text-sm text-gray-300">Hola Carlos,</p>
              
              <p className="text-sm text-gray-300">Noté que estuviste revisando nuestra propuesta de implementación cloud hace unos minutos, especialmente la sección de <span className="font-bold text-purple-300">seguridad y protocolos avanzados</span>.</p>
              
              <p className="text-sm text-gray-300">Me gustaría compartir más detalles sobre cómo nuestras soluciones pueden fortalecer específicamente la seguridad de TecnoSoluciones frente a las amenazas actuales.</p>
              
              <p className="text-sm text-gray-300">¿Te gustaría una breve reunión para discutir estos aspectos?</p>
              
              <p className="text-sm text-gray-300">Saludos cordiales,<br/>Javier Montes<br/>Consultor de Soluciones</p>
              
              {/* Animation de escritura con IA */}
              <div className="absolute bottom-3 right-3">
                <div className="bg-purple-900/40 text-purple-300 text-xs rounded-full px-3 py-1 flex items-center font-medium border border-purple-500/30">
                  <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.2 9.84l-5.39-5.38A1.67 1.67 0 0013.42 4H6.75A2.75 2.75 0 004 6.75v10.5A2.75 2.75 0 006.75 20h10.5A2.75 2.75 0 0020 17.25V11.4c0-.06-.6-.35-.14-.76l.34-.8z" />
                  </svg>
                  IA optimizado
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex justify-end">
              <button className="bg-purple-600 text-white text-sm font-medium py-2 px-4 rounded-lg flex items-center hover:bg-purple-700 border border-purple-500/50">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Enviar ahora
              </button>
            </div>
          </div>
        </div>
      )
    },
  ];

  // Autoplay control
  useEffect(() => {
    // Observer para detectar cuando la sección está visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAutoPlaying(true);
        } else {
          setIsAutoPlaying(false);
        }
      },
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Controlar el intervalo de autoplay
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveStep((prev) => (prev < steps.length ? prev + 1 : 1));
      }, 5000); // Cambiar cada 5 segundos
    } else {
      clearInterval(intervalRef.current);
    }
    
    return () => clearInterval(intervalRef.current);
  }, [isAutoPlaying, steps.length]);

  return (
    <section id="workflow" ref={sectionRef} className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-20 w-96 h-96 bg-purple-600 opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-20 w-96 h-96 bg-blue-600 opacity-10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-900/30 text-purple-400 text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wider mb-6 border border-purple-500/30">
            PROCESO INTELIGENTE
          </div>
          <h2 className="text-4xl font-bold mb-6 text-white">
            Un flujo de trabajo 
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text"> completamente automatizado</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            Descubre cómo nuestras cotizaciones inteligentes transforman todo el proceso comercial, desde la creación hasta el seguimiento.
          </p>
        </div>
        
        {/* Timeline Steps y Visual Display en Mobile: Vertical */}
        <div className="lg:hidden space-y-10">
          {/* Step Indicators */}
          <div className="flex justify-center space-x-2 mb-6">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => {
                  setActiveStep(step.id);
                  setIsAutoPlaying(false);
                  clearInterval(intervalRef.current);
                }}
                className={`h-3 rounded-full transition-all duration-300 ${
                  activeStep === step.id 
                    ? 'bg-purple-500 w-10' 
                    : 'bg-gray-700 w-3 hover:bg-gray-600'
                }`}
                aria-label={`Ver paso ${step.id}: ${step.title}`}
              />
            ))}
          </div>
          
          {/* Visual Display */}
          <div className="bg-gray-800 border border-purple-500/20 rounded-xl p-5 shadow-xl relative overflow-hidden">
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5"></div>
            
            {/* Content container with transitions */}
            <div className="relative h-[450px]">
              {steps.map((step) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: activeStep === step.id ? 1 : 0,
                    y: activeStep === step.id ? 0 : 20,
                    scale: activeStep === step.id ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ display: activeStep === step.id ? 'flex' : 'none' }}
                >
                  {step.visualContent}
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Current Step Info */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2 text-white">{steps.find(s => s.id === activeStep)?.title}</h3>
            <p className="text-gray-300">{steps.find(s => s.id === activeStep)?.description}</p>
          </div>
          
          {/* Autoplay control */}
          <div className="flex justify-center mt-4">
            <button 
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`flex items-center text-base ${isAutoPlaying ? 'text-purple-400 font-medium' : 'text-gray-400'} transition-colors duration-300 hover:text-purple-400`}
            >
              {isAutoPlaying ? (
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5V19M16 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 4.99998L19 12L5 19V4.99998Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
              <span>{isAutoPlaying ? 'Pausar demostración' : 'Reproducir demostración'}</span>
            </button>
          </div>
        </div>
        
        {/* Timeline Steps y Visual Display en Desktop: 2 columnas */}
        <div className="hidden lg:grid grid-cols-2 gap-12 items-center">
          {/* Left column: Steps visualization */}
          <div className="space-y-6 relative">
            {/* Connecting line */}
            <div className="absolute left-8 top-12 bottom-12 w-1 bg-gradient-to-b from-purple-500 via-purple-400 to-blue-500 rounded-full"></div>
            
            {steps.map((step) => (
              <div 
                key={step.id}
                className={`flex items-start cursor-pointer group transition-all duration-300 ${
                  activeStep === step.id 
                    ? '' 
                    : 'opacity-70 hover:opacity-100'
                }`}
                onClick={() => {
                  setActiveStep(step.id);
                  setIsAutoPlaying(false);
                  clearInterval(intervalRef.current);
                }}
              >
                <div className={`relative flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center mr-5 transition-all duration-300 ${
                  activeStep === step.id 
                    ? 'bg-gradient-to-br from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/30 scale-110' 
                    : 'bg-gray-800 border border-gray-700 text-gray-300 group-hover:border-purple-500/50'
                }`}>
                  {step.icon}
                  
                  {/* Step number */}
                  <div className={`absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    activeStep === step.id 
                      ? 'bg-white text-purple-600 border border-purple-500' 
                      : 'bg-purple-600 text-white'
                  }`}>
                    {step.id}
                  </div>
                </div>
                
                <div className={`pt-1 ${activeStep === step.id ? 'transform translate-x-2 transition-transform duration-300' : ''}`}>
                  <h3 className={`text-xl font-bold mb-2 ${activeStep === step.id ? 'text-purple-400' : 'text-white'}`}>
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Autoplay control */}
            <div className="mt-8 ml-16 flex items-center">
              <button 
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`flex items-center text-base ${isAutoPlaying ? 'text-purple-400 font-medium' : 'text-gray-400'} transition-colors duration-300 hover:text-purple-400`}
              >
                {isAutoPlaying ? (
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5V19M16 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 4.99998L19 12L5 19V4.99998Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
                <span>{isAutoPlaying ? 'Pausar demostración' : 'Reproducir demostración'}</span>
              </button>
            </div>
          </div>
          
          {/* Right column: Visual display */}
          <div className="relative">
            <div className="bg-gray-800 border border-purple-500/30 rounded-xl p-6 shadow-xl relative overflow-hidden">
              {/* Background gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5"></div>
              
              {/* Content container with transitions */}
              <div className="relative h-[450px]">
                {steps.map((step) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ 
                      opacity: activeStep === step.id ? 1 : 0,
                      x: activeStep === step.id ? 0 : 50,
                      scale: activeStep === step.id ? 1 : 0.95,
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ display: activeStep === step.id ? 'flex' : 'none' }}
                  >
                    {step.visualContent}
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Step indicator dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {steps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => {
                    setActiveStep(step.id);
                    setIsAutoPlaying(false);
                    clearInterval(intervalRef.current);
                  }}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    activeStep === step.id 
                      ? 'bg-purple-500 w-10' 
                      : 'bg-gray-700 w-3 hover:bg-gray-600'
                  }`}
                  aria-label={`Ver paso ${step.id}: ${step.title}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <a 
            href="https://wa.me/57318331733?text=Me%20interesa%20saber%20más%20sobre%20el%20flujo%20de%20cotizaciones%20inteligentes"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/20 inline-flex items-center text-lg"
          >
            QUIERO ESTE FLUJO EN MI EMPRESA
            <svg className="w-6 h-6 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          
          <p className="mt-6 text-base text-gray-400 max-w-xl mx-auto">
            Implementación completa en menos de una semana, con integraciones a tu CRM existente y personalización de marca.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;