"use client";

import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin, Twitter, Mail } from "lucide-react";
import MobileMenu from "./MobileMenu";

interface NavigationProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  scrollToSection: (sectionId: string) => void;
}

export default function Navigation({ mobileMenuOpen, setMobileMenuOpen, scrollToSection }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-black/80 backdrop-blur-md border-b border-[rgb(var(--color-border-hairline))]">
      <div className="container mx-auto px-6 lg:px-[72px] h-full flex items-center justify-between">
        <div className="text-xl font-bold text-white">Nagaraj Neelam</div>

        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('about')} className="text-sm text-[rgb(var(--color-text-secondary))] hover:text-white transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection('experience')} className="text-sm text-[rgb(var(--color-text-secondary))] hover:text-white transition-colors">
            Experience
          </button>
          <button onClick={() => scrollToSection('skills')} className="text-sm text-[rgb(var(--color-text-secondary))] hover:text-white transition-colors">
            Skills
          </button>
          <button onClick={() => scrollToSection('projects')} className="text-sm text-[rgb(var(--color-text-secondary))] hover:text-white transition-colors">
            Projects
          </button>
          <button onClick={() => scrollToSection('hackathons')} className="text-sm text-[rgb(var(--color-text-secondary))] hover:text-white transition-colors">
            Hackathons
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-sm text-[rgb(var(--color-text-secondary))] hover:text-white transition-colors">
            Contact
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="/Nagaraj_Neelam_Resume.pdf"
            
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="hidden sm:flex bg-[rgb(var(--color-accent-mint))] text-black hover:bg-[rgb(var(--color-accent-mint))]/90 h-9 px-4 text-sm font-medium">
              View CV
            </Button>
          </a>

          {/* Social Icons */}
          <div className="hidden lg:flex items-center space-x-3 ml-2">
            <a
              href="https://github.com/neelamnagarajgithub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[rgb(var(--color-text-secondary))] hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/nagarajneelam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[rgb(var(--color-text-secondary))] hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/neelamnaga25670"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[rgb(var(--color-text-secondary))] hover:text-white transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="mailto:neelamnagaraj99@gmail.com"
              className="text-[rgb(var(--color-text-secondary))] hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[rgb(var(--color-text-secondary))] hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <MobileMenu scrollToSection={scrollToSection} />
      )}
    </nav>
  );
}