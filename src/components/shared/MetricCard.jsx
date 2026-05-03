import { motion } from "framer-motion";
import { C } from "@/lib/tokens";

export function MetricCard({ value, label, delay = 0, small = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      className="rounded-md border px-3 py-2.5"
      style={{
        borderColor: C.border,
        backgroundColor: "rgba(0,0,0,0.2)",
      }}
    >
      <div
        className={`${small ? "text-sm" : "text-xl"} font-bold leading-tight`}
        style={{ color: C.accent }}
      >
        {value}
      </div>
      <div
        className="text-[10px] tracking-widest mt-0.5"
        style={{ color: C.textMuted }}
      >
        {label}
      </div>
    </motion.div>
  );
}
