import React from "react";
import { FaUsersLine } from "react-icons/fa6";

const FeatureSection = () => {
  return (
    <div className="grid grid-cols-1 mt-11 gap-5 xl:gap-9 justify-items-center md:grid-cols-2 lg:grid-cols-3  container max-w-7xl mx-auto px-3 ">
<FeatureCard/>
<FeatureCard/>
<FeatureCard/>


     
    </div>
  );
};

export default FeatureSection;

const FeatureCard = () => {
  return (
    <div className=" ">
    <div className="bg-white px-8 shadow-md py-5 relative rounded-xl mb-6">
      
      <span className="feature-count absolute top-[35px] text-transparent right-[20px] text-[50px] leading-[0.8] font-extrabold ">01</span>
      <div className=" text-[#fca702] rounded-lg text-[40px]">
        <FaUsersLine />
      </div>
      <div className="mt-4">
        <h3 className="text-xl text-[#071c55] mb-2 font-semibold ">5000+ Our Local Guides</h3>
        <p>
          Lorem ipsum dolor sit amet, contur selisica do mod tempor incidunt
          ut labet aliqua at quis sit ipsum suspensse dolor.
        </p>
      </div>
    </div>
  </div>
  )
}