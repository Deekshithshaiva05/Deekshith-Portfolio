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
    title: 'Getting Started with Machine Learning',
    excerpt: 'Learn the basics of machine learning and how to get started with your first ML project.',
    content: `
      <h2>Introduction to Machine Learning</h2>
      <p>Machine Learning is a powerful tool that allows computers to learn from data without being explicitly programmed.</p>
      
      <h3>What You'll Learn</h3>
      <ul>
        <li>Basic ML concepts</li>
        <li>Popular algorithms</li>
        <li>Practical applications</li>
      </ul>
      
      <h3>Getting Started</h3>
      <p>Start with Python and libraries like scikit-learn, pandas, and numpy. Practice with simple datasets first.</p>
      
      <p>Machine learning is an exciting field with endless possibilities. Take it step by step and practice regularly.</p>
    `,
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2024-01-15',
    author: 'Deekshith N',
    category: 'AI/ML'
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