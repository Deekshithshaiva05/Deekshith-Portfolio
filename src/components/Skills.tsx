import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/skills';

type SkillCategory = 'all' | 'programming' | 'frameworks' | 'tools' | 'soft' | 'other';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'programming', label: 'Programming' },
    { id: 'frameworks', label: 'Frameworks' },
    { id: 'tools', label: 'Tools' },
    { id: 'soft', label: 'Soft Skills' },
    { id: 'other', label: 'Other' }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My technical expertise and professional competencies.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as SkillCategory)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 shadow-soft hover:shadow-soft-lg transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                    {skill.name}
                  </h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900/50 dark:text-primary-300">
                    {skill.category}
                  </span>
                </div>
                <div className="mt-auto">
                  <div className="h-1.5 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level * 10}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-primary-400 to-primary-600"
                    ></motion.div>
                  </div>
                  <div className="mt-1 text-right text-xs text-gray-500 dark:text-gray-400">
                    {skill.level}/10
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;