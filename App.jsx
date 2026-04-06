import React from 'react'
import ThreeBackground from './components/ThreeBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Timeline from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <main className="bg-background min-h-screen relative">
      <ThreeBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
      <footer className="py-10 text-center text-gray-500 border-t border-white/5">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} Appala Navya. Built with React & Three.js</p>
        </div>
      </footer>
    </main>
  )
}

export default App
