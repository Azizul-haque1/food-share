"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`px-3 py-2 transition hover:bg-primary/10 hover:text-primary rounded-full mr-2 ${isActive ? "text-primary font-semibold bg-primary/10 rounded-full" : "text-gray-700"
                }`}
        >
            {children}
        </Link>
    );
}