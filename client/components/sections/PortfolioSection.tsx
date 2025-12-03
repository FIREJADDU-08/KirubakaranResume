import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: string;
  name: string;
  category: string;
  icon: string;
  bgColor: string;
  description: string;
  technologies: string[];
  links: { label: string; url: string; icon: string }[];
}

const projects: Project[] = [
  {
    id: "1",
    name: "BrainPulse",
    category: "Utilities",
    icon: "⚡",
    bgColor: "from-orange-500 to-orange-600",
    description:
      "A RESTful API backend built with Node.js, designed for high-performance data processing and real-time event handling.",
    technologies: ["api", "rest", "backend"],
    links: [
      { label: "Demo", url: "#", icon: "🎬" },
      { label: "GitHub", url: "#", icon: "🐙" },
      { label: "Repo", url: "#", icon: "📦" },
    ],
  },
  {
    id: "2",
    name: "MailM9",
    category: "Apps",
    icon: "✉️",
    bgColor: "from-purple-500 to-purple-600",
    description:
      "A cross-platform email client built with Flutter, providing efficient communication with an intuitive UI for managing emails.",
    technologies: ["flutter", "e-mail", "communication"],
    links: [
      { label: "Demo", url: "#", icon: "🎬" },
      { label: "GitHub", url: "#", icon: "🐙" },
    ],
  },
  {
    id: "3",
    name: "Light Blue",
    category: "Apps",
    icon: "📋",
    bgColor: "from-purple-400 to-purple-500",
    description:
      "A fully-featured productivity app developed with React Native, enabling users to organize tasks, notes, and projects across multiple devices.",
    technologies: ["react", "organization", "notes"],
    links: [
      { label: "Demo", url: "#", icon: "🎬" },
      { label: "GitHub", url: "#", icon: "🐙" },
    ],
  },
  {
    id: "4",
    name: "SmartCash",
    category: "Web",
    icon: "💰",
    bgColor: "from-blue-500 to-blue-600",
    description:
      "A finance website built using Next.js, allowing users to track budgets and manage their money with interactive charts and insights.",
    technologies: ["next.js", "finance", "money"],
    links: [
      { label: "Demo", url: "#", icon: "🎬" },
      { label: "GitHub", url: "#", icon: "🐙" },
    ],
  },
];

const categories = ["All", "Apps", "Web", "Utilities"];

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const projectCount = (cat: string) => {
    if (cat === "All") return projects.length;
    return projects.filter((p) => p.category === cat).length;
  };

  return (
    <section id="portfolio" className="py-20 border-t border-border">
      <SectionHeading subtitle="Take a look at">
        My Portfolio
      </SectionHeading>

      {/* Category Filter */}
      <div className="flex gap-3 mb-12 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2 rounded-lg font-semibold whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground border border-border"
            }`}
          >
            {cat} ({projectCount(cat)})
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="flex gap-6 pb-8 border-b border-border last:border-0"
          >
            {/* Icon Circle */}
            <div className={`flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center text-4xl bg-gradient-to-br ${project.bgColor} shadow-lg`}>
              {project.icon}
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-1">
                <span className="text-primary">{project.name.split(" ")[0]}</span>
                {project.name.split(" ").slice(1).join(" ")}
              </h3>
              <p className="text-xs text-muted-foreground mb-3 uppercase">
                {project.category}
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-secondary border border-border rounded text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                {project.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    className="text-lg hover:opacity-70 transition-opacity"
                    title={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
