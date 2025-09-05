import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Github, Shield, Film, Package, TreePine, Music } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Log Monitoring System",
    description: "Advanced security system built with PowerShell for real-time log analysis and threat detection. Features automated alerts and comprehensive monitoring dashboards.",
    tech: ["PowerShell", "Security", "Monitoring"],
    icon: Shield,
    color: "from-red-500 to-orange-500"
  },
  {
    title: "Movie Recommender Website",
    description: "Intelligent movie recommendation system using Python and machine learning algorithms. Provides personalized suggestions based on user preferences and viewing history.",
    tech: ["Python", "Machine Learning", "Web Development"],
    icon: Film,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Inventory Management System",
    description: "Comprehensive Java-based application for managing inventory with real-time tracking, automated restocking alerts, and detailed reporting capabilities.",
    tech: ["Java", "Database", "Management"],
    icon: Package,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Forest Fire Risk Website",
    description: "Python-powered web application that predicts forest fire risks using environmental data and machine learning models for early warning systems.",
    tech: ["Python", "Data Analysis", "Environmental"],
    icon: TreePine,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Music Recommender Website",
    description: "Modern React-based music recommendation platform with TypeScript and Tailwind CSS. Features smart playlists and social music discovery.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    icon: Music,
    color: "from-indigo-500 to-purple-500"
  }
]

export function ProjectsSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical projects demonstrating expertise in cybersecurity, 
            machine learning, web development, and data analysis.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              inView={inView}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="glass-card hover-glow border-primary/30"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: {
    title: string
    description: string
    tech: string[]
    icon: any
    color: string
  }
  index: number
  inView: boolean
}

function ProjectCard({ project, index, inView }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="glass-card p-6 h-full hover-lift transition-all duration-300 group-hover:shadow-elevation">
        {/* Project Icon */}
        <div className={`w-16 h-16 mb-4 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center shadow-lg`}>
          <project.icon className="w-8 h-8 text-white" />
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        {/* Project Description */}
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-muted rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          <Button
            size="sm"
            variant="outline"
            className="flex-1 glass-card border-primary/30 hover-glow"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Demo
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="flex-1 glass-card border-primary/30 hover-glow"
          >
            <Github className="w-4 h-4 mr-2" />
            Code
          </Button>
        </div>
      </div>
    </motion.div>
  )
}