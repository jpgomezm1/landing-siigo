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

  const steps = [
    {
      title: "1. Recepción",
      description: "Tus facturas llegan por email, WhatsApp, o como archivos",
      benefit: "No importa el formato o la fuente",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 12H16L14 15H10L8 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5.45 5.11L2 12V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V12L18.55 5.11C18.3844 4.77679 18.1292 4.49637 17.813 4.30028C17.4967 4.10419 17.1321 4.0002 16.76 4H7.24C6.86792 4.0002 6.50326 4.10419 6.18704 4.30028C5.87083 4.49637 5.61558 4.77679 5.45 5.11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "2. Transformación",
      description: "El sistema lee y entiende automáticamente la información",
      benefit: "Sin digitación manual",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "3. Automatización",
      description: "Se genera la factura o causación lista para usar en Siigo",
      benefit: "Cero errores de digitación",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H14L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 17H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 13H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section id="solution-architecture" className="bg-irrelevant-background py-24">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="inline-block text-irrelevant-primary text-sm font-semibold mb-4">
            <span className="bg-irrelevant-primary/10 px-4 py-2 rounded-full">ASÍ DE SIMPLE</span>
          </div>
          <h2 className="mb-6">
            Cómo 
            <span className="bg-gradient-to-r from-irrelevant-primary to-purple-400 text-transparent bg-clip-text"> automatizamos tu facturación</span>
          </h2>
          <p className="max-w-2xl mx-auto text-irrelevant-textSecondary">
            Un proceso simple pero poderoso que elimina completamente la digitación manual
          </p>
        </div>
        
        {/* Visual process flow */}
        <div className={`relative mx-auto max-w-4xl ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
          {/* Process steps */}
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-irrelevant-primary to-purple-500 hidden md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 300}ms` }}
                >
                  {/* Icon circle */}
                  <div className="flex justify-center">
                    <div className="w-12 h-12 rounded-full bg-irrelevant-primary/20 flex items-center justify-center mb-6 z-10 border border-irrelevant-primary/30">
                      <div className="text-irrelevant-primary">
                        {step.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content card */}
                  <div className="bg-irrelevant-component p-6 rounded-lg border border-irrelevant-border">
                    <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                    <p className="text-irrelevant-textSecondary mb-4">
                      {step.description}
                    </p>
                    <div className="bg-irrelevant-primary/10 text-irrelevant-primary rounded-full px-4 py-2 inline-block text-sm font-medium">
                      {step.benefit}
                    </div>
                  </div>
                  
                  {/* Connector arrow (except last) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-16 right-0" style={{ right: `calc(66.67% - ${index * 33.33}%)` }}>
                      <svg className="w-6 h-6 text-irrelevant-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Siigo integration highlight */}
          <div className="mt-16 flex flex-col items-center bg-irrelevant-component p-8 rounded-xl border border-irrelevant-border/50 shadow-lg">
            <div className="mb-6 text-center">
              <h3 className="text-xl font-bold mb-2 text-white">La factura queda generada y lista en:</h3>
            </div>
            
            <div className="bg-white p-6 rounded-lg mb-6">
              <img 
                src="https://cms.siigo.com/wp-content/uploads/2023/08/logo_slogan.png" 
                alt="Siigo" 
                className="h-12 md:h-16 object-contain"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
              <div className="flex flex-col items-center bg-irrelevant-background/50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-irrelevant-primary mb-1">95%</div>
                <p className="text-sm text-center text-irrelevant-textSecondary">menos tiempo operativo</p>
              </div>
              
              <div className="flex flex-col items-center bg-irrelevant-background/50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-irrelevant-primary mb-1">0</div>
                <p className="text-sm text-center text-irrelevant-textSecondary">errores por digitación</p>
              </div>
              
              <div className="flex flex-col items-center bg-irrelevant-background/50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-irrelevant-primary mb-1">5 días</div>
                <p className="text-sm text-center text-irrelevant-textSecondary">de implementación</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionArchitecture;