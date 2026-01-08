import { FadeIn, StaggeredFadeIn } from "@/components/ui/scroll-reveal";
import { Card } from "@/components/ui/card";
import { Trophy, Award, Target, Zap, ArrowUpRight } from "lucide-react";

export default function HackathonsSection() {
  const hackathons = [
    {
      year: "December 2025",
      event: "Agentathon",
      achievement: "Finalist",
      description: "Finalist at the Agentathon 2025 organized by Google Developer Groups for building a Fintech Agentic AI solution",
      technologies: ["FinTech", "AI", "Collaboration"],
      accent: "lavender",
      icon: Trophy,
    },
    {
      year: "July 2025",
      event: "DeepDive 1.0",
      achievement: "Top 50 Finalist",
      description: "Featured as a Top 50 Finalist at DeepDive 1.0, among 1600+ participants for Developing Financial Copilot.",
      technologies: ["FinTech", "AI", "Collaboration"],
      accent: "mint",
      icon: Award,
    },
    {
      year: "December 2024",
      event: "TCS Codevita Season 12",
      achievement: "Global Rank 3430",
      description: "Ranked 3430 out of 4.5 Lakh+ Participants in TCS Codevita 2024.",
      technologies: ["C++"],
      accent: "mint",
      icon: Target,
    },
    {
      year: "October 2024",
      event: "NASA Space Apps Challenge",
      achievement: "Regional Finalist",
      description: "Selected as a Regional Finalist at the NASA Space Apps Challenge 2024 for Landsat data optimization.",
      technologies: ["Python", "Apache Kafka", "TensorFlow", "GCP"],
      accent: "mint",
      icon: Trophy,
    },
    {
      year: "August 2024",
      event: "Genzverse",
      achievement: "Finalist",
      description: "Finalist at the Genzverse 2024 organized by Genzeon for building a real-world health tech solution.",
      technologies: ["NestJS", "PostgreSQL", "Python", "GitLab CI"],
      accent: "lavender",
      icon: Award,
    },
    {
      year: "May 2024",
      event: "GSSoC",
      achievement: "Rank #317",
      description: "Ranked #317 out of 27,000+ in GSSoC 2024 with three merged PRs and two backend contributions.",
      technologies: ["Open Source", "Backend", "PRs"],
      accent: "lavender",
      icon: Zap,
    },
    {
      year: "January 2024",
      event: "PEC Hacks",
      achievement: "Top 50",
      description: "Secured a Top 50 position at PEC Hacks 2024 among 5,000+ teams for developing a legal tech platform.",
      technologies: ["LegalTech", "Teamwork"],
      accent: "peach",
      icon: Target,
    },
  ];

  const stats = [
    { value: "9+", label: "Hackathons", accent: "mint" },
    { value: "4", label: "Finalist", accent: "lavender" },
    { value: "27K+", label: "Competitors Beat", accent: "peach" },
  ];

  return (
    <section id="hackathons" className="py-24 px-6 lg:px-[72px] relative z-10 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-16 text-center">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
              Hackathons & Achievements
            </h2>
            <p className="text-lg text-[rgb(var(--color-text-secondary))] max-w-2xl mx-auto leading-relaxed">
              Thriving under pressure, building innovative solutions, and competing with the best
            </p>
          </div>
        </FadeIn>

        {/* Stats Row */}
        <FadeIn delay={150}>
          <div className="mb-16 flex flex-wrap justify-center gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`relative overflow-hidden flex flex-col items-center bg-gradient-to-br from-[rgb(var(--color-bg-elevated))] to-[rgb(var(--color-bg-primary))] border rounded-2xl px-10 py-6 min-w-[180px] transition-all hover:scale-105 ${
                  stat.accent === "mint"
                    ? "border-[rgb(var(--color-accent-mint))]/30 hover:border-[rgb(var(--color-accent-mint))]/50 hover:shadow-[0_8px_32px_0_rgba(127,244,207,0.15)]"
                    : stat.accent === "lavender"
                    ? "border-[rgb(var(--color-accent-lavender))]/30 hover:border-[rgb(var(--color-accent-lavender))]/50 hover:shadow-[0_8px_32px_0_rgba(167,139,250,0.15)]"
                    : "border-[rgb(var(--color-accent-peach))]/30 hover:border-[rgb(var(--color-accent-peach))]/50 hover:shadow-[0_8px_32px_0_rgba(251,146,60,0.15)]"
                }`}
              >
                <div
                  className={`absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl opacity-20 ${
                    stat.accent === "mint"
                      ? "bg-[rgb(var(--color-accent-mint))]"
                      : stat.accent === "lavender"
                      ? "bg-[rgb(var(--color-accent-lavender))]"
                      : "bg-[rgb(var(--color-accent-peach))]"
                  }`}
                />
                <span
                  className={`text-4xl lg:text-5xl font-bold mb-2 ${
                    stat.accent === "mint"
                      ? "text-[rgb(var(--color-accent-mint))]"
                      : stat.accent === "lavender"
                      ? "text-[rgb(var(--color-accent-lavender))]"
                      : "text-[rgb(var(--color-accent-peach))]"
                  }`}
                >
                  {stat.value}
                </span>
                <span className="text-sm text-[rgb(var(--color-text-secondary))] font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Hackathon Cards */}
        <StaggeredFadeIn staggerDelay={100}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hackathons.map((hackathon, idx) => {
              const Icon = hackathon.icon;
              return (
                <Card
                  key={idx}
                  className={`relative overflow-hidden border-[rgb(var(--color-border-hairline))] bg-gradient-to-br from-[rgb(var(--color-bg-elevated))] to-[rgb(var(--color-bg-primary))] transition-all duration-300 hover:scale-[1.03] group ${
                    hackathon.accent === "mint"
                      ? "hover:border-[rgb(var(--color-accent-mint))]/50 hover:shadow-[0_8px_32px_0_rgba(127,244,207,0.2)]"
                      : hackathon.accent === "lavender"
                      ? "hover:border-[rgb(var(--color-accent-lavender))]/50 hover:shadow-[0_8px_32px_0_rgba(167,139,250,0.2)]"
                      : "hover:border-[rgb(var(--color-accent-peach))]/50 hover:shadow-[0_8px_32px_0_rgba(251,146,60,0.2)]"
                  }`}
                >
                  {/* Gradient Blob */}
                  <div
                    className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-20 transition-opacity group-hover:opacity-30 ${
                      hackathon.accent === "mint"
                        ? "bg-[rgb(var(--color-accent-mint))]"
                        : hackathon.accent === "lavender"
                        ? "bg-[rgb(var(--color-accent-lavender))]"
                        : "bg-[rgb(var(--color-accent-peach))]"
                    }`}
                  />

                  <div className="p-6 relative z-10">
                    {/* Icon & Year */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          hackathon.accent === "mint"
                            ? "bg-[rgb(var(--color-accent-mint))]/10 text-[rgb(var(--color-accent-mint))]"
                            : hackathon.accent === "lavender"
                            ? "bg-[rgb(var(--color-accent-lavender))]/10 text-[rgb(var(--color-accent-lavender))]"
                            : "bg-[rgb(var(--color-accent-peach))]/10 text-[rgb(var(--color-accent-peach))]"
                        } group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs px-3 py-1 rounded-full bg-[rgb(var(--color-bg-primary))] border border-[rgb(var(--color-border-hairline))] text-[rgb(var(--color-text-secondary))]">
                        {hackathon.year}
                      </span>
                    </div>

                    {/* Event Name */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[rgb(var(--color-accent-mint))] transition-colors">
                      {hackathon.event}
                    </h3>

                    {/* Achievement Badge */}
                    <div
                      className={`inline-block px-3 py-1 rounded-lg text-xs font-semibold mb-4 ${
                        hackathon.accent === "mint"
                          ? "bg-[rgb(var(--color-accent-mint))]/10 text-[rgb(var(--color-accent-mint))] border border-[rgb(var(--color-accent-mint))]/20"
                          : hackathon.accent === "lavender"
                          ? "bg-[rgb(var(--color-accent-lavender))]/10 text-[rgb(var(--color-accent-lavender))] border border-[rgb(var(--color-accent-lavender))]/20"
                          : "bg-[rgb(var(--color-accent-peach))]/10 text-[rgb(var(--color-accent-peach))] border border-[rgb(var(--color-accent-peach))]/20"
                      }`}
                    >
                      {hackathon.achievement}
                    </div>

                    {/* Description */}
                    <p className="text-[rgb(var(--color-text-secondary))] text-sm leading-relaxed mb-4">
                      {hackathon.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {hackathon.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-2 py-1 text-xs bg-[rgb(var(--color-bg-primary))] text-[rgb(var(--color-text-secondary))] rounded-md border border-[rgb(var(--color-border-hairline))]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Accent Line */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity ${
                      hackathon.accent === "mint"
                        ? "bg-gradient-to-r from-transparent via-[rgb(var(--color-accent-mint))] to-transparent"
                        : hackathon.accent === "lavender"
                        ? "bg-gradient-to-r from-transparent via-[rgb(var(--color-accent-lavender))] to-transparent"
                        : "bg-gradient-to-r from-transparent via-[rgb(var(--color-accent-peach))] to-transparent"
                    }`}
                  />
                </Card>
              );
            })}
          </div>
        </StaggeredFadeIn>

        {/* CTA */}
        <FadeIn delay={400}>
          <div className="text-center mt-16">
            <a
              href="https://medium.com/@nagarajneelam"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[rgb(var(--color-bg-elevated))] text-white hover:text-[rgb(var(--color-accent-mint))] border border-[rgb(var(--color-border-hairline))] hover:border-[rgb(var(--color-accent-mint))]/50 transition-all group"
            >
              <span className="font-semibold">View My Problem-Solving Approach</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}