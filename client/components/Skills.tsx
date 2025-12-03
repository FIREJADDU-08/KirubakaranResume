import { useState } from "react";
import { skillsData } from "@/data/skills";

interface SkillsProps {
  isDark: boolean;
}

export default function Skills({ isDark }: SkillsProps) {
  const [expandedCategory, setExpandedCategory] = useState("Frontend Development");

  const renderStars = (level: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <span
        key={i}
        className={`text-lg transition-colors duration-300 ${
          i < level ? "text-yellow-400" : isDark ? "text-slate-700" : "text-slate-300"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <section
      id="skills"
      className={`py-20 transition-colors duration-300 ${
        isDark
          ? "bg-slate-800 border-b border-slate-700"
          : "bg-white border-b border-slate-200"
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
            Skills & Expertise
          </h2>
          <p
            className={`text-lg transition-colors duration-300 ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Technical abilities and professional competencies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillsData.map((category) => (
            <div
              key={category.name}
              className={`rounded-lg overflow-hidden transition-all duration-300 ${
                isDark
                  ? "bg-slate-700/50 hover:bg-slate-700"
                  : "bg-slate-100 hover:bg-slate-200"
              }`}
            >
              <button
                onClick={() =>
                  setExpandedCategory(
                    expandedCategory === category.name ? "" : category.name
                  )
                }
                className={`w-full text-left p-6 font-bold text-lg transition-colors duration-300 flex items-center justify-between ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                {category.name}
                <span
                  className={`transition-transform duration-300 ${
                    expandedCategory === category.name ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {expandedCategory === category.name && (
                <div className="px-6 pb-6 border-t border-slate-600/30 space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <span
                            className={`font-medium transition-colors duration-300 ${
                              isDark ? "text-white" : "text-slate-900"
                            }`}
                          >
                            {skill.name}
                          </span>
                        </div>
                        <div className="flex gap-1">{renderStars(skill.level)}</div>
                      </div>
                      {/* Skill Bar */}
                      <div
                        className={`h-2 rounded-full overflow-hidden transition-colors duration-300 ${
                          isDark ? "bg-slate-600" : "bg-slate-300"
                        }`}
                      >
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500"
                          style={{ width: `${(skill.level / 5) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: "Languages", count: "8+" },
              { label: "Frameworks", count: "12+" },
              { label: "Tools & Platforms", count: "15+" },
              { label: "Databases", count: "6+" },
            ].map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg transition-colors duration-300 ${
                  isDark
                    ? "bg-slate-700/50 hover:bg-slate-700"
                    : "bg-slate-100 hover:bg-slate-200"
                }`}
              >
                <p className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  {item.count}
                </p>
                <p
                  className={`text-sm mt-2 transition-colors duration-300 ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
