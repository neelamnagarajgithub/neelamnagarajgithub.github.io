import { FadeIn, StaggeredFadeIn } from "@/components/ui/scroll-reveal";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Nagaraj delivered a rock-solid API architecture that scaled seamlessly from 1K to 100K+ users. His attention to performance optimization is unmatched.",
      author: "Sarah Chen",
      position: "CTO, TechFlow",
      avatar: "SC"
    },
    {
      quote: "Working with Nagaraj was a game-changer. His microservices approach reduced our deployment time by 70% and eliminated our scaling bottlenecks.",
      author: "Marcus Rodriguez",
      position: "Lead Developer, DataVault",
      avatar: "MR"
    },
    {
      quote: "The backend infrastructure Nagaraj built has been running flawlessly for 2+ years. His code quality and documentation standards are exceptional.",
      author: "Emily Watson",
      position: "Product Manager, CloudSync",
      avatar: "EW"
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-6 lg:px-[72px] relative z-10">
      <div className="container mx-auto text-center">
        <FadeIn>
          <div className="space-y-8">
            <div className="relative">
              <StaggeredFadeIn staggerDelay={50}>
                <div className="grid grid-cols-6 md:grid-cols-12 gap-4 opacity-20">
                  {Array.from({ length: 12 }).map((_, idx) => (
                    <div key={idx} className="aspect-square bg-[rgb(var(--color-bg-elevated))] rounded-xl border border-[rgb(var(--color-border-hairline))]"></div>
                  ))}
                </div>
              </StaggeredFadeIn>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[rgb(var(--color-accent-mint))]/20 to-[rgb(var(--color-accent-mint))]/40 flex items-center justify-center shadow-[var(--shadow-glow-mint)]">
                  <Quote className="w-8 h-8 text-[rgb(var(--color-accent-mint))]" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold text-white">
                Clients say it best
              </h2>
              <p className="text-lg text-[rgb(var(--color-text-secondary))] max-w-2xl mx-auto leading-relaxed">
                Feedback from teams I've partnered with.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Testimonial Cards */}
        <div className="mt-16">
          <StaggeredFadeIn staggerDelay={200}>
            <div className="grid md::grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {testimonials.map((testimonial, idx) => (
                <Card key={idx} className="p-6 bg-[rgb(var(--color-bg-elevated))] border-[rgb(var(--color-border-hairline))] text-left hover:shadow-[var(--shadow-glow-lavender)] transition-all duration-250">
                  <div className="space-y-4">
                    <Quote className="w-8 h-8 text-[rgb(var(--color-accent-lavender))]/60" />
                    <p className="text-[rgb(var(--color-text-secondary))] leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[rgb(var(--color-accent-mint))]/20 to-[rgb(var(--color-accent-lavender))]/20 flex items-center justify-center text-sm font-semibold text-white">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-white text-sm">{testimonial.author}</div>
                        <div className="text-[rgb(var(--color-text-muted))] text-sm">{testimonial.position}</div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </StaggeredFadeIn>
        </div>
      </div>
    </section>
  );
}