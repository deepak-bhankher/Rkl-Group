import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  User,
  Menu,
  X,
  ChevronDown,
  Volume2,
  BatteryCharging,
  Watch,
  Briefcase,
  PenTool,
  Shirt,
  Leaf,
  Sparkles,
} from "lucide-react";

// Palette — richer, deeper, premium jewel tones
const C = {
  cream: "#F3EFE7",
  creamDeep: "#ECE7DC",
  ink: "#1D1D1B",
  gray: "#8A897F",
  gold: "#B08D45",
  goldLight: "#E4C97A",
  goldDark: "#8C6F35",
  darkGreen: "#0E1F16",
  darkGreenDeep: "#0A170F",
  darkGreenDeeper: "#050C08",
};

const MotionLink = motion(Link);

// 7 category verticals — each maps to its own Category page + accent color
const CATEGORIES = [
  { label: "Speakers & Audio", href: "/category/speakers", icon: Volume2, desc: "Bluetooth & wireless sound", accent: "#A5A53A" },
  { label: "Power & Charging", href: "/category/power", icon: BatteryCharging, desc: "Chargers, banks & cables", accent: "#2B9382" },
  { label: "Clocks & Timepieces", href: "/category/clocks", icon: Watch, desc: "Alarm clocks & wearables", accent: "#D68F2C" },
  { label: "Bags & Travel", href: "/category/bags", icon: Briefcase, desc: "Backpacks & travel gear", accent: "#B08D45" },
  { label: "Desk & Office", href: "/category/office", icon: PenTool, desc: "Stationery & desk essentials", accent: "#3D5AA8" },
  { label: "Apparel & Wearables", href: "/category/apparel", icon: Shirt, desc: "Caps, tees & merch", accent: "#82868F" },
  { label: "Eco & Lifestyle", href: "/category/eco", icon: Leaf, desc: "Sustainable everyday picks", accent: "#3E9A5A" },
];

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Categories", href: "/category", isMega: true },
  { label: "Product", href: "/product" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileCatOpen, setMobileCatOpen] = useState(false);
  const searchRef = useRef(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  useEffect(() => {
    if (searchOpen && searchRef.current) searchRef.current.focus();
  }, [searchOpen]);

  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 150);
  };

  return (
    <div style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      {/* ---- Main navbar ---- */}
      <nav
        className="sticky top-0 z-50 transition-shadow duration-300 relative overflow-visible"
        style={{
          background: `linear-gradient(135deg, ${C.darkGreenDeeper} 0%, ${C.darkGreenDeep} 45%, ${C.darkGreen} 100%)`,
          boxShadow: scrolled
            ? "0 12px 32px rgba(0,0,0,0.45), 0 1px 0 rgba(228,201,122,0.12) inset"
            : "0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        {/* premium diagonal shine */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(115deg, transparent 32%, rgba(228,201,122,0.07) 47%, rgba(228,201,122,0.02) 56%, transparent 68%)",
          }}
        />
        {/* faint hairline texture for depth */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.4) 0px, transparent 1px, transparent 3px)",
          }}
        />
        {/* soft gold glow accent behind the logo */}
        <div
          className="pointer-events-none absolute -top-12 left-0 h-44 w-80"
          style={{
            background: `radial-gradient(circle, ${C.gold}33, transparent 70%)`,
            filter: "blur(14px)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="flex h-20 items-center gap-4">
            {/* Mobile menu toggle */}
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="lg:hidden -ml-1 flex h-10 w-10 items-center justify-center rounded-full transition-colors focus:outline-none focus-visible:ring-2"
              style={{ color: C.gold, outlineColor: C.gold, background: "rgba(255,255,255,0.03)" }}
            >
              <Menu size={22} />
            </button>

            {/* Logo */}
            <a
              href="#"
              className="relative flex items-center justify-center h-16 w-16 sm:h-[68px] sm:w-[68px] shrink-0 py-1.5"
            >
              <span
                className="absolute inset-1 rounded-full"
                style={{
                  border: `1px solid ${C.gold}35`,
                  boxShadow: `0 0 0 1px rgba(0,0,0,0.2) inset, 0 0 18px ${C.gold}22`,
                }}
              />
              <motion.img
                src="/logo.png"
                alt="Company Logo"
                className="relative h-full w-full object-contain p-1.5 drop-shadow-[0_0_10px_rgba(228,201,122,0.4)]"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: [0, -3, 0] }}
                transition={{
                  opacity: { duration: 0.5, ease: "easeOut" },
                  y: { duration: 3.2, repeat: Infinity, ease: "easeInOut" },
                }}
                whileHover={{ scale: 1.08, rotate: -2 }}
              />
            </a>

            {/* Right side: search (desktop) + icons */}
            <div className="hidden md:flex items-center gap-3 ml-auto">
              <div
                className="group flex items-center gap-2 rounded-full px-4 py-2.5 w-48 lg:w-72 transition-all duration-300 focus-within:w-56 lg:focus-within:w-80"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: `1px solid ${C.gold}2E`,
                  boxShadow: "0 1px 0 rgba(255,255,255,0.04) inset, 0 6px 16px rgba(0,0,0,0.18)",
                }}
              >
                <Search size={15} style={{ color: C.gold }} className="shrink-0 transition-transform group-focus-within:scale-110" />
                <input
                  type="text"
                  placeholder="Search premium picks…"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-[13px]"
                  style={{ color: C.cream, letterSpacing: "0.01em" }}
                />
              </div>

              <a
                href="#"
                className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:scale-105"
                style={{
                  color: C.cream + "99",
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid transparent`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = C.goldLight;
                  e.currentTarget.style.border = `1px solid ${C.gold}40`;
                  e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = C.cream + "99";
                  e.currentTarget.style.border = "1px solid transparent";
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                }}
                aria-label="Account"
              >
                <User size={19} />
              </a>
            </div>

            {/* Mobile-only: search toggle + spacer */}
            <div className="flex md:hidden items-center gap-1 ml-auto">
              <button
                onClick={() => setSearchOpen((v) => !v)}
                aria-label="Search"
                className="flex h-10 w-10 items-center justify-center rounded-full transition-colors"
                style={{ color: C.cream + "99", background: "rgba(255,255,255,0.03)" }}
              >
                <Search size={19} />
              </button>
            </div>
          </div>

          {/* Mobile search — collapsible */}
          <div
            className="md:hidden overflow-hidden transition-all duration-300"
            style={{ maxHeight: searchOpen ? "56px" : "0px" }}
          >
            <div
              className="flex items-center gap-2 rounded-full px-4 py-2.5 mb-3"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: `1px solid ${C.gold}2E`,
                boxShadow: "0 1px 0 rgba(255,255,255,0.04) inset",
              }}
            >
              <Search size={16} style={{ color: C.gold }} />
              <input
                ref={searchRef}
                type="text"
                placeholder="Search products..."
                className="w-full bg-transparent text-sm outline-none"
                style={{ color: C.cream }}
              />
            </div>
          </div>
        </div>

        {/* ---- Section strip — desktop, centered ---- */}
        <div
          className="hidden lg:block relative"
          style={{
            background: `linear-gradient(180deg, ${C.darkGreenDeeper} 0%, ${C.darkGreenDeep} 100%)`,
            borderTop: `1px solid ${C.gold}25`,
            borderBottom: `1px solid ${C.gold}25`,
          }}
        >
          <div className="mx-auto max-w-7xl px-10">
            <ul className="flex items-center justify-center gap-12">
              {NAV_ITEMS.map((item) => (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={item.isMega ? handleEnter : undefined}
                  onMouseLeave={item.isMega ? handleLeave : undefined}
                >
                  <Link
                    to={item.href}
                    className="group relative flex items-center gap-1.5 py-3.5 text-[12.5px] font-semibold uppercase transition-colors"
                    style={{
                      color: megaOpen && item.isMega ? C.goldLight : "rgba(243,239,231,0.78)",
                      letterSpacing: "0.11em",
                    }}
                    onMouseEnter={(e) => { if (!item.isMega) e.currentTarget.style.color = C.goldLight; }}
                    onMouseLeave={(e) => { if (!item.isMega) e.currentTarget.style.color = "rgba(243,239,231,0.78)"; }}
                  >
                    {item.label}
                    {item.isMega && (
                      <motion.span
                        animate={{ rotate: megaOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <ChevronDown size={13} />
                      </motion.span>
                    )}
                    <span
                      className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 transition-all duration-300 ease-out group-hover:w-full"
                      style={{ background: `linear-gradient(90deg, transparent, ${C.gold}, ${C.goldLight}, ${C.gold}, transparent)` }}
                    />
                  </Link>

                  {/* ---- Mega dropdown: 7 category sections ---- */}
                  {item.isMega && (
                    <AnimatePresence>
                      {megaOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -8, scale: 0.98 }}
                          transition={{ duration: 0.22, ease: "easeOut" }}
                          className="fixed left-1/2 top-[112px] -translate-x-1/2 z-50"
                          style={{ width: "min(900px, 92vw)" }}
                        >
                          <div
                            className="relative rounded-2xl p-4 overflow-hidden"
                            style={{
                              background: `linear-gradient(160deg, ${C.darkGreenDeep} 0%, ${C.darkGreenDeeper} 100%)`,
                              border: `1px solid ${C.gold}3A`,
                              boxShadow: `0 24px 60px rgba(0,0,0,0.55), 0 0 0 1px ${C.gold}14 inset`,
                            }}
                          >
                            {/* subtle top glow */}
                            <div
                              className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 h-32 w-[70%]"
                              style={{ background: `radial-gradient(ellipse, ${C.gold}22, transparent 70%)`, filter: "blur(6px)" }}
                            />

                            <div className="relative flex items-center gap-2 px-1.5 pb-3 mb-1" style={{ borderBottom: `1px solid ${C.gold}20` }}>
                              <Sparkles size={13} style={{ color: C.goldLight }} />
                              <span
                                className="text-[11px] font-semibold uppercase"
                                style={{ color: C.goldLight, letterSpacing: "0.16em" }}
                              >
                                Shop by Category
                              </span>
                            </div>

                            <div className="relative grid grid-cols-4 gap-2.5">
                              {CATEGORIES.map((cat, i) => {
                                const Icon = cat.icon;
                                return (
                                  <MotionLink
                                    key={cat.label}
                                    to={cat.href}
                                    onClick={() => setMegaOpen(false)}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.04, duration: 0.2 }}
                                    whileHover={{ y: -3 }}
                                    className="flex flex-col gap-2.5 rounded-xl p-3.5 transition-all duration-200"
                                    style={{
                                      background: "rgba(255,255,255,0.03)",
                                      border: "1px solid rgba(255,255,255,0.05)",
                                    }}
                                    onMouseEnter={(e) => {
                                      e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                                      e.currentTarget.style.border = `1px solid ${cat.accent}55`;
                                      e.currentTarget.style.boxShadow = `0 10px 24px rgba(0,0,0,0.3), 0 0 0 1px ${cat.accent}22`;
                                    }}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                                      e.currentTarget.style.border = "1px solid rgba(255,255,255,0.05)";
                                      e.currentTarget.style.boxShadow = "none";
                                    }}
                                  >
                                    <span
                                      className="flex h-9 w-9 items-center justify-center rounded-lg"
                                      style={{
                                        background: `linear-gradient(135deg, ${cat.accent}3D, ${cat.accent}14)`,
                                        color: cat.accent,
                                        border: `1px solid ${cat.accent}40`,
                                      }}
                                    >
                                      <Icon size={16} />
                                    </span>
                                    <span className="text-[13px] font-semibold" style={{ color: C.cream }}>
                                      {cat.label}
                                    </span>
                                    <span className="text-[11px] leading-tight" style={{ color: C.gray }}>
                                      {cat.desc}
                                    </span>
                                  </MotionLink>
                                );
                              })}
                              <Link
                                to="/category"
                                onClick={() => setMegaOpen(false)}
                                className="flex flex-col items-center justify-center gap-1 rounded-xl p-3.5 text-center transition-all duration-200 hover:scale-[1.02]"
                                style={{
                                  background: `linear-gradient(135deg, ${C.gold}20, ${C.goldDark}18)`,
                                  border: `1px dashed ${C.gold}60`,
                                }}
                              >
                                <span className="text-[13px] font-semibold" style={{ color: C.goldLight }}>
                                  View All
                                </span>
                                <span className="text-[11px]" style={{ color: C.gray }}>
                                  Browse everything →
                                </span>
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* premium gold rule under everything, with shimmer */}
        <div className="relative h-[2px] w-full overflow-hidden">
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(90deg, ${C.goldDark}, ${C.gold} 45%, ${C.gold} 55%, ${C.goldDark})` }}
          />
          <motion.div
            className="absolute inset-y-0 w-1/3"
            style={{ background: `linear-gradient(90deg, transparent, ${C.goldLight}CC, transparent)` }}
            animate={{ x: ["-40%", "140%"] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }}
          />
        </div>
      </nav>

      {/* ---- Mobile drawer ---- */}
      <div
        className="fixed inset-0 z-50 lg:hidden transition-opacity duration-300"
        style={{
          background: "rgba(5,12,8,0.7)",
          backdropFilter: open ? "blur(2px)" : "none",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
        }}
        onClick={() => setOpen(false)}
      />
      <div
        className="fixed top-0 left-0 z-50 h-full w-[80%] max-w-xs flex flex-col transform transition-transform duration-300 ease-out lg:hidden"
        style={{
          background: `linear-gradient(160deg, ${C.darkGreenDeep} 0%, ${C.darkGreenDeeper} 100%)`,
          transform: open ? "translateX(0)" : "translateX(-100%)",
          boxShadow: `10px 0 40px rgba(0,0,0,0.5), 1px 0 0 ${C.gold}25`,
        }}
      >
        <div
          className="flex items-center justify-between px-5 pt-5 pb-4"
          style={{ borderBottom: `1px solid ${C.gold}20` }}
        >
          <span className="flex items-center h-9">
            <img src="/logo.png" alt="Company Logo" className="h-full w-auto object-contain" />
          </span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center rounded-full transition-colors"
            style={{ color: C.gold, background: "rgba(255,255,255,0.04)" }}
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col gap-1 px-3 pt-4 overflow-y-auto">
          {NAV_ITEMS.map((item) =>
            item.isMega ? (
              <div key={item.label}>
                <button
                  onClick={() => setMobileCatOpen((v) => !v)}
                  className="w-full flex items-center justify-between rounded-lg px-3 py-3.5 text-base font-medium transition-colors"
                  style={{ color: C.cream }}
                >
                  {item.label}
                  <motion.span animate={{ rotate: mobileCatOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown size={16} style={{ color: C.gray }} />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {mobileCatOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden pl-2"
                    >
                      {CATEGORIES.map((cat) => {
                        const Icon = cat.icon;
                        return (
                          <Link
                            key={cat.label}
                            to={cat.href}
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors"
                            style={{ color: "rgba(243,239,231,0.75)" }}
                          >
                            <span
                              className="flex h-7 w-7 items-center justify-center rounded-md"
                              style={{
                                background: `linear-gradient(135deg, ${cat.accent}3D, ${cat.accent}14)`,
                                color: cat.accent,
                                border: `1px solid ${cat.accent}40`,
                              }}
                            >
                              <Icon size={13} />
                            </span>
                            {cat.label}
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-lg px-3 py-3.5 text-base font-medium transition-colors"
                style={{ color: C.cream }}
              >
                {item.label}
                <ChevronDown size={16} className="-rotate-90" style={{ color: C.gray }} />
              </Link>
            )
          )}
        </div>

        <div className="mt-auto p-4" style={{ borderTop: `1px solid ${C.gold}20` }}>
          <a
            href="#"
            className="group flex items-center gap-3 rounded-xl px-3 py-3 transition-all duration-200"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.05)" }}
            onMouseEnter={(e) => (e.currentTarget.style.border = `1px solid ${C.gold}40`)}
            onMouseLeave={(e) => (e.currentTarget.style.border = "1px solid rgba(255,255,255,0.05)")}
          >
            <span
              className="flex h-10 w-10 items-center justify-center rounded-full transition-colors"
              style={{
                background: `linear-gradient(135deg, ${C.goldLight}, ${C.goldDark})`,
                color: C.darkGreenDeeper,
              }}
            >
              <User size={18} />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-sm font-semibold" style={{ color: C.cream }}>
                My Account
              </span>
              <span className="text-xs" style={{ color: C.gray }}>
                Sign in or view profile
              </span>
            </span>
            <ChevronDown
              size={16}
              className="-rotate-90 ml-auto opacity-70 transition-transform duration-200 group-hover:translate-x-0.5"
              style={{ color: C.gray }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}