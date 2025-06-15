import { FadeIn, StaggeredFadeIn } from "@/components/ui/scroll-reveal";
import { Card } from "@/components/ui/card";
import { RadialGradient } from "@/components/ui/background-effects";
import { Code2, Database, Activity, ArrowRight } from "lucide-react";

export default function AboutSection() {
  const aboutCards = [
    {
      title: "Passion for clean architecture",
      description: "Building maintainable systems that stand the test of time and scale.",
      accent: "mint",
      icon: <Code2 className="w-6 h-6" />
    },
    {
      title: "Designing for scale & speed",
      description: "Optimizing performance from database queries to API responses.",
      accent: "lavender",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Collaborative & communicative",
      description: "Bridging technical complexity with clear business communication.",
      accent: "peach",
      icon: <Activity className="w-6 h-6" />
    }
  ];

  return (
    <section id="about" className="py-24 px-6 lg:px-[72px] relative z-10">
      <RadialGradient position="center" color="lavender" opacity={0.03} />
      <div className="container mx-auto">
        <FadeIn>
          <h2 className="text-3xl lg:text-5xl font-bold mb-16 text-center">Made for modern product teams</h2>
        </FadeIn>

        <StaggeredFadeIn staggerDelay={150}>
          <div className="grid md:grid-cols-3 gap-6">
            {aboutCards.map((card, idx) => (
              <Card key={idx} className="p-8 bg-[rgb(var(--color-bg-elevated))] border-[rgb(var(--color-border-hairline))] hover:shadow-[var(--shadow-glow-mint)] transition-all duration-250 group cursor-pointer">
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
                    card.accent === 'mint' ? 'from-[rgb(var(--color-accent-mint))]/20 to-[rgb(var(--color-accent-mint))]/40' :
                    card.accent === 'lavender' ? 'from-[rgb(var(--color-accent-lavender))]/20 to-[rgb(var(--color-accent-lavender))]/40' :
                    'from-[rgb(var(--color-accent-peach))]/20 to-[rgb(var(--color-accent-peach))]/40'
                  } flex items-center justify-center`}>
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                  <p className="text-[rgb(var(--color-text-secondary))] leading-relaxed">{card.description}</p>
                  <ArrowRight className="w-5 h-5 text-[rgb(var(--color-text-muted))] group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>
              </Card>
            ))}
          </div>
        </StaggeredFadeIn>
      </div>
    </section>
  );
}