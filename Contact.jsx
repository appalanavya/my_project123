import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">Get in <span className="text-secondary">Touch</span></h2>
              <p className="text-gray-400 text-xl font-light">Excited to collaborate on Data Science and GenAI projects. Let's build something amazing!</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group cursor-pointer" onClick={() => window.location.href = 'mailto:navyapatel0791@gmail.com'}>
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-black transition-all">
                  <Mail />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-lg font-medium">navyapatel0791@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-black transition-all">
                  <Phone />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-lg font-medium">+91 7989292123</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {[
                { icon: <Linkedin />, link: "https://linkedin.com/in/navyapatel30" },
                { icon: <Github />, link: "https://github.com/dashboard" }
              ].map((social, i) => (
                <a key={i} href={social.link} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-secondary hover:border-secondary transition-all">
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-10"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-gray-400">Name</label>
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-secondary outline-none transition-all text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-gray-400">Email</label>
                  <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-secondary outline-none transition-all text-sm" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-gray-400">Message</label>
                <textarea rows="5" placeholder="How can I help you today?" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-secondary outline-none transition-all resize-none text-sm"></textarea>
              </div>
              <button className="btn-primary w-full flex items-center justify-center gap-2 group">
                Send Message <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
