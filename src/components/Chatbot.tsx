import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import OpenAI from 'openai';
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

  // Initialize OpenAI client
  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Build full context string from your local data
  const buildPersonalContext = () => {
    return `
    I am Deekshith N, a Computer Science engineering student specializing in AI/ML at ATME College of Engineering, Mysuru. 

    PERSONAL INFO:
    - Name: Deekshith N
    - Email: deekshithshaiva05@gmail.com
    - Phone: +91 8867367538
    - Location: Mysore, Karnataka
    - GitHub: https://github.com/Deekshithshaiva05
    - LinkedIn: https://www.linkedin.com/in/deekshith-n-036ab9263

    EDUCATION:
    ${educationData.map(edu => `- ${edu.degree} at ${edu.institution} (${edu.startDate} - ${edu.endDate})`).join('\n')}

    SKILLS:
    ${skills.map(skill => `- ${skill.name}: ${skill.level}/10 (${skill.category})`).join('\n')}

    PROJECTS:
    ${projects.map(project => `- ${project.title}: ${project.description.substring(0, 200)}...`).join('\n')}

    EXPERIENCE:
    ${experienceData.map(exp => `- ${exp.title} at ${exp.company} (${exp.startDate} - ${exp.current ? 'Present' : exp.endDate}): ${exp.description.join('. ')}`).join('\n')}

    CERTIFICATIONS:
    ${certifications.slice(0, 5).map(cert => `- ${cert.title} from ${cert.organization}`).join('\n')}
    `;
  };

  const generatePersonalizedResponse = async (userMessage: string): Promise<string> => {
    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `You are Deekshith N responding in first person. Always respond as "I" and never mention you are an AI. Here's your context: ${buildPersonalContext()}`
          },
          {
            role: "user", 
            content: userMessage
          }
        ],
        max_tokens: 300,
        temperature: 0.7,
      });

      return completion.choices[0]?.message?.content || "Sorry, I couldn't process that request right now.";
    } catch (error) {
      console.error("API Error:", error);
      
      // Fallback response using your actual data
      const lowerMessage = userMessage.toLowerCase();
      
      if (lowerMessage.includes('skill') || lowerMessage.includes('technology')) {
        const topSkills = skills.filter(s => s.level >= 8).map(s => s.name).join(', ');
        return `I specialize in ${topSkills}. I'm particularly strong in Python, Flask, and machine learning with ${skills.length} different skills in my toolkit.`;
      }
      
      if (lowerMessage.includes('project')) {
        return `I've worked on ${projects.length} major projects including ${projects.map(p => p.title).join(' and ')}. My featured project is the Car Price Prediction system using XGBoost and Flask.`;
      }
      
      if (lowerMessage.includes('education') || lowerMessage.includes('college') || lowerMessage.includes('study')) {
        return `I'm currently pursuing my Bachelor of Engineering in Computer Science (AI/ML) at ATME College of Engineering, Mysuru. I'm in my pre-final year with a 9.0/10.0 GPA.`;
      }
      
      if (lowerMessage.includes('experience') || lowerMessage.includes('work') || lowerMessage.includes('internship')) {
        return `I've completed a Software Internship at CodSoft where I worked on Python-based applications and Django web development. I also actively participate in hackathons and technical competitions.`;
      }
      
      if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('email')) {
        return `You can reach me at deekshithshaiva05@gmail.com or call me at +91 8867367538. I'm based in Mysore, Karnataka. Feel free to connect with me on LinkedIn or GitHub!`;
      }
      
      if (lowerMessage.includes('hire') || lowerMessage.includes('available') || lowerMessage.includes('job')) {
        return `Yes, I'm actively looking for opportunities in AI/ML, Python development, and data science. I'm particularly interested in roles that involve machine learning, web development, and innovative problem-solving.`;
      }
      
      return `Hi! I'm Deekshith N, an AI/ML engineering student at ATME College. I'd be happy to tell you about my skills, projects, education, or experience. What would you like to know?`;
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
      console.error("Error generating response:", error);
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
