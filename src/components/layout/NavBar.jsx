import { Terminal, Download, HelpCircle } from "lucide-react";
import { C } from "@/lib/tokens";
import { NAV } from "@/data/navigation";

export function NavBar({ onNavigate, activePage, lang, onLang, onDownload }) {
  return (
    <div
      className="border-b shrink-0"
      style={{
        backgroundColor: "rgba(19,19,31,0.6)",
        borderColor: C.border,
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2.5 flex items-center gap-3 flex-wrap">
        <button
          onClick={() => onNavigate("/home")}
          className="flex items-center gap-2 text-sm shrink-0"
          style={{ color: C.accent, fontWeight: 600 }}
        >
          <Terminal size={15} />
          <span className="hidden sm:inline">akhilesh@dev-os</span>
        </button>

        <div className="flex-1 flex items-center gap-0.5 sm:gap-1 flex-wrap text-xs sm:text-sm">
          {NAV.slice(1).map((n) => (
            <button
              key={n.cmd}
              onClick={() => onNavigate(n.cmd)}
              className="px-2 sm:px-2.5 py-1 rounded transition-colors"
              style={{
                color: activePage === n.cmd ? C.accent : C.textDim,
                backgroundColor:
                  activePage === n.cmd
                    ? "rgba(232, 168, 124, 0.1)"
                    : "transparent",
                border:
                  activePage === n.cmd
                    ? `1px solid ${C.border}`
                    : "1px solid transparent",
              }}
              onMouseEnter={(e) => {
                if (activePage !== n.cmd) e.currentTarget.style.color = C.accent;
              }}
              onMouseLeave={(e) => {
                if (activePage !== n.cmd) e.currentTarget.style.color = C.textDim;
              }}
            >
              {n.cmd}
            </button>
          ))}
        </div>

        <button
          onClick={onDownload}
          className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded border text-xs font-medium transition-colors"
          style={{
            borderColor: C.accent,
            color: C.accent,
            backgroundColor: "rgba(232, 168, 124, 0.08)",
          }}
          title="/download-cv"
        >
          <Download size={12} /> CV
        </button>

        <div
          className="flex items-center rounded border text-[10px] font-bold overflow-hidden shrink-0"
          style={{ borderColor: C.border }}
        >
          {["en", "de"].map((l) => (
            <button
              key={l}
              onClick={() => onLang(l)}
              className="px-2 py-1 transition-colors"
              style={{
                color: lang === l ? C.bg : C.textDim,
                backgroundColor: lang === l ? C.accent : "transparent",
              }}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>

        <button
          onClick={() => onNavigate("/help")}
          className="p-1 rounded border transition-colors shrink-0"
          style={{ borderColor: C.border, color: C.textDim }}
          onMouseEnter={(e) => (e.currentTarget.style.color = C.accent)}
          onMouseLeave={(e) => (e.currentTarget.style.color = C.textDim)}
          title="/help"
        >
          <HelpCircle size={14} />
        </button>
      </div>
    </div>
  );
}
