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
      beforeTitle: "15-20 horas por startup recopilando información",
      beforeDescription: "Pierdes tiempo valioso buscando datos en múltiples fuentes, correos, documentos y plataformas dispersas",
      afterTitle: "Centralización de toda la información en minutos",
      afterDescription: "Ingesta automáticamente documentos de cualquier formato y extrae datos clave para análisis inmediato",
      beforeIcon: "time",
      afterIcon: "rocket",
    },
    {
      beforeTitle: "Análisis manual sin estructura ni sistematización",
      beforeDescription: "Tu equipo procesa manualmente cada documento, sin metodología clara para extraer insights consistentes",
      afterTitle: "Procesamiento automatizado con IA contextual",
      afterDescription: "La plataforma extrae entidades, métricas clave y evalúa automáticamente la alineación con tu tesis de inversión",
      beforeIcon: "error",
      afterIcon: "check",
    },
    {
      beforeTitle: "Investment Memos inconsistentes de 40+ páginas",
      beforeDescription: "Cada analista redacta documentos con formatos diferentes, calidad variable y sin alineación clara con la tesis",
      afterTitle: "Generación automatizada de documentos profesionales",
      afterDescription: "Obtén memos estructurados y personalizados con tu identidad corporativa, listos para presentar al comité",
      beforeIcon: "chain",
      afterIcon: "brain",
    },
    {
      beforeTitle: "Dificultad para evaluar alineación con la tesis",
      beforeDescription: "Pierdes oportunidades por análisis superficial o inviertes en startups que no encajan con tus criterios",
      afterTitle: "Evaluación cuantitativa de compatibilidad",
      afterDescription: "Sistema de scoring automático que evalúa cada startup según los criterios configurables de tu fondo",
      beforeIcon: "chart-down",
      afterIcon: "chart-up",
    }
  ];

  return (
    <section id="pain-triggers" className="py-24 bg-gradient-to-b from-gray-900 to-gray-900/90">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-6 text-3xl font-bold relative inline-block">
            Del análisis manual 
            <span className="bg-gradient-to-r from-blue-500 to-indigo-400 text-transparent bg-clip-text"> a la inteligencia inversora</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            Descubre cómo InvestFlow transforma el proceso de due diligence en una ventaja competitiva para tu fondo de inversión.
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
                    ? 'bg-blue-500 w-10 rounded-full' /* Más grande y visible */
                    : 'bg-blue-800 w-3 rounded-full opacity-50 hover:opacity-75' /* Mejor estado hover */
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