import { useMemo, useState, useEffect } from "react"; // Added useEffect
import { motion } from "framer-motion";
import { C } from "@/lib/tokens";
import { SectionHeader } from "@/components/shared";
import { SKILLS } from "@/data/skills";
import { SkillPill } from "./SkillPill";

export function SkillsPage({ t }) {
  const [filter, setFilter] = useState("all");

  // SAFETY: Reset filter if the component somehow hangs
  useEffect(() => {
    return () => setFilter("all");
  }, []);

  const filters = [
    { id: "all", label: "ALL" },
    { id: "mobile_lang", label: "LANGUAGES" },
    { id: "web", label: "FRONTEND" },
    { id: "be_cloud", label: "BACKEND" },
    { id: "tools", label: "CLOUD & DEVOPS" },
    { id: "ai", label: "AI / ML" },
  ];

  const visible = useMemo(
    () => (filter === "all" ? SKILLS : SKILLS.filter((s) => s.cat === filter)),
    [filter]
  );

  return (
    <>
      <SectionHeader cmd={t.skillsCmd} description={t.skillsDesc} />

      <div
        className="rounded-md border p-1.5 mb-8 flex flex-wrap gap-1"
        style={{
          borderColor: C.border,
          backgroundColor: "rgba(0,0,0,0.2)",
        }}
      >
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={(e) => {
              e.stopPropagation(); // Prevents event bubbling to the TerminalShell
              setFilter(f.id);
            }}
            className="relative px-5 py-2.5 text-[13px] font-black tracking-tight rounded transition-all uppercase"
            style={{
              color: filter === f.id ? C.accent : C.textMuted,
            }}
          >
            <span className="relative z-10">{f.label}</span>
            {filter === f.id && (
              <motion.div
                // Use a UNIQUE layoutId specific to the Skills page
                layoutId="skills-active-pill"
                className="absolute inset-0 rounded-sm"
                style={{
                  backgroundColor: "rgba(232, 168, 124, 0.15)",
                  borderBottom: `2px solid ${C.accent}`
                }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        {visible.map((s, i) => (
          <SkillPill key={`${filter}-${s.name}`} skill={s} index={i} />
        ))}
      </div>
    </>
  );
}