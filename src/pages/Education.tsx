import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { EducationSection } from "@/components/education-section"
import LiquidEther from "@/components/liquid-ether"

export default function EducationPage() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="cv-theme">
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
        <div className="fixed inset-0 z-0">
          <LiquidEther resolution={0.6} autoDemo={true} autoIntensity={2.2} />
        </div>
        <Navigation />
        <main className="relative z-10 pt-20">
          <EducationSection />
        </main>
        <footer className="py-8 bg-muted/50 text-center relative z-10">
          <p className="text-muted-foreground">© 2024 Utkarsha Ghosh.</p>
        </footer>
      </div>
    </ThemeProvider>
  )
}
