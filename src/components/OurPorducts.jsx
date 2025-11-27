import Link from "next/link";
import React from "react";

export default async function OurPorducts() {


  const res = await fetch('https://plate-share-server-sand.vercel.app/featured-foods')
  const products = await res.json()
  console.log(products);


  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
      {products.map((p, i) => (
        <div key={i} className="card  bg-base-100 shadow-xl">
          {/* Image */}
          <figure className="px-4 pt-4">
            <img
              src="https://placehold.co/300x200"
              alt="Item"
              className="rounded-xl"
            />
          </figure>

          <div className="card-body">
            {/* Title */}
            <h2 className="card-title text-lg font-bold">Awesome Product</h2>

            {/* Short Description (ellipsis) */}
            <p className="text-sm text-gray-500 line-clamp-2">
              This is a short description of the product, limited to two lines
              and truncated with an ellipsis.
            </p>

            {/* Price / Meta */}
            <div className="text-xl font-semibold mt-2">$29.99</div>

            {/* Button */}
            <div className="card-actions justify-end mt-4">
              <Link href="/products/id" className="btn btn-primary btn-sm">
                Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
