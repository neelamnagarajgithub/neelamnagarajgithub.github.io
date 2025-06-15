import { FadeIn, StaggeredFadeIn } from "@/components/ui/scroll-reveal";
import { BackgroundGrid } from "@/components/ui/background-effects";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function HackathonsSection() {
  const hackathons = [
    {
      year: "2024",
      event: "TCS Codevita Season 12",
      achievement: "Global Rank of 3430",
      description: "Built a real-time collaborative coding platform that handled 10,000+ concurrent users with sub-50ms latency.",
      technologies: ["C++"],
      accent: "mint"
    },
    {
      year: "2024",
      event: "Genzverse",
      achievement: "Finalist",
      description: "Our team was one of the finalist teams at the Genzeon Company Hackathon - Genzverse, where we presented Health Nexus, an AI-powered smart healthcare solution.",
      technologies: ["Nestjs", "Postgresql", "python", "GitLab CI"],
      accent: "lavender"
    },
   
    {
      year: "2022",
      event: "NASA Space Apps Challenge",
      achievement: "Regional Finalist",
      description: "NASA Space Apps 2024 (Chandigarh University), GeoSync alerts users about Landsat satellite passes over selected locations and provides real-time Surface Reflectance data for ground comparison.",
      technologies: ["Python", "Apache Kafka", "TensorFlow", "GCP"],
      accent: "mint"
    }
  ];

  const stats = [
    { value: "8+", label: "Hackathons Participated" },
    { value: "3", label: "Awards Won" },
    { value: "1", label: "Global Finals" },
    { value: "72hrs", label: "Average Build Time" }
  ];

  return (
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

        {/* Hackathon Stats */}
        <FadeIn delay={200}>
          <div className="mb-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
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

        {/* 3-Card Row Layout for Hackathons */}
        <StaggeredFadeIn staggerDelay={150}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hackathons.map((hackathon, idx) => (
              <Card 
                key={idx} 
                className={`flex flex-col h-full overflow-hidden border-[rgb(var(--color-border-hairline))] hover:shadow-[var(--shadow-glow-${hackathon.accent})] transition-all duration-250 group`}
              >
                {/* Top section with year and achievement */}
                <div className={`p-4 flex justify-between items-center border-b border-[rgb(var(--color-border-hairline))] bg-[rgb(var(--color-accent-${hackathon.accent}))]/10`}>
                  <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                    hackathon.accent === 'mint' ? 'bg-[rgb(var(--color-accent-mint))]/20 text-[rgb(var(--color-accent-mint))]' :
                    hackathon.accent === 'lavender' ? 'bg-[rgb(var(--color-accent-lavender))]/20 text-[rgb(var(--color-accent-lavender))]' :
                    'bg-[rgb(var(--color-accent-peach))]/20 text-[rgb(var(--color-accent-peach))]'
                  }`}>
                    {hackathon.year}
                  </span>
                  
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full ${
                      hackathon.accent === 'mint' ? 'bg-[rgb(var(--color-accent-mint))]/20' :
                      hackathon.accent === 'lavender' ? 'bg-[rgb(var(--color-accent-lavender))]/20' :
                      'bg-[rgb(var(--color-accent-peach))]/20'
                    } flex items-center justify-center text-xl`}>
                      {idx === 0 ? '🏆' : idx === 1 ? '🥈' : idx === 2 ? '🎯' : '🚀'}
                    </div>
                    <span className={`text-sm font-semibold mt-1 ${
                      hackathon.accent === 'mint' ? 'text-[rgb(var(--color-accent-mint))]' :
                      hackathon.accent === 'lavender' ? 'text-[rgb(var(--color-accent-lavender))]' :
                      'text-[rgb(var(--color-accent-peach))]'
                    }`}>
                      {hackathon.achievement}
                    </span>
                  </div>
                </div>
                
                {/* Main content */}
                <div className="p-6 flex-grow bg-[rgb(var(--color-bg-elevated))]">
                  <div className="flex flex-col h-full">
                    <h3 className="text-lg font-bold text-white mb-3">{hackathon.event}</h3>
                    
                    <p className="text-[rgb(var(--color-text-secondary))] text-sm leading-relaxed mb-6 flex-grow">
                      {hackathon.description}
                    </p>
                    
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {hackathon.technologies.map((tech, techIdx) => (
                          <span key={techIdx} className="px-2 py-0.5 text-xs bg-[rgb(var(--color-bg-primary))] text-[rgb(var(--color-text-secondary))] rounded-full border border-[rgb(var(--color-border-hairline))]">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className={`flex items-center justify-end text-sm text-[rgb(var(--color-accent-${hackathon.accent}))] opacity-0 group-hover:opacity-100 transition-opacity`}>
                        <span className="mr-2">View details</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </StaggeredFadeIn>

        {/* CTA Section */}
        <FadeIn delay={400}>
          <div className="mt-16 pt-8 text-center">
            <p className="text-lg text-[rgb(var(--color-text-secondary))] max-w-2xl mx-auto mb-4">
              Interested in my approach to problem-solving under pressure?
            </p>
            <a 
              href="https://github.com/neelamnagarajgithub" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-white hover:text-[rgb(var(--color-accent-mint))] transition-colors"
            >
              <span className="mr-2">View code samples</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}