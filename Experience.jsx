import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Award } from 'lucide-react'

const Timeline = () => {
  const experiences = [
    {
      type: "experience",
      title: "Data Analytics & GenAI Intern",
      place: "Innomatics Research Labs",
      duration: "Sep 2024 – Dec 2024",
      points: [
        "Performed data preprocessing and analysis using Python libraries",
        "Conducted basic EDA to identify trends and patterns",
        "Supported analytical and AI-driven solutions and reporting",
        "Received Letter of Recommendation for research contributions"
      ]
    },
    {
      type: "education",
      title: "Bachelor of Computer Applications (BCA)",
      place: "SRR Arts and Science College (A), Karimnagar",
      duration: "Oct 2023 – May 2025",
      points: ["CGPA: 9.0/10", "Foundation in Computer Applications", "Practical problem-solving"]
    }
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display font-display">My <span className="text-primary">Journey</span></h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative glass p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                {exp.type === 'experience' ? <Briefcase className="text-primary" /> : <GraduationCap className="text-primary" />}
              </div>
              
              <div className="space-y-4">
                <div className="flex flex-wrap justify-between items-center gap-4">
                  <h3 className="text-2xl font-bold font-display">{exp.title}</h3>
                  <span className="px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">{exp.duration}</span>
                </div>
                <h4 className="text-lg text-secondary">{exp.place}</h4>
                <ul className="space-y-2 mt-4">
                  {exp.points.map((p, i) => (
                    <li key={i} className="text-gray-400 flex items-start gap-2 text-sm italic">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="glass p-6 flex items-center justify-center gap-4 border-dashed"
          >
            <Award className="text-tertiary" />
            <span className="font-medium">Letter of Recommendation from Innomatics Research Labs</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
