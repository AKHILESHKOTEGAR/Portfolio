import { motion, AnimatePresence } from "framer-motion";
import { C } from "@/lib/tokens";

export function TerminalShell({ title, children, activeKey }) {
  return (
    <div
      className="rounded-lg overflow-hidden border flex flex-col h-full"
      style={{
        backgroundColor: C.bgDeep,
        borderColor: C.border,
        boxShadow: "0 0 0 1px rgba(0,0,0,0.3), 0 20px 60px -20px rgba(0,0,0,0.6)",
      }}
    >
      <div
        className="flex items-center px-4 py-2.5 border-b shrink-0"
        style={{ borderColor: C.border, backgroundColor: "rgba(0,0,0,0.25)" }}
      >
        <div className="flex gap-2">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: "#ff5f56" }}
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
        <div className="w-14" />
      </div>
      <div className="flex-1 overflow-y-auto p-5 sm:p-7 md:p-8 relative terminal-scroll">
        {/*
          popLayout lets the incoming child mount immediately without waiting
          for the outgoing one to finish its exit — prevents the "stuck
          invisible" state when a child had in-flight layout animations
          (e.g. Skills page's underline layoutId).
        */}
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={activeKey}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}