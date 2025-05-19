import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

const InvestFlowHeroSection = () => {
  const videoRef = useRef();
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();
  
  // Datos para animación de números
  const [counters, setCounters] = useState({
    timeReduction: 0,
    alignmentScore: 0,
    efficiencyGain: 0
  });
  
  // Estados para animaciones de documentos
  const [showDocument, setShowDocument] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);
  
  // Efecto para seguimiento del mouse para efectos parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Efecto para detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Efecto para controlar la velocidad del video
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
    }
    
    // Simular que la página se ha cargado completamente con una secuencia de animación
    const loadSequence = async () => {
      await controls.start({ opacity: 1, scale: 1, transition: { duration: 0.5 } });
      setIsLoaded(true);
      
      // Iniciar la secuencia de animación de documentos después de cargar
      setTimeout(() => {
        setShowDocument(true);
        setTimeout(() => {
          setShowAnalysis(true);
        }, 1500);
      }, 1000);
      
      // Iniciar las animaciones de contador
      const counterInterval = setInterval(() => {
        setCounters(prev => ({
          timeReduction: Math.min(prev.timeReduction + 3, 80),
          alignmentScore: Math.min(prev.alignmentScore + 2, 95),
          efficiencyGain: Math.min(prev.efficiencyGain + 2, 70)
        }));
      }, 50);
      
      // Limpiar el intervalo cuando todos los contadores llegan a su máximo
      setTimeout(() => {
        clearInterval(counterInterval);
      }, 2000);
    };
    
    loadSequence();
  }, [controls]);
  
  // Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        when: "beforeChildren"
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 10
      }
    }
  };
  
  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-15, 15, -15],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }
    }
  };
  
  const pulseAnimation = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.08, 1],
      filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }
    }
  };

  // Componente para partículas de datos/números
  const DataParticles = () => {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => {
          const size = Math.random() * 4 + 2;
          const depth = Math.random() * 5 + 1;
          const speed = 15 + Math.random() * 25;
          const values = ["$", "%", "📊", "📝", "🔎", "📈", "✓", "AI"];
          const randValue = values[Math.floor(Math.random() * values.length)];
          
          return (
            <motion.div
              key={i}
              className="absolute text-blue-500 font-mono"
              style={{
                fontSize: `${size * 2.5}px`,
                fontWeight: "bold",
                textShadow: `0 0 ${size}px rgba(37, 99, 235, 0.8)`,
                zIndex: Math.floor(depth),
                x: `${Math.random() * 100}vw`,
                y: `${Math.random() * 100}vh`,
              }}
              animate={{
                x: [
                  `${Math.random() * 100}vw`,
                  `${Math.random() * 100}vw`,
                  `${Math.random() * 100}vw`
                ],
                y: [
                  `${Math.random() * 100}vh`,
                  `${Math.random() * 100}vh`,
                  `${Math.random() * 100}vh`
                ],
                opacity: [0.2 + Math.random() * 0.3, 0.5 + Math.random() * 0.4, 0.2 + Math.random() * 0.3],
              }}
              transition={{
                duration: speed,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
              style={{
                x: `calc(${mousePosition.x * (10 - depth) * -1}px + ${Math.random() * 100}vw)`,
                y: `calc(${mousePosition.y * (10 - depth) * -1}px + ${Math.random() * 100}vh)`,
              }}
            >
              {randValue}
            </motion.div>
          );
        })}
      </div>
    );
  };
  
  // Componente para el efecto de rejilla/grid de datos
  const DataGridEffect = () => {
    return (
      <div className="absolute inset-0 z-0 overflow-hidden opacity-20">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: 'linear-gradient(rgba(37, 99, 235, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(37, 99, 235, 0.15) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
            backgroundPosition: 'center center',
            transform: `perspective(1000px) rotateX(75deg) translateZ(-100px) translateY(150px) scale(2)`,
          }}
        />
      </div>
    );
  };

  // Efecto de flujo de datos
  const DataFlowEffect = () => {
    return (
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => {
          const width = Math.random() * 150 + 100;
          const height = 1;
          const speed = 10 + Math.random() * 5;
          
          return (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
              style={{
                width: `${width}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.4,
                filter: 'blur(1px)'
              }}
              animate={{
                x: ['-100%', '200%'],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: speed,
                repeat: Infinity,
                delay: i * 2,
                ease: "linear"
              }}
            />
          );
        })}
      </div>
    );
  };
  
  // Componente para el efecto de documentos flotantes
  const FloatingDocuments = () => {
    return (
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => {
          const size = 80 + Math.random() * 40;
          const rotation = -15 + Math.random() * 30;
          const delay = i * 2;
          
          return (
            <motion.div
              key={i}
              className="absolute bg-white/5 backdrop-blur-sm rounded-md border border-blue-500/20 shadow-lg w-20 h-28"
              style={{
                width: `${size}px`,
                height: `${size * 1.4}px`,
                transform: `rotate(${rotation}deg)`,
              }}
              initial={{ 
                x: `${-30 + Math.random() * 60}%`, 
                y: '120%',
                opacity: 0
              }}
              animate={{ 
                y: ['-10%', '-110%'],
                opacity: [0, 0.7, 0]
              }}
              transition={{
                duration: 10 + Math.random() * 5,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut"
              }}
            >
              {/* Líneas de documento simuladas */}
              <div className="h-full w-full p-2 flex flex-col justify-between overflow-hidden">
                <div className="w-full flex justify-between items-center mb-1">
                  <div className="w-1/2 h-2 bg-blue-500/20 rounded-full"></div>
                  <div className="w-1/4 h-2 bg-blue-500/20 rounded-full"></div>
                </div>
                <div className="flex-grow flex flex-col space-y-1 justify-center">
                  {[...Array(4)].map((_, j) => (
                    <div key={j} className="w-full h-1 bg-white/10 rounded-full"></div>
                  ))}
                </div>
                <div className="w-2/3 h-2 bg-blue-500/30 rounded-full self-end"></div>
              </div>
            </motion.div>
          );
        })}
      </div>
    );
  };

  // Efecto de análisis de documentos
  const AnalyticsEffect = () => {
    return (
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.div
          className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          style={{ filter: 'blur(3px)' }}
          animate={{
            top: ['-10px', '120%'],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 4
          }}
        />
      </motion.div>
    );
  };

  // Componente para estadísticas animadas
  const AnimatedStats = () => {
    return (
      <div className="absolute bottom-4 right-4 space-y-2 hidden lg:block">
        {[
          { label: "Reducción de tiempo", value: counters.timeReduction, suffix: "%" },
          { label: "Alineación con tesis", value: counters.alignmentScore, suffix: "%" },
          { label: "Ganancia en eficiencia", value: counters.efficiencyGain, suffix: "%" }
        ].map((stat, i) => (
          <motion.div 
            key={i}
            className="bg-gray-900/30 backdrop-blur-sm border border-blue-500/20 px-3 py-2 rounded-lg flex items-center justify-between w-56"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1 + i * 0.3, duration: 0.5 }}
          >
            <span className="text-xs text-gray-300">{stat.label}</span>
            <span className="text-sm font-bold text-blue-400">
              {stat.value}{stat.suffix}
            </span>
          </motion.div>
        ))}
      </div>
    );
  };

  // Componente para la animación principal de documento a análisis
  const DocumentProcessAnimation = () => {
    return (
      <div className="absolute top-1/2 transform -translate-y-1/2 right-8 hidden lg:block">
        <AnimatePresence>
          {showDocument && (
            <motion.div
              className="relative w-40 h-52 bg-white/10 backdrop-blur-md rounded-lg border border-blue-500/30 shadow-lg overflow-hidden"
              initial={{ opacity: 0, x: 100, rotateY: 90 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
            >
              {/* Contenido del documento */}
              <div className="p-3 flex flex-col h-full">
                <div className="flex justify-between items-center mb-2">
                  <div className="w-16 h-3 bg-blue-500/20 rounded-md"></div>
                  <div className="w-8 h-3 bg-blue-500/20 rounded-md"></div>
                </div>
                
                <div className="flex-grow space-y-2">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-full h-2 bg-white/10 rounded-full"></div>
                  ))}
                  
                  <div className="flex justify-between items-center mt-4">
                    <div className="w-12 h-2 bg-white/20 rounded-full"></div>
                    <div className="w-14 h-3 bg-blue-500/30 rounded-full"></div>
                  </div>
                </div>
                
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent"
                  animate={{
                    y: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: 1,
                    repeatType: "loop",
                    ease: "linear"
                  }}
                />
              </div>
              
              <AnimatePresence>
                {showAnalysis && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-gray-900/60 backdrop-blur-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.2, 1] }}
                      transition={{ 
                        duration: 0.5,
                        times: [0, 0.6, 1]
                      }}
                    >
                      <motion.svg 
                        viewBox="0 0 24 24" 
                        className="w-10 h-10 text-white"
                        fill="none"
                        stroke="currentColor"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        <path d="M5 13L9 17L19 7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </motion.svg>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video with enhanced effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gray-900/90 backdrop-blur-md z-10"></div>
        <DataGridEffect />
        <motion.div 
          className="relative h-full w-full"
          animate={{
            scale: scrolled ? 1.05 : 1
          }}
          transition={{ duration: 1 }}
        >
          <video 
            ref={videoRef}
            autoPlay 
            muted 
            loop 
            playsInline
            className="object-cover w-full h-full opacity-30"
          >
            <source src="https://storage.googleapis.com/cluvi/irrelevant/data-flow-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
      
      {/* Animated background gradients with depth effect */}
      <div className="absolute inset-0 z-1 overflow-hidden">
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            x: `calc(${mousePosition.x * -30}px)`,
            y: `calc(${mousePosition.y * -30}px)`,
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600 rounded-full opacity-10 blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            x: `calc(${mousePosition.x * 30}px)`,
            y: `calc(${mousePosition.y * 30}px)`,
          }}
        />
      </div>
      
      {/* Advanced effects */}
      <AnalyticsEffect />
      <DataParticles />
      <DataFlowEffect />
      <FloatingDocuments />
      
      {/* Content */}
      <div className="relative z-20 px-4 sm:px-6 w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left column: Text content */}
        <motion.div 
          className="flex flex-col"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={containerVariants}
          style={{
            x: `calc(${mousePosition.x * -10}px)`,
            y: `calc(${mousePosition.y * -10}px)`,
          }}
        >
          <motion.h1 
            className="font-jakarta font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6"
            variants={itemVariants}
          >
            <motion.span 
              className="block"
              animate={{ 
                x: [0, 1, -1, 0], 
                textShadow: [
                  "0 0 0 rgba(37, 99, 235, 0)",
                  "0 0 10px rgba(37, 99, 235, 0.5)",
                  "0 0 0 rgba(37, 99, 235, 0)"
                ]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              TUS INVERSIONES AHORA
            </motion.span>
            <motion.span 
              className="block bg-gradient-to-r from-blue-500 to-indigo-400 text-transparent bg-clip-text relative"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                textShadow: [
                  "0 0 20px rgba(37, 99, 235, 0.3)",
                  "0 0 30px rgba(37, 99, 235, 0.5)",
                  "0 0 20px rgba(37, 99, 235, 0.3)"
                ]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              SON INTELIGENTES
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white mb-6 sm:mb-8"
            variants={itemVariants}
          >
            Transforma tu proceso de due diligence con análisis automatizado y memos de inversión alineados con tu tesis. 
            <motion.span 
              className="font-bold text-blue-400 inline-block ml-1"
              animate={{ 
                color: ['rgb(96, 165, 250)', 'rgb(129, 140, 248)', 'rgb(96, 165, 250)'],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              De 20 horas a 4 horas por startup.
            </motion.span>
          </motion.p>
          
          <motion.a 
            href="https://wa.me/573183351733?text=Quiero%20implementar%20InvestFlow%20en%20mi%20fondo"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 transform shadow-lg shadow-blue-500/30 text-sm md:text-base w-full sm:w-auto self-center sm:self-start overflow-hidden relative"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0px 5px 20px rgba(37, 99, 235, 0.5)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="inline-flex items-center justify-center font-bold relative z-10">
              QUIERO INVESTFLOW PARA MI FONDO
              <motion.div 
                className="ml-2 w-5 h-5"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </motion.a>
          
          <motion.div 
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-2 justify-center sm:justify-start"
            variants={itemVariants}
          >
            {[
              {
                icon: (
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                text: "80% menos tiempo"
              },
              {
                icon: (
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4V6M12 8V12M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                text: "Evaluación automática"
              },
              {
                icon: (
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                text: "Alineación con tesis"
              },
              {
                icon: (
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                text: "IA contextual"
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="flex items-center bg-gray-900/70 backdrop-blur-sm border border-gray-700 py-2 px-3 sm:px-4 rounded-lg group hover:bg-gray-800/90 transition-all duration-300 w-full sm:w-auto"
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: "0px 2px 15px rgba(37, 99, 235, 0.15)",
                  borderColor: "rgba(37, 99, 235, 0.5)"
                }}
                initial="rest"
                whileHover="hover"
              >
                <motion.div
                  variants={{
                    rest: { rotate: 0 },
                    hover: { rotate: 360, transition: { duration: 0.6 } }
                  }}
                >
                  {feature.icon}
                </motion.div>
                <span className="text-xs font-medium">{feature.text}</span>
                <motion.div
                  className="absolute inset-0 rounded-lg border border-blue-500/0 group-hover:border-blue-500/30"
                  variants={{
                    rest: { opacity: 0 },
                    hover: { 
                      opacity: 1,
                      transition: { duration: 0.3 }
                    }
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Right column: Enhanced 3D Investment Analytics Dashboard */}
        <motion.div 
          className="relative hidden lg:flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            x: `calc(${mousePosition.x * 15}px)`,
            y: `calc(${mousePosition.y * 15}px)`,
            perspective: "1200px"
          }}
        >
          <div className="relative w-full max-w-md mx-auto">
            {/* Digital data streams flowing around the analytics dashboard */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(8)].map((_, i) => {
                const angle = (Math.PI * 2 / 8) * i;
                const radius = 180;
                const startX = Math.cos(angle) * radius;
                const startY = Math.sin(angle) * radius;
                const endX = Math.cos(angle + Math.PI) * radius;
                const endY = Math.sin(angle + Math.PI) * radius;
                
                return (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-500 rounded-full"
                    style={{
                      filter: "blur(1px)",
                      boxShadow: "0 0 8px 2px rgba(37, 99, 235, 0.7)",
                      x: startX,
                      y: startY,
                      translateX: "-50%",
                      translateY: "-50%",
                    }}
                    animate={{
                      x: [startX, endX, startX],
                      y: [startY, endY, startY],
                      opacity: [0.8, 0.2, 0.8],
                      scale: [1, 0.5, 1]
                    }}
                    transition={{
                      duration: 3 + i % 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3
                    }}
                  />
                );
              })}
            </div>
            
            {/* Floating documents and analytics cards */}
            <div className="absolute inset-0 pointer-events-none">
              {[
                { top: "-20%", right: "10%", rotation: -15, delay: 0 },
                { top: "10%", left: "-20%", rotation: 10, delay: 1 },
                { bottom: "10%", right: "-15%", rotation: 5, delay: 2 },
                { bottom: "-5%", left: "0%", rotation: -8, delay: 1.5 }
              ].map((pos, i) => (
                <motion.div
                  key={i}
                  className="absolute w-12 h-16 bg-white/10 backdrop-blur-sm rounded-sm border border-blue-500/20 p-1.5"
                  style={{
                    ...pos,
                    transform: `rotate(${pos.rotation}deg)`,
                    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
                  }}
                  animate={{
                    y: [0, -15, 0],
                    rotate: [pos.rotation, pos.rotation + 3, pos.rotation],
                    boxShadow: [
                      "0 5px 15px rgba(0, 0, 0, 0.2)",
                      "0 8px 20px rgba(37, 99, 235, 0.3)",
                      "0 5px 15px rgba(0, 0, 0, 0.2)"
                    ]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: pos.delay,
                    ease: "easeInOut"
                  }}
                >
                  {/* Líneas de documento simuladas */}
                  <div className="w-2/3 h-1 bg-white/30 rounded-full mb-1"></div>
                  <div className="w-full h-1 bg-white/20 rounded-full mb-1"></div>
                  <div className="w-1/2 h-1 bg-white/20 rounded-full mb-1"></div>
                  <div className="w-3/4 h-1 bg-white/20 rounded-full mb-1"></div>
                  <div className="mt-3 w-2/3 h-1.5 bg-blue-500/40 rounded-full"></div>
                </motion.div>
              ))}
            </div>
            
            {/* Glow effect behind dashboard */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-20 rounded-full blur-2xl"
              {...pulseAnimation}
              style={{
                filter: "blur(30px)",
                transform: `scale(1.2) translateZ(-50px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * -5}deg)`
              }}
            />
            
            {/* 3D transform wrapper for parallax effect on mouse move */}
            <motion.div
              className="relative z-0 transform-gpu"
              style={{
                transformStyle: "preserve-3d",
                transform: `perspective(1200px) rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * 2}deg)`
              }}
            >
              {/* Dashboard image with 3D floating effect */}
              <motion.div
                className="relative z-10"
                {...floatingAnimation}
              >
                <img 
                  src="https://storage.googleapis.com/cluvi/Images%20Web%20irrelevant/vc_irrelevant.png" 
                  alt="Dashboard de InvestFlow" 
                  className="w-full h-auto max-h-[500px] object-contain drop-shadow-2xl"
                  style={{
                    filter: "drop-shadow(0 0 20px rgba(37, 99, 235, 0.3))"
                  }}
                />
              </motion.div>
              
              {/* Digital glitch effect */}
              <AnimatePresence>
                {isLoaded && (
                  <motion.div
                    className="absolute inset-0 overflow-hidden mix-blend-screen"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: [0, 0.5, 0],
                      x: ['-5%', '5%', '-5%']
                    }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.2,
                      repeat: 3,
                      repeatDelay: 10,
                      delay: 3
                    }}
                  >
                    <img 
                      src="https://storage.googleapis.com/cluvi/Images%20Web%20irrelevant/investflow-dashboard.png"
                      alt=""
                      className="w-full h-auto max-h-[500px] object-contain"
                      style={{ 
                        filter: "hue-rotate(90deg) brightness(1.5) contrast(1.5)",
                        transform: "translateX(5px)"
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Tech circles with information about analytics capabilities */}
              <motion.div 
                className="absolute -bottom-4 -left-8 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center overflow-hidden backdrop-blur-sm"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.5, type: "spring" }}
                whileHover={{ 
                  scale: 1.1, 
                  boxShadow: "0 0 30px rgba(37, 99, 235, 0.5)"
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-cyan-400/30"
                  animate={{
                    transform: "rotate(360deg)",
                  }}
                  transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 10
                  }}
                  style={{
                    background: "radial-gradient(circle at center, rgba(37, 99, 235, 0.3) 0%, transparent 70%)",
                  }}
                />
                <svg className="w-8 h-8 text-white relative z-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8V16M12 11V16M8 14V16M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
              
              <motion.div 
                className="absolute -top-8 right-0 w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center overflow-hidden backdrop-blur-sm"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 2, duration: 0.5, type: "spring" }}
                whileHover={{ 
                  scale: 1.1, 
                  boxShadow: "0 0 30px rgba(79, 70, 229, 0.5)"
                }}
              >
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    transform: "rotate(360deg)",
                  }}
                  transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 15
                  }}
                  style={{
                    background: "radial-gradient(circle at center, rgba(79, 70, 229, 0.3) 0%, transparent 70%)",
                  }}
                />
                <svg className="w-7 h-7 text-white relative z-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
              
              {/* AI feature badge */}
              <motion.div
                className="absolute -bottom-4 right-4 bg-gradient-to-r from-blue-400 to-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 2.3, duration: 0.5, type: "spring" }}
              >
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Análisis IA</span>
              </motion.div>
              
              {/* Document processing popup */}
              <motion.div
                className="absolute -top-10 left-4 bg-gray-900/80 backdrop-blur-md p-2 rounded-lg border border-blue-500/20 shadow-lg w-48"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ 
                  opacity: [0, 1, 1, 0],
                  y: [20, 0, 0, -20],
                  scale: [0.8, 1, 1, 0.8]
                }}
                transition={{
                  duration: 4,
                  times: [0, 0.1, 0.9, 1],
                  repeat: Infinity,
                  repeatDelay: 8
                }}
              >
                <div className="text-xs font-medium text-white mb-1">
                  <motion.span
                    animate={{
                      opacity: [1, 0, 1]
                    }}
                    transition={{
                      duration: 1,
                      repeat: 3,
                      repeatDelay: 1
                    }}
                  >
                    Alineación con tesis de inversión: 92%
                  </motion.span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-[10px] text-blue-400">Pitch Deck analizado</div>
                  <div className="flex items-center">
                    <motion.div 
                      className="w-2 h-2 bg-green-500 rounded-full mr-1"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                    <span className="text-[10px] text-green-400">completado</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Enhanced glowing circle underneath */}
            <motion.div 
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-56 h-10 opacity-60 blur-xl rounded-full"
              style={{
                background: "radial-gradient(ellipse, rgba(37, 99, 235, 0.8) 0%, rgba(37, 99, 235, 0) 70%)"
              }}
              animate={{
                width: ['14rem', '16rem', '14rem'],
                opacity: [0.6, 0.8, 0.6],
                filter: [
                  "blur(15px) brightness(1)",
                  "blur(20px) brightness(1.3)",
                  "blur(15px) brightness(1)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </div>
      
      {/* Código de números y métricas flotantes en el fondo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => {
          const size = Math.random() * 10 + 8;
          const speed = 20 + Math.random() * 40;
          // Datos relevantes para análisis de inversiones
          const metrics = [
            "TAM: $5.2B",
            "CAC: $450",
            "EBITDA: 32%",
            "IRR: 18.5%",
            "ARR: $1.2M",
            "MRR: $125K",
            "Cohort retention: 85%",
            "Alignment score: 92%"
          ];
          const metric = metrics[Math.floor(Math.random() * metrics.length)];
          
          return (
            <motion.div
              key={i}
              className="absolute text-blue-500/20 font-mono text-sm font-bold"
              style={{
                left: `${Math.random() * 90 + 5}%`,
                top: "-20px",
                fontSize: `${size}px`,
              }}
              initial={{ opacity: 0, y: 0 }}
              animate={{
                y: ["0vh", "120vh"],
                opacity: [0, 0.2, 0],
              }}
              transition={{
                duration: speed,
                repeat: Infinity,
                delay: i * 5,
                ease: "linear",
                times: [0, 0.8, 1]
              }}
            >
              {metric}
            </motion.div>
          );
        })}
      </div>
      
      {/* Enhanced wave divider at bottom with parallax effect */}
      <div 
        className="absolute bottom-0 left-0 w-full overflow-hidden z-10"
        style={{
          transform: `translateY(${scrolled ? '10%' : '0%'}) scale(${scrolled ? 1.1 : 1})`,
          transition: 'transform 0.5s ease-out'
        }}
      >
        <motion.svg 
          className="w-full h-auto" 
          viewBox="0 0 1440 74" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.path 
            d="M0 34.3C107.8 59.3 291.8 74 480 74C668.2 74 852.2 59.3 960 34.3C1067.8 9.3 1251.8 0 1440 0V74H0V34.3Z" 
            fill="url(#paint0_linear_hero_wave)"
            fillOpacity="0.15"
            animate={{
              d: [
                "M0 34.3C107.8 59.3 291.8 74 480 74C668.2 74 852.2 59.3 960 34.3C1067.8 9.3 1251.8 0 1440 0V74H0V34.3Z",
                "M0 24.3C107.8 69.3 291.8 54 480 64C668.2 74 852.2 49.3 960 24.3C1067.8 19.3 1251.8 10 1440 20V74H0V24.3Z",
                "M0 34.3C107.8 59.3 291.8 74 480 74C668.2 74 852.2 59.3 960 34.3C1067.8 9.3 1251.8 0 1440 0V74H0V34.3Z"
              ]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <defs>
            <linearGradient id="paint0_linear_hero_wave" x1="720" y1="0" x2="720" y2="74" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2563EB" />
              <stop offset="1" stopColor="#2563EB" stopOpacity="0" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>
      
      {/* Enhanced scroll indicator */}
      <motion.div 
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: scrolled ? 0 : 1, y: scrolled ? -20 : 0 }}
        transition={{ delay: 2.5, duration: 0.5 }}
      >
        <motion.span 
          className="text-gray-400 text-xs mb-2 sm:mb-3 font-medium"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Descubre más
        </motion.span>
        <motion.div 
          className="w-8 h-8 rounded-full flex items-center justify-center border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm"
          animate={{ 
            y: [0, 5, 0],
            boxShadow: [
              "0 0 0 rgba(37, 99, 235, 0)",
              "0 0 10px rgba(37, 99, 235, 0.5)",
              "0 0 0 rgba(37, 99, 235, 0)"
            ]
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
          whileHover={{ scale: 1.1 }}
        >
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 text-blue-500" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            animate={{ y: [0, 2, 0] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </motion.div>
      </motion.div>
      
      {/* CSS para animaciones adicionales */}
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </section>
  );
};

export default InvestFlowHeroSection;