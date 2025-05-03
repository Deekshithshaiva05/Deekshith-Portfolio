import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'car-price-prediction',
    title: 'CAR PRICE PREDICTION ANALYSIS',
    description: 'Accurately predicting the price of a used car is a complex task due to the numerous factors involved. Manual methods or basic tools often result in significant errors, either undervaluing or overvaluing vehicles.This inconsistency poses challenges for both buyers and sellers, impacting market trust and efficiency.',
    image: 'images/Car.png',
    technologies: ['Python','XGBoost','Random Forest','Linear Regression','Flask','Pandas','NumPy','Machine Learning','Version Control(Git,GitHub)','HyperParameter Tuning','CatBoost Regressor','Forntend development(HTML,CSS,JS)'],
    githubUrl: 'https://github.com/Deekshithshaiva05/USED_CAR_PRICE_PREDICTION.git',
    featured: true,
    details: 'The process of buying and selling used cars has become increasingly dynamic, with buyers seeking value for money and sellers aiming for competitive pricing.Factors such as car brand, model, year of manufacture, mileage, and overall condition significantly influence the market value of a vehicle.Accurate price estimation plays a vital role in bridging the gap between buyers and sellers, ensuring fair and transparent transactions.Machine learning techniques offer innovative solutions by analyzing these factors to predict car prices with high accuracy.The CatBoosting Regressor achieves the highest accuracy with an R2R^2 R2-Score of 0.9437, followed closely by XGBoost (0.9414) and Random Forest (0.9400). ',
  },
  {
  id: "medicine-recommendation-system",
  title: "Medicine Recommendation System",
  description: "A machine learning-based system that recommends the most suitable medicines based on symptoms and medical conditions, helping healthcare professionals in quick decision-making. The system analyzes user inputs such as symptoms, medical history, and other relevant factors, and leverages a trained machine learning model to suggest potential medications. This tool can help doctors and pharmacists make more informed decisions, improving diagnosis efficiency and reducing human error in treatment planning. By utilizing a comprehensive database of medicines, dosages, and side effects, the system also offers alternative recommendations in case of contraindications or allergies, ensuring safer healthcare practices.",
  image: "images/medicine.png",
  technologies: [
    "Python",
    "Machine Learning",
    "Flask",
    "scikit-learn",
    "Pandas",
    "NumPy",
    "Data Analysis",
    "Data Preprocessing",
    "Feature Engineering",
    "Model Training and Evaluation",
    "Natural Language Processing (NLP)",
    "Model Deployment (Flask for web-based application)",
    "Hyperparameter Tuning",
    "Data Visualization",
    "Version Control (Git)"
  ],
  githubUrl: "https://github.com/username/ai-traffic-analysis",
  featured: true,
  details:"This project involves developing a machine learning model that suggests the most appropriate medicines based on a users symptoms, medical conditions, and personal health data. The system is trained on a large dataset of historical medical records, including information about symptoms, diagnoses, treatment protocols, and prescribed medications. By analyzing this data, the model identifies patterns and correlations, allowing it to recommend the best course of action for the user. The system allows users to input their symptoms and medical conditions through an intuitive web interface built with Flask, which then processes this input and generates tailored medicine recommendations. The model not only suggests the most appropriate medications but also provides dosage information, potential side effects, and possible drug interactions, ensuring a safer and more informed decision-making process. Key features of the system include personalized medicine recommendations based on symptoms and medical history, real-time updates as new medical knowledge becomes available, and alerts for potential drug interactions. The user-friendly interface allows for easy symptom entry, while the system remains scalable to support a broader range of conditions and treatments. Being data-driven, it relies on accurate machine learning algorithms to maintain reliability. The recommendation system leverages scikit-learn for training various models, and uses Pandas and NumPy for efficient data handling. To ensure high accuracy, preprocessing steps like normalization and imputation are applied. The application also includes a feedback loop where healthcare professionals can evaluate suggestions, which helps refine future predictions. By integrating real-time medical data and maintaining adaptability, this solution supports faster diagnoses and reduces human error. The backend is secured, maintains patient confidentiality, and is designed for scalability in real-world clinical environments, making it a reliable asset for digital healthcare advancement.",
  },
];