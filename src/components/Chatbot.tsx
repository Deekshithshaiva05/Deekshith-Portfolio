import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';
import { skills } from '../data/skills';
import { projects } from '../data/projects';
import { educationData } from '../data/education';
import { experienceData } from '../data/experience';
import { certifications } from '../data/certifications';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Deekshith N, an AI/ML engineering student. Feel free to ask me about my skills, projects, education, experience, or anything else you'd like to know!",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generatePersonalizedResponse = async (userMessage: string): Promise<string> => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Create comprehensive context about Deekshith using actual website data
    const personalContext = `
    I am Deekshith N, a Computer Science engineering student specializing in AI/ML at ATME College of Engineering, Mysuru. 
    Here's my complete information:
    
    PERSONAL INFO:
    - Name: Deekshith N
    - Email: deekshithshaiva05@gmail.com
    - Phone: +91 8867367538
    - Location: Mysore, Karnataka
    - GitHub: https://github.com/Deekshithshaiva05
    - LinkedIn: https://www.linkedin.com/in/deekshith-n-036ab9263
    
    EDUCATION:
    - Currently in pre-final year of B.E. in Computer Science (AI/ML) at ATME College of Engineering, Mysuru
    - GPA: 9.0/10.0
    - Previously completed PUC in PCMB from NiSARGA INDEPENDENT PU COLLEGE with 84%
    
    SKILLS (with proficiency levels):
    ${skills.map(skill => `- ${skill.name}: ${skill.level}/10 (${skill.category})`).join('\n')}
    
    PROJECTS:
    ${projects.map(project => `- ${project.title}: ${project.description.substring(0, 200)}...`).join('\n')}
    
    EXPERIENCE:
    ${experienceData.map(exp => `- ${exp.title} at ${exp.company} (${exp.startDate} - ${exp.current ? 'Present' : exp.endDate}): ${exp.description.join('. ')}`).join('\n')}
    
    CERTIFICATIONS: 
    I have ${certifications.length} certifications including:
    ${certifications.slice(0, 5).map(cert => `- ${cert.title} from ${cert.organization}`).join('\n')}
    
    INTERESTS & GOALS:
    - Passionate about AI/ML and solving real-world problems
    - Active participant in hackathons and technical competitions
    - Looking for opportunities in AI/ML development and data science
    - Interested in research and innovation in artificial intelligence
    `;

    // Try OpenAI API first
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: `You are Deekshith N responding to questions about yourself. ALWAYS respond in first person (I, me, my). Be conversational, friendly, and professional. Use the provided context to answer questions accurately. Don't mention that you're an AI - you ARE Deekshith responding personally. Keep responses concise but informative. Here's your information: ${personalContext}`
            },
            {
              role: 'user',
              content: userMessage
            }
          ],
          max_tokens: 300,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        throw new Error('OpenAI API failed');
      }

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error('OpenAI API Error:', error);
      
      // Enhanced fallback responses using actual website data
      if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('programming')) {
        const topSkills = skills.filter(s => s.level >= 8).map(s => `${s.name} (${s.level}/10)`).join(', ');
        const programmingSkills = skills.filter(s => s.category === 'programming').map(s => s.name).join(', ');
        return `My top skills include ${topSkills}. I'm particularly strong in programming languages like ${programmingSkills}. I also have extensive experience with frameworks like Flask, Pandas, NumPy, and machine learning libraries. I'm always learning new technologies to stay current with industry trends!`;
      }
      
      if (lowerMessage.includes('project') || lowerMessage.includes('work') || lowerMessage.includes('built')) {
        const featuredProjects = projects.filter(p => p.featured).map(p => p.title).join(' and ');
        return `I've worked on several exciting projects! My featured projects include ${featuredProjects}. The Car Price Prediction project uses XGBoost and Random Forest algorithms to accurately predict used car prices, while the Medicine Recommendation System leverages machine learning to suggest appropriate medications based on symptoms. Both projects involved extensive data analysis, model optimization, and web development using Flask.`;
      }
      
      if (lowerMessage.includes('education') || lowerMessage.includes('study') || lowerMessage.includes('college') || lowerMessage.includes('gpa')) {
        return `I'm currently in my pre-final year pursuing B.E. in Computer Science with specialization in AI/ML at ATME College of Engineering, Mysuru. I maintain a strong 9.0/10.0 GPA and am passionate about artificial intelligence and machine learning. Before this, I completed my PUC in PCMB from NiSARGA INDEPENDENT PU COLLEGE with 84%. My academic focus is on understanding both theoretical concepts and practical applications of AI/ML.`;
      }
      
      if (lowerMessage.includes('experience') || lowerMessage.includes('internship') || lowerMessage.includes('job')) {
        return `I completed a software internship at CodSoft where I worked on Python-based applications and Django web development. During this internship, I developed backend systems, optimized code for performance, and collaborated with senior developers. I also actively participate in hackathons like Tech Tonic 2024 and other technical competitions, which has helped me develop teamwork skills and innovative problem-solving approaches.`;
      }
      
      if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('email') || lowerMessage.includes('phone')) {
        return `You can reach me at deekshithshaiva05@gmail.com or call me at +91 8867367538. I'm based in Mysore, Karnataka. Feel free to connect with me on LinkedIn (https://www.linkedin.com/in/deekshith-n-036ab9263) or check out my projects on GitHub (https://github.com/Deekshithshaiva05). I'm always open to discussing new opportunities and collaborations!`;
      }
      
      if (lowerMessage.includes('certificate') || lowerMessage.includes('certification') || lowerMessage.includes('course')) {
        return `I have ${certifications.length} certifications in various areas including Python programming, AI/ML, data analysis, and web development. Some notable ones include certifications from University of Michigan (Python), Microsoft (AI Workshop), Udemy (AI Essentials), and Google Developer Student Clubs. I believe in continuous learning and regularly update my skills through online courses and workshops.`;
      }
      
      if (lowerMessage.includes('hire') || lowerMessage.includes('available') || lowerMessage.includes('opportunity') || lowerMessage.includes('job')) {
        return `Yes, I'm actively looking for opportunities in AI/ML development, data science, and software engineering! I'm particularly interested in roles where I can apply my machine learning skills and work on innovative projects. With my strong academic background (9.0 GPA), practical experience through internships and projects, and passion for AI/ML, I'm ready to contribute to a dynamic team. Feel free to reach out to discuss potential opportunities!`;
      }
      
      if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
        return `Hello! Great to meet you! I'm Deekshith N, an AI/ML engineering student passionate about creating innovative solutions. I love working on machine learning projects, participating in hackathons, and learning new technologies. What would you like to know about my background or experience?`;
      }
      
      // Default response
      return `Thanks for your question! I'm always happy to discuss my background, projects, skills, or any opportunities for collaboration. I'm passionate about AI/ML and love sharing my experiences. Feel free to ask me anything specific about my education, projects, or technical expertise. You can also reach out to me directly at deekshithshaiva05@gmail.com!`;
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    try {
      const response = await generatePersonalizedResponse(inputMessage);
      
      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: response,
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, 1000);
    } catch (error) {
      console.error('Error generating response:', error);
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg flex items-center justify-center z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 w-96 h-[500px] bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">DN</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Deekshith N</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">AI/ML Student</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isTyping}
                  className="px-4 py-2 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white rounded-lg transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;