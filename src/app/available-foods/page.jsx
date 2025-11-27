

import Food from '@/components/Food'
import axiosInstance from '@/lib/axios';
import React from 'react'

export default async function page() {
    const res = await axiosInstance.get('/new-featured-available')
    console.log(res);
    const foods = res.data;
    console.log(foods)
    return (
        <div className="w-10/12 mx-auto">
            <h1 className='text-4xl text-secondary font-bold text-center mt-10 mb-2'>Available <span className='text-primary'>Foods</span></h1>
            <p className='text-center text-secondary/80'>Browse freshly shared meals from our community</p>

            <div className="grid grid-cols-1 md:grid-cols-2 mt-10 lg:grid-cols-3 gap-4">

                {
                    foods?.map(food => <Food key={food._id} food={food} />)
                }




            </div>
        </div>

    )
}
