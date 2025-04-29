
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

const PainTriggerCard = ({ beforeTitle, beforeDescription, afterTitle, afterDescription, beforeIcon, afterIcon, delay = 0 }: PainTriggerCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="card-irrelevant cursor-pointer overflow-hidden relative h-96 md:h-80"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 flex transition-all duration-500">
        {/* Before State */}
        <div 
          className={`w-full flex flex-col justify-center items-center p-8 transition-transform duration-500 ease-in-out ${isHovered ? '-translate-y-full' : 'translate-y-0'}`}
          style={{
            backgroundColor: "#161827",
          }}
        >
          <div className="text-4xl mb-6">{beforeIcon}</div>
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-white text-center">
            {beforeTitle}
          </h3>
          <p className="text-center">
            {beforeDescription}
          </p>
          <div className="mt-6 text-irrelevant-primary font-medium flex items-center">
            <span>Ver solución</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
        
        {/* After State */}
        <div 
          className={`w-full flex flex-col justify-center items-center p-8 transition-transform duration-500 ease-in-out ${isHovered ? 'translate-y-0' : 'translate-y-full'}`}
          style={{
            backgroundColor: "#1E2235",
          }}
        >
          <div className="text-4xl mb-6">{afterIcon}</div>
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-irrelevant-primary text-center">
            {afterTitle}
          </h3>
          <p className="text-center">
            {afterDescription}
          </p>
          <div className="mt-6 bg-irrelevant-primary bg-opacity-20 text-irrelevant-primary px-4 py-2 rounded-full font-medium">
            Solución Irrelevant
          </div>
        </div>
      </div>
    </div>
  );
};

export default PainTriggerCard;
