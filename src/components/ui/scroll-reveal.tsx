"use client";

import React, { useRef, useEffect, useState, forwardRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  threshold?: number;
  triggerOnce?: boolean;
  staggerChildren?: boolean;
  staggerDelay?: number;
  className?: string;
}

export const ScrollReveal = forwardRef<HTMLDivElement, ScrollRevealProps>(
  (
    {
      children,
      delay = 0,
      duration = 250,
      distance = 20,
      threshold = 0.1,
      triggerOnce = true,
      staggerChildren = false,
      staggerDelay = 100,
      className = '',
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasTriggered, setHasTriggered] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
      const element = ref && 'current' in ref ? ref.current : elementRef.current;
      
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            if (!triggerOnce || !hasTriggered) {
              setIsVisible(true);
              if (triggerOnce) {
                setHasTriggered(true);
              }
            }
          } else {
            if (!triggerOnce && hasTriggered) {
              setIsVisible(false);
            }
          }
        },
        {
          threshold,
          rootMargin: '0px 0px -50px 0px',
        }
      );

      observer.observe(element);
      observerRef.current = observer;

      return () => {
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      };
    }, [threshold, triggerOnce, hasTriggered, ref]);

    const baseStyles: React.CSSProperties = {
      opacity: isVisible ? 1 : 0,
      transform: `translateY(${isVisible ? 0 : distance}px)`,
      transition: `all ${duration}ms cubic-bezier(0, 0, 0.2, 1) ${delay}ms`,
      willChange: 'transform, opacity',
    };

    if (staggerChildren && React.isValidElement(children)) {
      const childrenArray = React.Children.toArray(children);
      
      return (
        <div
          ref={ref || elementRef}
          className={className}
          style={baseStyles}
        >
          {childrenArray.map((child, index) => {
            if (React.isValidElement(child)) {
              const childDelay = delay + (index * staggerDelay);
              const childStyles: React.CSSProperties = {
                opacity: isVisible ? 1 : 0,
                transform: `translateY(${isVisible ? 0 : distance}px)`,
                transition: `all ${duration}ms cubic-bezier(0, 0, 0.2, 1) ${childDelay}ms`,
                willChange: 'transform, opacity',
              };

              return React.cloneElement(child, {
                key: index,
                style: {
                    ...((child as React.ReactElement<any, any>).props.style || {}),
                  ...childStyles,
                },
              }as React.HTMLAttributes<HTMLElement>);
            }
            return child;
          })}
        </div>
      );
    }

    return (
      <div
        ref={ref || elementRef}
        className={className}
        style={baseStyles}
      >
        {children}
      </div>
    );
  }
);

ScrollReveal.displayName = 'ScrollReveal';

export const useScrollReveal = (
  threshold: number = 0.1,
  triggerOnce: boolean = true
) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!triggerOnce || !hasTriggered) {
            setIsVisible(true);
            if (triggerOnce) {
              setHasTriggered(true);
            }
          }
        } else {
          if (!triggerOnce && hasTriggered) {
            setIsVisible(false);
          }
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, triggerOnce, hasTriggered]);

  return { elementRef, isVisible };
};

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  className = '' 
}) => {
  return (
    <ScrollReveal delay={delay} className={className}>
      {children}
    </ScrollReveal>
  );
};

interface StaggeredFadeInProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

export const StaggeredFadeIn: React.FC<StaggeredFadeInProps> = ({
  children,
  staggerDelay = 100,
  className = '',
}) => {
  return (
    <ScrollReveal 
      staggerChildren={true} 
      staggerDelay={staggerDelay}
      className={className}
    >
      {children}
    </ScrollReveal>
  );
};

interface SlideUpProps {
  children: ReactNode;
  delay?: number;
  distance?: number;
  className?: string;
}

export const SlideUp: React.FC<SlideUpProps> = ({
  children,
  delay = 0,
  distance = 32,
  className = '',
}) => {
  return (
    <ScrollReveal delay={delay} distance={distance} className={className}>
      {children}
    </ScrollReveal>
  );
};