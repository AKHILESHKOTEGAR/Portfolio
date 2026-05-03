export const NAV_COMMANDS = [
  "/home",
  "/about",
  "/experience",
  "/skills",
  "/projects",
  "/education",
  "/achievements",
  "/contact",
];

export const UTILITY_COMMANDS = [
  "/help",
  "/lang",
  "/clear",
  "/download-cv",
  "/whoami",
];

export const VALID_CMDS = [...NAV_COMMANDS, ...UTILITY_COMMANDS];

export function parseCommand(raw) {
  if (!raw) return { base: "", arg: "", valid: false };
  const cmd = raw.toLowerCase().trim();
  const normalized = cmd.startsWith("/") ? cmd : `/${cmd}`;
  const [base, arg = ""] = normalized.split(/\s+/);
  return {
    base,
    arg,
    valid: VALID_CMDS.includes(base),
  };
}
