import { useState, useEffect, useRef } from 'react';

interface BenefitCardProps {
  title: string;
  value: string;
  description: string;
  color: string;
  delay?: number;
}

const BenefitCard = ({ title, value, description, color, delay = 0 }: BenefitCardProps) => {
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) observer.observe(cardRef.current);
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <div
      ref={cardRef}
      className={`bg-irrelevant-component border border-irrelevant-border rounded-xl overflow-hidden transition-all duration-500 transform ${
        isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`h-1 bg-gradient-to-r ${color}`}></div>
      <div className="p-6">
        <div className="mb-4">
          <span className="text-3xl font-bold bg-gradient-to-r from-irrelevant-primary to-purple-400 text-transparent bg-clip-text">{value}</span>
        </div>
        <h3 className="text-lg font-bold mb-3">{title}</h3>
        <p className="text-sm text-irrelevant-textSecondary">{description}</p>
      </div>
    </div>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Reducción de tiempo de análisis",
      value: "85%",
      description: "Reduce drásticamente el tiempo dedicado a analizar cada startup, pasando de 15-20 horas a apenas 2-3 horas por oportunidad de inversión.",
      color: "from-green-500 to-green-400"
    },
    {
      title: "Mayor precisión en decisiones",
      value: "60%",
      description: "Mejora la calidad de tus decisiones de inversión gracias a análisis más profundos y consistentes, con evaluación automática de alineación a tu tesis.",
      color: "from-blue-500 to-blue-400"
    },
    {
      title: "Ahorro en procesos manuales",
      value: "90%",
      description: "Elimina casi por completo el trabajo repetitivo de recopilación y organización de datos, permitiendo que tu equipo se enfoque en análisis estratégico.",
      color: "from-purple-500 to-purple-400"
    },
    {
      title: "Incremento en volumen de análisis",
      value: "4x",
      description: "Multiplica la capacidad de tu equipo para evaluar startups, lo que te permite ampliar tu pipeline y considerar más oportunidades de inversión.",
      color: "from-irrelevant-primary to-indigo-400"
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-gradient-to-b from-irrelevant-background to-irrelevant-background/90">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="inline-block bg-irrelevant-primary/10 text-irrelevant-primary text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wider mb-4">
            RESULTADOS CUANTIFICABLES
          </div>
          <h2 className="mb-6">
            Beneficios 
            <span className="bg-gradient-to-r from-irrelevant-primary to-purple-400 text-transparent bg-clip-text"> que transforman tu proceso de inversión </span>
          </h2>
          <p className="max-w-2xl mx-auto text-irrelevant-textSecondary">
            Optimización medible de todo el flujo de due diligence que se traduce en mejor toma de decisiones, mayor eficiencia y ventaja competitiva para tu fondo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              title={benefit.title}
              value={benefit.value}
              description={benefit.description}
              color={benefit.color}
              delay={index * 100}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center px-6 py-4 bg-irrelevant-component border border-irrelevant-border rounded-xl">
            <svg className="w-6 h-6 text-irrelevant-primary mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-sm">Estos resultados están basados en datos reales de H20 Capital y otros fondos que implementaron InvestFlow</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;