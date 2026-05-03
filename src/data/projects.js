export const PROJECTS = [
  {
    id: "Allergy-Guard",
    title: "Allergy-Guard",
    tag: "Health Tech / AI",
    size: "lg",
    shortEn: "AI-driven allergen detection and safe product alternative engine.",
    shortDe: "KI-gestützte Allergenerkennung und Suchmaschine für sichere Produktalternativen.",
    stack: ["Python", "Streamlit", "Gemini AI", "scikit-learn", "EasyOCR"],
    github: "https://github.com/AKHILESHKOTEGAR/Allergy_detector.git",
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
    id: "grid-01",
    title: "GRID-01 Dashboard",
    tag: "F1 ANALYTICS",
    size: "md",
    shortEn: "Immersive F1 dashboard & comparative battle engine.",
    shortDe: "Immersives F1-Dashboard und vergleichende Battle-Engine.",
    stack: ["TypeScript", "Next.js 16", "F1 API", "Tailwind"],
    github: "https://github.com/akhilesh-k/grid-01-dashboard",
    impactsEn: [
      "Real-time telemetry visualization using live F1 API data.",
      "Built a custom predictive engine for mid-race battle outcomes.",
      "Responsive terminal-style UI optimized for high-density data."
    ],
    impactsDe: [
      "Echtzeit-Telemetrie-Visualisierung mit Live-F1-API-Daten.",
      "Eigene Predictive Engine für Rennergebnisse entwickelt.",
      "Terminal-UI für hohe Datendichte optimiert."
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