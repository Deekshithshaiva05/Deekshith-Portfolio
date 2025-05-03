import { Experience } from '../types';

export const experienceData: Experience[] = [
  {
    title: 'Software Intern',
    company: 'CodSoft',
    location: 'Remote',
    startDate: 'July 2024',
    endDate: 'Sep 2024',
    description: [
      'Developed and maintained Python-based applications for internal projects',
      'Worked on backend development using Django for web applications',
      'Assisted in the design and implementation of data-driven features',
      'Collaborated with senior developers to optimize code for performance and scalability',
      'Participated in daily standups and sprint planning to improve project timelines',
      'Contributed to bug fixes, feature enhancements, and code reviews'
    ],
    technologies: ['Python', 'Django', 'Backend Development', 'Web Applications','Agile Methodology']
  },
  {
    title: 'Participant',
    company: 'Various Hackathons and Competitions',
    location: 'Multiple Locations',
    startDate:'2023',
    current: true,
    description: [
      'Actively participated in several hackathons and technical competitions, including Tech Tonic 2024,hacksprint 2024 and others',
      'Collaborated with diverse teams to develop AI, ML, and software-driven solutions for real-world problems',
      'Worked on projects ranging from machine learning models to innovative software applications, demonstrating creativity and technical expertise',
      'Contributed to project ideation, coding, testing, and final presentations, consistently delivering results within tight deadlines'
    ],
    technologies: ['Python', 'Teamwork', 'Problem Solving', 'AI Solutions', 'Machine Learning']
  }
];