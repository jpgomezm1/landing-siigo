const CTASection = () => {
  return (
    <section className="bg-gradient-to-b from-irrelevant-interactive to-irrelevant-background py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-irrelevant-primary opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <h2 className="mb-6">
            INCORPORA IA
            <span className="block bg-gradient-to-r from-irrelevant-primary to-purple-400 text-transparent bg-clip-text mt-2">
              A TU EMPRESA
            </span>
          </h2>
          
          <p className="text-xl mb-10 mx-auto max-w-2xl text-irrelevant-textSecondary">
            Las empresas más eficientes hoy usan IA en sus procesos. 
            Es momento de que tú también des el salto hacia el futuro.
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
                    <span>Implementación en solo 5 días</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-irrelevant-primary mt-1 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Integración perfecta con tu sistema actual</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-irrelevant-primary mt-1 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Capacitación de tu equipo incluida</span>
                  </li>
                </ul>
              </div>
              
              <a 
                href="https://wa.me/1234567890?text=Quiero%20incorporar%20Irrelevant%20a%20mi%20equipo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-irrelevant-primary hover:bg-irrelevant-primary/90 text-white font-bold py-5 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-irrelevant-primary/30 flex-shrink-0 text-center md:text-left w-full md:w-auto"
              >
                INCORPORAR IRRELEVANT
              </a>
            </div>
          </div>
          
         
        </div>
      </div>
    </section>
  );
};

export default CTASection;