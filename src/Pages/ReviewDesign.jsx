import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { X, Check, ImageOff } from "lucide-react";

const C = {
  navy: "#0B1B3A",
  gold: "#C9A227",
  goldLight: "#E8C874",
  ink: "#1C2333",
};

const CHECKLIST = [
  "Text is clear and easy to read",
  "Information is spelled correctly",
  "Images are sharp with no blurring",
];

export default function ReviewDesign() {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state || {};
  const [agreed, setAgreed] = useState(false);

  const handleContinue = () => {
    if (!agreed) return;
    navigate("/cart", { state: data });
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      {/* ---- Left: preview ---- */}
      <div className="flex items-center justify-center p-8 sm:p-14" style={{ background: "#F2F2F0" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="relative w-full max-w-sm overflow-hidden rounded-md"
          style={{ background: "#fff", boxShadow: "0 8px 24px rgba(11,27,58,0.1)" }}
        >
          <div
            className="relative w-full flex items-center justify-center overflow-hidden"
            style={{ aspectRatio: "4 / 3", background: "linear-gradient(135deg, #c99a5f 0%, #b9863f 45%, #a97934 100%)" }}
          >
            {data.image ? (
              // The image coming in is already the final, edited version
              // (contrast, recolor, rotation and zoom are baked into the
              // pixels in Design Studio) — render it as-is, no filters here.
              <img
                src={data.image}
                alt="Your design"
                className="w-2/3 h-2/3 object-contain"
              />
            ) : (
              <div className="flex flex-col items-center gap-2" style={{ color: "rgba(255,255,255,0.7)" }}>
                <ImageOff size={26} />
                <span className="text-[12px]">No design uploaded</span>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* ---- Right: review panel ---- */}
      <div className="relative flex flex-col justify-center p-8 sm:p-14" style={{ background: "#fff" }}>
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 right-6 sm:top-8 sm:right-10 flex h-9 w-9 items-center justify-center rounded-full"
          style={{ color: C.ink }}
        >
          <X size={20} />
        </button>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <h1 className="text-[30px] sm:text-[34px] font-extrabold" style={{ color: C.ink }}>
            Review your design
          </h1>
          <p className="mt-2 text-[14.5px]" style={{ color: "#5B6072" }}>
            Double-check the following details before you continue.
          </p>

          <ul className="mt-6 flex flex-col gap-3">
            {CHECKLIST.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08, duration: 0.3 }}
                className="flex items-start gap-2 text-[14px]"
                style={{ color: C.ink }}
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: C.ink }} />
                {item}
              </motion.li>
            ))}
          </ul>

          <label className="mt-8 flex items-start gap-3 cursor-pointer">
            <button
              type="button"
              onClick={() => setAgreed((v) => !v)}
              className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded"
              style={{ border: `2px solid ${agreed ? C.navy : "rgba(11,27,58,0.3)"}`, background: agreed ? C.navy : "transparent" }}
            >
              {agreed && <Check size={13} color="#fff" />}
            </button>
            <span className="text-[13.5px] leading-snug" style={{ color: "#5B6072" }}>
              I have authorization to use the design, I have reviewed and approve it.
            </span>
          </label>

          <motion.button
            onClick={handleContinue}
            disabled={!agreed}
            whileHover={agreed ? { scale: 1.01 } : {}}
            whileTap={agreed ? { scale: 0.98 } : {}}
            className="mt-6 w-full rounded-lg py-3.5 text-[14px] font-bold"
            style={{
              background: agreed ? C.gold : "#EDEBE4",
              color: agreed ? C.navy : "#B0B0A8",
              cursor: agreed ? "pointer" : "not-allowed",
            }}
          >
            Continue
          </motion.button>

          <button
            onClick={() => navigate(-1)}
            className="mt-3 w-full rounded-lg py-3.5 text-[14px] font-bold"
            style={{ border: "1px solid rgba(11,27,58,0.2)", color: C.ink }}
          >
            Edit my design
          </button>
        </motion.div>
      </div>
    </div>
  );
}