import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, GraduationCap, Briefcase, Award, Code, Zap } from 'lucide-react';
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

  const [timelineRef, timelineInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [statsRef, statsInView] = useInView({
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

  const uniqueSkillsCount = new Set(skills.map(s => s.name)).size;
  const hackathonCount = 6;

  const statsData = [
    {
      icon: Award,
      value: certifications.length,
      label: 'Certifications',
    },
    {
      icon: Code,
      value: projects.length,
      label: 'Projects',
    },
    {
      icon: Zap,
      value: uniqueSkillsCount,
      label: 'Technical Skills',
    },
    {
      icon: GraduationCap,
      value: `${hackathonCount}+`,
      label: 'Hackathons / Events',
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
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get to know more about my background, education, and experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            ref={bioRef}
            initial={{ opacity: 0, x: -30 }}
            animate={bioInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
           <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-soft h-full">
  <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
    <p>
      I am a Computer Science engineering student specializing in Artificial Intelligence and Machine Learning at ATME College of Engineering, Mysuru.
    </p>
    <p>
      I have a strong interest in Python development, machine learning, and building real-world applications using technologies like Python, AI, Machine Learning, Generative AI, Deep Learning, Data science, Flask, HTML, CSS, and more...
    </p>
    <p>
      I enjoy working on practical projects and applying theoretical concepts to solve real-world problems through code and experimentation.
    </p>
    <p>
      I actively participate in hackathons, technical events, and online courses to stay updated with emerging technologies and industry trends.
    </p>
    <p>
      My long-term goal is to build a strong career in AI and software development while continuously learning, improving, and contributing to impactful technology solutions.
    </p>
  </div>
</div>

          </motion.div>

          <motion.div
            ref={timelineRef}
            variants={timelineVariants}
            initial="hidden"
            animate={timelineInView ? "visible" : "hidden"}
            className="lg:col-span-2"
          >
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-soft mb-6">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-5 h-5 text-primary-500 mr-2" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Education</h3>
              </div>
              <div className="space-y-6">
                {educationData.map((item, index) => (
                  <motion.div key={index} variants={itemVariants} className="relative pl-6 border-l-2 border-primary-200 dark:border-primary-900">
                    <div className="absolute -left-[7px] top-0 w-3 h-3 rounded-full bg-primary-500"></div>
                    <h4 className="text-base font-semibold text-gray-900 dark:text-white">{item.degree} in {item.field}</h4>
                    <div className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                      <span className="font-medium">{item.institution}</span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs mb-2">
                      <Calendar size={12} className="mr-1" />
                      <span>{item.startYear} - {item.current ? 'Present' : item.endYear}</span>
                      {item.gpa && <span className="ml-2">GPA: {item.gpa}</span>}
                    </div>
                    {item.achievements && item.achievements.length > 0 && (
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-xs space-y-0.5">
                        {item.achievements.slice(0, 2).map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-soft">
              <div className="flex items-center mb-4">
                <Briefcase className="w-5 h-5 text-primary-500 mr-2" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Experience</h3>
              </div>
              <div className="space-y-6">
                {experienceData.map((item, index) => (
                  <motion.div key={index} variants={itemVariants} className="relative pl-6 border-l-2 border-primary-200 dark:border-primary-900">
                    <div className="absolute -left-[7px] top-0 w-3 h-3 rounded-full bg-primary-500"></div>
                    <h4 className="text-base font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                    <div className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                      <span className="font-medium">{item.company}</span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs mb-2">
                      <Calendar size={12} className="mr-1" />
                      <span>{item.startDate} - {item.current ? 'Present' : item.endDate}</span>
                    </div>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-xs space-y-0.5">
                      {item.description.slice(0, 2).map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                    {item.technologies && (
                      <div className="mt-2 flex flex-wrap gap-1">
                        {item.technologies.slice(0, 4).map((tech, i) => (
                          <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900/50 dark:text-primary-300">
                            {tech}
                          </span>
                        ))}
                        {item.technologies.length > 4 && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
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

        <motion.div
          ref={statsRef}
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
          variants={timelineVariants}
          className="mt-12 pt-12 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {statsData.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 shadow-soft hover:shadow-md transition-shadow duration-300 text-center border border-gray-200 dark:border-gray-700">
                    <div className="flex justify-center mb-2">
                      <Icon className="w-5 h-5 text-primary-500 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 font-medium mt-1">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;