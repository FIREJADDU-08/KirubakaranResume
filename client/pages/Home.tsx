import { useTheme } from "@/context/ThemeContext";
import { Mail, MapPin, Github, Palette, Gamepad2, Music, Dumbbell } from "lucide-react";

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const interests = [
    {
      icon: <Palette size={30} />,
      title: "Designing",
      desc: "Creating digital designs and experimenting with creative concepts.",
    },
    {
      icon: <Gamepad2 size={30} />,
      title: "Gaming",
      desc: "Exploring games that sharpen problem-solving and strategic thinking.",
    },
    {
      icon: <Dumbbell size={30} />,
      title: "Sports",
      desc: "Staying active through physical activities and fitness routines.",
    },
    {
      icon: <Music size={30} />,
      title: "Listening Music",
      desc: "Finding inspiration and creativity through music.",
    },
  ];

  return (
    <div
      className={`min-h-screen py-16 transition-colors duration-300 ${isDark ? "bg-background" : "bg-slate-100"
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">

        {/* HEADER */}
        <p
          className={`text-center text-sm mb-2 ${isDark ? "text-green-400/70" : "text-green-700"
            }`}
        >
          👋 Hello...
        </p>

        <h1
          className={`text-center font-mono font-bold text-4xl sm:text-5xl mb-3 ${isDark ? "text-green-400" : "text-green-700"
            }`}
        >
          I'm Kirubakaran!
        </h1>

        {/* CONTACT ROW */}
        <div
          className={`flex flex-wrap justify-center gap-4 text-sm mb-12 ${isDark ? "text-slate-300" : "text-slate-700"
            }`}
        >
          <span className="flex items-center gap-1">
            <MapPin size={16} className="text-green-400" /> Kunnathur - TN
          </span>
          <span className="opacity-40">·</span>

          <span className="flex items-center gap-1">
            <Mail size={16} className="text-green-400" />
            kirubajadu08@gmail.com
          </span>
          <span className="opacity-40">·</span>

          <span className="flex items-center gap-1">
            <Github size={16} className="text-green-400" /> @FIREJADDU-08
          </span>
        </div>

        {/* MAIN GRID */}
        {/* MAIN FLEX CONTAINER */}
        <div className="flex flex-col md:flex-row gap-12 items-center">

          {/* LEFT IMAGE - 30% */}
          {/* LEFT IMAGE - 30% */}
          <div
            className={`w-full md:w-[30%] h-64 rounded-xl flex items-center justify-center ${isDark ? "border-green-500/30" : "border-green-700/20"
              }`}
          >
            <img
              src="/assets/images/about.png" // make sure to place your uploaded file in public/assets folder
              alt="About"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>


          {/* RIGHT CONTENT - 70% */}
          <div className="w-full md:w-[70%] relative">
            <div className="absolute left-0 top-2 h-full w-1 bg-green-400 rounded-full"></div>

            <h2
              className={`pl-4 text-2xl font-mono font-semibold mb-6 ${isDark ? "text-green-400" : "text-green-700"
                }`}
            >
              A little bit about me...
            </h2>

            <p
              className={`pl-4 leading-relaxed text-sm sm:text-base ${isDark ? "text-slate-300" : "text-slate-700"
                }`}
            >
              I'm Kirubakaran, a Web Developer with a B.Tech in Information Technology,
              completed in 2025. I've been building my skills through projects,
              internships, and hands-on learning, focusing on front-end development and
              creating user-focused interfaces.
              <br /><br />
              I've built an e-commerce website, a digital clock application in Java,
              and dynamic UI systems. I enjoy creating clean, functional and fast
              digital experiences.
              <br /><br />
              Outside of coding, I like designing, gaming, and sports — things that
              keep my mind curious and active.
              <br /><br />
              <span
                className={`font-semibold ${isDark ? "text-green-400" : "text-green-700"
                  }`}
              >
                Looking forward to collaborating with you!
              </span>
            </p>
          </div>

        </div>


        {/* PERSONAL INTERESTS SECTION */}
        <div className="mt-16">
          <h2
            className={`text-2xl font-mono font-semibold mb-6 flex items-center gap-2 ${isDark ? "text-green-400" : "text-green-700"
              }`}
          >
            <span className="h-6 w-1 bg-green-400 rounded-full"></span>
            Personal interests
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {interests.map((item, i) => (
              <div
                key={i}
                className={`p-6 rounded-xl flex gap-6 items-center ${isDark
                    ? "bg-slate-800/40 border border-slate-700"
                    : "bg-white border border-green-200"
                  }`}
              >
                <div
                  className={`p-4 rounded-lg flex items-center justify-center ${isDark ? "bg-slate-900" : "bg-green-50"
                    }`}
                >
                  <div className={`text-green-400`}>{item.icon}</div>
                </div>

                <div>
                  <h3
                    className={`text-lg font-semibold ${isDark ? "text-green-400" : "text-green-700"
                      }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`text-sm ${isDark ? "text-slate-300" : "text-slate-700"
                      }`}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
