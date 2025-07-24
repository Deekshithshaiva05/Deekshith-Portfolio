import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ArrowRight, ExternalLink } from 'lucide-react';
import { certifications } from '../data/certifications';

const CertificationsPreview: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Get the 3 most recent certifications
  const recentCertifications = certifications.slice(0, 3);

  const scrollToCertifications = () => {
    const certificationsSection = document.querySelector('#certifications');
    if (certificationsSection) {
      certificationsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <Award className="w-8 h-8 text-primary-500 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Recent Certifications
            </h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Latest professional certifications and achievements validating my expertise.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          {recentCertifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300"
            >
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
                {(cert.url || cert.image) && (
                  <a
                    href={cert.url || cert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                    aria-label="View Certificate"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button
            onClick={scrollToCertifications}
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View All Certificates
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsPreview;