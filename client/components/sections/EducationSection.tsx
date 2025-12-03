import SectionHeading from "@/components/SectionHeading";
import { BookOpen } from "lucide-react";

export default function EducationSection() {
  const educationItems = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of California",
      year: "2010 - 2014",
      details: "Graduated with honors. Focused on software engineering and algorithms.",
    },
    {
      degree: "Master of Science in Computer Engineering",
      school: "Stanford University",
      year: "2014 - 2016",
      details: "Specialized in distributed systems and backend technologies.",
    },
  ];

  return (
    <section id="education" className="py-20 border-t border-border">
      <SectionHeading subtitle="My academic path">My Education</SectionHeading>

      <div className="space-y-6">
        {educationItems.map((item, i) => (
          <div key={i} className="flex gap-4 pb-6 border-b border-border last:border-0">
            <div className="pt-1">
              <BookOpen className="text-primary" size={24} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-1">{item.degree}</h3>
              <p className="text-primary text-sm mb-2">{item.school}</p>
              <p className="text-xs text-muted-foreground mb-3">{item.year}</p>
              <p className="text-sm text-muted-foreground">{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
