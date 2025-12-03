import SectionHeading from "@/components/SectionHeading";
import { Trophy } from "lucide-react";

export default function AchievementsSection() {
  const achievements = [
    {
      title: "Best Backend Developer Award",
      organization: "Tech Industry Awards 2022",
      description: "Recognized for outstanding contributions to backend development and system architecture.",
    },
    {
      title: "Open Source Contributor",
      organization: "GitHub Community",
      description: "Active contributor to multiple open-source projects with 500+ stars combined.",
    },
    {
      title: "Tech Speaker",
      organization: "International Conferences",
      description: "Presented talks on backend optimization and scalable architecture at major tech conferences.",
    },
    {
      title: "Certification: AWS Solutions Architect",
      organization: "Amazon Web Services",
      description: "Professional certification in designing scalable and reliable systems on AWS.",
    },
  ];

  return (
    <section id="achievements" className="py-20 border-t border-border">
      <SectionHeading subtitle="Recognitions & milestones">
        Achievements
      </SectionHeading>

      <div className="space-y-6">
        {achievements.map((achievement, i) => (
          <div key={i} className="flex gap-4 pb-6 border-b border-border last:border-0">
            <div className="pt-1">
              <Trophy className="text-primary" size={24} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-1">{achievement.title}</h3>
              <p className="text-primary text-sm mb-2">{achievement.organization}</p>
              <p className="text-sm text-muted-foreground">{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
