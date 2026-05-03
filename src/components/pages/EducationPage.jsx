import { GraduationCap, CheckCircle2, Clock } from "lucide-react"; // Added Clock for "In Progress"
import { C } from "@/lib/tokens";
import { SectionHeader } from "@/components/shared";

export function EducationPage({ t }) {
  // Array to manage multiple degrees
  const educationData = [
    {
      degree: "Masters in Applied Computer Science", // Replace with your specific specialization
      institution: "Technische hochschule Deggendorf",
      duration: "2025 — 2027",
      gpa: "—", // Or current GPA
      status: "In Progress",
    },
    {
      degree: "Bachelors in Engineering - Information Science and Engineering",
      institution: "Ramaiah Institute of Technology",
      duration: "2021 — 2025",
      gpa: "8.05",
      status: "Completed",
      isCompleted: true,
    },
  ];

  return (
    <>
      <SectionHeader cmd={t.eduCmd} description={t.eduDesc} />

      <div className="flex flex-col gap-6">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="rounded-md border p-5 sm:p-6 relative overflow-hidden"
            style={{
              borderColor: C.borderStrong,
              background: index === 0
                ? `linear-gradient(135deg, rgba(232,168,124,0.1) 0%, transparent 60%)` // Slightly highlight the most recent
                : `linear-gradient(135deg, rgba(232,168,124,0.05) 0%, transparent 60%)`,
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
                <GraduationCap size={20} style={{ color: C.accent }} />
              </div>

              <div className="flex-1 min-w-[240px]">
                <div className="text-xs mb-1" style={{ color: C.textMuted }}>
                  {edu.duration}
                </div>

                <h3
                  className="text-lg sm:text-xl font-bold mb-1"
                  style={{ color: C.accent }}
                >
                  {edu.degree}
                </h3>

                <div className="text-sm mb-4 font-medium" style={{ color: C.textDim }}>
                  {edu.institution}
                </div>

                <div
                  className="inline-flex items-center gap-3 px-4 py-2.5 rounded-md"
                  style={{
                    backgroundColor: "rgba(232, 168, 124, 0.08)",
                    border: `1px solid ${C.borderStrong}`,
                  }}
                >
                  <div>
                    <div className="text-[10px] tracking-widest uppercase" style={{ color: C.textMuted }}>
                      {t.eduGPA}
                    </div>
                    <div className="text-2xl font-bold leading-tight" style={{ color: C.accent }}>
                      {edu.gpa}
                    </div>
                  </div>

                  <div className="h-8 w-px" style={{ backgroundColor: C.border }} />

                  <div>
                    <div className="text-[10px] tracking-widest uppercase" style={{ color: C.textMuted }}>
                      {t.eduStatus}
                    </div>
                    <div
                      className="text-sm font-bold flex items-center gap-1.5"
                      style={{ color: edu.isCompleted ? C.ok : C.accent }}
                    >
                      {edu.isCompleted ? (
                        <CheckCircle2 size={14} />
                      ) : (
                        <Clock size={14} />
                      )}
                      {edu.status}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}