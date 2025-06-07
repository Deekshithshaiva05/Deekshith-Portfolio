import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useInView } from 'framer-motion';
import { certifications as originalCertifications } from '../data/certifications';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  link: string;
}

// Transform the original certifications to match the new format
const certifications: Certification[] = originalCertifications.map(cert => ({
  title: cert.title,
  issuer: cert.organization,
  date: cert.issueDate,
  description: cert.description || '',
  image: cert.image || '',
  link: cert.url || cert.image || '#'
}));

const Certifications: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate certifications for seamless loop
  const duplicatedCertifications = [...certifications, ...certifications];

  useEffect(() => {
    if (!carouselRef.current) return;

    const carousel = carouselRef.current;
    let animationFrame: number;
    let startTime: number | null = null;
    const scrollSpeed = 0.15; // pixels per millisecond (slowed down from 0.5)

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      if (!isPaused) {
        carousel.scrollLeft = (elapsed * scrollSpeed) % (carousel.scrollWidth / 2);
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [isPaused]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.4,
        duration: 1.2
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 1.2,
        ease: "easeOut"
      } 
    },
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional certifications and achievements that validate my expertise in programming, AI, and data science.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="relative"
        >
          <div
            ref={carouselRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex overflow-x-hidden gap-8 pb-8"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {duplicatedCertifications.map((cert, index) => (
              <motion.div
                key={`${cert.title}-${index}`}
                variants={item}
                className="flex-none w-[350px]"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.5 }
                }}
              >
                <div 
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-soft hover:shadow-soft-lg transition-all duration-500 h-full"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 font-medium mb-1">
                    {cert.issuer}
                  </p>
                  {cert.description && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {cert.description}
                    </p>
                  )}
                  <p className="text-xs text-gray-400 dark:text-gray-500 mb-3">
                    {cert.date}
                  </p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    View Certificate
                    <ChevronRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="relative max-w-4xl w-full bg-white dark:bg-gray-900 rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              <img
                src={selectedImage}
                alt="Certificate"
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;