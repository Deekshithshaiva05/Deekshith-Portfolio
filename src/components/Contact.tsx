import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin, Send, CheckCircle, XCircle, Github, Linkedin, Facebook } from 'lucide-react';
import emailjs from '@emailjs/browser';
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
    
    if (formErrors[name as keyof FormValues]) {
      setFormErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setFormStatus('submitting');
      
      try {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            from_name: formValues.name,
            from_email: formValues.email,
            subject: formValues.subject,
            message: formValues.message,
            to_name: 'Deekshith N',
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
        
        setFormStatus('success');
        setFormValues({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } catch (error) {
        console.error('EmailJS Error:', error);
        setFormStatus('error');
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
              <p className="text-gray-300 text-lg mb-12 leading-relaxed">
                I'm open for new opportunities and collaborations. If you have a project that needs my help, please get in touch.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Email</h3>
                  <p className="text-gray-300">deekshithshaiva05@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Phone</h3>
                  <p className="text-gray-300">+91 8867367538</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Location</h3>
                  <p className="text-gray-300">Mysore, Karnataka</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Deekshithshaiva05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6 text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/deekshith-n-036ab9263"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
                <a
                  href="https://facebook.com/deekshithshaiva05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-800 rounded-2xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Send Me a Message</h3>
            
            {formStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-600 rounded-lg flex items-center"
              >
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Message sent successfully! I'll get back to you soon.</span>
              </motion.div>
            )}

            {formStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-600 rounded-lg flex items-center"
              >
                <XCircle className="w-5 h-5 mr-2" />
                <span>Failed to send message. Please try again.</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  />
                  {formErrors.name && (
                    <p className="mt-1 text-sm text-red-400">{formErrors.name}</p>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  />
                  {formErrors.email && (
                    <p className="mt-1 text-sm text-red-400">{formErrors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  value={formValues.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                />
                {formErrors.subject && (
                  <p className="mt-1 text-sm text-red-400">{formErrors.subject}</p>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  value={formValues.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                />
                {formErrors.message && (
                  <p className="mt-1 text-sm text-red-400">{formErrors.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full py-4 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-800 text-white font-semibold rounded-lg transition-colors flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {formStatus === 'submitting' ? (
                  <div className="flex items-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </div>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;