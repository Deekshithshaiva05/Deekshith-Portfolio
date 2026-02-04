import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, GraduationCap, Briefcase, Award, Zap, Code } from 'lucide-react';
import { educationData } from '../data/education';
import { experienceData } from '../data/experience';
import { certifications } from '../data/certifications';
import { projects } from '../data/projects';
import { skills } from '../data/skills';

const About: React.FC = () => {
  const [bioRef, bioInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [timelineRef, timelineInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const uniqueSkillsCount = new Set(skills.map(s => s.name)).size;
  const hackathonCount = 6;

  const stats = [
    {
      icon: Award,
      value: certifications.length,
      label: 'Certifications',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Code,
      value: projects.length,
      label: 'Projects',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      value: uniqueSkillsCount,
      label: 'Technical Skills',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: GraduationCap,
      value: hackathonCount + '+',
      label: 'Hackathons',
      color: 'from-green-500 to-emerald-500'
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Final-year Computer Science student with a passion for AI, ML, and backend development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <motion.div
            ref={bioRef}
            initial={{ opacity: 0, x: -30 }}
            animate={bioInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-cyan-500/10 rounded-2xl blur-xl transition-all duration-300 group-hover:blur-2xl opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 backdrop-blur-sm h-full">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Who I Am</h3>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    I'm a final-year Computer Science (AI & ML) student at ATME College of Engineering, Mysuru, driven by a passion for building intelligent, scalable systems that solve real-world problems.
                  </p>
                  <p>
                    My expertise spans AI, Machine Learning, Backend Development, and Full-Stack Engineering. I thrive on transforming complex ideas into elegant, production-ready solutions through rigorous research and hands-on innovation.
                  </p>
                  <p>
                    I actively participate in hackathons and technical events, where I've won recognition for developing cutting-edge solutions. My goal: contribute to advancing AI technology while continuously pushing the boundaries of what's possible.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={statsRef}
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            className="lg:col-span-2"
          >
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    variants={statVariants}
                    className="relative group"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                    <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} p-3 mb-4 transform group-hover:rotate-12 transition-transform duration-300`}>
                        <Icon className="w-full h-full text-white" />
                      </div>
                      <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          ref={timelineRef}
          variants={timelineVariants}
          initial="hidden"
          animate={timelineInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-8">
              <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/50">
                <GraduationCap className="w-6 h-6 text-primary-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white ml-3">Education</h3>
            </div>
            <div className="space-y-6">
              {educationData.map((item, index) => (
                <motion.div key={index} variants={itemVariants} className="relative pl-6 border-l-2 border-primary-300 dark:border-primary-700">
                  <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-primary-500 ring-2 ring-white dark:ring-gray-900"></div>
                  <h4 className="text-base font-semibold text-gray-900 dark:text-white">{item.degree} in {item.field}</h4>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1 font-medium">{item.institution}</div>
                  <div className="flex items-center text-gray-500 dark:text-gray-500 text-xs mb-2">
                    <Calendar size={12} className="mr-1" />
                    <span>{item.startYear} - {item.current ? 'Present' : item.endYear}</span>
                    {item.gpa && <span className="ml-2 font-medium">GPA: {item.gpa}</span>}
                  </div>
                  {item.achievements && item.achievements.length > 0 && (
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-xs space-y-1">
                      {item.achievements.slice(0, 2).map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-8">
              <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/50">
                <Briefcase className="w-6 h-6 text-primary-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white ml-3">Experience</h3>
            </div>
            <div className="space-y-6">
              {experienceData.map((item, index) => (
                <motion.div key={index} variants={itemVariants} className="relative pl-6 border-l-2 border-primary-300 dark:border-primary-700">
                  <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-primary-500 ring-2 ring-white dark:ring-gray-900"></div>
                  <h4 className="text-base font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1 font-medium">{item.company}</div>
                  <div className="flex items-center text-gray-500 dark:text-gray-500 text-xs mb-2">
                    <Calendar size={12} className="mr-1" />
                    <span>{item.startDate} - {item.current ? 'Present' : item.endDate}</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-xs space-y-1">
                    {item.description.slice(0, 2).map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                  {item.technologies && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.technologies.slice(0, 4).map((tech, i) => (
                        <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900/50 dark:text-primary-300 font-medium">
                          {tech}
                        </span>
                      ))}
                      {item.technologies.length > 4 && (
                        <span className="text-xs px-2.5 py-1 rounded-full bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 font-medium">
                          +{item.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;