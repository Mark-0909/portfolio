"use client";

import { useState } from "react";
import { motion } from "motion/react";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

const CATEGORIES = ["All", "Web", "Software", "Game Dev"] as const;
type Category = (typeof CATEGORIES)[number];

export default function ProjectsSection() {
    const [selectedCategory, setSelectedCategory] = useState<Category>("All");

    const filteredProjects = DATA.projects.filter((project) => {
        if (selectedCategory === "All") return true;
        return project.category === selectedCategory;
    });

    const getCategoryCount = (cat: Category) => {
        if (cat === "All") return DATA.projects.length;
        return DATA.projects.filter((p) => p.category === cat).length;
    };

    return (
        <section id="projects">
            <div className="flex min-h-0 flex-col gap-y-8">
                <div className="flex flex-col gap-y-4 items-center justify-center">
                    <div className="flex items-center w-full">
                        <div
                            className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent"
                        />
                        <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                            <span className="text-background text-sm font-medium">My Projects</span>
                        </div>
                        <div
                            className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent"
                        />
                    </div>
                    <div className="flex flex-col gap-y-3 items-center justify-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Check out my latest work</h2>
                        <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
                            I&apos;ve worked on a variety of projects, from web applications and desktop software to game development. Here are a few of my favorites.
                        </p>
                    </div>
                </div>

                {/* Category Filter Tabs */}
                <div className="flex flex-wrap items-center justify-center gap-2">
                    {CATEGORIES.map((cat) => {
                        const count = getCategoryCount(cat);
                        const isActive = selectedCategory === cat;

                        return (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`relative px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 focus-visible:outline-hidden cursor-pointer ${
                                    isActive
                                        ? "text-primary-foreground font-semibold"
                                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                }`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="activeProjectCategory"
                                        className="absolute inset-0 bg-primary rounded-full -z-10"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10 flex items-center gap-1.5">
                                    {cat}
                                    <span
                                        className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                                            isActive
                                                ? "bg-primary-foreground/20 text-primary-foreground font-bold"
                                                : "bg-muted text-muted-foreground font-medium"
                                        }`}
                                    >
                                        {count}
                                    </span>
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-200 mx-auto auto-rows-fr">
                    {filteredProjects.map((project, id) => (
                        <BlurFade
                            key={`${selectedCategory}-${project.title}`}
                            delay={BLUR_FADE_DELAY * 4 + id * 0.05}
                            className="h-full"
                        >
                            <ProjectCard
                                href={project.href}
                                title={project.title}
                                description={project.description}
                                dates={project.dates}
                                tags={project.technologies}
                                image={project.image}
                                video={project.video}
                                links={project.links}
                            />
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
}


