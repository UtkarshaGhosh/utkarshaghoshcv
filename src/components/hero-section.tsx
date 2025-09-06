import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const [parallax, setParallax] = useState({ x: 0, y: 0 })
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    const cx = rect.width / 2
    const cy = rect.height / 2
    const dx = ((e.clientX - rect.left - cx) / cx) * 20
    const dy = ((e.clientY - rect.top - cy) / cy) * 20
    setParallax({ x: dx, y: dy })
  }
  const handleDownloadCV = async () => {
    const CV_URL = "/Utkarsha Ghosh_CV.pdf"
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

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden" onMouseMove={handleMouseMove}>
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
      <motion.div className="absolute inset-0" animate={{ x: parallax.x, y: parallax.y }} transition={{ type: 'spring', stiffness: 60, damping: 20 }}>
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-4 text-center relative z-10 pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 items-center gap-10 md:gap-16 text-left">
            <div>
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Hello I'm</p>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-3">
                <span className="text-gradient">Utkarsha Ghosh</span>
              </h1>
              <h2 className="text-lg md:text-xl text-muted-foreground mb-4">B.tech IT Student</h2>
              <p className="text-muted-foreground max-w-xl mb-6">
                Passionate about building secure, user‑friendly software. Exploring cybersecurity,
                data, and modern web technologies.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#about" className="px-4 py-2 rounded-md glass-card hover-glow">About Me</a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-primary opacity-20 blur-3xl rounded-xl" />
              <img src="/placeholder.jpg" alt="Utkarsha Ghosh portrait" className="relative w-full max-w-md mx-auto rounded-xl ring-1 ring-white/20 shadow-elevation" />
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="animate-bounce"
          >
            <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
