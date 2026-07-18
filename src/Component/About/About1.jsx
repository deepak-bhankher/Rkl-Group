import { motion } from "framer-motion";

const GOLD = "#d9a441";
const DARK = "#1a1a1a";

const paragraphs = [
  "We are a team of dedicated people who are looking to define the corporate gifting industry in India.",
  "Our intention is to bring to India fantastic products with good quality at correct prices that our partners can work with. We produce products in India as well as overseas countries all subject to the parameters of what can work in our markets.",
  "We stock and sell B2B to our channel partners who come to us for nothing but the best. Our aim is to try and satisfy our clients in the best way we can.",
  "Our clients and suppliers we call as partners and we relish the opportunity to work long term with our partners.",
  "If you have a specific requirement of product or you are looking to make a range of products or if you need regular supply of products you can reach out to us. Every opportunity is looked at to see what value we can bring to you and help your business grow.",
  "Your growth is our growth.",
  "Let's look forward to a bright future together and be the best of what we do!",
];


function BrandMark() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 12 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center justify-center lg:justify-start"
    >
      <motion.img
        src="/logo.png"
        alt="Urban Gear Logo"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200, damping: 12 }}
        className="w-32 h-32 sm:w-36 sm:h-36 lg:w-44 lg:h-44 object-contain select-none"
        draggable={false}
      />
    </motion.div>
  );
}



export default function About1() {
  return (
    <section className="w-full bg-white py-14 sm:py-20 md:py-24 px-5 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(220px,340px)_1fr] gap-10 lg:gap-16 items-center">
        <BrandMark />

        <div>
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="text-lg sm:text-xl font-bold mb-3"
            style={{ color: DARK }}
          >
            About Us
          </motion.h2>

          <div className="space-y-3 sm:space-y-4">
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
                className="text-[15px] sm:text-base leading-relaxed text-gray-700"
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}