import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { EducationSection } from "@/components/education-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { InternshipsSection } from "@/components/internships-section"
import { AchievementsSection } from "@/components/achievements-section"

export default function CV() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="cv-theme">
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <EducationSection />
          <SkillsSection />
          <ProjectsSection />
          <InternshipsSection />
          <AchievementsSection />
        </main>
        
        {/* Footer */}
        <footer className="py-8 bg-muted/50 text-center">
          <p className="text-muted-foreground">
            © 2024 Utkarsha Ghosh. Built with React, TypeScript & Tailwind CSS.
          </p>
        </footer>
      </div>
    </ThemeProvider>
  )
}