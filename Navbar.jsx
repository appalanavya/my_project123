import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Skills', href: '#skills' },
    { title: 'Projects', href: '#projects' },
    { title: 'Experience', href: '#experience' },
    { title: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className="container mx-auto px-6">
        <div className={`relative glass p-4 md:px-8 flex items-center justify-between transition-all duration-500 ${scrolled ? 'rounded-2xl bg-white/5 backdrop-blur-xl' : 'rounded-none bg-transparent border-none'}`}>
          <a href="#" className="text-2xl font-bold font-display tracking-tight">
            APPALA <span className="text-secondary">NAVYA</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.title} href={link.href} className="text-sm font-medium text-gray-400 hover:text-secondary transition-colors">
                {link.title}
              </a>
            ))}
            <a href="#contact" className="btn-primary px-6 py-2 text-sm">Hire Me</a>
          </div>

          <button className="md:hidden text-gray-400" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-4 px-6 md:hidden"
          >
            <div className="glass p-6 flex flex-col gap-4 text-center">
              {navLinks.map((link) => (
                <a key={link.title} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-400 hover:text-secondary">
                  {link.title}
                </a>
              ))}
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="btn-primary py-3">Hire Me</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
