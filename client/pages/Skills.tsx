import { useTheme } from "@/context/ThemeContext";
import { 
  FaJava, FaPython, FaPhp, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, 
  FaReact, FaVuejs, FaBootstrap, FaGitAlt, FaDocker, FaDatabase,
  FaServer, FaPalette, FaCode, FaGlobe, FaLanguage
} from "react-icons/fa";
import { SiMysql, SiMongodb, SiKubernetes } from "react-icons/si";

export default function Skills() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Frontend skills data with icons
  const frontendSkills = [
    { 
      name: "HTML 5", 
      percentage: 100, 
      icon: <FaHtml5 size={24} />,
      color: "text-orange-500"
    },
    { 
      name: "JavaScript ES6+", 
      percentage: 90, 
      icon: <FaJs size={24} />,
      color: "text-yellow-500"
    },
    { 
      name: "CSS 3", 
      percentage: 65, 
      icon: <FaCss3Alt size={24} />,
      color: "text-blue-500"
    },
    { 
      name: "React", 
      percentage: 95, 
      icon: <FaReact size={24} />,
      color: "text-cyan-500"
    },
    { 
      name: "Bootstrap 5+", 
      percentage: 90, 
      icon: <FaBootstrap size={24} />,
      color: "text-purple-600"
    },
    { 
      name: "Vue.js", 
      percentage: 40, 
      icon: <FaVuejs size={24} />,
      color: "text-green-500"
    },
  ];

  // Backend skills data with icons
  const backendSkills = [
    { 
      name: "Java", 
      percentage: 95, 
      icon: <FaJava size={24} />,
      color: "text-red-600"
    },
    { 
      name: "MySQL", 
      percentage: 75, 
      icon: <SiMysql size={24} />,
      color: "text-blue-600"
    },
    { 
      name: "MongoDB", 
      percentage: 50, 
      icon: <SiMongodb size={24} />,
      color: "text-green-600"
    },
    { 
      name: "Docker", 
      percentage: 30, 
      icon: <FaDocker size={24} />,
      color: "text-blue-500"
    },
    { 
      name: "Kubernetes", 
      percentage: 20, 
      icon: <SiKubernetes size={24} />,
      color: "text-blue-400"
    },
    { 
      name: "Git", 
      percentage: 90, 
      icon: <FaGitAlt size={24} />,
      color: "text-orange-600"
    },
    { 
      name: "Node.js", 
      percentage: 70, 
      icon: <FaNodeJs size={24} />,
      color: "text-green-700"
    },
    { 
      name: "Python", 
      percentage: 35, 
      icon: <FaPython size={24} />,
      color: "text-yellow-600"
    },
    { 
      name: "PHP 8.0+", 
      percentage: 20, 
      icon: <FaPhp size={24} />,
      color: "text-purple-500"
    },
  ];

  // Language skills with icons
  const languages = [
    { 
      name: "Tamil", 
      level: "Native",
      description: "Native speaker with excellent communication and writing skills",
      icon: <FaLanguage size={24} />,
      color: "text-red-500"
    },
    { 
      name: "English", 
      level: "Intermediate",
      description: "Professional working proficiency",
      icon: <FaGlobe size={24} />,
      color: "text-blue-500"
    },
  ];

  // Other skills
  const otherSkills = [
    { 
      title: "Website design", 
      description: "I can bring your best ideas into life and make them a reality!",
      icon: <FaPalette size={24} />,
      color: "text-pink-500"
    },
    { 
      title: "Database management", 
      description: "I can handle your data effectively and efficiently!",
      icon: <FaDatabase size={24} />,
      color: "text-teal-500"
    },
  ];

  // Function to split array into chunks for 2 columns
  const splitIntoColumns = (array) => {
    const mid = Math.ceil(array.length / 2);
    const firstColumn = array.slice(0, mid);
    const secondColumn = array.slice(mid);
    return { firstColumn, secondColumn };
  };

  const frontendColumns = splitIntoColumns(frontendSkills);
  const backendColumns = splitIntoColumns(backendSkills);

  return (
    <div
      className={`min-h-screen py-16 transition-colors duration-300 ${isDark ? "bg-background" : "bg-slate-100"
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        
        {/* HEADER */}
        <div className="mb-16 text-center">
          <p
            className={`text-sm mb-2 ${isDark ? "text-green-400/70" : "text-green-700"
              }`}
          >
            🔧 Explore
          </p>

          <h1
            className={`font-mono font-bold text-4xl sm:text-5xl mb-3 ${isDark ? "text-green-400" : "text-green-700"
              }`}
          >
            My Skill Set
          </h1>

          <p className={`text-lg ${isDark ? "text-slate-300" : "text-slate-700"}`}>
            A comprehensive overview of my technical capabilities
          </p>
        </div>

        {/* MAIN LAYOUT */}
        <div className="space-y-16">
          
          {/* FRONTEND STACK SECTION - 2 Columns */}
          <div className={`p-8 rounded-xl ${isDark ? "bg-slate-800/40 border border-slate-700" : "bg-white border border-green-200"}`}>
            <div className="flex items-center gap-3 mb-8">
              <div className={`p-2 rounded-lg ${isDark ? "bg-slate-800" : "bg-green-100"}`}>
                <FaCode className={`text-green-500`} size={24} />
              </div>
              <h2 className={`text-2xl font-mono font-semibold ${isDark ? "text-green-400" : "text-green-700"}`}>
                Frontend Stack
              </h2>
            </div>

            {/* 2-Column Grid for Frontend */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* First Column */}
              <div className="space-y-6">
                {frontendColumns.firstColumn.map((skill, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${isDark ? "bg-slate-900/50" : "bg-gray-100"}`}>
                      <div className={skill.color}>
                        {skill.icon}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className={`font-medium ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                          {skill.name}
                        </span>
                        <span className={`text-sm font-semibold ${isDark ? "text-green-400" : "text-green-700"}`}>
                          {skill.percentage}%
                        </span>
                      </div>
                      
                      <div className={`h-2 rounded-full ${isDark ? "bg-slate-700" : "bg-slate-300"}`}>
                        <div 
                          className="h-full rounded-full bg-green-500"
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Second Column */}
              <div className="space-y-6">
                {frontendColumns.secondColumn.map((skill, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${isDark ? "bg-slate-900/50" : "bg-gray-100"}`}>
                      <div className={skill.color}>
                        {skill.icon}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className={`font-medium ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                          {skill.name}
                        </span>
                        <span className={`text-sm font-semibold ${isDark ? "text-green-400" : "text-green-700"}`}>
                          {skill.percentage}%
                        </span>
                      </div>
                      
                      <div className={`h-2 rounded-full ${isDark ? "bg-slate-700" : "bg-slate-300"}`}>
                        <div 
                          className="h-full rounded-full bg-green-500"
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BACKEND STACK SECTION - 2 Columns */}
          <div className={`p-8 rounded-xl ${isDark ? "bg-slate-800/40 border border-slate-700" : "bg-white border border-green-200"}`}>
            <div className="flex items-center gap-3 mb-8">
              <div className={`p-2 rounded-lg ${isDark ? "bg-slate-800" : "bg-green-100"}`}>
                <FaServer className={`text-green-500`} size={24} />
              </div>
              <h2 className={`text-2xl font-mono font-semibold ${isDark ? "text-green-400" : "text-green-700"}`}>
                Backend Stack
              </h2>
            </div>

            {/* 2-Column Grid for Backend */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* First Column */}
              <div className="space-y-6">
                {backendColumns.firstColumn.map((skill, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${isDark ? "bg-slate-900/50" : "bg-gray-100"}`}>
                      <div className={skill.color}>
                        {skill.icon}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className={`font-medium ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                          {skill.name}
                        </span>
                        <span className={`text-sm font-semibold ${isDark ? "text-green-400" : "text-green-700"}`}>
                          {skill.percentage}%
                        </span>
                      </div>
                      
                      <div className={`h-2 rounded-full ${isDark ? "bg-slate-700" : "bg-slate-300"}`}>
                        <div 
                          className="h-full rounded-full bg-green-500"
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Second Column */}
              <div className="space-y-6">
                {backendColumns.secondColumn.map((skill, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${isDark ? "bg-slate-900/50" : "bg-gray-100"}`}>
                      <div className={skill.color}>
                        {skill.icon}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className={`font-medium ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                          {skill.name}
                        </span>
                        <span className={`text-sm font-semibold ${isDark ? "text-green-400" : "text-green-700"}`}>
                          {skill.percentage}%
                        </span>
                      </div>
                      
                      <div className={`h-2 rounded-full ${isDark ? "bg-slate-700" : "bg-slate-300"}`}>
                        <div 
                          className="h-full rounded-full bg-green-500"
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* TWO COLUMN LAYOUT FOR LANGUAGES & OTHER SKILLS */}
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* LEFT COLUMN - Languages */}
            <div>
              <div className={`p-8 rounded-xl ${isDark ? "bg-slate-800/40 border border-slate-700" : "bg-white border border-green-200"}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg ${isDark ? "bg-slate-800" : "bg-green-100"}`}>
                    <FaLanguage className={`text-green-500`} size={24} />
                  </div>
                  <h2 className={`text-2xl font-mono font-semibold ${isDark ? "text-green-400" : "text-green-700"}`}>
                    Languages
                  </h2>
                </div>

                <div className="space-y-6">
                  {languages.map((lang, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${isDark ? "bg-slate-900/50" : "bg-gray-100"}`}>
                        <div className={lang.color}>
                          {lang.icon}
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="mb-2">
                          <span className={`font-medium text-lg ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                            {lang.name}
                          </span>
                          <span className={`ml-2 font-semibold ${isDark ? "text-green-400" : "text-green-700"}`}>
                            - {lang.level}
                          </span>
                        </div>
                        
                        {lang.description && (
                          <p className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                            {lang.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - Other Skills */}
            <div>
              <div className={`p-8 rounded-xl ${isDark ? "bg-slate-800/40 border border-slate-700" : "bg-white border border-green-200"}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg ${isDark ? "bg-slate-800" : "bg-green-100"}`}>
                    <FaPalette className={`text-green-500`} size={24} />
                  </div>
                  <h2 className={`text-2xl font-mono font-semibold ${isDark ? "text-green-400" : "text-green-700"}`}>
                    Other Skills
                  </h2>
                </div>

                <div className="space-y-6">
                  {otherSkills.map((skill, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${isDark ? "bg-slate-900/50" : "bg-gray-100"}`}>
                        <div className={skill.color}>
                          {skill.icon}
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className={`text-lg font-semibold mb-2 ${isDark ? "text-green-400" : "text-green-700"}`}>
                          {skill.title}
                        </h3>
                        <p className={`text-sm ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* BACKEND HIGHLIGHTS */}
                {/* <div className="mt-8 pt-8 border-t border-slate-700/30">
                  <h3 className={`text-lg font-semibold mb-4 ${isDark ? "text-green-400" : "text-green-700"}`}>
                    Top Backend Skills
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className={`text-center p-4 rounded-lg ${isDark ? "bg-slate-900/50" : "bg-green-50"}`}>
                      <div className="flex justify-center mb-2">
                        <FaJava className="text-red-600" size={32} />
                      </div>
                      <div className={`text-3xl font-bold mb-1 ${isDark ? "text-green-400" : "text-green-700"}`}>
                        95%
                      </div>
                      <div className={`text-sm font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                        Java
                      </div>
                    </div>
                    
                    <div className={`text-center p-4 rounded-lg ${isDark ? "bg-slate-900/50" : "bg-green-50"}`}>
                      <div className="flex justify-center mb-2">
                        <FaGitAlt className="text-orange-600" size={32} />
                      </div>
                      <div className={`text-3xl font-bold mb-1 ${isDark ? "text-green-400" : "text-green-700"}`}>
                        90%
                      </div>
                      <div className={`text-sm font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                        Git
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

          </div>

        </div>

        {/* CALL TO ACTION */}
        {/* <div className={`mt-12 p-8 rounded-xl text-center ${isDark ? "bg-slate-800/40 border border-slate-700" : "bg-white border border-green-200"}`}>
          <h3 className={`text-2xl font-mono font-semibold mb-4 ${isDark ? "text-green-400" : "text-green-700"}`}>
            Ready to Build Something Amazing?
          </h3>
          <p className={`mb-6 max-w-2xl mx-auto ${isDark ? "text-slate-300" : "text-slate-700"}`}>
            With expertise across the full stack, I can help bring your ideas to life. 
            Let's collaborate on your next project!
          </p>
          <button
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${isDark
                ? "bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/20"
                : "bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-600/20"
              }`}
          >
            Start a Project Together
          </button>
        </div> */}

      </div>
    </div>
  );
}