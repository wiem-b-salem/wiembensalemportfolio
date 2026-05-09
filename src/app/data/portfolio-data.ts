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
    title: 'TuniWay',
    description: 'A comprehensive platform designed to facilitate navigation and exploration within Tunisia.',
    techStack: ['Angular', 'Node.js', 'Express', 'MongoDB'],
    features: ['User Authentication', 'Interactive Maps', 'Real-time Updates'],
    githubLink: 'https://github.com/wiem-ben-salem/tuniway' // Assuming placeholder, user can update
  },
  {
    title: 'TravelTun',
    description: 'A tourism-focused web application for booking travel experiences and discovering local heritage.',
    techStack: ['React', 'Firebase', 'Tailwind CSS'],
    features: ['Booking System', 'User Reviews', 'Admin Dashboard'],
    githubLink: 'https://github.com/wiem-ben-salem/traveltun'
  },
  {
    title: 'School Management System',
    description: 'An internal management tool for educational institutions to track student progress, attendance, and grades.',
    techStack: ['Java', 'Spring Boot', 'MySQL', 'Angular'],
    features: ['Role-based Access Control', 'Grade Tracking', 'Attendance Management', 'Report Generation'],
    githubLink: 'https://github.com/wiem-ben-salem/school-management'
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Java', 'Python', 'HTML/CSS']
  },
  {
    category: 'Frameworks & Libraries',
    skills: ['Angular', 'React', 'Spring Boot', 'Tailwind CSS', 'Node.js']
  },
  {
    category: 'Databases & Tools',
    skills: ['MySQL', 'MongoDB', 'Git', 'Docker', 'Figma']
  }
];

export const EXPERIENCE = [
  {
    company: 'The Bridge (9antra)',
    role: 'Software Engineering Intern',
    duration: 'Summer 2023', // Placeholder, user can update
    description: 'Contributed to the development of internal tools and web applications, collaborating closely with the engineering team to optimize performance and implement new features.'
  }
];

export const PERSONAL_INFO = {
  name: 'Wiem Ben Salem',
  title: 'Software Engineering Student',
  tagline: 'Interested in Web Development & Cybersecurity',
  about: 'I am a passionate Software Engineering student with a strong focus on building responsive, user-friendly web applications and exploring the fascinating world of cybersecurity. I love transforming complex problems into simple, beautiful, and intuitive designs. When I am not coding, you can find me reading up on the latest tech trends or contributing to open-source projects.',
  email: 'bensalemwi2m@example.com', // Placeholder
  linkedin: 'https://www.linkedin.com/in/wiem-ben-salem-302322295/',
  github: 'https://github.com/wiem-b-salem'
};
