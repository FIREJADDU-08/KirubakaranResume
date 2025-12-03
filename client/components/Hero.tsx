import { ArrowRight } from "lucide-react";

interface HeroProps {
  isDark: boolean;
}

export default function Hero({ isDark }: HeroProps) {
  const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
          : "bg-gradient-to-br from-slate-50 via-white to-slate-50"
      }`}
    >
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <div
                className={`inline-block px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  isDark
                    ? "bg-blue-500/20 text-blue-300"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                Welcome to my portfolio
              </div>
              <h1
                className={`text-5xl md:text-7xl font-bold leading-tight transition-colors duration-300 ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Kiruba Karan
                </span>
              </h1>
            </div>

            <div className="space-y-3">
              <p
                className={`text-2xl font-semibold transition-colors duration-300 ${
                  isDark ? "text-blue-400" : "text-blue-600"
                }`}
              >
                Full-Stack Developer & Designer
              </p>
              <p
                className={`text-lg transition-colors duration-300 ${
                  isDark ? "text-slate-400" : "text-slate-600"
                } max-w-xl`}
              >
                Crafting digital experiences with code and creativity. Specialized in
                building scalable web applications, design systems, and innovative
                digital solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => handleScroll("#portfolio")}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
              >
                View My Work
                <ArrowRight size={20} className="ml-2" />
              </button>
              <button
                onClick={() => handleScroll("#contact")}
                className={`inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 border ${
                  isDark
                    ? "border-slate-700 text-slate-300 hover:bg-slate-800"
                    : "border-slate-300 text-slate-700 hover:bg-slate-100"
                }`}
              >
                Get In Touch
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {[
                { number: "50+", label: "Projects" },
                { number: "30+", label: "Clients" },
                { number: "5+", label: "Years Exp." },
              ].map((stat, index) => (
                <div key={index}>
                  <p className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                    {stat.number}
                  </p>
                  <p
                    className={`text-sm transition-colors duration-300 ${
                      isDark ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center">
            <div
              className={`relative w-80 h-80 rounded-2xl overflow-hidden transition-all duration-300 ${
                isDark ? "ring-2 ring-blue-500/30" : "ring-2 ring-blue-200"
              }`}
            >
              {/* Gradient Decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20" />

              {/* Placeholder Image */}
              <div
                className={`w-full h-full transition-colors duration-300 ${
                  isDark ? "bg-slate-800" : "bg-slate-200"
                } flex items-center justify-center`}
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <p
                    className={`text-sm transition-colors duration-300 ${
                      isDark ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    Professional Photo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
