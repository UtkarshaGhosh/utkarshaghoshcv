import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface Props {
  name: string
  title: string
  avatarUrl: string
  onPrimaryClick?: () => void
}

export function SiteProfileCard({ name, title, avatarUrl, onPrimaryClick }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-xl glass-card-elevated rounded-2xl p-6 md:p-8 relative overflow-hidden"
    >
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-primary rounded-full opacity-20 blur-3xl" />
      <div className="flex items-center gap-6">
        <img
          src={avatarUrl}
          alt={`${name} avatar`}
          className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border border-white/20 shadow-card"
        />
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gradient leading-tight">
            {name}
          </h1>
          <p className="text-base md:text-lg text-muted-foreground mt-1">{title}</p>
        </div>
      </div>
      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <Button onClick={onPrimaryClick} className="bg-gradient-primary text-white border-0">
          Download CV
        </Button>
        <a href="#about" className="inline-flex items-center justify-center rounded-md px-4 py-2 glass-card hover-glow">
          About Me
        </a>
      </div>
    </motion.div>
  )
}
