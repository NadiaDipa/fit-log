import Image from "next/image";
import { Clock, Flame, Star } from "lucide-react";
import React from "react";
import { WorkoutLibraryTypes } from "@/app/types/workout";
import Link from "next/link";


interface cardProps{
  library: WorkoutLibraryTypes;
}

const WorkoutCard = ({library} : cardProps) => {
 return (
  <Link href={`/workouts/${library.id}`}>
    <div className="bg-[#121417] border border-white/10 rounded-2xl overflow-hidden">
      {/* Image Box */}
      <div className="relative w-full h-48 bg-[#1E1E1E]">
        <Image
          src={library.image}
          alt={library.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Badges */}
      <div className="flex gap-2 mt-4 mb-3 px-5">
        {library.muscleGroups?.map((group, index) => (
          <span
            key={index}
            className="bg-[#C2F800] text-black text-[11px] font-bold uppercase rounded-full px-3 py-1"
          >
            {group}
          </span>
        ))}
      </div>

      {/* Workout Name */}
      <h3 className="font-oswald text-xl font-bold text-white uppercase mb-1 px-5">
        {library.name}
      </h3>

      {/* Details */}
      <p className="text-gray-400 text-xs font-inter line-clamp-2 mb-4 px-5">
        {library.equipment}
      </p>

      {/* Status */}
      <div className="text-xs text-[#9CA3AF] border-t border-white/10 py-4 flex items-center gap-6 px-5">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span className="text-sm">{library.duration} min</span>
        </div>

        <div className="flex items-center gap-2">
          <Flame className="w-4 h-4" />
          <span className="text-sm">{library.caloriesBurned} kcal</span>
        </div>

        <div className="flex items-center gap-2">
          <Star className="w-4 h-4" />
          <span className="text-sm">{library.rating}</span>
        </div>
      </div>
    </div>
  </Link>
  );
};

export default WorkoutCard;
