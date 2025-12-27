'use client'

import React, { useEffect, useRef } from 'react'
import { Recycle, HeartHandshake, Users } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Features() {
    const sectionRef = useRef(null)
    const cardRefs = useRef([])

    const features = [
        {
            title: "Reduce Waste",
            desc: "Share surplus food from your kitchen or restaurant and help minimize food waste.",
            icon: Recycle,
            color: "text-green-500",
            bg: "bg-green-50"
        },
        {
            title: "Help People",
            desc: "Connect with those in need and provide meals to families and individuals in your community.",
            icon: HeartHandshake,
            color: "text-red-500",
            bg: "bg-red-50"
        },
        {
            title: "Build Community",
            desc: "Join a network of caring people, sharing meals and creating stronger local connections.",
            icon: Users,
            color: "text-blue-500",
            bg: "bg-blue-50"
        }
    ]

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(cardRefs.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    const addToRefs = (el) => {
        if (el && !cardRefs.current.includes(el)) {
            cardRefs.current.push(el)
        }
    }

    return (
        <section ref={sectionRef} id="features" className="w-full py-24 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
                        Why FoodShare?
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We're on a mission to make food sharing easy, impactful, and community-driven.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, i) => {
                        const Icon = feature.icon
                        return (
                            <div
                                key={i}
                                ref={addToRefs}
                                className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
                            >
                                <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300 transform group-hover:scale-150`}>
                                    <Icon size={120} className={feature.color} />
                                </div>

                                <div className={`w-14 h-14 rounded-xl ${feature.bg} ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon size={28} />
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed relative z-10">
                                    {feature.desc}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
