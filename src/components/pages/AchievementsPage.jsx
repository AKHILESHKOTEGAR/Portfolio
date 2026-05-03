import { Trophy, MapPin, Calendar, Tag } from "lucide-react";
import { C } from "@/lib/tokens";
import { SectionHeader } from "@/components/shared";
import { ACHIEVEMENTS } from "@/data/achievements";

export function AchievementsPage({ t }) {
  return (
    <>
      <SectionHeader cmd={t.achieveCmd} description={t.achieveDesc} />

      <div className="flex flex-col gap-6">
        {ACHIEVEMENTS.map((a) => (
          <div
            key={a.id}
            className="rounded-md border p-5 sm:p-6 relative overflow-hidden"
            style={{
              borderColor: C.borderStrong,
              background: `linear-gradient(135deg, rgba(232,168,124,0.1) 0%, transparent 60%)`,
            }}
          >
            <div className="flex items-start gap-4 flex-wrap">
              <div
                className="w-12 h-12 rounded-md flex items-center justify-center shrink-0"
                style={{
                  backgroundColor: "rgba(232, 168, 124, 0.1)",
                  border: `1px solid ${C.border}`,
                }}
              >
                <Trophy size={20} style={{ color: C.accent }} />
              </div>

              <div className="flex-1 min-w-[240px]">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span
                    className="text-xs font-bold tracking-widest uppercase px-2 py-0.5 rounded"
                    style={{
                      backgroundColor: "rgba(126, 198, 153, 0.15)",
                      color: C.ok,
                      border: `1px solid rgba(126,198,153,0.3)`,
                    }}
                  >
                    {a.prize}
                  </span>
                  <span className="text-xs" style={{ color: C.textMuted }}>
                    <Calendar size={10} className="inline mr-1" />
                    {a.date}
                  </span>
                </div>

                <h3
                  className="text-lg sm:text-xl font-bold mb-1"
                  style={{ color: C.accent }}
                >
                  {a.event}
                </h3>

                <div
                  className="text-sm font-semibold mb-1"
                  style={{ color: C.textDim }}
                >
                  {a.project}
                </div>

                <div
                  className="flex items-center gap-1 text-xs mb-3"
                  style={{ color: C.textMuted }}
                >
                  <MapPin size={11} />
                  {a.venue} · {a.level}
                </div>

                <p className="text-sm leading-relaxed mb-4" style={{ color: C.textDim }}>
                  {a.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {a.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 text-xs px-2 py-1 rounded"
                      style={{
                        backgroundColor: "rgba(232, 168, 124, 0.08)",
                        border: `1px solid ${C.border}`,
                        color: C.textDim,
                      }}
                    >
                      <Tag size={9} />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
