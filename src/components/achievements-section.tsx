import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Trophy, Medal, Palette, Zap, Award, Star } from "lucide-react"

const achievements = [
  {
    title: "Gold Medal of Excellence",
    subtitle: "SOF National Science Olympiad",
    year: "2021-22",
    description: "Awarded gold medal for outstanding performance in the Science Olympiad Foundation's National Science Olympiad.",
    icon: Trophy,
    color: "from-yellow-400 to-orange-500"
  }
]

const extracurriculars = [
  {
    title: "Fine Arts Excellence",
    subtitle: "Diploma of Chitra Visharad (4th Year)",
    description: "Advanced diploma in fine arts showcasing artistic skills and creative expression through traditional and modern techniques.",
    icon: Palette,
    color: "from-pink-500 to-purple-600",
    level: "Advanced"
  },
  {
    title: "Martial Arts Proficiency", 
    subtitle: "Karate Upper Green Belt (3rd Kyu)",
    description: "Demonstrated discipline, physical fitness, and mental focus through dedicated karate training and progression.",
    icon: Zap,
    color: "from-green-500 to-teal-600",
    level: "Intermediate"
  }
]

export function AchievementsSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Achievements & Extracurriculars
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recognitions and diverse activities that showcase my commitment to excellence 
            both in academics and personal development.
          </p>
        </motion.div>

        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Academic Achievements</h3>
          <div className="max-w-2xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-card p-8 hover-lift relative overflow-hidden"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-10 rounded-full -translate-y-8 translate-x-8"></div>
                
                <div className="flex items-center gap-6">
                  <div className={`w-20 h-20 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center shadow-glow animate-glow`}>
                    <achievement.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-xl font-bold">{achievement.title}</h4>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded-full text-xs font-medium">
                        {achievement.year}
                      </span>
                    </div>
                    <h5 className="text-lg text-primary mb-3">{achievement.subtitle}</h5>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Extracurriculars */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Extracurricular Activities</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {extracurriculars.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                className="glass-card p-6 hover-lift"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${activity.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <activity.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{activity.title}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      activity.level === "Advanced" 
                        ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                        : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                    }`}>
                      {activity.level}
                    </span>
                  </div>
                </div>
                
                <h5 className="text-primary font-medium mb-3">{activity.subtitle}</h5>
                <p className="text-muted-foreground text-sm">{activity.description}</p>
                
                {/* Progress indicator */}
                <div className="mt-4 flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < (activity.level === "Advanced" ? 5 : 3)
                          ? "text-yellow-400 fill-current"
                          : "text-muted"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="glass-card p-6 max-w-2xl mx-auto">
            <Medal className="w-12 h-12 mx-auto mb-4 text-accent" />
            <h3 className="text-xl font-bold mb-2">Continuous Growth</h3>
            <p className="text-muted-foreground">
              Always striving for excellence in both professional and personal endeavors, 
              combining technical expertise with creative and physical disciplines.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}