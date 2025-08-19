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
      text: "Hi! I'm Deekshith N, an AI/ML engineering student. Feel free to ask me about my skills, projects, education, or anything else you'd like to know!",
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
    
    // Create context about Deekshith
    const personalContext = `
    I am Deekshith N, a Computer Science engineering student specializing in AI/ML at ATME College of Engineering, Mysuru. 
    Here's my information:
    
    EDUCATION:
    - Currently in pre-final year of B.E. in Computer Science (AI/ML) at ATME College of Engineering, Mysuru
    - GPA: 9.0/10.0
    - Previously completed PUC in PCMB from NiSARGA INDEPENDENT PU COLLEGE with 84%
    
    SKILLS:
    ${skills.map(skill => `- ${skill.name}: ${skill.level}/10 (${skill.category})`).join('\n')}
    
    PROJECTS:
    ${projects.map(project => `- ${project.title}: ${project.description}`).join('\n')}
    
    EXPERIENCE:
    ${experienceData.map(exp => `- ${exp.title} at ${exp.company} (${exp.startDate} - ${exp.current ? 'Present' : exp.endDate})`).join('\n')}
    
    CERTIFICATIONS: ${certifications.length} certifications including Python, AI, Machine Learning, and more.
    
    CONTACT:
    - Email: deekshithshaiva05@gmail.com
    - Phone: +91 8867367538
    - Location: Mysore, Karnataka
    - GitHub: https://github.com/Deekshithshaiva05
    - LinkedIn: https://www.linkedin.com/in/deekshith-n-036ab9263
    `;

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
              content: `You are Deekshith N responding to questions about yourself. Always respond in first person (I, me, my). Be conversational, friendly, and professional. Use the provided context to answer questions accurately. Don't mention that you're an AI - you ARE Deekshith. Here's your information: ${personalContext}`
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
        throw new Error('Failed to get response from OpenAI');
      }

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error('OpenAI API Error:', error);
      
      // Fallback responses based on keywords
      if (lowerMessage.includes('skill')) {
        const topSkills = skills.filter(s => s.level >= 8).map(s => s.name).join(', ');
        return `My top skills include ${topSkills}. I'm particularly strong in Python, Flask, Machine Learning, and Data Analysis. I have experience with various frameworks and tools for AI/ML development.`;
      }
      
      if (lowerMessage.includes('project')) {
        return `I've worked on several interesting projects including a Car Price Prediction system using XGBoost and Random Forest, and a Medicine Recommendation System using machine learning. Both projects involved extensive data analysis and model optimization.`;
      }
      
      if (lowerMessage.includes('education') || lowerMessage.includes('study')) {
        return `I'm currently in my pre-final year pursuing B.E. in Computer Science with specialization in AI/ML at ATME College of Engineering, Mysuru. I maintain a 9.0/10.0 GPA and am passionate about artificial intelligence and machine learning.`;
      }
      
      if (lowerMessage.includes('experience') || lowerMessage.includes('work')) {
        return `I've completed a software internship at CodSoft where I worked on Python-based applications and Django web development. I also actively participate in hackathons and technical competitions to enhance my skills.`;
      }
      
      if (lowerMessage.includes('contact') || lowerMessage.includes('reach')) {
        return `You can reach me at deekshithshaiva05@gmail.com or call me at +91 8867367538. I'm based in Mysore, Karnataka. Feel free to connect with me on LinkedIn or check out my projects on GitHub!`;
      }
      
      return "Thanks for your question! I'm always happy to discuss my background, projects, or any opportunities for collaboration. Feel free to ask me anything specific about my skills or experience!";
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