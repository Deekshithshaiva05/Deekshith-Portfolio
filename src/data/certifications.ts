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
    title: 'AI Essentials: Introduction to Artificial Intelligence',
    organization: 'Udemy (MTF Institute of Management, Technology and Finance)',
    description: ' Completion of a foundational course introducing key concepts in Artificial Intelligence.',
    issueDate: 'November 20, 2024',
    url: 'https://ude.my/UC-c1226a71-ca23-479f-9fa9-d0eaf1d75bc0',
    type: 'url'
  },
  {
    title: "Python and Artificial Intelligence",
    organization: "Google Developer Student Clubs & DevTown",
    description: "Successfully completed a 7-day bootcamp with DevTown on Python and Artificial Intelligence.",
    issueDate: "",
    url: "https://cert.devtown.in/verify/ZVcWmd",
    type: "url"
  },

  {
    title: 'Data Analysis with Pandas and Python',
    organization: 'Infosys springboard',
    description: 'Completed a hands-on course focused on data analysis using Python and the Pandas library.Learned data cleaning, manipulation, and visualization techniques on real-world datasets.Developed analytical skills to derive insights and build efficient data workflows.',
    issueDate: 'December 18, 2024',
    image: '/images/Data_Analysis_Certificate_Page_1.jpg',
    type: 'image'
  }
];