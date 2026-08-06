"use client";

import { FadeIn, StaggerContainer, StaggerItem, HoverScale } from "@/components/motion";
import { Card } from "@/components/ui/card";
import { MapPin, GitCommit } from "lucide-react";
import { DotPattern } from "@/components/ui/background-effects";

type Accent = "mint" | "lavender" | "peach";

// Static class lookups — Tailwind can't resolve template-literal class names
// at build time, so every accent gets its own fully-written class set.
const accentStyles: Record<
  Accent,
  { text: string; border: string; bg: string; borderHover: string; ring: string }
> = {
  mint: {
    text: "text-[rgb(var(--color-accent-mint))]",
    border: "border-[rgb(var(--color-accent-mint))]",
    bg: "bg-[rgb(var(--color-accent-mint))]",
    borderHover: "hover:border-[rgb(var(--color-accent-mint))]/40",
    ring: "shadow-[0_0_0_3px_rgba(var(--color-accent-mint),0.15)]",
  },
  lavender: {
    text: "text-[rgb(var(--color-accent-lavender))]",
    border: "border-[rgb(var(--color-accent-lavender))]",
    bg: "bg-[rgb(var(--color-accent-lavender))]",
    borderHover: "hover:border-[rgb(var(--color-accent-lavender))]/40",
    ring: "shadow-[0_0_0_3px_rgba(var(--color-accent-lavender),0.15)]",
  },
  peach: {
    text: "text-[rgb(var(--color-accent-peach))]",
    border: "border-[rgb(var(--color-accent-peach))]",
    bg: "bg-[rgb(var(--color-accent-peach))]",
    borderHover: "hover:border-[rgb(var(--color-accent-peach))]/40",
    ring: "shadow-[0_0_0_3px_rgba(var(--color-accent-peach),0.15)]",
  },
};

interface Experience {
  id: number;
  hash: string; // short commit-style id — purely a visual motif tying the
  // timeline to a backend engineer's actual tool (git log), not decoration.
  role: string;
  company: string;
  location: string;
  duration: string;
  stack: string[];
  points: string[];
  accent: Accent;
}

