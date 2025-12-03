export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1460925895917-adf4e565db57?w=500&h=300&fit=crop",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "E-Commerce",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, team collaboration features, and analytics.",
    technologies: ["React", "Firebase", "TailwindCSS", "Redux"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "Productivity",
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "Machine learning-powered content generation tool with multiple AI models, template system, and batch processing.",
    technologies: ["React", "Python", "TensorFlow", "FastAPI", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1677442d019cecf8c16b95b3864e1db1c8b4cf11?w=500&h=300&fit=crop",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "AI/ML",
  },
  {
    id: 4,
    title: "Design System",
    description: "Comprehensive design system with 50+ components, documentation, accessibility standards, and Figma integration.",
    technologies: ["React", "Storybook", "TypeScript", "CSS-in-JS", "Figma"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "Design System",
  },
  {
    id: 5,
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with interactive charts, data visualization, and custom reporting features.",
    technologies: ["React", "D3.js", "Node.js", "GraphQL", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "Analytics",
  },
  {
    id: 6,
    title: "Social Media Platform",
    description: "Full-featured social platform with user profiles, messaging, feeds, notifications, and media sharing.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "AWS S3"],
    image: "https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=500&h=300&fit=crop",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "Social",
  },
];

export const categories = ["All", "E-Commerce", "Productivity", "AI/ML", "Design System", "Analytics", "Social"];
