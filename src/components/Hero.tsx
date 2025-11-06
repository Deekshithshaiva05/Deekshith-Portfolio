import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, FileDown } from 'lucide-react';

const Hero: React.FC = () => {
  const roles = [
    "AI/ML Engineer",
    "Python Developer",
    "Frontend Developer",
    "Data Scientist"
  ];

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    const resumeUrl = '/Resume/Deekshith-Resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Deekshith Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <motion.div
          className="absolute top-0 -left-4 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-0 right-4 w-72 h-72 bg-sky-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-8 left-20 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, -50, 0],
            y: [0, -50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-block px-4 py-2 mb-6 rounded-full bg-primary-500/10 backdrop-blur-sm border border-primary-500/20"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="text-primary-300 font-medium">Welcome to my Portfolio</span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary-400 to-primary-600 text-transparent bg-clip-text">
                Deekshith N
              </span>
              <div className="text-2xl md:text-3xl lg:text-4xl mt-4 h-[1.5em] overflow-hidden">
                <span className="text-gray-300">I'm an&nbsp;</span>
                {roles.map((role, index) => (
                  <motion.span
                    key={role}
                    className="absolute text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-primary-500"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{
                      opacity: [0, 1, 1, 0],
                      y: [50, 0, 0, -50],
                    }}
                    transition={{
                      times: [0, 0.1, 0.9, 1],
                      duration: 3,
                      delay: index * 3,
                      repeat: Infinity,
                      repeatDelay: (roles.length - 1) * 3,
                      ease: "easeInOut"
                    }}
                  >
                    {role}
                  </motion.span>
                ))}
              </div>
            </motion.h1>

            <motion.button
              onClick={handleResumeDownload}
              className="group flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <FileDown className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download Resume
            </motion.button>
          </motion.div>

          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-primary-500/20 rounded-2xl blur-xl"></div>
              <img 
                src="/images/Photo.jpg" 
                alt="Profile"
                className="relative w-96 h-96 object-cover rounded-2xl border-2 border-primary-500/30 shadow-xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <motion.button 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer text-white/80 hover:text-white transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        onClick={scrollToAbout}
      >
        <ChevronDown className="w-10 h-10" />
      </motion.button>
    </section>
  );
};

export default Hero;