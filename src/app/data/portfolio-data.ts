export interface Project {
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  githubLink: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const PROJECTS: Project[] = [
  {
  title: 'Urban Traffic Management Platform',
  description:
    'A distributed microservices-based platform for managing and reporting urban traffic incidents in real time, featuring interactive map visualization, authentication, and containerized deployment.',
  techStack: [
    'NestJS',
    'GraphQL',
    'Apollo Server',
    'Next.js',
    'React',
    'PostgreSQL',
    'TypeORM',
    'Docker',
    'JWT',
    'Leaflet',
    'GitHub Actions'
  ],
  features: [
    'Microservices Architecture',
    'GraphQL API Gateway',
    'JWT Authentication',
    'Role-based Access Control',
    'Interactive Map Visualization',
    'Real-time Incident Reporting',
    'Admin Dashboard',
    'Docker Containerization',
    'CI/CD Pipeline',
    'Notification System'
  ],
  githubLink: 'https://github.com/wiem-b-salem/ProjetServicesWeb'
  },

  {
    title: 'Big Data Analytics Pipeline',
    description:
      'An end-to-end Big Data processing pipeline built for large-scale data ingestion, distributed processing, storage, and visualization.',
    techStack: [
      'Apache Spark',
      'Hadoop HDFS',
      'PostgreSQL',
      'Python',
      'Power BI',
      'Docker'
    ],
    features: [
      'Distributed Data Processing',
      'HDFS Storage',
      'Spark ETL Jobs',
      'Data Visualization Dashboard',
      'Automated Data Pipeline',
      'Containerized Environment'
    ],
    githubLink: 'https://github.com/wiem-b-salem/Big-Data-Analytics-Pipeline/tree/main'
  },

  {
    title: 'TuniWay',
    description:
      'A tourism exploration platform designed to simplify navigation and discovery across Tunisia through interactive and user-oriented features.',
    techStack: [
      'Angular',
      'Spring Boot',
      'MongoDB'
    ],
    features: [
      'User Authentication',
      'Chat System',
      'AI Chatbot',
      'Tourism Discovery',
      'Interactive Navigation'
    ],
    githubLink: 'https://github.com/wiem-b-salem/Tuniway'
  },

  {
    title: 'TravelTun',
    description:
      'A multi-platform tourism application for discovering local heritage and booking travel experiences with an integrated administration dashboard.',
    techStack: [
      'Flutter',
      'Firebase',
      'Flask'
    ],
    features: [
      'Booking System',
      'User Reviews',
      'Admin Dashboard',
      'User Management',
      'Location Management',
      'Payment Integration',
      'Notification System',
      'Chat System'
    ],
    githubLink: 'https://github.com/wiem-ben-salem/traveltun'
  },

  {
    title: 'School Management System',
    description:
      'A backend-focused academic management system designed to manage students, teachers, scheduling, and school operations.',
    techStack: [
      'Python',
      'PostgreSQL',
      'CLI Interface'
    ],
    features: [
      'Role-based Access Control',
      'Grade Tracking',
      'Attendance Management',
      'Report Generation',
      'Student Management',
      'Teacher Management',
      'Course Management',
      'Enrollment Management',
      'Automatic Timetable Generation'
    ],
    githubLink: 'https://github.com/wiem-ben-salem/school-management'
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: 'Languages',
    skills: [
      'Python',
      'JavaScript',
      'TypeScript',
      'Java',
      'C++',
      'C#'
    ]
  },
  {
    category: 'Frameworks & Technologies',
    skills: [
      'Angular',
      'Flutter',
      '.NET / ASP.NET Core',
      'Spring Boot',
      'Node.js',
      'Next.js',
      'GraphQL'
    ]
  },
  {
    category: 'Databases',
    skills: [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Firebase'
    ]
  },
  {
    category: 'Big Data & Analytics',
    skills: [
      'Apache Spark',
      'Hadoop HDFS',
      'Power BI'
    ]
  },
  {
    category: 'Tools & DevOps',
    skills: [
      'Git',
      'GitHub',
      'Docker'
    ]
  },
  {
    category: 'Operating Systems',
    skills: [
      'Linux (Ubuntu, Debian)',
      'Windows'
    ]
  },
  {
    category: 'Project Management Tools',
    skills: [
      'Jira',
      'Trello',
      'Notion'
    ]
  }
];

export const EXPERIENCE = [
  {
    company: 'BeeCoders',
    role: 'End-of-Studies Internship',
    duration: '02/2024-04/2024',
    description: 'Developed a Flutter mobile application with a web-based admin interface and integrated Firebase services for backend functionality and real-time features.'
  }
];

export type LearningItemKind = 'technology' | 'certification';

export interface LearningFocus {
  title: string;
  kind: LearningItemKind;
  detail: string;
  /** Optional link (e.g. course, badge, or exam verification). */
  linkUrl?: string;
  linkLabel?: string;
}

export const LEARNING: LearningFocus[] = [
  {
    title: 'Python Certifications (FreeCodeCamp & PCAP Preparation)',
    kind: 'certification',
    detail: '.'
  },
  {
    title: 'AWS Cloud Fundamentals',
    kind: 'certification',
    detail: 'Core services, IAM, and cost-aware architecture in preparation for a cloud cert.',
    linkUrl: 'https://aws.amazon.com/training/',
    linkLabel: 'Training hub'
  },
  {
    title: 'System design basics',
    kind: 'technology',
    detail: 'Scalability, caching, and API design for larger applications.'
  }
];

export const PERSONAL_INFO = {
  name: 'Wiem Ben Salem',
  title: 'Software Engineering Student',
  tagline: 'Building structured and scalable software systems.',
  about: 'I\'m passionate about designing and building structured, scalable, and user-oriented applications.\nWhat I enjoy most is creating systems that solve real organizational and management problems — applications where different components work together seamlessly. I’m particularly interested in full-stack development, application architecture, and building reliable digital solutions.\nCurious and motivated, I enjoy learning new technologies, improving my problem-solving skills, and turning complex ideas into practical solutions.',
  email: 'bensalemwi2m@example.com',
  linkedin: 'https://www.linkedin.com/in/wiem-ben-salem-302322295/',
  github: 'https://github.com/wiem-b-salem',
  cvUrl: 'cv/wiem-ben-salem-cv.pdf',
};
