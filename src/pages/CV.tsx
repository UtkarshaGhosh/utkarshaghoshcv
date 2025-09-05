import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { EducationSection } from "@/components/education-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { InternshipsSection } from "@/components/internships-section"
import { AchievementsSection } from "@/components/achievements-section"
import LiquidEther from "@/components/liquid-ether"

export default function CV() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="cv-theme">
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
        <div className="fixed inset-0 z-0">
          <div className="w-full h-full">
            <LiquidEther resolution={0.6} autoDemo={true} autoIntensity={2.2} />
          </div>
        </div>
        <Navigation />
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <EducationSection />
          <SkillsSection />
          <ProjectsSection />
          <InternshipsSection />
          <AchievementsSection />
        </main>
        
        {/* Footer */}
        <footer className="py-8 bg-muted/50 text-center relative z-10">
          <p className="text-muted-foreground">
            © 2024 Utkarsha Ghosh. Built with React, TypeScript & Tailwind CSS.
          </p>
        </footer>
      </div>
    </ThemeProvider>
  )
}
