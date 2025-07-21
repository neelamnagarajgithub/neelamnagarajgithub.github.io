"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
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
        <div className="text-xl font-bold text-white">Nagaraj.</div>

        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('about')} className="text-sm text-[rgb(var(--color-text-secondary))] hover:text-white transition-colors">
            About
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
          <Button className="hidden sm:flex bg-[rgb(var(--color-accent-mint))] text-black hover:bg-[rgb(var(--color-accent-mint))]/90 h-9 px-4 text-sm font-medium">
            Download CV
          </Button>

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