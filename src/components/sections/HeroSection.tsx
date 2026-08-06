import { FadeIn } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import InteractiveTerminal from "@/components/InteractiveTerminal";
import { SIGNAL } from "@/lib/accent-colors";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section className="relative z-10 px-6 pb-40 pt-19 lg:px-[72px]">
      <br/>
      <br/>
      <br/>
      <div className="container mx-auto">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <FadeIn delay={100}>
            <div className="max-w-[560px] space-y-7">
              <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-[rgb(var(--color-text-muted))]">
                <span
                  className="h-1.5 w-1.5 animate-pulse rounded-full"
                  style={{ backgroundColor: SIGNAL }}
                />
                status: building
              </span>

              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white lg:text-6xl">
                Backend systems that don&apos;t fall over at 2&nbsp;a.m.
              </h1>

              <p className="text-lg leading-relaxed text-[rgb(var(--color-text-secondary))]">
                I&apos;m Nagaraj Neelam — a Software engineer building scalable
                backends and AI-agent systems, four internships and a lot of
                production bugs into the craft.
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {["4 internships", "10+ Hackathons", "CS'26 Grad"].map((stat) => (
                  <span
                    key={stat}
                    className="rounded-md border px-2.5 py-1 font-mono text-[11px] tracking-wide text-[rgb(var(--color-text-secondary))]"
                    style={{ borderColor: "rgb(var(--color-border-hairline))" }}
                  >
                    {stat}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                <Button
                  onClick={() => scrollToSection("projects")}
                  className="text-black hover:opacity-90"
                  style={{ backgroundColor: SIGNAL }}
                >
                  View projects
                </Button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left text-[rgb(var(--color-text-secondary))] transition-colors hover:text-white"
                >
                  Get in touch →
                </button>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="flex items-center justify-center">
              <InteractiveTerminal />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}