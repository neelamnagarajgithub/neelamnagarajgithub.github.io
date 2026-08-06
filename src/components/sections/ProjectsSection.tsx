"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/scroll-reveal";
import { Github, ArrowUpRight, FileCode2 } from "lucide-react";
import { ACCENTS, SIGNAL, type AccentKey } from "@/lib/accent-colors";

interface Project {
  file: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  liveDemo: string;
  github: string;
  flagship: boolean;
  accent: AccentKey;
}

const projects: Project[] = [
  {
    file: "fintro.md",
    title: "F.I.N.T.R.O",
    category: "Agentic AI",
    description:
      "Autonomous AI CFO platform for real-time cash flow intelligence. 7 specialized LangGraph agents handle forecasting, anomaly detection, and scenario simulation over a 13-week horizon — a shared-state architecture lets them reason together instead of in isolation.",
    techStack: ["Next.js", "FastAPI", "LangGraph", "PostgreSQL", "Prisma", "Supabase"],
    liveDemo: "https://fintro.nagarajneelam.in",
    github: "https://github.com/neelamnagarajgithub/F.I.N.T.R.O",
    flagship: true,
    accent: "coral",
  },
  {
    file: "baax.md",
    title: "Baax",
    category: "Developer Tools",
    description:
      "A backend accelerator CLI that scaffolds production-ready projects in seconds. Supports Express, Fastify, and NestJS with MongoDB, PostgreSQL, or MySQL — built to kill the boilerplate between an idea and a running server.",
    techStack: ["Python", "Node.js", "CLI", "Docker", "FastAPI", "NestJS"],
    liveDemo: "https://baax.nagarajneelam.in",
    github: "https://github.com/BaaxCli/baax",
    flagship: false,
    accent: "teal",
  },
  {
    file: "vitavoice.md",
    title: "VitaVoice",
    category: "AI Healthcare",
    description:
      "A multilingual voice assistant for patient-to-AI-doctor conversations. Automatic EHR generation, real-time translation through Murf AI, and streaming audio so the exchange feels closer to a phone call than a chatbot.",
    techStack: ["Python", "Streamlit", "Murf AI", "Whisper STT", "MongoDB", "LangChain"],
    liveDemo: "https://vitavoice.streamlit.app",
    github: "https://github.com/neelamnagarajgithub/vitavoice",
    flagship: true,
    accent: "violet",
  },
  {
    file: "repurpoai.md",
    title: "RepurpoAI",
    category: "Pharmaceutical AI",
    description:
      "A drug-repurposing platform where 6 agents analyze clinical trials, literature, patents, and market intelligence in parallel to surface new therapeutic uses for molecules that already exist.",
    techStack: ["Next.js", "FastAPI", "Google ADK", "PostgreSQL", "Supabase", "WebSockets"],
    liveDemo: "https://repurpoai.vercel.app",
    github: "https://github.com/neelamnagarajgithub/RepurpoAi",
    flagship: true,
    accent: "amber",
  },
];

export default function ProjectsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = projects[activeIdx];

  return (
    <section id="projects" className="relative z-10 overflow-hidden px-6 py-24 lg:px-[72px]">
      <div className="container mx-auto max-w-5xl">
        <FadeIn>
          <div className="mb-14 max-w-xl">
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-[rgb(var(--color-text-muted))]">
              // ls ~/projects
            </span>
            <h2 className="mb-5 text-4xl font-bold tracking-tight text-white lg:text-5xl">
              Projects
            </h2>
            <p className="text-lg leading-relaxed text-[rgb(var(--color-text-secondary))]">
              A few things I built end-to-end. Pick one to read more.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
            {/* file list */}
            <div>
              <div className="mb-3 flex items-center gap-2 font-mono text-xs text-[rgb(var(--color-text-muted))]">
                <FileCode2 className="h-3.5 w-3.5" />
                projects/
              </div>
              <div className="flex gap-1 overflow-x-auto lg:flex-col lg:overflow-visible">
                {projects.map((p, idx) => {
                  const isActive = idx === activeIdx;
                  return (
                    <button
                      key={p.file}
                      onClick={() => setActiveIdx(idx)}
                      className="group flex flex-shrink-0 items-center gap-3 whitespace-nowrap rounded-lg px-3 py-2.5 text-left transition-colors lg:whitespace-normal"
                      style={{
                        backgroundColor: isActive ? `${ACCENTS[p.accent]}12` : "transparent",
                      }}
                    >
                      <span
                        className="h-full w-[2px] self-stretch rounded-full lg:h-5"
                        style={{
                          backgroundColor: isActive ? ACCENTS[p.accent] : "transparent",
                        }}
                      />
                      <span
                        className="font-mono text-sm transition-colors"
                        style={{
                          color: isActive ? "white" : "rgb(var(--color-text-muted))",
                        }}
                      >
                        {p.file}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* detail pane */}
            <div key={active.file} className="min-w-0">
              <div
                className="mb-5 h-[2px] w-12 rounded-full"
                style={{ backgroundColor: ACCENTS[active.accent] }}
              />

              <div className="mb-2 flex flex-wrap items-center gap-3">
                <span
                  className="font-mono text-xs tracking-wide"
                  style={{ color: ACCENTS[active.accent] }}
                >
                  {active.category}
                </span>
                {active.flagship && (
                  <span className="flex items-center gap-1.5 font-mono text-xs text-[rgb(var(--color-text-muted))]">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: SIGNAL }} />
                    flagship
                  </span>
                )}
              </div>

              <h3 className="mb-4 text-3xl font-bold text-white lg:text-4xl">{active.title}</h3>

              <p className="mb-7 max-w-2xl text-base leading-relaxed text-[rgb(var(--color-text-secondary))]">
                {active.description}
              </p>

              <div className="mb-8 flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-[rgb(var(--color-text-muted))]">
                {active.techStack.map((tech, i) => (
                  <span key={tech}>
                    {tech}
                    {i !== active.techStack.length - 1 && (
                      <span className="ml-4 text-[rgb(var(--color-border-hairline))]">/</span>
                    )}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <a
                  href={active.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
                  style={{ backgroundColor: SIGNAL }}
                >
                  Launch project
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href={active.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[rgb(var(--color-text-secondary))] transition-colors hover:text-white"
                >
                  <Github className="h-4 w-4" />
                  Source
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="mt-16 border-t pt-8 text-center" style={{ borderColor: "rgb(var(--color-border-hairline))" }}>
            <a
              href="https://github.com/neelamnagarajgithub"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 font-mono text-sm text-[rgb(var(--color-text-secondary))] transition-colors hover:text-white"
            >
              more on github
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}