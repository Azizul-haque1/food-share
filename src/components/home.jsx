// app/page.js — Single Server Component Page for FoodShare
import Link from "next/link";
import Features from "./Features";
import FeaturedFoods from "./FeaturedFoods";
import Hero from "./Hero";
import WhatPeopleSay from "./WhatPeopleSay";
import Join from "./Join";
export default function HomePage() {

    return (
        <main className=" w-full flex flex-col">
            <Hero />
            <FeaturedFoods />
            {/* Features Section */}
            <Features />
            <WhatPeopleSay />
            <Join />

        </main>
    );
}