const experiences: Experience[] = [
  {
    id: 1,
    hash: "f3a91c2",
    role: "Intern – Delivery",
    company: "Virtusa Consulting Services Pvt. Ltd",
    location: "Hyderabad, India",
    duration: "Mar 2026 – May 2026",
    stack: ["FastAPI", "Next.js", "LLM Pipelines", "Supabase"],
    points: [
      "Built a full-stack market intelligence platform (FastAPI + Next.js) with a 7-stage async pipeline aggregating data from 9+ external source families — news, financial, social, GitHub, and security — into LLM-synthesized, citation-backed PDF reports.",
      "Built a multi-layered prompt safety system for risk-scoring and injection detection, plus a 4-tier database fallback (Supabase → Postgres → SQLite) that improved resilience during LLM and external API failures.",
    ],
    accent: "mint",
  },
  {
    id: 2,
    hash: "9e21d47",
    role: "Backend Developer Intern",
    company: "Secure Blink Tech Private Limited",
    location: "Remote",
    duration: "Sep 2025 – Nov 2025",
    stack: ["AWS", "Serverless", "SDK Migration"],
    points: [
      "Managed a large distributed, multi-tiered serverless backend with 50+ microservices; diagnosed and resolved 12+ production issues and contributed to the AWS SDK v2 → v3 migration for improved compatibility and maintainability.",
      "Designed and developed business logic for AWS Marketplace integration, working through broadly-defined specifications to deliver the end-to-end integration flow in collaboration with cross-functional teams.",
    ],
    accent: "lavender",
  },
  {
    id: 3,
    hash: "6b0f8a5",
    role: "Research Intern",
    company: "National Institute of Technology Warangal",
    location: "Warangal, India",
    duration: "May 2025 – Jul 2025",
    stack: ["IPFS", "Hyperledger Fabric", "HL7 FHIR", "AI OCR"],
    points: [
      "Designed MediLocker, an AI-powered decentralized health locker built on a distributed storage architecture; standardized health records into HL7 FHIR-compliant EHRs aligned with ISO 13606, HIPAA, and GDPR.",
      "Implemented distributed storage using IPFS, DID-based authentication, Hyperledger Fabric, and an AI-powered OCR pipeline to improve secure storage, interoperability, and auditability of electronic health records.",
    ],
    accent: "peach",
  },
  {
    id: 4,
    hash: "2c74e19",
    role: "Backend Developer Intern",
    company: "Vitacure Healthcare Private Limited",
    location: "Hyderabad, India",
    duration: "Apr 2025 – Jul 2025",
    stack: ["Node.js", "Express.js", "PostgreSQL"],
    points: [
      "Designed and developed REST APIs for an intelligent caregiver booking system inspired by ride-hailing platforms, matching patients with nearby caregivers based on location, availability, and service requirements.",
      "Built backend modules for caregiver discovery, booking assignment, and booking state management using Node.js, Express.js, and PostgreSQL, with secure authentication and role-based authorization.",
    ],
    accent: "mint",
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-32 px-6 lg:px-[72px] relative z-10 overflow-hidden bg-[rgb(var(--color-bg-primary))]"
    >
      <DotPattern className="opacity-20" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <FadeIn>
          <div className="mb-20">
            <div className="flex items-center gap-2 font-mono text-sm text-[rgb(var(--color-text-muted))] mb-5">
              <span className="text-[rgb(var(--color-accent-mint))]">~</span>
              <span>/career --log --reverse</span>
              <span className="inline-block w-[7px] h-[15px] bg-[rgb(var(--color-accent-mint))]/70 animate-pulse" />
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-white tracking-tight mb-5">
              Experience
            </h2>
            <p className="text-lg text-[rgb(var(--color-text-secondary))] max-w-xl font-light leading-relaxed">
              Four internships, one thread — backend systems built to hold up under
              real data, real users, and real failure modes.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.15} className="relative">
          {/* Timeline spine */}
          <div className="absolute left-[7px] top-3 bottom-3 w-px bg-[rgb(var(--color-border-hairline))]" />

          <div>
            {experiences.map((exp, idx) => {
              const styles = accentStyles[exp.accent];
              const isLast = idx === experiences.length - 1;

              return (
                <StaggerItem key={exp.id}>
                  <div className={`relative pl-10 sm:pl-12 ${isLast ? "" : "pb-14"}`}>
                    {/* Node */}
                    <div
                      className={`absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 bg-[rgb(var(--color-bg-primary))] z-10 ${styles.border}`}
                    />

                    {/* Commit-style meta row */}
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3 font-mono text-xs">
                      <span className={`inline-flex items-center gap-1.5 ${styles.text}`}>
                        <GitCommit className="w-3.5 h-3.5" />
                        {exp.hash}
                      </span>
                      <span className="text-[rgb(var(--color-text-muted))]">
                        {exp.duration}
                      </span>
                      {idx === 0 && (
                        <span
                          className={`px-2 py-0.5 rounded-full border text-[10px] uppercase tracking-widest ${styles.border} ${styles.text}`}
                        >
                          Most recent
                        </span>
                      )}
                    </div>

                    <HoverScale scale={1.01}>
                      <Card
                        className={`group relative overflow-hidden border-[rgb(var(--color-border-hairline))] bg-white/[0.03] backdrop-blur-xl p-7 lg:p-8 transition-all duration-500 hover:bg-white/[0.05] ${styles.borderHover}`}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                          <h3 className="text-xl lg:text-2xl font-bold text-white tracking-tight">
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-1.5 text-sm text-[rgb(var(--color-text-muted))] shrink-0">
                            <MapPin className="w-3.5 h-3.5" />
                            {exp.location}
                          </div>
                        </div>
                        <p className={`text-base font-medium mb-5 ${styles.text}`}>
                          {exp.company}
                        </p>

                        <div className="space-y-3 mb-6">
                          {exp.points.map((point, pIdx) => (
                            <div key={pIdx} className="flex items-start gap-3">
                              <span
                                className={`font-mono text-sm mt-0.5 select-none ${styles.text}`}
                              >
                                ›
                              </span>
                              <p className="text-[rgb(var(--color-text-primary))]/80 text-[15px] leading-relaxed">
                                {point}
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {exp.stack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 text-[rgb(var(--color-text-secondary))] border border-[rgb(var(--color-border-hairline))]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div
                          className={`absolute top-0 right-0 w-24 h-24 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 ${styles.bg}`}
                        />
                      </Card>
                    </HoverScale>
                  </div>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}