import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme } = useTheme();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
        theme === "dark" ? "bg-background" : "bg-white"
      }`}
    >
      <div className="text-center">
        <h1
          className={`text-6xl font-bold mb-4 transition-colors duration-300 ${
            theme === "dark" ? "text-white" : "text-slate-900"
          }`}
        >
          404
        </h1>
        <p
          className={`text-lg mb-8 transition-colors duration-300 ${
            theme === "dark" ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Oops! Page not found
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
