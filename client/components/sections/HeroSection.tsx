export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center">
      <div className="mb-8">
        <p className="text-muted-foreground text-sm mb-4">
          <span className="text-muted-foreground">⌨️</span> Hello...
        </p>
        <h1 className="text-6xl font-bold mb-6">
          I'm{" "}
          <span className="text-primary">
            Mark Choi
          </span>
          !
        </h1>

        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
          <div className="flex items-center gap-2">
            <span>📍</span>
            <span>Cupertino - CA</span>
          </div>
          <div className="flex items-center gap-2">
            <span>✉️</span>
            <a
              href="mailto:mark.choi@dev.com"
              className="text-primary hover:underline"
            >
              mark.choi@dev.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span>🐙</span>
            <a
              href="https://github.com/ryanbalieiro"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              @ryanbalieiro
            </a>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="flex gap-4">
        <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
          Download CV
        </button>
        <button className="px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors">
          Get In Touch
        </button>
      </div>
    </section>
  );
}
