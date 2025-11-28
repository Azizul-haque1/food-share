'use client'

import { motion } from "motion/react"


export default function Hero() {
    return (
        <section
            className="w-full h-[90vh] bg-cover bg-center flex items-center justify-center text-center px-4"
            style={{
                backgroundImage: "url('https://i.ibb.co.com/Tx08VX7j/bg.png')",
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 200, }}
                animate={{ opacity: 1, y: 0, }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ ease: 'easeOut', duration: 1 }}
                // transition={{ type:'keyframes', stiffness: 60, damping: 70, }}

                className="max-w-2xl">
                <h1 className="text-5xl md:text-7xl font-serif font-semibold text-gray-900 mb-6">
                    Share your meals. <br /> Help your community.
                </h1>

                <p className="text-gray-600 text-lg md:text-xl mb-8">
                    Give surplus food a purpose. Share what you can, receive what you need,
                    and build a kinder world—one dish at a time.
                </p>

                <div className="flex items-center justify-center gap-4">
                    <button className="btn bg-primary hover:bg-primary-dark text-white px-8 rounded-full">
                        Share Food
                    </button>

                    <button className="btn btn-outline px-8 rounded-full border-gray-700 text-gray-800">
                        Browse Shared Meals
                    </button>
                </div>
            </motion.div>
        </section>
    );
}
