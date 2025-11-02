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
      <p>RaagBot is a step toward democratizing access to space data by simplifying user interaction with complex datasets. Our team is motivated to continue improving this project and explore how it can contribute to research, education, and policy-making in India's space innovation journey.</p>
    `,
    image: '/images/baratiya anthariksha hackathon.png',
    date: '2025-09-18',
    category: 'AI/ML',
    author: 'Team Sigmoid (Deekshith N, Vinay S, Syed Farhaan)'
  },
  {
    id: '2',
    title: 'Participation in Tech Tonic 2024 & Development of Medicine Prediction & Health Care Assistant',
    excerpt: 'Participated in Tech Tonic 2024, conducted by the Department of Computer Science & Engineering at Dayananda Sagar Academy of Technology & Management, and also developed an AI-powered Health Care Web Application for disease prediction and medical assistance.',
    content: `
      <h2>Introduction</h2>
      <p>I am glad to share that I, <strong>Deekshith N</strong>, participated in <strong>Tech Tonic 2024</strong>, a flagship technical event organized by the <strong>Department of Computer Science & Engineering</strong> at <strong>Dayananda Sagar Academy of Technology & Management (DSATM)</strong>.</p>
  
      <h2>Event Details</h2>
      <p>The event was held on <strong>12th, 13th, and 14th July 2024</strong>, providing a platform for students to showcase their technical skills, creativity, and innovation.</p>
  
      <h2>My Experience</h2>
      <p>Participating in <strong>Tech Tonic 2024</strong> gave me exposure to various technical challenges and team-based activities. It was an enriching experience that enhanced my learning and collaborative skills.</p>
  
      <h2>Acknowledgement</h2>
      <p>The event was successfully conducted under the guidance of <strong>Dr. Kavitha</strong> (HOD, Department of CSE, DSATM) and <strong>Dr. Ravishankar M</strong> (Principal, DSATM).</p>
  
      <h2>Project: Medicine Prediction & Health Care Assistant</h2>
      <h3>📌 Overview</h3>
      <p>This project is an <strong>AI-powered Health Care Web Application</strong> that predicts diseases and recommends suitable <strong>medications, precautions, workouts, and diets</strong> based on patient symptoms. It also integrates <strong>speech recognition, emergency support, and chatbot assistance</strong>, making it a complete digital health support system.</p>
  
      <h3>🚀 Features</h3>
      <ul>
        <li>🧠 <strong>AI-based Prediction</strong> – Detect disease & recommend medications, precautions, workouts, and diets</li>
        <li>🎤 <strong>Speech Recognition</strong> – Input symptoms via voice</li>
        <li>💬 <strong>Chatbot Support</strong> – Interactive medical help & FAQs</li>
        <li>🚑 <strong>Emergency Page</strong>
          <ul>
            <li>Nearby hospitals & medical shops</li>
            <li>Doctor appointment booking</li>
            <li>Online medicine purchase</li>
            <li>Emergency contact system</li>
          </ul>
        </li>
      </ul>
  
      <p>🔗 More details and complete implementation can be found on GitHub: 
      <a href='https://github.com/Deekshithshaiva05/Medicine-prediction.git' target='_blank'>
      Medicine Prediction & Health Care Assistant</a>.</p>
  
      <h2>Conclusion</h2>
      <p>Being a part of Tech Tonic 2024 was an inspiring journey, motivating me to continue exploring innovative solutions. The development of the <strong>Medicine Prediction & Health Care Assistant</strong> project was another step in applying AI to real-world problems, combining healthcare with intelligent digital solutions.</p>
    `,
    image: '/images/TECH_TONIC.png',
    date: '2024-07-14',
    category: 'AI/ML',
    author: 'Deekshith N'
  },
  {
    id: '3',
    title: 'Conquering Consistency: 100 Days Streak Badge on LeetCode',
    excerpt: 'Earning the 100 Days Streak Badge on LeetCode is more than just a milestone — it a testament to persistence, logic, and the relentless pursuit of improvement in coding and problem-solving.',
    content: `
      <h2>Introduction</h2>
      <p>The journey to mastery begins with consistency. Earning the <strong>100 Days Streak Badge</strong> on <strong>LeetCode</strong> marks a huge personal milestone — 100 consecutive days of coding, problem-solving, and sharpening algorithmic thinking. It's not about perfection; it's about progress, one problem at a time.</p>
  
      <h2>The 100 Days Challenge</h2>
      <p>LeetCode challenges coders to think critically and build efficient solutions. Maintaining a streak for 100 days requires dedication and discipline — solving at least one problem every single day, no matter how busy the schedule gets. Each problem strengthens logical reasoning, boosts coding fluency, and builds a strong foundation in data structures and algorithms.</p>
  
      <h2>My Learning Journey</h2>
      <p>Over these 100 days, I explored problems ranging from simple arrays to complex graph algorithms and dynamic programming. Every solved problem brought new insights, from optimizing time complexity to refining edge-case handling. This consistency not only enhanced my problem-solving mindset but also made me more confident in tackling real-world challenges.</p>
  
      <h2>Why It Matters</h2>
      <ul>
        <li><strong>Consistency Builds Skill:</strong> Daily practice strengthens logic and speed.</li>
        <li><strong>Discipline Fuels Growth:</strong> A coding habit creates lasting progress beyond the streak.</li>
        <li><strong>Confidence Through Practice:</strong> Regular exposure to challenges transforms fear into familiarity.</li>
      </ul>
  
      <h2>Conclusion</h2>
      <p>The <strong>LeetCode 100 Days Streak Badge</strong> isn't just a recognition — it's proof of persistence, focus, and a growth mindset. Coding every day taught me that success isn't built overnight; it's earned line by line, problem by problem. The journey doesn't stop here — it continues toward new challenges, higher streaks, and greater goals.</p>
    `,
    image: '/images/100 days leetcode.gif',
    date: '2025-10-07',
    category: 'Career',
    author: 'Deekshith N'
  },
  {
    id: '4',
    title: 'Winning the Excellent Effort Award at Hack Fusion 1.0 – National Level Hackathon',
    excerpt: 'Team InnovByte won the Excellent Effort Award at Hack Fusion 1.0, a National Level Hackathon organized by Maharaja Institute of Technology, Mysore. Our project — Prompt Review & Enhancement Engine — is a powerful AI web app for prompt evaluation, safety filtering, and structured schema generation for LLMs.',
    content: `
      <h2>Introduction</h2>
      <p>I am thrilled to share that our team, <strong>Team InnovByte</strong>, secured the <strong>Excellent Effort Award 🏆</strong> at <strong>Hack Fusion 1.0</strong> — a National Level Hackathon organized by the <strong>Maharaja Institute of Technology, Mysore</strong>, held on <strong>27th & 28th September 2025</strong>.</p>

      <h2>Event Details</h2>
      <p><strong>Hack Fusion 1.0</strong> brought together innovative minds from across the country to solve real-world problems through technology. The event provided an exciting platform to collaborate, code, and create impactful solutions in just 36 hours of intense hacking.</p>

      <h2>Our Project: Prompt Review & Enhancement Engine</h2>
      <h3>📌 Overview</h3>
      <p>The <strong>Prompt Review & Enhancement Engine</strong> is an AI-powered web application designed to improve and validate prompts for Large Language Models (LLMs). It ensures clarity, correctness, and compliance while providing structured data outputs for intelligent interactions.</p>

      <h3>🚀 Key Features</h3>
      <ul>
        <li>✅ <strong>Prompt Review</strong> – Analyzes text or voice prompts for quality and clarity</li>
        <li>🧩 <strong>Grammar & Clarity Enhancement</strong> – Automatically fixes grammar and rephrases unclear text</li>
        <li>🔒 <strong>Safety Filtering</strong> – Detects and blocks sensitive or illegal terms</li>
        <li>⚙️ <strong>Prompt Categorization</strong> – Classifies prompts into <strong>BLOCK</strong>, <strong>NEEDS_FIX</strong>, or <strong>ALLOW</strong></li>
        <li>📂 <strong>Schema Generation</strong> – Produces <strong>ISTVON</strong> and <strong>COSTAR</strong> JSON schemas for structured LLM communication</li>
        <li>🔄 <strong>Multi-backend Support</strong> – Integrates with various AI backends like <strong>Rule-based, OpenAI, Gemini, Ollama, and DeepSeek</strong></li>
      </ul>

      <h2>Team InnovByte</h2>
      <p>Our success was a result of true teamwork and dedication. Every member contributed significantly to the project's development and presentation:</p>
      <ul>
        <li>👨‍💻 <strong>Vinay S</strong></li>
        <li>👨‍💻 <strong>Dhakshath UK</strong></li>
        <li>👨‍💻 <strong>Prajwal M</strong></li>
      </ul>

      <h2>Acknowledgement</h2>
      <p>We extend our heartfelt thanks to <strong>Srinath Rangaswamy Sir</strong> (Co-founder) and <strong>Sriniketh Sir</strong> of <strong>DigiBull.AI</strong> for evaluating our project and offering valuable insights and feedback. Their mentorship motivated us to refine our approach and enhance the system's overall design and functionality.</p>

      <h2>GitHub Repository</h2>
      <p>🔗 Explore the full project here: 
        <a href='https://github.com/Deekshithshaiva05/Prompt-Review-and-Enhancement-Engine.git' target='_blank'>
        Prompt Review & Enhancement Engine – GitHub Repository</a>.
      </p>

      <h2>Conclusion</h2>
      <p>Winning the <strong>Excellent Effort Award</strong> at Hack Fusion 1.0 was an incredible recognition for our hard work and innovation. It reinforced our belief in building safe, efficient, and intelligent AI tools. This milestone marks just the beginning — we're excited to take <strong>InnovByte AI</strong> even further and continue exploring the limitless possibilities of AI-driven development. 🚀</p>
    `,
    image: '/images/S_P-MITM.jpg',
    date: '2025-09-28',
    category: 'AI/ML',
    author: 'Deekshith N'
  },
  {
    id: '5',
    title: 'Participation in Symbiot-2025 & Development of Indian Sign Language (ISL) Recognition System',
    excerpt: 'Participated in Symbiot-2025, a national-level hackathon held at Vidyavardhaka College of Engineering, Mysuru, and developed an AI-powered Indian Sign Language (ISL) Recognition and Animation System to bridge communication gaps for the deaf and hard-of-hearing community.',
    content: `
      <h2>Introduction</h2>
      <p>I am delighted to share my experience participating in <strong>Symbiot-2025</strong>, a <strong>National-Level Hackathon</strong> organized by <strong>Vidyavardhaka College of Engineering (VVCE), Mysuru</strong>, held on <strong>May 8–9, 2025</strong>. It was an intense and inspiring 24-hour journey from idea to impactful prototype!</p>

      <h2>Team Details</h2>
      <p>Our team, <strong>AI PIONEER'S</strong>, consisted of passionate innovators — <strong>Syed Farhaan</strong>, <strong>Prashanth Singh</strong>, <strong>Shamanth M</strong>, and myself, <strong>Deekshith N</strong>. Together, we collaborated to create a meaningful AI solution addressing real-world communication challenges.</p>

      <h2>Project: Indian Sign Language (ISL) Recognition & Animation System</h2>
      <h3>📌 Overview</h3>
      <p>Our project aimed to bridge the communication gap for the <strong>deaf and hard-of-hearing community</strong> through the integration of <strong>AI, computer vision, and 3D animation</strong>. The system recognizes Indian Sign Language (ISL) gestures and visualizes them through a <strong>3D animated avatar</strong> that performs the corresponding signs.</p>

      <h3>🚀 Key Features</h3>
      <ul>
        <li>✔️ <strong>Gesture Detection</strong> – Recognizes and interprets Indian Sign Language hand movements using AI and computer vision</li>
        <li>🎞️ <strong>3D Avatar Animation</strong> – Animates a digital human model to perform signs like "Hello" and other words</li>
        <li>🧠 <strong>AI-Powered Interpretation</strong> – Employs deep learning models for accurate and real-time ISL gesture recognition</li>
        <li>💬 <strong>Accessible Communication</strong> – Bridges the gap between hearing and non-hearing individuals through an interactive, visual medium</li>
      </ul>

      <h3>🛠️ Tech Stack</h3>
      <ul>
        <li>Python for backend processing and AI modeling</li>
        <li>OpenCV for gesture detection and tracking</li>
        <li>Blender for 3D avatar design and animation</li>
        <li>TensorFlow / PyTorch for model training and inference</li>
      </ul>

      <h2>Experience</h2>
      <p>From ideation to implementation — everything happened within just <strong>24 hours</strong>. It was an incredible experience filled with brainstorming, coding, debugging, and creative problem-solving. The hackathon challenged us to think quickly, collaborate efficiently, and deliver a working prototype under time pressure.</p>

      <h2>GitHub Repository</h2>
      <p>🔗 Explore our work on GitHub: 
        <a href='https://lnkd.in/g-iDDdEr' target='_blank'>
        Indian Sign Language Recognition & Animation System</a>.
      </p>

      <h2>Acknowledgement</h2>
      <p>We extend our sincere gratitude to the organizers, mentors, and coordinators of <strong>Symbiot-2025</strong> for hosting such an engaging and well-structured event. Their guidance and encouragement played a crucial role in shaping our experience.</p>

      <h2>Conclusion</h2>
      <p><strong>Symbiot-2025</strong> was more than a hackathon — it was a transformative journey of teamwork, innovation, and impact. Our <strong>ISL Recognition & Animation System</strong> marks just the beginning of our commitment to making communication more inclusive through AI-driven solutions.</p>
    `,
    image: '/images/SYMBIOT.png',
    date: '2025-05-09',
    category: 'AI/ML',
    author: 'Deekshith N'
  },
  {
    id: '6',
    title: 'My Learning Journey through the Accenture Summer Internship 2025 Selection Process',
    excerpt: 'Participated in the Accenture Summer Internship 2025 selection process, completing all stages — from iAspire registration to the final virtual interview. The journey strengthened my technical, cognitive, and communication skills while offering valuable professional insights.',
    content: `
      <h2>Introduction</h2>
      <p>I had the opportunity to participate in the <strong>Accenture Summer Internship 2025</strong> selection process — a multi-stage journey that tested not only technical skills but also cognitive ability, problem-solving, and professional readiness. Though the final results are still awaited, the overall experience was truly enriching and transformative.</p>

      <h2>Journey Overview</h2>
      <p>The selection process spanned multiple stages, each designed to assess different aspects of a candidate's potential. Here's how my journey unfolded:</p>

      <h3>📌 Step 1: Registration via iAspire</h3>
      <p>The process began with registration on <strong>Accenture's iAspire platform</strong>, which officially marked the start of my internship journey. It provided access to essential learning modules and detailed instructions for the upcoming stages.</p>

      <h3>🎯 Step 2: Go for Gold Challenge</h3>
      <p>I participated in the <strong>Go for Gold Challenge</strong>, completing both <strong>L0 and L1 learning modules</strong> well before the submission deadline of <strong>20th January 2025</strong>. This challenge was designed to help students build foundational knowledge and earn experience points (XP) to qualify for the next round.</p>

      <h3>🧠 Step 3: Behavioural & Cognitive Assessment</h3>
      <p>On <strong>17th February 2025</strong>, I took the <strong>Behavioural and Cognitive Assessments</strong>, which evaluated problem-solving ability, logical reasoning, and professional personality traits. It was a unique opportunity to understand how companies like Accenture assess holistic candidate profiles.</p>

      <h3>💻 Step 4: Technical Assessment</h3>
      <p>The <strong>Technical Assessment</strong>, held on <strong>19th February 2025</strong>, focused on core computing concepts, database management, object-oriented programming, and software engineering fundamentals. This stage helped me strengthen my technical knowledge and apply theoretical learning in practical contexts.</p>

      <h3>👨‍💻 Step 5: Coding Assessment</h3>
      <p>In this round, I solved algorithmic problems under time constraints — testing my coding efficiency, logic-building, and debugging skills. The assessment provided valuable insight into the type of coding challenges expected in real-world software projects.</p>

      <h3>🎥 Step 6: Final Virtual Interview</h3>
      <p>The final stage was the <strong>Virtual Interview</strong> conducted on <strong>27th February 2025</strong>. It involved technical discussions, scenario-based questions, and a conversation about project experience, teamwork, and problem-solving approaches. The interview also emphasized communication clarity and analytical thinking.</p>

      <h2>Skills & Learning Outcomes</h2>
      <ul>
        <li>🧩 Strengthened technical fundamentals across core domains</li>
        <li>💬 Improved communication and interview-handling confidence</li>
        <li>🧠 Enhanced logical reasoning and cognitive adaptability</li>
        <li>🤝 Learned to stay consistent and motivated across a multi-stage selection process</li>
      </ul>

      <h2>Reflection</h2>
      <p>This experience was more than a selection process — it was a journey of growth. Every stage brought a new challenge and a chance to improve. It reinforced the importance of persistence, preparation, and a learning mindset in building a strong professional foundation.</p>

      <h2>Conclusion</h2>
      <p>Participating in the <strong>Accenture Summer Internship 2025</strong> process was a valuable milestone in my career development. Regardless of the final outcome, I am grateful for the exposure, the structured learning, and the insights I gained along the way. These lessons will continue to guide me as I take the next steps in my journey as a developer and lifelong learner.</p>
    `,
    image: '/images/Accenture.png',
    date: '2025-02-27',
    category: 'Career',
    author: 'Deekshith N'
  },
  {
  "id": "6",
  "title": "Contributing to Open Source Connect India 2025 – A Journey of Collaboration and Learning",
  "excerpt": "Participated as a Contributor in Open Source Connect India 2025, organized by NexFellow. The experience provided hands-on exposure to open-source collaboration, real-world problem-solving, and community-driven innovation.",
  "content": `
    <h2>Introduction</h2>
    <p>I’m delighted to share my experience as a <strong>Contributor</strong> at <strong>Open Source Connect India 2025</strong>, organized by <strong>NexFellow</strong>. The program, held from <strong>15th to 30th August 2025</strong>, brought together passionate developers, innovators, and contributors from across the country to collaborate on impactful open-source projects.</p>

    <h2>About the Event</h2>
    <p><strong>Open Source Connect India</strong> is an initiative aimed at empowering developers to learn, build, and contribute to real-world projects that make a difference. The event provided a unique blend of mentorship, teamwork, and hands-on contribution opportunities across diverse domains — from web development and AI to cloud and DevOps.</p>

    <h2>My Experience as a Contributor</h2>
    <p>Being part of this program was an eye-opening and inspiring experience. I collaborated with fellow contributors on open-source repositories, participated in code reviews, and contributed meaningful improvements to ongoing projects. The collaborative environment helped me enhance both my technical and soft skills.</p>

    <h3>💻 Key Learnings & Contributions</h3>
    <ul>
      <li>🧠 <strong>Enhanced Technical Skills</strong> – Gained practical experience in version control, collaborative coding, and project documentation through Git and GitHub.</li>
      <li>🤝 <strong>Collaborative Development</strong> – Worked with developers from different backgrounds, learning how to communicate effectively in distributed teams.</li>
      <li>🌍 <strong>Open-Source Culture</strong> – Understood the importance of transparency, community contribution, and continuous improvement in open-source ecosystems.</li>
      <li>🚀 <strong>Real-World Problem Solving</strong> – Contributed to codebases addressing real-world challenges, improving my debugging and critical thinking skills.</li>
    </ul>

    <h2>Event Impact</h2>
    <p>This experience reinforced my passion for open-source development and community collaboration. I realized that contributing to open-source projects is not just about code — it’s about creating accessible, inclusive technology that benefits everyone. The mentorship and feedback from industry experts helped me refine my approach to building scalable and maintainable software.</p>

    <h2>Conclusion</h2>
    <p><strong>Open Source Connect India 2025</strong> was more than an event — it was a community-driven learning experience that broadened my perspective as a developer. I’m grateful to <strong>NexFellow</strong> for organizing such an impactful initiative and to all the mentors and peers who made this journey memorable. This experience has strengthened my commitment to contributing to open-source and continuing my growth as a developer and collaborator.</p>

    <p>🌐 Learn more about the initiative: <a href='https://osconnect.org' target='_blank'>osconnect.org</a></p>
  `,
  "image": "/images/OPEN_SOURCE_CONNECT.png",
  "date": "2025-08-30",
  "category": "Open Source",
  "author": "Deekshith N"
  },

];

export const categories = ['All', 'AI/ML', 'Web Development', 'Data Science', 'Career'];