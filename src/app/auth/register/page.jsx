"use client";
import axiosInstance from "@/lib/axiosInstance";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function RegisterPage() {
    const router = useRouter();

    const handleRegister = async (e) => {
        e.preventDefault();
        const target = e.target;

        const name = target.name.value.trim();
        const email = target.email.value.trim();
        const password = target.password.value.trim();
        const confirmPassword = target.confirmPassword.value.trim();


        if (!name || !email || !password || !confirmPassword) {
            toast.error("All fields are required");
            return;
        }

        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        try {
            const newUser = { name, email, password }
            console.log({ name, email, password });
            const res = await axiosInstance.post(`/register`, newUser)
            const data = await res.data
            if (data.result.insertedId) {
                toast.success("Registration successful! Logging in...");

            };
            router.push("/auth/login");
        } catch (err) {
            toast.error("Registration failed. Please try again.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center text-primary">Register</h1>

                <form onSubmit={handleRegister} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block mb-1 font-medium">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your Name"
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block mb-1 font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block mb-1 font-medium">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="********"
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="confirmPassword" className="block mb-1 font-medium">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            placeholder="********"
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition-colors"
                    >
                        Register
                    </button>
                </form>

                <p className="text-center text-sm text-gray-500 mt-4">
                    Already have an account?{" "}
                    <a href="/auth/login" className="text-primary hover:underline">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
}
