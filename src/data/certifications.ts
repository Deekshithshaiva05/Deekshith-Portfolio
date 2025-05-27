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
    title: "DevTown x GDSC – Instagram Clone",
    organization: "DevTown & Google Developer Student Clubs (GDSC), Giet University",
    description: "Deekshith N successfully completed a 7-day bootcamp on building an Instagram Clone using HTML and CSS. The project-based learning approach focused on frontend development principles, responsive design, and real-world layout replication using web technologies.",
    issueDate: "",
    url: "https://www.cert.devtown.in/verify/ZWrdQA",
    type: "url"
  },

  {
    title: 'Data Analysis with Pandas and Python',
    organization: 'Infosys springboard',
    description: 'Completed a hands-on course focused on data analysis using Python and the Pandas library.Learned data cleaning, manipulation, and visualization techniques on real-world datasets.Developed analytical skills to derive insights and build efficient data workflows.',
    issueDate: 'December 18, 2024',
    image: '/images/Data_Analysis_Certificate_Page_1.jpg',
    type: 'image'
  },
  {
    title: "Explore Machine Learning with TensorFlow",
    organization: "Infosys Springboard",
    description: "This course provided in-depth knowledge and hands-on experience with machine learning concepts using TensorFlow. It covered key topics such as neural networks, model training, and real-world AI applications.",
    issueDate: "July 28, 2024",
    image: "/images/Explore ML with TensorFlow.png",
    type: "image"
  },
  {
    title: "Internship Certificate",
    organization: "Codsoft",
    description: "Deekshith N was recognized as a Contributor in the Social Summer of Code program. This acknowledges his active participation and contributions to open-source projects, fostering collaborative development and learning within a socially impactful coding initiative.",
    issueDate: "MAY 10, 2025",
    image: "/images/codsoft.png",
    type: "image"
  },
  {
    title: "Contributor Recognition",
    organization: "Social Summer of Code (SSOC)",
    description: "This certificate is awarded to Deekshith N in recognition of the successful completion of a one-month internship program in Python Programming conducted by Codsoft. During the internship period from 05/07/2024 to 05/08/2024, the intern demonstrated dedication to learning and applying core Python concepts.",
    issueDate: "August 8, 2024",
    image: "/images/SSOC.png",
    type: "image"
  },
  {
    title: "Tech Tonic Participation Certificate",
    organization: "Dayananda Sagar Academy of Technology & Management (DSATM)",
    description: "Awarded to Deekshith N for participating in Tech Tonic 2024, an event organized by the Department of Computer Science & Engineering at DSATM. The event was held on July 12, 13, and 14, 2024, and included sessions, workshops, and activities promoting technical innovation and collaboration.",
    issueDate: "July 14, 2024",
    image: "/images/TECH_TONIC.png",
    type: "image"
  },
  {
    title: "Flask Python Course",
    organization: "Great Learning Academy",
    description: "This certificate is presented to Deekshith N for successfully completing an online course on Flask Python. The course provided in-depth knowledge on web application development using Flask, covering routing, templates, and deployment practices.",
    issueDate: "October 2024",
    image: "/images/FLASK.png",
    type: "image"
  },
  {
    title: "Certificate of Achievement – Fundamentals of Agents",
    organization: "Hugging Face",
    description: "Deekshith N completed Unit 1: Foundations of Agents as part of the Hugging Face Agents Course. The course covered the basics of AI agents, prompting techniques, agent decision-making, and the ecosystem of tools around Hugging Face's agent framework.",
    issueDate: "May 1, 2025",
    image: "/images/Foundations of Agents.png",
    type: "image"
  }

];