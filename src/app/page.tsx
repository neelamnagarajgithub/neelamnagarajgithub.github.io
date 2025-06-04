"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollReveal, FadeIn, StaggeredFadeIn } from "@/components/ui/scroll-reveal";
import { LinearBackground, RadialGradient, BackgroundGrid } from "@/components/ui/background-effects";
import {
  ArrowRight,
  Check,
  Code2,
  Database,
  Cloud,
  Activity,
  Quote,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Download,
  Menu,
  X
} from "lucide-react";

export default function Portfolio() {
  const [currentProject, setCurrentProject] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const projects = [
    {
      name: "FinTrack",
      description: "Real-time finance API",
      image: "/next.svg" // Using available asset as placeholder
    },
    {
      name: "FoodieHub",
      description: "Scalable delivery backend",
      image: "/vercel.svg"
    },
    {
      name: "HealthSync",
      description: "HIPAA-compliant data pipeline",
      image: "/file.svg"
    },
    {
      name: "DevDash",
      description: "Developer analytics platform",
      image: "/globe.svg"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false); // Close mobile menu after clicking a section
  };

  return (
    <>
      {/* Background Effects */}
      <LinearBackground variant="hero" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-black/80 backdrop-blur-md border-b border-[rgb(var(--color-border-hairline))]">
        <div className="container mx-auto px-6 lg:px-[72px] h-full flex items-center justify-between">
          <div className="text-xl font-bold text-white">N.</div>

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
            <button onClick={() => scrollToSection('testimonials')} className="text-sm text-[rgb(var(--color-text-secondary))] hover:text-white transition-colors">
              Testimonials
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
          <div className="md:hidden absolute top-16 left-0 right-0 bg-[rgb(var(--color-bg-elevated))]/95 backdrop-blur-md border-b border-[rgb(var(--color-border-hairline))]">
            <div className="px-6 py-4 space-y-4">
              <button onClick={() => { scrollToSection('about'); setMobileMenuOpen(false); }} className="block w-full text-left text-[rgb(var(--color-text-secondary))] hover:text-white transition-colors">
                About
              </button>
              <button onClick={() => { scrollToSection('skills'); setMobileMenuOpen(false); }} className="block w-full text-left text-[rgb(var(--color-text-secondary))] hover:text-white transition-colors">
                Skills
              </button>
              <button onClick={() => { scrollToSection('projects'); setMobileMenuOpen(false); }} className="block w-full text-left text-[rgb(var(--color-text-secondary))] hover:text-white transition-colors">
                Projects
              </button>
              <button onClick={() => { scrollToSection('hackathons'); setMobileMenuOpen(false); }} className="block w-full text-left text-[rgb(var(--color-text-secondary))] hover:text-white transition-colors">
                Hackathons
              </button>
              <button onClick={() => { scrollToSection('testimonials'); setMobileMenuOpen(false); }} className="block w-full text-left text-[rgb(var(--color-text-secondary))] hover:text-white transition-colors">
                Testimonials
              </button>
              <button onClick={() => { scrollToSection('contact'); setMobileMenuOpen(false); }} className="block w-full text-left text-[rgb(var(--color-text-secondary))] hover:text-white transition-colors">
                Contact
              </button>
              <Button className="w-full bg-[rgb(var(--color-accent-mint))] text-black hover:bg-[rgb(var(--color-accent-mint))]/90">
                Download CV
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-40 px-6 lg:px-[72px] z-10">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={100}>
              <div className="space-y-8 max-w-[540px]">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
                  Crafting reliable backends for ambitious products
                </h1>
                <p className="text-lg text-[rgb(var(--color-text-secondary))] leading-relaxed">
                  I'm Nagaraj — a backend developer turning complex challenges into scalable solutions.
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
              <div className="relative">
                <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-[var(--shadow-card)] border border-[rgb(var(--color-border-hairline))] bg-[rgb(var(--color-bg-elevated))] transform rotate-3 hover:rotate-1 transition-transform duration-500">
                  <div className="absolute inset-4 bg-gradient-to-br from-[rgb(var(--color-accent-mint))]/20 to-[rgb(var(--color-accent-lavender))]/20 rounded-xl flex items-center justify-center">

                    <img
                      src="nagaraj.jpg"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />

                  </div>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* About Highlights Cards */}
      <section id="about" className="py-24 px-6 lg:px-[72px] relative z-10">
        <RadialGradient position="center" color="lavender" opacity={0.03} />
        <div className="container mx-auto">
          <FadeIn>
            <h2 className="text-3xl lg:text-5xl font-bold mb-16 text-center">Made for modern product teams</h2>
          </FadeIn>

          <StaggeredFadeIn staggerDelay={150}>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Passion for clean architecture",
                  description: "Building maintainable systems that stand the test of time and scale.",
                  accent: "mint"
                },
                {
                  title: "Designing for scale & speed",
                  description: "Optimizing performance from database queries to API responses.",
                  accent: "lavender"
                },
                {
                  title: "Collaborative & communicative",
                  description: "Bridging technical complexity with clear business communication.",
                  accent: "peach"
                }
              ].map((card, idx) => (
                <Card key={idx} className="p-8 bg-[rgb(var(--color-bg-elevated))] border-[rgb(var(--color-border-hairline))] hover:shadow-[var(--shadow-glow-mint)] transition-all duration-250 group cursor-pointer">
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.accent === 'mint' ? 'from-[rgb(var(--color-accent-mint))]/20 to-[rgb(var(--color-accent-mint))]/40' :
                      card.accent === 'lavender' ? 'from-[rgb(var(--color-accent-lavender))]/20 to-[rgb(var(--color-accent-lavender))]/40' :
                        'from-[rgb(var(--color-accent-peach))]/20 to-[rgb(var(--color-accent-peach))]/40'
                      } flex items-center justify-center`}>
                      {idx === 0 ? <Code2 className="w-6 h-6" /> :
                        idx === 1 ? <Database className="w-6 h-6" /> :
                          <Activity className="w-6 h-6" />}
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

      {/* Skills Split Section */}
      <section id="skills" className="py-24 px-6 lg:px-[72px] relative z-10">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="space-y-8">
                <h2 className="text-3xl lg:text-5xl font-bold text-white">
                  Expertise that powers your product
                </h2>

                <div className="space-y-6">
                  {[
                    "Micro-services & Domain-Driven Design",
                    "Cloud-native deployments (AWS, Docker, k8s)",
                    "Performance monitoring & observability"
                  ].map((skill, idx) => (
                    <ScrollReveal key={idx} delay={100 + (idx * 100)}>
                      <div className="flex items-center space-x-4">
                        <div className="w-6 h-6 rounded-full bg-[rgb(var(--color-accent-lavender))]/20 flex items-center justify-center">
                          <Check className="w-4 h-4 text-[rgb(var(--color-accent-lavender))]" />
                        </div>
                        <span className="text-lg text-[rgb(var(--color-text-secondary))]">
                          {skill}
                        </span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="relative">
                <div className="aspect-video bg-[rgb(var(--color-bg-elevated))] rounded-2xl border border-[rgb(var(--color-border-hairline))] p-6 transform rotate-2 hover:rotate-1 transition-transform">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm text-[rgb(var(--color-text-muted))]">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span>main.go</span>
                    </div>
                    <div className="space-y-2 text-sm font-mono">
                      <div className="text-[rgb(var(--color-accent-lavender))]">package main</div>
                      <div className="text-[rgb(var(--color-text-secondary))]">
                        <span className="text-[rgb(var(--color-accent-mint))]">func</span> main() {'{'}
                      </div>
                      <div className="pl-4 text-[rgb(var(--color-text-secondary))]">
                        server := NewServer()
                      </div>
                      <div className="pl-4 text-[rgb(var(--color-text-secondary))]">
                        server.Start(<span className="text-[rgb(var(--color-accent-peach))]">":8080"</span>)
                      </div>
                      <div className="text-[rgb(var(--color-text-secondary))]">}</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Projects Carousel */}
      <section id="projects" className="py-24 px-6 lg:px-[72px] relative z-10">
        <RadialGradient position="bottom-right" color="peach" opacity={0.04} />
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-5xl font-bold text-white">
                  Featured projects
                </h2>
                <p className="text-lg text-[rgb(var(--color-text-secondary))] leading-relaxed">
                  A glimpse of products I have engineered.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="space-y-6">
                <div className="flex space-x-4 overflow-x-auto pb-4">
                  {projects.map((project, idx) => (
                    <Card key={idx} className={`min-w-[280px] p-6 bg-[rgb(var(--color-bg-elevated))] border-[rgb(var(--color-border-hairline))] cursor-pointer transition-all duration-250 ${currentProject === idx ? 'ring-2 ring-[rgb(var(--color-accent-mint))]/50' : 'hover:shadow-[var(--shadow-glow-mint)]'
                      }`} onClick={() => setCurrentProject(idx)}>
                      <div className="space-y-4">
                        <div className="aspect-video bg-[rgb(var(--color-bg-primary))] rounded-xl border border-[rgb(var(--color-border-hairline))] flex items-center justify-center">
                          <Image src={project.image} alt={project.name} width={40} height={40} className="opacity-50" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                          <p className="text-[rgb(var(--color-text-secondary))] text-sm">{project.description}</p>
                          <ArrowRight className="w-5 h-5 text-[rgb(var(--color-text-muted))] hover:text-white transition-colors" />
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="flex justify-center space-x-2">
                  {projects.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentProject(idx)}
                      className={`w-2 h-2 rounded-full transition-colors ${currentProject === idx ? 'bg-[rgb(var(--color-accent-mint))]' : 'bg-[rgb(var(--color-border-hairline))]'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Hackathons Section */}
      <section id="hackathons" className="py-24 px-6 lg:px-[72px] relative z-10">
        <BackgroundGrid />
        <div className="container mx-auto">
          <FadeIn>
            <div className="text-center space-y-8 mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-white">
                Innovation in action
              </h2>
              <p className="text-lg text-[rgb(var(--color-text-secondary))] max-w-2xl mx-auto leading-relaxed">
                Pushing boundaries through competitive programming and rapid prototyping.
              </p>
            </div>
          </FadeIn>

          {/* Hackathons Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:bck absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[rgb(var(--color-accent-mint))]/50 via-[rgb(var(--color-accent-lavender))]/50 to-[rgb(var(--color-accent-peach))]/50"></div>

            <StaggeredFadeIn staggerDelay={200}>
              <div className="space-y-8 lg:space-y-16">
                {[
                  {
                    year: "2024",
                    event: "TCS Codevita Season 12",
                    achievement: "Global Rank of 3430",
                    description: "Built a real-time collaborative coding platform that handled 10,000+ concurrent users with sub-50ms latency.",
                    technologies: ["C++"],
                    position: "left",
                    accent: "mint"
                  },
                  {
                    year: "2024",
                    event: "Genzverse",
                    achievement: "Finalist",
                    description: "Our team was one of the finalist teams at the Genzeon Company Hackathon - Genzverse, where we presented Health Nexus, an AI-powered smart healthcare solution.",
                    technologies: ["Kubernetes", "Terraform", "AWS", "GitLab CI"],
                    position: "right",
                    accent: "lavender"
                  },
                  {
                    year: "2023",
                    event: "FinTech Innovation Hackathon",
                    achievement: "Winner - Best Security Implementation",
                    description: "Built and Presented Evault - a Blockchain based record management system which helps in managing legal records. Presented our solution at final round happened at lords college ,Hyd.",
                    technologies: ["Node.js", "PostgreSQL", "Machine Learning", "Stripe"],
                    position: "left",
                    accent: "peach"
                  },
                  {
                    year: "2022",
                    event: "NASA Space Apps Challenge",
                    achievement: "Regional Finalist",
                    description: " NASA Space Apps 2024 (Chandigarh University), GeoSync alerts users about Landsat satellite passes over selected locations and provides real-time Surface Reflectance data for ground comparison.",
                    technologies: ["Python", "Apache Kafka", "TensorFlow", "GCP"],
                    position: "right",
                    accent: "mint"
                  }
                ].map((hackathon, idx) => (
                  <div key={idx} className={`relative ${hackathon.position === 'left' ? 'lg:pr-1/2 lg:text-right' : 'lg:pl-1/2 lg:ml-8'
                    }`}>
                    {/* Timeline Node */}
                    <div className={`hidden lg:block absolute top-8 ${hackathon.position === 'left' ? 'right-[-8px]' : 'left-[-8px]'
                      }`}>
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${hackathon.accent === 'mint' ? 'from-[rgb(var(--color-accent-mint))] to-[rgb(var(--color-accent-mint))]/70' :
                        hackathon.accent === 'lavender' ? 'from-[rgb(var(--color-accent-lavender))] t[rgb(var(--color-accent-lavender))]/70' :
                          'from-[rgb(var(--color-accent-peach))] to-[rgb(var(--color-accent-peach))]/70'
                        } shadow-[0_0_20px_rgba(180,240,224,0.5)]`}></div>
                    </div>

                    <Card className={`p-8 bg-[rgb(var(--color-bg-elevated))] border-[rgb(var(--color-border-hairline))] hover:shadow-[var(--shadow-glow-${hackathon.accent})] transition-all duration-250 group ${hackathon.position === 'left' ? 'lg:mr-12' : ''
                      }`}>
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className={`text-sm font-semibold px-3 py-1 rounded-full ${hackathon.accent === 'mint' ? 'bg-[rgb(var(--color-accent-mint))]/20 text-[rgb(var(--color-accent-mint))]' :
                              hackathon.accent === 'lavender' ? 'bg-[rgb(var(--color-accent-lavender))]/20 text-[rgb(var(--color-accent-lavender))]' :
                                'bg-[rgb(var(--color-accent-peach))]/20 text-[rgb(var(--color-accent-peach))]'
                              }`}>
                              {hackathon.year}
                            </span>
                            <div className={`w-6 h-6 rounded-full ${hackathon.accent === 'mint' ? 'bg-[rgb(var(--color-accent-mint))]/20' :
                              hackathon.accent === 'lavender' ? 'bg-[rgb(var(--color-accent-lavender))]/20' :
                                'bg-[rgb(var(--color-accent-peach))]/20'
                              } flex items-center justify-center`}>
                              {idx === 0 ? '🏆' : idx === 1 ? '🥈' : idx === 2 ? '🎯' : '🚀'}
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-white">{hackathon.event}</h3>
                          <p className={`font-semibold ${hackathon.accent === 'mint' ? 'text-[rgb(var(--color-accent-mint))]' :
                            hackathon.accent === 'lavender' ? 'text-[rgb(var(--color-accent-lavender))]' :
                              'text-[rgb(var(--color-accent-peach))]'
                            }`}>
                            {hackathon.achievement}
                          </p>
                        </div>

                        <p className="text-[rgb(var(--color-text-secondary))] leading-relaxed">
                          {hackathon.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {hackathon.technologies.map((tech, techIdx) => (
                            <span key={techIdx} className="px-3 py-1 text-xs font-medium bg-[rgb(var(--color-bg-primary))] text-[rgb(var(--color-text-secondary))] rounded-full border border-[rgb(var(--color-border-hairline))]">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </StaggeredFadeIn>
          </div>

          {/* Hackathon Stats */}
          <FadeIn delay={600}>
            <div className="mt-16 pt-16 border-t border-[rgb(var(--color-border-hairline))]">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { value: "15+", label: "Hackathons Participated" },
                  { value: "8", label: "Awards Won" },
                  { value: "3", label: "Global Finals" },
                  { value: "72hrs", label: "Average Build Time" }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center space-y-2 group">
                    <div className="text-3xl lg:text-4xl font-bold text-white group-hover:text-[rgb(var(--color-accent-mint))] transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-sm text-[rgb(var(--color-text-secondary))]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials Spotlight */}
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
                {[
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
                ].map((testimonial, idx) => (
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

      {/* Contact Section */}
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

      {/* Footer */}
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
    </>
  );
}