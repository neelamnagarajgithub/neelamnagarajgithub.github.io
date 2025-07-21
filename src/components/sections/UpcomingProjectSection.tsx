"use client";

import { useState } from "react";
import { FadeIn, StaggeredFadeIn } from "@/components/ui/scroll-reveal";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronRight } from "lucide-react";

export default function UpcomingProjectsSection() {
    const up_projects = [
        {
            id: 1,
            title: "DevVerse",
            description: "DevVerse is a tokenized project marketplace for developers, enabling them to showcase, monetize, and collaborate on projects with integrated smart contracts and decentralized validation.Bringing Recognition to Hardwork of Dev's",
            techStack: ["Nextjs", "Express", "Solidity", "Etherjs", "Python"],
            liveDemo: "https://devverse.nagarajneelam.me",
            github: "https://github.com/neelamnagarajgithub/DevVerse",
            category: "GenAI &Blockchain",
            accent: "mint"
        },
    ];


    return (
        <section id="projects" className="py-24 px-6 lg:px-[72px] relative z-10">
            <div className="container mx-auto">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                            Upcoming Projects
                        </h2>
                        <p className="text-lg text-[rgb(var(--color-text-secondary))] max-w-2xl mx-auto leading-relaxed">
                            Empowering the future with secure, intelligent technology.
                        </p>
                    </div>
                </FadeIn>

                <StaggeredFadeIn staggerDelay={150}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {up_projects.map((project) => (
                            <Card
                                key={project.id}
                                className={`h-full overflow-hidden border-[rgb(var(--color-border-hairline))] hover:shadow-[var(--shadow-glow-${project.accent})] transition-all duration-250 group bg-[rgb(var(--color-bg-elevated))]`}
                            >
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${project.accent === 'mint' ? 'bg-[rgb(var(--color-accent-mint))]/20 text-[rgb(var(--color-accent-mint))]' :
                                            project.accent === 'lavender' ? 'bg-[rgb(var(--color-accent-lavender))]/20 text-[rgb(var(--color-accent-lavender))]' :
                                                'bg-[rgb(var(--color-accent-peach))]/20 text-[rgb(var(--color-accent-peach))]'
                                            }`}>
                                            {project.category}
                                        </span>
                                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-1 hover:text-[rgb(var(--color-accent-mint))] transition-colors"
                                            >
                                                <Github className="h-4 w-4" />
                                            </a>
                                            <a
                                                href={project.liveDemo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-1 hover:text-[rgb(var(--color-accent-mint))] transition-colors"
                                            >
                                                <ExternalLink className="h-4 w-4" />
                                            </a>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[rgb(var(--color-accent-mint))] transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-[rgb(var(--color-text-secondary))] text-sm leading-relaxed mb-6">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-xs px-2 py-1 bg-[rgb(var(--color-bg-primary))] text-[rgb(var(--color-text-secondary))] rounded-full border border-[rgb(var(--color-border-hairline))]"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-3 w-full">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center px-3 py-2 rounded-md border border-[rgb(var(--color-border-hairline))] text-[rgb(var(--color-text-secondary))] hover:text-white hover:border-[rgb(var(--color-accent-mint))] transition-colors"
                                        >
                                            <Github className="w-4 h-4 mr-2" />
                                            Code
                                        </a>
                                        <a
                                            href={project.liveDemo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center px-3 py-2 rounded-md bg-[rgb(var(--color-accent-mint))] text-black hover:bg-[rgb(var(--color-accent-mint))]/90 transition-colors"
                                        >
                                            Live Demo
                                            <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </StaggeredFadeIn>


                <FadeIn delay={600}>
                    <div className="text-center mt-16">
                        <a
                            href="https://github.com/neelamnagarajgithub"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 rounded-md bg-[rgb(var(--color-bg-elevated))] text-white hover:text-[rgb(var(--color-accent-mint))] border border-[rgb(var(--color-border-hairline))] hover:border-[rgb(var(--color-accent-mint))] transition-all"
                        >
                            View All Projects
                            <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}