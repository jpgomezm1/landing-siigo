const CTASection = () => {
  return (
    <section className="bg-gradient-to-b from-irrelevant-interactive to-irrelevant-background py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-irrelevant-primary opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <h2 className="mb-6">
            ELEVA LA EXPERIENCIA
            <span className="block bg-gradient-to-r from-irrelevant-primary to-purple-400 text-transparent bg-clip-text mt-2">
              DE TUS HUÉSPEDES
            </span>
          </h2>
          
          <p className="text-xl mb-10 mx-auto max-w-2xl text-irrelevant-textSecondary">
            Los hoteles líderes están reinventando la hospitalidad con IA. 
            Es momento de que tu propiedad ofrezca una experiencia del siglo XXI.
          </p>
          
          <div className="bg-irrelevant-component p-8 rounded-xl border border-irrelevant-border mb-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-irrelevant-primary to-purple-400 text-transparent bg-clip-text">
                  La transformación comienza ahora
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-irrelevant-primary mt-1 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Implementación en menos de 6 semanas</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-irrelevant-primary mt-1 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Integración perfecta con tus sistemas actuales</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-irrelevant-primary mt-1 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Capacitación completa de tu equipo incluida</span>
                  </li>
                </ul>
              </div>
              
              <a 
                href="https://wa.me/573183351733?text=Quiero%20implementar%20el%20Concierge%20Inteligente%20en%20mi%20hotel"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-irrelevant-primary hover:bg-irrelevant-primary/90 text-white font-bold py-5 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-irrelevant-primary/30 flex-shrink-0 text-center md:text-left w-full md:w-auto"
              >
                IMPLEMENTAR CONCIERGE INTELIGENTE
              </a>
            </div>
          </div>
          
          {/* Calendario de demo */}
          <div className="bg-irrelevant-component/50 p-8 rounded-xl border border-irrelevant-border">
            <div className="flex flex-col items-center">
              <svg className="w-12 h-12 text-irrelevant-primary mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 className="text-xl font-bold mb-2">¿Prefieres ver una demostración?</h3>
              <p className="text-irrelevant-textSecondary max-w-lg mb-6">
                Agendemos una llamada de 30 minutos donde te mostraremos cómo el Concierge Inteligente transformará la experiencia de tus huéspedes y optimizará tus operaciones.
              </p>
              <a 
                href="https://calendly.com/irrelevant-concierge/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-irrelevant-interactive hover:bg-irrelevant-interactive/80 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 10L20 15L15 20M4 4V9C4 9.55228 4.44772 10 5 10H9M4 14V19C4 19.5523 4.44772 20 5 20H9M14 4H19C19.5523 4 20 4.44772 20 5V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                AGENDAR DEMOSTRACIÓN
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;