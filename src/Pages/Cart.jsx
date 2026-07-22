import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ImageOff, ChevronDown, Minus, Plus, ShieldCheck, Truck, ShoppingBag, Trash2, Sparkles } from "lucide-react";

const C = {
  navy: "#0B1B3A",
  navyDeep: "#071228",
  gold: "#C9A227",
  goldSoft: "#E7D9A8",
  ink: "#1C2333",
  paper: "#F7F5F1",
  line: "rgba(11,27,58,0.10)",
  muted: "#6B7086",
};

const QTY_STEPS = [25, 50, 100, 250, 500];

export default function Cart() {
  const location = useLocation();
  const incoming = location.state;
  const [showOptions, setShowOptions] = useState(true);
  const [promoOpen, setPromoOpen] = useState(false);
  const [promoApplied, setPromoApplied] = useState(false);

  const [item, setItem] = useState(
    incoming
      ? { ...incoming }
      : { name: "Corrugated Boxes", unitPrice: 30, qty: 50, size: '4.5" x 4.5" x 3.5"', image: "" }
  );

  const itemTotal = (item?.unitPrice || 0) * (item?.qty || 1);
  const shipping = itemTotal > 0 ? 0 : 0;
  const discount = promoApplied ? Math.round(itemTotal * 0.1) : 0;
  const subtotal = item ? itemTotal - discount : 0;

  const stepQty = (dir) => {
    const idx = QTY_STEPS.indexOf(item.qty);
    if (idx === -1) return;
    const next = QTY_STEPS[Math.min(QTY_STEPS.length - 1, Math.max(0, idx + dir))];
    setItem({ ...item, qty: next });
  };

  const removeItem = () => setItem(null);

  return (
    <div
      style={{
        fontFamily: "'Inter', system-ui, sans-serif",
        background: `radial-gradient(1200px 400px at 50% -10%, rgba(201,162,39,0.07), transparent), ${C.paper}`,
        minHeight: "100vh",
      }}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10 py-10 sm:py-14">
        {/* ---- Header ---- */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 flex items-end justify-between"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span
                className="inline-block h-[2px] w-6 rounded-full"
                style={{ background: C.gold }}
              />
              <span
                className="text-[11px] font-bold uppercase tracking-[0.18em]"
                style={{ color: C.gold }}
              >
                Review &amp; Checkout
              </span>
            </div>
            <h1
              className="text-[28px] sm:text-[34px] font-extrabold tracking-tight"
              style={{ color: C.ink, fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              My Cart
            </h1>
          </div>
          <span
            className="hidden sm:inline-flex items-center gap-1.5 text-[13px] font-semibold px-3 py-1.5 rounded-full"
            style={{ background: "rgba(11,27,58,0.05)", color: C.navy }}
          >
            <ShoppingBag size={14} />
            {item ? "1 item" : "0 items"}
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* ---- Cart items ---- */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <AnimatePresence mode="wait">
              {item ? (
                <motion.div
                  key={item.name}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -24, transition: { duration: 0.25 } }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -2 }}
                  className="relative flex gap-5 rounded-2xl bg-white p-5 overflow-hidden"
                  style={{
                    border: `1px solid ${C.line}`,
                    boxShadow: "0 1px 2px rgba(11,27,58,0.04), 0 12px 32px -18px rgba(11,27,58,0.18)",
                  }}
                >
                  {/* gold edge accent */}
                  <span
                    className="absolute left-0 top-0 h-full w-[3px]"
                    style={{ background: `linear-gradient(180deg, ${C.gold}, ${C.goldSoft})` }}
                  />

                  <div className="shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                      className="relative overflow-hidden rounded-xl"
                      style={{
                        width: 96,
                        height: 96,
                        background: "#F0EEE9",
                        border: `1px solid ${C.line}`,
                      }}
                    >
                      {item.image ? (
                        <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center">
                          <ImageOff size={20} style={{ color: "#B8BCC2" }} />
                        </div>
                      )}
                    </motion.div>
                    <Link
                      to="/design-studio"
                      className="mt-2.5 block text-center text-[12px] font-semibold tracking-wide"
                      style={{ color: C.navy }}
                    >
                      <span className="border-b" style={{ borderColor: C.gold }}>
                        Edit design
                      </span>
                    </Link>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <p
                        className="text-[16px] font-bold leading-snug"
                        style={{ color: C.ink, fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        {item.name}
                      </p>
                      <button
                        onClick={removeItem}
                        aria-label="Remove item"
                        className="shrink-0 flex items-center cursor-pointer gap-1.5 text-[12.5px] font-semibold transition-colors"
                        style={{ color: C.muted }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#9B1C2E")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
                      >
                        <Trash2 size={14} />
                        Remove
                      </button>
                    </div>

                    <p className="mt-1 text-[12.5px]" style={{ color: C.muted }}>
                      {item.size || "Standard size"}
                    </p>

                    <div className="mt-4 flex items-center gap-4 flex-wrap">
                      <div>
                        <span
                          className="block text-[10.5px] font-bold uppercase tracking-wider mb-1.5"
                          style={{ color: C.muted }}
                        >
                          Quantity
                        </span>
                        <div
                          className="inline-flex items-center rounded-lg overflow-hidden"
                          style={{ border: `1px solid ${C.line}` }}
                        >
                          <button
                            onClick={() => stepQty(-1)}
                            disabled={item.qty === QTY_STEPS[0]}
                            className="flex h-9 w-9 items-center justify-center transition-colors disabled:opacity-30"
                            style={{ color: C.navy }}
                          >
                            <Minus size={14} />
                          </button>
                          <span
                            className="flex h-9 min-w-[52px] items-center justify-center text-[13.5px] font-bold"
                            style={{ color: C.ink, borderLeft: `1px solid ${C.line}`, borderRight: `1px solid ${C.line}` }}
                          >
                            {item.qty}
                          </span>
                          <button
                            onClick={() => stepQty(1)}
                            disabled={item.qty === QTY_STEPS[QTY_STEPS.length - 1]}
                            className="flex h-9 w-9 items-center justify-center transition-colors disabled:opacity-30"
                            style={{ color: C.navy }}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>

                      <div className="pl-1">
                        <span
                          className="block text-[10.5px] font-bold uppercase tracking-wider mb-1.5"
                          style={{ color: C.muted }}
                        >
                          Unit price
                        </span>
                        <span className="text-[13.5px] font-bold" style={{ color: C.ink }}>
                          ₹{item.unitPrice}.00
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => setShowOptions((v) => !v)}
                      className="mt-4 flex items-center gap-1.5 text-[12.5px] font-semibold"
                      style={{ color: C.navy }}
                    >
                      Selected options
                      <motion.span animate={{ rotate: showOptions ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <ChevronDown size={14} />
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {showOptions && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div
                            className="mt-2.5 rounded-lg px-3.5 py-3 text-[12.5px] flex flex-col gap-1.5"
                            style={{ background: "rgba(11,27,58,0.03)", color: C.muted }}
                          >
                            <div className="flex justify-between">
                              <span>Dimensions</span>
                              <span className="font-semibold" style={{ color: C.ink }}>
                                {item.size || "Standard"}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Print</span>
                              <span className="font-semibold" style={{ color: C.ink }}>
                                Full colour, single side
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div
                      className="mt-4 pt-4 flex items-center justify-between"
                      style={{ borderTop: `1px dashed ${C.line}` }}
                    >
                      <span className="text-[12.5px] font-semibold" style={{ color: C.muted }}>
                        Item total
                      </span>
                      <motion.span
                        key={itemTotal}
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[16px] font-extrabold"
                        style={{ color: C.navy }}
                      >
                        ₹{itemTotal.toLocaleString("en-IN")}.00
                      </motion.span>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center text-center rounded-2xl py-20 px-6"
                  style={{ border: `1px dashed ${C.line}`, background: "#FFFFFF" }}
                >
                  <div
                    className="mb-4 flex h-14 w-14 items-center justify-center rounded-full"
                    style={{ background: "rgba(201,162,39,0.12)" }}
                  >
                    <ShoppingBag size={22} style={{ color: C.gold }} />
                  </div>
                  <p className="text-[16px] font-bold" style={{ color: C.ink }}>
                    Your cart is empty
                  </p>
                  <p className="mt-1.5 text-[13px]" style={{ color: C.muted }}>
                    Start a design to see it here.
                  </p>
                  <Link
                    to="/design-studio"
                    className="mt-6 rounded-lg px-5 py-2.5 text-[13px] font-bold"
                    style={{ background: C.navy, color: "#fff" }}
                  >
                    Start designing
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>

            {/* trust strip */}
            {item && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex flex-wrap gap-x-8 gap-y-3 rounded-xl px-5 py-4"
                style={{ background: "rgba(11,27,58,0.03)" }}
              >
                <span className="flex items-center gap-2 text-[12.5px] font-semibold" style={{ color: C.navy }}>
                  <Truck size={15} style={{ color: C.gold }} />
                  Free dispatch on this order
                </span>
                <span className="flex items-center gap-2 text-[12.5px] font-semibold" style={{ color: C.navy }}>
                  <ShieldCheck size={15} style={{ color: C.gold }} />
                  Secure checkout
                </span>
              </motion.div>
            )}
          </motion.div>

          {/* ---- Order summary ---- */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-8 rounded-2xl p-6 overflow-hidden relative"
            style={{
              background: `linear-gradient(180deg, ${C.navy}, ${C.navyDeep})`,
              boxShadow: "0 24px 48px -20px rgba(11,27,58,0.45)",
            }}
          >
            <div
              className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(201,162,39,0.25), transparent 70%)" }}
            />

            <div className="flex items-center gap-2 mb-6">
              <Sparkles size={15} style={{ color: C.gold }} />
              <h2 className="text-[13px] font-bold uppercase tracking-[0.14em]" style={{ color: C.goldSoft }}>
                Order Summary
              </h2>
            </div>

            <div className="flex items-center justify-between mb-3">
              <span className="text-[13.5px]" style={{ color: "rgba(255,255,255,0.75)" }}>
                Item total
              </span>
              <span className="text-[13.5px] font-semibold text-white">
                ₹{itemTotal.toLocaleString("en-IN")}.00
              </span>
            </div>

            <div className="flex items-center justify-between mb-3">
              <span className="text-[13.5px]" style={{ color: "rgba(255,255,255,0.75)" }}>
                Shipping
              </span>
              <span className="text-[13.5px] font-semibold" style={{ color: C.goldSoft }}>
                Free
              </span>
            </div>

            <AnimatePresence>
              {promoApplied && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex items-center justify-between mb-3 overflow-hidden"
                >
                  <span className="text-[13.5px]" style={{ color: "rgba(255,255,255,0.75)" }}>
                    Promo discount
                  </span>
                  <span className="text-[13.5px] font-semibold" style={{ color: "#7FD1A0" }}>
                    −₹{discount.toLocaleString("en-IN")}.00
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={() => setPromoOpen((v) => !v)}
              className="flex items-center gap-1.5 text-[12.5px] font-semibold mb-4 mt-1"
              style={{ color: C.goldSoft }}
            >
              Have a promo code?
              <motion.span animate={{ rotate: promoOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown size={13} />
              </motion.span>
            </button>
            <AnimatePresence>
              {promoOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-5 flex gap-2 overflow-hidden"
                >
                  <input
                    placeholder="Enter code"
                    className="flex-1 rounded-lg px-3 py-2.5 text-[13px] outline-none text-white placeholder:text-white/40"
                    style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
                  />
                  <button
                    onClick={() => setPromoApplied(true)}
                    className="rounded-lg px-4 text-[13px] font-bold"
                    style={{ background: C.gold, color: C.navyDeep }}
                  >
                    Apply
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <div
              className="flex items-center justify-between mb-6 pt-4"
              style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}
            >
              <span className="text-[14.5px] font-bold text-white">Total</span>
              <motion.span
                key={subtotal}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[20px] font-extrabold"
                style={{ color: C.gold }}
              >
                ₹{subtotal.toLocaleString("en-IN")}.00
              </motion.span>
            </div>

            <motion.button
              whileHover={{ scale: 1.015, boxShadow: "0 12px 28px -8px rgba(201,162,39,0.55)" }}
              whileTap={{ scale: 0.985 }}
              transition={{ duration: 0.2 }}
              disabled={!item}
              className="w-full rounded-lg cursor-pointer py-3.5 text-[14px] font-extrabold tracking-wide disabled:opacity-40"
              style={{ background: `linear-gradient(135deg, ${C.gold}, #B8901E)`, color: C.navyDeep }}
            >
              Proceed to Checkout
            </motion.button>

            <p className="mt-4 text-center text-[11px]" style={{ color: "rgba(255,255,255,0.45)" }}>
              Taxes calculated at the next step
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}