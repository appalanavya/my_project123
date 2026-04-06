import React from 'react'
import { motion } from 'framer-motion'
import { Github, Cpu, MessageSquare, Mic } from 'lucide-react'

const projects = [
  {
    title: "Crew AI Research Agent",
    icon: <Cpu className="w-6 h-6" />,
    description: "Developed a sophisticated multi-agent system using CrewAI to automate complex research workflows. The system autonomously browses, synthesizes, and reports on technical topics, resulting in a 30% increase in research efficiency.",
    tags: ["Python", "CrewAI", "GenAI", "Automation"],
    results: ["30% Faster data collection", "Automated Workflow", "High-Fidelity Research"],
    color: "blue"
  },
  {
    title: "AI Academic Assistant Chatbot",
    icon: <MessageSquare className="w-6 h-6" />,
    description: "Engineered a RAG-based (Retrieval-Augmented Generation) chatbot tailored for academic environments. Utilizing NLP and LLMs, it provides instant, accurate responses to student queries, improving response times by 50%.",
    tags: ["NLP", "Python", "LLM", "RAG"],
    results: ["50% Increased response speed", "Enhanced student engagement", "Gemini Integrated"],
    color: "purple"
  },
  {
    title: "Desktop Voice Assistant",
    icon: <Mic className="w-6 h-6" />,
    description: "Built an intelligent, hands-free automation tool integrated with real-time speech recognition and command processing. This project streamlined routine desktop tasks, enhancing operational efficiency by 45%.",
    tags: ["Speech Recognition", "Python", "Automation"],
    results: ["45% Enhanced efficiency", "Real-time execution", "Hands-free control"],
    color: "pink"
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Featured <span className="text-tertiary">Projects</span></h2>
          <p className="text-gray-400">Practical implementations of AI & Data Science</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass p-8 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                <Github size={24} className="cursor-pointer hover:text-tertiary" />
              </div>
              
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-tertiary border border-white/10 group-hover:scale-110 transition-transform">
                {project.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 font-display group-hover:text-tertiary transition-colors">{project.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed text-sm">{project.description}</p>
              
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-medium px-2 py-0.5 bg-tertiary/10 text-tertiary border border-tertiary/20 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-white/5 mt-4">
                  {project.results.map((res, i) => (
                    <div key={i} className="text-xs text-gray-300 flex items-center gap-2 mb-1">
                      <span className="w-1 h-1 bg-tertiary rounded-full"></span>
                      {res}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
