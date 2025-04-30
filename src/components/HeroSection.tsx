import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

const EnhancedHeroSection = () => {
  const videoRef = useRef();
  const [isLoaded, setIsLoaded] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const textOptions = [
    "Bienvenido a tu hotel. ¿En qué puedo ayudarte hoy?",
    "¿Dónde puedo encontrar el restaurante del hotel?",
    "¿A qué hora es el check-out?",
    "¿Puede recomendar lugares para visitar cerca?"
  ];
  const [typeIndex, setTypeIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const controls = useAnimation();
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
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
    };
    
    loadSequence();
  }, [controls]);
  
  // Efecto para el efecto de escritura
  useEffect(() => {
    const currentText = textOptions[currentTextIndex];
    
    if (isTyping && typeIndex < currentText.length) {
      const typingTimer = setTimeout(() => {
        setTypedText(prevText => prevText + currentText.charAt(typeIndex));
        setTypeIndex(prevIndex => prevIndex + 1);
      }, 35 + Math.random() * 30); // velocidad variable para efecto más realista
      
      return () => clearTimeout(typingTimer);
    } else if (typeIndex === currentText.length) {
      // Esperar antes de borrar
      const pauseTimer = setTimeout(() => {
        setIsTyping(false);
      }, 3000);
      
      return () => clearTimeout(pauseTimer);
    } else if (!isTyping && typedText.length > 0) {
      // Efecto de borrado
      const deleteTimer = setTimeout(() => {
        setTypedText(prevText => prevText.slice(0, -1));
      }, 15); // borrado más rápido que escritura
      
      return () => clearTimeout(deleteTimer);
    } else if (!isTyping && typedText.length === 0) {
      // Preparar para comenzar a escribir el siguiente texto
      const resetTimer = setTimeout(() => {
        setIsTyping(true);
        setTypeIndex(0);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
      }, 500);
      
      return () => clearTimeout(resetTimer);
    }
  }, [typedText, typeIndex, isTyping, currentTextIndex, textOptions]);
  
  // Variantes de animación mejoradas
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

  // Efectos de partículas 3D para crear profundidad
  const Particles = () => {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(25)].map((_, i) => {
          const size = Math.random() * 6 + 2;
          const depth = Math.random() * 5 + 1;
          const speed = 10 + Math.random() * 30;
          
          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                background: `rgba(${96 + Math.random() * 50}, ${69 + Math.random() * 30}, ${255}, ${0.3 + Math.random() * 0.5})`,
                boxShadow: `0 0 ${size * 2}px rgba(${96 + Math.random() * 50}, ${69 + Math.random() * 30}, ${255}, 0.8)`,
                filter: `blur(${Math.random() * 1.5}px)`,
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
                scale: [1, 1.2, 0.8, 1],
                opacity: [0.3 + Math.random() * 0.3, 0.6 + Math.random() * 0.4, 0.3 + Math.random() * 0.3],
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
            />
          );
        })}
      </div>
    );
  };
  
  // Glowing dots que orbitan alrededor de Mr. Irrelevant con efecto 3D
  const OrbitingDots = () => {
    return (
      <div className="absolute w-full h-full top-0 left-0 pointer-events-none">
        {[...Array(5)].map((_, i) => {
          const size = 2 + Math.random() * 4;
          const radius = 120 + i * 15;
          const angle = (2 * Math.PI / 5) * i;
          const speed = 10 + Math.random() * 10;
          const delay = i * 1.5;
          
          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                boxShadow: `0 0 ${size * 3}px ${size}px rgba(96, 69, 255, 0.8)`,
                background: `rgba(${96 + Math.random() * 50}, ${69 + Math.random() * 30}, ${255}, 0.8)`,
                top: `calc(50% + ${radius * Math.sin(angle)}px)`,
                left: `calc(50% + ${radius * Math.cos(angle)}px)`,
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.3, 1],
                opacity: [0.7, 1, 0.7],
                boxShadow: [
                  `0 0 ${size * 2}px ${size / 2}px rgba(96, 69, 255, 0.6)`,
                  `0 0 ${size * 4}px ${size}px rgba(96, 69, 255, 0.9)`,
                  `0 0 ${size * 2}px ${size / 2}px rgba(96, 69, 255, 0.6)`
                ]
              }}
              transition={{
                duration: speed,
                repeat: Infinity,
                delay: delay,
                ease: "linear",
              }}
            />
          );
        })}
        
        {/* Anillo orbital */}
        <motion.div
          className="absolute w-64 h-64 rounded-full border-2 border-irrelevant-primary/20"
          style={{
            top: 'calc(50% - 8rem)',
            left: 'calc(50% - 8rem)',
          }}
          animate={{
            rotate: [0, 360],
            opacity: [0.1, 0.3, 0.1],
            borderColor: [
              'rgba(96, 69, 255, 0.1)',
              'rgba(96, 69, 255, 0.3)',
              'rgba(96, 69, 255, 0.1)'
            ]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    );
  };

  // HoloGridEffect - cuadrícula holográfica en el fondo
  const HoloGridEffect = () => {
    return (
      <div className="absolute inset-0 z-0 overflow-hidden opacity-20">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: 'linear-gradient(rgba(96, 69, 255, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(96, 69, 255, 0.15) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
            backgroundPosition: 'center center',
            transform: `perspective(1000px) rotateX(75deg) translateZ(-100px) translateY(150px) scale(2)`,
          }}
        />
      </div>
    );
  };

  // Interactive gradient orb that follows mouse
  const GradientOrb = () => {
    return (
      <motion.div
        className="absolute w-96 h-96 rounded-full mix-blend-screen pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(111, 78, 255, 0.4) 0%, rgba(111, 78, 255, 0.1) 50%, rgba(111, 78, 255, 0) 80%)',
          filter: 'blur(30px)',
          x: mousePosition.x * 100,
          y: mousePosition.y * 100,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    );
  };

  // Efecto de escáner futurista
  const ScannerEffect = () => {
    return (
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.div
          className="absolute left-0 right-0 h-2 bg-gradient-to-r from-transparent via-irrelevant-primary to-transparent"
          style={{ filter: 'blur(5px)' }}
          animate={{
            top: ['-10px', '120%'],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 5
          }}
        />
      </motion.div>
    );
  };
  
  // VoiceWaveAnimation - simula activación por voz
  const VoiceWaveAnimation = () => {
    return (
      <motion.div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full pointer-events-none opacity-0"
        animate={{
          opacity: [0, 0.05, 0],
          scale: [1, 2, 3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 2
        }}
      >
        <div className="w-full h-full rounded-full border-2 border-irrelevant-primary" 
          style={{ filter: 'blur(5px)' }}
        />
      </motion.div>
    );
  };

  // Notificaciones que aparecen alrededor del AI Concierge
  const NotificationBubbles = () => {
    const notifications = [
      { text: "Reserva confirmada", delay: 2, position: { top: '-20%', right: '10%' } },
      { text: "Check-in realizado", delay: 5, position: { top: '5%', left: '-25%' } },
      { text: "Tour reservado", delay: 8, position: { bottom: '10%', right: '-20%' } }
    ];

    return (
      <div className="absolute inset-0 pointer-events-none">
        {notifications.map((notif, i) => (
          <AnimatePresence key={i}>
            <motion.div
              className="absolute bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-irrelevant-primary/20 shadow-lg"
              style={notif.position}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ 
                opacity: [0, 1, 1, 0],
                y: [20, 0, 0, -20],
                scale: [0.8, 1, 1, 0.8]
              }}
              transition={{
                duration: 3,
                times: [0, 0.1, 0.9, 1],
                repeat: Infinity,
                repeatDelay: 15, 
                delay: notif.delay
              }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-xs font-medium text-white">{notif.text}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        ))}
      </div>
    );
  };

  // Efecto de código/datos fluyendo
  const CodeFlowEffect = () => {
    const codeLines = [
      "request.process(user_query)",
      "context = hotel_db.get_info()",
      "user_preferences.update()",
      "response = ai.generate(context)",
      "metrics.track(interaction_id)",
      "multi_lingual.translate(lang)",
      "cache.store(response, user_id)"
    ];
    
    return (
      <div className="absolute right-0 bottom-0 w-32 h-64 overflow-hidden opacity-30 pointer-events-none flex flex-col justify-end">
        {codeLines.map((line, i) => (
          <motion.div
            key={i}
            className="text-[8px] text-irrelevant-primary font-mono whitespace-nowrap"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              delay: i * 0.5
            }}
          >
            {line}
          </motion.div>
        ))}
      </div>
    );
  };
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video with enhanced effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-irrelevant-background/90 backdrop-blur-md z-10"></div>
        <HoloGridEffect />
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
            className="object-cover w-full h-full opacity-20"
          >
            <source src="https://storage.googleapis.com/cluvi/irrelevant/hotel-service-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
      
      {/* Animated background gradients with depth effect */}
      <div className="absolute inset-0 z-1 overflow-hidden">
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl"
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
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-3xl"
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
        <GradientOrb />
      </div>
      
      {/* Advanced interactive effects */}
      <ScannerEffect />
      <Particles />
      <VoiceWaveAnimation />
      <CodeFlowEffect />
      
      {/* Content */}
      <div className="relative z-20 px-4 sm:px-6 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        {/* Left column: Text content with enhanced interactions */}
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
                  "0 0 0 rgba(96, 69, 255, 0)",
                  "0 0 10px rgba(96, 69, 255, 0.5)",
                  "0 0 0 rgba(96, 69, 255, 0)"
                ]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              TU CONCIERGE DEBERÍA 
            </motion.span>
            <motion.span 
              className="block bg-gradient-to-r from-irrelevant-primary to-purple-400 text-transparent bg-clip-text relative"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                textShadow: [
                  "0 0 20px rgba(96, 69, 255, 0.3)",
                  "0 0 30px rgba(96, 69, 255, 0.5)",
                  "0 0 20px rgba(96, 69, 255, 0.3)"
                ]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              ESTAR DISPONIBLE 24/7
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl font-medium text-white mb-6 sm:mb-8"
            variants={itemVariants}
          >
            Automatiza la atención a tus huéspedes. Mejora su experiencia sin aumentar costos operativos. 
            <motion.span 
              className="font-bold text-irrelevant-primary inline-block ml-1"
              animate={{ 
                color: ['rgb(96, 69, 255)', 'rgb(136, 109, 255)', 'rgb(96, 69, 255)'],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Tu AI Concierge multilingüe responde en segundos.
            </motion.span>
          </motion.p>
          
          <motion.a 
            href="https://wa.me/1234567890?text=Quiero%20implementar%20el%20AI%20Concierge%20en%20mi%20hotel"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-irrelevant-primary hover:bg-irrelevant-primary/90 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 transform shadow-lg shadow-irrelevant-primary/30 text-sm md:text-base w-full sm:w-auto self-start overflow-hidden relative"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0px 5px 20px rgba(96, 69, 255, 0.5)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="inline-flex items-center justify-center font-bold relative z-10">
              QUIERO UN AI CONCIERGE PARA MI HOTEL
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
              className="absolute inset-0 bg-gradient-to-r from-purple-500 to-irrelevant-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </motion.a>
          
          <motion.div 
            className="mt-8 grid grid-cols-2 gap-4"
            variants={itemVariants}
          >
            {[
              {
                icon: (
                  <svg className="w-5 h-5 mr-2 text-irrelevant-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                text: "Disponible 24/7"
              },
              {
                icon: (
                  <svg className="w-5 h-5 mr-2 text-irrelevant-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5H21V19H3V5Z M3 12H21 M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                text: "Multilingüe"
              },
              {
                icon: (
                  <svg className="w-5 h-5 mr-2 text-irrelevant-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                text: "IA Avanzada"
              },
              {
                icon: (
                  <svg className="w-5 h-5 mr-2 text-irrelevant-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                text: "Implementación en 6 semanas"
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="flex items-center bg-irrelevant-background/70 backdrop-blur-sm border border-irrelevant-border py-3 px-4 rounded-lg group hover:bg-irrelevant-background/90 transition-all duration-300"
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: "0px 2px 15px rgba(96, 69, 255, 0.15)",
                  borderColor: "rgba(96, 69, 255, 0.5)"
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
                <span className="text-sm font-medium">{feature.text}</span>
                <motion.div
                  className="absolute inset-0 rounded-lg border border-irrelevant-primary/0 group-hover:border-irrelevant-primary/30"
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
        
        {/* Right column: Enhanced 3D Mr. Irrelevant with dynamic effects */}
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
            {/* Chat bubble with enhanced typing effect */}
            <motion.div 
              className="absolute -top-16 -right-8 bg-white/10 text-white backdrop-blur-md rounded-2xl rounded-br-none px-5 py-4 shadow-lg z-10 min-w-[280px] border border-white/20"
              initial={{ opacity: 0, y: -20, rotateY: -10 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                rotateY: [-5, 5, -5],
                boxShadow: [
                  "0 10px 25px -5px rgba(96, 69, 255, 0.2)",
                  "0 15px 30px -5px rgba(96, 69, 255, 0.4)",
                  "0 10px 25px -5px rgba(96, 69, 255, 0.2)"
                ]
              }}
              transition={{ 
                delay: 1.5, 
                duration: 0.5,
                rotateY: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                boxShadow: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <motion.div 
                className="absolute -top-1 -left-1 w-2 h-2 bg-blue-400 rounded-full"
                animate={{
                  opacity: [0.6, 1, 0.6],
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
              />
              <motion.div 
                className="absolute -top-1 -right-1 w-2 h-2 bg-purple-400 rounded-full"
                animate={{
                  opacity: [0.6, 1, 0.6],
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: 2,
                  delay: 0.5,
                  repeat: Infinity
                }}
              />
              <div className="font-medium">
                {typedText}
                <motion.span 
                  className="ml-0.5 inline-block w-2 h-5 bg-irrelevant-primary"
                  animate={{
                    opacity: [1, 0, 1],
                    height: [20, 15, 20]
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{ display: isTyping ? 'inline-block' : 'none' }}
                ></motion.span>
              </div>
              <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-4 h-4 bg-white/10 backdrop-blur-md border-r border-b border-white/20"></div>
            </motion.div>
            
            {/* Audio visualization */}
            <motion.div
              className="absolute top-0 -left-4 w-24 h-16 flex items-end justify-around"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1 rounded-full bg-gradient-to-t from-irrelevant-primary to-purple-400"
                  animate={{
                    height: [
                      5 + Math.random() * 10,
                      15 + Math.random() * 25,
                      5 + Math.random() * 10
                    ],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 1.5 + Math.random() * 1,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
            
            {/* Orbiting dots with enhanced parallax effect */}
            <OrbitingDots />
            
            {/* Notification bubbles that show hotel AI functionality */}
            <NotificationBubbles />
            
            {/* Glow effect behind Mr. Irrelevant */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-20 rounded-full blur-2xl"
              {...pulseAnimation}
              style={{
                filter: "blur(20px)",
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
              {/* Enhanced Mr. Irrelevant with 3D effects */}
              <motion.div
                className="relative z-0"
                {...floatingAnimation}
              >
                <img 
                  src="https://storage.googleapis.com/cluvi/concierge-AI.png" 
                  alt="Mr. Irrelevant AI Concierge" 
                  className="w-full h-auto max-h-[500px] object-contain drop-shadow-2xl"
                  style={{
                    filter: "drop-shadow(0 0 20px rgba(96, 69, 255, 0.3))"
                  }}
                />
                
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
                        repeatDelay: 5,
                        delay: 3
                      }}
                    >
                      <img 
                        src="https://storage.googleapis.com/cluvi/concierge-AI.png"
                        alt=""
                        className="w-full h-auto max-h-[500px] object-contain"
                        style={{ 
                          filter: "hue-rotate(90deg) brightness(1.5) contrast(1.5)",
                          transform: "translateX(10px)"
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              
              {/* Tech circles with information about AI capabilities */}
              <motion.div 
                className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center overflow-hidden backdrop-blur-sm"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.5, type: "spring" }}
                whileHover={{ 
                  scale: 1.1, 
                  boxShadow: "0 0 30px rgba(96, 69, 255, 0.5)"
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
                    background: "radial-gradient(circle at center, rgba(96, 69, 255, 0.3) 0%, transparent 70%)",
                  }}
                />
                <svg className="w-10 h-10 text-white relative z-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
              
              <motion.div 
                className="absolute -top-8 -right-12 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center overflow-hidden backdrop-blur-sm"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 2, duration: 0.5, type: "spring" }}
                whileHover={{ 
                  scale: 1.1, 
                  boxShadow: "0 0 30px rgba(149, 76, 233, 0.5)"
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
                    background: "radial-gradient(circle at center, rgba(149, 76, 233, 0.3) 0%, transparent 70%)",
                  }}
                />
                <svg className="w-8 h-8 text-white relative z-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.00012 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71547 4.21799 5.0918C4 5.51962 4 6.08009 4 7.2002V16.8002C4 17.9203 4 18.4796 4.21799 18.9074C4.40973 19.2837 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H16.8031C17.921 20 18.48 20 18.9074 19.7822C19.2837 19.5905 19.5905 19.2837 19.7822 18.9074C20 18.48 20 17.921 20 16.8031V15M16 5L10 11V14H13L19 8M16 5L19 2L22 5L19 8M16 5L19 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
              
              {/* New AI functionality badge */}
              <motion.div
                className="absolute -bottom-4 right-0 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 2.3, duration: 0.5, type: "spring" }}
              >
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>NLP Avanzado</span>
              </motion.div>
            </motion.div>
            
            {/* Enhanced glowing circle underneath */}
            <motion.div 
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-8 opacity-60 blur-xl rounded-full"
              style={{
                background: "radial-gradient(ellipse, rgba(96, 69, 255, 0.8) 0%, rgba(96, 69, 255, 0) 70%)"
              }}
              animate={{
                width: ['10rem', '12rem', '10rem'],
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
      
      {/* Enhanced animated wave divider at bottom with parallax effect */}
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
              <stop stopColor="#6045FF" />
              <stop offset="1" stopColor="#6045FF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>
      
      {/* Enhanced scroll indicator with interactive animations */}
      <motion.div 
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: scrolled ? 0 : 1, y: scrolled ? -20 : 0 }}
        transition={{ delay: 2.5, duration: 0.5 }}
      >
        <motion.span 
          className="text-irrelevant-textSecondary text-xs mb-2 sm:mb-3 font-medium"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Descubre más
        </motion.span>
        <motion.div 
          className="w-8 h-8 rounded-full flex items-center justify-center border border-irrelevant-primary/30 bg-irrelevant-primary/10 backdrop-blur-sm"
          animate={{ 
            y: [0, 5, 0],
            boxShadow: [
              "0 0 0 rgba(96, 69, 255, 0)",
              "0 0 10px rgba(96, 69, 255, 0.5)",
              "0 0 0 rgba(96, 69, 255, 0)"
            ]
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
          whileHover={{ scale: 1.1 }}
        >
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 text-irrelevant-primary" 
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

export default EnhancedHeroSection;