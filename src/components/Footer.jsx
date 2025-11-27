import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-[#6d28d9] text-white py-10 px-6 mt-20">
            <div className="w-10/12  mx-auto grid md:grid-cols-3 gap-8">

            
                <div>
                    <h3 className="font-semibold text-lg mb-3 text-secondary">
                        FoodShare
                    </h3>
                    <p className="text-sm text-gray-200">
                        © 2025 FoodShare. All rights reserved.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-semibold mb-3 text-secondary">
                        Links
                    </h4>
                    <ul className="space-y-2 text-gray-200">
                        <li>
                            <Link href="#features" className="hover:text-secondary transition">
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link href="#items" className="hover:text-secondary transition">
                                Foods
                            </Link>
                        </li>
                        <li>
                            <Link href="#testimonials" className="hover:text-secondary transition">
                                People
                            </Link>
                        </li>
                        <li>
                            <Link href="#banner" className="hover:text-secondary transition">
                                Start
                            </Link>
                        </li>
                    </ul>
                </div>


                <div>
                    <h4 className="font-semibold mb-3 text-secondary">Follow Us</h4>
                    <div className="flex gap-4 text-gray-200">
                        <a href="#" className="hover:text-secondary transition">
                            {/* Facebook */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"
                                fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.007 3.657 9.128 8.438 9.878v-6.988h-2.54v-2.89h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 17.007 22 12z" />
                            </svg>
                        </a>

                        <a href="#" className="hover:text-secondary transition">
                            {/* Instagram */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"
                                fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.342 3.608 1.317..." />
                            </svg>
                        </a>

                        <a href="#" className="hover:text-secondary transition">
                            {/* Twitter */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"
                                fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53..." />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
