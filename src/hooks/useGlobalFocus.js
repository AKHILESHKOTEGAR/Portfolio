import { useEffect } from "react";

/**
 * Keeps the given ref focused:
 *  - any keypress outside an input refocuses it
 *  - excludes modifier-only keys and Tab/Escape
 *  - refocuses whenever `deps` change (e.g., page/path switches)
 */
export function useGlobalFocus(inputRef, deps = []) {
  useEffect(() => {
    const onKey = (e) => {
      const active = document.activeElement;
      const isTyping =
        active && (active.tagName === "INPUT" || active.tagName === "TEXTAREA");
      if (isTyping) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key === "Tab" || e.key === "Escape") return;
      inputRef.current?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [inputRef]);

  useEffect(() => {
    const id = setTimeout(() => inputRef.current?.focus(), 50);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps]);
}
