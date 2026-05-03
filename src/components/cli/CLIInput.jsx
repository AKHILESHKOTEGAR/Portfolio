import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { C } from "@/lib/tokens";
import { useGlobalFocus } from "@/hooks/useGlobalFocus";
import { useCommandHistory } from "@/hooks/useCommandHistory";

export function CLIInput({ onCommand, feedback, currentPath }) {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const hist = useCommandHistory();

  useGlobalFocus(inputRef, [currentPath]);

  const handleCommand = (e) => {
    e.preventDefault();
    const v = value.trim();
    if (!v) return;
    hist.push(v);
    onCommand(v);
    setValue("");
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = hist.prev();
      if (prev !== null) setValue(prev);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const nxt = hist.next();
      if (nxt !== null) setValue(nxt);
    }
  };

  return (
    <div
      className="border-t shrink-0"
      style={{
        backgroundColor: "rgba(19,19,31,0.85)",
        borderColor: C.border,
      }}
    >
      <AnimatePresence>
        {feedback && (
          <motion.div
            key={feedback.id}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="max-w-6xl mx-auto px-4 sm:px-6 py-2 text-xs border-b font-mono"
            style={{
              color: feedback.type === "err" ? C.err : C.ok,
              borderColor: C.border,
            }}
          >
            {feedback.text}
          </motion.div>
        )}
      </AnimatePresence>
      <form
        onSubmit={handleCommand}
        className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-2 font-mono text-sm"
        onClick={() => inputRef.current?.focus()}
      >
        <span style={{ color: C.ok }} className="hidden sm:inline">
          akhilesh@dev-os
        </span>
        <span style={{ color: C.textMuted }} className="hidden sm:inline">
          :
        </span>
        <span style={{ color: C.accent }}>{currentPath}</span>
        <span style={{ color: C.accent }}>$</span>
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="type /help · try /skills /download-cv /lang de"
          className="flex-1 bg-transparent outline-none border-none min-w-0"
          style={{ color: C.textDim, caretColor: C.accent }}
          autoComplete="off"
          autoFocus
          spellCheck={false}
        />
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-2 h-4"
          style={{ backgroundColor: C.accent }}
        />
      </form>
    </div>
  );
}
