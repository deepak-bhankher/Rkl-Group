import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronDown } from "react-icons/io5";

const FAQS = [
  {
    q: "What is FUZO?",
    a: "FUZO is a corporate gifting brand that curates premium, branded products designed to make every gift feel personal, memorable, and professional.",
  },
  {
    q: "Who should choose FUZO for corporate gifting?",
    a: "Businesses of any size — startups, enterprises, HR teams, and event planners — who want to gift employees, clients, or partners something thoughtful and on-brand.",
  },
  {
    q: "Does FUZO provide logo branding and custom corporate merchandise?",
    a: "Yes, FUZO offers full logo branding and custom merchandise options so every gift reflects your company's identity.",
  },
  {
    q: "What types of corporate gifting products does FUZO offer?",
    a: "From apparel and drinkware to tech accessories and premium hampers, FUZO offers a wide range of curated gifting categories.",
  },
  {
    q: "How can companies purchase FUZO products for corporate gifting?",
    a: "Companies can reach out directly through our contact page or phone line to discuss bulk orders, branding needs, and delivery timelines.",
  },
];

function FaqRow({ item, isOpen, onClick, isLast }) {
  return (
    <div
      className={`px-6 sm:px-8 ${!isLast ? "border-b border-white/10" : ""}`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 py-5 sm:py-6 text-left cursor-pointer"
      >
        <span
          className="text-[15px] sm:text-base font-semibold leading-snug"
          style={{ color: isOpen ? "#d9a441" : "#ffffff" }}
        >
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="flex items-center justify-center shrink-0"
          style={{ color: "#d9a441" }}
        >
          <IoChevronDown size={18} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="text-white/60 text-sm sm:text-[15px] leading-relaxed pb-5 sm:pb-6 pr-8">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Home7() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section
      className="w-full py-16 sm:py-20 md:py-28 px-5 sm:px-8 md:px-12 lg:px-20"
      
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 lg:gap-16 items-start">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="font-extrabold tracking-tight leading-[1.05] text-[42px] sm:text-5xl md:text-6xl lg:text-[56px] whitespace-normal lg:whitespace-pre-line"
          style={{ color: "#d9a441" }}
        >
          {"Frequently\nAsked\nQuestions"}
        </motion.h2>

        {/* Accordion panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="w-full rounded-2xl sm:rounded-3xl overflow-hidden backdrop-blur-md"
          style={{
            background: "black",
            border: "1px solid rgba(217,164,65,0.25)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
          }}
        >
          {FAQS.map((item, i) => (
            <FaqRow
              key={item.q}
              item={item}
              isOpen={openIndex === i}
              isLast={i === FAQS.length - 1}
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}