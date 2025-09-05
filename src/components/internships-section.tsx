import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Building, Calendar, MapPin, Award, Cloud, Database } from "lucide-react"

const internships = [
  {
    company: "Emami Agrotech Limited",
    position: "IT Intern",
    duration: "June – July 2025",
    location: "Kolkata",
    type: "Completed",
    description: "Developed and deployed a centralized system to monitor logs from 40+ Windows servers for proactive issue identification. Implemented and configured CMDBuild to replace manual spreadsheet-based IT asset tracking.",
    skills: ["Windows Server Logs", "CMDBuild", "Automation", "Monitoring"],
    icon: Building,
    color: "from-green-500 to-emerald-600"
  },
  {
    company: "The National Small Industries Corporation Ltd. Technical Services Centre",
    position: "Database Intern",
    duration: "September 12–26, 2024",
    location: "Remote",
    type: "Completed",
    description: "Completed internship focused on Snowflake Database in Cloud computing with hands-on data warehousing and cloud DB management.",
    skills: ["Snowflake", "Cloud Computing", "Data Warehousing", "SQL"],
    icon: Database,
    color: "from-blue-500 to-cyan-600"
  }
]

const courses = [
  "NPTEL: The Joy of Computing using Python (IIT Madras) – Jul–Oct 2023",
  "Google Cloud Computing Foundations (IIT Kharagpur) – Aug–Oct 2023",
  "Introduction to Algorithms and Analysis (IIT Kharagpur) – Jul–Oct 2023",
  "Cyber Security and Privacy (IIT Madras) – Jul–Oct 2024",
  "Coursera: Advanced System Security Topics (University of Colorado)",
  "Coursera: Probability & Statistics for ML & DS (DeepLearning.AI)",
  "Coursera: Information Theory (The Chinese University of Hong Kong)",
  "LinkedIn Learning: Python Object Oriented Programming",
  "ISRO IIRS: Remote Sensing & GIS for Environmental Studies"
]

export function InternshipsSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="internships" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Practical experience gained through internships and specialized courses 
            that complement my academic learning.
          </p>
        </motion.div>

        {/* Internships */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Internships</h3>
          <div className="max-w-4xl mx-auto space-y-8">
            {internships.map((internship, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-card p-6 hover-lift"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 bg-gradient-to-r ${internship.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <internship.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                      <div>
                        <h4 className="text-xl font-bold">{internship.position}</h4>
                        <h5 className="text-lg text-primary">{internship.company}</h5>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium w-fit ${
                        internship.type === "Completed" 
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" 
                          : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                      }`}>
                        {internship.type}
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{internship.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{internship.location}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{internship.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {internship.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-muted rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Courses */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Courses & Certifications</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {courses.map((course, index) => (
              <motion.div
                key={course}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="glass-card p-4 text-center hover-lift"
              >
                <Award className="w-8 h-8 mx-auto mb-3 text-accent" />
                <p className="font-medium text-sm">{course}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
