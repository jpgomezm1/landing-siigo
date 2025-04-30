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
      beforeIcon: "time",
      afterIcon: "rocket",
    },
    {
      beforeTitle: "34% de errores por digitación manual",
      beforeDescription: "Los errores humanos generan reprocesos, inconsistencias contables y problemas de conciliación",
      afterTitle: "Precisión del 99.7% automatizada",
      afterDescription: "Elimina virtualmente todos los errores de digitación y garantiza consistencia en tus registros contables",
      beforeIcon: "error",
      afterIcon: "check",
    },
    {
      beforeTitle: "Dependencia del personal para tareas básicas",
      beforeDescription: "Tu crecimiento está limitado por la capacidad de tu equipo para procesar documentos manualmente",
      afterTitle: "Liberación del talento para análisis",
      afterDescription: "Tu equipo puede enfocarse en interpretar datos y tomar decisiones estratégicas, no en procesarlos",
      beforeIcon: "chain",
      afterIcon: "brain",
    },
    {
      beforeTitle: "Crecimiento limitado por capacidad operativa",
      beforeDescription: "Para vender más necesitas contratar más personal, reduciendo tus márgenes de ganancia",
      afterTitle: "Escala ventas sin aumentar costos",
      afterDescription: "Procesa 10x más facturas con el mismo equipo, manteniendo tus costos operativos bajo control",
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
            <span className="bg-gradient-to-r from-irrelevant-primary to-purple-400 text-transparent bg-clip-text"> a la eficiencia</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-irrelevant-textSecondary">
            Descubre cómo la automatización inteligente elimina los cuellos de botella más costosos en tus procesos contables.
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