import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Package, Gift, Sparkles } from 'lucide-react'

// Color palette matching Home3
const C = {
  cream: "#F3EFE7",
  creamDeep: "#ECE7DC",
  ink: "#1D1D1B",
  gray: "#6B6B66",
  gold: "#B08D45",
  goldDark: "#8C6F35",
  darkGreen: "#0E1F16",
  darkGreenDeep: "#0A170F",
};

const Contact1 = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-20 overflow-hidden" style={{ background: C.cream }}>
      {/* Decorative gold accents */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ background: `${C.gold}08` }} />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl" style={{ background: `${C.gold}06` }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: `${C.gold}03` }} />

      {/* Decorative border lines */}
      <div className="absolute top-20 left-0 w-1/3 h-px bg-gradient-to-r from-transparent" style={{ background: `linear-gradient(to right, transparent, ${C.gold}40)` }} />
      <div className="absolute bottom-20 right-0 w-1/3 h-px bg-gradient-to-l from-transparent" style={{ background: `linear-gradient(to left, transparent, ${C.gold}40)` }} />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left - Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col justify-center"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles size={16} style={{ color: C.gold }} />
            <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: C.gold }}>
              Get In Touch
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4" style={{ color: C.ink }}>
            Let's Build
            <span className="block" style={{ color: C.gold, fontStyle: "italic" }}>Something Memorable</span>
          </h2>
          
          <div className="w-20 h-1 mb-6" style={{ background: C.gold }} />

          <p className="text-base md:text-lg mb-12 max-w-md leading-relaxed" style={{ color: C.gray }}>
            Reach out for corporate gifting solutions, bulk orders, or custom branded merchandise tailored to your business.
          </p>

          <div className="space-y-6">
            {[
              { icon: Mail, label: 'Email', value: 'hello@rklgroup.com' },
              { icon: Phone, label: 'Phone', value: '+91 98765 43210' },
              { icon: MapPin, label: 'Location', value: 'Hisar, Haryana, India' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex items-center gap-4 cursor-pointer"
              >
                <div 
                  className="w-12 h-12 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:border-[#C9A24B]"
                  style={{ 
                    background: `${C.gold}15`,
                    borderColor: `${C.gold}30`,
                  }}
                >
                  <item.icon size={20} style={{ color: C.gold }} className="group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: C.gray }}>{item.label}</p>
                  <p className="text-base md:text-lg font-medium" style={{ color: C.ink }}>{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust badges */}
          <div className="flex items-center gap-6 mt-10 pt-8 border-t" style={{ borderColor: `${C.gold}20` }}>
            <div className="flex items-center gap-2">
              <Gift size={18} style={{ color: C.gold }} />
              <span className="text-xs" style={{ color: C.gray }}>Premium Quality</span>
            </div>
            <div className="flex items-center gap-2">
              <Package size={18} style={{ color: C.gold }} />
              <span className="text-xs" style={{ color: C.gray }}>Bulk Orders</span>
            </div>
          </div>
        </motion.div>

        {/* Right - Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="rounded-2xl p-8 md:p-12 shadow-2xl backdrop-blur-sm transition-colors duration-500"
          style={{ 
            background: `${C.darkGreen}E6`,
            border: `1px solid ${C.gold}20`,
          }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: `${C.gold}20` }}>
              <Send size={14} style={{ color: C.gold }} />
            </div>
            <h3 className="text-xl font-semibold" style={{ color: C.cream }}>Send a Message</h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: C.cream }}>
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full rounded-xl px-5 py-3.5 transition-all duration-300 focus:outline-none focus:ring-1"
                style={{ 
                  background: `${C.darkGreenDeep}`,
                  border: `1px solid ${C.gold}20`,
                  color: C.cream,
                  placeholderColor: `${C.cream}30`,
                }}
              />
            </div>

            <div>
              <label className="block text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: C.cream }}>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@company.com"
                className="w-full rounded-xl px-5 py-3.5 transition-all duration-300 focus:outline-none focus:ring-1"
                style={{ 
                  background: `${C.darkGreenDeep}`,
                  border: `1px solid ${C.gold}20`,
                  color: C.cream,
                  placeholderColor: `${C.cream}30`,
                }}
              />
            </div>

            <div>
              <label className="block text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: C.cream }}>
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell us about your requirement..."
                className="w-full rounded-xl px-5 py-3.5 transition-all duration-300 focus:outline-none focus:ring-1 resize-none"
                style={{ 
                  background: `${C.darkGreenDeep}`,
                  border: `1px solid ${C.gold}20`,
                  color: C.cream,
                  placeholderColor: `${C.cream}30`,
                }}
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full flex items-center justify-center gap-3 font-semibold py-4 rounded-xl transition-all duration-300"
              style={{ 
                background: `linear-gradient(135deg, ${C.gold}, ${C.goldDark})`,
                color: C.cream
              }}
            >
              Send Message
              <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact1