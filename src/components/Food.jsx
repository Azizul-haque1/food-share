'use client'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion';

export default function Food({ food, i }) {
    const {
        _id,
        food_name,
        food_image,
        food_quantity,
        pickup_location,
        expire_date,
        additional_notes,
        donator_name,
        donator_email,
        donator_image,
        food_status,
        created_at,
        description
    } = food
    return (
        <motion.div

            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 60, damping: 70, delay: i * 0.1 }}


            className='  shadow-xl  rounded-xl space-y-5' >
            <div className="image w-full overflow-hidden h-[250px]  relative ">
                <img
                    className='hover:scale-110 w-full  transition-transform object-cover  rounded-xl overflow-hidden'


                    src={food_image
                    }
                    // 

                    alt="" />
                <p className='badge text-green-500 absolute top-4 right-4'>{food_status}</p>
            </div>

            <div className="content  flex flex-col gap-3 px-2 text-secondary">
                <h4 className='text-2xl border-b pb-2 border-gray-100 font-bold text-primary'>{food_name}</h4>
                <div className="flex items-center gap-3 my-2">
                    <div className=" rounded-full w-7 h-7">
                        <img src="https://i.ibb.co.com/NgX6sdH9/images.png" alt="" />
                    </div>
                    <p className='text-xl font-semibold text-black'>{donator_name}</p>
                </div>
                <p className='text-black'>Description: <span className='font-semibold text-gray-500'>{additional_notes ? additional_notes : description}</span> </p>
                <div className="flex items-center justify-between gap-4">
                    <p>Serves <span>{food_quantity}</span> people</p>

                </div>
                <Link href={`/available-foods/${_id}`} className='btn my-4 btn-outline border-primary text-primary
                '>View Details</Link>

            </div>
        </motion.div >
    )
}
