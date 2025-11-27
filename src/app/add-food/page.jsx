'use client';

import axiosInstance from "@/lib/axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";
import loading from "../loading";

const AddFoodPage = () => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "loading") {
            return;
        }

        if (!session) {
            router.push("/auth/login");
        }
    }, [session, status, router]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const foodName = e.target.food_name.value;
        const description = e.target.description.value;
        const category = e.target.category.value;
        const imageUrl = e.target.imageUrl.value;
        const foodQuantity = e.target.food_quantity.value;


        const newFood = {
            food_name: foodName,
            food_image: imageUrl,
            food_quantity: Number(foodQuantity),
            description: description,
            donator_name: session.user.name,
            donator_email: session.user.email,
            donator_image: session.user.image,
            food_status: "Available",
            created_at: new Date()

        }

        axiosInstance.post('/new-foods', newFood)
            .then(res => {
                console.log(res.data);
            })
        console.log('new food', newFood);

        toast.success("Food added successfully!");
    };

    if (status === "loading" || !session) {
        return;
    }

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-semibold text-center mb-6 text-primary">Add Food Item</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-lg font-medium text-primary">Food Name</label>
                    <input
                        required
                        type="text"
                        name='food_name'
                        placeholder="Enter Food Name"
                        className="w-full p-3 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-500 placeholder-opacity-50"
                    />
                </div>
                <div>
                    <label className="block text-lg font-medium text-primary">Description</label>
                    <textarea
                        name="description"
                        required
                        placeholder="Provide a short description of the food item"
                        className="w-full p-3 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-500 placeholder-opacity-50"
                    />
                </div>
                <div>
                    <label className="block text-lg font-medium text-primary">Category</label>
                    <input
                        type="text"
                        name="category"
                        required
                        placeholder="Enter the category"
                        className="w-full p-3 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-500 placeholder-opacity-50"
                    />
                </div>
                <div>
                    <label className="block text-lg font-medium text-primary">Image URL</label>
                    <input
                        type="url"
                        name="imageUrl"
                        placeholder="Provide an food image URL "
                        className="w-full p-3 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-500 placeholder-opacity-50"
                    />
                </div>
                <div>
                    <label className="block text-lg font-medium text-primary">Food Quantity</label>
                    <input
                        required
                        type='number'
                        name='food_quantity'
                        placeholder="Food Quantity"
                        className="w-full p-3 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-500 placeholder-opacity-50"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-3 bg-primary border-2 border-transparent  text-white rounded-lg hover:text-primary hover:bg-white hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                >
                    Add Food
                </button>
            </form>
        </div>
    );
};

export default AddFoodPage;
