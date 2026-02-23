import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { projects, categories } from "@/data/projects";

interface PortfolioProps {
  isDark: boolean;
}

export default function Portfolio({ isDark }: PortfolioProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="portfolio"
      className={`py-20 transition-colors duration-300 ${
        isDark
          ? "bg-slate-900 border-b border-slate-700"
          : "bg-slate-50 border-b border-slate-200"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Portfolio
          </h2>
          <p
            className={`text-lg transition-colors duration-300 ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            A selection of my recent projects and work
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/50"
                  : isDark
                  ? "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  : "bg-white text-slate-600 hover:bg-slate-200 border border-slate-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group rounded-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 ${
                isDark ? "bg-slate-800 hover:shadow-lg hover:shadow-blue-500/20" : "bg-white hover:shadow-lg hover:shadow-blue-200"
              }`}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-600/20">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                      Live
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-slate-700 text-white rounded-lg text-sm hover:bg-slate-600 transition-colors duration-300"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className={`p-6 transition-colors duration-300 ${isDark ? "border-t border-slate-700" : "border-t border-slate-200"}`}>
                <div className="mb-3">
                  <span
                    className={`inline-block text-xs font-semibold px-3 py-1 rounded-full transition-colors duration-300 ${
                      isDark
                        ? "bg-blue-500/20 text-blue-300"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {project.category}
                  </span>
                </div>

                <h3
                  className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  {project.title}
                </h3>

                <p
                  className={`text-sm mb-4 transition-colors duration-300 ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`text-xs px-2 py-1 rounded transition-colors duration-300 ${
                        isDark
                          ? "bg-slate-700 text-slate-300"
                          : "bg-slate-200 text-slate-700"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
