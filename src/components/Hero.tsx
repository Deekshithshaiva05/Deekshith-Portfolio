import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, FileDown, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const roles = [
    "AI/ML Engineer",
    "Python Developer",
    "Frontend Developer",
    "Data Scientist"
  ];

  const [isDownloading, setIsDownloading] = useState(false);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = async () => {
    setIsDownloading(true);
    
    try {
      const resumeUrl = '/Resume/DEEKSHITH_N_2026_Resume.pdf';
      
      // Method 1: Direct download approach
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = 'Deekshith_N_Resume.pdf'; // Simplified filename without spaces
      link.target = '_blank'; // Open in new tab as fallback
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Fallback: If download doesn't work, open in new tab after a delay
      setTimeout(() => {
        // Check if download started by testing if the link was clicked
        // If not, open in new tab
        const tempLink = document.createElement('a');
        tempLink.href = resumeUrl;
        tempLink.target = '_blank';
        tempLink.rel = 'noopener noreferrer';
        tempLink.click();
      }, 1000);

    } catch (error) {
      console.error('Download error:', error);
      
      // Final fallback - direct window open
      window.open('/Resume/DEEKSHITH_N_2026_Resume.pdf', '_blank', 'noopener,noreferrer');
    } finally {
      setIsDownloading(false);
    }
  };

  // Alternative robust download function using fetch (commented out for reference)
  /*
  const handleResumeDownload = async () => {
    setIsDownloading(true);
    
    try {
      const response = await fetch('/Resume/DEEKSHITH_N_2026_Resume.pdf');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'Deekshith_N_Resume.pdf';
      link.style.display = 'none';
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up the blob URL
      window.URL.revokeObjectURL(blobUrl);
      
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback to direct download
      const fallbackLink = document.createElement('a');
      fallbackLink.href = '/Resume/DEEKSHITH_N_2026_Resume.pdf';
      fallbackLink.download = 'Deekshith_N_Resume.pdf';
      fallbackLink.target = '_blank';
      document.body.appendChild(fallbackLink);
      fallbackLink.click();
      document.body.removeChild(fallbackLink);
    } finally {
      setIsDownloading(false);
    }
  };
  */

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
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

            <motion.p 
              className="text-xl text-gray-300 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Passionate about creating intelligent solutions and beautiful interfaces. 
              I bridge the gap between AI algorithms and user experience.
            </motion.p>

            <motion.button
              onClick={handleResumeDownload}
              disabled={isDownloading}
              className="group flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white rounded-xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-primary-500/25"
              whileHover={isDownloading ? {} : { scale: 1.05 }}
              whileTap={isDownloading ? {} : { scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {isDownloading ? (
                <>
                  <Download className="w-5 h-5 mr-3 animate-pulse" />
                  Downloading...
                </>
              ) : (
                <>
                  <FileDown className="w-5 h-5 mr-3 group-hover:animate-bounce transition-transform" />
                  Download Resume
                </>
              )}
            </motion.button>
          </motion.div>

          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary-500/20 rounded-2xl blur-xl group-hover:bg-primary-500/30 transition-all duration-300"></div>
              
              {/* Profile image */}
              <div className="relative overflow-hidden rounded-2xl border-2 border-primary-500/30 shadow-2xl">
                <img 
                  src="/images/Photo.jpg" 
                  alt="Deekshith N - AI/ML Engineer & Developer"
                  className="w-80 h-80 md:w-96 md:h-96 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMzc0MTUxIi8+CjxwYXRoIGQ9Ik0yMDAgMTMwQzE2NS44NjMgMTMwIDEzOCAxNTcuODYzIDEzOCAxOTJDMTM4IDIyNi4xMzcgMTY1Ljg2MyAyNTQgMjAwIDI1NEMyMzQuMTM3IDI1NCAyNjIgMjI2LjEzNyAyNjIgMTkyQzI2MiAxNTcuODYzIDIzNC4xMzcgMTMwIDIwMCAxMzBaTTI2MCAzMDBIMTQwQzEyNiAxMzAgMjc0IDEzMCAyNjAgMzAwWiIgZmlsbD0iIzlDQzZGRiIvPgo8L3N2Zz4K';
                  }}
                />
                
                {/* Overlay effect on hover */}
                <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/10 transition-all duration-300"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.button 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer text-white/80 hover:text-white transition-colors z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        onClick={scrollToAbout}
        aria-label="Scroll to about section"
      >
        <ChevronDown className="w-10 h-10" />
      </motion.button>
    </section>
  );
};

export default Hero;