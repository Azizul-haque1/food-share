'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axiosInstance from "@/lib/axiosInstance";
import axios from "axios";
import toast from "react-hot-toast";

const ManageFoodsPage = () => {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [refetch, setRefetch] = useState(false)
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (status === "loading") {
            return;
        }

        if (!session) {
            router.push("/auth/login");
        } else {

            const fetchFoods = async () => {
                try {
                    const res = await axiosInstance.get(`/new-my-food?email=${session.user.email}`);
                    console.log(res.da);
                    setFoods(res.data);
                    setLoading(false);
                } catch (error) {
                    console.error("Error fetching foods:", error);
                    setLoading(false);
                }
            };

            fetchFoods()

        }
    }, [session, status, router, refetch]);



    const handleDelete = async (foodId) => {
        console.log(foodId);
        const res = await axiosInstance.delete(`/new-my-food/${foodId}`)
        const data = await res.data;
        if (data.deletedCount) {
            toast.success('deleted Successfully')
            setRefetch(!refetch)
        }


    };



    const handleView = (food) => {
        router.push(`/available-foods/${food}`);
    };

    if (loading || status === "loading" || !session) {
        return <div className="text-center py-6">Loading...</div>;
    }

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-semibold text-center mb-6 text-primary">Manage Your Foods</h1>

            {foods.length === 0 ? (
                <div className="text-center text-xl text-gray-500">No foods found.</div>
            ) : (
                <table className="min-w-full table-auto bg-white shadow-lg rounded-lg">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">SI</th>
                            <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Food Name</th>
                            <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Description</th>
                            <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Quantity</th>
                            <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {foods.map((food, i) => (
                            <tr key={food.id} className="border-b border-gray-300 hover:bg-gray-100">
                                <td className="py-2 px-4">{i + 1}</td>
                                <td className="py-2 px-4">{food.food_name}</td>
                                <td className="py-2 px-4">{food.description ? food.description : food.additional_notes}</td>
                                <td className="py-2 px-4">{food.food_quantity}</td>
                                <td className="py-2 px-4 flex gap-2">
                                    <button
                                        onClick={() => handleView(food._id)}
                                        className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/20 focus:outline-none focus:ring-2 focus:ring-primary"
                                    >
                                        Veiw
                                    </button>
                                    <button
                                        onClick={() => handleDelete(food._id)}
                                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ManageFoodsPage;
