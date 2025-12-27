'use client'

import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { MapPin, Calendar, User, Utensils, ArrowRight } from 'lucide-react'
import gsap from 'gsap'

export default function Food({ food, i }) {
    const cardRef = useRef(null)
    const imageRef = useRef(null)

    const {
        _id,
        food_name,
        food_image,
        food_quantity,
        pickup_location,
        expire_date,
        additional_notes,
        donator_name,
        donator_image,
        food_status,
        description
    } = food

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(cardRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    delay: i * 0.1, // Stagger effect based on index
                    ease: "power2.out"
                }
            )
        }, cardRef)

        return () => ctx.revert()
    }, [i])

    const handleMouseEnter = () => {
        gsap.to(imageRef.current, { scale: 1.1, duration: 0.5, ease: "power2.out" })
        gsap.to(cardRef.current, { y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)", duration: 0.3 })
    }

    const handleMouseLeave = () => {
        gsap.to(imageRef.current, { scale: 1, duration: 0.5, ease: "power2.out" })
        gsap.to(cardRef.current, { y: 0, boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)", duration: 0.3 })
    }

    return (
        <div
            ref={cardRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="group bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col h-full opacity-0"
        >
            {/* Image Section */}
            <div className="relative h-60 overflow-hidden">
                <img
                    ref={imageRef}
                    src={food_image}
                    alt={food_name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-sm 
                        ${food_status === 'available' ? 'bg-green-500 text-white' : 'bg-gray-400 text-white'}`}>
                        {food_status}
                    </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow relative">
                <div className="flex items-start justify-between mb-4">
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-1">
                        {food_name}
                    </h4>
                </div>

                <div className='space-y-3 mb-6'>
                    <p className="text-gray-600 text-sm line-clamp-2 min-h-[40px]">
                        {additional_notes || description}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Utensils size={16} className="text-primary" />
                        <span>Serves <span className="font-semibold text-gray-700">{food_quantity}</span> people</span>
                    </div>

                    {pickup_location && (
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <MapPin size={16} className="text-primary" />
                            <span className="truncate">{pickup_location}</span>
                        </div>
                    )}
                </div>

                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200">
                            <img
                                src={donator_image || "https://i.ibb.co.com/NgX6sdH9/images.png"}
                                alt={donator_name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <span className="text-sm font-medium text-gray-700 max-w-[100px] truncate">{donator_name}</span>
                    </div>

                    <Link href={`/available-foods/${_id}`} className="group/btn flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark transition-colors">
                        View Details
                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
