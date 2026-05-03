const RESUME_FILENAME = "Akhilesh_Kotegar_Resume.pdf";

export function downloadResume() {
  try {
    const link = document.createElement("a");
    link.href = `/${RESUME_FILENAME}`;
    link.download = RESUME_FILENAME;
    link.rel = "noopener";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return { ok: true, filename: RESUME_FILENAME };
  } catch {
    return { ok: false, filename: RESUME_FILENAME };
  }
}

export { RESUME_FILENAME };
