import { ScrollReveal, FadeIn } from "@/components/ui/scroll-reveal";
import { Check } from "lucide-react";

export default function SkillsSection() {
  const skills = [
    {
      category: "Programming Languages",
      items: ["C", "C++", "Java", "JavaScript"]
    },
    {
      category: "Frameworks & Databases",
      items: ["React.js", "Node.js", "Express.js", "NestJS", "PostgreSQL", "MongoDB", "Redis", "LangChain"]
    },
    {
      category: "Blockchain",
      items: ["Solidity", "Hyperledger Fabric", "Ethers.js", "Remix", "Ganache", "Truffle", "Hardhat"]
    },
    {
      category: "Tools",
      items: ["Postman", "Stripe", "Twilio", "Prisma", "Jest", "Render", "Docker", "Git", "GitHub"]
    },
    // {
    //   category: "Other",
    //   items: [
    //     "Micro-services & Domain-Driven Design",
    //     "Cloud-native deployments (AWS, Docker, k8s)",
    //     "Performance monitoring & observability"
    //   ]
    // }
  ];

  return (
    <section id="skills" className="py-24 px-6 lg:px-[72px] relative z-10">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-12 text-right tracking-tight">
            My Skills
          </h2>
            <div className="space-y-8">
               
              <div className="space-y-8">
                {skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="font-semibold text-[rgb(var(--color-accent-lavender))] mb-2 text-lg">
                      {skill.category}
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {skill.items.map((item, i) => (
                        <ScrollReveal key={i} delay={100 + (i * 50)}>
                          <div className="flex items-center space-x-2 bg-[rgb(var(--color-bg-elevated))] border border-[rgb(var(--color-border-hairline))] rounded-full px-4 py-1">
                            <Check className="w-4 h-4 text-[rgb(var(--color-accent-lavender))]" />
                            <span className="text-[rgb(var(--color-text-secondary))] text-base">{item}</span>
                          </div>
                        </ScrollReveal>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="relative">
              <div className="aspect-video bg-[rgb(var(--color-bg-elevated))] rounded-2xl border border-[rgb(var(--color-border-hairline))] p-6 transform rotate-2 hover:rotate-1 transition-transform">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-[rgb(var(--color-text-muted))]">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span>main.go</span>
                  </div>
                  <div className="space-y-2 text-sm font-mono">
                    <div className="text-[rgb(var(--color-accent-lavender))]">package main</div>
                    <div className="text-[rgb(var(--color-text-secondary))]">
                      <span className="text-[rgb(var(--color-accent-mint))]">func</span> main() {'{'}
                    </div>
                    <div className="pl-4 text-[rgb(var(--color-text-secondary))]">
                      server := NewServer()
                    </div>
                    <div className="pl-4 text-[rgb(var(--color-text-secondary))]">
                      server.Start(<span className="text-[rgb(var(--color-accent-peach))]">":8080"</span>)
                    </div>
                    <div className="text-[rgb(var(--color-text-secondary))]">{"}"}</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}