import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Wrench, Brain, Zap } from 'lucide-react';
import { skills } from '../data/skills';

type SkillCategory = 'all' | 'programming' | 'frameworks' | 'tools' | 'soft' | 'other';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
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
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 12
      } 
    }
  };

  const floatingItem = {
    hidden: { opacity: 0, y: 50, rotate: -10 },
    show: { 
      opacity: 1, 
      y: 0, 
      rotate: 0,
      transition: { 
        duration: 0.8,
        type: "spring",
        stiffness: 80,
        damping: 10
      } 
    }
  };

  const categories = [
    { id: 'all', label: 'All Skills', icon: Zap },
    { id: 'programming', label: 'Programming', icon: Code },
    { id: 'frameworks', label: 'Frameworks', icon: Database },
    { id: 'tools', label: 'Tools', icon: Wrench },
    { id: 'other', label: 'AI/ML', icon: Brain }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4, #3b82f6)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Technical Skills
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Technologies and tools I work with to build amazing solutions
          </motion.p>
        </motion.div>

        {/* Enhanced Category Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id as SkillCategory)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-primary-500 to-purple-500 text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md hover:shadow-lg'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent className="w-4 h-4" />
                {category.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills Grid with Enhanced Animations */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-7xl mx-auto"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={index}
              variants={index % 3 === 0 ? floatingItem : item}
              className="group relative"
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 dark:border-gray-700"
                whileHover={{ 
                  y: -10, 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: `0 20px 40px rgba(0,0,0,0.1)`
                }}
                style={{
                  background: hoveredSkill === skill.name 
                    ? `linear-gradient(135deg, ${skill.color}10, ${skill.color}05)`
                    : undefined
                }}
              >
                {/* Skill Logo */}
                <div className="flex justify-center mb-4">
                  <motion.div
                    className="w-12 h-12 flex items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${skill.color}15` }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360,
                      backgroundColor: `${skill.color}25`
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-8 h-8 object-contain"
                      style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
                    />
                  </motion.div>
                </div>

                {/* Skill Name */}
                <motion.h3 
                  className="font-bold text-gray-900 dark:text-white text-center text-sm mb-3"
                  animate={{
                    color: hoveredSkill === skill.name ? skill.color : undefined
                  }}
                >
                  {skill.name}
                </motion.h3>

                {/* Skill Level Bar */}
                <div className="space-y-2">
                  <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level * 10}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}CC)`
                      }}
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {skill.level}/10
                    </span>
                    <motion.span 
                      className="text-xs font-semibold"
                      style={{ color: skill.color }}
                      animate={{
                        scale: hoveredSkill === skill.name ? 1.1 : 1
                      }}
                    >
                      {skill.level >= 8 ? 'Expert' : skill.level >= 6 ? 'Advanced' : skill.level >= 4 ? 'Intermediate' : 'Beginner'}
                    </motion.span>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${skill.color}10, transparent)`
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;