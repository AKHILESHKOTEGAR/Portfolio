import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { C } from "@/lib/tokens";

export function Modal({ open, onClose, title, children }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
          style={{ backgroundColor: "rgba(0,0,0,0.65)" }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.96, y: 12, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, y: 12, opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl rounded-lg overflow-hidden border flex flex-col max-h-[85vh]"
            style={{
              backgroundColor: C.bgDeep,
              borderColor: C.borderStrong,
              boxShadow: "0 40px 80px -20px rgba(0,0,0,0.8)",
            }}
          >
            <div
              className="flex items-center px-4 py-2.5 border-b shrink-0"
              style={{ borderColor: C.border, backgroundColor: "rgba(0,0,0,0.3)" }}
            >
              <div className="flex gap-2">
                <button
                  onClick={onClose}
                  className="w-3 h-3 rounded-full hover:brightness-125"
                  style={{ backgroundColor: "#ff5f56" }}
                  aria-label="close"
                />
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: "#ffbd2e" }}
                />
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: "#27c93f" }}
                />
              </div>
              <div
                className="flex-1 text-center text-xs"
                style={{ color: C.textMuted }}
              >
                {title}
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded hover:bg-white/5"
                style={{ color: C.textDim }}
              >
                <X size={14} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 terminal-scroll">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
