import { useState } from 'react';

interface PainTriggerCardProps {
  beforeTitle: string;
  beforeDescription: string;
  afterTitle: string;
  afterDescription: string;
  beforeIcon: string;
  afterIcon: string;
  delay?: number;
}

const PainTriggerCard = ({ 
  beforeTitle, 
  beforeDescription, 
  afterTitle, 
  afterDescription, 
  beforeIcon, 
  afterIcon, 
  delay = 0 
}: PainTriggerCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <div 
      className="perspective-1000 w-full h-96 relative" // Aumentado a h-96 para altura fija más grande
      style={{ animationDelay: `${delay}ms` }}
    >
      <div 
        className={`transform-style-3d relative w-full h-full transition-transform duration-700 ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front/Before Card */}
        <div className="backface-hidden absolute w-full h-full rounded-xl overflow-hidden shadow-lg border border-irrelevant-border bg-gradient-to-b from-irrelevant-background to-irrelevant-background/50">
          <div className="absolute inset-0 bg-irrelevant-primary/5"></div>
          <div className="p-6 flex flex-col h-full">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-lg bg-irrelevant-background flex items-center justify-center text-irrelevant-primary">
                {/* Renderizado condicional de iconos basado en beforeIcon */}
                {beforeIcon === "time" && (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8V12L9 15M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
                {beforeIcon === "error" && (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
                {beforeIcon === "chain" && (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.8284 10.1716C12.2663 8.60948 9.73367 8.60948 8.17157 10.1716L4.17157 14.1716C2.60948 15.7337 2.60948 18.2663 4.17157 19.8284C5.73367 21.3905 8.26633 21.3905 9.82843 19.8284L10.93 18.7268M10.1716 13.8284C11.7337 15.3905 14.2663 15.3905 15.8284 13.8284L19.8284 9.82843C21.3905 8.26633 21.3905 5.73367 19.8284 4.17157C18.2663 2.60948 15.7337 2.60948 14.1716 4.17157L13.072 5.27118" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
                {beforeIcon === "chart-down" && (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 14L4 19M4 19L9 19M4 19L4 14M21 5L16 10M16 10H21M16 10V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="ml-3 text-sm uppercase tracking-wider text-irrelevant-textSecondary">Problema actual</div>
            </div>
            
            <h3 className="text-xl font-bold mb-3 text-white line-clamp-2">
              {beforeTitle}
            </h3>
            
            <p className="text-irrelevant-textSecondary text-sm mb-auto line-clamp-4">
              {beforeDescription}
            </p>
            
            <div className="mt-4 pt-4 border-t border-irrelevant-border flex justify-between items-center">
              <span className="text-irrelevant-primary text-sm font-medium">Ver solución</span>
              <div className="bg-irrelevant-background p-2 rounded-full">
                <svg className="w-5 h-5 text-irrelevant-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Back/After Card */}
        <div className="backface-hidden rotate-y-180 absolute w-full h-full rounded-xl overflow-hidden shadow-lg border border-irrelevant-primary/30 bg-gradient-to-b from-irrelevant-background to-irrelevant-background/50">
          <div className="absolute inset-0 bg-irrelevant-primary/10"></div>
          <div className="p-6 flex flex-col h-full">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-lg bg-irrelevant-primary/20 flex items-center justify-center text-irrelevant-primary">
                {/* Renderizado condicional de iconos basado en afterIcon */}
                {afterIcon === "rocket" && (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 11L21.2 2.8C21.6 2.4 22 2 22 2M11 13L2.8 21.2C2.4 21.6 2 22 2 22M11 2L15 6M17 8L22 13M2 11L6 15M8 17L13 22M22 2L13 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
                {afterIcon === "check" && (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
                {afterIcon === "brain" && (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 14.5L9.5 19.5M14.5 14.5L14.5 19.5M12 14.5L12 19.5M8 13.5C5.23858 13.5 3 11.2614 3 8.5C3 6.17246 4.6 4.23328 6.75 3.62264C6.75 3.62264 6.90112 2.5 8 2.5C9.12194 2.5 9.25 3.62264 9.25 3.62264C11.4 4.23328 13 6.17246 13 8.5C13 11.2614 10.7614 13.5 8 13.5ZM16 13.5C13.2386 13.5 11 11.2614 11 8.5C11 6.17246 12.6 4.23328 14.75 3.62264C14.75 3.62264 14.9011 2.5 16 2.5C17.1219 2.5 17.25 3.62264 17.25 3.62264C19.4 4.23328 21 6.17246 21 8.5C21 11.2614 18.7614 13.5 16 13.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
                {afterIcon === "chart-up" && (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 14L21 9M21 9H16M21 9V14M8 14L3 19M3 19H8M3 19V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="ml-3 text-sm uppercase tracking-wider text-irrelevant-primary">Solución Irrelevant</div>
            </div>
            
            <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-irrelevant-primary to-purple-400 text-transparent bg-clip-text line-clamp-2">
              {afterTitle}
            </h3>
            
            <p className="text-irrelevant-textSecondary text-sm mb-auto line-clamp-4">
              {afterDescription}
            </p>
            
            <div className="mt-4 pt-4 border-t border-irrelevant-border flex justify-between items-center">
              <span className="text-irrelevant-primary text-sm font-medium">Volver al problema</span>
              <div className="bg-irrelevant-background p-2 rounded-full">
                <svg className="w-5 h-5 text-irrelevant-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 3D effect styles - ensure these are in your global CSS or use a more Tailwind-compatible approach */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default PainTriggerCard;