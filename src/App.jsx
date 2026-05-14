import { useState } from "react";
import { C } from "@/lib/tokens";
import { parseCommand } from "@/lib/commands";
import { downloadResume } from "@/lib/download";
import { I18N } from "@/i18n";
import { useFeedback } from "@/hooks/useFeedback";

import { Scanlines } from "@/components/shared";
import { BootScreen } from "@/components/boot/BootScreen";
import { NavBar, TerminalShell } from "@/components/layout";
import { CLIInput } from "@/components/cli/CLIInput";
import { PAGE_MAP } from "@/components/pages";
import {
  Modal,
  ProjectModalBody,
  ExperienceModalBody,
} from "@/components/modal";

export default function App() {
  const [booted, setBooted] = useState(false);
  const [activePage, setActivePage] = useState("/home");
  const [lang, setLang] = useState("en");
  const [modal, setModal] = useState(null);
  const { feedback, setFb } = useFeedback();

  const t = I18N[lang];

  const pathFor = (cmd) => {
    const entry = PAGE_MAP[cmd];
    if (!entry) return "~";
    return `~/${t[entry.pathKey] || entry.pathKey}`;
  };

  const doDownload = () => {
    const res = downloadResume(lang);
    if (res.ok) {
      setFb(`↓ downloading ${res.filename}`, "ok");
    } else {
      setFb("[ERROR]: download failed — place the PDF in /public", "err");
    }
  };

  const runCommand = (raw) => {
    const { base, arg, valid } = parseCommand(raw);

    // /download-cv
    if (base === "/download-cv") {
      doDownload();
      return;
    }

    // /lang
    if (base === "/lang") {
      if (arg === "en" || arg === "de") {
        setLang(arg);
        setFb(`→ language = ${arg.toUpperCase()}`, "ok");
      } else {
        setFb(
          "[ERROR]: /lang requires 'en' or 'de'. Example: /lang de",
          "err"
        );
      }
      return;
    }

    // /clear
    if (base === "/clear") {
      setActivePage("/home");
      setFb("↺ reset to /home", "ok");
      return;
    }

    // /whoami easter egg
    if (base === "/whoami") {
      setFb("akhilesh — M.Sc. student · Deggendorf · open to Werkstudent", "ok");
      return;
    }

    // invalid
    if (!valid) {
      setFb("[ERROR]: Command not found. Type /help.", "err");
      return;
    }

    // navigation
    if (PAGE_MAP[base]) {
      setActivePage(base);
      setFb(`→ ${base}`, "ok");
      return;
    }

    setFb("[ERROR]: Command not found. Type /help.", "err");
  };

  if (!booted) return <BootScreen onComplete={() => setBooted(true)} t={t} />;

  const page = PAGE_MAP[activePage] || PAGE_MAP["/home"];
  const ActiveComp = page.comp;
  const currentPath = pathFor(activePage);

  const pageProps = {
    t,
    lang,
    onCommand: runCommand,
    onOpen:
      activePage === "/projects"
        ? (p) => setModal({ kind: "project", data: p })
        : activePage === "/experience"
        ? (e) => setModal({ kind: "experience", data: e })
        : undefined,
  };

  return (
    <div
      className="h-screen w-screen flex flex-col overflow-hidden relative"
      style={{ backgroundColor: C.bg }}
    >
      <Scanlines />

      <NavBar
        onNavigate={runCommand}
        activePage={activePage}
        lang={lang}
        onLang={(l) => {
          setLang(l);
          setFb(`→ language = ${l.toUpperCase()}`, "ok");
        }}
        onDownload={doDownload}
      />

      <div className="flex-1 min-h-0 relative z-10 max-w-6xl w-full mx-auto px-3 sm:px-6 py-3 sm:py-5">
        <div className="h-full">
          <TerminalShell
            title={`akhilesh@dev-os ${currentPath}`}
            activeKey={activePage + lang}
          >
            <ActiveComp {...pageProps} />
          </TerminalShell>
        </div>
      </div>

      <CLIInput
        onCommand={runCommand}
        feedback={feedback}
        currentPath={currentPath}
      />

      <Modal
        open={!!modal}
        onClose={() => setModal(null)}
        title={
          modal
            ? modal.kind === "project"
              ? `akhilesh@dev-os ~/projects/${modal.data.id}`
              : `akhilesh@dev-os ~/experience/${modal.data.id}`
            : ""
        }
      >
        {modal && modal.kind === "project" && (
          <ProjectModalBody
            data={modal.data}
            lang={lang}
            t={t}
            onClose={() => setModal(null)}
          />
        )}
        {modal && modal.kind === "experience" && (
          <ExperienceModalBody
            data={modal.data}
            lang={lang}
            t={t}
            onClose={() => setModal(null)}
          />
        )}
      </Modal>
    </div>
  );
}
