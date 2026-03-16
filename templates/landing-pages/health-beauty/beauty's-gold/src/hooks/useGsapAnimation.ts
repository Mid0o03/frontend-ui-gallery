import { useEffect, useRef, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

/**
 * Hook for fade in animation on mount
 */
export const useGsapFadeIn = (
    duration: number = 1,
    delay: number = 0,
    y: number = 30
): RefObject<HTMLDivElement> => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        gsap.fromTo(
            ref.current,
            { opacity: 0, y },
            { opacity: 1, y: 0, duration, delay, ease: 'power3.out' }
        );
    }, [duration, delay, y]);

    return ref;
};

/**
 * Hook for stagger animation on children
 */
export const useGsapStagger = (
    stagger: number = 0.1,
    delay: number = 0
): RefObject<HTMLDivElement> => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const children = ref.current.children;
        gsap.fromTo(
            children,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger,
                delay,
                ease: 'power3.out',
            }
        );
    }, [stagger, delay]);

    return ref;
};

/**
 * Hook for scroll-triggered animations
 */
export const useGsapScrollTrigger = (
    animationProps?: gsap.TweenVars,
    scrollTriggerProps?: ScrollTrigger.Vars
): RefObject<HTMLDivElement> => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                ref.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: ref.current,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse',
                        ...scrollTriggerProps,
                    },
                    ...animationProps,
                }
            );
        });

        return () => ctx.revert();
    }, [animationProps, scrollTriggerProps]);

    return ref;
};

/**
 * Hook for scroll-triggered stagger animations
 */
export const useGsapScrollStagger = (
    stagger: number = 0.15,
    scrollTriggerProps?: ScrollTrigger.Vars
): RefObject<HTMLDivElement> => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const ctx = gsap.context(() => {
            const children = ref.current!.children;
            gsap.fromTo(
                children,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: ref.current,
                        start: 'top 75%',
                        toggleActions: 'play none none reverse',
                        ...scrollTriggerProps,
                    },
                }
            );
        });

        return () => ctx.revert();
    }, [stagger, scrollTriggerProps]);

    return ref;
};

/**
 * Hook for parallax effect
 */
export const useGsapParallax = (
    speed: number = 0.5
): RefObject<HTMLDivElement> => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const ctx = gsap.context(() => {
            gsap.to(ref.current, {
                y: () => window.innerHeight * speed,
                ease: 'none',
                scrollTrigger: {
                    trigger: ref.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
            });
        });

        return () => ctx.revert();
    }, [speed]);

    return ref;
};
