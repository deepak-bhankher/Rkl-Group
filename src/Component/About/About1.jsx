import { motion } from "framer-motion";

// Palette matched exactly with Home3.jsx
const C = {
  cream: "#F3EFE7",
  ink: "#1D1D1B",
  gray: "#6B6B66",
};

const paragraphs = [
  "We are a team of dedicated people who are looking to define the corporate gifting industry in India.",
  "Our intention is to bring to India fantastic products with good quality at correct prices that our partners can work with. We produce products in India as well as overseas countries all subject to the parameters of what can work in our markets.",
  "We stock and sell B2B to our channel partners who come to us for nothing but the best. Our aim is to try and satisfy our clients in the best way we can.",
  "Our clients and suppliers we call as partners and we relish the opportunity to work long term with our partners.",
  "If you have a specific requirement of product or you are looking to make a range of products or if you need regular supply of products you can reach out to us. Every opportunity is looked at to see what value we can bring to you and help your business grow.",
  "Your growth is our growth.",
  "Let's look forward to a bright future together and be the best of what we do!",
];

export default function About1() {
  return (
    <section
      className="w-full py-14 sm:py-20 md:py-24 px-5 sm:px-8 md:px-12 lg:px-20"
      style={{ background: C.cream }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center"
          style={{ color: C.ink }}
        >
          About Us
        </motion.h2>

        <div className="space-y-4">
          {paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="text-[15px] sm:text-base leading-relaxed text-center"
              style={{ color: C.gray }}
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}