"use client";
import Banners from "@/components/Banners";
import PopularCars from "@/components/PopularCars";
import { ContextProvider } from "./context";

export default function Home() {
  return (
    <main>
      <Banners />
      <PopularCars />
    </main>
  );
}
