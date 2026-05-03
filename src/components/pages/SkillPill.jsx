import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { C } from "@/lib/tokens";

export function SkillPill({ skill, index }) {
  const [hovered, setHovered] = useState(false);
  const total = 12;
  const filled = Math.round((skill.level / 100) * total);
  const bar = "█".repeat(filled) + "░".repeat(total - filled);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.25, delay: index * 0.02 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative"
    >
      <div
        className="px-3.5 py-2 rounded-full border text-xs sm:text-sm whitespace-nowrap transition-all cursor-default"
        style={{
          borderColor: hovered ? C.accent : C.border,
          backgroundColor: hovered
            ? "rgba(232, 168, 124, 0.1)"
            : "rgba(0,0,0,0.25)",
          color: hovered ? C.accent : C.textDim,
        }}
      >
        {skill.name}
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
            className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-20 pointer-events-none"
          >
            <div
              className="px-3 py-1.5 rounded-md border text-[11px] whitespace-nowrap"
              style={{
                borderColor: C.borderStrong,
                backgroundColor: C.bgDeep,
                color: C.accent,
                boxShadow: "0 8px 24px -8px rgba(0,0,0,0.6)",
              }}
            >
              [{bar}] {skill.level}%
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
