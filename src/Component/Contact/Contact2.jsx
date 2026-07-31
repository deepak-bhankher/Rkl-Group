import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, ArrowUpRight, Gift, Sparkles } from 'lucide-react'

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

const contactCards = [
  {
    icon: Mail,
    title: 'Email Us',
    detail: 'hello@rklgroup.com',
    sub: 'We reply within 24 hours',
  },
  {
    icon: Phone,
    title: 'Call Us',
    detail: '+91 98765 43210',
    sub: 'Mon - Sat, 10am to 7pm',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    detail: 'Hisar, Haryana, India',
    sub: 'By appointment only',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    detail: '10:00 AM - 7:00 PM',
    sub: 'Sunday closed',
  },
]

const Contact2 = () => {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-20 overflow-hidden" style={{ background: C.cream }}>
      {/* Decorative gold accents */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full blur-3xl" style={{ background: `${C.gold}08` }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ background: `${C.gold}06` }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: `${C.gold}03` }} />

      {/* Decorative lines */}
      <div className="absolute top-1/3 right-0 w-1/4 h-px" style={{ background: `linear-gradient(to left, ${C.gold}40, transparent)` }} />
      <div className="absolute bottom-1/3 left-0 w-1/4 h-px" style={{ background: `linear-gradient(to right, ${C.gold}40, transparent)` }} />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <div className="inline-flex items-center gap-2 mb-4">
          <Sparkles size={16} style={{ color: C.gold }} />
          <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: C.gold }}>
            Contact RKL Group
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-5 leading-tight" style={{ color: C.ink }}>
          We'd Love To
          <span className="block" style={{ color: C.gold, fontStyle: "italic" }}>Hear From You</span>
        </h2>
        <div className="w-20 h-1 mx-auto mb-6" style={{ background: C.gold }} />
        <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: C.gray }}>
          Whether it's a bulk order, a custom gifting solution, or a partnership inquiry — our team is ready to help.
        </p>
      </motion.div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
        {contactCards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
            whileHover={{ y: -8 }}
            className="group rounded-2xl p-8 shadow-xl transition-all duration-300 backdrop-blur-sm"
            style={{ 
              background: `${C.darkGreen}E6`,
              border: `1px solid ${C.gold}20`,
            }}
          >
            <div 
              className="w-14 h-14 rounded-full border flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-105"
              style={{ 
                background: `${C.gold}15`,
                borderColor: `${C.gold}30`,
              }}
            >
              <card.icon size={24} style={{ color: C.gold }} className="group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-lg font-semibold mb-1" style={{ color: C.cream }}>{card.title}</h3>
            <p className="text-base font-medium mb-1" style={{ color: C.gold }}>{card.detail}</p>
            <p className="text-sm" style={{ color: C.cream, opacity: 0.65 }}>{card.sub}</p>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA strip */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative max-w-6xl mx-auto rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden"
        style={{ 
          background: `linear-gradient(135deg, ${C.darkGreen}, ${C.darkGreenDeep})`,
          border: `1px solid ${C.gold}30`,
        }}
      >
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl" style={{ background: `${C.gold}08` }} />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full blur-3xl" style={{ background: `${C.gold}06` }} />
        
        <div className="absolute top-0 left-0 w-full h-px" style={{ background: `linear-gradient(to right, transparent, ${C.gold}30, transparent)` }} />
        <div className="absolute bottom-0 left-0 w-full h-px" style={{ background: `linear-gradient(to right, transparent, ${C.gold}30, transparent)` }} />

        <div className="relative text-center md:text-left">
          <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
            <Gift size={24} style={{ color: C.gold }} />
            <h3 className="text-2xl md:text-3xl font-bold" style={{ color: C.cream }}>
              Ready to start your order?
            </h3>
          </div>
          <p className="text-sm md:text-base" style={{ color: C.cream, opacity: 0.65 }}>
            Get a custom quote for your corporate gifting needs today.
          </p>
        </div>

        <motion.a
          href="mailto:hello@rklgroup.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="relative flex items-center gap-3 font-semibold px-8 py-4 rounded-full whitespace-nowrap transition-all duration-300"
          style={{ 
            background: `linear-gradient(135deg, ${C.gold}, ${C.goldDark})`,
            color: C.cream
          }}
        >
          Get a Quote
          <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </motion.a>
      </motion.div>
    </section>
  )
}

export default Contact2