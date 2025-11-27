import React from 'react'

export default function Features() {
    const features = [
        {
            title: "Reduce Waste",
            desc: "Share surplus food from your kitchen or restaurant and help minimize food waste."
        },
        {
            title: "Help People",
            desc: "Connect with those in need and provide meals to families and individuals in your community."
        },
        {
            title: "Build Community",
            desc: "Join a network of caring people, sharing meals and creating stronger local connections."
        }
    ]
    return (
        <section id="features" className="max-w-7xl mx-auto px-6 py-20">
            <h2 className="text-3xl font-semibold text-center mb-10 text-primary">
                Why FoodShare?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, i) => (
                    <div
                        key={i}
                        className="p-6 border border-secondary rounded-lg hover:shadow-lg transition hover:border-primary"
                    >
                        <h3 className="text-xl font-semibold mb-2 text-primary">{feature.title}</h3>
                        <p className="text-gray-600">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
