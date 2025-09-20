import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, Award, Calendar, Building } from 'lucide-react';
import { useInView } from 'framer-motion';
import { certifications as originalCertifications } from '../data/certifications';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  link: string;
  type: 'url' | 'image';
  url?: string;
}

// Transform the original certifications to match the new format
const certifications: Certification[] = originalCertifications.map(cert => ({
  title: cert.title,
  issuer: cert.organization, // issuer is used in this component
  date: cert.issueDate,
  description: cert.description || '',
  image: cert.image || '',
  link: cert.url || cert.image || '#',
  type: cert.type,
  url: cert.url,
}));

const Certifications: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certification | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Animation for right-to-left slide-in
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: 100 }, // Slide in from right
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const handleCertificateClick = (cert: Certification) => {
    setSelectedCertificate(cert);
  };

  const closeCertificateModal = () => {
    setSelectedCertificate(null);
  };

  const handleDownload = (cert: Certification) => {
    if (cert.type === 'url' && cert.url) {
      window.open(cert.url, '_blank');
    } else if (cert.type === 'image' && cert.image) {
      setSelectedCertificate(cert);
    }
  };

  // Auto-scroll effect for certifications
  useEffect(() => {
    if (!inView || !scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    let scrollAmount = 0;
    const scrollSpeed = 0.3; // Slightly slower than blog for better viewing
    const maxScroll = container.scrollWidth - container.clientWidth;

    const autoScroll = () => {
      if (scrollAmount < maxScroll) {
        scrollAmount += scrollSpeed;
        container.scrollLeft = scrollAmount;
        requestAnimationFrame(autoScroll);
      } else {
        // Reset to beginning for continuous loop
        setTimeout(() => {
          scrollAmount = 0;
          container.scrollLeft = 0;
          requestAnimationFrame(autoScroll);
        }, 3000); // Longer pause for certifications
      }
    };

    const timeoutId = setTimeout(() => {
      if (inView) {
        requestAnimationFrame(autoScroll);
      }
    }, 1500); // Longer delay for certifications

    return () => {
      clearTimeout(timeoutId);
    };
  }, [inView]);

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
          <div className="flex items-center justify-center mb-4">
            <Award className="w-8 h-8 text-primary-500 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              All Certifications
            </h2>
          </div>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Complete collection of my professional certifications and achievements.
          </p>
        </motion.div>

        {/* Removed grid/list view toggle */}

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="relative"
        >
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-4 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent"
            style={{ 
              scrollbarWidth: 'thin', 
              scrollbarColor: '#a0aec0 #edf2f7',
              scrollBehavior: 'smooth'
            }}
          >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-soft hover:shadow-soft-lg transition-all duration-300 cursor-pointer p-6 min-w-[320px] max-w-xs flex-shrink-0"
              onClick={() => handleCertificateClick(cert)}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col h-full justify-between">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {cert.title}
                </h3>
                <div className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                  {cert.issuer}
                </div>
                {cert.description && (
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {cert.description}
                  </p>
                )}
                <div className="mt-auto flex items-center">
                  <button
                    onClick={e => {
                      e.stopPropagation();
                      handleDownload(cert);
                    }}
                    className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
                    aria-label={cert.type === 'url' ? 'View Certificate' : 'View Image'}
                  >
                    {cert.type === 'url' ? (
                      <>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Certificate
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4 mr-2" />
                        View Image
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
          </div>
          
          {/* Fade effects on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-50 dark:from-gray-800 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-50 dark:from-gray-800 to-transparent pointer-events-none"></div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={closeCertificateModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-2xl w-full bg-white dark:bg-gray-900 rounded-xl p-6 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeCertificateModal}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
              {/* Modal content for both types */}
              <div className="pr-12">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {selectedCertificate.title}
                </h3>
                <div className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                  {selectedCertificate.issuer}
                </div>
                {selectedCertificate.description && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Description</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {selectedCertificate.description}
                    </p>
                  </div>
                )}
                {selectedCertificate.type === 'image' && selectedCertificate.image && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Certificate Image</h4>
                    <img
                      src={selectedCertificate.image}
                      alt={selectedCertificate.title}
                      className="w-full rounded-lg border border-gray-200 dark:border-gray-700"
                    />
                  </div>
                )}
                {selectedCertificate.type === 'url' && selectedCertificate.url && (
                  <button
                    onClick={() => window.open(selectedCertificate.url, '_blank')}
                    className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Certificate
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;