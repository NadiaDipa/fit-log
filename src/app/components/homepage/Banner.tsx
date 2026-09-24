import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="py-8 md:py-15 bg-[#1E1E1E]">
      <div className="card shadow-sm flex flex-col md:flex-row items-center justify-between container mx-auto border border-gray-800 py-8 md:py-15 px-6 md:px-0 rounded-2xl">
        
        {/* Content */}
        <div className="card-body flex-1 p-0 md:ml-15 text-center md:text-left items-center md:items-start">
          <div className="text-[#C2F800] font-inter">WORKOUT LIBRARY</div>
          <h2 className="card-title text-3xl sm:text-4xl md:text-6xl font-bold font-oswald py-3 md:py-5 text-[#FFFFFF] lg:text-7xl">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h2>
          <p className="text-[#9CA3AF] font-inter text-base md:text-xl">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br className="hidden md:inline" />
            into today's plan, and watch the week's work add up.
          </p>
          <div className="card-actions justify-center md:justify-start mt-6">
            <button className="btn bg-[#C2F800] text-black border-0 font-bold rounded font-oswald text-1xl px-6 py-4">
              BROWSE WORKOUTS
            </button>
          </div>
        </div>

        {/* Image */}
        <figure className="flex-1 flex justify-center md:justify-end items-center w-full md:w-auto mt-8 md:mt-0 md:mr-12">
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