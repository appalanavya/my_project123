import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display">
            About <span className="text-primary">Me</span>
          </h2>
          
          <div className="glass p-8 md:p-12 text-left space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a <span className="text-secondary font-semibold">BCA Graduate</span> with a passion for transforming complex data into actionable insights. My journey in technology led me to specialize in <span className="text-primary font-semibold">Data Analytics and Generative AI</span>, where I find the intersection of logic and creativity most rewarding.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              During my internship at <span className="text-tertiary">Innomatics Research Lab</span>, I gained hands-on experience in preprocessing vast datasets, conducting exploratory data analysis, and building AI-driven solutions. I am a quick learner, always eager to explore emerging technologies like <span className="text-secondary">RAG, LLMs, and Stable Diffusion</span>.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My approach combines technical rigor with practical problem-solving, aiming to create tools that make research more efficient and education more interactive.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
