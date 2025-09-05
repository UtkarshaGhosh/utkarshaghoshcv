import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X, Download } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

const navItems = [
  { type: "route", to: "/", label: "Home" },
  { type: "hash", to: "#about", label: "About" },
  { type: "route", to: "/education", label: "Education" },
  { type: "route", to: "/skills", label: "Skills" },
  { type: "route", to: "/projects", label: "Projects" },
  { type: "route", to: "/internships", label: "Internships" },
  { type: "route", to: "/achievements", label: "Achievements" },
] as const

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDownloadCV = async () => {
    const CV_URL = "https://cdn.builder.io/o/assets%2F3265fc7b7f7e43fc873a70e5cb8e78d5%2Fdcef5e30c2574e5686fe3d4e4d7ce641?alt=media&token=0e599403-b1d4-40ab-92c6-ee7fcabef778&apiKey=3265fc7b7f7e43fc873a70e5cb8e78d5"
    try {
      const res = await fetch(CV_URL, { mode: "cors" })
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = "Utkarsha Ghosh_CV.pdf"
      document.body.appendChild(link)
      link.click()
      link.remove()
      URL.revokeObjectURL(url)
    } catch {
      const link = document.createElement("a")
      link.href = CV_URL
      link.download = "Utkarsha Ghosh_CV.pdf"
      document.body.appendChild(link)
      link.click()
      link.remove()
    }
  }

  const handleNavClick = (item: { type: "route" | "hash"; to: string }) => {
    setIsMobileMenuOpen(false)
    if (item.type === "route") {
      navigate(item.to)
      return
    }
    if (item.type === "hash") {
      if (window.location.pathname !== "/") {
        navigate(`/${item.to}`)
        return
      }
      const element = document.querySelector(item.to)
      if (element) element.scrollIntoView({ behavior: "smooth" })
      else window.location.hash = item.to
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-card-elevated" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Top-left Download CV */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Button onClick={handleDownloadCV} className="bg-gradient-primary text-white border-0 px-4 py-2">
              <Download className="w-4 h-4 mr-2" /> Download CV
            </Button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.to}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => handleNavClick(item)}
                className="hover:text-primary transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              <ThemeToggle />
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="glass-card hover-glow w-10 h-10 p-0"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 glass-card-elevated rounded-lg p-4"
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => handleNavClick(item)}
                className="block w-full text-left py-3 hover:text-primary transition-colors duration-300"
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
