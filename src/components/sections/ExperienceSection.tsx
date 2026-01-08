"use client";

import { FadeIn, StaggeredFadeIn } from "@/components/ui/scroll-reveal";
import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      role: "Backend Developer Intern",
      company: "Secure Blink Tech Private Limited",
      location: "Remote",
      duration: "Sept 2025 - Nov 2025",
      description:
        "Worked on large-scale serverless architecture with AWS microservices, bug fixes, and SDK migration.",
      points: [
        "Worked on a large serverless backend with 50+ serverless microservices, fixing 12+ production bugs, and contributing to the AWS SDK v2 → v3 migration to improve compatibility and maintainability.",
        "Designed and developed backend functionality for AWS Marketplace integration, contributing to end-to-end integration flow and business logic.",
      ],
      accent: "mint",
      side: "left",
    },
    {
      id: 2,
      role: "Research Intern",
      company: "National Institute of Technology Warangal",
      location: "Warangal, India",
      duration: "May 2025 - July 2025",
      description:
        "Built MediLocker, an AI-powered decentralized health record management system with blockchain integration.",
      points: [
        "Designed and developed MediLocker, an AI-powered decentralized health locker used by 100+ users, standardizing medical records into HL7 FHIR–compliant EHRs aligned with ISO 13606, Indian EHR Guidelines, HIPAA, and GDPR.",
        "Implemented IPFS storage, DID-based authentication, Hyperledger Fabric, and an AI OCR pipeline, achieving 90% data extraction accuracy while improving data privacy, security, and auditability by 95%.",
      ],
      accent: "lavender",
      side: "right",
    },
    {
      id: 3,
      role: "Backend Developer Intern",
      company: "Vitacure Healthcare Private Limited",
      location: "Hyderabad, India",
      duration: "April 2025 - July 2025",
      description:
        "Engineered backend services for appointment booking and EHR-compliant healthcare data management.",
      points: [
        "Engineered and optimized backend services powering an appointment booking system handling patient records, improving overall system performance by 35% and highly reliable healthcare data processing workflows.",
        "Collaborated with doctors, labs, and developers to design and deploy EHR-compliant healthcare features implemented role-based access and encryption, reducing data breach risks by 40% and improving patient experience by 30%.",
      ],
      accent: "peach",
      side: "left",
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 lg:px-[72px] relative z-10 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <FadeIn>
          <div className="mb-20 text-center">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
              Experience
            </h2>
            <p className="text-lg text-[rgb(var(--color-text-secondary))] max-w-2xl mx-auto">
              Building scalable backend systems and healthcare solutions
            </p>
          </div>
        </FadeIn>

        <div className="relative">
          {/* Curved Path - SVG */}
          <svg
            className="absolute left-1/2 top-0 -translate-x-1/2 w-full h-full hidden lg:block"
            style={{ zIndex: 0 }}
          >
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgb(127, 244, 207)" stopOpacity="0.3" />
                <stop offset="50%" stopColor="rgb(167, 139, 250)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="rgb(251, 146, 60)" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path
              d="M 300 0 Q 200 150, 300 300 T 300 600 T 300 900"
              stroke="url(#pathGradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="8,8"
            />
          </svg>

          <StaggeredFadeIn staggerDelay={200}>
            <div className="space-y-24 lg:space-y-32">
              {experiences.map((exp, idx) => (
                <div
                  key={exp.id}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    exp.side === "right" ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="relative flex-shrink-0 z-10">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl border-4 text-black ${
                        exp.accent === "mint"
                          ? "bg-[rgb(var(--color-accent-mint))] border-[rgb(var(--color-accent-mint))]/30"
                          : exp.accent === "lavender"
                          ? "bg-[rgb(var(--color-accent-lavender))] border-[rgb(var(--color-accent-lavender))]/30"
                          : "bg-[rgb(var(--color-accent-peach))] border-[rgb(var(--color-accent-peach))]/30"
                      } shadow-lg`}
                    >
                      {idx + 1}
                    </div>
                    {/* Glow Effect */}
                    <div
                      className={`absolute inset-0 rounded-full blur-xl opacity-50 ${
                        exp.accent === "mint"
                          ? "bg-[rgb(var(--color-accent-mint))]"
                          : exp.accent === "lavender"
                          ? "bg-[rgb(var(--color-accent-lavender))]"
                          : "bg-[rgb(var(--color-accent-peach))]"
                      }`}
                    />
                  </div>

                  {/* Card */}
                  <Card
                    className={`flex-1 lg:max-w-[500px] relative overflow-hidden border-[rgb(var(--color-border-hairline))] bg-[rgb(var(--color-bg-elevated))] hover:shadow-xl transition-all duration-300 ${
                      exp.accent === "mint"
                        ? "hover:border-[rgb(var(--color-accent-mint))]/50 hover:shadow-[rgb(var(--color-accent-mint))]/20"
                        : exp.accent === "lavender"
                        ? "hover:border-[rgb(var(--color-accent-lavender))]/50 hover:shadow-[rgb(var(--color-accent-lavender))]/20"
                        : "hover:border-[rgb(var(--color-accent-peach))]/50 hover:shadow-[rgb(var(--color-accent-peach))]/20"
                    }`}
                  >
                    {/* Accent Corner */}
                    <div
                      className={`absolute top-0 right-0 w-32 h-32 opacity-10 ${
                        exp.accent === "mint"
                          ? "bg-[rgb(var(--color-accent-mint))]"
                          : exp.accent === "lavender"
                          ? "bg-[rgb(var(--color-accent-lavender))]"
                          : "bg-[rgb(var(--color-accent-peach))]"
                      }`}
                      style={{
                        clipPath: "polygon(100% 0, 0 0, 100% 100%)",
                      }}
                    />

                    <div className="p-6 lg:p-8 relative z-10">
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Briefcase
                            className={`w-5 h-5 ${
                              exp.accent === "mint"
                                ? "text-[rgb(var(--color-accent-mint))]"
                                : exp.accent === "lavender"
                                ? "text-[rgb(var(--color-accent-lavender))]"
                                : "text-[rgb(var(--color-accent-peach))]"
                            }`}
                          />
                          <h3 className="text-xl lg:text-2xl font-bold text-white">
                            {exp.role}
                          </h3>
                        </div>
                        <div className="text-lg font-semibold text-[rgb(var(--color-text-secondary))] mb-3">
                          {exp.company}
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-[rgb(var(--color-text-muted))]">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-[rgb(var(--color-text-secondary))] mb-4 leading-relaxed text-sm lg:text-base">
                        {exp.description}
                      </p>

                      {/* Key Points */}
                      <div className="space-y-3">
                        {exp.points.map((point, pointIdx) => (
                          <div
                            key={pointIdx}
                            className="flex items-start gap-3"
                          >
                            <div
                              className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${
                                exp.accent === "mint"
                                  ? "bg-[rgb(var(--color-accent-mint))]"
                                  : exp.accent === "lavender"
                                  ? "bg-[rgb(var(--color-accent-lavender))]"
                                  : "bg-[rgb(var(--color-accent-peach))]"
                              }`}
                            />
                            <p className="text-[rgb(var(--color-text-primary))] text-sm leading-relaxed">
                              {point}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </StaggeredFadeIn>
        </div>
      </div>
    </section>
  );
}