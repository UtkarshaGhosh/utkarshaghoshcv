import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

const educationData = [
  {
    degree: "B.Tech in Information Technology",
    institution: "Institute of Engineering and Management",
    location: "Saltlake, Kolkata",
    duration: "2023 - 2027",
    description: "Pursuing Bachelor's degree with focus on cybersecurity, software development, and emerging technologies.",
    status: "Current"
  },
  {
    degree: "Class XII (CBSE)",
    institution: "South Point High School",
    location: "Kolkata",
    duration: "2023",
    grade: "84.8%",
    description: "Completed higher secondary education with strong foundation in Science and Mathematics.",
    status: "Completed"
  },
  {
    degree: "Class X (CBSE)",
    institution: "South Point High School", 
    location: "Kolkata",
    duration: "2021",
    grade: "94.6%",
    description: "Completed secondary education with outstanding academic performance.",
    status: "Completed"
  }
]

export function EducationSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My academic journey showcasing consistent excellence and strong foundation 
            in technology and scientific disciplines.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-primary"></div>

            {educationData.map((education, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-gradient-primary rounded-full border-4 border-background shadow-glow"></div>

                {/* Content card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}>
                  <div className="glass-card p-6 hover-lift">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-primary" />
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          education.status === "Current" 
                            ? "bg-primary/20 text-primary" 
                            : "bg-muted text-muted-foreground"
                        }`}>
                          {education.status}
                        </span>
                      </div>
                      {education.grade && (
                        <div className="flex items-center gap-1">
                          <Award className="w-4 h-4 text-accent" />
                          <span className="text-accent font-semibold">{education.grade}</span>
                        </div>
                      )}
                    </div>

                    <h3 className="text-xl font-bold mb-2">{education.degree}</h3>
                    <h4 className="text-lg text-primary mb-3">{education.institution}</h4>
                    
                    <div className="flex flex-col sm:flex-row gap-2 mb-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{education.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{education.location}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground">{education.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}