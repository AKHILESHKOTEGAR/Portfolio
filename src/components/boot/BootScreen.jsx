import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { C } from "@/lib/tokens";
import { ASCII_AKHILESH } from "@/lib/ascii";
import { BOOT_LINES } from "@/data/bootLines";
import { Scanlines } from "@/components/shared";

export function BootScreen({ onComplete, t }) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [progress, setProgress] = useState(0);
  const [asciiVisible, setAsciiVisible] = useState(false);
  const [readyToContinue, setReadyToContinue] = useState(false);

  useEffect(() => {
    BOOT_LINES.forEach((line, i) => {
      setTimeout(() => setVisibleLines(i + 1), line.delay);
    });
    setTimeout(() => setAsciiVisible(true), 2400);

    const startAt = 2800;
    const duration = 1800;
    const startTime = Date.now();
    const tick = setInterval(() => {
      const now = Date.now();
      if (now >= startTime + startAt) {
        const p = Math.min(100, ((now - (startTime + startAt)) / duration) * 100);
        setProgress(p);
        if (p >= 100) {
          clearInterval(tick);
          setTimeout(() => setReadyToContinue(true), 300);
        }
      }
    }, 30);
    return () => clearInterval(tick);
  }, []);

  useEffect(() => {
    if (!readyToContinue) return;
    const handler = (e) => {
      if (e.key === "Enter" || e.type === "click") onComplete();
    };
    window.addEventListener("keydown", handler);
    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("keydown", handler);
      window.removeEventListener("click", handler);
    };
  }, [readyToContinue, onComplete]);

  const progressBar = () => {
    const total = 24;
    const filled = Math.floor((progress / 100) * total);
    return "[" + "█".repeat(filled) + "░".repeat(total - filled) + "]";
  };

  return (
    <div
      className="fixed inset-0 overflow-hidden"
      style={{ backgroundColor: C.bg }}
    >
      <Scanlines />
      <div className="relative z-10 h-full w-full flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-28 max-w-5xl mx-auto">
        <div className="space-y-1 text-[13px] sm:text-sm mb-8">
          {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.18 }}
              style={{ color: C.textDim }}
              className="leading-relaxed"
            >
              {line.text}
              {line.tail && <span style={{ color: C.ok }}>{line.tail}</span>}
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {asciiVisible && (
            <motion.pre
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[6px] sm:text-[9px] md:text-[11px] lg:text-[13px] leading-[1.15] font-bold mb-6 overflow-x-auto whitespace-pre"
              style={{ color: C.accent }}
            >
              {ASCII_AKHILESH}
            </motion.pre>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {asciiVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-[13px] sm:text-sm space-y-2"
            >
              <div style={{ color: C.textDim }}>
                <span style={{ color: C.accent }}>✦ akhilesh.dev v2.0.26</span>
                {progress >= 100 ? (
                  <span style={{ color: C.ok }}> {t.ready}</span>
                ) : (
                  <span> — {t.booting}</span>
                )}
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <span style={{ color: C.accent }}>{progressBar()}</span>
                <span style={{ color: progress >= 100 ? C.ok : C.textDim }}>
                  {Math.floor(progress)}%
                </span>
              </div>
              {readyToContinue && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="pt-4 flex items-center gap-2"
                  style={{ color: C.textDim }}
                >
                  <span>{t.pressEnter}</span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-2.5 h-4"
                    style={{ backgroundColor: C.accent }}
                  />
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div
        className="absolute bottom-6 left-0 right-0 text-center text-[10px] sm:text-xs px-4"
        style={{ color: C.textMuted }}
      >
        {t.bootFooter}
      </div>
    </div>
  );
}
