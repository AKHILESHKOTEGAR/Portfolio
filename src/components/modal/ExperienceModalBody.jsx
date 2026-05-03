import { Briefcase, X } from "lucide-react";
import { C } from "@/lib/tokens";

export function ExperienceModalBody({ data, lang, t, onClose }) {
  const impacts = lang === "de" ? data.impactsDe : data.impactsEn;
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <Briefcase size={18} style={{ color: C.accent }} />
        <span
          className="text-[9px] font-bold tracking-widest px-1.5 py-0.5 rounded"
          style={{
            color: C.accent,
            backgroundColor: "rgba(232, 168, 124, 0.08)",
            border: `1px solid ${C.border}`,
          }}
        >
          {lang === "de" ? data.durationDe : data.duration}
        </span>
      </div>
      <h2 className="text-2xl font-bold mb-1" style={{ color: C.accent }}>
        {data.company}
      </h2>
      <div className="text-xs mb-5" style={{ color: C.textMuted }}>
        {data.role}
      </div>

      <div
        className="rounded-md border overflow-hidden mb-5"
        style={{ borderColor: C.border, backgroundColor: "rgba(0,0,0,0.25)" }}
      >
        <div
          className="px-4 py-2 border-b text-[10px] tracking-widest"
          style={{ borderColor: C.border, color: C.textMuted }}
        >
          {t.impact}
        </div>
        <ul>
          {impacts.map((line, i) => (
            <li
              key={i}
              className="flex gap-3 px-4 py-2.5 text-sm border-b last:border-b-0"
              style={{ borderColor: C.border, color: C.textDim }}
            >
              <span style={{ color: C.ok }} className="shrink-0 mt-0.5">
                ✓
              </span>
              <span className="leading-relaxed">{line}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {data.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] px-2 py-0.5 rounded"
            style={{
              color: C.accent,
              border: `1px solid ${C.border}`,
              backgroundColor: "rgba(232, 168, 124, 0.05)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex justify-end">
        <button
          onClick={onClose}
          className="inline-flex items-center gap-2 px-3 py-2 rounded border text-sm"
          style={{ borderColor: C.border, color: C.textDim }}
        >
          <X size={14} /> {t.close}
        </button>
      </div>
    </div>
  );
}
