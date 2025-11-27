import Image from "next/image";
import Link from "next/link";
import BackButton from "./BackButton";

// Server function (OK)
async function getFoodById(id) {
    return {
        id,
        title: `Food Item #${id}`,
        description:
            "This freshly prepared meal is available for sharing. Perfect for donation.",
        image:
            "https://images.unsplash.com/photo-1601050690597-df6b08aea9c8?w=1200&q=80",
        price: 10 + Number(id),
        priority: id % 2 === 0 ? "High" : "Medium",
        date: "2025-02-02",
    };
}

export default function ItemDetailsPage({ params }) {
    const { id } = params;
    const item = getFoodById(id)


    return (
        <div className="max-w-4xl mx-auto py-10 px-4">

            <BackButton />
            <div className="w-full h-72 md:h-96 relative rounded-xl overflow-hidden shadow-lg">
                {/* <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                /> */}
            </div>

            <h1 className="mt-6 text-3xl font-bold">{item.title}</h1>

            <div className="mt-4 text-gray-600 space-y-1">
                <p><span className="font-semibold">Price:</span> ${item.price}</p>
                <p><span className="font-semibold">Posted Date:</span> {item.date}</p>
                <p><span className="font-semibold">Priority:</span> {item.priority}</p>
            </div>

            <p className="mt-6 text-gray-700 leading-relaxed">{item.description}</p>
        </div>
    );
}
