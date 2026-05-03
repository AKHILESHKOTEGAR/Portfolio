import { C } from "@/lib/tokens";

export function SectionHeader({ cmd, description }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 text-sm">
        <span style={{ color: C.accent }}>❯</span>
        <span style={{ color: C.accent, fontWeight: 600 }}>{cmd}</span>
      </div>
      <div
        className="mt-2 text-xs"
        style={{ color: C.textMuted, fontStyle: "italic" }}
      >
        {description}
      </div>
      <div
        className="mt-3 h-px"
        style={{
          background: `linear-gradient(90deg, ${C.accent} 0%, transparent 60%)`,
          opacity: 0.4,
        }}
      />
    </div>
  );
}
