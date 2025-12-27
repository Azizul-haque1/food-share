import FoodDetailsClient from "@/components/FoodDetailsClient";
import axiosInstance from "@/lib/axios";


export default async function FoodDetailsPage({ params }) {
    const { id } = await params;
    const res = await axiosInstance(`new-foods/${id}`)
    const food = res.data

    return <FoodDetailsClient food={food} />;
}
