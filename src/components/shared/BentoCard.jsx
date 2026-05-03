import { motion } from "framer-motion";
import { C } from "@/lib/tokens";

export function BentoCard({ icon: Icon, file, title, children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`rounded-md border p-4 relative overflow-hidden ${className}`}
      style={{
        borderColor: C.border,
        backgroundColor: "rgba(0,0,0,0.25)",
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          {Icon && <Icon size={14} style={{ color: C.accent }} />}
          <span className="text-sm font-bold" style={{ color: C.accent }}>
            {title}
          </span>
        </div>
        {file && (
          <span className="text-[10px] font-mono" style={{ color: C.textMuted }}>
            {file}
          </span>
        )}
      </div>
      <div
        className="mb-3 h-px"
        style={{
          background: `linear-gradient(90deg, ${C.border} 0%, transparent 70%)`,
        }}
      />
      {children}
    </motion.div>
  );
}
