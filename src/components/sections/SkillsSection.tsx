import { ScrollReveal, FadeIn, StaggeredFadeIn } from "@/components/ui/scroll-reveal";
import { Code2, Database, Blocks, Wrench } from "lucide-react";

export default function SkillsSection() {
  const skills = [
    {
      category: "Programming Languages",
      items: ["C", "C++", "Java", "JavaScript"],
      icon: Code2,
      accent: "mint",
    },
    {
      category: "Frameworks & Databases",
      items: ["React.js", "Node.js", "Express.js", "NestJS", "PostgreSQL", "MongoDB", "Redis", "LangChain"],
      icon: Database,
      accent: "lavender",
    },
    {
      category: "Blockchain",
      items: ["Solidity", "Hyperledger Fabric", "Ethers.js", "Remix", "Ganache", "Truffle", "Hardhat"],
      icon: Blocks,
      accent: "peach",
    },
    {
      category: "Tools",
      items: ["Postman", "Stripe", "Twilio", "Prisma", "Jest", "Render", "Docker", "Git", "GitHub"],
      icon: Wrench,
      accent: "mint",
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 lg:px-[72px] relative z-10 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-16 text-center">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
              Skills & Technologies
            </h2>
            <p className="text-lg text-[rgb(var(--color-text-secondary))] max-w-2xl mx-auto">
              A versatile toolkit for building robust, scalable solutions
            </p>
          </div>
        </FadeIn>

        <StaggeredFadeIn staggerDelay={150}>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {skills.map((skillGroup, idx) => {
              const Icon = skillGroup.icon;
              return (
                <div
                  key={idx}
                  className={`group relative overflow-hidden rounded-3xl border border-[rgb(var(--color-border-hairline))] bg-gradient-to-br from-[rgb(var(--color-bg-elevated))] to-[rgb(var(--color-bg-primary))] p-8 transition-all duration-300 hover:scale-[1.02] ${
                    skillGroup.accent === "mint"
                      ? "hover:border-[rgb(var(--color-accent-mint))]/50 hover:shadow-[0_8px_32px_0_rgba(127,244,207,0.15)]"
                      : skillGroup.accent === "lavender"
                      ? "hover:border-[rgb(var(--color-accent-lavender))]/50 hover:shadow-[0_8px_32px_0_rgba(167,139,250,0.15)]"
                      : "hover:border-[rgb(var(--color-accent-peach))]/50 hover:shadow-[0_8px_32px_0_rgba(251,146,60,0.15)]"
                  }`}
                >
                  {/* Background Gradient Blob */}
                  <div
                    className={`absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-20 transition-opacity group-hover:opacity-30 ${
                      skillGroup.accent === "mint"
                        ? "bg-[rgb(var(--color-accent-mint))]"
                        : skillGroup.accent === "lavender"
                        ? "bg-[rgb(var(--color-accent-lavender))]"
                        : "bg-[rgb(var(--color-accent-peach))]"
                    }`}
                  />

                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                        skillGroup.accent === "mint"
                          ? "bg-[rgb(var(--color-accent-mint))]/10 text-[rgb(var(--color-accent-mint))]"
                          : skillGroup.accent === "lavender"
                          ? "bg-[rgb(var(--color-accent-lavender))]/10 text-[rgb(var(--color-accent-lavender))]"
                          : "bg-[rgb(var(--color-accent-peach))]/10 text-[rgb(var(--color-accent-peach))]"
                      } transition-transform group-hover:scale-110`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {skillGroup.category}
                      </h3>
                      <span className="text-sm text-[rgb(var(--color-text-muted))]">
                        {skillGroup.items.length} technologies
                      </span>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {skillGroup.items.map((item, i) => (
                      <ScrollReveal key={i} delay={100 + i * 30}>
                        <div
                          className={`group/skill px-4 py-2 rounded-xl border transition-all duration-200 hover:scale-105 ${
                            skillGroup.accent === "mint"
                              ? "bg-[rgb(var(--color-accent-mint))]/5 border-[rgb(var(--color-accent-mint))]/20 hover:bg-[rgb(var(--color-accent-mint))]/10 hover:border-[rgb(var(--color-accent-mint))]/40"
                              : skillGroup.accent === "lavender"
                              ? "bg-[rgb(var(--color-accent-lavender))]/5 border-[rgb(var(--color-accent-lavender))]/20 hover:bg-[rgb(var(--color-accent-lavender))]/10 hover:border-[rgb(var(--color-accent-lavender))]/40"
                              : "bg-[rgb(var(--color-accent-peach))]/5 border-[rgb(var(--color-accent-peach))]/20 hover:bg-[rgb(var(--color-accent-peach))]/10 hover:border-[rgb(var(--color-accent-peach))]/40"
                          }`}
                        >
                          <span
                            className={`text-sm font-medium ${
                              skillGroup.accent === "mint"
                                ? "text-[rgb(var(--color-accent-mint))]"
                                : skillGroup.accent === "lavender"
                                ? "text-[rgb(var(--color-accent-lavender))]"
                                : "text-[rgb(var(--color-accent-peach))]"
                            } group-hover/skill:text-white transition-colors`}
                          >
                            {item}
                          </span>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>

                  {/* Decorative Corner Line */}
                  <div
                    className={`absolute bottom-0 left-0 w-32 h-1 ${
                      skillGroup.accent === "mint"
                        ? "bg-gradient-to-r from-[rgb(var(--color-accent-mint))] to-transparent"
                        : skillGroup.accent === "lavender"
                        ? "bg-gradient-to-r from-[rgb(var(--color-accent-lavender))] to-transparent"
                        : "bg-gradient-to-r from-[rgb(var(--color-accent-peach))] to-transparent"
                    } opacity-0 group-hover:opacity-100 transition-opacity`}
                  />
                </div>
              );
            })}
          </div>
        </StaggeredFadeIn>

        {/* Bottom Stats/Info */}
        <FadeIn delay={400}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-8 px-8 py-4 rounded-2xl bg-[rgb(var(--color-bg-elevated))] border border-[rgb(var(--color-border-hairline))]">
              <div className="text-center">
                <div className="text-3xl font-bold text-[rgb(var(--color-accent-mint))]">30+</div>
                <div className="text-sm text-[rgb(var(--color-text-secondary))]">Technologies</div>
              </div>
              <div className="w-px h-10 bg-[rgb(var(--color-border-hairline))]" />
              <div className="text-center">
                <div className="text-3xl font-bold text-[rgb(var(--color-accent-lavender))]">4</div>
                <div className="text-sm text-[rgb(var(--color-text-secondary))]">Categories</div>
              </div>
              <div className="w-px h-10 bg-[rgb(var(--color-border-hairline))]" />
              <div className="text-center">
                <div className="text-3xl font-bold text-[rgb(var(--color-accent-peach))]">∞</div>
                <div className="text-sm text-[rgb(var(--color-text-secondary))]">Always Learning</div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}