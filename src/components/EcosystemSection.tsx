import { useState, useEffect } from 'react';

const EcosystemSection = () => {
  const [activeModule, setActiveModule] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const modules = [
    {
      id: "invoicing",
      title: "Facturación y Causación Automatizada",
      tagline: "El núcleo de nuestro ecosistema",
      description: "Automatización completa de procesos contables con tecnología de vanguardia.",
      benefits: [
        "Reduce tiempos operativos en un 95%",
        "Elimina errores por digitación manual",
        "Compatible 100% con Siigo",
        "Implementación en solo 3-5 días"
      ],
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: "from-purple-500 to-irrelevant-primary"
    },
    {
      id: "whatsapp",
      title: "Automatización de pedidos por WhatsApp",
      tagline: "Toma pedidos automáticamente",
      description: "Convierte WhatsApp en un canal de ventas automatizado que se integra con tus sistemas.",
      benefits: [
        "Recepción automática de pedidos 24/7",
        "Catálogo digital interactivo",
        "Confirmaciones automáticas para clientes",
        "Sincronización con tu inventario"
      ],
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.1787 14.8743C20.4204 17.7283 18.3069 20.3136 15.2331 21.5844C12.1593 22.8552 8.67269 22.6298 5.77324 20.9747C2.87379 19.3195 0.895013 16.4294 0.334382 13.0941C-0.226249 9.75873 0.699063 6.34322 2.87568 3.71334C5.05229 1.08346 8.25923 -0.41553 11.6437 -0.394221C15.0281 -0.372911 18.2175 1.16605 20.3644 3.82293C22.5114 6.47981 23.3997 9.90758 22.8077 13.2335C22.6723 14.0234 22.463 14.7982 22.1823 15.548" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 10.0002L11 14.0002L21 4.00024" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: "from-green-500 to-green-600"
    },
    {
      id: "sales",
      title: "Control de ventas y metas comerciales",
      tagline: "Potencia a tu equipo comercial",
      description: "Visualización avanzada del rendimiento comercial con objetivos e incentivos automáticos.",
      benefits: [
        "Dashboard en tiempo real del equipo",
        "Seguimiento automático de metas",
        "Proyecciones basadas en IA",
        "Comisiones calculadas automáticamente"
      ],
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 22H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 18H4C3.44772 18 3 18.4477 3 19V22H6V18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 12V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13 12H7V15C7 15.5523 7.44772 16 8 16H12C12.5523 16 13 15.5523 13 15V12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 14H16C16.5523 14 17 14.4477 17 15V22H14V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 5L21 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 8L18 5L13 2L3 9L8 12L13 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: "from-blue-500 to-blue-600"
    },
    {
      id: "alerts",
      title: "Sistema de alertas predictivas",
      tagline: "Anticípate a los problemas",
      description: "Detecta y previene problemas antes de que ocurran con alertas basadas en IA.",
      benefits: [
        "Alerta sobre patrones inusuales",
        "Detecta posibles errores contables",
        "Identifica riesgos de flujo de caja",
        "Anticipación de necesidades de inventario"
      ],
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13.73 21C13.5542 21.3031 13.3018 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 9L12 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 14.01L12.01 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: "from-amber-500 to-amber-600"
    },
    {
      id: "suppliers",
      title: "Gestión de proveedores",
      tagline: "Optimiza tu cadena de suministro",
      description: "Centraliza y automatiza todas las interacciones con proveedores en un solo lugar.",
      benefits: [
        "Centralización de información de proveedores",
        "Automatización de órdenes de compra",
        "Seguimiento de pagos y vencimientos",
        "Evaluación automática de proveedores"
      ],
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 11H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 16H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 11H8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 16H8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: "from-indigo-500 to-indigo-600"
    },
    {
      id: "reports",
      title: "Reportería potenciada por IA",
      tagline: "Insights accionables automáticos",
      description: "Informes avanzados que no solo muestran datos, sino que te dicen qué hacer con ellos.",
      benefits: [
        "Informes automáticos periódicos",
        "Visualizaciones claras y accionables",
        "Detección de tendencias ocultas",
        "Recomendaciones personalizadas"
      ],
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 18V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 18V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 18V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: "from-red-500 to-red-600"
    }
  ];
  
  const handleModuleChange = (index) => {
    if (index === activeModule) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveModule(index);
      setIsAnimating(false);
    }, 300);
  };
  
  return (
    <section id="ecosystem" className="bg-gradient-to-b from-irrelevant-component/40 to-irrelevant-background py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-irrelevant-primary opacity-5 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 opacity-5 rounded-full blur-3xl z-0"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">

          <h2 className="mb-6">
            Transforma completamente la operación de 
            <span className="bg-gradient-to-r from-irrelevant-primary to-purple-400 text-transparent bg-clip-text"> tu empresa </span>
          </h2>
          <p className="max-w-2xl mx-auto text-irrelevant-textSecondary">
            Irrelevant no es solo una solución, es un ecosistema completo e integrado que automatiza todos los aspectos clave de tu negocio.
          </p>
        </div>
        
        {/* Visualization of the ecosystem as a connected system */}
        <div className="bg-irrelevant-component border border-irrelevant-border rounded-xl p-8 mb-16 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(140,125,247,0.05),transparent_70%)]"></div>
          
          {/* Central node with modules around it */}
          <div className="relative">
            {/* Central Hub */}
            <div className="w-32 h-32 bg-gradient-to-br from-irrelevant-primary/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-12 border border-irrelevant-primary/30 z-10 relative">
              <div className="text-center">
                <svg className="w-12 h-12 mx-auto text-irrelevant-primary mb-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-xs font-medium">ECOSISTEMA<br/>IRRELEVANT</span>
              </div>
            </div>
            
            {/* Connection lines */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-irrelevant-primary/30 to-transparent transform -translate-y-1/2"></div>
            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-transparent via-irrelevant-primary/30 to-transparent transform -translate-x-1/2"></div>
            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-irrelevant-primary/30 via-transparent to-irrelevant-primary/30 transform -translate-x-1/2 rotate-45"></div>
            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-irrelevant-primary/30 via-transparent to-irrelevant-primary/30 transform -translate-x-1/2 -rotate-45"></div>
            
            {/* Module Icons */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {modules.map((module, index) => (
                <div 
                  key={module.id}
                  className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
                    activeModule === index 
                      ? 'scale-110' 
                      : 'opacity-70 hover:opacity-100'
                  }`}
                  onClick={() => handleModuleChange(index)}
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${module.color} flex items-center justify-center mb-3 shadow-lg transition-all duration-300 ${activeModule === index ? 'shadow-irrelevant-primary/30' : ''}`}>
                    <div className="text-white">
                      {module.icon}
                    </div>
                  </div>
                  <span className="text-xs font-medium text-center">{module.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Selected module details */}
        <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          <div className="bg-irrelevant-component border border-irrelevant-border rounded-xl overflow-hidden">
            <div className={`h-2 bg-gradient-to-r ${modules[activeModule].color}`}></div>
            <div className="p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${modules[activeModule].color} flex-shrink-0 flex items-center justify-center mr-5 shadow-lg`}>
                  <div className="text-white">
                    {modules[activeModule].icon}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-irrelevant-primary font-medium mb-1">{modules[activeModule].tagline}</div>
                  <h3 className="text-2xl font-bold">{modules[activeModule].title}</h3>
                </div>
              </div>
              
              <p className="text-lg mb-8 text-irrelevant-textSecondary">
                {modules[activeModule].description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {modules[activeModule].benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-irrelevant-primary/20 flex items-center justify-center mr-3">
                      <svg className="h-4 w-4 text-irrelevant-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              
              {activeModule === 0 ? (
                <div className="mt-6 bg-irrelevant-background/30 rounded-lg p-6 border border-irrelevant-border/50">
                  <div className="flex items-center mb-4">
                    <svg className="w-6 h-6 text-irrelevant-primary mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <h4 className="font-bold">Esta solución es un game changer para tu empresa</h4>
                  </div>
                  <p className="text-irrelevant-textSecondary mb-4">
                    La automatización de facturación y causación es la puerta de entrada al ecosistema completo de Irrelevant - un sistema integral que elimina los trabajos manuales y repetitivos de toda tu operación.
                  </p>
                  <div className="flex justify-end">
                    <div className="bg-irrelevant-primary/10 text-irrelevant-primary rounded-full px-3 py-1 text-xs">
                      Solución destacada
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between mt-6 bg-irrelevant-background/30 rounded-lg p-4 border border-irrelevant-border/50">
                  <span className="text-irrelevant-textSecondary text-sm">
                    Descubre cómo esta solución se integra con el resto del ecosistema
                  </span>
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
        
       
        {/* CTA Section */}
        <div className="mt-12 text-center">
          <p className="text-lg max-w-3xl mx-auto text-irrelevant-textSecondary mb-6">
            Descubre cómo el ecosistema completo de Irrelevant puede transformar tu empresa eliminando tareas manuales y automatizando procesos clave
          </p>
          <a 
            href="https://wa.me/1234567890?text=Quiero%20conocer%20más%20del%20ecosistema%20completo%20Irrelevant"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-irrelevant-primary hover:bg-irrelevant-primary/90 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-irrelevant-primary/30"
          >
            <span className="inline-flex items-center font-bold">
              EXPLORAR TODO EL ECOSISTEMA
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;