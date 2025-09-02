import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
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
  isFormatted?: boolean;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Deekshith N, an AI/ML engineering student.\n\nFeel free to ask me about:\n• My skills and expertise\n• Projects I've worked on\n• Educational background\n• Professional experience\n• Certifications and achievements\n• Contact information\n\nWhat would you like to know?",
      sender: 'bot',
      timestamp: new Date(),
      isFormatted: true,
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Check if OpenAI API key is available
  const hasOpenAIKey = import.meta.env.VITE_OPENAI_API_KEY && 
    import.meta.env.VITE_OPENAI_API_KEY.trim() !== '' && 
    import.meta.env.VITE_OPENAI_API_KEY !== 'sk-your-openai-api-key-here';

  const topicSuggestions = [
    { label: 'About Me', query: 'Tell me about yourself' },
    { label: 'Skills', query: 'What are your technical skills?' },
    { label: 'Projects', query: 'Show me your projects' },
    { label: 'Education', query: 'Tell me about your education' },
    { label: 'Experience', query: 'What work experience do you have?' },
    { label: 'Certifications', query: 'What certifications do you have?' },
    { label: 'Contact', query: 'How can I contact you?' },
  ];

  const handleTopicClick = (query: string) => {
    setInputMessage(query);
    setShowSuggestions(false);
    // Auto-send the message
    setTimeout(() => {
      handleSendMessage(query);
    }, 100);
  };

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

  const formatResponseAsBullets = (text: string): string => {
    // If the response already has bullet points, return as is
    if (text.includes('•') || text.includes('-')) {
      return text;
    }

    // Split into sentences and format as bullets
    const sentences = text.split('. ').filter(s => s.trim().length > 0);
    if (sentences.length > 1) {
      return sentences.map(sentence => {
        const cleanSentence = sentence.trim();
        return cleanSentence.endsWith('.') ? `• ${cleanSentence}` : `• ${cleanSentence}.`;
      }).join('\n');
    }
    
    return text;
  };

  const generatePersonalizedResponse = async (userMessage: string): Promise<{ text: string; isFormatted: boolean }> => {
    try {
      if (hasOpenAIKey) {
        // Dynamic import to avoid initialization errors
        const OpenAI = (await import('openai')).default;
        const openai = new OpenAI({
          apiKey: import.meta.env.VITE_OPENAI_API_KEY,
          dangerouslyAllowBrowser: true
        });

        const completion = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: `You are Deekshith N, an AI/ML engineering student at ATME College of Engineering, Mysuru. Always respond in first person as "I" and never mention you are an AI assistant. Be friendly, professional, and helpful. Format your responses with bullet points when listing multiple items. Use • for bullet points. Here's your complete context: ${buildPersonalContext()}`
            },
            {
              role: "user", 
              content: userMessage
            }
          ],
          max_tokens: 400,
          temperature: 0.7,
        });

        return { text: completion.choices[0]?.message?.content || "Sorry, I couldn't process that request right now.", isFormatted: true };
      } else {
        // Use fallback response when no valid API key
        throw new Error("OpenAI API key not configured");
      }
    } catch (error) {
      console.error("API Error:", error);
      
      // Fallback response using your actual data
      const lowerMessage = userMessage.toLowerCase();
      
      if (lowerMessage.includes('skill') || lowerMessage.includes('technology')) {
        const topSkills = skills.filter(s => s.level >= 8).map(s => s.name).join(', ');
        return { text: `My technical skills include:\n• Programming: Python (9/10), C (8/10), HTML/CSS (7/10)\n• Frameworks: Flask (9/10), Pandas (9/10), NumPy (9/10), scikit-learn (8/10)\n• Tools: Git/GitHub (8/10), MongoDB (8/10), Jupyter Notebooks (9/10)\n• Soft Skills: Problem Solving, Teamwork, Communication, Time Management\n• Other: Machine Learning (7/10), Data Engineering (8/10), NLP (8/10)`, isFormatted: true };
      }
      
      if (lowerMessage.includes('project')) {
        return { text: `Here are my key projects:\n• Car Price Prediction Analysis - ML model with 94.37% accuracy using XGBoost\n• Medicine Recommendation System - AI-powered healthcare solution\n• Technologies used: Python, Flask, XGBoost, Random Forest, scikit-learn\n• All projects focus on real-world problem solving with AI/ML`, isFormatted: true };
      }
      
      if (lowerMessage.includes('education') || lowerMessage.includes('college') || lowerMessage.includes('study')) {
        return { text: `My educational background:\n• Bachelor of Engineering in Computer Science (AI/ML)\n• ATME College of Engineering, Mysuru, Karnataka\n• Currently in pre-final year (2022-Present)\n• GPA: 9.0/10.0\n• Specialization: Artificial Intelligence and Machine Learning\n• Previous: PUC from NiSARGA Independent PU College (84%)`, isFormatted: true };
      }
      
      if (lowerMessage.includes('experience') || lowerMessage.includes('work') || lowerMessage.includes('internship')) {
        return { text: `My professional experience:\n• Software Intern at CodSoft (July-Sep 2024)\n• Developed Python-based applications and Django web apps\n• Participated in hackathons: Tech Tonic 2024, HackSprint 2024\n• Collaborated on AI/ML solutions for real-world problems\n• Experience with backend development and team collaboration`, isFormatted: true };
      }
      
      if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('email')) {
        return { text: `Contact information:\n• Email: deekshithshaiva05@gmail.com\n• Phone: +91 8867367538\n• Location: Mysore, Karnataka\n• LinkedIn: linkedin.com/in/deekshith-n-036ab9263\n• GitHub: github.com/Deekshithshaiva05\n• Available for collaborations and opportunities!`, isFormatted: true };
      }
      
      if (lowerMessage.includes('hire') || lowerMessage.includes('available') || lowerMessage.includes('job')) {
        return { text: `I'm actively seeking opportunities in:\n• AI/ML Engineering roles\n• Python Development positions\n• Data Science and Analytics\n• Machine Learning projects\n• Web Development with Flask/Django\n• Research and Innovation projects\n\nI'm passionate about solving real-world problems with technology!`, isFormatted: true };
      }
      
      if (lowerMessage.includes('certification') || lowerMessage.includes('certificate')) {
        return { text: `My certifications include:\n• Programming for Everybody (Python) - University of Michigan\n• AI Essentials - Udemy\n• Data Analysis with Pandas - Infosys Springboard\n• 5-Day AI Workshop - Tech Vritti & Microsoft\n• Flask Python Course - Great Learning\n• Machine Learning with TensorFlow - Infosys\n• Total: ${certifications.length} certifications in AI/ML and development`, isFormatted: true };
      }
      
      if (lowerMessage.includes('gpa') || lowerMessage.includes('grade') || lowerMessage.includes('academic')) {
        return { text: `Academic achievements:\n• Current GPA: 9.0/10.0 in Computer Science (AI/ML)\n• ATME College of Engineering, Mysuru\n• Pre-final year student\n• PUC: 84% from NiSARGA Independent PU College\n• Specialization: Artificial Intelligence and Machine Learning\n• Strong focus on practical applications and research`, isFormatted: true };
      }
      
      if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
        return { text: `Hello! I'm Deekshith N 👋\n\n• AI/ML Engineering Student at ATME College of Engineering\n• Passionate about Python, Machine Learning, and Web Development\n• 9.0 GPA with expertise in data science and AI solutions\n• Available for collaborations and opportunities\n\nWhat would you like to know about me?`, isFormatted: true };
      }
      
      return { text: `I'm here to help! You can ask me about:\n• My technical skills and expertise\n• Projects I've worked on\n• Educational background and achievements\n• Professional experience and internships\n• Certifications and courses\n• Contact information and availability\n• Career goals and interests\n\nWhat interests you most?`, isFormatted: true };
    }
  };

  const handleSendMessage = async (messageText?: string) => {
    const messageToSend = messageText || inputMessage;
    if (!messageToSend.trim()) return;

    setShowSuggestions(false);

    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageToSend,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    try {
      const response = await generatePersonalizedResponse(messageToSend);

      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: response.text,
          sender: 'bot',
          timestamp: new Date(),
          isFormatted: response.isFormatted,
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

  const formatMessageText = (text: string) => {
    return text.split('\n').map((line, index) => {
      if (line.trim().startsWith('•')) {
        return (
          <div key={index} className="flex items-start mb-1">
            <span className="text-primary-500 mr-2 mt-1">•</span>
            <span>{line.trim().substring(1).trim()}</span>
          </div>
        );
      }
      return line.trim() ? <div key={index} className="mb-1">{line}</div> : <div key={index} className="mb-2"></div>;
    });
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
              {/* Topic Suggestions */}
              {showSuggestions && messages.length === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4"
                >
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-2 text-center">
                    Quick topics to explore:
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {topicSuggestions.map((topic, index) => (
                      <button
                        key={index}
                        onClick={() => handleTopicClick(topic.query)}
                        className="px-3 py-1 text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors"
                      >
                        {topic.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

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
                    <div className="text-sm">
                      {message.isFormatted ? 
                        formatMessageText(message.text) : 
                        <p>{message.text}</p>
                      }
                    </div>
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
