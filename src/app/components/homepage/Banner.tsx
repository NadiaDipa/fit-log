import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="py-15 bg-[#1E1E1E]">
    
      <div className="card card-side shadow-sm flex flex-col md:flex-row items-center justify-between container mx-auto border border-gray-800 py-15 rounded-2xl">
        
        {/* Content */}
        <div className="card-body flex-1 p-0 ml-15">
            
            <div className="text-[#C2F800] font-inter">WORKOUT LIBRARY</div>
          <h2 className="card-title text-2xl md:text-6xl font-bold font-oswald py-5 text-[#FFFFFF] lg:text-7xl">
            TRAIN WITH INTENT. LOG
EVERY SET.
          </h2>
          <p className="text-[#9CA3AF] font-inter text-xl">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br />
into today's plan, and watch the week's work add up.
          </p>
          <div className="card-actions justify-start mt-4">
            <button className="btn bg-[#C2F800] text-black border-0 font-bold rounded font-oswald text-1xl px-6 py-4">BROWSE WORKOUTS</button>
          </div>
        </div>



        {/* Image */}
        <figure className="flex-1 flex justify-end items-center w-full md:w-auto mt-6 mr-12 md:mt-0">
          <Image
            src="/banner.png"
            alt="Album"
            width={350}
            height={350}
            className="w-full max-w-xs md:max-w-sm h-auto object-contain"
          />
        </figure>

      </div>

    </section>
  );
};

export default Banner;