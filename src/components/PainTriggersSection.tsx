
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
      beforeTitle: "42 horas/semana en digitación manual",
      beforeDescription: "Tu equipo contable invierte casi la mitad de su tiempo en tareas repetitivas de entrada de datos",
      afterTitle: "Solo 2 horas/semana de supervisión",
      afterDescription: "Reducción del 95% del tiempo operativo, liberando a tu equipo para tareas de mayor valor estratégico",
      beforeIcon: "⌛",
      afterIcon: "🚀",
    },
    {
      beforeTitle: "34% de errores por digitación manual",
      beforeDescription: "Los errores humanos generan reprocesos, inconsistencias contables y problemas de conciliación",
      afterTitle: "Precisión del 99.7% automatizada",
      afterDescription: "Elimina virtualmente todos los errores de digitación y garantiza consistencia en tus registros contables",
      beforeIcon: "❌",
      afterIcon: "✅",
    },
    {
      beforeTitle: "Dependencia del personal para tareas básicas",
      beforeDescription: "Tu crecimiento está limitado por la capacidad de tu equipo para procesar documentos manualmente",
      afterTitle: "Liberación del talento para análisis",
      afterDescription: "Tu equipo puede enfocarse en interpretar datos y tomar decisiones estratégicas, no en procesarlos",
      beforeIcon: "🔗",
      afterIcon: "🧠",
    },
    {
      beforeTitle: "Crecimiento limitado por capacidad operativa",
      beforeDescription: "Para vender más necesitas contratar más personal, reduciendo tus márgenes de ganancia",
      afterTitle: "Escala ventas sin aumentar costos",
      afterDescription: "Procesa 10x más facturas con el mismo equipo, manteniendo tus costos operativos bajo control",
      beforeIcon: "📉",
      afterIcon: "📈",
    }
  ];

  return (
    <section id="pain-triggers" className="section-container">
      <div className="text-center mb-16">
        <h2 className="mb-6 relative inline-block">
          Transforma tus 
          <span className="bg-gradient-to-r from-irrelevant-primary to-purple-400 text-transparent bg-clip-text"> dolores contables </span>
          en oportunidades
        </h2>
        <p className="max-w-3xl mx-auto">
          Descubre cómo la automatización inteligente de Irrelevant elimina los cuellos de botella más comunes en los equipos contables y financieros.
        </p>
      </div>
      
      {/* Desktop View (Grid) */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {painTriggers.map((trigger, index) => (
          <PainTriggerCard
            key={index}
            beforeTitle={trigger.beforeTitle}
            beforeDescription={trigger.beforeDescription}
            afterTitle={trigger.afterTitle}
            afterDescription={trigger.afterDescription}
            beforeIcon={trigger.beforeIcon}
            afterIcon={trigger.afterIcon}
            delay={index * 150}
          />
        ))}
      </div>
      
      {/* Mobile View (Carousel) */}
      <div className="md:hidden relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out" 
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {painTriggers.map((trigger, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
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
        
        {/* Navigation dots */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalCards }).map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-3 w-3 rounded-full transition-all ${
                activeIndex === index 
                  ? 'bg-irrelevant-primary w-6' 
                  : 'bg-irrelevant-interactive'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainTriggersSection;
