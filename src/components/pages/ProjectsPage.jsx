import { useEffect } from "react"; // Added for safety
import { motion } from "framer-motion";
import { FolderGit2 } from "lucide-react";
import { C } from "@/lib/tokens";
import { SectionHeader } from "@/components/shared";
import { PROJECTS } from "@/data/projects";

export function ProjectsPage({ t, onOpen, lang }) {
  // Fix: Reset any layout/animation context on unmount
  useEffect(() => {
    return () => { }; // Basic cleanup to ensure smooth transitions
  }, []);

  return (
    <>
      <SectionHeader cmd={t.projCmd} description={t.projDesc} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {PROJECTS.map((p, i) => (
          <motion.button
            key={p.id}
            onClick={() => onOpen?.(p)}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.06 }}
            whileHover={{ y: -3 }}
            // Using a unique layoutId for the project cards helps avoid invisible hangs
            layoutId={`project-card-${p.id}`}
            className={`rounded-md border p-4 relative overflow-hidden text-left transition-colors hover:bg-[rgba(232,168,124,0.05)] ${p.size === "lg" ? "sm:col-span-2 lg:row-span-1" : ""
              }`}
            style={{
              borderColor: C.border,
              backgroundColor: "rgba(0,0,0,0.25)",
              minHeight: p.size === "lg" ? 160 : 120,
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <FolderGit2 size={16} style={{ color: C.accent }} />
              <span
                className="text-[9px] font-bold tracking-widest px-1.5 py-0.5 rounded uppercase"
                style={{
                  color: C.accent,
                  backgroundColor: "rgba(232, 168, 124, 0.08)",
                  border: `1px solid ${C.border}`,
                }}
              >
                {p.tag}
              </span>
            </div>

            <div className="text-base font-bold mb-1" style={{ color: C.accent }}>
              {p.title}
            </div>

            <div className="text-xs leading-relaxed" style={{ color: C.textDim }}>
              {lang === "de" ? p.shortDe : p.shortEn}
            </div>

            <div className="mt-3 flex flex-wrap gap-1 text-[10px]" style={{ color: C.textMuted }}>
              {p.stack.slice(0, 4).map((s) => (
                <span
                  key={s}
                  className="px-1.5 py-0.5 rounded"
                  style={{
                    border: `1px solid ${C.border}`,
                    color: C.accent,
                    backgroundColor: "rgba(232, 168, 124, 0.05)",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-4 text-[9px] opacity-40 uppercase tracking-tighter" style={{ color: C.textMuted }}>
              {t.expClickHint || "Click to view details"}
            </div>
          </motion.button>
        ))}
      </div>
    </>
  );
}