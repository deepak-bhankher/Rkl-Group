import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  ChevronRight,
  ChevronDown,
  Truck,
  UploadCloud,
  ImageOff,
} from "lucide-react";

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

// 👉 Image paths yaha daalna — public folder me files rakh ke path likh dena
// e.g. "/products/fidgety/1.jpg"
const GALLERY = ["home20.png", "home21.png","home19.png"];

const UNIT_PRICE = 22; // price per unit at 50 qty
const QTY_TIERS = [25, 50, 100, 250, 500];
const TIER_FACTOR = { 25: 1.15, 50: 1, 100: 0.9, 250: 0.8, 500: 0.65 };
const SIZE_OPTIONS = ["Standard", "Compact", "Large"];

const RELATED = [{"name": "Tango", "code": "UG-GS13", "price": 1099}, {"name": "Buzz", "code": "UG-GS16", "price": 1999}, {"name": "Rove", "code": "UG-GS27", "price": 1299}, {"name": "Volt 10K", "code": "UG-PB10", "price": 999}];

function GalleryImage({ src }) {
  if (!src) {
    return (
      <div className="flex h-full w-full items-center justify-center" style={{ background: C.creamDeep }}>
        <ImageOff size={28} style={{ color: C.gray }} />
      </div>
    );
  }
  return <img src={src} alt="Product" className="h-full w-full object-cover" />;
}

