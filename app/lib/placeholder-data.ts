// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data


const employmentCenter = [
  {
    job_name: "Senior Software Engineer",
    salary: 130000,
    availability: 1,
    tags: ["JavaScript", "React", "Node.js", "AWS"],
    publishdate: "2024-04-01",
    job_detail: "We are seeking a Senior Software Engineer to lead the development of our next-generation web applications. In this role, you will design and implement scalable solutions, mentor junior developers, and collaborate closely with cross-functional teams to deliver high-quality products. The ideal candidate has extensive experience with JavaScript frameworks, cloud services like AWS, and a strong understanding of software architecture principles. You will play a crucial role in shaping the technical direction of our projects and ensuring best practices are followed throughout the development lifecycle.",
    contact_us: "senior.hr@company.com | +1-555-123-4567"
  },
  {
    job_name: "Marketing Manager",
    salary: 115000,
    availability: 1,
    tags: ["Marketing", "SEO", "Content Strategy", "Social Media"],
    publishdate: "2024-04-02",
    job_detail: "As a Marketing Manager, you will be responsible for developing and executing comprehensive marketing strategies that drive brand awareness and customer acquisition. You will oversee the creation of content, manage SEO initiatives, and coordinate social media campaigns to ensure consistent messaging across all channels. The ideal candidate has a proven track record in marketing management, strong analytical skills to measure campaign effectiveness, and the ability to lead a dynamic team. You will work closely with sales, product, and design teams to align marketing efforts with business goals.",
    contact_us: "marketing.manager@company.com | +1-555-234-5678"
  },
  {
    job_name: "Data Scientist",
    salary: 125000,
    availability: 1,
    tags: ["Data Science", "Machine Learning", "Python", "R"],
    publishdate: "2024-04-03",
    job_detail: "Join our team as a Data Scientist where you will analyze large datasets to uncover actionable insights that drive strategic decision-making. You will develop and deploy machine learning models, conduct statistical analyses, and create data visualizations to communicate findings to stakeholders. The ideal candidate has strong proficiency in Python and R, experience with machine learning frameworks, and a solid background in statistical modeling. You will collaborate with cross-functional teams to understand their data needs and deliver solutions that enhance our products and services.",
    contact_us: "datascience.hr@company.com | +1-555-345-6789"
  },
  {
    job_name: "UI/UX Designer",
    salary: 95000,
    availability: 1,
    tags: ["UI/UX", "Design", "Prototyping", "User Research"],
    publishdate: "2024-04-04",
    job_detail: "We are looking for a talented UI/UX Designer to enhance the user experience of our digital products. In this role, you will conduct user research, create wireframes and prototypes, and collaborate with developers to implement intuitive and visually appealing interfaces. The ideal candidate has a strong portfolio showcasing user-centered design, proficiency with design tools like Sketch and Figma, and excellent communication skills to articulate design decisions. You will play a key role in improving the overall user satisfaction and ease of use of our applications.",
    contact_us: "ux.design@company.com | +1-555-456-7890"
  },
  {
    job_name: "Human Resources Specialist",
    salary: 80000,
    availability: 0,
    tags: ["Human Resources", "Recruitment", "Employee Relations"],
    publishdate: "2024-04-05",
    job_detail: "As a Human Resources Specialist, you will manage various HR functions including recruitment, onboarding, and employee relations. You will work closely with hiring managers to identify staffing needs, conduct interviews, and facilitate the hiring process. Additionally, you will handle employee inquiries, coordinate training programs, and assist in the development of HR policies. The ideal candidate has a strong background in HR practices, excellent interpersonal skills, and the ability to handle sensitive information with discretion.",
    contact_us: "hr.specialist@company.com | +1-555-567-8901"
  },
  {
    job_name: "Financial Controller",
    salary: 140000,
    availability: 1,
    tags: ["Finance", "Accounting", "Budgeting", "Financial Reporting"],
    publishdate: "2024-04-06",
    job_detail: "We are seeking a Financial Controller to oversee all accounting operations, including the production of financial reports, maintenance of accounting records, and a comprehensive set of controls and budgets. You will manage the preparation of monthly, quarterly, and annual financial statements, ensure compliance with GAAP, and implement financial policies and procedures. The ideal candidate has extensive experience in financial management, strong analytical skills, and proficiency with accounting software. You will collaborate with executive leadership to provide financial insights and support strategic planning.",
    contact_us: "finance.controller@company.com | +1-555-678-9012"
  },
  {
    job_name: "Customer Success Manager",
    salary: 90000,
    availability: 1,
    tags: ["Customer Success", "Client Relations", "Account Management"],
    publishdate: "2024-04-07",
    job_detail: "Join our team as a Customer Success Manager, where you will ensure our clients achieve their desired outcomes using our products and services. You will build strong relationships with clients, provide training and support, and proactively address any issues to enhance customer satisfaction and retention. The ideal candidate has excellent communication skills, a customer-centric mindset, and experience in account management or customer support. You will work closely with sales, product, and support teams to deliver exceptional service and drive customer loyalty.",
    contact_us: "custsuccess@company.com | +1-555-789-0123"
  },
  {
    job_name: "DevOps Engineer",
    salary: 125000,
    availability: 1,
    tags: ["DevOps", "AWS", "CI/CD", "Automation"],
    publishdate: "2024-04-08",
    job_detail: "We are looking for a DevOps Engineer to streamline our software development and deployment processes. In this role, you will manage our infrastructure, automate workflows, and ensure the reliability and scalability of our applications. The ideal candidate has hands-on experience with AWS, CI/CD pipelines, containerization tools like Docker and Kubernetes, and scripting languages such as Python or Bash. You will collaborate with development and operations teams to optimize performance, implement best practices, and drive continuous improvement in our deployment processes.",
    contact_us: "devops.engineer@company.com | +1-555-890-1234"
  },
  {
    job_name: "Content Marketing Specialist",
    salary: 85000,
    availability: 0,
    tags: ["Content Marketing", "SEO", "Copywriting", "Social Media"],
    publishdate: "2024-04-09",
    job_detail: "As a Content Marketing Specialist, you will create and manage engaging content that drives traffic and fosters customer engagement. You will develop content strategies, write blog posts, manage social media channels, and optimize content for SEO to increase our online presence. The ideal candidate has strong writing skills, a good understanding of SEO best practices, and experience with content management systems. You will collaborate with designers, product teams, and other marketers to produce compelling content that aligns with our brand and business objectives.",
    contact_us: "content.marketer@company.com | +1-555-901-2345"
  },
  {
    job_name: "Sales Executive",
    salary: 95000,
    availability: 1,
    tags: ["Sales", "Lead Generation", "CRM", "Client Acquisition"],
    publishdate: "2024-04-10",
    job_detail: "Join our sales team as a Sales Executive, responsible for generating leads, building client relationships, and driving sales growth. You will identify potential customers, present our products and services, negotiate contracts, and close deals to meet or exceed sales targets. The ideal candidate has strong sales skills, experience with CRM software, and a proven track record in sales or business development. You will work closely with marketing and product teams to align strategies and ensure customer satisfaction throughout the sales cycle.",
    contact_us: "sales.exec@company.com | +1-555-012-3456"
  },
  {
    job_name: "Backend Developer",
    salary: 120000,
    availability: 1,
    tags: ["Backend Development", "Node.js", "API", "Databases"],
    publishdate: "2024-04-11",
    job_detail: "We are seeking a Backend Developer to design and build robust backend systems that power our applications. In this role, you will develop APIs, manage databases, and ensure the scalability and performance of our backend services. The ideal candidate has strong experience with Node.js, proficiency in database management (SQL and NoSQL), and a solid understanding of RESTful API design. You will collaborate with frontend developers, designers, and other stakeholders to deliver seamless and efficient solutions that meet our business requirements.",
    contact_us: "backend.dev@company.com | +1-555-123-4568"
  },
  {
    job_name: "Full Stack Developer",
    salary: 135000,
    availability: 1,
    tags: ["Full Stack", "JavaScript", "React", "Node.js"],
    publishdate: "2024-04-12",
    job_detail: "We are looking for a versatile Full Stack Developer to work on both front-end and back-end technologies. In this role, you will develop end-to-end features, ensuring seamless integration between the user interface and server-side logic. The ideal candidate has strong proficiency in JavaScript, experience with React for frontend development, and Node.js for backend services. You should be comfortable working with databases, RESTful APIs, and have a good understanding of software development best practices. You will collaborate with designers, product managers, and other developers to deliver high-quality, scalable applications.",
    contact_us: "fullstack.dev@company.com | +1-555-234-5679"
  },
  {
    job_name: "Mobile Application Developer",
    salary: 115000,
    availability: 1,
    tags: ["Mobile Development", "iOS", "Android", "Swift", "Kotlin"],
    publishdate: "2024-04-13",
    job_detail: "Join our mobile development team as a Mobile Application Developer, where you will design and build advanced applications for the iOS and Android platforms. You will collaborate with cross-functional teams to define, design, and ship new features. Proficiency in Swift and Kotlin is required, along with experience in developing mobile applications using modern frameworks. Strong understanding of mobile UI/UX principles and experience with RESTful APIs are essential for this role. You will also be responsible for maintaining code quality, organization, and automatization.",
    contact_us: "mobile.dev@company.com | +1-555-345-6780"
  },
  {
    job_name: "Cybersecurity Analyst",
    salary: 125000,
    availability: 1,
    tags: ["Cybersecurity", "Network Security", "Risk Assessment", "Incident Response"],
    publishdate: "2024-04-14",
    job_detail: "We are seeking a Cybersecurity Analyst to protect our organization's systems and data from cyber threats. In this role, you will monitor network security, conduct risk assessments, and respond to security incidents. The ideal candidate has strong knowledge of cybersecurity principles, experience with security tools such as firewalls and intrusion detection systems, and the ability to analyze and mitigate security vulnerabilities. You will work closely with IT and other departments to implement security measures and ensure compliance with industry standards and regulations.",
    contact_us: "cybersec.analyst@company.com | +1-555-456-7891"
  },
  {
    job_name: "Database Administrator",
    salary: 110000,
    availability: 1,
    tags: ["Database Management", "SQL", "PostgreSQL", "Performance Tuning"],
    publishdate: "2024-04-15",
    job_detail: "As a Database Administrator, you will manage and maintain our company's databases to ensure their performance, security, and reliability. Responsibilities include database design, implementation, configuration, tuning, and backup/recovery strategies. Proficiency in SQL and experience with database management systems like MySQL and PostgreSQL are required. Additionally, knowledge of database security practices and the ability to troubleshoot and resolve database-related issues are essential. You will collaborate with developers and other IT staff to optimize database performance and support application development.",
    contact_us: "db.admin@company.com | +1-555-567-8902"
  },
  {
    job_name: "Artificial Intelligence Engineer",
    salary: 150000,
    availability: 1,
    tags: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "Python"],
    publishdate: "2024-04-16",
    job_detail: "Join our AI team as an Artificial Intelligence Engineer, where you will develop and deploy machine learning models to solve complex business problems. You will work on data preprocessing, model training, evaluation, and optimization, as well as integrating AI solutions into our products. Proficiency in machine learning frameworks such as TensorFlow or PyTorch, strong programming skills in Python, and a solid understanding of deep learning algorithms are required. Experience with natural language processing or computer vision is a plus. You will collaborate with data scientists, engineers, and product managers to deliver innovative AI-driven solutions.",
    contact_us: "ai.engineer@company.com | +1-555-678-9013"
  },
  {
    job_name: "Blockchain Developer",
    salary: 145000,
    availability: 1,
    tags: ["Blockchain", "Solidity", "Smart Contracts", "Ethereum"],
    publishdate: "2024-04-17",
    job_detail: "We are looking for a Blockchain Developer to design, implement, and support blockchain-based applications. In this role, you will develop smart contracts, manage blockchain infrastructure, and ensure the security and scalability of blockchain solutions. Proficiency in Solidity and experience with blockchain platforms such as Ethereum are required. Additionally, a strong understanding of cryptographic principles and decentralized application (DApp) development is essential. You will collaborate with cross-functional teams to integrate blockchain technology into our existing systems and drive innovation in our products.",
    contact_us: "blockchain.dev@company.com | +1-555-789-0124"
  },
  {
    job_name: "Quality Assurance Engineer",
    salary: 90000,
    availability: 1,
    tags: ["Quality Assurance", "Testing", "Automation", "Selenium"],
    publishdate: "2024-04-18",
    job_detail: "As a Quality Assurance Engineer, you will be responsible for ensuring the highest quality of our software products through rigorous testing and validation. You will develop and execute test plans, write automated test scripts using tools like Selenium, and identify and document defects. The ideal candidate has experience with both manual and automated testing, strong analytical skills, and attention to detail. You will work closely with developers and product managers to understand requirements and contribute to the continuous improvement of our development processes.",
    contact_us: "qa.engineer@company.com | +1-555-890-1235"
  },
  {
    job_name: "Technical Support Specialist",
    salary: 85000,
    availability: 1,
    tags: ["Technical Support", "Customer Service", "Troubleshooting", "CRM"],
    publishdate: "2024-04-19",
    job_detail: "We are seeking a Technical Support Specialist to provide exceptional support to our customers. In this role, you will troubleshoot technical issues, assist with product usage, and ensure customer satisfaction through effective communication and problem-solving skills. The ideal candidate has experience with customer support software, a strong technical background, and excellent interpersonal skills. You will work closely with the engineering and product teams to resolve complex issues and provide feedback to improve our products and services.",
    contact_us: "tech.support@company.com | +1-555-901-2346"
  },
  {
    job_name: "Project Manager",
    salary: 135000,
    availability: 1,
    tags: ["Project Management", "Agile", "Scrum", "Leadership"],
    publishdate: "2024-04-20",
    job_detail: "We are looking for an experienced Project Manager to lead and manage our projects from inception to completion. In this role, you will define project scope, create detailed project plans, allocate resources, and ensure that projects are delivered on time and within budget. Proficiency in Agile methodologies and experience with project management tools like Jira or Trello are required. The ideal candidate has strong leadership skills, excellent communication abilities, and a proven track record of successfully managing complex projects. You will work closely with cross-functional teams to coordinate efforts and achieve project goals.",
    contact_us: "project.manager@company.com | +1-555-012-3457"
  }
];





export { employmentCenter };
