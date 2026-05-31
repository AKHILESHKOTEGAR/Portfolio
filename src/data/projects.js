export const PROJECTS = [

  {
    id: "grid-01",
    title: "PITWALL - F1 Immersive Dashboard",
    tag: "F1 ANALYTICS",
    size: "lg",
    shortEn: "Immersive F1 dashboard & comparative battle engine.",
    shortDe: "Immersives F1-Dashboard und vergleichende Battle-Engine.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Three.js", "React Three Fiber", "Framer Motion", "FastAPI", "Python", "FastF1", "NumPy", "Pandas", "WebSocket", "SSE", "Docker", "Vercel", "Railway"],
    github: "https://github.com/AKHILESHKOTEGAR/grid-01-dashboard.git",
    live: "https://pitwall-01.vercel.app/",
    impactsEn: ["Real-time race replay streaming telemetry (position, speed, DRS, tyre) for all 20 drivers via Server-Sent Events at 10 fps",
      "Interactive 3D F1 car viewer built with React Three Fiber — team-colored lighting, auto-rotate, dark/light mode",
      "Full-stack: FastAPI + FastF1 Python backend processing raw 20 Hz telemetry; deployed on Vercel + Railway via Docker",
      "Covers all F1 seasons (1950–2026) — race, qualifying, sprint results with animated podium cards and live standings"
    ],
    impactsDe: [
      "Echtzeit-Streaming von Rennwiederholungs-Telemetriedaten (Position, Geschwindigkeit, DRS, Reifen) für alle 20 Fahrer über Server-Sent Events mit 10 fps",
      "Interaktiver 3D-F1-Auto-Viewer, entwickelt mit React Three Fiber — teamfarbene Beleuchtung, automatische Rotation, Dark-/Light-Mode",
      "Full-Stack-Anwendung: FastAPI + FastF1 Python-Backend zur Verarbeitung von rohen 20-Hz-Telemetriedaten; Deployment über Docker auf Vercel + Railway",
      "Unterstützung aller F1-Saisons (1950–2026) — Rennen, Qualifying- und Sprint-Ergebnisse mit animierten Podiums-Karten und Live-Tabellenständen"
    ]
  },
  {
    id: "Allergy-Guard",
    title: "Allergy-Guard",
    tag: "Health Tech / AI",
    size: "md",
    shortEn: "AI-driven allergen detection and safe product alternative engine.",
    shortDe: "KI-gestützte Allergenerkennung und Suchmaschine für sichere Produktalternativen.",
    stack: ["Python", "Streamlit", "Gemini AI", "scikit-learn", "EasyOCR"],
    github: "https://github.com/AKHILESHKOTEGAR/Allergy_detector.git",
    live: "#",
    impactsEn: [
      "Developed a 3-tier analysis pipeline (Gemini Pro, ML, and Rule-based) for reliable ingredient scanning.",
      "Implemented 'Online Learning' using SGDClassifier to update the local model via real-time user feedback.",
      "Engineered a hallucination-free alternative engine grounded in Google Search and Open Food Facts data."
    ],
    impactsDe: [
      "Entwicklung einer 3-stufigen Analyse-Pipeline (Gemini Pro, ML und Rule-based) für zuverlässiges Inhaltsstoff-Scanning.",
      "Implementierung von 'Online Learning' mit SGDClassifier zur Echtzeit-Aktualisierung des lokalen Modells.",
      "Entwicklung einer halluzinationsfreien Suchmaschine für Alternativen basierend auf Google Search und Open Food Facts."
    ]
  },
  {
    id: "LiquorSafe",
    title: "LiquorSafe",
    tag: "Gov Tech / Full-Stack",
    size: "lg",
    shortEn: "Blind inventory audit platform for government-licensed liquor stores with real-time discrepancy detection.",
    shortDe: "Blindes Inventar-Prüfsystem für staatlich lizenzierte Spirituosengeschäfte mit Echtzeit-Abweichungserkennung.",
    stack: ["TypeScript", "Next.js 14", "Expo", "React Native", "Fastify", "Prisma", "PostgreSQL", "TailwindCSS"],
    github: "https://github.com/AKHILESHKOTEGAR/liquor_Inventory.git",
    live: "#",
    impactsEn: [
      "Architected a 3-tier role system (Owner, Manager, Staff) with JWT authentication, JTI-based token revocation, and store-scoped access control across a pnpm monorepo.",
      "Built a blind mobile audit scanner (Expo/React Native) with fraud guards — manual entry capped at 10 per session and snapshot-based stock freezing to prevent pre-session manipulation.",
      "Delivered a real-time web dashboard with calendar view, discrepancy matrix, surplus detection, manager sign-off workflow, and one-click PDF compliance report export for government inspectors."
    ],
    impactsDe: [
      "Architektur eines 3-stufigen Rollensystems (Owner, Manager, Staff) mit JWT-Authentifizierung, JTI-basiertem Token-Widerruf und filialspezifischer Zugriffskontrolle in einem pnpm-Monorepo.",
      "Entwicklung eines blinden mobilen Audit-Scanners (Expo/React Native) mit Betrugssicherungen — manuelle Eingabe auf 10 pro Sitzung begrenzt und snapshot-basierte Bestandseinfrierung zur Manipulationsverhinderung.",
      "Bereitstellung eines Echtzeit-Web-Dashboards mit Kalenderansicht, Abweichungsmatrix, Überschusserkennung, Manager-Freigabe-Workflow und PDF-Compliance-Berichtsexport für Behördeninspektoren."
    ]
  },

  {
    id: "Nexus-PDF",
    title: "Nexus-PDF",
    tag: "AI / RAG / Information Retrieval",
    size: "lge",
    shortEn: "High-precision RAG engine for technical document intelligence with two-stage retrieval.",
    shortDe: "Präzisions-RAG-Engine für technische Dokumentenanalyse mit zweistufigem Abruf.",
    stack: ["Next.js 15", "FastAPI", "ChromaDB", "LangChain", "FastEmbed", "PyMuPDF"],
    github: "https://github.com/AKHILESHKOTEGAR/Synapse-Query.git",
    live: "#",
    impactsEn: [
      "Architected a professional 2-stage retrieval pipeline using Bi-Encoders for fast search and Cross-Encoders for high-precision re-ranking[cite: 1].",
      "Engineered a Hybrid Search safety net combining Dense Vector Search with BM25 keyword matching to eliminate retrieval gaps in technical terminology[cite: 1].",
      "Optimized document ingestion using PyMuPDF for high-fidelity extraction and Recursive Character Text Splitting to preserve complex semantic context[cite: 1]."
    ],
    impactsDe: [
      "Architektur einer professionellen 2-stufigen Retrieval-Pipeline unter Verwendung von Bi-Encodern für die Schnellsuche und Cross-Encodern für präzises Re-Ranking[cite: 1].",
      "Entwicklung eines Hybrid-Search-Sicherheitsnetzes, das Dense Vector Search mit BM25-Keyword-Matching kombiniert, um Abruflücken bei technischer Terminologie zu schließen[cite: 1].",
      "Optimierte Dokumentenaufnahme mit PyMuPDF für High-Fidelity-Extraktion und Recursive Character Text Splitting zur Bewahrung komplexer semantischer Kontexte[cite: 1]."
    ]
  },
  {
    id: "orbit-dashboard",
    title: "Orbit SaaS CRM",
    tag: "AI SAAS",
    size: "md",
    shortEn: "Multi-tenant CRM with Gemini AI automation and E2E type safety.",
    shortDe: "Multi-tenant CRM mit Gemini KI-Automatisierung und E2E-Typsicherheit.",
    stack: ["Next.js 16", "TypeScript", "Prisma", "Gemini API"],
    github: "https://github.com/akhilesh-k/orbit-dashboard",
    live: "#",
    impactsEn: [
      "Architected a multi-tenant SaaS with RBAC security via Clerk and Prisma/PostgreSQL.",
      "Integrated Gemini AI to automate email drafting, reducing admin workload by 40%.",
      "Deployed via CI/CD pipelines on Vercel with zero-downtime architecture.",
    ],
    impactsDe: [
      "Multi-tenant SaaS mit RBAC-Sicherheit über Clerk und Prisma/PostgreSQL entwickelt.",
      "Gemini KI integriert, um E-Mail-Entwürfe zu automatisieren (40% weniger Aufwand).",
      "CI/CD-Pipelines auf Vercel mit Zero-Downtime-Architektur implementiert.",
    ],
  },
  {
    id: "ai-code-reviewer",
    title: "AI Code Reviewer",
    tag: "CHROME EXT",
    size: "md",
    shortEn: "Claude-powered extension injecting reviews directly into GitHub PRs.",
    shortDe: "Claude-basierte Extension für KI-Code-Reviews direkt in GitHub PRs.",
    stack: ["JavaScript", "Chrome MV3", "Claude API", "DOM"],
    github: "https://github.com/akhilesh-k/ai-code-reviewer",
    live: "#",
    impactsEn: [
      "Injected AI-powered comments into GitHub PRs, eliminating manual context switching.",
      "Processed live diffs via Claude API with structured severity tags (Critical/Warning/Info).",
      "Engineered MV3 architecture with content scripts and service worker messaging.",
    ],
    impactsDe: [
      "KI-Kommentare in GitHub PRs injiziert, um Kontextwechsel zu vermeiden.",
      "Live-Diffs über Claude API mit Schweregrad-Tags (Kritisch/Warnung/Info) verarbeitet.",
      "MV3-Architektur mit Content-Scripts und Service-Worker-Messaging entwickelt.",
    ],
  },
  {
    id: "wine-inventory",
    title: "Serverless Wine Store",
    tag: "MOBILE / AWS",
    size: "sm",
    shortEn: "Serverless Flutter app with AWS Lambda and QR stocktaking.",
    shortDe: "Serverless Flutter App mit AWS Lambda und QR-Inventur.",
    stack: ["Flutter", "AWS Lambda", "MongoDB", "QR"],
    github: "https://github.com/akhilesh-k/kegs-pegs",
    live: "#",
    impactsEn: [
      "Built a mobile inventory app reducing manual stocktaking effort by 70% via QR scanning.",
      "Optimized backend performance by 90% via MongoDB indexing and API Gateway caching.",
      "Serverless architecture using Dart (Flutter) and Python (Lambda).",
    ],
    impactsDe: [
      "Mobile Inventur-App entwickelt; 70% weniger Aufwand durch QR-Scanning.",
      "Backend-Performance um 90% gesteigert durch MongoDB-Indizes und Caching.",
      "Serverless-Architektur mit Dart (Flutter) und Python (Lambda).",
    ],
  },

];