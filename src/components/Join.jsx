'use client'

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Join = () => {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);
    const buttonsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    toggleActions: "play none none reverse"
                }
            });

            tl.fromTo(contentRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
            )
                .fromTo(buttonsRef.current,
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
                    "-=0.5"
                );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="join"
            className="relative w-full py-32 flex items-center justify-center overflow-hidden"
        >
            {/* Background Image with Parallax-like fix */}
            <div
                className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=2670&auto=format&fit=crop")',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90 mix-blend-multiply" />
                <div className="absolute inset-0 bg-black/30" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
                <div ref={contentRef}>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 tracking-tight">
                        Join the FoodShare Movement
                    </h2>
                    <p className="text-lg md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
                        Share food. Help others. Reduce waste. <br className="hidden md:block" />
                        Make a tangible difference in your community today.
                    </p>
                </div>

                <div ref={buttonsRef} className="flex flex-col sm:flex-row justify-center gap-6">
                    <button
                        className="px-10 py-4 bg-white text-primary rounded-full text-lg font-bold hover:bg-gray-100 hover:scale-105 hover:shadow-2xl transition-all duration-300"
                    >
                        Get Started
                    </button>
                    <button
                        className="px-10 py-4 border-2 border-white/80 text-white rounded-full text-lg font-bold hover:bg-white/10 hover:border-white hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                    >
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Join;