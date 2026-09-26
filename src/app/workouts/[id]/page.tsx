import AddToPlanButton from "@/app/components/buttons/AddToPlanButton";
import SavedForLater from "@/app/components/buttons/SavedForLater";
import { WorkoutLibraryTypes } from "@/app/types/workout";
import Image from "next/image";
import React from "react";

interface workoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getLibraries = async (
  id: string,
): Promise<WorkoutLibraryTypes | null> => {
  try {
    const response = await fetch(
      `https://api.api-store.workers.dev/api/fitlog/${id}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Failed to load workouts. Please try again later.");
    return null;
  }
};

const WorkoutDetailsPage = async ({ params }: workoutDetailsPageProps) => {
  const { id } = await params;
  const singleWorkout = await getLibraries(id);

  return (
    <section className="bg-[#0F1115] min-h-screen py-8 sm:py-10 px-4 sm:px-6 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start container max-w-6xl mx-auto">
        {/* Left Side: Image */}
        <div className="w-full h-full flex justify-center">
          <figure className="w-full h-full relative min-h-72 sm:min-h-80 lg:min-h-100">
            <Image
              src={singleWorkout?.image || ""}
              alt={singleWorkout?.name || "workout image"}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover rounded-3xl"
              priority
            />
          </figure>
        </div>

        {/* Right Side: Details */}
        <div className="flex flex-col space-y-6 text-white">
          {/* Title & Description */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide uppercase font-oswald text-white mb-3">
              {singleWorkout?.name}
            </h1>
            <p className="text-[#8E95A2] text-sm md:text-base leading-relaxed">
              {singleWorkout?.description}
            </p>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            {singleWorkout?.muscleGroups?.map((group, index) => (
              <span
                key={index}
                className="bg-[#C2F800] text-black text-[12px] font-bold uppercase rounded-full px-3.5 py-1"
              >
                {group}
              </span>
            ))}
          </div>

          {/* Table */}
          <div className="bg-[#16181E] border border-gray-800/80 rounded-2xl p-2 sm:p-3 md:p-4 overflow-hidden">
            <table className="w-full text-sm border-separate border-spacing-y-3">
              <tbody className="divide-y divide-gray-800/40">
                <tr className="text-gray-400">
                  <td className="font-semibold uppercase text-xs tracking-wider pl-2 py-1">
                    EQUIPMENT
                  </td>
                  <td className="text-right text-gray-200 font-medium pr-2 py-1">
                    {singleWorkout?.equipment || "N/A"}
                  </td>
                </tr>
                <tr className="text-gray-400">
                  <td className="font-semibold uppercase text-xs tracking-wider pl-2 py-1">
                    DIFFICULTY
                  </td>
                  <td className="text-right text-gray-200 font-medium pr-2 py-1">
                    {singleWorkout?.difficulty}
                  </td>
                </tr>
                <tr className="text-gray-400">
                  <td className="font-semibold uppercase text-xs tracking-wider pl-2 py-1">
                    SETS
                  </td>
                  <td className="text-right text-gray-200 font-medium pr-2 py-1">
                    {singleWorkout?.sets}
                  </td>
                </tr>
                <tr className="text-gray-400">
                  <td className="font-semibold uppercase text-xs tracking-wider pl-2 py-1">
                    REPS
                  </td>
                  <td className="text-right text-gray-200 font-medium pr-2 py-1">
                    {singleWorkout?.reps}
                  </td>
                </tr>
                <tr className="text-gray-400">
                  <td className="font-semibold uppercase text-xs tracking-wider pl-2 py-1">
                    DURATION
                  </td>
                  <td className="text-right text-gray-200 font-medium pr-2 py-1">
                    {singleWorkout?.duration} min
                  </td>
                </tr>
                <tr className="text-gray-400">
                  <td className="font-semibold uppercase text-xs tracking-wider pl-2 py-1">
                    CALORIES
                  </td>
                  <td className="text-right text-gray-200 font-medium pr-2 py-1">
                    {singleWorkout?.caloriesBurned} kcal
                  </td>
                </tr>
                <tr className="text-gray-400">
                  <td className="font-semibold uppercase text-xs tracking-wider pl-2 py-1">
                    RATING
                  </td>
                  <td className="text-right text-gray-200 font-medium pr-2 py-1">
                    {singleWorkout?.rating}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Instructions Section */}
          <div className="space-y-3 pt-2">
            <h2 className="text-base font-bold uppercase tracking-wider text-white">
              Instructions
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-[#9CA3AF] text-sm leading-relaxed">
              {singleWorkout?.instructions?.map(
                (instruction: string, index: number) => (
                  <li
                    key={index}
                    className="marker:text-[#C2F800] marker:font-bold"
                  >
                    <span className="ml-1 text-gray-300">{instruction}</span>
                  </li>
                ),
              )}
            </ol>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            {singleWorkout ? (
              <>
                <AddToPlanButton workout={singleWorkout} />
                <SavedForLater workout={singleWorkout} />
              </>
            ) : (
              <p className="text-gray-400 text-sm">Loading...</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutDetailsPage;