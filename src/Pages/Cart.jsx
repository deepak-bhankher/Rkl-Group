import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Plus, ImageOff, ChevronDown } from "lucide-react";

const C = {
  navy: "#0B1B3A",
  gold: "#C9A227",
  ink: "#1C2333",
  paper: "#F7F5F1",
};

export default function Cart() {
  const location = useLocation();
  const incoming = location.state;
  const [showOptions, setShowOptions] = useState(false);
  const [promoOpen, setPromoOpen] = useState(false);

  const [item, setItem] = useState(
    incoming
      ? { ...incoming }
      : { name: "Corrugated Boxes", unitPrice: 30, qty: 50, size: '4.5" x 4.5" x 3.5"', image: "" }
  );

  const itemTotal = (item.unitPrice || 0) * (item.qty || 1);
  const subtotal = itemTotal;

  const updateQty = (q) => setItem({ ...item, qty: q });

  return (
    <div style={{ fontFamily: "Inter, system-ui, sans-serif", background: C.paper, minHeight: "100vh" }}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10 py-8 sm:py-12">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-[26px] sm:text-[30px] font-extrabold mb-8"
          style={{ color: C.ink }}
        >
          My Cart
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ---- Cart items ---- */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="flex gap-5 pb-6" style={{ borderBottom: "1px solid rgba(11,27,58,0.1)" }}>
              <div className="shrink-0">
                <div
                  className="relative overflow-hidden rounded-lg"
                  style={{ width: 90, height: 90, background: "#EFEFEF", border: "1px solid rgba(11,27,58,0.08)" }}
                >
                  {item.image ? (
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <ImageOff size={20} style={{ color: "#B8BCC2" }} />
                    </div>
                  )}
                </div>
                <Link to="/design-studio" className="mt-2 block text-center text-[12.5px] font-semibold underline" style={{ color: C.navy }}>
                  Edit
                </Link>
              </div>

              <div className="flex-1">
                <p className="text-[15px] font-bold" style={{ color: C.ink }}>
                  {item.name}
                </p>

                <div className="mt-3 flex items-center gap-4">
                  <div className="relative">
                    <span className="text-[12.5px] font-semibold mr-2" style={{ color: "#5B6072" }}>
                      Quantity
                    </span>
                    <select
                      value={item.qty}
                      onChange={(e) => updateQty(Number(e.target.value))}
                      className="appearance-none rounded-lg pl-3 pr-8 py-2 text-[13px] font-semibold outline-none"
                      style={{ border: "1px solid rgba(11,27,58,0.2)", color: C.ink }}
                    >
                      {[25, 50, 100, 250, 500].map((q) => (
                        <option key={q} value={q}>
                          {q}
                        </option>
                      ))}
                    </select>
                    <ChevronDown size={13} className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2" style={{ color: "#7A8092" }} />
                  </div>

                  <button className="text-[13px] font-semibold underline" style={{ color: "#7A1F2B" }}>
                    Remove
                  </button>
                </div>

                <button
                  onClick={() => setShowOptions((v) => !v)}
                  className="mt-4 flex items-center gap-1.5 text-[13px] font-semibold"
                  style={{ color: C.ink }}
                >
                  Selected options
                  <motion.span animate={{ rotate: showOptions ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown size={14} />
                  </motion.span>
                </button>
                {showOptions && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-2 text-[12.5px] flex flex-col gap-1"
                    style={{ color: "#7A8092" }}
                  >
                    <span>Size: {item.size || "Standard"}</span>
                    <span>Unit price: ₹{item.unitPrice}.00</span>
                  </motion.div>
                )}

                <div className="mt-4 pt-4 flex items-center justify-between" style={{ borderTop: "1px solid rgba(11,27,58,0.08)" }}>
                  <span className="text-[13px] font-semibold" style={{ color: C.ink }}>
                    Item Total
                  </span>
                  <span className="text-[15px] font-bold" style={{ color: C.ink }}>
                    ₹{itemTotal.toLocaleString("en-IN")}.00
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ---- Order summary ---- */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="rounded-2xl p-6 h-fit"
            style={{ background: "#fff", border: "1px solid rgba(11,27,58,0.1)" }}
          >
            <h2 className="text-[19px] font-bold mb-5" style={{ color: C.ink }}>
              Order Summary
            </h2>

            <div className="flex items-center justify-between mb-3">
              <span className="text-[14px] font-semibold" style={{ color: C.ink }}>
                Subtotal
              </span>
              <span className="text-[15px] font-bold" style={{ color: C.ink }}>
                ₹{subtotal.toLocaleString("en-IN")}.00
              </span>
            </div>

            <button
              onClick={() => setPromoOpen((v) => !v)}
              className="flex items-center gap-1.5 text-[13px] font-semibold mb-5"
              style={{ color: C.ink }}
            >
              Have a promo code?
              <motion.span animate={{ rotate: promoOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown size={14} />
              </motion.span>
            </button>
            {promoOpen && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mb-5 flex gap-2">
                <input
                  placeholder="Enter code"
                  className="flex-1 rounded-lg px-3 py-2.5 text-[13px] outline-none"
                  style={{ border: "1px solid rgba(11,27,58,0.2)" }}
                />
                <button className="rounded-lg px-4 text-[13px] font-semibold" style={{ background: "#EFEDE7", color: C.ink }}>
                  Apply
                </button>
              </motion.div>
            )}

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full rounded-lg py-3.5 text-[14px] font-bold"
              style={{ background: "#7FD1F0", color: C.ink }}
            >
              Checkout
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}