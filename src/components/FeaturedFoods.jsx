
import Image from "next/image";
import Food from "./Food";
import axiosInstance from "@/lib/axios";

export default async function FeaturedFoods() {

    const res = await axiosInstance('/new-featured-foods')
    const foods = await res.data
    console.log(foods);

    return (
        <section id="featured-foods" className=" mx-auto px-6 py-20">
            <h2 className="text-3xl font-semibold text-center mb-10 text-primary">
                Featured Foods
            </h2>


            <div className="grid grid-cols-1 md:grid-cols-2 mt-10 lg:grid-cols-3 gap-6">

                {
                    foods.map((food, i) =>

                        <Food key={food._id} i={i} food={food} />


                    )
                }




            </div>




        </section>
    );
}
