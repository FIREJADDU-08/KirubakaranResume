import { useTheme } from "@/context/ThemeContext";
import { Check, CheckCircle, Calendar, MapPin } from "lucide-react";

export default function Education() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const educationData = [
    {
      title: "Bachelor of Technology in Information Technology",
      institution: "Adhiparasakthi College of Engineering",
      location: "Kalavai - TN",
      description: "Completed a B.Tech in IT, gaining practical experience in web development, programming, and software engineering.",
      tags: ["B.Tech-IT", "Web Development"],
      period: "2021 - 2025",
      completed: true,
      highlightId: null
    },
    {
      title: "Higher Secondary",
      institution: "Government Boys Higher Secondary School",
      location: "Perungattur – TN",
      description: "Completed Higher Secondary education with a focus on science subjects.",
      tags: [],
      period: 2021,
      completed: true,
      highlightId: null
    },
    {
      title: "Secondary School",
      institution: "Government High School",
      location: "Kunnathur - TN",
      description: "Completed secondary school education with solid academic performance.",
      tags: [],
      period: 2019,
      completed: true,
      highlightId: null
    },

  ];

  return (
    <div
      className={`min-h-screen py-16 transition-colors duration-300 ${isDark ? "bg-background" : "bg-slate-100"
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">

        {/* HEADER */}
        <div className="mb-12">
          <p
            className={`text-center text-sm mb-2 ${isDark ? "text-green-400/70" : "text-green-700"
              }`}
          >
            🎓 Education Journey
          </p>

          <h1
            className={`text-center font-mono font-bold text-4xl sm:text-5xl mb-3 ${isDark ? "text-green-400" : "text-green-700"
              }`}
          >
            Education Background
          </h1>

          <div className="flex justify-center">
            <div className={`h-1 w-24 rounded-full ${isDark ? "bg-green-500/50" : "bg-green-600/50"}`}></div>
          </div>
        </div>

        {/* EDUCATION TIMELINE */}
        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <div key={index} className="relative">
              {/* Vertical line connector */}
              {index < educationData.length - 1 && (
                <div
                  className={`absolute left-6 top-16 h-[calc(100%+3rem)] w-0.5 ${isDark ? "bg-slate-700" : "bg-slate-300"
                    }`}
                ></div>
              )}

              {/* Education Card */}
              <div
                className={`relative rounded-xl p-6 ${isDark
                    ? "bg-slate-800/40 border border-slate-700"
                    : "bg-white border border-green-200"
                  }`}
              >
                {/* Checkbox/Status Indicator */}
                <div className="absolute -left-3 top-6">
                  <div
                    className={`p-2 rounded-full border-2 ${isDark ? "border-green-500 bg-slate-900" : "border-green-600 bg-white"
                      }`}
                  >
                    <CheckCircle
                      size={18}
                      className={isDark ? "text-green-400" : "text-green-700"}
                    />
                  </div>
                </div>


                {/* Education Header */}
                <div className="pl-8">
                  <h2
                    className={`text-2xl font-mono font-semibold mb-4 ${isDark ? "text-green-400" : "text-green-700"
                      }`}
                  >
                    {edu.title}
                  </h2>

                  {/* Institution and Location */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2">
                      <div
                        className={`h-2 w-2 rounded-full ${isDark ? "bg-slate-500" : "bg-slate-400"
                          }`}
                      ></div>
                      <span
                        className={`text-lg ${isDark ? "text-slate-300" : "text-slate-700"
                          }`}
                      >
                        {edu.institution}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin size={16} className={isDark ? "text-green-400/70" : "text-green-600/70"} />
                      <span
                        className={`${isDark ? "text-slate-400" : "text-slate-600"
                          }`}
                      >
                        {edu.location}
                      </span>
                    </div>

                    {/* Period if exists */}
                    {edu.period && (
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className={isDark ? "text-green-400/70" : "text-green-600/70"} />
                        <span
                          className={`${isDark ? "text-slate-400" : "text-slate-600"
                            }`}
                        >
                          {edu.period}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  {edu.description && (
                    <p
                      className={`mb-4 leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"
                        }`}
                    >
                      {edu.description}
                    </p>
                  )}

                  {/* Tags */}
                  {edu.tags && edu.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {edu.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`px-3 py-1 rounded-full text-sm ${isDark
                              ? "bg-slate-900 text-green-400 border border-slate-700"
                              : "bg-green-50 text-green-700 border border-green-200"
                            }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Highlighted ID for B.Tech */}
                  {edu.highlightId && (
                    <div className="mt-6 pt-4 border-t border-dashed border-slate-700/50">
                      <span
                        className={`text-sm font-mono ${isDark ? "text-green-400/70" : "text-green-700/70"
                          }`}
                      >
                        [{edu.highlightId}]
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Separator line (except for last item) */}
              {index < educationData.length - 1 && (
                <div className="flex justify-center my-8">
                  <div className={`h-0.5 w-16 ${isDark ? "bg-slate-800" : "bg-slate-300"}`}></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* FOOTER NOTE */}
        <div className="mt-16 text-center">
          <p
            className={`text-sm ${isDark ? "text-slate-500" : "text-slate-600"
              }`}
          >
            • Education is the foundation of my technical journey •
          </p>
        </div>
      </div>
    </div>
  );
}