import { Award, BookOpen } from "lucide-react";
import { education } from "@/data/education";

interface EducationProps {
  isDark: boolean;
}

export default function Education({ isDark }: EducationProps) {
  const degrees = education.filter((item) => item.type === "degree");
  const certifications = education.filter((item) => item.type === "certification");

  const EducationCard = ({
    item,
  }: {
    item: (typeof education)[0];
  }) => (
    <div
      className={`p-6 rounded-lg transition-all duration-300 ${
        isDark
          ? "bg-slate-700/50 hover:bg-slate-700"
          : "bg-slate-100 hover:bg-slate-200"
      }`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`p-3 rounded-lg transition-colors duration-300 ${
            item.type === "degree"
              ? isDark
                ? "bg-blue-500/20"
                : "bg-blue-100"
              : isDark
              ? "bg-purple-500/20"
              : "bg-purple-100"
          }`}
        >
          {item.type === "degree" ? (
            <BookOpen
              size={24}
              className={item.type === "degree" ? "text-blue-500" : "text-purple-500"}
            />
          ) : (
            <Award
              size={24}
              className={item.type === "degree" ? "text-blue-500" : "text-purple-500"}
            />
          )}
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3
                className={`text-lg font-bold transition-colors duration-300 ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`text-sm font-medium transition-colors duration-300 ${
                  isDark ? "text-blue-400" : "text-blue-600"
                }`}
              >
                {item.institution}
              </p>
            </div>
            <span
              className={`text-sm font-semibold px-3 py-1 rounded-full whitespace-nowrap ml-2 transition-colors duration-300 ${
                isDark
                  ? "bg-slate-600 text-slate-300"
                  : "bg-slate-300 text-slate-700"
              }`}
            >
              {item.date}
            </span>
          </div>

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
  );

  return (
    <section
      id="education"
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
            Education & Certifications
          </h2>
          <p
            className={`text-lg transition-colors duration-300 ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Degrees, certifications, and achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Degrees */}
          <div className="mb-12">
            <h3
              className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Education
            </h3>
            <div className="space-y-4">
              {degrees.map((item) => (
                <EducationCard key={item.id} item={item} />
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3
              className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((item) => (
                <EducationCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
