import { useRef } from "react";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem, GlowOnHover } from "@/components/motion";
import { Code2, Database, Cloud, Zap, Shield, Globe } from "lucide-react";

export default function SkillsSection() {
  const skillLayers = [
    {
      title: "Application Layer",
      description: "Crafting the logic and flow of high-performance services.",
      icon: Code2,
      accent: "mint",
      skills: [
        { name: "Frameworks", items: ["Express.js", "NestJS", "Fastify", "FastAPI"] },
        { name: "Languages", items: ["JavaScript", "C++", "Java","Python"] },
        { name: "AI/ML", items: ["LangChain", "Langraph", "PyTorch", "RAG"] },
      ],
    },
    {
      title: "Persistence & Data",
      description: "Managing state and scale across diverse data models.",
      icon: Database,
      accent: "lavender",
      skills: [
        { name: "Relational", items: ["PostgreSQL", "MySQL", "Prisma"] },
        { name: "NoSQL", items: ["MongoDB", "Redis", "Elasticsearch"] },
        { name: "Blockchain", items: ["Solidity", "Hyperledger Fabric", "Ethers.js"] },
      ],
    },
    {
      title: "Infrastructure & Ops",
      description: "Deploying and scaling with cloud-native precision.",
      icon: Cloud,
      accent: "peach",
      skills: [
        { name: "Cloud", items: ["AWS", "Supabase", "Render"] },
        { name: "DevOps", items: ["Docker", "Kubernetes", "Gitlab CI", " Github"] },
        { name: "Security", items: ["JWT", "OAuth", "SSL/TLS"] },
      ],
    },
  ];

  return (
    <section id="skills" className="py-32 px-6 lg:px-[72px] relative z-10 overflow-hidden bg-[rgb(var(--color-bg-primary))]">
      <div className="container mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-24 text-center">
            <h2 className="text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              Tech Stack
            </h2>
            <p className="text-xl text-[rgb(var(--color-text-secondary))] max-w-3xl mx-auto font-light">
              A comprehensive view of my technical architecture capabilities across the full backend stack.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.2} className="grid grid-cols-1 gap-12">
          {skillLayers.map((layer, idx) => (
            <StaggerItem key={idx}>
              <div className="group relative">
                {/* Horizontal Divider with Label */}
                <div className="flex items-center gap-6 mb-12">
                  <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 ${layer.accent === "mint" ? "text-[rgb(var(--color-accent-mint))]" :
                      layer.accent === "lavender" ? "text-[rgb(var(--color-accent-lavender))]" : "text-[rgb(var(--color-accent-peach))]"
                    }`}>
                    <layer.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-bold text-white whitespace-nowrap">{layer.title}</h3>
                  <div className="h-px bg-white/10 flex-1" />
                  <p className="hidden md:block text-[rgb(var(--color-text-muted))] text-sm font-mono">{layer.description}</p>
                </div>

                {/* Skills Grid for this Layer */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {layer.skills.map((skillGroup, sIdx) => (
                    <motion.div
                      key={sIdx}
                      whileHover={{ y: -5 }}
                      className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
                    >
                      <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white/40 mb-6 font-mono">
                        {skillGroup.name}
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {skillGroup.items.map((item, i) => (
                          <div
                            key={i}
                            className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all duration-300 bg-white/5 border-white/5 hover:bg-white/10 ${layer.accent === "mint" ? "hover:border-[rgb(var(--color-accent-mint))]/40 hover:text-[rgb(var(--color-accent-mint))]" :
                                layer.accent === "lavender" ? "hover:border-[rgb(var(--color-accent-lavender))]/40 hover:text-[rgb(var(--color-accent-lavender))]" : "hover:border-[rgb(var(--color-accent-peach))]/40 hover:text-[rgb(var(--color-accent-peach))]"
                              }`}
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Global Infrastructure Stats */}
        
      </div>
    </section>
  );
}