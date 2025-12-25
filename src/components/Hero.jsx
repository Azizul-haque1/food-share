'use client'

import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function Hero() {
    const componentRef = useRef(null);
    const headingRef = useRef(null);
    const contentRef = useRef(null);
    const buttonsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.fromTo(headingRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1 }
            )
                .fromTo(contentRef.current,
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 1 },
                    "-=0.6"
                )
                .fromTo(buttonsRef.current,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.8 },
                    "-=0.6"
                );

        }, componentRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={componentRef}
            className="w-full h-[70vh] relative flex items-center justify-center text-center px-6 overflow-hidden"
        >
            {/* Background with overlay */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('https://i.ibb.co.com/Tx08VX7j/bg.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
                <h1
                    ref={headingRef}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 tracking-wide drop-shadow-lg"
                >
                    Share your meals. <br />
                    <span className="text-primary-light">Help your community.</span>
                </h1>

                <p
                    ref={contentRef}
                    className="text-gray-200 text-lg md:text-2xl mb-10 max-w-2xl leading-relaxed drop-shadow-md"
                >
                    Give surplus food a purpose. Share what you can, receive what you need,
                    and build a kinder world—one dish at a time.
                </p>

                <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button className="btn bg-primary hover:bg-primary-dark border-none text-white px-10 py-3 rounded-full text-lg shadow-xl hover:scale-105 transition-transform duration-300">
                        Share Food
                    </button>

                    <button className="btn btn-outline text-white border-2 border-white/80 hover:bg-white/20 hover:border-white px-10 py-3 rounded-full text-lg backdrop-blur-sm transition-all duration-300">
                        Browse Shared Meals
                    </button>
                </div>
            </div>
        </section>
    );
}
