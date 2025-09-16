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
          background: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
          backdropFilter: 'blur(10px)'
        }}
      >
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-green-400/10 rounded-full"
              style={{
                width: Math.random() * 100 + 20,
                height: Math.random() * 100 + 20,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Logo Animation Container */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center"
        >
          {/* Logo Animation */}
          <div className="relative mb-8">
            <img
              src="/images/Pi7_GIF_CMP.gif"
              alt="Deekshith Logo Animation"
              className="w-80 h-80 object-contain"
              style={{
                filter: 'drop-shadow(0 0 30px rgba(34, 197, 94, 0.5))',
              }}
            />
            
            {/* Glowing ring effect around logo */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-green-400/30"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Loading Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Welcome to Deekshith's Portfolio
            </h2>
            
            {/* Loading dots animation */}
            <div className="flex items-center justify-center space-x-2">
              <span className="text-green-400 text-lg">Loading</span>
              <div className="flex space-x-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-green-400 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="mt-8 h-1 bg-green-400 rounded-full"
            style={{ width: "200px" }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;