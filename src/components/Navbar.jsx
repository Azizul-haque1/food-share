"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavLink";

export default function Navbar() {
    const { data: session } = useSession();
    console.log(session);
    const [open, setOpen] = useState(false);

    const links = <>
        <li><NavLink href="/available-foods" className="hover:text-green-600">Available Foods</NavLink></li>
        <li><NavLink href="#items" className="hover:text-green-600">Foods</NavLink></li>
        <li> <NavLink href="#testimonials" className="hover:text-green-600">People</NavLink></li>
        <li><NavLink href="#banner" className="hover:text-green-600">Start</NavLink></li>


    </>

    return (
        <nav className="sticky top-0 w-full bg-white shadow z-50">
            <div className="md:w-10/12 mx-auto px-6 py-4 flex items-center justify-between">


                <div className="font-bold text-xl text-primary">
                    <Link href='/'>FoodShare</Link>
                </div>

                {/* Nav Links */}

                <div className="flex gap-4">
                    <ul className=" hidden md:flex gap-4 items-center">
                        {
                            links
                        }
                    </ul>

                    <div className="flex  items-center gap-4">


                        {!session && (
                            <>
                                <Link href='/auth/login'
                                    // onClick={() => signIn("google")}
                                    className="px-4 py-2 border rounded hover:bg-gray-100"
                                >
                                    Login
                                </Link>

                                <Link href='/auth/register' className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/70">
                                    Register
                                </Link>
                            </>
                        )}

                        {/* If logged in → show profile */}
                        {session && (
                            <div className="relative">
                                <img
                                    src={session.user.image}
                                    alt="profile"
                                    referrerPolicy="no-referer"
                                    className="w-10 h-10 rounded-full cursor-pointer border"
                                    onClick={() => setOpen(!open)}
                                />


                                {/* Dropdown */}
                                {open && (
                                    <div className="absolute right-0 mt-3 bg-white rounded shadow-md w-50 py-2">
                                        <div className="px-4 py-2 border-b border-gray-300">
                                            <p className="font-semibold text-primary">{session.user.name}</p>
                                            <p className="text-sm text-gray-500">{session.user.email}</p>
                                        </div>

                                        <Link
                                            href="/add-food"
                                            className="block px-4 py-2 text-black hover:bg-gray-100"
                                        >
                                            Add Food
                                        </Link>

                                        <Link
                                            href="/manage-foods"
                                            className="block px-4 py-2 text-black hover:bg-gray-100"
                                        >
                                            Manage Foods
                                        </Link>

                                        <button
                                            onClick={() => signOut()}
                                            className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
