import { FadeIn } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, Download } from "lucide-react";

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  return (
    <footer className="py-16 px-6 lg:px-[72px] border-t border-[rgb(var(--color-border-hairline))] relative z-10">
      <div className="container mx-auto">
        <FadeIn>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="text-xl font-bold text-white">N.</div>
              <p className="text-[rgb(var(--color-text-secondary))]">Backend Developer</p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-white">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('about')} className="block text-[rgb(var(--color-text-secondary))] hover:text-white transition-colors">About</button>
                <button onClick={() => scrollToSection('skills')} className="block text-[rgb(var(--color-text-secondary))] hover:text-white transition-colors">Skills</button>
                <button onClick={() => scrollToSection('projects')} className="block text-[rgb(var(--color-text-secondary))] hover:text-white transition-colors">Projects</button>
                <button onClick={() => scrollToSection('hackathons')} className="block text-[rgb(var(--color-text-secondary))] hover:text-white transition-colors">Hackathons</button>
                <button onClick={() => scrollToSection('contact')} className="block text-[rgb(var(--color-text-secondary))] hover:text-white transition-colors">Contact</button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-white">Connect</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/neelamnagarajgithub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-6 h-6 text-[rgb(var(--color-text-secondary))] hover:text-white cursor-pointer transition-colors" />
                </a>

                <a
                  href="https://linkedin.com/in/nagarajneelam"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-6 h-6 text-[rgb(var(--color-text-secondary))] hover:text-white cursor-pointer transition-colors" />
                </a>

                <a
                  href="https://x.com/neelamnaga25670"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="w-6 h-6 text-[rgb(var(--color-text-secondary))] hover:text-white cursor-pointer transition-colors" />
                </a>

                <a href="neelamnagaraj99@email.com">
                  <Mail className="w-6 h-6 text-[rgb(var(--color-text-secondary))] hover:text-white cursor-pointer transition-colors" />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <Button className="bg-[rgb(var(--color-accent-mint))] text-black hover:bg-[rgb(var(--color-accent-mint))]/90">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="mt-12 pt-8 border-t border-[rgb(var(--color-border-hairline))] text-center">
            <p className="text-sm text-[rgb(var(--color-text-muted))]">
              © 2024 Nagaraj. Crafted with Next.js.
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}