
import BackButton from "../../../components/BackButton";
import axiosInstance from "@/lib/axios";


export default async function FoodDetailsPage({ params }) {
    const { id } = await params;
    const res = await axiosInstance(`new-foods/${id}`)
    const food = res.data
    console.log('food', food);
    // console.log(food)
    return (
        <div className="max-w-4xl mx-auto py-10 px-4">

            <BackButton />
            <div className="w-full    rounded-xl overflow-hidden shadow-lg mt-4">
                <img
                    src={food.food_image}
                    alt={food.food_name}
                    fill
                    className="w-full"
                />
            </div>

            <h1 className="mt-6 text-3xl font-bold">{food.food_name}</h1>

            <div className="mt-4 text-gray-600 space-y-1">
                <p><span className="font-semibold">Quantnity:</span>{food.food_quantity}</p>

            </div>

            <p className="mt-6 text-gray-700 leading-relaxed">{food.full_description}</p>
        </div>
    );
}
