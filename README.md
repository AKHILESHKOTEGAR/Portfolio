# akhilesh@dev-os — Terminal Portfolio

An interactive, CLI-driven React portfolio. Claude-terminal / digital-lab aesthetic,
strict command validation, EN/DE i18n, and a voxel-PC hero.

Stack: **React 18** · **Vite** · **Tailwind CSS** · **Framer Motion** · **Lucide Icons**

---

## Quick start

```bash
npm install
npm run dev
```

Then open the URL Vite prints (default: http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

---

## Required assets

Drop these two files into the `public/` folder before shipping:

| File | Purpose |
|------|---------|
| `public/retro-pc.png` | Voxel PC image for the hero. If missing, an SVG fallback renders automatically. |
| `public/Akhilesh_Kotegar_Resume.pdf` | Served by the `Download Resume` button and the `/download-cv` command. |

---

## Commands

Typed at the bottom CLI. Case-insensitive. Unknown commands return
`[ERROR]: Command not found. Type /help.`

| Command | Action |
|---|---|
| `/home` | Hero dashboard |
| `/about` | Bento grid: mission, goals, life in Germany, languages, focus |
| `/experience` | Celebto Technologies card — click for impact modal |
| `/skills` | Filterable pills with hover progress bars |
| `/projects` | Bento grid — click any card for a full modal with impact log |
| `/education` | M.Sc. Applied CS + GPA |
| `/contact` | GitHub / LinkedIn / Gmail / Phone as a density log |
| `/help` | List every command |
| `/lang en` / `/lang de` | Switch language |
| `/download-cv` | Download the resume |
| `/clear` | Reset to `/home` |
| `/whoami` | Easter egg |

Arrow **Up / Down** cycles command history.
Pressing any letter refocuses the CLI.

---

## Architecture

```
akhilesh-portfolio/
├── index.html
├── package.json
├── vite.config.js           ← '@/' alias → src/
├── tailwind.config.js
├── postcss.config.js
├── public/                  ← retro-pc.png, resume PDF
└── src/
    ├── main.jsx             ← createRoot entry
    ├── App.jsx              ← state + command router + modal orchestration
    ├── styles/
    │   └── globals.css      ← Tailwind layers + CSS tokens
    ├── lib/                 ← pure utilities (no React)
    │   ├── tokens.js        ← C = { bg, accent, … }  used in inline styles
    │   ├── ascii.js         ← ASCII_AKHILESH
    │   ├── commands.js      ← VALID_CMDS + parseCommand()
    │   └── download.js      ← downloadResume()
    ├── hooks/               ← focused, single-purpose hooks
    │   ├── useStreamingText.js
    │   ├── useFeedback.js
    │   ├── useGlobalFocus.js
    │   └── useCommandHistory.js
    ├── i18n/
    │   ├── en.js
    │   ├── de.js
    │   └── index.js         ← I18N = { en, de }
    ├── data/                ← static datasets, no JSX
    │   ├── bootLines.js
    │   ├── skills.js
    │   ├── projects.js
    │   ├── experiences.js
    │   └── navigation.js    ← NAV (paths + lucide icons)
    └── components/
        ├── shared/          ← Scanlines, Streaming, SectionHeader, BentoCard, MetricCard
        ├── boot/BootScreen.jsx
        ├── voxel/           ← VoxelPC + SVG fallback
        ├── hero/HomePage.jsx
        ├── pages/           ← About, Experience, Skills, Projects, Education, Contact, Help
        │   └── index.js     ← PAGE_MAP registry
        ├── modal/           ← Modal shell + Project/Experience bodies
        ├── cli/CLIInput.jsx
        └── layout/          ← NavBar + TerminalShell
```

### Where state lives

- `App.jsx` holds `activePage`, `lang`, `modal`, `booted`. Everything else is props.
- `runCommand()` is the single router — typed commands and nav button clicks both go through it.
- CLI history lives inside `CLIInput` (scoped), via `useCommandHistory`.

### Adding a page

1. Drop `MyPage.jsx` into `src/components/pages/`.
2. Register it in `src/components/pages/index.js` inside `PAGE_MAP`.
3. Add `/mypage` to `NAV_COMMANDS` in `src/lib/commands.js`.
4. Add nav metadata (path + icon) to `src/data/navigation.js`.
5. Add translation keys to `src/i18n/en.js` and `src/i18n/de.js`.

### Adding a project

Append to `src/data/projects.js`. The modal and grid pick it up automatically.

---

## Theming

All colors live in **two** places that stay in sync by hand:

- `src/lib/tokens.js` — used in inline `style={{ color: C.accent }}` attributes
- `src/styles/globals.css` — CSS variables for scrollbars and selection

Change both if you rebrand.

---

## License

MIT — do what you want.
