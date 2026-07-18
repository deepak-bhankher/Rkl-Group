import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

const GOLD = "#d9a441";

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
      style={{ background: "#0e0e0e" }}
    >
      {/* ambient glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.35 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full blur-[110px]"
        style={{ background: GOLD }}
      />

      <div className="max-w-6xl mx-auto relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.4 }}
            className="text-xs font-bold tracking-[0.2em] mb-4"
            style={{ color: GOLD }}
          >
            OUR STORY
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: 0.05, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-[44px] font-extrabold text-white leading-tight mb-5"
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
            className="text-white/60 text-[15px] sm:text-base leading-relaxed max-w-lg"
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
                background: GOLD,
                color: "#1a1a1a",
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
                background: "rgba(217,164,65,0.06)",
                border: "1px solid rgba(217,164,65,0.2)",
              }}
            >
              <p
                className="text-3xl sm:text-4xl md:text-[42px] font-black mb-1"
                style={{ color: GOLD }}
              >
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-white/55 text-xs sm:text-sm font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}