interface AboutProps {
  isDark: boolean;
}

export default function About({ isDark }: AboutProps) {
  const timeline = [
    {
      year: "2018",
      title: "Started My Journey",
      description: "Began learning web development with HTML, CSS, and JavaScript",
    },
    {
      year: "2019",
      title: "First Professional Role",
      description: "Joined as a junior developer, working on React projects",
    },
    {
      year: "2021",
      title: "Senior Developer",
      description: "Promoted to senior position, leading frontend teams and architecture",
    },
    {
      year: "2023",
      title: "Full-Stack Expertise",
      description: "Expanded to full-stack development with Node.js and cloud platforms",
    },
  ];

  return (
    <section
      id="about"
      className={`py-20 transition-colors duration-300 ${
        isDark
          ? "bg-slate-800 border-b border-slate-700"
          : "bg-white border-b border-slate-200"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2
              className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              About Me
            </h2>
            <p
              className={`text-lg transition-colors duration-300 ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              My journey as a developer and designer
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Introduction */}
            <div className="space-y-4">
              <p
                className={`text-lg leading-relaxed transition-colors duration-300 ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                I'm a passionate full-stack developer and designer with over 5 years of
                experience building modern web applications. My expertise spans across
                frontend frameworks, backend technologies, and cloud platforms.
              </p>
              <p
                className={`text-lg leading-relaxed transition-colors duration-300 ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                I specialize in creating scalable, performant, and user-friendly
                applications. I'm driven by the challenge of solving complex problems and
                the satisfaction of delivering high-quality solutions that users love.
              </p>
              <p
                className={`text-lg leading-relaxed transition-colors duration-300 ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                Beyond coding, I'm passionate about mentoring junior developers,
                contributing to open-source projects, and staying updated with the latest
                industry trends.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              {[
                {
                  icon: "🎯",
                  title: "Problem Solver",
                  description: "Tackling complex challenges with creative solutions",
                },
                {
                  icon: "🚀",
                  title: "Innovation Focused",
                  description: "Always exploring new technologies and methodologies",
                },
                {
                  icon: "👥",
                  title: "Team Player",
                  description: "Collaborating effectively with diverse teams",
                },
                {
                  icon: "📈",
                  title: "Growth Mindset",
                  description: "Continuously learning and improving my skills",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg transition-all duration-300 ${
                    isDark ? "bg-slate-700/50 hover:bg-slate-700" : "bg-slate-100 hover:bg-slate-200"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h3
                        className={`font-semibold transition-colors duration-300 ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`text-sm transition-colors duration-300 ${
                          isDark ? "text-slate-400" : "text-slate-600"
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-20">
            <h3
              className={`text-2xl font-bold mb-12 text-center transition-colors duration-300 ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Professional Journey
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full transition-colors duration-300 ${
                  isDark ? "bg-slate-700" : "bg-slate-300"
                }`}
              />

              {/* Timeline items */}
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className={`flex gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                    {/* Content */}
                    <div className="w-1/2">
                      <div
                        className={`p-6 rounded-lg transition-all duration-300 ${
                          isDark
                            ? "bg-slate-700 hover:bg-slate-600"
                            : "bg-slate-100 hover:bg-slate-200"
                        }`}
                      >
                        <p
                          className={`text-sm font-semibold transition-colors duration-300 ${
                            isDark ? "text-blue-400" : "text-blue-600"
                          }`}
                        >
                          {item.year}
                        </p>
                        <h4
                          className={`text-lg font-bold mt-2 transition-colors duration-300 ${
                            isDark ? "text-white" : "text-slate-900"
                          }`}
                        >
                          {item.title}
                        </h4>
                        <p
                          className={`text-sm mt-2 transition-colors duration-300 ${
                            isDark ? "text-slate-400" : "text-slate-600"
                          }`}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="w-0 flex justify-center">
                      <div
                        className={`w-4 h-4 rounded-full border-4 transition-colors duration-300 ${
                          isDark
                            ? "border-slate-800 bg-blue-500"
                            : "border-white bg-blue-500"
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
