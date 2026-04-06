import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Database, Brain, Cpu, BarChart3, Binary } from 'lucide-react'

const skillGroups = [
  {
    title: "Programming & AI",
    icon: <Code2 className="w-6 h-6" />,
    skills: ["Python", "NumPy", "Pandas", "AI Software Development"]
  },
  {
    title: "ML / DL",
    icon: <Brain className="w-6 h-6" />,
    skills: ["Supervised Learning", "Regression", "Classification", "Unsupervised Learning", "Computer Vision"]
  },
  {
    title: "Generative AI",
    icon: <Cpu className="w-6 h-6" />,
    skills: ["NLP", "RAG", "LLM", "Stable Diffusion", "LangChain"]
  },
  {
    title: "AI Automation",
    icon: <Binary className="w-6 h-6" />,
    skills: ["Groq", "Gemini", "OpenAI", "Antigravity", "Cursor AI"]
  },
  {
    title: "Data Visualization",
    icon: <BarChart3 className="w-6 h-6" />,
    skills: ["Matplotlib", "Seaborn"]
  },
  {
    title: "Dev Tools",
    icon: <Database className="w-6 h-6" />,
    skills: ["Jupyter", "VS Code", "PyCharm", "GitHub"]
  }
]

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 font-display">Technical <span className="text-secondary">Skills</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="glass p-6 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-black transition-all duration-300">
                  {group.icon}
                </div>
                <h3 className="text-xl font-semibold">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-400 group-hover:border-secondary/30 group-hover:text-secondary/70 transition-all duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
