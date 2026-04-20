"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem, HoverScale } from "@/components/motion";
import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";
import { DotPattern } from "@/components/ui/background-effects";

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

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
    },
  ];

  return (
    <section id="experience" className="py-32 px-6 lg:px-[72px] relative z-10 overflow-hidden bg-[rgb(var(--color-bg-primary))]">
      {/* Background decoration */}
      <DotPattern className="opacity-20" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <FadeIn>
          <div className="mb-24 text-center">
            <h2 className="text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[rgb(var(--color-accent-mint))] via-[rgb(var(--color-accent-lavender))] to-[rgb(var(--color-accent-peach))] mx-auto mb-8 rounded-full" />
            <p className="text-xl text-[rgb(var(--color-text-secondary))] max-w-2xl mx-auto font-light">
              Designing scalable backend systems and robust healthcare solutions for modern products.
            </p>
          </div>
        </FadeIn>

        <div ref={containerRef} className="relative">
          {/* Vertical Beam */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] bg-[rgb(var(--color-border-hairline))] hidden md:block">
            <motion.div
              style={{ scaleY, transformOrigin: "top" }}
              className="absolute inset-0 bg-gradient-to-b from-[rgb(var(--color-accent-mint))] via-[rgb(var(--color-accent-lavender))] to-[rgb(var(--color-accent-peach))] shadow-[0_0_15px_rgba(var(--color-accent-mint),0.5)]"
            />
          </div>

          <StaggerContainer staggerDelay={0.3} className="space-y-24 md:space-y-32">
            {experiences.map((exp, idx) => (
              <StaggerItem key={exp.id}>
                <div className={`relative flex flex-col md:flex-row items-center gap-12 ${
                  idx % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}>
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20 hidden md:block">
                    <motion.div
                      whileInView={{ scale: [0, 1.2, 1] }}
                      viewport={{ once: true }}
                      className={`w-6 h-6 rounded-full border-4 bg-[rgb(var(--color-bg-primary))] ${
                        exp.accent === "mint"
                          ? "border-[rgb(var(--color-accent-mint))]"
                          : exp.accent === "lavender"
                          ? "border-[rgb(var(--color-accent-lavender))]"
                          : "border-[rgb(var(--color-accent-peach))]"
                      } shadow-[0_0_20px_rgba(var(--color-accent-${exp.accent}),0.4)]`}
                    />
                  </div>

                  {/* Date/Company Info (Visible/Desktop only for side content) */}
                  <div className={`flex-1 hidden md:flex flex-col ${
                    idx % 2 !== 0 ? "text-left pl-12" : "text-right pr-12"
                  }`}>
                    <span className={`text-sm font-bold uppercase tracking-widest mb-2 ${
                        exp.accent === "mint"
                          ? "text-[rgb(var(--color-accent-mint))]"
                          : exp.accent === "lavender"
                          ? "text-[rgb(var(--color-accent-lavender))]"
                          : "text-[rgb(var(--color-accent-peach))]"
                      }`}>
                      {exp.duration}
                    </span>
                    <h3 className="text-3xl font-bold text-white mb-2">{exp.company}</h3>
                    <div className="flex items-center gap-2 text-[rgb(var(--color-text-muted))] justify-end">
                      {idx % 2 === 0 && <MapPin className="w-4 h-4" />}
                      <span>{exp.location}</span>
                      {idx % 2 !== 0 && <MapPin className="w-4 h-4" />}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex-1 md:w-1/2">
                    <HoverScale scale={1.02}>
                      <Card className={`group relative overflow-hidden border-[rgb(var(--color-border-hairline))] bg-white/[0.03] backdrop-blur-xl p-8 lg:p-10 transition-all duration-500 hover:bg-white/[0.06] ${
                        exp.accent === "mint"
                          ? "hover:border-[rgb(var(--color-accent-mint))]/40"
                          : exp.accent === "lavender"
                          ? "hover:border-[rgb(var(--color-accent-lavender))]/40"
                          : "hover:border-[rgb(var(--color-accent-peach))]/40"
                      }`}>
                        {/* Mobile Header */}
                        <div className="md:hidden mb-6">
                           <span className={`text-xs font-bold uppercase tracking-widest mb-2 block ${
                              exp.accent === "mint"
                                ? "text-[rgb(var(--color-accent-mint))]"
                                : exp.accent === "lavender"
                                ? "text-[rgb(var(--color-accent-lavender))]"
                                : "text-[rgb(var(--color-accent-peach))]"
                            }`}>
                            {exp.duration}
                          </span>
                          <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                        </div>

                        <div className="flex items-center gap-3 mb-6">
                          <div className={`p-3 rounded-xl bg-white/5 ${
                              exp.accent === "mint"
                                ? "text-[rgb(var(--color-accent-mint))]"
                                : exp.accent === "lavender"
                                ? "text-[rgb(var(--color-accent-lavender))]"
                                : "text-[rgb(var(--color-accent-peach))]"
                            }`}>
                            <Briefcase className="w-6 h-6" />
                          </div>
                          <h4 className="text-xl lg:text-2xl font-bold text-white tracking-tight">
                            {exp.role}
                          </h4>
                        </div>

                        <p className="text-[rgb(var(--color-text-secondary))] mb-8 leading-relaxed text-lg font-light">
                          {exp.description}
                        </p>

                        <div className="space-y-4">
                          {exp.points.map((point, pIdx) => (
                            <div key={pIdx} className="flex items-start gap-4 group/point">
                               <div className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-300 group-hover/point:scale-150 ${
                                exp.accent === "mint"
                                  ? "bg-[rgb(var(--color-accent-mint))]"
                                  : exp.accent === "lavender"
                                  ? "bg-[rgb(var(--color-accent-lavender))]"
                                  : "bg-[rgb(var(--color-accent-peach))]"
                              }`} />
                              <p className="text-[rgb(var(--color-text-primary))] text-base leading-relaxed opacity-80 group-hover/point:opacity-100 transition-opacity">
                                {point}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Interactive Corner Accent */}
                        <div className={`absolute top-0 right-0 w-24 h-24 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 ${
                            exp.accent === "mint"
                              ? "bg-[rgb(var(--color-accent-mint))]"
                              : exp.accent === "lavender"
                              ? "bg-[rgb(var(--color-accent-lavender))]"
                              : "bg-[rgb(var(--color-accent-peach))]"
                          }`} />
                      </Card>
                    </HoverScale>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}