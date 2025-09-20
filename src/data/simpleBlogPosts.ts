export interface SimpleBlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

export const simpleBlogPosts: SimpleBlogPost[] = [
  {
    id: '1',
    title: 'RaagBot: AI-Powered Help Bot for MOSDAC Portal – Bharatiya Antariksh Hackathon 2025',
    slug: 'raagbot-ai-help-bot-mosdac-bharatiya-antariksh-hackathon-2025',
    excerpt: 'Our team, Team Sigmoid, participated in the Bharatiya Antariksh Hackathon 2025 with RaagBot – an AI-powered help bot designed to simplify access to space research data on the MOSDAC portal using Knowledge Graphs, LLMs, RAG, and Spatial Intelligence.',
    content: `
      <h2>Introduction</h2>
      <p>We are proud to share that our team, <strong>Team Sigmoid</strong> (members: <em>Deekshith N, Vinay S, and Syed Farhaan</em>), successfully participated in the <strong>Bharatiya Antariksh Hackathon 2025</strong>. Organized in collaboration with ISRO, the hackathon challenged participants to address real-world problems in space research, data accessibility, and technological innovation.</p>
      
      <h2>Our Project: RaagBot</h2>
      <p>Our proposed solution, <strong>RaagBot</strong>, is an AI-powered help bot that intelligently understands user queries and retrieves precise, contextual information from the <strong>MOSDAC portal</strong>. MOSDAC (Meteorological and Oceanographic Satellite Data Archival Centre) hosts vast and complex datasets, often layered and difficult to navigate. RaagBot was designed to make this data easily accessible for researchers, students, and decision-makers.</p>
      
      <h3>Key Features of RaagBot</h3>
      <ul>
        <li><strong>Knowledge Graphs:</strong> For mapping entities and relationships across datasets, enabling structured understanding of space-related data.</li>
        <li><strong>Large Language Models (LLMs):</strong> For semantic query understanding, ensuring that user intent is accurately captured.</li>
        <li><strong>Retrieval Augmented Generation (RAG):</strong> For document-level question answering, combining retrieval with generative AI for precise responses.</li>
        <li><strong>Spatial Intelligence:</strong> To handle location and time-based queries, crucial for satellite data and environmental insights.</li>
      </ul>
      
      <h2>Why RaagBot?</h2>
      <p>The MOSDAC portal is rich with information but navigating it can be a challenge for many users. RaagBot bridges this gap by providing an intuitive conversational interface that leverages modern AI advancements. By integrating knowledge graphs with LLMs and RAG, RaagBot ensures that queries are answered not just with data, but with <strong>context-aware insights</strong>.</p>
      
      <h2>Hackathon Experience</h2>
      <p>Participating in the <strong>Bharatiya Antariksh Hackathon 2025</strong> was an incredible experience for our team. It gave us the opportunity to apply AI/ML techniques to real-world space and environmental challenges while learning from the innovation-driven ecosystem fostered by ISRO. Receiving the <strong>Certificate of Acknowledgement</strong> was a proud moment for all of us.</p>
      
      <h2>Conclusion</h2>
      <p>RaagBot is a step toward democratizing access to space data by simplifying user interaction with complex datasets. Our team is motivated to continue improving this project and explore how it can contribute to research, education, and policy-making in India’s space innovation journey.</p>
    `,
    featuredImage: 'E:\PROJECTS\Deekshith-Portfolio\public\images\baratiya anthariksha hackathon.png',
    publishDate: '2025-09-18',
    category: 'ai-ml',
    author: 'Team Sigmoid (Deekshith N, Vinay S, Syed Farhaan)',
    readTime: 10,
    featured: true
  },
  {
    id: '2',
    title: 'Building Web Apps with React',
    excerpt: 'A beginner-friendly guide to creating modern web applications using React.',
    content: `
      <h2>React Web Development</h2>
      <p>React is a popular JavaScript library for building user interfaces, especially web applications.</p>
      
      <h3>Why React?</h3>
      <ul>
        <li>Component-based architecture</li>
        <li>Large community support</li>
        <li>Excellent performance</li>
      </ul>
      
      <h3>Basic Concepts</h3>
      <p>Learn about components, props, state, and hooks. These are the building blocks of React applications.</p>
      
      <p>Start with simple projects and gradually build more complex applications as you learn.</p>
    `,
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2024-01-12',
    author: 'Deekshith N',
    category: 'Web Development'
  },
  {
    id: '3',
    title: 'Python for Data Science',
    excerpt: 'Explore how Python can be used for data analysis and visualization.',
    content: `
      <h2>Data Science with Python</h2>
      <p>Python is the most popular language for data science due to its simplicity and powerful libraries.</p>
      
      <h3>Essential Libraries</h3>
      <ul>
        <li>Pandas - Data manipulation</li>
        <li>NumPy - Numerical computing</li>
        <li>Matplotlib - Data visualization</li>
      </ul>
      
      <h3>Getting Started</h3>
      <p>Begin with basic data analysis tasks like reading CSV files, cleaning data, and creating simple visualizations.</p>
      
      <p>Practice with real datasets to gain hands-on experience in data science.</p>
    `,
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2024-01-10',
    author: 'Deekshith N',
    category: 'Data Science'
  },
  {
    id: '4',
    title: 'Career Tips for Tech Students',
    excerpt: 'Essential advice for students looking to build a successful career in technology.',
    content: `
      <h2>Building Your Tech Career</h2>
      <p>Starting a career in technology can be exciting but also challenging. Here are some tips to help you succeed.</p>
      
      <h3>Key Skills to Develop</h3>
      <ul>
        <li>Programming fundamentals</li>
        <li>Problem-solving abilities</li>
        <li>Communication skills</li>
      </ul>
      
      <h3>Building Your Portfolio</h3>
      <p>Create projects that showcase your skills. Include a variety of projects that demonstrate different aspects of your abilities.</p>
      
      <p>Network with other professionals, attend tech events, and never stop learning new technologies.</p>
    `,
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2024-01-08',
    author: 'Deekshith N',
    category: 'Career'
  }
];

export const categories = ['All', 'AI/ML', 'Web Development', 'Data Science', 'Career'];