import { FadeIn } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section className="relative pt-19 pb-40 px-6 lg:px-[72px] z-10">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn delay={100}>
            <div className="space-y-6 max-w-[540px]">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
                Crafting reliable software for ambitious products
              </h1>
              <p className="text-lg text-[rgb(var(--color-text-secondary))] leading-relaxed">
                I'm Nagaraj Neelam — a Sotfware developer turning complex challenges into scalable solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => scrollToSection('projects')} className="bg-[rgb(var(--color-accent-mint))] text-black hover:bg-[rgb(var(--color-accent-mint))]/90">
                  View projects
                </Button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-[rgb(var(--color-text-secondary))] hover:text-white transition-colors">
                  Get in touch →
                </button>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="relative flex items-center justify-center">
              <div className="w-[90%] max-w-[550px] aspect-[4/5] relative rounded-3xl overflow-hidden shadow-[var(--shadow-card)] border border-[rgb(var(--color-border-hairline))] bg-[rgb(var(--color-bg-elevated))] transform rotate-3 hover:rotate-1 transition-transform duration-500">
                <div className="absolute inset-4 bg-gradient-to-br from-[rgb(var(--color-accent-mint))]/20 to-[rgb(var(--color-accent-lavender))]/20 rounded-2xl overflow-hidden flex items-center justify-center">
                  <div className="w-[90%] h-[90%] rounded-2xl overflow-hidden">
                    <img
                      src="/nagaraj.jpg"
                      alt="Profile"
                      className="w-full h-full object-cover rounded-2xl"
                    />
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