import SectionHeading from "@/components/SectionHeading";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 border-t border-border">
      <SectionHeading subtitle="Get to know me">
        A little bit about me...
      </SectionHeading>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
        {/* Left: Illustration Placeholder */}
        <div className="border-4 border-primary rounded-lg p-12 aspect-square flex items-center justify-center bg-secondary/50">
          <div className="text-center space-y-6">
            <svg
              className="w-24 h-24 mx-auto text-primary"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="15" y="30" width="70" height="40" stroke="currentColor" strokeWidth="3" />
              <line x1="25" y1="40" x2="55" y2="40" stroke="currentColor" strokeWidth="2" />
              <line x1="25" y1="50" x2="75" y2="50" stroke="currentColor" strokeWidth="2" />
              <line x1="25" y1="60" x2="65" y2="60" stroke="currentColor" strokeWidth="2" />
            </svg>
            <p className="text-muted-foreground text-sm">Developer Code</p>
          </div>
        </div>

        {/* Right: Content */}
        <div className="space-y-4 text-muted-foreground">
          <p>
            I'm a <span className="text-foreground font-semibold">PHP developer with over a decade</span> of experience,
            specializing in backend development with some frontend work as well. I also have hands-on experience with
            C++, C#, Go, and Python in production environments.
          </p>

          <p>
            This diverse background gives me the flexibility to adapt to a wide range of project needs, whether it's
            building scalable APIs, optimizing system performance, or contributing to full-stack solutions.
          </p>

          <p>
            I look forward to collaborating <span className="text-foreground font-semibold">with you!</span>
          </p>
        </div>
      </div>

      {/* Testimonials */}
      <div>
        <h3 className="text-2xl font-bold mb-6 text-primary">Client testimonials</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              quote: "Working with Mark was a truly transformative experience. His outstanding programming skills and collaborative spirit not only elevated the quality of our project but also brought a renewed sense of motivation and purpose to us.",
              author: "Client 1",
            },
            {
              quote: "Having Mark on our team was an invaluable asset. His deep programming insights and mentorship not only elevated our projects but also empowered us to tackle every challenge with confidence and creativity.",
              author: "Client 2",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 border border-border rounded-lg bg-secondary/20"
            >
              <p className="text-sm mb-4">
                <span className="text-primary text-lg">"</span>
                {item.quote}
                <span className="text-primary text-lg">"</span>
              </p>
              <p className="text-xs text-muted-foreground">- {item.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
