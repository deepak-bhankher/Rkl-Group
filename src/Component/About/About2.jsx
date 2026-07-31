import { motion } from "framer-motion";
import { FaGift, FaUsers, FaHandHoldingHeart, FaIdBadge, FaArrowRight } from "react-icons/fa";

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

const SOLUTIONS = [
  {
    icon: FaGift,
    label: "Festive Gifting",
    gradient: `linear-gradient(150deg, ${C.darkGreen} 0%, ${C.darkGreenDeep} 100%)`,
  },
  {
    icon: FaUsers,
    label: "Employee Engagement",
    gradient: `linear-gradient(150deg, ${C.darkGreen} 0%, ${C.darkGreenDeep} 100%)`,
  },
  {
    icon: FaHandHoldingHeart,
    label: "Client Appreciation",
    gradient: `linear-gradient(150deg, ${C.darkGreen} 0%, ${C.darkGreenDeep} 100%)`,
  },
  {
    icon: FaIdBadge,
    label: "Event & Conferences",
    gradient: `linear-gradient(150deg, ${C.darkGreen} 0%, ${C.darkGreenDeep} 100%)`,
  },
];

export default function About2() {
  return (
    <section className="w-full py-14 sm:py-20 md:py-24 px-5 sm:px-8 md:px-12 lg:px-20" style={{ background: C.cream }}>
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.4 }}
          className="text-xs font-bold tracking-[0.2em] mb-3"
          style={{ color: C.gold }}
        >
          SOLUTIONS
        </motion.p>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-[42px] font-extrabold leading-tight max-w-md"
            style={{ color: C.ink }}
          >
            Tailored Solutions for Every Occasion
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="text-sm sm:text-[15px] max-w-xs"
            style={{ color: C.gray }}
          >
            Whether it's a festival, a milestone, or a corporate event, we
            have the right gifting solution for you.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {SOLUTIONS.map(({ icon: Icon, label, gradient }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="rounded-2xl overflow-hidden cursor-pointer group"
              style={{
                background: gradient,
                border: `1px solid ${C.gold}30`,
              }}
            >
              <div className="aspect-[4/5] flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.12, rotate: 4 }}
                  transition={{ type: "spring", stiffness: 220, damping: 14 }}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center"
                  style={{ background: `${C.gold}20` }}
                >
                  <Icon size={26} color={C.gold} />
                </motion.div>
              </div>
              <div className="px-3 sm:px-4 pb-4 sm:pb-5 pt-1">
                <p className="text-[13px] sm:text-sm font-semibold text-center" style={{ color: C.cream }}>
                  {label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.45, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center mt-10 sm:mt-14"
        >
          <motion.button
            whileHover={{ scale: 1.03, gap: "12px" }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-[13px] font-bold tracking-[0.15em] cursor-pointer"
            style={{
              border: `1.5px solid ${C.ink}`,
              color: C.ink,
            }}
          >
            VIEW ALL SOLUTIONS
            <FaArrowRight size={12} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}