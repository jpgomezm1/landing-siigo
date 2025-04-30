import { useState, useEffect } from 'react';
import PainTriggerCard from './PainTriggerCard';

const PainTriggersSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalCards = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalCards);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const painTriggers = [
    {
      beforeTitle: "Limitaciones para ofrecer servicio 24/7",
      beforeDescription: "Tu equipo humano no puede estar disponible todo el tiempo, y contratar personal para cubrir todos los horarios es costoso e ineficiente para tu operación hotelera.",
      afterTitle: "Asistencia ininterrumpida 24/7/365",
      afterDescription: "El AI Concierge está siempre disponible, no toma vacaciones ni días libres, atendiendo a tus huéspedes incluso en la madrugada sin costo adicional.",
      beforeIcon: "time",
      afterIcon: "rocket",
    },
    {
      beforeTitle: "Barreras de idioma con huéspedes internacionales",
      beforeDescription: "No todo tu personal domina múltiples idiomas, lo que dificulta la comunicación con huéspedes extranjeros y limita tu alcance internacional.",
      afterTitle: "Comunicación fluida en múltiples idiomas",
      afterDescription: "Interacción natural y fluida en español e inglés, eliminando por completo las barreras de comunicación con tus huéspedes internacionales.",
      beforeIcon: "error",
      afterIcon: "check",
    },
    {
      beforeTitle: "Sobrecarga de tareas repetitivas",
      beforeDescription: "Tu personal invierte gran parte de su tiempo respondiendo las mismas preguntas sobre servicios, ubicaciones y recomendaciones locales.",
      afterTitle: "Liberación del talento humano",
      afterDescription: "Tu equipo se enfoca en tareas de mayor valor mientras el AI Concierge maneja consultas frecuentes, mejorando la satisfacción laboral y reduciendo rotación.",
      beforeIcon: "chain",
      afterIcon: "brain",
    },
    {
      beforeTitle: "Costos operativos elevados",
      beforeDescription: "Para ofrecer un servicio de calidad continuo, necesitas contratar más personal, aumentando costos de nómina, prestaciones y capacitación.",
      afterTitle: "Optimización de recursos financieros",
      afterDescription: "Reduce significativamente tus costos operativos mientras mejoras la experiencia del huésped. Escala tu servicio sin incrementar proporcionalmente tus costos.",
      beforeIcon: "chart-down",
      afterIcon: "chart-up",
    }
  ];

  return (
    <section id="pain-triggers" className="py-24 bg-gradient-to-b from-irrelevant-background to-irrelevant-background/90">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-6 text-3xl font-bold relative inline-block">
            De la frustración 
            <span className="bg-gradient-to-r from-irrelevant-primary to-purple-400 text-transparent bg-clip-text"> a la excelencia</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-irrelevant-textSecondary">
            Descubre cómo nuestro AI Concierge elimina los principales retos en la atención al huésped y transforma la experiencia de hospedaje.
          </p>
        </div>
        
        {/* Desktop View (Grid) - Con altura fija y espaciado consistente */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painTriggers.map((trigger, index) => (
            <div key={index} className="h-full flex"> {/* Wrapper para asegurar altura uniforme */}
              <PainTriggerCard
                beforeTitle={trigger.beforeTitle}
                beforeDescription={trigger.beforeDescription}
                afterTitle={trigger.afterTitle}
                afterDescription={trigger.afterDescription}
                beforeIcon={trigger.beforeIcon}
                afterIcon={trigger.afterIcon}
                delay={index * 150}
              />
            </div>
          ))}
        </div>
        
        {/* Mobile View (Carousel) - Mejorado con padding consistente y altura fija */}
        <div className="md:hidden relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out" 
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {painTriggers.map((trigger, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4 pb-8"> {/* Añadido padding inferior */}
                <PainTriggerCard
                  beforeTitle={trigger.beforeTitle}
                  beforeDescription={trigger.beforeDescription}
                  afterTitle={trigger.afterTitle}
                  afterDescription={trigger.afterDescription}
                  beforeIcon={trigger.beforeIcon}
                  afterIcon={trigger.afterIcon}
                />
              </div>
            ))}
          </div>
          
          {/* Navigation dots - Mejorado con mejor espaciado y visibilidad */}
          <div className="flex justify-center mt-4 gap-3"> {/* Aumentado el gap entre puntos */}
            {Array.from({ length: totalCards }).map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 transition-all ${
                  activeIndex === index 
                    ? 'bg-irrelevant-primary w-10 rounded-full' /* Más grande y visible */
                    : 'bg-irrelevant-interactive w-3 rounded-full opacity-50 hover:opacity-75' /* Mejor estado hover */
                }`}
                aria-label={`Ir a la diapositiva ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainTriggersSection;