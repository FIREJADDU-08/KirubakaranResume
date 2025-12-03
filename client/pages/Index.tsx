import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import EducationSection from "@/components/sections/EducationSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import UpdatesSection from "@/components/sections/UpdatesSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Index() {
  const [currentSection, setCurrentSection] = useState("home");
  const [isDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("dark");
  }, []);

  useEffect(() => {
    // Track scroll position to update active section
    const handleScroll = (e: Event) => {
      const main = e.target as HTMLElement;
      const sections = [
        "home",
        "about",
        "education",
        "skills",
        "experience",
        "portfolio",
        "achievements",
        "updates",
        "contact",
      ];

      for (const sectionId of sections) {
        const element = main.querySelector(`#${sectionId}`);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom >= 200) {
          setCurrentSection(sectionId);
          break;
        }
      }
    };

    const mainElement = document.querySelector("main");
    mainElement?.addEventListener("scroll", handleScroll);
    return () => mainElement?.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (sectionId: string) => {
    setCurrentSection(sectionId);
    setTimeout(() => {
      const element = document.querySelector(`#${sectionId}`);
      if (element) {
        const main = document.querySelector("main");
        main?.scrollTo({
          top: (element as HTMLElement).offsetTop - 100,
          behavior: "smooth",
        });
      }
    }, 0);
  };

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <Sidebar currentSection={currentSection} onNavigate={handleNavigation} />

      {/* Main Content */}
      <main className="md:ml-64 w-full overflow-y-auto">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 pb-20">
          <HeroSection />
          <AboutSection />
          <EducationSection />
          <SkillsSection />
          <ExperienceSection />
          <PortfolioSection />
          <AchievementsSection />
          <UpdatesSection />
          <ContactSection />
        </div>
      </main>
    </div>
  );
}
