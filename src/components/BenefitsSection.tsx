
import { useState, useEffect, useRef } from 'react';

interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

const BenefitCard = ({ icon, title, description, delay = 0 }: BenefitCardProps) => {
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
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
      className={`card-irrelevant flex flex-col items-center text-center transition-all duration-500 transform ${
        isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-bold mb-3">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "⏱️",
      title: "95% menos tiempo operativo",
      description: "Reduce el tiempo dedicado a tareas manuales, liberando recursos para actividades estratégicas.",
    },
    {
      icon: "✅",
      title: "0 errores por digitación",
      description: "Elimina los errores humanos en la entrada de datos, garantizando precisión en tus registros.",
    },
    {
      icon: "📈",
      title: "Escala sin más personal",
      description: "Aumenta tu volumen de operaciones sin necesidad de incrementar tu equipo contable.",
    },
    {
      icon: "🚀",
      title: "Listo en 3-5 días",
      description: "Implementación rápida que te permite empezar a ver resultados casi de inmediato.",
    },
    {
      icon: "🛟",
      title: "Soporte incluido",
      description: "Acompañamiento continuo y asistencia técnica para resolver cualquier inquietud.",
    },
    {
      icon: "🔄",
      title: "Compatible con Siigo",
      description: "Integración perfecta con tu sistema contable actual, sin modificaciones complejas.",
    },
    {
      icon: "🤖",
      title: "Asistente contable IA 24/7",
      description: "Tu contador virtual disponible todo el tiempo para procesar información contable.",
    },
    {
      icon: "🔒",
      title: "Seguridad garantizada",
      description: "Protección de datos y cumplimiento con todas las normativas de seguridad financiera.",
    }
  ];

  return (
    <section id="benefits" className="bg-gradient-to-br from-irrelevant-background to-irrelevant-component py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="badge-primary inline-block mb-4">BENEFICIOS</span>
          <h2 className="mb-6">
            Resultados 
            <span className="bg-gradient-to-r from-irrelevant-primary to-purple-400 text-transparent bg-clip-text"> concretos </span>
            para tu empresa
          </h2>
          <p className="max-w-3xl mx-auto">
            Beneficios tangibles que transformarán la operación contable de tu empresa desde el primer día.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
