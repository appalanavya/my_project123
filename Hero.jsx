import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-block px-4 py-1 rounded-full border border-secondary/20 bg-secondary/5 text-secondary text-sm font-medium mb-4 animate-pulse">
            Data Analytics & GenAI Intern @ Innomatics
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight">
            I'm <span className="bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">Appala Navya</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Data Scientist | AI | ML crafting intelligent solutions through 
            <span className="text-secondary"> Machine Learning</span>, 
            <span className="text-primary"> NLP</span>, and 
            <span className="text-tertiary"> Generative AI</span>.
          </p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-wrap justify-center gap-6 mt-10"
          >
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#" className="btn-outline">
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50 blur-3xl"></div>
    </section>
  )
}

export default Hero
