import { Rocket, Target, MapPin, Globe, Clock } from "lucide-react";
import { C } from "@/lib/tokens";
import { SectionHeader, BentoCard } from "@/components/shared";

function LangRow({ label, level, pct }) {
  const total = 12;
  const filled = Math.round((pct / 100) * total);
  const bar = "█".repeat(filled) + "░".repeat(total - filled);
  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="w-20 shrink-0" style={{ color: C.textDim }}>
        {label}
      </span>
      <span
        className="font-mono text-xs tracking-tight"
        style={{ color: C.accent }}
      >
        [{bar}]
      </span>
      <span
        className="text-[11px] ml-auto px-2 py-0.5 rounded"
        style={{
          color: C.accent,
          border: `1px solid ${C.border}`,
          backgroundColor: "rgba(232, 168, 124, 0.05)",
        }}
      >
        {level}
      </span>
    </div>
  );
}

export function AboutPage({ t }) {
  return (
    <>
      <SectionHeader cmd={t.aboutCmd} description={t.aboutDesc} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 auto-rows-[minmax(0,auto)]">
        <BentoCard
          className="md:col-span-2"
          icon={Rocket}
          file="mission.md"
          title={t.missionTitle}
        >
          <p className="text-sm leading-relaxed" style={{ color: C.textDim }}>
            {t.missionBody}
          </p>
        </BentoCard>

        <BentoCard icon={Target} file="goals.txt" title={t.goalsTitle}>
          <ul className="space-y-2 text-sm" style={{ color: C.textDim }}>
            {[t.goalsWerk, t.goalsHours, t.goalsPlace].map((g) => (
              <li key={g} className="flex gap-2 items-start">
                <span style={{ color: C.ok }} className="mt-0.5">
                  ✓
                </span>
                <span>{g}</span>
              </li>
            ))}
          </ul>
        </BentoCard>

        <BentoCard
          className="md:col-span-2"
          icon={MapPin}
          file="germany.log"
          title={t.lifeTitle}
        >
          <p className="text-sm leading-relaxed" style={{ color: C.textDim }}>
            {t.lifeBody}
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5 text-[11px]">
            {["Deggendorf", "Nov 2025", "M.Sc.", "Applied CS"].map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded"
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
        </BentoCard>

        <BentoCard icon={Globe} file="i18n.json" title={t.langsTitle}>
          <div className="space-y-3">
            <LangRow label={t.langEN} level={t.langENLevel} pct={95} />
            <LangRow label={t.langDE} level={t.langDELevel} pct={40} />
          </div>
        </BentoCard>

        <BentoCard
          className="md:col-span-3"
          icon={Clock}
          file="focus.now"
          title={t.focusTitle}
        >
          <p className="text-sm leading-relaxed" style={{ color: C.textDim }}>
            {t.focusBody}
          </p>
        </BentoCard>
      </div>
    </>
  );
}
