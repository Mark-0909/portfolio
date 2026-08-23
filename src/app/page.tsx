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
import { ArrowUpRight } from "lucide-react";
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
  SiMysql,
  SiPhp,
  SiPostman,
  SiSqlite,
  SiVite,
} from "react-icons/si";

const BLUR_FADE_DELAY = 0.04;

function SkillLogo({ skill }: { skill: string }) {
  const baseClass = "h-4 w-4 shrink-0";

  const initials = skill
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
    case "React":
      return <ReactLight className={baseClass} />;
    case "PostgreSQL":
      return <Postgresql className={baseClass} />;
    case "FastAPI":
      return <SiFastapi className={baseClass} color="#009485" />;
    case "Vite":
      return <SiVite className={baseClass} color="#646CFF" />;
    case ".NET":
      return <SiDotnet className={baseClass} color="#512BD4" />;
    case "CodeIgniter":
      return <SiCodeigniter className={baseClass} color="#EE4323" />;
    case "SQLite":
      return <SiSqlite className={baseClass} color="#003B57" />;
    case "MySQL":
      return <SiMysql className={baseClass} color="#4479A1" />;
    case "PHP":
      return <SiPhp className={baseClass} color="#777BB3" />;
    case "Git":
      return <SiGit className={baseClass} color="#F05032" />;
    case "Postman":
      return <SiPostman className={baseClass} color="#FF6C37" />;
    case "GitHub":
      return <Icons.github className={baseClass} />;
    default:
      return null;
  }
}

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />
              <BlurFadeText
                className="text-muted-foreground max-w-150 md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
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
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-col gap-4">
            {DATA.skills.map((skillGroup, groupIndex) => (
              <div key={skillGroup.category} className="space-y-2.5">
                <h3 className="text-sm font-semibold uppercase tracking-[0.13em] text-muted-foreground/90">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, itemIndex) => (
                    <BlurFade
                      key={`${skillGroup.category}-${skill}`}
                      delay={BLUR_FADE_DELAY * 10 + groupIndex * 0.05 + itemIndex * 0.02}
                    >
                      <div className="flex h-8 items-center gap-2.5 rounded-full border border-border/70 bg-muted/30 px-2.5 py-1.5 text-sm text-foreground shadow-sm transition-colors hover:border-border/90">
                        <SkillLogo skill={skill} />
                        <span className="font-medium leading-none">{skill}</span>
                      </div>
                    </BlurFade>
                  ))}
                </div>
              </div>
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
