const RESUME_FILENAMES = {
  en: "Akhilesh_Kotegar_Resume_EN.pdf",
  de: "Akhilesh_Kotegar_Resume_DE.pdf",
};

export function downloadResume(lang = "en") {
  const filename = RESUME_FILENAMES[lang] ?? RESUME_FILENAMES.en;
  try {
    const link = document.createElement("a");
    link.href = `/${filename}`;
    link.download = filename;
    link.rel = "noopener";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return { ok: true, filename };
  } catch {
    return { ok: false, filename };
  }
}
