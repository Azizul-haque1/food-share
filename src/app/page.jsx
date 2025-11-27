import Hero from "@/components/Hero";
import HomePage from "@/components/home";
import LoginButton from "@/components/LoginButton";
import OurPorducts from "@/components/OurPorducts";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" min-h-screen items-center justify-center font-sans">

      <section className="w-10/12  mx-auto">

        {/* <h1 className="text-5xl font-bold text-center">Our  Products </h1> */}
        {/* <OurPorducts /> */}

        <HomePage />


      </section>
    </div>
  );
}
