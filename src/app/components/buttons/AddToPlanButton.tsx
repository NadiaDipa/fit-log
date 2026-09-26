"use client";

import { WorkoutLibraryTypes } from "@/app/types/workout";
import { WorkoutsContext } from "@/context/WorkoutsContext";
import React, { useContext } from "react";
import toast from "react-hot-toast";

const AddToPlanButton = ({
  workout,
}: {
  workout: WorkoutLibraryTypes;
}) => {
  const { myPlan = [], setPlan } = useContext(WorkoutsContext) || {};

  const handleAddToPlan = () => {
    const isAlreadyAdded = myPlan.some((item) => item.id === workout.id);

    if (isAlreadyAdded) {
      toast("Workout is already in your plan", {
        duration: 2500,
        icon: "⚠️",
        style: {
          background: "#1A1A1A",
          color: "#F3F4F6",
          border: "1px solid #F59E0B",
          borderRadius: "12px",
          padding: "12px 16px",
        },
      });

      return;
    }

    setPlan?.([...myPlan, workout]);

    toast.success("Workout added to your plan", {
      duration: 2500,
      style: {
        background: "#1A1A1A",
        color: "#C2F800",
        border: "1px solid #C2F800",
        borderRadius: "12px",
        padding: "12px 16px",
      },
    });
  };

  return (
    <div>
      <button
        className="flex items-center gap-2 bg-[#C2F800] hover:bg-[#b0e000] text-black font-bold text-sm px-6 py-3 rounded-xl transition-all"
        onClick={handleAddToPlan}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clipRule="evenodd"
          />
        </svg>

        Add to today's plan
      </button>
    </div>
  );
};

export default AddToPlanButton;