import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

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

const STATS = [
  { value: 500, suffix: "+", label: "Corporate Clients" },
  { value: 1200, suffix: "+", label: "Products Delivered" },
  { value: 15, suffix: "+", label: "Cities Served" },
  { value: 8, suffix: "", label: "Years of Trust" },
];

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function About3() {
  return (
    <section
      className="w-full py-16 sm:py-20 md:py-28 px-5 sm:px-8 md:px-12 lg:px-20 overflow-hidden relative"
      style={{ background: C.darkGreenDeep }}
    >
      {/* ambient glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full blur-[110px]"
        style={{ background: C.gold }}
      />

      <div className="max-w-6xl mx-auto relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.4 }}
            className="text-xs font-bold tracking-[0.2em] mb-4"
            style={{ color: C.gold }}
          >
            OUR STORY
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: 0.05, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-[44px] font-extrabold leading-tight mb-5"
            style={{ color: C.cream }}
          >
            Built on trust,
            <br />
            delivered with care
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
            className="text-[15px] sm:text-base leading-relaxed max-w-lg"
            style={{ color: C.cream, opacity: 0.65 }}
          >
            What started as a small team with a simple idea — better corporate
            gifting for Indian businesses — has grown into a partner trusted
            by companies across the country. Every hamper, every branded
            product, every delivery carries the same promise: quality that
            reflects on your brand as much as it does on ours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.45, delay: 0.3, ease: "easeOut" }}
            className="mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3 rounded-full text-sm font-semibold cursor-pointer"
              style={{
                background: C.gold,
                color: C.darkGreenDeep,
              }}
            >
              Learn Our Journey
            </motion.button>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="rounded-2xl p-5 sm:p-7"
              style={{
                background: `${C.gold}10`,
                border: `1px solid ${C.gold}30`,
              }}
            >
              <p
                className="text-3xl sm:text-4xl md:text-[42px] font-black mb-1"
                style={{ color: C.gold }}
              >
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-xs sm:text-sm font-medium" style={{ color: C.cream, opacity: 0.55 }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}