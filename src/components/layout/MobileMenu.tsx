import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  scrollToSection: (sectionId: string) => void;
}

export default function MobileMenu({ scrollToSection }: MobileMenuProps) {
  return (
    <div className="md:hidden absolute top-16 left-0 right-0 bg-[rgb(var(--color-bg-elevated))]/95 backdrop-blur-md border-b border-[rgb(var(--color-border-hairline))]">
      <div className="px-6 py-4 space-y-4">
        <button onClick={() => scrollToSection('about')} className="block w-full text-left text-[rgb(var(--color-text-secondary))] hover:text-white transition-colors">
          About
        </button>
        <button onClick={() => scrollToSection('skills')} className="block w-full text-left text-[rgb(var(--color-text-secondary))] hover:text-white transition-colors">
          Skills
        </button>
        <button onClick={() => scrollToSection('projects')} className="block w-full text-left text-[rgb(var(--color-text-secondary))] hover:text-white transition-colors">
          Projects
        </button>
        <button onClick={() => scrollToSection('hackathons')} className="block w-full text-left text-[rgb(var(--color-text-secondary))] hover:text-white transition-colors">
          Hackathons
        </button>
        <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left text-[rgb(var(--color-text-secondary))] hover:text-white transition-colors">
          Testimonials
        </button>
        <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-[rgb(var(--color-text-secondary))] hover:text-white transition-colors">
          Contact
        </button>
        <Button className="w-full bg-[rgb(var(--color-accent-mint))] text-black hover:bg-[rgb(var(--color-accent-mint))]/90">
          Download CV
        </Button>
      </div>
    </div>
  );
}