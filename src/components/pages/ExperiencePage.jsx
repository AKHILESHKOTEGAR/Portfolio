import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { C } from "@/lib/tokens";
import { SectionHeader } from "@/components/shared";
import { EXPERIENCES } from "@/data/experiences";

export function ExperiencePage({ t, onOpen, lang }) {
  return (
    <>
      <SectionHeader cmd={t.expCmd} description={t.expDesc} />
      <div className="space-y-4">
        {EXPERIENCES.map((e) => (
          <motion.button
            key={e.id}
            onClick={() => onOpen?.(e)}
            whileHover={{ y: -2, backgroundColor: "rgba(232, 168, 124, 0.05)" }}
            className="w-full text-left rounded-lg border p-5 sm:p-6 flex flex-col sm:flex-row gap-6 relative overflow-hidden transition-all group"
            style={{
              borderColor: C.border,
              backgroundColor: "rgba(0,0,0,0.25)",
            }}
          >
            {/* Left Column: Metadata */}
            <div className="flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:min-w-[160px] border-b sm:border-b-0 sm:border-r pb-4 sm:pb-0 sm:pr-4" style={{ borderColor: C.border }}>
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                style={{
                  backgroundColor: "rgba(232, 168, 124, 0.1)",
                  border: `1px solid ${C.border}`,
                }}
              >
                <Briefcase size={20} style={{ color: C.accent }} />
              </div>

              <div className="text-[11px] space-y-2 uppercase tracking-wider">
                <div>
                  <div style={{ color: C.textMuted }} className="mb-0.5">{t.expRuntime}</div>
                  <div style={{ color: C.accent, fontWeight: 700 }}>
                    {lang === "de" ? e.durationDe : e.duration}
                  </div>
                </div>
                <div>
                  <div style={{ color: C.textMuted }} className="mb-0.5">{t.expStatus}</div>
                  {/* Changed from Active to Completed */}
                  <div className="flex items-center gap-1.5" style={{ color: C.textMuted, fontWeight: 600 }}>
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: C.textMuted, opacity: 0.5 }}
                    />
                    {t.expCompleted || "Completed"}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="flex-1">
              <div className="flex items-baseline justify-between flex-wrap gap-2 mb-2">
                <h3 className="text-xl font-bold tracking-tight" style={{ color: C.accent }}>
                  {e.company}
                </h3>
                <span className="text-xs font-mono" style={{ color: C.textMuted }}>
                  {e.role}
                </span>
              </div>

              <div className="text-sm leading-relaxed mb-4" style={{ color: C.textDim }}>
                {lang === "de" ? e.shortDe : e.shortEn}
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {e.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 rounded-sm font-medium uppercase tracking-tighter"
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

              <div className="flex items-center gap-2 text-[10px] italic opacity-60" style={{ color: C.textMuted }}>
                <span className="w-4 h-[1px]" style={{ backgroundColor: C.border }} />
                {t.expClickHint}
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </>
  );
}