import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import ProfileCard from "@/components/ProfileCard"

export function HeroSection() {
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
          <div className="flex justify-center mb-12">
            <ProfileCard
              avatarUrl="/placeholder.svg"
              miniAvatarUrl="/placeholder.svg"
              name="Utkarsha Ghosh"
              title="B.tech IT Student"
              handle="utkarsha"
              status="Open to opportunities"
              contactText="Download CV"
              onContactClick={handleDownloadCV}
              enableTilt
              className="scale-95 md:scale-100"
            />
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
