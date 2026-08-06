"use client";

import { FadeIn } from "@/components/ui/scroll-reveal";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { SIGNAL } from "@/lib/accent-colors";

const carouselImages = [
      
  { src: "/nagaraj.jpg", alt: "NAGARAJ", file: "nagaraj.jpg" },
  { src: "/iitr.jpg", alt: "Cognizance @ IITR", file: "iitr.jpg" },
  { src: "/genzeon1.JPG", alt: "Genzverse hackathon", file: "genzeon-01.jpg" },
  { src: "/pec.jpg", alt: "PEC Hacks", file: "pec-hacks.jpg" },
  { src: "/portkey.jpg", alt: "AI Builders Challenge", file: "portkey.jpg" },

  { src: "/team1.jpg", alt: "With the team", file: "team.jpg" },
];

export default function AboutSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const current = carouselImages[currentImageIndex];

  return (
    <section id="about" className="relative z-10 px-6 py-24 lg:px-[72px]">
      <div className="container mx-auto max-w-6xl">
        <FadeIn>
          <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-[rgb(var(--color-text-muted))]">
            // cat about.md
          </span>
          <h2 className="mb-16 text-4xl font-bold tracking-tight text-white lg:text-5xl">
            About
          </h2>
        </FadeIn>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <div className="space-y-6 leading-relaxed text-[rgb(var(--color-text-secondary))]">
              <p>
                I&apos;m a backend engineer who&apos;s spent the last year across four different
                production codebases — enterprise data pipelines, decentralized health records,
                serverless AWS infrastructure, and AI-agent platforms, mostly figuring out how
                to keep them running.
              </p>
              <p>
                Lately most of my work sits where backend systems meet LLMs: multi-agent
                architectures, retrieval pipelines, and the unglamorous plumbing auth,
                fallbacks, rate limits, that makes an AI product reliable enough to actually
                ship.
              </p>
              <p>
                Outside of internships I build my own things ~ a CFO copilot, a backend
                scaffolding CLI, a multilingual healthcare voice assistant  and compete in
                hackathons, a habit that&apos;s landed a few finalist placements along the way.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="overflow-hidden rounded-2xl border border-[rgb(var(--color-border-hairline))] bg-[rgb(var(--color-bg-elevated))]">
              {/* terminal titlebar — same device as the hero photo card */}
              <div className="flex items-center gap-2 border-b border-[rgb(var(--color-border-hairline))] px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FB7185]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#F0B429]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#2DD4BF]" />
                <span className="ml-2 font-mono text-xs text-[rgb(var(--color-text-muted))]">
                  ~/gallery/{current.file}
                </span>
              </div>

              <div className="relative aspect-[4/3] w-full">
                <img
                  src={current.src}
                  alt={current.alt}
                  className="h-full w-full object-cover"
                />

                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
                  aria-label="Next photo"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              {/* status footer — echoes the hero card's footer, with a duration-meter-style index */}
              <div className="flex items-center justify-between border-t border-[rgb(var(--color-border-hairline))] px-4 py-3 font-mono text-xs text-[rgb(var(--color-text-muted))]">
                <span>{current.alt}</span>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {carouselImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        aria-label={`Go to photo ${idx + 1}`}
                        className="h-3 w-[3px] rounded-full transition-colors"
                        style={{
                          backgroundColor:
                            idx === currentImageIndex
                              ? SIGNAL
                              : "rgb(var(--color-border-hairline))",
                        }}
                      />
                    ))}
                  </div>
                  <span className="tabular-nums">
                    {String(currentImageIndex + 1).padStart(2, "0")}/
                    {String(carouselImages.length).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}