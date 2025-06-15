"use client";

import { useState } from "react";
import { LinearBackground } from "@/components/ui/background-effects";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import HackathonsSection from "@/components/sections/HackathonsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Background Effects */}
      <LinearBackground variant="hero" />

      {/* Navigation */}
      <Navigation 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
        scrollToSection={scrollToSection} 
      />

      {/* Main Content Sections */}
      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <HackathonsSection />
      <ContactSection scrollToSection={scrollToSection} />
      <Footer scrollToSection={scrollToSection} />
    </>
  );
}