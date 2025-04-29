
const CTASection = () => {
  return (
    <section className="bg-irrelevant-interactive py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-irrelevant-primary opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="badge-primary inline-block mb-4">COMIENZA HOY</span>
          <h2 className="mb-6">
            TUS FACTURAS DEBERÍAN 
            <span className="block bg-gradient-to-r from-irrelevant-primary to-purple-400 text-transparent bg-clip-text">
              HACERSE SOLAS
            </span>
          </h2>
          
          <p className="text-xl mb-10 mx-auto max-w-2xl">
            Implementación en 5 días. Tu Agente Contable IA te espera para automatizar todos tus procesos.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://wa.me/1234567890?text=Quiero%20mi%20asistente%20contable%20IA"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button animate-pulse-glow w-full sm:w-auto"
            >
              👉 QUIERO MI ASISTENTE CONTABLE IA
            </a>
            
            <a 
              href="https://calendly.com/irrelevant/demo"
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-irrelevant-background hover:bg-irrelevant-component text-white px-8 py-4 rounded-lg transition-colors font-bold w-full sm:w-auto"
            >
              🗓️ Agendar una demostración
            </a>
          </div>
          
          <div className="mt-10 flex flex-wrap gap-6 justify-center items-center">
            <div className="badge-irrelevant">
              ✅ Sin costos de implementación
            </div>
            <div className="badge-irrelevant">
              ⏱️ Listos en menos de 5 días
            </div>
            <div className="badge-irrelevant">
              🎓 Capacitación incluida
            </div>
            <div className="badge-irrelevant">
              🔐 Confidencialidad garantizada
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
