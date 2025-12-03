import SectionHeading from "@/components/SectionHeading";

export default function UpdatesSection() {
  const updates = [
    {
      date: "March 15, 2024",
      title: "Launched New Portfolio Template",
      description: "Redesigned portfolio with improved performance and modern tech stack.",
      tags: ["Portfolio", "Design", "React"],
    },
    {
      date: "March 10, 2024",
      title: "Backend Optimization Tips",
      description: "Shared key strategies for optimizing PHP backend applications for production.",
      tags: ["Backend", "Performance", "PHP"],
    },
    {
      date: "February 28, 2024",
      title: "Open Source Contribution",
      description: "Contributed major improvements to popular Laravel package on GitHub.",
      tags: ["Open Source", "Laravel", "Community"],
    },
  ];

  return (
    <section id="updates" className="py-20 border-t border-border">
      <SectionHeading subtitle="Latest news">
        Updates
      </SectionHeading>

      <div className="space-y-8">
        {updates.map((update, i) => (
          <article key={i} className="pb-8 border-b border-border last:border-0">
            <p className="text-xs text-muted-foreground mb-2">{update.date}</p>
            <h3 className="text-xl font-bold mb-3">{update.title}</h3>
            <p className="text-muted-foreground mb-4">{update.description}</p>
            <div className="flex flex-wrap gap-2">
              {update.tags.map((tag, j) => (
                <span
                  key={j}
                  className="text-xs px-2 py-1 bg-primary/20 text-primary rounded border border-primary/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
