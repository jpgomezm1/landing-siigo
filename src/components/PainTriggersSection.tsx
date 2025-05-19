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
      beforeTitle: "Propuestas enviadas que nunca reciben respuesta",
      beforeDescription: "Mandas PDF de cotizaciones y nunca más sabes del cliente, perdiendo oportunidades sin entender por qué",
      afterTitle: "Seguimiento en tiempo real de cada interacción",
      afterDescription: "Sabes exactamente cuándo, quién y por cuánto tiempo vio tu propuesta, permitiéndote actuar en el momento perfecto",
      beforeIcon: "time",
      afterIcon: "rocket",
    },
    {
      beforeTitle: "65% de cotizaciones olvidadas sin seguimiento",
      beforeDescription: "Tu equipo comercial olvida hacer seguimiento en el momento oportuno, dejando que leads calientes se enfríen",
      afterTitle: "Alertas automáticas de interés del cliente",
      afterDescription: "Recibe notificaciones cuando un cliente muestra interés, permitiendo a tu equipo priorizar leads realmente calientes",
      beforeIcon: "error",
      afterIcon: "check",
    },
    {
      beforeTitle: "No sabes si tus clientes ven tus propuestas",
      beforeDescription: "Envías cotizaciones en PDF sin forma de saber si fueron abiertas, compartidas o revisadas en detalle",
      afterTitle: "Analytics completo de cada interacción",
      afterDescription: "Visualiza exactamente qué secciones interesan más a tus clientes y cuánto tiempo dedicaron a cada detalle de tu propuesta",
      beforeIcon: "chain",
      afterIcon: "brain",
    },
    {
      beforeTitle: "Tasa de conversión baja por falta de información",
      beforeDescription: "Pierdes ventas porque no sabes cuándo ni cómo hacer seguimiento efectivo a cada oportunidad",
      afterTitle: "Incremento del 35% en tasa de cierre",
      afterDescription: "Mejora tus resultados sabiendo exactamente cuándo y qué decir en cada seguimiento basado en datos reales de interacción",
      beforeIcon: "chart-down",
      afterIcon: "chart-up",
    }
  ];

  return (
    <section id="pain-triggers" className="py-24 bg-gradient-to-b from-irrelevant-background to-irrelevant-background/90">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-6 text-3xl font-bold relative inline-block">
            Del envío y olvido 
            <span className="bg-gradient-to-r from-irrelevant-primary to-purple-400 text-transparent bg-clip-text"> al seguimiento inteligente</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-irrelevant-textSecondary">
            Descubre cómo las cotizaciones traqueables transforman tus propuestas comerciales en herramientas de venta proactivas.
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