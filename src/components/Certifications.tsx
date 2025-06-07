import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Calendar, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { certifications } from '../data/certifications';

const Certifications: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollStep = 400; // Adjust this value based on your card width + gap

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -scrollStep,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollStep,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    let scrollInterval: number;
    
    if (!isHovered && scrollContainerRef.current) {
      scrollInterval = window.setInterval(() => {
        if (scrollContainerRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
          if (scrollLeft + clientWidth >= scrollWidth) {
            scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            scrollContainerRef.current.scrollBy({ left: 1, behavior: 'smooth' });
          }
        }
      }, 30);
    }

    return () => {
      if (scrollInterval) {
        clearInterval(scrollInterval);
      }
    };
  }, [isHovered]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional certifications and achievements that demonstrate my expertise and continuous learning.
          </p>
        </motion.div>

        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-900 p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>

          <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="relative"
          >
            <div
              ref={scrollContainerRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-8 pb-8 px-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="flex-none w-[350px] snap-center"
                >
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-soft hover:shadow-soft-lg transition-shadow duration-300 h-full">
                    <div className="flex items-start mb-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                          <Award className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                          {cert.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {cert.organization}
                        </p>
                      </div>
                    </div>

                    {cert.description && (
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        {cert.description}
                      </p>
                    )}

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {cert.issueDate}
                      </div>
                      {cert.type === 'url' && cert.url && (
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-primary-600 dark:text-primary-400 text-sm hover:underline"
                        >
                          View Certificate
                          <ExternalLink className="w-4 h-4 ml-1" />
                        </a>
                      )}
                      {cert.type === 'image' && cert.image && (
                        <button
                          onClick={() => setSelectedImage(cert.image || null)}
                          className="flex items-center text-primary-600 dark:text-primary-400 text-sm hover:underline"
                        >
                          View Certificate
                          <ExternalLink className="w-4 h-4 ml-1" />
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-900 p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-4xl w-full bg-white dark:bg-gray-900 rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedImage}
                alt="Certificate"
                className="w-full h-auto"
                style={{ maxHeight: '80vh' }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;