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
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-soft h-full">
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <p>
                  I am a passionate and innovative Computer Science engineering student with a keen interest in solving real-world problems through intelligent and efficient solutions. Currently in my pre-final year at ATME College of Engineering, Mysuru, I am specializing in Artificial Intelligence and Machine Learning.
                </p>
                <p>
                  My academic journey has provided me with a strong foundation in software development and AI, which I continuously strive to apply in creative and impactful ways. With a strong inclination towards research, innovation, and hands-on learning, I have contributed to projects addressing emerging technological challenges—ranging from intuitive applications to predictive models and advanced concepts in automation and security.
                </p>
                <p>
                  I actively participate in hackathons, technical events, and practical projects to enhance my skills and stay updated with the latest advancements. I thrive in dynamic environments where curiosity meets purpose and believe in continuous learning, collaboration, and purposeful growth. My goal is to contribute to cutting-edge technological advancements while constantly pushing the boundaries of what I can achieve.
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
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-soft mb-8">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-6 h-6 text-primary-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
              </div>
              <div className="space-y-8">
                {educationData.map((item, index) => (
                  <motion.div key={index} variants={itemVariants} className="relative pl-8 border-l-2 border-primary-200 dark:border-primary-900">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-500"></div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{item.degree} in {item.field}</h4>
                    <div className="flex flex-wrap items-center text-gray-600 dark:text-gray-300 mb-2">
                      <span className="font-medium mr-2">{item.institution}</span>
                      <span className="flex items-center text-sm"><MapPin size={14} className="mr-1" />{item.location}</span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3">
                      <Calendar size={14} className="mr-1" />
                      <span>{item.startYear} - {item.current ? 'Present' : item.endYear}</span>
                      {item.gpa && <span className="ml-3">GPA: {item.gpa}</span>}
                    </div>
                    {item.achievements && (
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm space-y-1">
                        {item.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-soft">
              <div className="flex items-center mb-6">
                <Briefcase className="w-6 h-6 text-primary-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Experience</h3>
              </div>
              <div className="space-y-8">
                {experienceData.map((item, index) => (
                  <motion.div key={index} variants={itemVariants} className="relative pl-8 border-l-2 border-primary-200 dark:border-primary-900">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-500"></div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                    <div className="flex flex-wrap items-center text-gray-600 dark:text-gray-300 mb-2">
                      <span className="font-medium mr-2">{item.company}</span>
                      <span className="flex items-center text-sm"><MapPin size={14} className="mr-1" />{item.location}</span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3">
                      <Calendar size={14} className="mr-1" />
                      <span>{item.startDate} - {item.current ? 'Present' : item.endDate}</span>
                    </div>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm space-y-1">
                      {item.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                    {item.technologies && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.technologies.map((tech, i) => (
                          <span key={i} className="text-xs px-2 py-1 rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900/50 dark:text-primary-300">
                            {tech}
                          </span>
                        ))}
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