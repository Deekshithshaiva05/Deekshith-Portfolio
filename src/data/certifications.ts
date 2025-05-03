interface Certification {
  title: string;
  organization: string;
  description?: string;
  issueDate: string;
  url?: string;
  image?: string;
  type: 'url' | 'image';
}

export const certifications: Certification[] = [
  {
    title: 'Programming for Everybody (Getting Started with Python)',
    organization: 'by University of Michigan and offered through Coursera',
    description: 'An introductory Python course by the University of Michigan focusing on core programming concepts like variables, loops, conditionals, and functions.',
    issueDate: 'MAY 2024',
    url: 'https://www.coursera.org/account/accomplishments/certificate/VVK3UCBSUD8H',
    type: 'url'
  },
  {
    title: '5-Day Basics of AI Workshop',
    organization: 'Tech Vritti in partnership with Microsoft',
    description: 'This intensive workshop provided participants with a foundational understanding of Artificial Intelligence, covering key concepts, real-world applications, and hands-on practical exercises.',
    issueDate: 'Nov 2024',
    image: '/images/5-Day Basics_of_Al_Workshop.jpg',
    type: 'image'
  },
  {
    title: 'Machine Learning',
    organization: 'Kaggle Learn',
    description: 'Practical machine learning concepts, algorithms, and implementation using Python and scikit-learn.',
    issueDate: 'Aug 2024',
    url: 'https://example.com/cert3',
    type: 'url'
  }
];