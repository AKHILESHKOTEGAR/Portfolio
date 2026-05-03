import { Download, User, FolderGit2, MapPin } from "lucide-react";
import { C } from "@/lib/tokens";
import { ASCII_AKHILESH } from "@/lib/ascii";
import { Streaming, MetricCard } from "@/components/shared";
import { VoxelPC } from "@/components/voxel/VoxelPC";

export function HomePage({ t, onCommand }) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-center mb-4">
        <pre
          className="text-[5px] sm:text-[8px] md:text-[9px] lg:text-[11px] leading-[1.15] font-bold overflow-x-auto whitespace-pre"
          style={{ color: C.accent }}
        >
          {ASCII_AKHILESH}
        </pre>
      </div>
      <div
        className="text-center text-xs tracking-[0.3em] mb-6"
        style={{ color: C.textMuted }}
      >
        {t.fullName.toUpperCase()}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1.1fr] gap-5 md:gap-8 items-center">
        {/* LEFT: voxel PC (hidden on very small screens) */}
        <div className="hidden sm:flex items-center justify-center">
          <VoxelPC />
        </div>
        <div className="sm:hidden flex justify-center mb-2">
          <div className="w-48">
            <VoxelPC />
          </div>
        </div>

        {/* RIGHT: content */}
        <div className="flex flex-col gap-4">
          <div className="text-xs" style={{ color: C.textMuted }}>
            <span style={{ color: C.ok }}>●</span> {t.sessionEstablished} —{" "}
            <span style={{ color: C.accent }}>akhilesh.dev v2.0.26</span>
          </div>

          <div
            className="text-sm sm:text-base leading-relaxed font-medium"
            style={{ color: C.accent }}
          >
            <Streaming text={t.summary} delay={200} />
          </div>

          <div className="grid grid-cols-3 gap-2">
            <MetricCard value="1.5y" label="EXP" delay={0.3} />
            <MetricCard value="15+" label="TECHS" delay={0.36} />
            <MetricCard
              value={t.metWerk}
              label={t.metWerkSub.replace("@ ", "").toUpperCase()}
              delay={0.42}
              small
            />
          </div>

          <div className="flex flex-wrap gap-2 text-xs">
            <div
              className="flex items-center gap-1.5 px-2.5 py-1 rounded border"
              style={{ borderColor: C.border, color: C.textDim }}
            >
              <MapPin size={12} style={{ color: C.accent }} />
              {t.location}
            </div>
            <div
              className="flex items-center gap-1.5 px-2.5 py-1 rounded border"
              style={{
                borderColor: C.borderStrong,
                backgroundColor: "rgba(126, 198, 153, 0.08)",
              }}
            >
              <span
                className="inline-block w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: C.ok }}
              />
              <span style={{ color: C.textMuted }}>[{t.statusLabel}]:</span>
              <span style={{ color: C.ok }}>{t.status}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            <button
              onClick={() => onCommand("/download-cv")}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded border text-sm font-medium transition-colors"
              style={{
                borderColor: C.accent,
                backgroundColor: "rgba(232, 168, 124, 0.12)",
                color: C.accent,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "rgba(232, 168, 124, 0.22)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "rgba(232, 168, 124, 0.12)")
              }
            >
              <Download size={14} /> {t.downloadCV}
            </button>
            <button
              onClick={() => onCommand("/about")}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded border text-sm transition-colors"
              style={{ borderColor: C.border, color: C.textDim }}
            >
              <User size={14} /> /about
            </button>
            <button
              onClick={() => onCommand("/projects")}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded border text-sm transition-colors"
              style={{ borderColor: C.border, color: C.textDim }}
            >
              <FolderGit2 size={14} /> /projects
            </button>
          </div>

          <div className="flex flex-wrap gap-1.5 text-xs pt-1">
            <span
              className="px-2 py-1 rounded border"
              style={{ borderColor: C.border, color: C.textDim }}
            >
              <span style={{ color: C.accent }}>→</span> {t.hint1}
            </span>
            <span
              className="px-2 py-1 rounded border"
              style={{ borderColor: C.border, color: C.textDim }}
            >
              <span style={{ color: C.accent }}>/help</span>{" "}
              <span style={{ color: C.textMuted }}>{t.hint3Suffix}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
