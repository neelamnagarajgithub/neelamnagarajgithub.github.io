import { FadeIn, StaggeredFadeIn } from "@/components/ui/scroll-reveal";
import { BackgroundGrid } from "@/components/ui/background-effects";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function HackathonsSection() {
  const hackathons = [
    {
      year: "July 2025",
      event: "DeepDive 1.0",
      achievement: "Top 50 Finalist",
      description: "Featured as a Top 50 Finalist at DeepDive 1.0, among 1600+ participants for Developing Financial Copilot.",
      technologies: ["FinTech", "AI", "Collaboration"],
      accent: "mint"
    },
    {
      year: "December 2024",
      event: "TCS Codevita Season 12",
      achievement: "Global Rank 3430",
      description: "Ranked 3430 out of 4.5 Lakh+ Participants in TCS Codevita 2024.",
      technologies: ["C++"],
      accent: "mint"
    },
    {
      year: "October,2024",
      event: "NASA Space Apps Challenge",
      achievement: "Regional Finalist",
      description: "Selected as a Regional Finalist at the NASA Space Apps Challenge 2024 for Landsat data optimization.",
      technologies: ["Python", "Apache Kafka", "TensorFlow", "GCP"],
      accent: "mint"
    },
    {
      year: "August,2024",
      event: "Genzverse",
      achievement: "Finalist",
      description: "Finalist at the Genzverse 2024 organized by Genzeon for building a real-world health tech solution.",
      technologies: ["Nestjs", "Postgresql", "python", "GitLab CI"],
      accent: "lavender"
    },
    {
      year: "May, 2024",
      event: "GSSoC",
      achievement: "Rank #317",
      description: "Ranked #317 out of 27,000+ in GSSoC 2024 with three merged PRs and two backend contributions.",
      technologies: ["Open Source", "Backend", "PRs"],
      accent: "lavender"
    },
    {
      year: "Jan,2024",
      event: "PEC Hacks",
      achievement: "Top 50",
      description: "Secured a Top 50 position at PEC Hacks 2024 among 5,000+ teams for developing a legal tech platform.",
      technologies: ["LegalTech", "Teamwork"],
      accent: "peach"
    },
  ];

  const stats = [
    { value: "8+", label: "Hackathons Participated" },
    { value: "3", label: "Awards Won" },
    { value: "5", label: "Finals" },
    { value: "72hrs", label: "Avg. Build Time" }
  ];

  return (
    <section id="hackathons" className="py-28 px-6 lg:px-[72px] relative z-10 bg-[rgb(var(--color-bg-primary))]">
      <BackgroundGrid />
      <div className="container mx-auto">
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
              Hackathons & Open Source
            </h2>
            <p className="text-lg text-[rgb(var(--color-text-secondary))] max-w-2xl mx-auto leading-relaxed">
              Real-world challenges, rapid prototyping, and teamwork—here’s how I thrive under pressure.
            </p>
          </div>
        </FadeIn>

        {/* Stats Row */}
        <FadeIn delay={150}>
          <div className="mb-16 flex flex-wrap justify-center gap-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center bg-[rgb(var(--color-bg-elevated))] border border-[rgb(var(--color-border-hairline))] rounded-xl px-8 py-6 min-w-[160px] shadow transition-all"
              >
                <span className="text-3xl lg:text-4xl font-bold text-[rgb(var(--color-accent-mint))] mb-2">
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
        <StaggeredFadeIn staggerDelay={120}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hackathons.map((hackathon, idx) => (
              <Card
                key={idx}
                className={`flex flex-col h-full overflow-hidden border-[rgb(var(--color-border-hairline))] bg-[rgb(var(--color-bg-elevated))] hover:shadow-[var(--shadow-glow-${hackathon.accent})] transition-all duration-250 group`}
              >
                {/* Header */}
                <div className={`flex items-center gap-4 p-5 border-b border-[rgb(var(--color-border-hairline))] bg-[rgb(var(--color-accent-${hackathon.accent}))]/10`}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold ${
                    hackathon.accent === 'mint' ? 'bg-[rgb(var(--color-accent-mint))]/20 text-[rgb(var(--color-accent-mint))]' :
                    hackathon.accent === 'lavender' ? 'bg-[rgb(var(--color-accent-lavender))]/20 text-[rgb(var(--color-accent-lavender))]' :
                    'bg-[rgb(var(--color-accent-peach))]/20 text-[rgb(var(--color-accent-peach))]'
                  }`}>
                    {idx === 0 ? '🏆' : idx === 1 ? '🥈' : idx === 2 ? '🎯' : idx === 3 ? '💡' : idx === 4 ? '⚖️' : '🚀'}
                  </div>
                  <div>
                    <div className="text-base font-semibold text-white">{hackathon.event}</div>
                    <div className={`text-sm font-semibold ${
                      hackathon.accent === 'mint' ? 'text-[rgb(var(--color-accent-mint))]' :
                      hackathon.accent === 'lavender' ? 'text-[rgb(var(--color-accent-lavender))]' :
                      'text-[rgb(var(--color-accent-peach))]'
                    }`}>
                      {hackathon.achievement}
                    </div>
                  </div>
                  <span className="ml-auto text-xs px-3 py-1 rounded-full bg-[rgb(var(--color-bg-primary))] border border-[rgb(var(--color-border-hairline))] text-[rgb(var(--color-text-secondary))]">
                    {hackathon.year}
                  </span>
                </div>
                {/* Body */}
                <div className="flex flex-col flex-1 p-6">
                  <p className="text-[rgb(var(--color-text-secondary))] text-sm leading-relaxed mb-4 flex-grow">
                    {hackathon.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hackathon.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-2 py-0.5 text-xs bg-[rgb(var(--color-bg-primary))] text-[rgb(var(--color-text-secondary))] rounded-full border border-[rgb(var(--color-border-hairline))]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className={`flex items-center justify-end text-sm text-[rgb(var(--color-accent-${hackathon.accent}))] opacity-0 group-hover:opacity-100 transition-opacity`}>
                    <span className="mr-2">View details</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </StaggeredFadeIn>

        {/* CTA */}
        <FadeIn delay={400}>
          <div className="mt-20 pt-8 text-center">
            <p className="text-lg text-[rgb(var(--color-text-secondary))] max-w-2xl mx-auto mb-4">
              Interested in my approach to problem-solving under pressure?
            </p>
            <a
              href="https://github.com/neelamnagarajgithub"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-white hover:text-[rgb(var(--color-accent-mint))] transition-colors"
            >
              <span className="mr-2">View code samples</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}