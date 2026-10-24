/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import AchievementsSection from "@/components/section/hackathons-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import {
  Activity,
  ArrowUpRight,
  Bug,
  CheckCircle2,
  Clock,
  Code2,
  Database,
  FileText,
  Globe,
  Network,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  Users,
  Workflow,
} from "lucide-react";
import { Icons } from "@/components/icons";
import { Csharp } from "@/components/ui/svgs/csharp";
import { Java } from "@/components/ui/svgs/java";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Python } from "@/components/ui/svgs/python";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";
import {
  SiCodeigniter,
  SiDotnet,
  SiFastapi,
  SiGit,
  SiGithubactions,
  SiMysql,
  SiN8N,
  SiPhp,
  SiPostman,
  SiSqlite,
  SiVite,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { FaWindows } from "react-icons/fa6";
import { cn } from "@/lib/utils";

const BLUR_FADE_DELAY = 0.04;

function SkillLogo({ skill }: { skill: string }) {
  const baseClass = "h-4 w-4 shrink-0";

  const initials =
    skill
      .split(/\s|[()&/.-]/)
      .filter(Boolean)
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "•";

  const fallback = (tone: string) => (
    <div
      className={`flex h-4 w-4 items-center justify-center rounded-full text-[8px] font-semibold ring-1 ${tone}`}
    >
      {initials}
    </div>
  );

  switch (skill) {
    case "Python":
      return <Python className={baseClass} />;
    case "C#":
      return <Csharp className={baseClass} />;
    case "Java":
      return <Java className={baseClass} />;
    case "JavaScript":
      return <Typescript className={baseClass} />;
    case "PHP":
      return <SiPhp className={baseClass} color="#777BB3" />;
    case "SQL":
      return <Database className={cn(baseClass, "text-sky-500")} />;
    case "FastAPI":
      return <SiFastapi className={baseClass} color="#009485" />;
    case "React":
      return <ReactLight className={baseClass} />;
    case "Vite":
      return <SiVite className={baseClass} color="#646CFF" />;
    case ".NET":
    case ".NET (WPF)":
      return <SiDotnet className={baseClass} color="#512BD4" />;
    case "CodeIgniter":
      return <SiCodeigniter className={baseClass} color="#EE4323" />;
    case "PostgreSQL":
      return <Postgresql className={baseClass} />;
    case "MySQL":
      return <SiMysql className={baseClass} color="#4479A1" />;
    case "SQLite":
      return <SiSqlite className={baseClass} color="#003B57" />;
    case "Relational Schema Design":
      return <Database className={cn(baseClass, "text-indigo-400")} />;
    case "Data Normalization":
      return <Workflow className={cn(baseClass, "text-emerald-500")} />;
    case "n8n Workflows":
    case "n8n":
      return <SiN8N className={baseClass} color="#EA4B71" />;
    case "Webhooks":
      return <Workflow className={cn(baseClass, "text-amber-500")} />;
    case "RESTful APIs":
      return <Globe className={cn(baseClass, "text-sky-400")} />;
    case "LLM API Pipelines (Claude/Gemini/OpenAI)":
      return <Sparkles className={cn(baseClass, "text-purple-400")} />;
    case "API Inspection (Postman)":
    case "Postman":
      return <SiPostman className={baseClass} color="#FF6C37" />;
    case "Defect Triage":
      return <Bug className={cn(baseClass, "text-rose-400")} />;
    case "Edge-Case Testing":
      return <Activity className={cn(baseClass, "text-teal-400")} />;
    case "Test Automation (Playwright)":
      return <CheckCircle2 className={cn(baseClass, "text-emerald-500")} />;
    case "Git":
      return <SiGit className={baseClass} color="#F05032" />;
    case "GitHub":
      return <Icons.github className={baseClass} />;
    case "GitHub Actions":
    case "GitHub Actions (CI/CD)":
      return <SiGithubactions className={baseClass} color="#2088FF" />;
    case "Windows 10/11":
      return <FaWindows className={baseClass} color="#0078D6" />;
    case "Active Directory (User Provisioning, RBAC basics)":
      return <Users className={cn(baseClass, "text-blue-500")} />;
    case "Azure Fundamentals":
      return <VscAzure className={baseClass} color="#0089D6" />;
    case "TCP/IP":
      return <Network className={cn(baseClass, "text-sky-400")} />;
    case "DNS":
    case "DHCP":
      return <Server className={cn(baseClass, "text-indigo-400")} />;
    case "CLI Diagnostics (ping, nslookup, tracert, ipconfig)":
      return <Terminal className={cn(baseClass, "text-emerald-400")} />;
    case "Incident & Service Request Management":
      return <ShieldCheck className={cn(baseClass, "text-amber-400")} />;
    case "ITIL 4 Concepts":
      return <Workflow className={cn(baseClass, "text-cyan-400")} />;
    case "SLA Adherence":
      return <Clock className={cn(baseClass, "text-orange-400")} />;
    case "Technical SOP Documentation":
      return <FileText className={cn(baseClass, "text-blue-400")} />;
    default:
      return fallback("ring-border/60 text-muted-foreground");
  }
}

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-2.5 flex flex-col order-2 md:order-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />
              <BlurFadeText
                className="text-foreground/90 font-medium max-w-150 md:text-lg lg:text-xl leading-snug"
                delay={BLUR_FADE_DELAY * 1.5}
                text={DATA.headline}
              />
              <BlurFadeText
                className="text-muted-foreground max-w-150 text-sm md:text-base leading-relaxed"
                delay={BLUR_FADE_DELAY * 2}
                text={DATA.subheadline}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>
                {DATA.summary}
              </Markdown>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + index * 0.05}
              >
                <Link
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-3 justify-between group"
                >
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    {education.logoUrl ? (
                      <img
                        src={education.logoUrl}
                        alt={education.school}
                        className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                      />
                    ) : (
                      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                    )}
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="font-semibold leading-none flex items-center gap-2">
                        {education.school}
                        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">
                        {education.degree}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                    <span>
                      {education.start} - {education.end}
                    </span>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <div className="flex flex-col gap-y-1">
              <h2 className="text-xl font-bold">Technical Expertise & Tooling</h2>
              <p className="text-sm text-muted-foreground">
                Spanning software development, automated workflows, and enterprise systems infrastructure.
              </p>
            </div>
          </BlurFade>
          <div className="flex flex-col gap-5">
            {DATA.skills.map((skillDomain, domainIndex) => (
              <BlurFade
                key={skillDomain.domain}
                delay={BLUR_FADE_DELAY * 10 + domainIndex * 0.08}
              >
                <div className="rounded-xl border border-border/70 bg-card/50 p-4 sm:p-5 shadow-xs backdrop-blur-xs flex flex-col gap-4">
                  <div className="flex items-center gap-2.5 border-b border-border/60 pb-3">
                    {skillDomain.domain.includes("Software") && (
                      <Code2 className="size-4.5 text-blue-500 shrink-0" />
                    )}
                    {skillDomain.domain.includes("Systems") && (
                      <Workflow className="size-4.5 text-purple-500 shrink-0" />
                    )}
                    {skillDomain.domain.includes("Enterprise") && (
                      <Server className="size-4.5 text-emerald-500 shrink-0" />
                    )}
                    <h3 className="font-semibold text-base tracking-tight text-foreground">
                      {skillDomain.domain}
                    </h3>
                  </div>

                  <div className="flex flex-col gap-4">
                    {skillDomain.categories.map((category) => (
                      <div key={category.name} className="space-y-2">
                        <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground/90">
                          {category.name}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {category.items.map((skill) => (
                            <div
                              key={`${category.name}-${skill}`}
                              className="flex h-8 items-center gap-2 rounded-full border border-border/70 bg-muted/30 px-2.5 py-1.5 text-xs sm:text-sm text-foreground shadow-xs transition-colors hover:border-border/90 hover:bg-muted/60"
                            >
                              <SkillLogo skill={skill} />
                              <span className="font-medium leading-none">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <ProjectsSection />
        </BlurFade>
      </section>
      <section id="achievements">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <AchievementsSection />
        </BlurFade>
      </section>
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
