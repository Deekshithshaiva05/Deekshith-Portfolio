import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  onLoadingComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate loading time and wait for page resources
    const handleLoad = () => {
      // Add a minimum loading time of 2 seconds to show the animation
      const minLoadTime = 2000;
      const startTime = Date.now();
      
      const finishLoading = () => {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minLoadTime - elapsedTime);
        
        setTimeout(() => {
          setFadeOut(true);
          // Wait for fade out animation to complete before hiding loader
          setTimeout(() => {
            setIsLoading(false);
            onLoadingComplete();
          }, 800); // Match the fade out duration
        }, remainingTime);
      };

      // Check if page is already loaded
      if (document.readyState === 'complete') {
        finishLoading();
      } else {
        // Wait for all resources to load
        window.addEventListener('load', finishLoading);
        return () => window.removeEventListener('load', finishLoading);
      }
    };

    handleLoad();
  }, [onLoadingComplete]);

  if (!isLoading) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: fadeOut ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 z-[9999] flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, #000000 0%, #111111 50%, #000000 100%)',
          backdropFilter: 'blur(10px)'
        }}
      >
        {/* 3D Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-green-400/20 rounded-full"
              style={{
                width: Math.random() * 80 + 20,
                height: Math.random() * 80 + 20,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: 'translateZ(0)',
              }}
              animate={{
                y: [0, Math.random() * 200 - 100],
                x: [0, Math.random() * 200 - 100],
                z: [0, Math.random() * 100 - 50],
                opacity: [0.1, 0.4, 0.1],
                scale: [1, 1.5, 1],
                rotateX: [0, 360],
                rotateY: [0, 360],
              }}
              transition={{
                duration: Math.random() * 15 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* 3D Grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: 'perspective(1000px) rotateX(60deg)',
          }}
        />

        {/* 3D Logo Animation Container */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, rotateY: -180 }}
          animate={{ 
            scale: 1, 
            opacity: 1, 
            rotateY: 0,
            rotateX: [0, 5, -5, 0],
            rotateZ: [0, 2, -2, 0]
          }}
          transition={{ 
            duration: 1.2, 
            ease: "easeOut",
            rotateX: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            },
            rotateZ: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="relative z-10 flex flex-col items-center"
          style={{
            transformStyle: 'preserve-3d',
            perspective: '1000px'
          }}
        >
          {/* 3D Logo Animation */}
          <div className="relative mb-8" style={{ transformStyle: 'preserve-3d' }}>
            <motion.img
              src="/images/Pi7_GIF_CMP.gif"
              alt="Deekshith Logo Animation"
              className="w-80 h-80 object-contain"
              style={{
                filter: 'drop-shadow(0 0 40px rgba(34, 197, 94, 0.8)) drop-shadow(0 0 80px rgba(34, 197, 94, 0.4))',
                transform: 'translateZ(50px)',
              }}
              animate={{
                rotateY: [0, 360],
                scale: [1, 1.05, 1],
              }}
              transition={{
                rotateY: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                },
                scale: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />
            
            {/* Multiple 3D glowing rings */}
            {[1, 2, 3].map((ring, index) => (
              <motion.div
                key={ring}
                className="absolute inset-0 rounded-full border-2 border-green-400/20"
                style={{
                  transform: `translateZ(${index * 20}px)`,
                  width: `${100 + index * 20}%`,
                  height: `${100 + index * 20}%`,
                  left: `${-index * 10}%`,
                  top: `${-index * 10}%`,
                }}
                animate={{
                  scale: [1, 1.2 + index * 0.1, 1],
                  opacity: [0.2, 0.6 - index * 0.1, 0.2],
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: 3 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                  rotateY: {
                    duration: 10 + index * 2,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
              />
            ))}
          </div>

          {/* 3D Loading Text */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotateX: -90 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              rotateX: 0,
              rotateY: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 0.8, 
              delay: 0.3,
              rotateY: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="text-center"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.h2 
              className="text-2xl font-bold text-white mb-4"
              style={{
                textShadow: '0 0 20px rgba(34, 197, 94, 0.8), 0 0 40px rgba(34, 197, 94, 0.4)',
                transform: 'translateZ(30px)'
              }}
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Welcome to Deekshith's Portfolio
            </motion.h2>
            
            {/* 3D Loading dots animation */}
            <div className="flex items-center justify-center space-x-2">
              <motion.span 
                className="text-green-400 text-lg"
                style={{
                  textShadow: '0 0 10px rgba(34, 197, 94, 0.8)',
                  transform: 'translateZ(20px)'
                }}
                animate={{
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Loading
              </motion.span>
              <div className="flex space-x-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-green-400 rounded-full"
                    style={{
                      boxShadow: '0 0 10px rgba(34, 197, 94, 0.8)',
                      transform: 'translateZ(20px)'
                    }}
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.5, 1, 0.5],
                      rotateY: [0, 180, 360],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* 3D Progress bar */}
          <motion.div
            initial={{ width: 0, rotateX: -45 }}
            animate={{ 
              width: "100%", 
              rotateX: 0,
              rotateY: [0, 2, -2, 0]
            }}
            transition={{ 
              duration: 2, 
              ease: "easeInOut",
              rotateY: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="mt-8 h-2 bg-gray-800 rounded-full relative overflow-hidden"
            style={{ 
              width: "200px",
              transformStyle: 'preserve-3d',
              boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)'
            }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-full relative"
              animate={{
                opacity: [0.7, 1, 0.7],
                boxShadow: [
                  '0 0 10px rgba(34, 197, 94, 0.8)',
                  '0 0 20px rgba(34, 197, 94, 1)',
                  '0 0 10px rgba(34, 197, 94, 0.8)'
                ],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                transform: 'translateZ(10px)',
                background: 'linear-gradient(45deg, #22c55e, #16a34a, #15803d)',
              }}
            />
            {/* 3D shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>

      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;