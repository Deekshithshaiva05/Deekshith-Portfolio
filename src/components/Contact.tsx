import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin, Send, CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import { socialLinks } from '../data/social';
import type { FormValues } from '../types';

const Contact: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formErrors, setFormErrors] = useState<Partial<FormValues>>({});
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToCertifications = () => {
    const certificationsSection = document.querySelector('#certifications');
    if (certificationsSection) {
      certificationsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const validateForm = () => {
    const errors: Partial<FormValues> = {};
    
    if (!formValues.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formValues.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formValues.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    
    if (!formValues.message.trim()) {
      errors.message = 'Message is required';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
    
    // Clear the error when user starts typing
    if (formErrors[name as keyof FormValues]) {
      setFormErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setFormStatus('submitting');
      
      // Simulate form submission
      setTimeout(() => {
        setFormStatus('success');
        setFormValues({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }, 2000);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Let's Connect!</h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-md sm:max-w-xl mx-auto">
            I'm open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out!
          </p>
        </motion.div>
        <div className="flex flex-col gap-4 sm:gap-6 items-center mb-8 sm:mb-10">
          <a href="mailto:deekshithshaiva05@gmail.com" className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline text-base sm:text-lg font-medium break-all">
            <Mail className="w-5 h-5" /> deekshithshaiva05@gmail.com
          </a>
          <div className="flex gap-3 sm:gap-4">
            <a href="https://linkedin.com/in/deekshith-n-036ab9263" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="bg-gray-100 hover:bg-blue-100 dark:bg-gray-800 dark:hover:bg-blue-900 text-gray-700 dark:text-gray-300 p-2 sm:p-3 rounded-full transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.62z"/></svg>
            </a>
            <a href="https://github.com/Deekshithshaiva05" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 p-2 sm:p-3 rounded-full transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5c-6.62 0-12 5.38-12 12 0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.304-.535-1.527.117-3.18 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.404 1.02.005 2.04.137 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.876.12 3.18.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.624-5.475 5.92.43.37.823 1.096.823 2.21 0 1.595-.015 2.88-.015 3.27 0 .32.218.694.825.576 4.765-1.587 8.2-6.086 8.2-11.385 0-6.62-5.38-12-12-12z"/></svg>
            </a>
          </div>
          <div className="flex flex-col items-center text-gray-500 dark:text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2">
            <span className="flex items-center gap-1"><Phone className="w-4 h-4" /> +91 8867367538</span>
            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Mysore, Karnataka</span>
          </div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-900 rounded-xl p-4 sm:p-8 shadow-soft mt-6 sm:mt-8"
        >
          {/* Message form removed as requested */}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;