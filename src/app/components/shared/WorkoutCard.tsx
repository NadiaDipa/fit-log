import Image from "next/image";
import { Clock, Flame, Star } from "lucide-react";
import React from "react";
import { WorkoutLibraryTypes } from "@/app/types/workout";
import Link from "next/link";

interface cardProps {
  library: WorkoutLibraryTypes;
}

const WorkoutCard = ({ library }: cardProps) => {
  return (
    <Link href={`/workouts/${library.id}`} className="block h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#121417] transition-all duration-300 hover:border-[#C2F800]/50">
        {/* Image Box */}
        <div className="relative h-64 w-full overflow-hidden bg-[#0d0f12] sm:h-72 lg:h-80">
          <Image
            src={library.image}
            alt={library.name}
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Badges */}
        <div className="mt-4 mb-3 flex flex-wrap gap-2 px-4 sm:px-5">
          {library.muscleGroups?.map((group, index) => (
            <span
              key={index}
              className="rounded-full bg-[#C2F800] px-3 py-1 text-[11px] font-bold uppercase text-black"
            >
              {group}
            </span>
          ))}
        </div>

        {/* Workout Name */}
        <h3 className="mb-1 px-4 font-oswald text-xl font-bold uppercase text-white sm:px-5">
          {library.name}
        </h3>

        {/* Details */}
        <p className="mb-4 line-clamp-2 px-4 font-inter text-xs text-gray-400 sm:px-5">
          {library.equipment}
        </p>

        {/* Status */}
        <div className="mt-auto flex items-center justify-between border-t border-white/10 px-4 py-4 text-xs text-[#9CA3AF] sm:px-5">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-[#C2F800]" />
            <span className="text-xs sm:text-sm">
              {library.duration} min
            </span>
          </div>

          <div className="flex items-center gap-1">
            <Flame className="h-4 w-4 text-[#C2F800]" />
            <span className="text-xs sm:text-sm">
              {library.caloriesBurned} kcal
            </span>
          </div>

          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-[#C2F800]" />
            <span className="text-xs sm:text-sm">{library.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;

