import FeatureSection from "@/components/home/feature-section";
import SearchArea from "@/components/home/search-area";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#fff]">
      <div
        style={{
          backgroundImage: `url(https://travelox.vercel.app/img/slider/slider-2.jpg)`,
        }}
        className="w-full h-svh bg-down"
      >
        
      </div>
      <SearchArea />
      <FeatureSection />
    </main>
  );
}
