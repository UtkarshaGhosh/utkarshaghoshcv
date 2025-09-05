import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Shield, Users, Lightbulb } from "lucide-react"

const highlights = [
  {
    icon: Shield,
    title: "Cybersecurity Focus",
    description: "Specializing in cybersecurity with hands-on experience in log monitoring and security systems."
  },
  {
    icon: Code,
    title: "Multi-Language Proficiency",
    description: "Skilled in Python, C, Java, HTML, SQL, and MATLAB with practical project experience."
  },
  {
    icon: Users,
    title: "Leadership & Teamwork",
    description: "Strong leadership skills with experience in collaborative projects and problem-solving."
  },
  {
    icon: Lightbulb,
    title: "Innovation Mindset",
    description: "Creative approach to software development with focus on practical solutions."
  }
]

export function AboutSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate 2nd-year B.Tech Information Technology student with a strong focus on cybersecurity 
            and software development. I combine technical expertise with creative problem-solving to build 
            innovative solutions that make a difference.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 text-center hover-lift"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                <highlight.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{highlight.title}</h3>
              <p className="text-muted-foreground">{highlight.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 glass-card p-8 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-gradient">
            Professional Summary
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            I am a second-year B.Tech student passionate about cybersecurity, proficient in Python, C, Java, HTML and SQL.
            Skilled in leadership, problem-solving, and interpersonal communication. I excel at analyzing and developing
            solutions while collaborating effectively in teams. I am committed to continuous learning and applying technical
            expertise to address challenges in different environments.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
