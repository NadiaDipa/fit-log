"use client";

import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="bg-[#0C0D10] py-6 md:py-12 px-4">
      <div className="card container mx-auto flex flex-col items-center justify-between rounded-2xl border border-gray-800 bg-[#121417] px-6 py-8 shadow-sm md:py-12 lg:flex-row lg:px-12">
        
        {/* Content */}
        <div className="card-body flex-1 p-0 text-center lg:text-left">
          <div className="font-inter text-xs sm:text-sm font-semibold tracking-wider text-[#C2F800]">
            WORKOUT LIBRARY
          </div>

          <h2 className="card-title py-3 font-oswald text-2xl font-bold text-[#FFFFFF] sm:text-4xl md:py-4 md:text-5xl lg:text-6xl justify-center lg:justify-start">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h2>

          <p className="font-inter text-sm text-[#9CA3AF] sm:text-base md:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it{" "}
            <br className="hidden md:inline" />
            into today's plan, and watch the week's work add up.
          </p>

          <div className="card-actions mt-6 justify-center lg:justify-start">
            <button
              onClick={() => {
                document.getElementById("library")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="btn cursor-pointer rounded border-0 bg-[#C2F800] px-6 py-3 font-oswald text-base font-bold text-black hover:bg-[#b0df00]"
            >
              BROWSE WORKOUTS
            </button>
          </div>
        </div>

        {/* Image - Pushed down slightly so it aligns nicely with the button center */}
        <figure className="mt-12 flex w-full flex-1 items-center justify-center lg:mt-0 lg:justify-end">
          <Image
            src="/banner.png"
            alt="Workout Banner"
            width={320}
            height={320}
            className="h-auto w-full max-w-[240px] sm:max-w-xs object-contain"
          />
        </figure>

      </div>
    </section>
  );
};

export default Banner;