import { HomePage } from "@/components/hero/HomePage";
import { AboutPage } from "./AboutPage";
import { ExperiencePage } from "./ExperiencePage";
import { SkillsPage } from "./SkillsPage";
import { ProjectsPage } from "./ProjectsPage";
import { EducationPage } from "./EducationPage";
import { AchievementsPage } from "./AchievementsPage";
import { ContactPage } from "./ContactPage";
import { HelpPage } from "./HelpPage";

export const PAGE_MAP = {
  "/home": { comp: HomePage, pathKey: "home" },
  "/about": { comp: AboutPage, pathKey: "about" },
  "/experience": { comp: ExperiencePage, pathKey: "experience" },
  "/skills": { comp: SkillsPage, pathKey: "skills" },
  "/projects": { comp: ProjectsPage, pathKey: "projects" },
  "/education": { comp: EducationPage, pathKey: "education" },
  "/achievements": { comp: AchievementsPage, pathKey: "achievements" },
  "/contact": { comp: ContactPage, pathKey: "contact" },
  "/help": { comp: HelpPage, pathKey: "help" },
};
