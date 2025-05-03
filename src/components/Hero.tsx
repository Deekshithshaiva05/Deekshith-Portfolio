import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Bookmark, Code, Cpu, Lightbulb } from 'lucide-react';

const Hero: React.FC = () => {
  const roles = [
    "Python Developer",
    "AI/ML Engineer", 
    "Frontend Developer",
    "Data Scientist"
  ];

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-gray-800/90"
      />
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <img 
          src="images/Background.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="inline-block px-3 py-1 mb-4 rounded-full bg-primary-100/10 text-primary-300 text-sm font-medium backdrop-blur-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Welcome to my Portfolio
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Hi, I'm <span className="text-primary-400">Deekshith N</span>
              <div className="text-xl md:text-2xl lg:text-3xl mt-2 relative h-[1.5em] overflow-hidden">
                <span className="text-gray-300">I'm a&nbsp;&nbsp;</span>
                {roles.map((role, index) => (
                  <motion.span
                    key={role}
                    className="absolute text-gray-100"
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
            <motion.p 
              className="text-sm md:text-base text-gray-300 mb-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.a 
                href="#projects"
                className="px-6 py-3 bg-primary-600 text-white rounded-md font-medium hover:bg-primary-700 transition-colors dark:bg-primary-700 dark:hover:bg-primary-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              <motion.a 
                href="#contact"
                className="px-6 py-3 border border-gray-300 rounded-md font-medium text-gray-100 hover:bg-gray-100/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side - Image */}
  {/* Right side - Image */}
<motion.div 
  className="md:w-1/2 flex justify-center"
  initial={{ opacity: 0, x: 100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>
  <img 
    src="/images/Photo.jpg" 
    alt="Profile"
    className="w-64 h-64 object-cover border-4 border-primary-400 shadow-lg rounded-2xl"
  />
</motion.div>

        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        onClick={scrollToAbout}
      >
        <ChevronDown className="w-8 h-8 text-gray-300" />
      </motion.div>
    </section>
  );
};

export default Hero;