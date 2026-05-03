import { Terminal, Download, Languages } from "lucide-react";
import { C } from "@/lib/tokens";
import { SectionHeader } from "@/components/shared";
import { NAV } from "@/data/navigation";

export function HelpPage({ t }) {
  return (
    <>
      <SectionHeader cmd={t.helpCmd} description={t.helpDesc} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
        {NAV.map((n) => (
          <div
            key={n.cmd}
            className="flex items-center gap-3 px-3 py-2 rounded border"
            style={{ borderColor: C.border, backgroundColor: "rgba(0,0,0,0.2)" }}
          >
            <n.icon size={14} style={{ color: C.accent }} />
            <span style={{ color: C.accent, fontWeight: 600 }}>{n.cmd}</span>
            <span className="text-xs" style={{ color: C.textMuted }}>
              — {t[n.key]}
            </span>
          </div>
        ))}
        <div
          className="flex items-center gap-3 px-3 py-2 rounded border"
          style={{ borderColor: C.border, backgroundColor: "rgba(0,0,0,0.2)" }}
        >
          <Download size={14} style={{ color: C.accent }} />
          <span style={{ color: C.accent, fontWeight: 600 }}>/download-cv</span>
          <span className="text-xs" style={{ color: C.textMuted }}>
            — resume.pdf
          </span>
        </div>
        <div
          className="flex items-center gap-3 px-3 py-2 rounded border"
          style={{ borderColor: C.border, backgroundColor: "rgba(0,0,0,0.2)" }}
        >
          <Languages size={14} style={{ color: C.accent }} />
          <span style={{ color: C.accent, fontWeight: 600 }}>/lang en|de</span>
          <span className="text-xs" style={{ color: C.textMuted }}>
            — EN / DE
          </span>
        </div>
        <div
          className="flex items-center gap-3 px-3 py-2 rounded border"
          style={{ borderColor: C.border, backgroundColor: "rgba(0,0,0,0.2)" }}
        >
          <Terminal size={14} style={{ color: C.accent }} />
          <span style={{ color: C.accent, fontWeight: 600 }}>/clear</span>
          <span className="text-xs" style={{ color: C.textMuted }}>
            — reset → /home
          </span>
        </div>
      </div>
      <div className="mt-4 text-xs space-y-1" style={{ color: C.textMuted }}>
        <div>{t.helpLangHint}</div>
        <div>{t.helpCVHint}</div>
      </div>
    </>
  );
}
