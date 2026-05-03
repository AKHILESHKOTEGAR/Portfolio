import {
  Terminal,
  User,
  Briefcase,
  Code2,
  FolderGit2,
  Mail,
  GraduationCap,
  Trophy,
} from "lucide-react";

export const NAV = [
  { cmd: "/home", key: "home", icon: Terminal },
  { cmd: "/about", key: "about", icon: User },
  { cmd: "/experience", key: "experience", icon: Briefcase },
  { cmd: "/skills", key: "skills", icon: Code2 },
  { cmd: "/projects", key: "projects", icon: FolderGit2 },
  { cmd: "/education", key: "education", icon: GraduationCap },
  { cmd: "/achievements", key: "achievements", icon: Trophy },
  { cmd: "/contact", key: "contact", icon: Mail },
];
