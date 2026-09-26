import React from "react";
import WorkoutCard from "../shared/WorkoutCard";
import { WorkoutLibraryTypes } from "@/app/types/workout";


const getLibraries = async () : Promise<WorkoutLibraryTypes[]> => {
  try {
    const response = await fetch(`https://api.api-store.workers.dev/api/fitlog`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Failed to load workouts. Please try again later.");
    return [];
  }
};

const Libraries = async () => {
  const librariesData = await getLibraries();

  return (
    <main className="py-18 text-white bg-[#1E1E1E]" id="library">
      <div className="container mx-auto px-4">
        <h1 className="text-[#FFFFFF] text-4xl font-oswald pb-3 font-bold uppercase">
          THE LIBRARY
        </h1>
        <p className="text-[#9CA3AF] font-inter pb-10">
          Twelve lifts covering every major muscle group.
        </p>

        {/* Normal Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {librariesData?.map((library: WorkoutLibraryTypes) => {
            return (
           <WorkoutCard library={library} key={library.id}/>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Libraries;
