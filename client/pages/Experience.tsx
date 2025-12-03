import { useTheme } from "@/context/ThemeContext";
import { Briefcase, Calendar, MapPin, Building } from "lucide-react";

export default function Experience() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const experiences = [
    {
      title: "React Developer",
      company: "Brightech Software Solutions",
      period: "Feb 2025 - Present",
      location: "Remote / Chennai",
      description: "Developing responsive web applications using React.js and modern frontend technologies, collaborating with teams to deliver high-quality software solutions with a focus on:",
      points: [
        "Building user interfaces with React.js and JavaScript",
        "Implementing responsive designs and optimizing performance",
        "Collaborating with cross-functional development teams",
        "Developing and maintaining web applications"
      ],
      technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Git", "Web Development"]
    },
    {
      title: "Web Developer Intern",
      company: "Internship",
      period: "Jul 2023 - Aug 2023",
      location: "Remote",
      description: "Gained hands-on experience in web development technologies and best practices, assisting in building and maintaining web applications.",
      points: [
        "Learned web development fundamentals and best practices",
        "Assisted in building and testing web applications",
        "Gained experience with modern development workflows"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Git", "Responsive Design"]
    }
  ];

  return (
    <div
      className={`min-h-screen py-16 transition-colors duration-300 ${
        isDark ? "bg-background" : "bg-slate-100"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        {/* HEADER */}
        <p
          className={`text-center text-sm mb-2 ${
            isDark ? "text-green-400/70" : "text-green-700"
          }`}
        >
          💼 Work Experience
        </p>

        <h1
          className={`text-center font-mono font-bold text-4xl sm:text-5xl mb-12 ${
            isDark ? "text-green-400" : "text-green-700"
          }`}
        >
          Professional Journey
        </h1>

        {/* EXPERIENCES LIST */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 ${
                isDark
                  ? "bg-slate-800/40 border border-slate-700"
                  : "bg-white border border-green-200"
              }`}
            >
              {/* Header Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-lg ${
                      isDark ? "bg-slate-900" : "bg-green-50"
                    }`}
                  >
                    <Briefcase
                      size={24}
                      className={isDark ? "text-green-400" : "text-green-700"}
                    />
                  </div>
                  <div>
                    <h2
                      className={`text-2xl font-mono font-semibold ${
                        isDark ? "text-green-400" : "text-green-700"
                      }`}
                    >
                      {exp.title}
                    </h2>
                    <div className="flex items-center gap-2 mt-1">
                      <Building
                        size={16}
                        className={isDark ? "text-green-400" : "text-green-700"}
                      />
                      <span
                        className={`text-lg ${
                          isDark ? "text-slate-300" : "text-slate-700"
                        }`}
                      >
                        {exp.company}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div
                  className={`flex items-center gap-2 ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  <Calendar size={18} />
                  <span className="text-sm font-medium">{exp.period}</span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 mb-6">
                <MapPin
                  size={18}
                  className={isDark ? "text-green-400" : "text-green-700"}
                />
                <span
                  className={`text-sm ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {exp.location}
                </span>
              </div>

              {/* Description */}
              <p
                className={`mb-6 leading-relaxed ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                {exp.description}
              </p>

              {/* Key Points */}
              <div className="space-y-3 mb-8">
                {exp.points.map((point, pointIndex) => (
                  <div key={pointIndex} className="flex items-start gap-3">
                    <div
                      className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                        isDark ? "bg-green-400" : "bg-green-700"
                      }`}
                    ></div>
                    <p
                      className={`${
                        isDark ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div>
                <h3
                  className={`font-mono font-semibold mb-4 ${
                    isDark ? "text-green-400" : "text-green-700"
                  }`}
                >
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-4 py-2 rounded-full text-sm font-medium ${
                        isDark
                          ? "bg-slate-900 text-green-400 border border-slate-700"
                          : "bg-green-50 text-green-700 border border-green-200"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Timeline connector (except for last item) */}
              {index < experiences.length - 1 && (
                <div className="flex justify-center mt-8">
                  <div
                    className={`w-0.5 h-8 ${
                      isDark ? "bg-slate-700" : "bg-green-200"
                    }`}
                  ></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ADDITIONAL SKILLS SECTION */}
        <div className="mt-16">
          <h2
            className={`text-2xl font-mono font-semibold mb-6 flex items-center gap-2 ${
              isDark ? "text-green-400" : "text-green-700"
            }`}
          >
            <span className="h-6 w-1 bg-green-400 rounded-full"></span>
            Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Frontend Skills */}
            <div
              className={`p-6 rounded-xl ${
                isDark
                  ? "bg-slate-800/40 border border-slate-700"
                  : "bg-white border border-green-200"
              }`}
            >
              <h3
                className={`text-lg font-semibold mb-4 ${
                  isDark ? "text-green-400" : "text-green-700"
                }`}
              >
                Frontend Development
              </h3>
              <ul className="space-y-2">
                {["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Responsive Design", "UI/UX Principles"].map((skill, i) => (
                  <li
                    key={i}
                    className={`text-sm flex items-center gap-2 ${
                      isDark ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    <span className="text-green-400">▸</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools & Workflow */}
            <div
              className={`p-6 rounded-xl ${
                isDark
                  ? "bg-slate-800/40 border border-slate-700"
                  : "bg-white border border-green-200"
              }`}
            >
              <h3
                className={`text-lg font-semibold mb-4 ${
                  isDark ? "text-green-400" : "text-green-700"
                }`}
              >
                Tools & Workflow
              </h3>
              <ul className="space-y-2">
                {["Git & GitHub", "VS Code", "NPM/Yarn", "Agile Methodologies", "Code Reviews", "Testing"].map((skill, i) => (
                  <li
                    key={i}
                    className={`text-sm flex items-center gap-2 ${
                      isDark ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    <span className="text-green-400">▸</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Soft Skills */}
            <div
              className={`p-6 rounded-xl ${
                isDark
                  ? "bg-slate-800/40 border border-slate-700"
                  : "bg-white border border-green-200"
              }`}
            >
              <h3
                className={`text-lg font-semibold mb-4 ${
                  isDark ? "text-green-400" : "text-green-700"
                }`}
              >
                Professional Skills
              </h3>
              <ul className="space-y-2">
                {["Problem Solving", "Team Collaboration", "Adaptability", "Continuous Learning", "Communication", "Time Management"].map((skill, i) => (
                  <li
                    key={i}
                    className={`text-sm flex items-center gap-2 ${
                      isDark ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    <span className="text-green-400">▸</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}