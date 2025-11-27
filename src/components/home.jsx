// app/page.js — Single Server Component Page for FoodShare
import Link from "next/link";
import Features from "./Features";
import FeaturedFoods from "./FeaturedFoods";

export default function HomePage() {


    return (
        <main className="min-h-screen w-full flex flex-col">


            {/* Hero Section */}
            <section
                className="w-full h-[90vh] bg-cover bg-center flex items-center justify-center text-center px-4"
                style={{
                    backgroundImage: "url('https://i.ibb.co.com/Tx08VX7j/bg.png')",
                }}
            >
                <div className="max-w-2xl">
                    <h1 className="text-5xl md:text-7xl font-serif font-semibold text-gray-900 mb-6">
                        Share your meals. <br /> Help your community.
                    </h1>

                    <p className="text-gray-600 text-lg md:text-xl mb-8">
                        Give surplus food a purpose. Share what you can, receive what you
                        need, and build a kinder world—one dish at a time.
                    </p>

                    <div className="flex items-center justify-center gap-4">
                        <button className="btn bg-primary hover:bg-red-700 text-white px-8 rounded-full">
                            Share Food
                        </button>

                        <button className="btn btn-outline px-8 rounded-full border-gray-700 text-gray-800">
                            Browse Shared Meals
                        </button>
                    </div>
                </div>
            </section>


            <FeaturedFoods />

            {/* Features Section */}
            <Features />




            <section id="testimonials" className="max-w-7xl mx-auto px-6 py-20">
                <h2 className="text-3xl font-semibold text-center mb-10 text-primary">
                    What People Say
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            quote: "FoodShare made it easy to donate my extra meals to those in need. Truly rewarding!",
                            name: "Samim Hossain",
                            role: "Donor"
                        },
                        {
                            quote: "I received fresh meals through FoodShare when I couldn’t afford groceries. So grateful!",
                            name: "John K.",
                            role: "Recipient"
                        },
                        {
                            quote: "Being part of FoodShare lets me connect with my community while reducing food waste.",
                            name: "Sofia L.",
                            role: "Volunteer"
                        }
                    ].map((testimonial, i) => (
                        <div
                            key={i}
                            className="p-6 border border-secondary rounded-lg hover:shadow-lg transition hover:border-primary"
                        >
                            <p className="text-gray-600 italic mb-4">“{testimonial.quote}”</p>
                            <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                            <p className="text-secondary text-sm">{testimonial.role}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section
                id="banner"
                className="relative w-full py-20 bg-gradient-to-r from-primary to-secondary text-white text-center px-4"
            >
                {/* Optional Background Image */}
                <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}></div>

                <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-shadow-lg">
                        Join the FoodShare Movement
                    </h2>
                    <p className="text-lg md:text-xl mb-6 text-shadow-lg">
                        Share food. Help others. Reduce waste. Make a difference in your community today.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <button
                            className="px-8 py-4 bg-white text-primary rounded-lg text-xl font-semibold hover:bg-secondary hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            Get Started
                        </button>
                        <button
                            className="px-8 py-4 border-2 border-white text-white rounded-lg text-xl font-semibold hover:bg-white hover:text-primary transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </section>



        </main>
    );
}
