"use client";

import { FadeIn, StaggeredFadeIn } from "@/components/ui/scroll-reveal";
import { ArrowUpRight } from "lucide-react";
import { ACCENTS, type AccentKey } from "@/lib/accent-colors";

interface Hackathon {
  year: string;
  event: string;
  achievement: string;
  description: string;
  technologies: string[];
  accent: AccentKey;
}

// accent is assigned by outcome tier, not by rotation — it's a legend:
// amber = finalist-tier, violet = numeric/competitive ranking, teal = top-N placement
const hackathons: Hackathon[] = [
  {
    year: "Feb 2026",
    event: "NEST 2.0 by Novartis India",
    achievement: "Semi-Finalist",
    description: "Built a follow-up calling agent for drug evaluation.",
    technologies: ["Gemini 2.5 Flash", "Twilio", "LangChain"],
    accent: "teal",
  },
  {
    year: "Jan 2026",
    event: "AI Builders Challenge",
    achievement: "Top 60 Finalist",
    description: "Built an LLM cost & quality optimizer, organized by Portkey.",
    technologies: ["Portkey", "LLM Pricing"],
    accent: "amber",
  },
  {
    year: "Dec 2025",
    event: "Agentathon '25",
    achievement: "Finalist",
    description: "Built a fintech agentic AI solution, organized by Google Developer Groups.",
    technologies: ["FinTech", "Agentic AI"],
    accent: "amber",
  },
  {
    year: "Jul 2025",
    event: "DeepDive 1.0",
    achievement: "Top 50 Finalist",
    description: "Developed a financial copilot among 1,600+ participants.",
    technologies: ["FinTech", "AI"],
    accent: "amber",
  },
  {
    year: "Dec 2024",
    event: "TCS CodeVita Season 12",
    achievement: "Rank 3,430",
    description: "Placed out of 4.5 lakh+ participants.",
    technologies: ["C++"],
    accent: "violet",
  },
  {
    year: "Oct 2024",
    event: "NASA Space Apps Challenge",
    achievement: "Regional Finalist",
    description: "Worked on Landsat data optimization.",
    technologies: ["Python", "Apache Kafka", "TensorFlow", "GCP"],
    accent: "amber",
  },
  {
    year: "Aug 2024",
    event: "Genzverse",
    achievement: "Finalist",
    description: "Built a real-world health-tech solution, organized by Genzeon.",
    technologies: ["NestJS", "PostgreSQL", "Python", "GitLab CI"],
    accent: "amber",
  },
  {
    year: "May 2024",
    event: "GSSoC",
    achievement: "Rank #317",
    description: "Placed out of 27,000+ participants with 3 merged PRs.",
    technologies: ["Open Source", "Backend"],
    accent: "violet",
  },
  {
    year: "Jan 2024",
    event: "PEC Hacks",
    achievement: "Top 50",
    description: "Placed among 5,000+ teams for a legal-tech platform.",
    technologies: ["LegalTech"],
    accent: "teal",
  },
];

const stats = [
  { value: "10+", label: "hackathons" },
  { value: "4", label: "finalist wins" },
  { value: "27K+", label: "competitors beat" },
];

export default function HackathonsSection() {
  return (
    <section id="hackathons" className="relative z-10 overflow-hidden px-6 py-24 lg:px-[72px]">
      <div className="container mx-auto max-w-4xl">
        <FadeIn>
          <div className="mb-10 max-w-xl">
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-[rgb(var(--color-text-muted))]">
              // achievements.log
            </span>
            <h2 className="mb-5 text-4xl font-bold tracking-tight text-white lg:text-5xl">
              Hackathons &amp; Achievements
            </h2>
            <p className="text-lg leading-relaxed text-[rgb(var(--color-text-secondary))]">
              Nine competitions, reverse-chronological — the wins and the near-misses both count.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="mb-12 flex flex-wrap gap-2">
            {stats.map((stat) => (
              <span
                key={stat.label}
                className="rounded-md border px-3 py-1.5 font-mono text-xs text-[rgb(var(--color-text-secondary))]"
                style={{ borderColor: "rgb(var(--color-border-hairline))" }}
              >
                <span className="font-semibold text-white">{stat.value}</span> {stat.label}
              </span>
            ))}
          </div>
        </FadeIn>

        <StaggeredFadeIn staggerDelay={60}>
          <div className="border-t border-[rgb(var(--color-border-hairline))]">
            {hackathons.map((h, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col gap-3 border-b border-[rgb(var(--color-border-hairline))] py-5 pl-4 transition-colors hover:bg-white/[0.02] sm:flex-row sm:items-start sm:gap-6"
              >
                {/* accent rail, appears on hover */}
                <span
                  className="absolute bottom-0 left-0 top-0 w-[2px] scale-y-0 transition-transform duration-300 group-hover:scale-y-100"
                  style={{ backgroundColor: ACCENTS[h.accent] }}
                />

                <span className="w-24 flex-shrink-0 font-mono text-xs uppercase tracking-wide text-[rgb(var(--color-text-muted))]">
                  {h.year}
                </span>

                <div className="flex-1">
                  <div className="mb-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3 className="text-lg font-semibold text-white">{h.event}</h3>
                    <span
                      className="rounded-md px-2 py-0.5 font-mono text-[11px]"
                      style={{
                        backgroundColor: `${ACCENTS[h.accent]}14`,
                        color: ACCENTS[h.accent],
                      }}
                    >
                      {h.achievement}
                    </span>
                  </div>
                  <p className="mb-2.5 text-sm leading-relaxed text-[rgb(var(--color-text-secondary))]">
                    {h.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {h.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] text-[rgb(var(--color-text-muted))]"
                      >
                        {tech}
                        {tech !== h.technologies[h.technologies.length - 1] && (
                          <span className="ml-1.5 text-[rgb(var(--color-border-hairline))]">·</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </StaggeredFadeIn>

        <FadeIn delay={300}>
          <div className="mt-12 text-center">
            <a
              href="https://medium.com/@nagarajneelam"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-xl border px-6 py-3.5 text-[rgb(var(--color-text-secondary))] transition-colors hover:text-white"
              style={{ borderColor: "rgb(var(--color-border-hairline))" }}
            >
              <span className="font-mono text-sm">how I approach problems</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}