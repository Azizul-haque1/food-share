'use client';

import React, { use, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { MapPin, Calendar, Clock, CheckCircle, Package, X, Loader2, Phone, AlignLeft } from 'lucide-react';
import toast from 'react-hot-toast';

import axiosInstance from "../lib/axiosInstance";
import BackButton from './BackButton';

import { useSession } from 'next-auth/react';

const InfoCard = ({ icon, title, value }) => (
    <div className="flex items-center gap-3 p-4 rounded-2xl bg-gray-50/80 border border-gray-100 hover:bg-white hover:shadow-sm transition-all duration-300">
        <div className="text-gray-500">{icon}</div>
        <div>
            <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">{title}</p>
            <p className="font-bold text-gray-800 text-sm md:text-base">{value}</p>
        </div>
    </div>
);

export default function FoodDetailsClient({ food }) {
    const containerRef = useRef(null);
    const imageRef = useRef(null);
    const contentRef = useRef(null);
    const infoRef = useRef(null);
    const modalRef = useRef(null);
    const { data: session } = useSession();
    const user = session?.user;
    console.log('user', user);
    console.log(session, 'session');


    const [loading, setLoading] = useState(false);

    // Provide default empty object if food is missing to prevent crash
    const {
        _id,
        food_name = '',
        food_image = '',
        food_quantity = '',
        pickup_location = '',
        expire_date,
        additional_notes,
        donator_name = '',
        donator_image = '',
        food_status = 'available',
        full_description = '',
        created_at
    } = food || {};

    console.log({ food_image });

    // GSAP Animation
    useEffect(() => {
        if (!food) return;

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
    }, [food]);

    // Date formatting
    const formatDate = (dateString, options) => {
        if (!dateString) return 'N/A';
        try {
            return new Date(dateString).toLocaleDateString(undefined, options);
        } catch (error) {
            return 'Invalid Date';
        }
    };

    const formattedDate = formatDate(expire_date, { year: 'numeric', month: 'long', day: 'numeric' });
    const formattedTime = formatDate(created_at, { year: 'numeric', month: 'short', day: 'numeric' });

    // Open/Close Modal
    const handleOpenModal = () => modalRef.current?.showModal();
    const handleCloseModal = () => modalRef.current?.close();

    // FOOD REQUEST HANDLER
    const handleFoodRequest = async (e) => {
        e.preventDefault();

        const writeLocation = e.target.writeLocation.value;
        const whayNeeFood = e.target.whayNeeFood.value;
        const contact = e.target.contact.value;
        {
            writeLocation, whayNeeFood, contact
        }

        try {
            setLoading(true);
            const newRequestFood = {
                foodId: _id,
                name: user.name,
                userEmail: user.email,
                photoURL: user.image,
                write_location: writeLocation,
                contactNo: contact,
                status: "pending",
            };
            console.log(newRequestFood);

            const response = await axiosInstance.post("/food-request", newRequestFood);
            if (response.data?.insertedId || response.status === 200) {
                toast.success("Food request sent successfully!");
                handleCloseModal();
                e.target.reset();
            }
        } catch (error) {
            console.error(error);
            toast.error(error?.response?.data?.message || "Failed to request food");
        } finally {
            setLoading(false);
        }
    };

    if (!food) return <div className="text-center py-20 text-gray-500">Food details not found.</div>;

    console.log(food_status, 'food status');
    const isAvailable = food_status === 'Available';

    return (
        <div ref={containerRef} className="max-w-6xl mx-auto py-12 px-4 md:px-8">
            <div className="mb-8">
                <BackButton />
            </div>

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">

                {/* Left: Image (5 cols) */}
                <div ref={imageRef} className="lg:col-span-12 xl:col-span-5 relative group">
                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-gray-200 aspect-[4/5] bg-gray-100">
                        {food_image ? (
                            <img
                                src={food_image}
                                alt={food_name}
                                width={500}
                                height={600}

                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority

                            // height={400}
                            // sizes="(max-width: 768px) 100vw, 40vw"
                            />
                        ) : (
                            <div className="flex items-center justify-center h-full text-gray-400"><Package size={48} /></div>
                        )}

                        <div className="absolute top-6 right-6">
                            <span className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-white shadow-lg backdrop-blur-md
                                ${isAvailable ? 'bg-emerald-500/90' : 'bg-gray-500/90'}`}>
                                {food_status}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right: Content (7 cols) */}
                <div ref={contentRef} className="lg:col-span-12 xl:col-span-7 flex flex-col h-full pt-2">

                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                        {food_name}
                    </h1>

                    {/* Donator Badge */}
                    <div className="flex items-center gap-4 mb-8 p-1 pl-1 pr-6 bg-white rounded-full border border-gray-100 shadow-sm w-fit">
                        <div className="w-12 h-12 relative rounded-full overflow-hidden border border-gray-100 bg-gray-50">
                            <img
                                src={donator_image || "https://i.ibb.co.com/NgX6sdH9/images.png"}
                                alt={donator_name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wide">Donated by</p>
                            <p className="text-sm font-bold text-gray-800">{donator_name}</p>
                        </div>
                    </div>

                    {/* Info Grid */}
                    <div ref={infoRef} className="grid grid-cols-2 gap-4 mb-8">
                        <InfoCard icon={<Package size={20} />} title="Quantity" value={`${food_quantity} Servings`} />
                        <InfoCard icon={<MapPin size={20} />} title="Pickup Location" value={pickup_location} />
                        <InfoCard icon={<Calendar size={20} />} title="Expires On" value={formattedDate} />
                        <InfoCard icon={<Clock size={20} />} title="Posted" value={formattedTime} />
                    </div>

                    {/* Description */}
                    <div className="prose text-gray-600 mb-10 leading-relaxed">
                        <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                            <AlignLeft size={18} className="text-emerald-500" />
                            Description
                        </h3>
                        <p>{full_description || "No description provided."}</p>

                        {additional_notes && (
                            <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-100 text-amber-900 text-sm flex gap-3">
                                <div className="min-w-[4px] w-1 bg-amber-400 rounded-full" />
                                <div>
                                    <span className="font-bold block text-xs uppercase opacity-70 mb-1">Note</span>
                                    {additional_notes}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Request Button */}
                    <div className="mt-auto pt-6 border-t border-gray-100">
                        <button
                            onClick={handleOpenModal}
                            disabled={loading || !isAvailable}
                            className={`w-full py-4 rounded-xl text-lg font-bold shadow-xl transition-all duration-300 flex justify-center items-center gap-2
                                ${!isAvailable
                                    ? "bg-gray-100 text-gray-400 cursor-not-allowed shadow-none"
                                    : "bg-gray-900 text-white hover:bg-black hover:shadow-2xl hover:-translate-y-1"
                                }`}
                        >
                            {loading ? <Loader2 className="animate-spin" /> : <CheckCircle size={20} />}
                            {loading ? "Processing..." : isAvailable ? "Request Food Now" : "Not Available"}
                        </button>
                    </div>
                </div>
            </div>

            {/* Request Modal */}
            <dialog ref={modalRef} className="modal backdrop:backdrop-blur-sm">
                <div className="modal-box p-0 max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
                    <div className="p-6 bg-gray-900 text-white relative">
                        <h3 className="text-2xl font-bold font-serif">Confirm Request</h3>
                        <p className="text-gray-400 text-sm mt-1">You are about to request <strong>{food_name}</strong>.</p>
                        <button onClick={handleCloseModal} className="absolute top-6 right-6 p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                            <X size={20} />
                        </button>
                    </div>

                    <form onSubmit={handleFoodRequest} className="p-6 space-y-4">
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-gray-500 label">Write Location</label>
                            {/* <MapPin size={16} /> */}
                            <input
                                className='input w-full'
                                name='writeLocation'
                                placeholder='Enter your location'
                                type="text" />
                            <label className="text-xs font-bold text-gray-500 label">Why Need Food</label>
                            {/* <MapPin size={16} /> */}
                            <input
                                name='whayNeeFood'
                                className='input w-full'
                                placeholder='Why Need Food'
                                type="text" />


                            <label className="text-xs font-bold text-gray-500 label">Contact No.</label>
                            {/* <MapPin size={16} /> */}
                            <input

                                className='input w-full'
                                placeholder='Contact No'
                                name='contact'
                                type="text" />
                        </div>

                        {/* Validated form fields could go here if needed later */}
                        {/* <input name="contact" placeholder="Your Contact Number" className="input..." required /> */}

                        <div className="bg-blue-50 text-blue-800 text-xs p-4 rounded-xl">
                            By clicking confirm, a request notification will be sent to the donator ({donator_name}).
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold shadow-lg shadow-emerald-200 transition-all flex justify-center items-center gap-2"
                        >
                            {loading ? <Loader2 className="animate-spin" size={18} /> : "Confirm Request"}
                        </button>
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
}
