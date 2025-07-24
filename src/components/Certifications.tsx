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
  const [selectedCertificate, setSelectedCertificate] = useState<Certification | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const handleCertificateClick = (cert: Certification) => {
    setSelectedCertificate(cert);
  };

  const closeCertificateModal = () => {
    setSelectedCertificate(null);
  };

  const handleDownload = (cert: Certification) => {
    if (cert.url) {
      window.open(cert.url, '_blank');
    } else if (cert.image) {
      const link = document.createElement('a');
      link.href = cert.image;
      link.download = `${cert.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_certificate`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
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

        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white dark:bg-gray-900 p-1 rounded-lg shadow-sm">
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition ${
                viewMode === 'list'
                  ? 'bg-primary-500 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              List View
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition ${
                viewMode === 'grid'
                  ? 'bg-primary-500 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              Grid View
            </button>
          </div>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className={viewMode === 'list' ? 'space-y-6' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`bg-white dark:bg-gray-900 rounded-xl shadow-soft hover:shadow-soft-lg transition-all duration-300 cursor-pointer ${
                viewMode === 'list' ? 'p-6' : 'p-4'
              }`}
              onClick={() => handleCertificateClick(cert)}
              whileHover={{ scale: 1.02 }}
            >
              {viewMode === 'list' ? (
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {cert.title}
                    </h3>
                    <div className="flex items-center text-primary-600 dark:text-primary-400 mb-2">
                      <Building className="w-4 h-4 mr-2" />
                      <span className="font-medium">{cert.organization}</span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{cert.issueDate}</span>
                    </div>
                    {cert.description && (
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                        {cert.description}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs px-3 py-1 rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900/50 dark:text-primary-300">
                      {cert.type === 'url' ? 'Online' : 'Certificate'}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownload(cert);
                      }}
                      className="p-2 text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                      aria-label="Download/View Certificate"
                    >
                      {cert.type === 'url' ? <ExternalLink className="w-5 h-5" /> : <Download className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-1">
                    {cert.organization}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                    {cert.issueDate}
                  </p>
                  {cert.description && (
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {cert.description}
                    </p>
                  )}
                  <div className="flex justify-between items-center">
                    <span className="text-xs px-2 py-1 rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900/50 dark:text-primary-300">
                      {cert.type === 'url' ? 'Online' : 'Certificate'}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownload(cert);
                      }}
                      className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                      aria-label="Download/View Certificate"
                    >
                      {cert.type === 'url' ? <ExternalLink className="w-4 h-4" /> : <Download className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
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
              
              <div className="pr-12">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {selectedCertificate.title}
                </h3>
                
                <div className="flex items-center text-primary-600 dark:text-primary-400 mb-2">
                  <Building className="w-5 h-5 mr-2" />
                  <span className="font-medium">{selectedCertificate.organization}</span>
                </div>
                
                <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{selectedCertificate.issueDate}</span>
                </div>
                
                {selectedCertificate.description && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Description</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {selectedCertificate.description}
                    </p>
                  </div>
                )}
                
                {selectedCertificate.image && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Certificate Preview</h4>
                    <img
                      src={selectedCertificate.image}
                      alt={selectedCertificate.title}
                      className="w-full rounded-lg border border-gray-200 dark:border-gray-700"
                    />
                  </div>
                )}
                
                <div className="flex gap-4">
                  <button
                    onClick={() => handleDownload(selectedCertificate)}
                    className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    {selectedCertificate.type === 'url' ? (
                      <>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Certificate
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;