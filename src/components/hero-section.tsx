import { motion } from "framer-motion"
import { ArrowDown, Download, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "https://cdn.builder.io/o/assets%2F3265fc7b7f7e43fc873a70e5cb8e78d5%2Fdcef5e30c2574e5686fe3d4e4d7ce641?alt=media&token=0e599403-b1d4-40ab-92c6-ee7fcabef778&apiKey=3265fc7b7f7e43fc873a70e5cb8e78d5"
    link.download = "Utkarsha Ghosh_resume.pdf"
    document.body.appendChild(link)
    link.click()
    link.remove()
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
      <div className="absolute inset-0">
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
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Name Animation */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.5 }}
            className="text-6xl md:text-8xl font-bold mb-6"
          >
            <span className="text-gradient">Utkarsha</span>
            <br />
            <span className="text-gradient">Ghosh</span>
          </motion.h1>

          {/* Title Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-2">
              B.Tech IT Student
            </h2>
            <h3 className="text-lg md:text-xl text-muted-foreground">
              Cybersecurity & Software Enthusiast
            </h3>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>utkarsha04ghosh@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>8910336498</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              onClick={handleDownloadCV}
              size="lg"
              className="bg-gradient-primary hover-glow text-white border-0 px-8 py-6 text-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
          </motion.div>

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
