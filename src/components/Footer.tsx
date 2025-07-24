import React, { useEffect, useState, useRef } from 'react';
import { ArrowUp, Github, Linkedin, Mail, Facebook } from 'lucide-react';
import { socialLinks } from '../data/social';
import { certifications } from '../data/certifications';
import { projects } from '../data/projects';
import { skills } from '../data/skills';
import { useInView } from 'react-intersection-observer';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const currentYear = new Date().getFullYear();

  // Add icon and color mapping for each platform
  const iconMap: Record<string, JSX.Element> = {
    Github: <Github className="w-6 h-6" />,
    Linkedin: <Linkedin className="w-6 h-6" />,
    Mail: <Mail className="w-6 h-6" />,
    Facebook: <Facebook className="w-6 h-6" />,
    // Add SVGs or fallback for custom icons below
    Unstop: <span className="font-bold text-lg">U</span>,
    LeetCode: <span className="font-bold text-lg">LC</span>,
    GoogleDev: <span className="font-bold text-lg">G</span>,
    HackerRank: <span className="font-bold text-lg">H</span>,
    CodeChef: <span className="font-bold text-lg">CC</span>,
    Medium: <span className="font-bold text-lg">M</span>,
    StackOverflow: <span className="font-bold text-lg">S</span>,
  };
  const colorMap: Record<string, string> = {
    Github: 'bg-[#333]',
    Linkedin: 'bg-[#0077b5]',
    Mail: 'bg-[#ea4335]',
    Facebook: 'bg-[#3b5998]',
    Unstop: 'bg-[#6c47ff]',
    LeetCode: 'bg-[#ffa116]',
    GoogleDev: 'bg-[#4285f4]',
    HackerRank: 'bg-[#2ec866]',
    CodeChef: 'bg-[#5b4638]',
    Medium: 'bg-[#000]',
    StackOverflow: 'bg-[#f48024]',
  };

  // Animated counter hook
  function useCountUp(target: number, duration = 60000) {
    const [count, setCount] = useState(0);
    const ref = useRef(false);
    useEffect(() => {
      if (!ref.current && target > 0) {
        ref.current = true;
        let start = 0;
        const increment = Math.ceil(target / (duration / 16));
        const step = () => {
          start += increment;
          if (start < target) {
            setCount(start);
            requestAnimationFrame(step);
          } else {
            setCount(target);
          }
        };
        step();
      }
    }, [target, duration]);
    return count;
  }

  // For in-view animation
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const certCount = useCountUp(statsInView ? certifications.length : 0);
  const projCount = useCountUp(statsInView ? projects.length : 0);
  const skillCount = useCountUp(statsInView ? skills.length : 0);

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          {/* Left: Name, description, socials */}
          <div className="mb-6 md:mb-0 md:w-2/3">
            <h3 className="text-2xl font-bold text-primary-400 mb-2">Deekshith N</h3>
            <p className="text-gray-400 max-w-md mb-4">
              Engineering student passionate about creating innovative solutions to real-world problems.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.platform}
                  className={`rounded-full w-12 h-12 flex items-center justify-center text-white shadow transition-transform hover:scale-110 ${colorMap[link.icon] || 'bg-gray-500'}`}
                >
                  {iconMap[link.icon] || <span className="font-bold text-lg">?</span>}
                </a>
              ))}
            </div>
          </div>
          {/* Right: Back to top and stats */}
          <div className="flex flex-col items-center md:items-end w-full md:w-auto">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-full text-sm text-gray-300 hover:text-white transition-colors mb-4 md:mb-0"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to top
            </button>
            {/* Animated stats section */}
            <div ref={statsRef} className="flex flex-wrap justify-center gap-8 my-8 md:my-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400">{certCount}</div>
                <div className="text-gray-300 text-sm mt-1">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400">{projCount}</div>
                <div className="text-gray-300 text-sm mt-1">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400">{skillCount}</div>
                <div className="text-gray-300 text-sm mt-1">Skills</div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Deekshith. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;