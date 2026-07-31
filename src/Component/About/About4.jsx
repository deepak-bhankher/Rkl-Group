import { motion } from "framer-motion";
import {
  FaAward,
  FaTruck,
  FaPaintBrush,
  FaHandshake,
} from "react-icons/fa";

// Palette matched exactly with Home3.jsx
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

const VALUES = [
  {
    icon: FaAward,
    title: "Premium Quality",
    desc: "Every product is sourced and checked to meet a standard worth putting your brand on.",
  },
  {
    icon: FaPaintBrush,
    title: "Custom Branding",
    desc: "Logo placement, packaging, and finishes tailored to match your company's identity.",
  },
  {
    icon: FaTruck,
    title: "Pan-India Delivery",
    desc: "Reliable dispatch and tracking, whether it's a single hamper or a bulk order.",
  },
  {
    icon: FaHandshake,
    title: "Long-Term Partnership",
    desc: "We work with clients and suppliers as partners, built for years, not one order.",
  },
];

export default function About4() {
  return (
    <section className="w-full py-14 sm:py-20 md:py-24 px-5 sm:px-8 md:px-12 lg:px-20" style={{ background: C.cream }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.4 }}
            className="text-xs font-bold tracking-[0.2em] mb-3"
            style={{ color: C.gold }}
          >
            WHY URBAN GEAR
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-[42px] font-extrabold"
            style={{ color: C.ink }}
          >
            What sets us apart
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {VALUES.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="rounded-2xl p-6 sm:p-7"
              style={{
                background: C.creamDeep,
                border: `1px solid ${C.ink}14`,
              }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: -6 }}
                transition={{ type: "spring", stiffness: 220, damping: 14 }}
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: C.darkGreenDeep }}
              >
                <Icon size={20} color={C.gold} />
              </motion.div>
              <h3
                className="text-base sm:text-lg font-bold mb-2"
                style={{ color: C.ink }}
              >
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: C.gray }}>{desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
          className="mt-12 sm:mt-16 rounded-3xl overflow-hidden relative px-6 sm:px-10 py-10 sm:py-14 text-center"
          style={{ background: C.darkGreenDeep }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.22 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="pointer-events-none absolute -bottom-20 -left-20 w-64 h-64 rounded-full blur-[90px]"
            style={{ background: C.gold }}
          />
          <p
            className="relative text-xl sm:text-2xl md:text-3xl font-bold max-w-2xl mx-auto leading-snug"
            style={{ color: C.cream }}
          >
            "Your growth is our growth — let's build something your
            partners remember."
          </p>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="relative mt-7 px-7 py-3 rounded-full text-sm font-semibold cursor-pointer"
            style={{ background: C.gold, color: C.darkGreenDeep }}
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}