export interface EducationItem {
  id: number;
  type: "degree" | "certification";
  title: string;
  institution: string;
  date: string;
  description: string;
}

export const education: EducationItem[] = [
  {
    id: 1,
    type: "degree",
    title: "Bachelor of Engineering in Computer Science",
    institution: "Indian Institute of Technology (IIT)",
    date: "2018 - 2022",
    description: "Graduated with distinction. Focus on full-stack development and software architecture.",
  },
  {
    id: 2,
    type: "degree",
    title: "Advanced Diploma in Web Development",
    institution: "Coursera & Udacity",
    date: "2021 - 2022",
    description: "Completed comprehensive full-stack development program with real-world projects.",
  },
  {
    id: 3,
    type: "certification",
    title: "AWS Certified Solutions Architect - Professional",
    institution: "Amazon Web Services",
    date: "2023",
    description: "Certified in designing scalable, reliable, and secure cloud architectures.",
  },
  {
    id: 4,
    type: "certification",
    title: "Google Cloud Professional Data Engineer",
    institution: "Google Cloud",
    date: "2023",
    description: "Expertise in designing and building data processing systems on Google Cloud Platform.",
  },
  {
    id: 5,
    type: "certification",
    title: "React Advanced Patterns",
    institution: "Egghead.io",
    date: "2022",
    description: "Advanced React patterns, hooks, and performance optimization techniques.",
  },
  {
    id: 6,
    type: "certification",
    title: "Full-Stack JavaScript Specialization",
    institution: "Frontend Masters",
    date: "2022",
    description: "Complete JavaScript ecosystem including Node.js, databases, and modern tooling.",
  },
];
