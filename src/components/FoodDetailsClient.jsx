'use client'

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MapPin, Calendar, User, Clock, CheckCircle, Package } from 'lucide-react';
import BackButton from './BackButton';


export default function FoodDetailsClient({ food }) {
    const containerRef = useRef(null);
    const imageRef = useRef(null);
    const contentRef = useRef(null);
    const infoRef = useRef(null);

    const {
        food_name,
        food_image,
        food_quantity,
        pickup_location,
        expire_date,
        additional_notes,
        donator_name,
        donator_image,
        food_status,
        full_description,
        created_at
    } = food;

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.fromTo(imageRef.current,
                { y: 50, opacity: 0, scale: 0.95 },
                { y: 0, opacity: 1, scale: 1, duration: 1 }
            )
                .fromTo(contentRef.current,
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8 },
                    "-=0.6"
                )
                .fromTo(infoRef.current?.children,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
                    "-=0.6"
                );

        }, containerRef);

        return () => ctx.revert();
    }, []);

    // Format Date
    const formattedDate = expire_date ? new Date(expire_date).toLocaleDateString(undefined, {
        year: 'numeric', month: 'long', day: 'numeric'
    }) : 'N/A';

    const formattedTime = created_at ? new Date(created_at).toLocaleDateString(undefined, {
        year: 'numeric', month: 'short', day: 'numeric'
    }) : 'Recently';


    return (
        <div ref={containerRef} className="max-w-5xl mx-auto py-12 px-4 md:px-8">
            <div className="mb-6">
                <BackButton />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">

                {/* Left Column: Image */}
                <div ref={imageRef} className="relative rounded-3xl overflow-hidden shadow-2xl group h-[400px] lg:h-[500px]">
                    <img
                        src={food_image}
                        alt={food_name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                        <span className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide text-white shadow-lg backdrop-blur-md
                            ${food_status === 'available' ? 'bg-green-500/90' : 'bg-gray-500/90'}`}>
                            {food_status}
                        </span>
                    </div>
                </div>

                {/* Right Column: Details */}
                <div ref={contentRef} className="flex flex-col h-full">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                        {food_name}
                    </h1>

                    {/* Donator Info */}
                    <div className="flex items-center gap-4 mb-8 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-sm">
                            <img
                                src={donator_image || "https://i.ibb.co.com/NgX6sdH9/images.png"}
                                alt={donator_name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Donated by</p>
                            <p className="text-lg font-bold text-gray-800">{donator_name}</p>
                        </div>
                    </div>

                    {/* Key Details Grid */}
                    <div ref={infoRef} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center gap-3 p-4 rounded-xl bg-blue-50/50 text-blue-700">
                            <Package size={24} />
                            <div>
                                <p className="text-xs uppercase font-bold opacity-70">Quantity</p>
                                <p className="font-semibold">{food_quantity} Servings</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 p-4 rounded-xl bg-purple-50/50 text-purple-700">
                            <MapPin size={24} />
                            <div>
                                <p className="text-xs uppercase font-bold opacity-70">Pickup Location</p>
                                <p className="font-semibold truncate max-w-[150px]">{pickup_location}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 p-4 rounded-xl bg-orange-50/50 text-orange-700">
                            <Calendar size={24} />
                            <div>
                                <p className="text-xs uppercase font-bold opacity-70">Expires On</p>
                                <p className="font-semibold">{formattedDate}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-100 text-gray-700">
                            <Clock size={24} />
                            <div>
                                <p className="text-xs uppercase font-bold opacity-70">Posted</p>
                                <p className="font-semibold">{formattedTime}</p>
                            </div>
                        </div>
                    </div>

                    {/* Descriptions */}
                    <div className="space-y-6 mb-10 text-gray-600 leading-relaxed text-lg">
                        <div>
                            <h3 className="font-bold text-gray-900 mb-2 text-xl">Description</h3>
                            <p>{full_description || description}</p>
                        </div>
                        {additional_notes && (
                            <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-100/50 text-yellow-800 text-base">
                                <span className="font-bold block mb-1">Additional Notes:</span>
                                {additional_notes}
                            </div>
                        )}
                    </div>

                    {/* Action Button */}
                    <button 
                    
                    className="w-full py-4 bg-primary hover:bg-primary-dark text-white rounded-xl text-xl font-bold shadow-xl shadow-primary/20 hover:shadow-2xl hover:translate-y-[-2px] transition-all duration-300 flex items-center justify-center gap-2 mt-auto">
                        <CheckCircle size={24} />
                        Request Food Now
                    </button>
                </div>
            </div>
        </div>
    );
}
