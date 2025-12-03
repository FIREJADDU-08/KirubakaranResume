export interface Skill {
  name: string;
  level: number; // 1-5
  icon: string;
  category: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    name: "Frontend Development",
    skills: [
      { name: "React", level: 5, icon: "⚛️", category: "Frontend" },
      { name: "TypeScript", level: 5, icon: "📘", category: "Frontend" },
      { name: "TailwindCSS", level: 5, icon: "🎨", category: "Frontend" },
      { name: "Next.js", level: 4, icon: "▲", category: "Frontend" },
      { name: "Vue.js", level: 4, icon: "💚", category: "Frontend" },
      { name: "HTML/CSS", level: 5, icon: "🌐", category: "Frontend" },
    ],
  },
  {
    name: "Backend Development",
    skills: [
      { name: "Node.js", level: 5, icon: "🟢", category: "Backend" },
      { name: "Express", level: 5, icon: "🚂", category: "Backend" },
      { name: "Python", level: 4, icon: "🐍", category: "Backend" },
      { name: "GraphQL", level: 4, icon: "♦️", category: "Backend" },
      { name: "REST APIs", level: 5, icon: "🔌", category: "Backend" },
      { name: "PostgreSQL", level: 4, icon: "🐘", category: "Backend" },
    ],
  },
  {
    name: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub", level: 5, icon: "🐙", category: "Tools" },
      { name: "Docker", level: 4, icon: "🐳", category: "Tools" },
      { name: "AWS", level: 4, icon: "☁️", category: "Tools" },
      { name: "Firebase", level: 4, icon: "🔥", category: "Tools" },
      { name: "Figma", level: 4, icon: "🎭", category: "Tools" },
      { name: "CI/CD", level: 3, icon: "🔄", category: "Tools" },
    ],
  },
  {
    name: "Soft Skills",
    skills: [
      { name: "Problem Solving", level: 5, icon: "🧩", category: "Soft" },
      { name: "Communication", level: 5, icon: "💬", category: "Soft" },
      { name: "Team Leadership", level: 4, icon: "👥", category: "Soft" },
      { name: "Project Management", level: 4, icon: "📊", category: "Soft" },
      { name: "Mentoring", level: 4, icon: "🎓", category: "Soft" },
      { name: "Creativity", level: 5, icon: "✨", category: "Soft" },
    ],
  },
];
