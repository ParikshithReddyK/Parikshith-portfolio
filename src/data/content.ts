export interface Profile {
  name: string;
  role: string;
  base: string;
  location: string;
  tagline: string[];
  summary: string;
  aboutSummary: string[];
  contactTagline: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
}

export interface Capability {
  label: string;
  value: string;
}

export interface Project {
  number: string;
  tag: string;
  title: string;
  description: string;
  stack: string[];
  link?: string;
}

export const profile: Profile = {
  name: "Parikshith",
  role: "Backend Engineer",
  base: "HYD.IN / DEV SUPPORT",
  location: "Hyderabad, India",
  tagline: ["Debugging Production,", "Shipping Systems."],
  summary:
    "Associate Software Engineer at SplashBI, where I resolve 20+ production issues a month — tracing root causes across Java, Spring Boot, and MySQL layers and shipping validated fixes. Outside work, I build distributed systems and AI-integrated backend projects, working toward graduate study in AI/ML and a career in backend and cloud engineering.",
  aboutSummary: [
    "Associate Software Engineer at SplashBI with 1 year of full-time experience, following an internship with the company. I work across Java, Spring Boot, databases, APIs, and production systems, investigating root causes and delivering validated fixes.",
    "Outside work, I build production-style systems and AI/ML applications — from workflow orchestration and microservices to intelligent resource scheduling and explainable recommendation systems. I'm currently deepening my expertise at the intersection of backend engineering, distributed systems, and AI/ML.",
  ],
  contactTagline: "Building toward graduate study in AI/ML and scalable systems.",
  email: "parikshithkumbam@gmail.com",
  github: "https://github.com/ParikshithReddyK",
  linkedin: "https://linkedin.com/in/parikshith-reddy/",
  resumeUrl: "#",
};

export const signalFeed: string[] = [
  "ORD-2291 saga committed · 14ms",
  "oracle query rewritten · -320ms",
  "cache hit ratio 98.4%",
  "prod incident #118 resolved",
  "idempotency key verified · payment",
  "kafka consumer lag: 0.2s",
];

export const capabilities: Capability[] = [
  { label: "Languages", value: "Java, Python, SQL, JavaScript" },
  { label: "Backend", value: "Spring Boot, Spring Security, JPA, Hibernate" },
  { label: "Distributed Systems", value: "Kafka, Redis, Quartz" },
  { label: "Databases", value: "MySQL, PostgreSQL" },
  { label: "Cloud & Infra", value: "AWS, Docker, GitHub Actions" },
  { label: "Daily work", value: "20+ production issues resolved monthly" },
  { label: "Focus", value: "Scalable systems + AI/ML" },
];

export const projects: Project[] = [
  {
    number: "01",
    tag: "WORKFLOW ENGINE",
    title: "Workflow Orchestration Engine",
    description:
      "Production-grade workflow engine with state machines, Kafka events, Quartz scheduling, and Redis locking.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Kafka", "Redis", "Quartz"],
    link: "https://github.com/ParikshithReddyK/workflow-orchestration-engine",
  },
  {
    number: "02",
    tag: "MACHINE LEARNING",
    title: "Personality-Aware Recommendation Platform",
    description:
      "ML-powered recommendation system with XGBoost, SHAP explainability, and a FastAPI backend.",
    stack: ["Java", "Spring Boot", "Python", "FastAPI", "XGBoost", "SHAP"],
    link: "https://github.com/ParikshithReddyK/personality-rec-platform",
  },
  {
    number: "03",
    tag: "AI SCHEDULING",
    title: "AI Resource Scheduler",
    description:
      "AI system that ranks employees for tasks based on skill match, availability, workload, and history — with SHAP explainability.",
    stack: ["Java", "Spring Boot", "Python", "scikit-learn", "SHAP", "FastAPI"],
    // link: "ADD_GITHUB_URL_HERE",
  },
  {
    number: "04",
    tag: "MICROSERVICES / 16 SERVICES",
    title: "Campus Workforce Management Platform",
    description:
      "16-service microservices platform for the full campus employment lifecycle — jobs, scheduling, attendance, payroll, and more.",
    stack: ["Java", "Spring Boot", "MySQL", "Microservices", "Docker"],
    link: "https://github.com/ParikshithReddyK/Backend-Projects",
  },
];

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
}

export interface Certification {
  title: string;
  platform?: string;
  issuer: string;
  date: string;
  link?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming",
    items: ["Java", "Python", "SQL", "JavaScript"],
  },
  {
    category: "Backend",
    items: [
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "REST APIs",
      "Microservices",
    ],
  },
  {
    category: "Distributed Systems",
    items: ["Apache Kafka", "Redis", "Quartz", "Event-Driven Architecture", "Inter-Service Communication"],
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "Database Design", "Indexing", "Transactions", "Query Optimization"],
  },
  {
    category: "Cloud & Infra",
    items: ["AWS", "Docker", "Docker Compose", "GitHub Actions", "Linux"],
  },
  {
    category: "AI / ML",
    items: ["Machine Learning", "scikit-learn", "XGBoost", "FastAPI", "SHAP", "LIME", "MLflow", "Explainable AI"],
  },
  {
    category: "Testing",
    items: ["JUnit 5", "Mockito", "Testcontainers", "PyTest"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Swagger / OpenAPI", "Postman"],
  },
];

export const experiences: Experience[] = [
  {
    role: "Associate Software Engineer — Product Support",
    company: "SplashBI",
    period: "Aug 2025 — Present",
    location: "Hyderabad, India",
    points: [
      "Investigate and resolve 20+ production issues per month across a SaaS BI platform.",
      "Diagnose issues using Java, Spring Boot, MySQL/SQL, logs, HAR files, and Tomcat logs.",
      "Implement and validate fixes for defects, performance issues, and enhancements.",
      "Optimized slow-running reports, reducing execution time from ~2 hours to 1 hour.",
      "Investigated and fixed scheduling/timezone discrepancies across database and server.",
      "Perform SQL tuning, query optimization, indexing, stored procedures, joins, and more.",
      "Collaborate with 3-5 engineers, QA, and product teams for defect resolution.",
      "Resolved an urgent client outage by analyzing logs during a live call and restoring service.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "SplashBI",
    period: "Jul 2025 — Aug 2025",
    location: "Hyderabad, India",
    points: [
      "Worked on issue analysis, bug fixes, and feature improvements under guidance.",
    ],
  },
];

export const certifications: Certification[] = [
  // Add your real certifications here, e.g.:
  // { title: "AWS Developer Associate", platform: "Udemy", issuer: "Amazon Web Services", date: "2024", link: "#" },
];