export default function Product1() {
  const [activeImg, setActiveImg] = useState(0);
  const [size, setSize] = useState(SIZE_OPTIONS[0]);
  const [qty, setQty] = useState(50);
  const [tab, setTab] = useState("description");

  const unitForQty = Math.round(UNIT_PRICE * TIER_FACTOR[qty]);
  const total = unitForQty * qty;

  return (
    <div style={{ fontFamily: "Inter, system-ui, sans-serif", background: C.cream, minHeight: "100vh" }}>
      {/* ---- Breadcrumb ---- */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 pt-6">
        <div className="flex items-center gap-1.5 text-[12.5px]" style={{ color: C.gray }}>
          <span>Home</span>
          <ChevronRight size={13} />
          <span>Speakers & Audio</span>
          <ChevronRight size={13} />
          <span style={{ color: C.ink, fontWeight: 600 }}>Fidgety</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 py-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* ============ SECTION 1 — GALLERY ============ */}
        <div>
          <motion.div
            key={activeImg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-2xl"
            style={{ 
              aspectRatio: "1 / 1", 
              border: `1px solid ${C.gold}20`,
              background: C.white
            }}
          >
            <GalleryImage src={GALLERY[activeImg]} />
            <span
              className="absolute top-3 left-3 rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wide"
              style={{ background: C.gold, color: C.cream }}
            >
              BESTSELLER
            </span>
          </motion.div>

          <div className="mt-3 grid grid-cols-4 gap-3">
            {GALLERY.map((src, i) => (
              <motion.button
                key={i}
                onClick={() => setActiveImg(i)}
                whileHover={{ y: -2 }}
                className="relative overflow-hidden rounded-xl"
                style={{
                  aspectRatio: "1 / 1",
                  border: activeImg === i ? `2px solid ${C.gold}` : `1px solid ${C.gold}20`,
                  background: C.white
                }}
              >
                <GalleryImage src={src} />
              </motion.button>
            ))}
          </div>
        </div>

        {/* ============ SECTION 2 — INFO PANEL ============ */}
        <div>
          <h1 className="text-[26px] sm:text-[30px] font-extrabold" style={{ color: C.ink }}>
            Fidgety
          </h1>

          <div className="mt-2 flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4].map((s) => (
                <Star key={s} size={15} fill={C.gold} style={{ color: C.gold }} />
              ))}
              <Star size={15} style={{ color: "#D8D5CC" }} />
            </div>
            <span className="text-[12.5px]" style={{ color: C.gray }}>
              4 (3)
            </span>
          </div>

          <p className="mt-3 text-[13.5px]" style={{ color: C.gray }}>
            Get your logo noticed with this handy 3-in-1 charging stand
          </p>

          <div className="mt-4 pt-4" style={{ borderTop: `1px solid ${C.gold}20` }}>
            <p className="text-[12.5px]" style={{ color: C.gray }}>
              Price below is MRP (inclusive of all taxes)
            </p>
            <button className="text-[12.5px] font-semibold underline mt-0.5" style={{ color: C.ink }}>
              See Details
            </button>
          </div>

          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-[28px] font-extrabold" style={{ color: C.ink }}>
              ₹{total.toLocaleString("en-IN")}.00
            </span>
          </div>
          <p className="text-[12.5px]" style={{ color: C.gray }}>
            ₹{unitForQty}.00 each / {qty} units
          </p>

          <div className="mt-4 flex flex-col gap-1.5 text-[12.5px]" style={{ color: C.ink }}>
            <span className="flex items-center gap-2">
              <Truck size={15} style={{ color: C.gray }} />
              Delivery to 110001{" "}
              <button className="font-semibold underline" style={{ color: C.ink }}>
                More information
              </button>
            </span>
            <span className="flex items-center gap-2 ml-[23px]" style={{ color: C.gold, fontWeight: 600 }}>
              28 July · FREE
            </span>
          </div>

          {/* ---- Size ---- */}
          <div className="mt-6">
            <label className="text-[13px] font-semibold mb-1.5 block" style={{ color: C.ink }}>
              Size
            </label>
            <div className="relative">
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="w-full appearance-none rounded-lg px-4 py-3 text-[13.5px] font-medium outline-none"
                style={{ 
                  border: `1px solid ${C.gold}30`, 
                  color: C.ink, 
                  background: C.white 
                }}
              >
                {SIZE_OPTIONS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <ChevronDown size={15} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2" style={{ color: C.gray }} />
            </div>
          </div>

          {/* ---- Quantity ---- */}
          <div className="mt-4">
            <label className="text-[13px] font-semibold mb-1.5 block" style={{ color: C.ink }}>
              Quantity
            </label>
            <div className="relative">
              <select
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
                className="w-full appearance-none rounded-lg px-4 py-3 text-[13.5px] font-medium outline-none"
                style={{ 
                  border: `1px solid ${C.gold}30`, 
                  color: C.ink, 
                  background: C.white 
                }}
              >
                {QTY_TIERS.map((q) => (
                  <option key={q} value={q}>
                    {q} (₹{Math.round(UNIT_PRICE * TIER_FACTOR[q])}.00 / unit)
                  </option>
                ))}
              </select>
              <ChevronDown size={15} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2" style={{ color: C.gray }} />
            </div>
          </div>

          {/* ---- Upload design ---- */}
          <Link to="/design-studio" state={{ name: "Fidgety", unitPrice: unitForQty, qty, size }}>
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 flex items-center justify-center gap-2 rounded-lg py-3.5 text-[14px] font-bold transition-all duration-300"
              style={{ 
                background: `linear-gradient(135deg, ${C.gold}, ${C.goldDark})`,
                color: C.cream
              }}
            >
              Upload design
              <UploadCloud size={17} />
            </motion.div>
          </Link>
        </div>
      </div>

      {/* ============ SECTION 3 — DETAILS TABS ============ */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 py-10">
        <div className="flex gap-6 border-b" style={{ borderColor: `${C.gold}20` }}>
          {["description", "specifications", "reviews"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="relative pb-3 text-[13.5px] font-semibold capitalize"
              style={{ color: tab === t ? C.ink : C.gray }}
            >
              {t}
              {tab === t && (
                <motion.div layoutId="tabLine-Product1" className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: C.gold }} />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="pt-5 text-[13.5px] leading-relaxed"
            style={{ color: C.gray }}
          >
            {tab === "description" && <p>Fidgety is a 3-in-1 wireless charging station that keeps your desk clutter-free. Charge your phone, earbuds and watch together, use the built-in stand to prop up your device for calls, and keep restless hands busy with the fidget toy base — all wrapped in a warm bamboo finish that fits any workspace.</p>}
            {tab === "specifications" && (
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                <li>Dimensions: 10 x 8 x 3cm</li>
                <li>Output: 15W fast wireless charging</li>
                <li>Material: Bamboo + ABS</li>
                <li>Charging ports: 1x USB-C input</li>
                <li>Compatibility: Qi-enabled devices</li>
                <li>Branding space: Top panel, 4 x 2cm</li>
              </ul>
            )}
            {tab === "reviews" && (
              <div className="flex flex-col gap-3">
                <p>4 out of 5 based on 3 reviews. Customers highlight the build quality and finish.</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}