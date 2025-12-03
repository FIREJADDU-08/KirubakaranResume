import SectionHeading from "@/components/SectionHeading";

export default function SkillsSection() {
  const skillGroups = [
    {
      category: "Languages",
      skills: ["PHP", "Python", "JavaScript", "TypeScript", "C++", "C#", "Go"],
    },
    {
      category: "Backend",
      skills: [
        "Laravel",
        "Node.js",
        "Express",
        "Django",
        "Fastapi",
        "Golang",
      ],
    },
    {
      category: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
    },
    {
      category: "Frontend",
      skills: ["React", "Vue.js", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      category: "Tools & DevOps",
      skills: ["Docker", "Kubernetes", "Git", "CI/CD", "AWS", "Linux"],
    },
    {
      category: "Soft Skills",
      skills: ["Leadership", "Communication", "Problem Solving", "Mentoring"],
    },
  ];

  return (
    <section id="skills" className="py-20 border-t border-border">
      <SectionHeading subtitle="What can I do">My Skills</SectionHeading>

      <div className="grid md:grid-cols-2 gap-8">
        {skillGroups.map((group, i) => (
          <div key={i} className="p-6 bg-secondary/30 rounded-lg border border-border">
            <h3 className="text-lg font-semibold mb-4 text-primary">{group.category}</h3>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill, j) => (
                <span
                  key={j}
                  className="px-4 py-2 bg-primary/20 text-primary rounded-lg text-sm font-medium border border-primary/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
