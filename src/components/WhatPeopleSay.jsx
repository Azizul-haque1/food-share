'use client'

import React, { useEffect, useRef } from 'react';
import { Quote, User, Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WhatPeopleSay = () => {
    const sectionRef = useRef(null);
    const cardRefs = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(cardRefs.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const addToRefs = (el) => {
        if (el && !cardRefs.current.includes(el)) {
            cardRefs.current.push(el);
        }
    };

    const testimonials = [
        {
            quote: "FoodShare made it easy to donate my extra meals to those in need. Truly rewarding!",
            name: "Samim Hossain",
            role: "Donor",
            color: "bg-blue-100 text-blue-600"
        },
        {
            quote: "I received fresh meals through FoodShare when I couldn’t afford groceries. So grateful!",
            name: "John K.",
            role: "Recipient",
            color: "bg-green-100 text-green-600"
        },
        {
            quote: "Being part of FoodShare lets me connect with my community while reducing food waste.",
            name: "Sofia L.",
            role: "Volunteer",
            color: "bg-purple-100 text-purple-600"
        }
    ];

    return (
        <section ref={sectionRef} id="testimonials" className="w-full py-24 relative overflow-hidden">
            {/* Decorative background elements */}
            {/* <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div> */}

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
                        What People Say
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Real stories from our community of donors, volunteers, and recipients.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, i) => (
                        <div
                            key={i}
                            ref={addToRefs}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
                        >
                            <div className="mb-6 text-primary/20 group-hover:text-primary/40 transition-colors">
                                <Quote size={48} className="rotate-180" />
                            </div>

                            <p className="text-gray-700 text-lg leading-relaxed mb-8 flex-grow italic">
                                "{testimonial.quote}"
                            </p>

                            <div className="flex items-center gap-4 mt-auto">
                                <div className={`w-12 h-12 rounded-full ${testimonial.color} flex items-center justify-center`}>
                                    <User size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                    <div className="flex items-center gap-2">
                                        <p className="text-sm font-medium text-primary">{testimonial.role}</p>
                                        <div className="flex text-yellow-400">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={12} fill="currentColor" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatPeopleSay;