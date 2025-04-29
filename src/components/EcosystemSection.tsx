
import { useState } from 'react';

interface EcosystemItemProps {
  icon: string;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}

const EcosystemItem = ({ icon, title, description, isActive, onClick }: EcosystemItemProps) => (
  <div 
    className={`cursor-pointer p-5 rounded-lg transition-all duration-300 ${
      isActive 
        ? 'bg-irrelevant-primary bg-opacity-20 shadow-lg border border-irrelevant-primary border-opacity-50' 
        : 'bg-irrelevant-interactive hover:bg-irrelevant-interactive/70'
    }`}
    onClick={onClick}
  >
    <div className="flex items-center">
      <div className="text-2xl mr-3">{icon}</div>
      <div>
        <h4 className={`font-bold transition-colors ${isActive ? 'text-irrelevant-primary' : 'text-white'}`}>
          {title}
        </h4>
        <p className="text-sm mt-1">{description}</p>
      </div>
    </div>
  </div>
);

const EcosystemSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const ecosystemItems = [
    {
      icon: "🧾",
      title: "Facturación y Causación Automatizada",
      description: "El núcleo de nuestra solución: automatiza completamente tus procesos contables.",
      details: "Elimina la digitación manual, reduce errores y libera a tu equipo de tareas repetitivas. Procesa facturas automáticamente desde múltiples fuentes y formatos, integrándose perfectamente con tu sistema contable actual."
    },
    {
      icon: "📱",
      title: "Automatización de pedidos por WhatsApp",
      description: "Recibe y procesa pedidos directamente desde WhatsApp con total automatización.",
      details: "Permite a tus clientes realizar pedidos por WhatsApp que se procesan automáticamente en tu sistema. Incluye catálogos digitales, confirmación de pedidos y seguimiento en tiempo real."
    },
    {
      icon: "📊",
      title: "Control de ventas y metas comerciales",
      description: "Dashboard interactivo para seguimiento de objetivos y rendimiento.",
      details: "Visualiza el rendimiento de tu equipo comercial en tiempo real, establece metas individuales y grupales, y obtén insights sobre tendencias de ventas para tomar decisiones estratégicas."
    },
    {
      icon: "🚨",
      title: "Sistema de alertas predictivas",
      description: "Anticípate a problemas con notificaciones basadas en IA.",
      details: "Recibe alertas automáticas sobre posibles problemas antes de que ocurran: detecta patrones inusuales en facturas, posibles errores contables o desviaciones en procesos financieros clave."
    },
    {
      icon: "🏭",
      title: "Gestión de proveedores",
      description: "Optimiza la relación con tus proveedores y automatiza procesos.",
      details: "Centraliza toda la información de tus proveedores, automatiza solicitudes de cotización y órdenes de compra, y mantén un histórico completo de todas las transacciones e interacciones."
    },
    {
      icon: "📈",
      title: "Reportería potenciada por IA",
      description: "Informes automáticos con insights accionables para tu negocio.",
      details: "Genera automáticamente informes financieros y operativos con visualizaciones claras y recomendaciones basadas en datos. Detecta tendencias y oportunidades que pasarían desapercibidas en análisis tradicionales."
    },
  ];

  return (
    <section id="ecosystem" className="section-container">
      <div className="text-center mb-16">
        <span className="badge-primary inline-block mb-4">ECOSISTEMA</span>
        <h2 className="mb-6">
          Automatiza mucho más que la 
          <span className="bg-gradient-to-r from-irrelevant-primary to-purple-400 text-transparent bg-clip-text"> facturación </span>
        </h2>
        <p className="max-w-3xl mx-auto">
          Descubre cómo ser una empresa más productiva y rentable con el ecosistema completo de Irrelevant.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-4">
          {ecosystemItems.map((item, index) => (
            <EcosystemItem
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
        
        <div className="lg:col-span-2 bg-irrelevant-interactive rounded-xl p-8 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-irrelevant-primary opacity-10 rounded-full blur-xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-600 opacity-10 rounded-full blur-xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center mb-6">
              <div className="text-4xl mr-4">{ecosystemItems[activeIndex].icon}</div>
              <h3 className="text-2xl font-bold text-irrelevant-primary">{ecosystemItems[activeIndex].title}</h3>
            </div>
            
            <p className="text-lg mb-8">
              {ecosystemItems[activeIndex].details}
            </p>
            
            {activeIndex === 0 ? (
              <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                <h4 className="text-lg font-bold text-white mb-4">Ventajas específicas:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 bg-opacity-20 flex items-center justify-center mr-3">
                      <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm">Reduce tiempos operativos en un 95%</span>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 bg-opacity-20 flex items-center justify-center mr-3">
                      <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm">Elimina errores por digitación manual</span>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 bg-opacity-20 flex items-center justify-center mr-3">
                      <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm">Compatible 100% con Siigo</span>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 bg-opacity-20 flex items-center justify-center mr-3">
                      <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm">Implementación en solo 3-5 días</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between bg-irrelevant-background bg-opacity-50 p-4 rounded-lg">
                <span className="text-irrelevant-textSecondary text-sm">Descubre todas las integraciones del ecosistema Irrelevant</span>
                <a 
                  href="https://wa.me/1234567890?text=Quiero%20saber%20más%20sobre%20el%20ecosistema%20Irrelevant"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-irrelevant-primary font-semibold text-sm hover:underline"
                >
                  Saber más →
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-lg text-irrelevant-textSecondary mb-6">
          ¿Y si automatizas mucho más que esto? Transforma por completo la operación de tu empresa
        </p>
        <a 
          href="https://wa.me/1234567890?text=Quiero%20conocer%20más%20del%20ecosistema%20completo%20Irrelevant"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button inline-flex items-center"
        >
          👉 EXPLORAR TODO EL ECOSISTEMA
        </a>
      </div>
    </section>
  );
};

export default EcosystemSection;
