import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full bg-[#3b0764] text-white py-12 mt-20 relative overflow-hidden">
            {/* Subtle overlay/gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

            <div className="w-10/12 mx-auto grid md:grid-cols-3 gap-10 relative z-10">
                {/* Brand Section */}
                <div>
                    <h3 className="font-serif font-bold text-2xl mb-4 text-purple-200 tracking-wide">
                        FoodShare
                    </h3>
                    <p className="text-purple-100/80 leading-relaxed max-w-sm">
                        Connecting communities through food using technology.
                        Share what you have, help those in need. <br />
                        <span className="block mt-4 text-sm opacity-70">© 2025 FoodShare. All rights reserved.</span>
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-semibold text-lg mb-6 text-white border-b border-purple-400/30 inline-block pb-1">
                        Quick Links
                    </h4>
                    <ul className="space-y-3 text-purple-100/90">
                        <li>
                            <Link href="/auth/login" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link href="/available-foods" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                                Available Foods
                            </Link>
                        </li>
                        <li>
                            <Link href="/add-food" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                                Add Food
                            </Link>
                        </li>
                        <li>
                            <Link href="/manage-foods" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                                Manage Foods
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Social & Contact */}
                <div>
                    <h4 className="font-semibold text-lg mb-6 text-white border-b border-purple-400/30 inline-block pb-1">Follow Us</h4>
                    <p className="text-purple-100/80 mb-4 text-sm">
                        Stay updated with our latest initiatives and community stories.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 hover:text-white transition-colors duration-300 group">
                            <Facebook className="w-5 h-5 text-purple-200 group-hover:text-white" />
                        </a>

                        <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 hover:text-white transition-colors duration-300 group">
                            <Instagram className="w-5 h-5 text-purple-200 group-hover:text-white" />
                        </a>

                        <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 hover:text-white transition-colors duration-300 group">
                            <Twitter className="w-5 h-5 text-purple-200 group-hover:text-white" />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
