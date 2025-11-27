"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
    const router = useRouter();

    return (
        <div className="mt-6">
            <button
                onClick={() => router.back()}
                className=" btn-sm btn btn-primary text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Go Back
            </button>
        </div>
    );
}
