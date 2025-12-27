'use client'

import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";


export default function LoginButton() {
    const { data: session } = useSession();
    console.log('session', session);


    useEffect(() => {
        console.log('session', session);

    }, [session])


    const hanldeSignWithGoogle = () => {
        signIn("google", { callbackUrl: '/' })
        console.log('session', session);

    }

    return (
        <button
            onClick={hanldeSignWithGoogle}
            className="w-full cursor-pointer border border-secondary text-secondary py-2 rounded-md hover:bg-secondary-light transition-colors flex items-center justify-center gap-2"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="w-5 h-5"
            >
                <path
                    fill="#FFC107"
                    d="M43.6 20.4H42V20H24v8h11.3C34.3 33 30.1 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.1 8 2.9l5.7-5.7C34.1 6.4 29.2 4 24 4 12.95 4 4 12.95 4 24s8.95 20 20 20c11.05 0 20-8.95 20-20 0-1.3-.1-2.6-.4-3.6z"
                />
                <path
                    fill="#FF3D00"
                    d="M6.3 14.3l6.6 4.8C14.1 16.1 18.8 12 24 12c3.1 0 5.9 1.1 8 2.9l5.7-5.7C34.1 6.4 29.2 4 24 4c-7 0-12.9 3.4-17.7 8.3z"
                />
                <path
                    fill="#4CAF50"
                    d="M24 44c5.1 0 9.8-1.9 13.4-5l-6.2-5c-2.1 1.8-4.9 2.9-7.2 2.9-6 0-11.2-4-12.9-9.3l-6.6 5C8 38 15.3 44 24 44z"
                />
                <path
                    fill="#1976D2"
                    d="M43.6 20.4H42V20H24v8h11.3c-1 3-3.1 5.6-5.8 7.3l-.1-.1 6.2 5c3.6-3.1 5.8-8 5.8-13.2 0-1.3-.1-2.6-.4-3.6z"
                />
            </svg>
            Continue with Google
        </button>

    );
}
