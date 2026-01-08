"use client";

import { FadeIn, StaggeredFadeIn } from "@/components/ui/scroll-reveal";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github, ArrowUpRight, Sparkles } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "F.I.N.T.R.O",
      description: "Autonomous AI CFO platform providing real-time cash flow intelligence, proactive risk warnings, and actionable recommendations. Features multi-agent architecture for forecasting, anomaly detection, and scenario simulation.",
      techStack: ["Next.js", "FastAPI", "LangGraph", "PostgreSQL", "Prisma", "Supabase"],
      liveDemo: "https://fintro.nagarajneelam.me",
      github: "https://github.com/neelamnagarajgithub/F.I.N.T.R.O",
      category: "Agentic AI",
      accent: "peach",
      featured: true,
    },
    {
      id: 2,
      title: "Baax",
      description: "Blazing fast Backend accelerator CLI that scaffolds production-ready projects in seconds. Supports Express, Fastify, NestJS with multiple database options (MongoDB, PostgreSQL, MySQL). Eliminates boilerplate for instant development.",
      techStack: ["Python", "Node.js", "CLI", "Docker", "FastAPI", "NestJS"],
      liveDemo: "https://baax.nagarajneelam.me",
      github: "https://github.com/BaaxCli/baax",
      category: "Developer Tools",
      accent: "mint",
      featured: false,
    },
    {
      id: 3,
      title: "VitaVoice",
      description: "AI-powered healthcare assistant enabling seamless, multilingual voice and text conversations between patients and an AI doctor. Features automatic EHR generation, real-time translation with Murf AI, and streaming audio for natural interactions.",
      techStack: ["Python", "Streamlit", "Murf AI", "Whisper STT", "MongoDB", "LangChain"],
      liveDemo: "https://vitavoice.streamlit.app",
      github: "https://github.com/neelamnagarajgithub/vitavoice",
      category: "AI Healthcare",
      accent: "mint",
      featured: true,
    },
    {
      id: 4,
      title: "RepurpoAI",
      description: "AI-powered drug repurposing platform leveraging multi-agent architecture to identify new therapeutic applications for existing molecules. Analyzes clinical trials, literature, patents, safety profiles, and market intelligence autonomously.",
      techStack: ["Next.js", "FastAPI", "Google ADK", "PostgreSQL", "Supabase", "WebSockets"],
      liveDemo: "https://repurpoai.vercel.app",
      github: "https://github.com/neelamnagarajgithub/RepurpoAi",
      category: "Pharmaceutical AI",
      accent: "lavender",
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 lg:px-[72px] relative z-10 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgb(var(--color-accent-mint))]/10 border border-[rgb(var(--color-accent-mint))]/20 mb-6">
              <Sparkles className="w-4 h-4 text-[rgb(var(--color-accent-mint))]" />
              <span className="text-sm font-medium text-[rgb(var(--color-accent-mint))]">Featured Work</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Featured Projects
            </h2>
            <p className="text-lg text-[rgb(var(--color-text-secondary))] max-w-2xl mx-auto leading-relaxed">
              Building innovative AI-powered solutions that solve real-world problems through cutting-edge technology
            </p>
          </div>
        </FadeIn>

        <StaggeredFadeIn staggerDelay={150}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <Card
                key={project.id}
                className={`relative overflow-hidden border-[rgb(var(--color-border-hairline))] bg-gradient-to-br from-[rgb(var(--color-bg-elevated))] to-[rgb(var(--color-bg-primary))] transition-all duration-300 hover:scale-[1.02] group ${
                  project.accent === "mint"
                    ? "hover:border-[rgb(var(--color-accent-mint))]/50 hover:shadow-[0_8px_32px_0_rgba(127,244,207,0.2)]"
                    : project.accent === "lavender"
                    ? "hover:border-[rgb(var(--color-accent-lavender))]/50 hover:shadow-[0_8px_32px_0_rgba(167,139,250,0.2)]"
                    : "hover:border-[rgb(var(--color-accent-peach))]/50 hover:shadow-[0_8px_32px_0_rgba(251,146,60,0.2)]"
                }`}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${
                      project.accent === "mint"
                        ? "bg-[rgb(var(--color-accent-mint))]/20 text-[rgb(var(--color-accent-mint))] border border-[rgb(var(--color-accent-mint))]/30"
                        : project.accent === "lavender"
                        ? "bg-[rgb(var(--color-accent-lavender))]/20 text-[rgb(var(--color-accent-lavender))] border border-[rgb(var(--color-accent-lavender))]/30"
                        : "bg-[rgb(var(--color-accent-peach))]/20 text-[rgb(var(--color-accent-peach))] border border-[rgb(var(--color-accent-peach))]/30"
                    }`}>
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </div>
                  </div>
                )}

                {/* Gradient Background Blob */}
                <div
                  className={`absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-20 transition-opacity group-hover:opacity-30 ${
                    project.accent === "mint"
                      ? "bg-[rgb(var(--color-accent-mint))]"
                      : project.accent === "lavender"
                      ? "bg-[rgb(var(--color-accent-lavender))]"
                      : "bg-[rgb(var(--color-accent-peach))]"
                  }`}
                />

                <div className="p-8 relative z-10">
                  {/* Category & Number */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`text-xs font-bold px-3 py-1.5 rounded-lg ${
                        project.accent === "mint"
                          ? "bg-[rgb(var(--color-accent-mint))]/10 text-[rgb(var(--color-accent-mint))]"
                          : project.accent === "lavender"
                          ? "bg-[rgb(var(--color-accent-lavender))]/10 text-[rgb(var(--color-accent-lavender))]"
                          : "bg-[rgb(var(--color-accent-peach))]/10 text-[rgb(var(--color-accent-peach))]"
                      }`}
                    >
                      {project.category}
                    </span>
                    <div className="text-6xl font-bold text-white/5 group-hover:text-white/10 transition-colors">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-[rgb(var(--color-accent-mint))] transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[rgb(var(--color-text-secondary))] text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.slice(0, 4).map((tech, i) => (
                      <span
                        key={tech}
                        className={`text-xs px-3 py-1.5 rounded-lg font-medium border transition-all ${
                          project.accent === "mint"
                            ? "bg-[rgb(var(--color-accent-mint))]/5 border-[rgb(var(--color-accent-mint))]/20 text-[rgb(var(--color-accent-mint))]"
                            : project.accent === "lavender"
                            ? "bg-[rgb(var(--color-accent-lavender))]/5 border-[rgb(var(--color-accent-lavender))]/20 text-[rgb(var(--color-accent-lavender))]"
                            : "bg-[rgb(var(--color-accent-peach))]/5 border-[rgb(var(--color-accent-peach))]/20 text-[rgb(var(--color-accent-peach))]"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-xs px-3 py-1.5 rounded-lg font-medium bg-[rgb(var(--color-bg-primary))] border border-[rgb(var(--color-border-hairline))] text-[rgb(var(--color-text-secondary))]">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm transition-all ${
                      project.accent === "mint"
                        ? "bg-[rgb(var(--color-accent-mint))] text-black hover:bg-[rgb(var(--color-accent-mint))]/90"
                        : project.accent === "lavender"
                        ? "bg-[rgb(var(--color-accent-lavender))] text-black hover:bg-[rgb(var(--color-accent-lavender))]/90"
                        : "bg-[rgb(var(--color-accent-peach))] text-black hover:bg-[rgb(var(--color-accent-peach))]/90"
                      }`}
                    >
                      View Live
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-3 rounded-xl border border-[rgb(var(--color-border-hairline))] text-[rgb(var(--color-text-secondary))] hover:text-white hover:border-[rgb(var(--color-accent-mint))]/50 transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-3 rounded-xl border border-[rgb(var(--color-border-hairline))] text-[rgb(var(--color-text-secondary))] hover:text-white hover:border-[rgb(var(--color-accent-mint))]/50 transition-all"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity ${
                    project.accent === "mint"
                      ? "bg-gradient-to-r from-transparent via-[rgb(var(--color-accent-mint))] to-transparent"
                      : project.accent === "lavender"
                      ? "bg-gradient-to-r from-transparent via-[rgb(var(--color-accent-lavender))] to-transparent"
                      : "bg-gradient-to-r from-transparent via-[rgb(var(--color-accent-peach))] to-transparent"
                  }`}
                />
              </Card>
            ))}
          </div>
        </StaggeredFadeIn>

        {/* View All Projects CTA */}
        <FadeIn delay={600}>
          <div className="text-center mt-16">
            <a
              href="https://github.com/neelamnagarajgithub"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[rgb(var(--color-bg-elevated))] text-white hover:text-[rgb(var(--color-accent-mint))] border border-[rgb(var(--color-border-hairline))] hover:border-[rgb(var(--color-accent-mint))]/50 transition-all group"
            >
              <Github className="w-5 h-5" />
              <span className="font-semibold">Explore More on GitHub</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}