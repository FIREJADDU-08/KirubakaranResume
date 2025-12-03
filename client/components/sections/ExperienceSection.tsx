import SectionHeading from "@/components/SectionHeading";
import { Briefcase } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Backend Developer",
      company: "Tech Company",
      period: "2020 - Present",
      description:
        "Leading backend architecture and mentoring junior developers. Focused on scalability and performance optimization.",
    },
    {
      title: "Full Stack Developer",
      company: "Web Agency",
      period: "2018 - 2020",
      description:
        "Developed and maintained multiple client projects using Laravel and React. Improved API response times by 40%.",
    },
    {
      title: "Junior Developer",
      company: "Startup",
      period: "2016 - 2018",
      description:
        "Started career building web applications with PHP and MySQL. Learned best practices and development workflows.",
    },
  ];

  return (
    <section id="experience" className="py-20 border-t border-border">
      <SectionHeading subtitle="My career timeline">
        My Experience
      </SectionHeading>

      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <div key={i} className="flex gap-4 pb-6 border-b border-border last:border-0">
            <div className="pt-1">
              <Briefcase className="text-primary" size={24} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-1">{exp.title}</h3>
              <p className="text-primary text-sm mb-2">{exp.company}</p>
              <p className="text-xs text-muted-foreground mb-3">{exp.period}</p>
              <p className="text-sm text-muted-foreground">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
