'use client'

import { WorkoutLibraryTypes } from "@/app/types/workout";
import { WorkoutsContext } from "@/context/WorkoutsContext";
import React, { useContext } from "react";

const SavedForLater = ({workout} : { workout: WorkoutLibraryTypes }) => {

    const {saved=[], setSaved} = useContext(WorkoutsContext) || {};

    const handleSaveForLater = () =>{
        // console.log('saved button')

        setSaved?.([...saved, workout])
    }

  return (
    <div>
      <button className="flex items-center gap-2 bg-[#16181E] hover:bg-[#20242D] border border-gray-800 text-gray-300 font-semibold text-sm px-6 py-3 rounded-xl transition-all"
      onClick={()=>handleSaveForLater()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
          />
        </svg>
        Save for later
      </button>
    </div>
  );
};

export default SavedForLater;
