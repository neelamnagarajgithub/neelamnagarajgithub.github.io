"use client";

import { FadeIn } from "@/components/ui/scroll-reveal";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function ExperienceSection() {
const experiences = [
    {
        id: 1,
        role: "Research Intern",
        company: "National Institute of Technology ,Warangal",
        duration: "May 2025 - July 2025",
        description:
            "Built scalable backend APIs with FastAPI and integrated IPFS, DID, and Hyperledger Fabric for secure, decentralized health record management.",
        points: [
            "Developed MediLocker, an AI-powered decentralized health locker storing user records in a Standard EHR format compliant with global and Indian healthcare standards.",
            "Integrated IPFS storage, DID authentication, and Hyperledger Fabric, boosting data privacy, security, and traceability by 95%.",
            "Built an AI OCR pipeline achieving 90% accuracy to digitize medical records into structured, interoperable EHR data.",
        ],
    },
    {
        id: 2,
        role: "Open Source Contributor",
        company: "GirlScript Summer of Code",
        duration: "Jan 2023 - Present",
        description:
            "Contributed to open-source AI projects, focusing on improving NLP models and documentation.",
        points: [
            "Enhanced BERT-based NLP models for better sentiment analysis.",
            "Authored and improved technical documentation for contributors.",
            "Reviewed and merged 20+ community pull requests.",
        ],
    },
];

  return (
    <section id="experience" className="py-24 px-6 lg:px-[72px] relative z-10">
      <div className="container mx-auto">
        <FadeIn>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-12 text-center tracking-tight">
            Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {experiences.map((exp) => (
              <Card
                key={exp.id}
                className="bg-gradient-to-br from-[rgb(var(--color-bg-elevated))] to-[rgb(var(--color-bg-primary))] border-[rgb(var(--color-accent-mint))]/30 border rounded-2xl shadow-lg p-8 hover:shadow-[0_8px_32px_0_rgba(127,244,207,0.15)] transition-shadow duration-300"
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                  <span className="text-xs px-3 py-1 rounded-full bg-[rgb(var(--color-accent-mint))]/20 text-[rgb(var(--color-accent-mint))] font-medium">
                    {exp.company}
                  </span>
                </div>
                <div className="text-xs text-[rgb(var(--color-text-secondary))] mb-4">
                  {exp.duration}
                </div>
                <p className="text-[rgb(var(--color-text-secondary))] text-sm mb-4">
                  {exp.description}
                </p>
                <ul className="space-y-2 pl-1">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[rgb(var(--color-accent-mint))] mt-0.5" />
                      <span className="text-[rgb(var(--color-text-primary))] text-sm">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}