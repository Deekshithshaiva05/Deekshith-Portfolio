export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  publishDate: string;
  category: string;
  author: string;
  readTime: number;
  featured?: boolean;
}

export interface BlogCategory {
  id: string;
  name: string;
  count: number;
}

export const blogCategories: BlogCategory[] = [
  { id: 'ai-ml', name: 'AI & Machine Learning', count: 8 },
  { id: 'web-development', name: 'Web Development', count: 12 },
  { id: 'data-science', name: 'Data Science', count: 6 },
  { id: 'programming', name: 'Programming', count: 15 },
  { id: 'tutorials', name: 'Tutorials', count: 10 },
  { id: 'career', name: 'Career Tips', count: 5 },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Machine Learning: A Beginner\'s Guide',
    slug: 'getting-started-machine-learning-beginners-guide',
    excerpt: 'Discover the fundamentals of machine learning, from basic concepts to practical applications. Perfect for beginners looking to enter the world of AI.',
    content: `
      <h2>Introduction to Machine Learning</h2>
      <p>Machine Learning (ML) is a subset of artificial intelligence that enables computers to learn and make decisions from data without being explicitly programmed for every task.</p>
      
      <h3>What is Machine Learning?</h3>
      <p>At its core, machine learning is about finding patterns in data and using those patterns to make predictions or decisions. Think of it as teaching a computer to recognize patterns the same way humans do, but at a much larger scale.</p>
      
      <h3>Types of Machine Learning</h3>
      <ul>
        <li><strong>Supervised Learning:</strong> Learning with labeled examples</li>
        <li><strong>Unsupervised Learning:</strong> Finding patterns in unlabeled data</li>
        <li><strong>Reinforcement Learning:</strong> Learning through trial and error</li>
      </ul>
      
      <h3>Getting Started</h3>
      <p>To begin your ML journey, start with Python and libraries like scikit-learn, pandas, and numpy. Practice with simple datasets and gradually work your way up to more complex problems.</p>
      
      <h3>Conclusion</h3>
      <p>Machine learning is an exciting field with endless possibilities. Start small, be consistent, and don't be afraid to experiment with different algorithms and datasets.</p>
    `,
    featuredImage: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    publishDate: '2024-01-15',
    category: 'ai-ml',
    author: 'Deekshith N',
    readTime: 8,
    featured: true
  },
  {
    id: '2',
    title: 'Building Responsive Web Applications with React and Tailwind CSS',
    slug: 'building-responsive-web-applications-react-tailwind',
    excerpt: 'Learn how to create beautiful, responsive web applications using React and Tailwind CSS. Includes best practices and real-world examples.',
    content: `
      <h2>Modern Web Development with React and Tailwind</h2>
      <p>Creating responsive web applications has never been easier with the combination of React and Tailwind CSS.</p>
      
      <h3>Why React and Tailwind?</h3>
      <p>React provides a component-based architecture that makes building complex UIs manageable, while Tailwind CSS offers utility-first styling that speeds up development.</p>
      
      <h3>Setting Up Your Project</h3>
      <p>Start by creating a new React project and installing Tailwind CSS. The setup process is straightforward and well-documented.</p>
      
      <h3>Best Practices</h3>
      <ul>
        <li>Use semantic HTML elements</li>
        <li>Implement mobile-first design</li>
        <li>Optimize for performance</li>
        <li>Follow accessibility guidelines</li>
      </ul>
    `,
    featuredImage: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    publishDate: '2024-01-12',
    category: 'web-development',
    author: 'Deekshith N',
    readTime: 12
  },
  {
    id: '3',
    title: 'Data Science Project: Predicting House Prices with Python',
    slug: 'data-science-predicting-house-prices-python',
    excerpt: 'A complete walkthrough of a data science project from data collection to model deployment. Learn practical skills for real-world applications.',
    content: `
      <h2>End-to-End Data Science Project</h2>
      <p>In this comprehensive guide, we'll build a house price prediction model using Python and machine learning techniques.</p>
      
      <h3>Project Overview</h3>
      <p>We'll use a dataset of house features to predict prices, covering the entire data science pipeline from exploration to deployment.</p>
      
      <h3>Tools and Libraries</h3>
      <ul>
        <li>Python</li>
        <li>Pandas for data manipulation</li>
        <li>Scikit-learn for machine learning</li>
        <li>Matplotlib and Seaborn for visualization</li>
      </ul>
      
      <h3>Key Steps</h3>
      <ol>
        <li>Data collection and cleaning</li>
        <li>Exploratory data analysis</li>
        <li>Feature engineering</li>
        <li>Model training and evaluation</li>
        <li>Model deployment</li>
      </ol>
    `,
    featuredImage: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    publishDate: '2024-01-10',
    category: 'data-science',
    author: 'Deekshith N',
    readTime: 15,
    featured: true
  },
  {
    id: '4',
    title: 'Python Best Practices: Writing Clean and Maintainable Code',
    slug: 'python-best-practices-clean-maintainable-code',
    excerpt: 'Improve your Python coding skills with these essential best practices. Learn to write code that is readable, efficient, and maintainable.',
    content: `
      <h2>Writing Better Python Code</h2>
      <p>Clean, maintainable code is crucial for any successful software project. Here are the best practices every Python developer should follow.</p>
      
      <h3>Code Style and Formatting</h3>
      <p>Follow PEP 8 guidelines for consistent code formatting. Use tools like Black and flake8 to automate code formatting and linting.</p>
      
      <h3>Documentation and Comments</h3>
      <p>Write clear docstrings and meaningful comments. Your future self and your teammates will thank you.</p>
      
      <h3>Error Handling</h3>
      <p>Implement proper exception handling to make your code robust and user-friendly.</p>
    `,
    featuredImage: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
    publishDate: '2024-01-08',
    category: 'programming',
    author: 'Deekshith N',
    readTime: 10
  },
  {
    id: '5',
    title: 'Career Guide: Breaking into Tech as a Self-Taught Developer',
    slug: 'career-guide-breaking-into-tech-self-taught-developer',
    excerpt: 'Practical advice for self-taught developers looking to land their first tech job. Includes portfolio tips, interview preparation, and networking strategies.',
    content: `
      <h2>Your Path to a Tech Career</h2>
      <p>Breaking into tech as a self-taught developer is challenging but absolutely achievable with the right strategy and mindset.</p>
      
      <h3>Building Your Skills</h3>
      <p>Focus on learning in-demand technologies and building real projects that demonstrate your abilities.</p>
      
      <h3>Creating a Strong Portfolio</h3>
      <p>Your portfolio is your most important asset. Include diverse projects that show your range of skills.</p>
      
      <h3>Networking and Job Search</h3>
      <p>Connect with other developers, attend meetups, and don't underestimate the power of social media for professional networking.</p>
    `,
    featuredImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    publishDate: '2024-01-05',
    category: 'career',
    author: 'Deekshith N',
    readTime: 7
  },
  {
    id: '6',
    title: 'Building a REST API with Flask: Complete Tutorial',
    slug: 'building-rest-api-flask-complete-tutorial',
    excerpt: 'Learn to build a robust REST API using Flask. Covers authentication, database integration, error handling, and API documentation.',
    content: `
      <h2>Flask REST API Development</h2>
      <p>Flask is a lightweight and flexible Python web framework perfect for building REST APIs. This tutorial covers everything you need to know.</p>
      
      <h3>Setting Up Flask</h3>
      <p>Start with a basic Flask application and gradually add features like routing, request handling, and response formatting.</p>
      
      <h3>Database Integration</h3>
      <p>Learn to integrate your API with databases using SQLAlchemy for robust data management.</p>
      
      <h3>Authentication and Security</h3>
      <p>Implement JWT authentication and other security best practices to protect your API.</p>
    `,
    featuredImage: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
    publishDate: '2024-01-03',
    category: 'tutorials',
    author: 'Deekshith N',
    readTime: 20
  }
];

export const recentPosts = blogPosts.slice(0, 4);
export const featuredPosts = blogPosts.filter(post => post.featured);