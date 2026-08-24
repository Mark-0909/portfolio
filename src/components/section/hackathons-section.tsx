/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { DATA } from "@/data/resume";
import { Trophy, Calendar, MapPin, Award, BookOpen, Rocket, ArrowUpRight } from "lucide-react";

export default function AchievementsSection() {
  const getIcon = (sticker?: string) => {
    switch (sticker) {
      case "trophy":
        return <Trophy className="size-5 text-amber-500" />;
      case "medal":
        return <Award className="size-5 text-blue-500" />;
      case "book":
        return <BookOpen className="size-5 text-emerald-500" />;
      case "rocket":
        return <Rocket className="size-5 text-purple-500" />;
      case "award":
        return <Award className="size-5 text-pink-500" />;
      default:
        return <Trophy className="size-5 text-amber-500" />;
    }
  };

  return (
    <section id="achievements" className="w-full py-6">
      <div className="flex min-h-0 flex-col gap-y-8">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">Honors & Milestones</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>

          <div className="flex w-full flex-col gap-y-3 items-center justify-center">
            <h2 className="max-w-full text-center text-3xl font-bold tracking-tighter whitespace-normal sm:text-4xl">Milestones & Recognition</h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              Research publications, symposium presentations, and production software deliveries throughout my technical journey.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {DATA.achievements.map((achievement) => (
            <div
              key={achievement.title + achievement.dates}
              className="group relative flex flex-col justify-between rounded-xl border border-border/60 bg-card/60 p-6 shadow-xs backdrop-blur-xs transition-all duration-300 hover:border-border hover:bg-card/90 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex size-10 items-center justify-center rounded-lg border border-border/60 bg-background/80 shadow-2xs group-hover:scale-105 transition-transform">
                    {getIcon(achievement.sticker)}
                  </div>

                  {achievement.dates && (
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground">
                      <Calendar className="size-3" />
                      {achievement.dates}
                    </span>
                  )}
                </div>

                <h3 className="font-semibold text-base text-foreground group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>

                {achievement.location && (
                  <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground font-medium">
                    <MapPin className="size-3 shrink-0 text-muted-foreground/70" />
                    <span>{achievement.location}</span>
                  </p>
                )}

                {achievement.description && (
                  <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                )}
              </div>

              {achievement.links && achievement.links.length > 0 && (
                <div className="mt-5 pt-4 border-t border-border/40 flex flex-wrap gap-2">
                  {achievement.links.map((link, linkIdx) => (
                    <Link
                      key={linkIdx}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background/80 px-3 py-1.5 text-xs font-medium text-foreground transition-all hover:bg-accent hover:text-accent-foreground"
                    >
                      <span>{link.title}</span>
                      <ArrowUpRight className="size-3 text-muted-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}