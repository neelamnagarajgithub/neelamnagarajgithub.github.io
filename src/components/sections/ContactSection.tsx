import { FadeIn } from "@/components/ui/scroll-reveal";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";
import { RadialGradient } from "@/components/ui/background-effects";

interface ContactSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export default function ContactSection({ scrollToSection }: ContactSectionProps) {
  return (
    <section id="contact" className="py-24 px-6 lg:px-[72px] relative z-10">
      <RadialGradient position="top-left" color="mint" opacity={0.04} />
      <div className="container mx-auto">
        <div className="space-y-8">
          <FadeIn>
            <Card className="p-8 lg:p-12 bg-[rgb(var(--color-bg-elevated))] border-[rgb(var(--color-border-hairline))] hover:shadow-[var(--shadow-glow-mint)] transition-all duration-250">
              <div className="space-y-6 text-center">
                <h2 className="text-3xl lg:text-5xl font-bold text-white">
                  Let's build something remarkable
                </h2>
                <p className="text-lg text-[rgb(var(--color-text-secondary))] max-w-2xl mx-auto">
                  Ready to turn your backend challenges into scalable solutions? Let's discuss your project.
                </p>
                <Button onClick={() => scrollToSection('contact-form')} className="bg-[rgb(var(--color-accent-mint))] text-black hover:bg-[rgb(var(--color-accent-mint))]/90">
                  Send a message <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          </FadeIn>

          <FadeIn delay={200}>
            <Card id="contact-form" className="p-8 lg:p-12 bg-[rgb(var(--color-bg-elevated))] border-[rgb(var(--color-border-hairline))]">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input placeholder="Your name" className="bg-transparent border-[rgb(var(--color-border-hairline))] focus:border-[rgb(var(--color-accent-mint))] focus:ring-[rgb(var(--color-accent-mint))]/20" />
                  <Input placeholder="Your email" type="email" className="bg-transparent border-[rgb(var(--color-border-hairline))] focus:border-[rgb(var(--color-accent-mint))] focus:ring-[rgb(var(--color-accent-mint))]/20" />
                </div>
                <Textarea placeholder="Your message" rows={6} className="bg-transparent border-[rgb(var(--color-border-hairline))] focus:border-[rgb(var(--color-accent-mint))] focus:ring-[rgb(var(--color-accent-mint))]/20" />
                <Button type="submit" className="bg-[rgb(var(--color-accent-mint))] text-black hover:bg-[rgb(var(--color-accent-mint))]/90">
                  Send Message
                </Button>
              </form>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}