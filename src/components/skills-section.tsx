import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const technicalSkills = [
  { name: "Python", level: 90, color: "from-blue-500 to-blue-600" },
  { name: "Java", level: 85, color: "from-orange-500 to-red-500" },
  { name: "C Programming", level: 80, color: "from-gray-600 to-gray-700" },
  { name: "HTML/CSS", level: 88, color: "from-orange-400 to-pink-500" },
  { name: "SQL", level: 75, color: "from-indigo-500 to-purple-600" },
  { name: "MATLAB", level: 70, color: "from-teal-500 to-cyan-600" },
  { name: "React", level: 85, color: "from-cyan-400 to-blue-500" },
  { name: "TypeScript", level: 80, color: "from-blue-600 to-indigo-600" }
]

const tools = [
  "VS Code", "Jupyter Notebook", "Google Colab", "Git", "GitHub", 
  "PowerShell", "Linux", "Docker", "Figma", "Postman"
]


export function SkillsSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and tools developed through academic projects and practical experience.
          </p>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.05 * index }}
                className="rounded-full px-4 py-2 bg-muted text-foreground hover-lift"
              >
                <span className="text-sm font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-gradient">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="rounded-full px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white shadow-glow hover-lift cursor-default"
              >
                <span className="text-sm font-medium">{tool}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
