import { useCallback, useRef, useState } from "react";

export function useFeedback(timeout = 2600) {
  const [feedback, setFeedback] = useState(null);
  const idRef = useRef(0);

  const setFb = useCallback(
    (text, type = "ok") => {
      idRef.current += 1;
      const id = idRef.current;
      setFeedback({ id, text, type });
      setTimeout(() => {
        setFeedback((f) => (f?.id === id ? null : f));
      }, timeout);
    },
    [timeout]
  );

  return { feedback, setFb };
}
