import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ExternalLink } from "lucide-react";
import { C } from "@/lib/tokens";
import { SectionHeader } from "@/components/shared";

const ENTRIES = [
  {
    key: "GITHUB",
    value: "github.com/akhilesh",
    href: "https://github.com/AKHILESHKOTEGAR",
    Icon: Github,
  },
  {
    key: "LINKEDIN",
    value: "linkedin.com/in/akhilesh",
    href: "https://www.linkedin.com/in/akhilesh-kotegar-489890249/",
    Icon: Linkedin,
  },
  {
    key: "GMAIL",
    value: "akhilkotegar@gmail.com",
    href: "mailto:akhilkotegar@gmail.com",
    Icon: Mail,
  },
  {
    key: "PHONE",
    value: "+49 15565794606",
    href: "tel:+4915565794606",
    Icon: Phone,
  },
];

export function ContactPage({ t }) {
  return (
    <>
      <SectionHeader cmd={t.contactCmd} description={t.contactDesc} />
      <div
        className="rounded-md border overflow-hidden"
        style={{ borderColor: C.border, backgroundColor: "rgba(0,0,0,0.3)" }}
      >
        <div
          className="grid grid-cols-[90px_1fr_auto] gap-3 px-4 py-2 border-b text-[10px] tracking-widest"
          style={{ borderColor: C.border, color: C.textMuted }}
        >
          <span>CHANNEL</span>
          <span>ADDRESS</span>
          <span>ACTION</span>
        </div>
        {ENTRIES.map((e, i) => (
          <motion.a
            key={e.key}
            href={e.href}
            target="_blank"
            rel="noreferrer noopener"
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25, delay: i * 0.05 }}
            className="grid grid-cols-[90px_1fr_auto] gap-3 px-4 py-2.5 text-sm border-b last:border-b-0 group items-center"
            style={{ borderColor: C.border }}
          >
            <span
              className="text-[10px] font-bold tracking-widest"
              style={{ color: C.accent }}
            >
              [{e.key}]
            </span>
            <span
              className="truncate flex items-center gap-2"
              style={{ color: C.textDim }}
            >
              <e.Icon size={13} style={{ color: C.accent, flexShrink: 0 }} />
              {e.value}
            </span>
            <span
              className="text-[10px] flex items-center gap-1 opacity-60 group-hover:opacity-100 transition-opacity"
              style={{ color: C.accent }}
            >
              open <ExternalLink size={10} />
            </span>
          </motion.a>
        ))}
      </div>
      <div className="mt-3 text-[11px]" style={{ color: C.textMuted }}>
        $ all channels monitored — response typically &lt; 24h
      </div>
    </>
  );
}
