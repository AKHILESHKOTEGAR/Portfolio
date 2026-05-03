import { useEffect, useState } from "react";

export function useStreamingText(text, { delay = 0, speed = 12 } = {}) {
  const [shown, setShown] = useState("");

  useEffect(() => {
    setShown("");
    let i = 0;
    const start = setTimeout(() => {
      const tick = setInterval(() => {
        i++;
        setShown(text.slice(0, i));
        if (i >= text.length) clearInterval(tick);
      }, speed);
    }, delay);
    return () => clearTimeout(start);
  }, [text, delay, speed]);

  return { shown, done: shown.length >= text.length };
}
