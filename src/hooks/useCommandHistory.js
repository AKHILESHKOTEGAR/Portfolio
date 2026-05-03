import { useState } from "react";

export function useCommandHistory(max = 30) {
  const [history, setHistory] = useState([]);
  const [idx, setIdx] = useState(-1);

  const push = (cmd) => {
    setHistory((h) => [...h, cmd].slice(-max));
    setIdx(-1);
  };

  const prev = () => {
    if (history.length === 0) return null;
    const next = idx < 0 ? history.length - 1 : Math.max(0, idx - 1);
    setIdx(next);
    return history[next] || null;
  };

  const next = () => {
    if (idx < 0) return null;
    const n = idx + 1;
    if (n >= history.length) {
      setIdx(-1);
      return "";
    }
    setIdx(n);
    return history[n];
  };

  return { push, prev, next };
}
