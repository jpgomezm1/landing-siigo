import { useState } from 'react';

const AddOnSection = () => {
  const [activeAddon, setActiveAddon] = useState(null);
  
  const addons = [
    {
      id: "whatsapp",
      title: "Atención vía WhatsApp",
      description: "Permita que sus huéspedes interactúen con el Concierge a través de WhatsApp.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 21L5 15M17 3C18.5913 3 20.1174 3.63214 21.2426 4.75736C22.3679 5.88258 23 7.4087 23 9C23 10.5913 22.3679 12.1174 21.2426 13.2426C20.1174 14.3679 18.5913 15 17 15H7C5.4087 15 3.88258 14.3679 2.75736 13.2426C1.63214 12.1174 1 10.5913 1 9C1 7.4087 1.63214 5.88258 2.75736 4.75736C3.88258 3.63214 5.4087 3 7 3H17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 8H13M7 12H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: "from-green-500 to-green-600"
    },
    {
      id: "calls",
      title: "Recepción de Llamadas",
      description: "El Concierge podrá atender llamadas entrantes de sus huéspedes automáticamente.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4741 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8221C20.3769 21.9108 20.0974 21.9434 19.82 21.918C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77383 17.3147 6.72534 15.2662 5.19 12.85C3.49998 10.2412 2.44824 7.27099 2.12 4.18C2.09451 3.90347 2.12702 3.62476 2.21565 3.36163C2.30428 3.09849 2.44735 2.85679 2.63536 2.65172C2.82336 2.44665 3.05204 2.28281 3.30692 2.17062C3.5618 2.05843 3.83723 2.00036 4.115 2H7.115C7.61739 1.99522 8.10446 2.16708 8.49354 2.48353C8.88262 2.79999 9.1445 3.23945 9.225 3.73C9.3776 4.68 9.625 5.61302 9.965 6.51C10.1073 6.88793 10.1432 7.29767 10.0688 7.69449C9.99446 8.09131 9.81303 8.45859 9.545 8.76L8.045 10.26C9.45083 12.7602 11.4898 14.7992 13.99 16.205L15.49 14.705C15.7914 14.437 16.1587 14.2556 16.5555 14.1812C16.9523 14.1068 17.3621 14.1427 17.74 14.285C18.637 14.625 19.5701 14.8724 20.52 15.025C21.0168 15.1082 21.4638 15.379 21.7815 15.7799C22.0992 16.1808 22.2671 16.6824 22.255 17.195L22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: "from-blue-500 to-blue-600"
    },
    {
      id: "local-services",
      title: "Reservas en Servicios Locales",
      description: "Integración con servicios locales para gestionar reservas en restaurantes cercanos.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 2V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 2V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 14H8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 14H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 14H16.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 18H8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 18H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 18H16.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: "from-purple-500 to-purple-600"
    },
    {
      id: "voice",
      title: "Personalización de Voz",
      description: "Cree una identidad sonora única para su hotel con una voz personalizada.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1L12 23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17 5L17 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 5L7 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 9L22 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 9L2 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: "from-amber-500 to-amber-600"
    },
    {
      id: "welcome-videos",
      title: "Videos de Bienvenida",
      description: "Genere videos personalizados de bienvenida para sorprender a sus huéspedes.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23 7L16 12L23 17V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 5H3C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19H14C15.1046 19 16 18.1046 16 17V7C16 5.89543 15.1046 5 14 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: "from-red-500 to-red-600"
    },
    {
      id: "multilingual",
      title: "Soporte Multilingüe Avanzado",
      description: "Amplíe las capacidades del Concierge con idiomas adicionales.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: "from-indigo-500 to-indigo-600"
    }
  ];
  
  return (
    <section id="addons" className="bg-gradient-to-b from-gray-900/40 to-gray-900/80 py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 opacity-5 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 opacity-5 rounded-full blur-3xl z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">Add-Ons</span> Disponibles
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            Personalice su Concierge Inteligente con estas potentes extensiones
          </p>
        </div>
        
        {/* Add-ons grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {addons.map((addon) => (
            <div 
              key={addon.id}
              className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className={`h-1.5 bg-gradient-to-r ${addon.color}`}></div>
              <div className="p-6">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${addon.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <div className="text-white">
                    {addon.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{addon.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{addon.description}</p>
                <a 
                  href="#contact"
                  className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center"
                >
                  <span>Solicitar información</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Simple CTA */}
        <div className="mt-12 text-center">
          <a 
            href="#contact"
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 inline-flex items-center"
          >
            <span>SOLICITAR COTIZACIÓN</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AddOnSection;