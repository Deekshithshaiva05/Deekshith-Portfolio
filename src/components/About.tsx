import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, GraduationCap, Briefcase } from 'lucide-react';
import { educationData } from '../data/education';
import { experienceData } from '../data/experience';

const About: React.FC = () => {
  const [bioRef, bioInView] = useInView({
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
                  I am a passionate Computer Science engineering student specializing in Artificial Intelligence and Machine Learning at ATME College of Engineering, Mysuru.
                </p>
                <p>
                  My academic journey has provided me with a strong foundation in software development and AI. I continuously strive to apply these skills in creative and impactful ways through research, innovation, and hands-on learning.
                </p>
                <p>
                  I actively participate in hackathons, technical events, and practical projects to enhance my skills. My goal is to contribute to cutting-edge technological advancements while constantly pushing the boundaries of what I can achieve.
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
      </div>
    </section>
  );
};

export default About;