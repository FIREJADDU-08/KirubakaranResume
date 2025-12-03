import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import { Menu, X, Home, User, BookOpen, Code2, Briefcase, Mail, Moon, Sun, Github } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  const menuItems = [
    { id: "home", label: "Home", icon: Home, path: "/" },
    { id: "education", label: "Education", icon: BookOpen, path: "/education" },
    { id: "skills", label: "Skills", icon: Code2, path: "/skills" },
    { id: "experience", label: "Experience", icon: Briefcase, path: "/experience" },
    { id: "portfolio", label: "Portfolio", icon: User, path: "/portfolio" },
    { id: "contact", label: "Contact", icon: Mail, path: "/contact" },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Mobile Toggle */}
      <button
        className={`md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg transition-colors duration-300 ${
          isDark
            ? "bg-green-400 text-slate-900 hover:bg-green-300"
            : "bg-green-700 text-white hover:bg-green-600"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 transition-transform duration-300 border-r z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } ${
          isDark
            ? "bg-slate-900 border-slate-800"
            : "bg-white border-green-200"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-6">
              {/* Profile Section */}
              <div className="mb-8 text-center">
                {/* Profile Image */}
                <div className="mb-6 flex justify-center">
                  <div
                    className={`relative w-28 h-28 rounded-full overflow-hidden border-4 flex items-center justify-center text-4xl transition-colors duration-300 ${
                      isDark
                        ? "border-green-400/30 bg-slate-800"
                        : "border-green-700/20 bg-green-100"
                    }`}
                  >
                    <div className="text-5xl">👨‍💻</div>
                  </div>
                </div>

                {/* Name and Title */}
                <h1
                  className={`text-2xl font-mono font-bold mb-2 transition-colors duration-300 ${
                    isDark ? "text-green-400" : "text-green-700"
                  }`}
                >
                  Kirubakaran
                </h1>
                <p
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  React Developer
                </p>
                
                {/* Location */}
                <div className="flex items-center justify-center gap-1 mt-2">
                  <span className={`text-xs ${isDark ? "text-slate-500" : "text-slate-500"}`}>
                    Kunnathur, TN
                  </span>
                </div>
              </div>

              {/* Navigation Menu - Scrollable if needed */}
              <nav className="space-y-1">
                {menuItems.map(({ id, label, icon: Icon, path }) => (
                  <button
                    key={id}
                    onClick={() => handleNavigation(path)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive(path)
                        ? isDark
                          ? "bg-green-400 text-slate-900 font-semibold"
                          : "bg-green-700 text-white font-semibold"
                        : isDark
                        ? "text-slate-300 hover:bg-slate-800/50"
                        : "text-slate-700 hover:bg-green-50"
                    }`}
                  >
                    <Icon 
                      size={20} 
                      className={
                        isActive(path) 
                          ? (isDark ? "text-slate-900" : "text-white") 
                          : (isDark ? "text-green-400" : "text-green-700")
                      } 
                    />
                    <span className="text-sm">{label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Fixed Bottom Section - Won't scroll */}
          <div className="border-t border-slate-700/30 p-6 bg-inherit">
            <div className="space-y-4">
              {/* GitHub Link */}
              {/* <a
                href="https://github.com/FIREJADDU-08"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  isDark
                    ? "bg-slate-800 text-green-400 hover:bg-slate-700"
                    : "bg-green-50 text-green-700 hover:bg-green-100"
                }`}
              >
                <Github size={20} />
                <span className="text-sm">GitHub Profile</span>
              </a> */}

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                  isDark
                    ? "bg-slate-800 text-green-400 hover:bg-slate-700"
                    : "bg-green-50 text-green-700 hover:bg-green-100"
                }`}
              >
                {isDark ? (
                  <>
                    <Sun size={18} />
                    Light Mode
                  </>
                ) : (
                  <>
                    <Moon size={18} />
                    Dark Mode
                  </>
                )}
              </button>

              {/* Copyright */}
              {/* <p
                className={`text-xs text-center pt-2 ${
                  isDark ? "text-slate-500" : "text-slate-500"
                }`}
              >
                © 2024 Kirubakaran
              </p> */}
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}