"use client";

import { FadeIn } from "@/components/ui/scroll-reveal";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function AboutSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carouselImages = [
    { src: "/nag_img1.jpg", alt: "Workspace" },
    { src: "/iitr.jpg", alt: "Coding" },
    { src: "/genzeon1.JPG", alt: "Coding" },
    { src: "/pec.jpg", alt: "Coding" },
    { src: "/portkey.jpg", alt: "Coding" },
    { src: "/genzeon2.JPG", alt: "Architecture" },
    { src: "/team1.jpg", alt: "Coding" },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <section id="about" className="py-24 px-6 lg:px-[72px]">
      <div className="container mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-16 text-center">
            About Me
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <FadeIn>
            <div className="space-y-6 text-[rgb(var(--color-text-secondary))] leading-relaxed">
              <p>
                I'm a backend developer focused on building scalable, high-performance systems. 
                With expertise in cloud architecture and microservices, I transform complex challenges into elegant solutions.
              </p>
              <p>
                My approach combines clean code principles with practical engineering to deliver 
                systems that are both maintainable and performant.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open source, or sharing knowledge with the developer community.
              </p>
            </div>
          </FadeIn>

          {/* Carousel */}
          <FadeIn delay={200}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[rgb(var(--color-bg-elevated))] border border-[rgb(var(--color-border-hairline))]">
              <img
                src={carouselImages[currentImageIndex].src}
                alt={carouselImages[currentImageIndex].alt}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-all"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-all"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {carouselImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentImageIndex
                        ? 'bg-white w-6'
                        : 'bg-white/50'
                    }`}
                    aria-label={`Image ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
