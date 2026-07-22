export interface Profile {
  name: string;
  role: string;
  base: string;
  tagline: string[];
  summary: string;
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
  tag: string;
  title: string;
  description: string;
  stack: string[];
}

export const profile: Profile = {
  name: "Parikshith",
  role: "Backend Engineer",
  base: "HYD.IN / DEV SUPPORT",
  tagline: ["Debugging Production,", "Shipping Systems."],
  summary:
  "Associate Software Engineer at SplashBI with a passion for designing scalable backend systems, cloud-native applications, and AI-powered solutions. Experienced in production debugging, Oracle SQL optimization, and backend development, while continuously building expertise in distributed systems, microservices, AWS, and modern AI technologies. Committed to creating software that is reliable, maintainable, and capable of solving real-world engineering challenges.",
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
  { label: "Languages", value: "Java, SQL, JavaScript" },
  { label: "Backend", value: "Spring Boot, REST APIs" },
  { label: "Data", value: "Oracle SQL, PostgreSQL, MySQL, Redis" },
  { label: "Infra", value: "Docker, Kafka, AWS" },
  { label: "Daily work", value: "Production debugging, query optimization" },
  { label: "Currently", value: "MS in CS/AI research + backend systems depth" },
];

export const projects: Project[] = [
  {
    tag: "CAPSTONE / IN PROGRESS",
    title: "Global Food Delivery Backend",
    description:
      "A year-long distributed systems build: order sagas, payment idempotency, and event-driven architecture across services.",
    stack: ["Java", "Spring Boot", "Kafka", "Redis", "Docker", "AWS"],
  },
  {
    tag: "SECURITY",
    title: "Oracle SQL Security Audit System",
    description:
      "Automated auditing of query patterns and access paths to surface security gaps across production Oracle databases.",
    stack: ["Oracle SQL", "PL/SQL", "Automation"],
  },
  {
    tag: "MACHINE LEARNING",
    title: "Personality-Aware Recommendation Engine",
    description:
      "A product recommendation system that adapts suggestions based on inferred personality signals rather than purchase history alone.",
    stack: ["Python", "ML", "Recommender Systems"],
  },
  {
    tag: "PERSONAL PRODUCT",
    title: "Dayflow",
    description:
      "A dark-mode habit tracker shipped as both a web app and a companion Excel workbook — streaks, heatmaps, and daily structure.",
    stack: ["HTML/CSS/JS", "Design Systems"],
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

export interface ResearchItem {
  type: string;
  title: string;
  date: string;
  description: string;
  link?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

export const skillCategories = [
  {
    category: "Programming Languages",
    items: [
      "Java",
      "Python",
      "SQL",
      "JavaScript",
      "TypeScript",
    ],
  },

  {
    category: "Backend Development",
    items: [
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "REST APIs",
      "Microservices",
      "Hibernate",
      "JPA",
      "JDBC",
      "Authentication",
      "JWT",
      "OAuth2",
    ],
  },

  {
    category: "Data Structures & Algorithms",
    items: [
      "Arrays",
      "Strings",
      "Linked Lists",
      "Stacks",
      "Queues",
      "Hashing",
      "Binary Search",
      "Trees",
      "BST",
      "Graphs",
      "Greedy",
      "Recursion",
      "Dynamic Programming",
    ],
  },

  {
    category: "Databases",
    items: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Database Design",
      "Indexing",
      "Transactions",
      "Normalization",
      "Query Optimization",
    ],
  },

  {
    category: "Cloud (AWS)",
    items: [
      "EC2",
      "S3",
      "IAM",
      "VPC",
      "Route 53",
      "CloudFront",
      "Lambda",
      "RDS",
      "DynamoDB",
      "CloudWatch",
    ],
  },

  {
    category: "DevOps",
    items: [
      "Linux",
      "Shell Scripting",
      "Git",
      "GitHub",
      "Docker",
      "GitHub Actions",
      "Jenkins",
      "Terraform",
      "Kubernetes",
      "CI/CD",
    ],
  },

  {
    category: "System Design",
    items: [
      "Distributed Systems",
      "Scalability",
      "High Availability",
      "Caching",
      "Load Balancing",
      "Reverse Proxy",
      "CDN",
      "API Gateway",
      "Event-Driven Architecture",
      "CAP Theorem",
      "Consistency Models",
    ],
  },

  {
    category: "Messaging & Infrastructure",
    items: [
      "Kafka",
      "RabbitMQ",
      "Redis",
      "Elasticsearch",
      "Service Discovery",
    ],
  },

  {
    category: "AI Integration",
    items: [
      "FastAPI",
      "OpenAI API",
      "Gemini API",
      "Anthropic API",
      "Embeddings",
      "RAG",
      "Prompt Engineering",
      "Tool Calling",
      "AI Agents",
      "Pinecone",
      "ChromaDB",
      "FAISS",
    ],
  },

  {
    category: "Tools & Practices",
    items: [
      "Postman",
      "HTTP",
      "HTTPS",
      "DNS",
      "JSON",
      "Testing",
      "Logging",
      "Monitoring",
      "Git",
      "GitHub",
    ],
  },
];

export const experiences: Experience[] = [
  {
    role: "Associate Software Engineer — Product Support",
    company: "SplashBI",
    period: "Aug 2025 — Present",
    location: "Hyderabad, India",
    points: [
      "Debug and resolve production issues across a SaaS Business Intelligence platform, ensuring timely delivery of fixes for enterprise clients.",
      "Investigate backend services and application workflows to identify root causes using logs, debugging tools, and database analysis.",
      "Optimize complex Oracle SQL queries to improve performance and reduce execution time for customer-facing reports and dashboards.",
      "Develop and validate code fixes in collaboration with engineering teams, following Git-based version control and code review workflows.",
      "Work closely with developers, QA engineers, and support teams to reproduce issues, verify resolutions, and maintain high product reliability.",
      "Provide technical support for production environments while maintaining service quality and meeting customer SLA requirements.",
    ],
  },
];

export const researchItems: ResearchItem[] = [
  {
    type: "RESEARCH INTEREST",
    title: "Distributed order sagas & failure recovery",
    date: "2026",
    description:
      "Studying how saga orchestration patterns handle partial failure in distributed order/payment systems — feeding into the Global Food Delivery Backend capstone.",
  },
  {
    type: "WRITE-UP",
    title: "Add your first technical write-up here",
    date: "TBD",
    description:
      "A short piece on an SQL optimization case, a production incident, or a systems concept — replace with a real one when ready.",
    link: "#",
  },
];

export const certifications: Certification[] = [
  {
    title: "Add certification name",
    issuer: "Issuing body",
    date: "Year",
    link: "#",
  },
  // Duplicate this block for each real certification.
];