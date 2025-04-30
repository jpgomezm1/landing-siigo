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
      title: "Reducción de costos operativos",
      value: "75%",
      description: "Reduce drásticamente el gasto en personal de atención a huéspedes, sin sacrificar la calidad del servicio.",
      color: "from-green-500 to-green-400"
    },
    {
      title: "Atención continua",
      value: "24/7",
      description: "Servicio ininterrumpido todos los días del año. Tus huéspedes nunca quedarán sin atención, sea cual sea su necesidad.",
      color: "from-blue-500 to-blue-400"
    },
    {
      title: "Idiomas disponibles",
      value: "10+",
      description: "Comunícate con huéspedes internacionales en su idioma nativo, eliminando barreras y mejorando su experiencia.",
      color: "from-purple-500 to-purple-400"
    },
    {
      title: "Retorno de inversión",
      value: "<2 meses",
      description: "Recupera tu inversión en tiempo récord gracias al ahorro operativo y el incremento en satisfacción de huéspedes.",
      color: "from-irrelevant-primary to-indigo-400"
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-gradient-to-b from-irrelevant-background to-irrelevant-background/90">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="inline-block bg-irrelevant-primary/10 text-irrelevant-primary text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wider mb-4">
            RESULTADOS COMPROBADOS
          </div>
          <h2 className="mb-6">
            Beneficios 
            <span className="bg-gradient-to-r from-irrelevant-primary to-purple-400 text-transparent bg-clip-text"> inmediatos y cuantificables </span>
          </h2>
          <p className="max-w-2xl mx-auto text-irrelevant-textSecondary">
            Impacto real en la experiencia de tus huéspedes y en tu operación hotelera desde el primer día de implementación.
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
        
        {/* Testimonial Section */}
        <div className="mt-16 bg-irrelevant-component border border-irrelevant-border rounded-xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-irrelevant-primary opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          
          
        </div>
        
      </div>
    </section>
  );
};

export default BenefitsSection;