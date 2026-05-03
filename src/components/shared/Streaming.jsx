import { C } from "@/lib/tokens";
import { useStreamingText } from "@/hooks/useStreamingText";

export function Streaming({ text, delay = 0, speed = 12, className = "", style = {} }) {
  const { shown, done } = useStreamingText(text, { delay, speed });
  return (
    <span className={className} style={style}>
      {shown}
      {!done && (
        <span
          className="inline-block w-2 h-3 ml-0.5 animate-pulse"
          style={{ backgroundColor: C.accent }}
        />
      )}
    </span>
  );
}
