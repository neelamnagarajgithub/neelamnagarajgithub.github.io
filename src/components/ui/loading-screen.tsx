"use client";

import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete?: () => void;
  duration?: number;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ 
  onComplete, 
  duration = 2000 
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [logoVisible, setLogoVisible] = useState(false);
  const [dotsVisible, setDotsVisible] = useState(false);

  useEffect(() => {
    // Logo fade-in after 200ms
    const logoTimer = setTimeout(() => {
      setLogoVisible(true);
    }, 200);

    // Dots appear after logo
    const dotsTimer = setTimeout(() => {
      setDotsVisible(true);
    }, 600);

    // Start fade-out sequence
    const fadeOutTimer = setTimeout(() => {
      setIsVisible(false);
    }, duration - 500);

    // Complete loading
    const completeTimer = setTimeout(() => {
      if (onComplete) {
        onComplete();
      }
    }, duration);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(dotsTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(completeTimer);
    };
  }, [duration, onComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ backgroundColor: 'rgb(14, 15, 16)' }}
    >
      <div className="flex flex-col items-center space-y-8">
        {/* Logo/Monogram */}
        <div 
          className={`transition-all duration-500 ease-out ${
            logoVisible 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-4 scale-95'
          }`}
        >
          <div className="relative">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold"
              style={{ 
                backgroundColor: 'rgb(21, 22, 25)',
                border: '1px solid rgb(30, 31, 33)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.65), inset 0 0 0 1px rgb(30, 31, 33)'
              }}
            >
              <span style={{ color: 'rgb(180, 240, 224)' }}>N.</span>
            </div>
            {/* Subtle glow */}
            <div 
              className="absolute inset-0 rounded-full opacity-30"
              style={{
                background: 'radial-gradient(circle, rgba(180, 240, 224, 0.3) 0%, transparent 70%)',
                filter: 'blur(8px)',
                zIndex: -1
              }}
            />
          </div>
        </div>

        {/* Loading dots */}
        <div 
          className={`flex space-x-2 transition-all duration-500 ease-out ${
            dotsVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-2'
          }`}
        >
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ 
                backgroundColor: 'rgb(180, 240, 224)',
                animationDelay: `${index * 200}ms`,
                animationDuration: '1.5s'
              }}
            />
          ))}
        </div>

        {/* Progress indicator */}
        <div 
          className={`w-32 h-0.5 overflow-hidden rounded-full transition-all duration-500 ease-out ${
            dotsVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-2'
          }`}
          style={{ backgroundColor: 'rgb(30, 31, 33)' }}
        >
          <div 
            className="h-full rounded-full"
            style={{ 
              backgroundColor: 'rgb(180, 240, 224)',
              animation: 'loadingProgress 1.8s ease-out forwards',
              transform: 'translateX(-100%)'
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes loadingProgress {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </div>
  );
};