"use client";

import { WorkoutsContext } from "@/context/WorkoutsContext";
import React, { useContext } from "react";
import { Bookmark } from "lucide-react";
import toast from "react-hot-toast";

const SavedForLater = ({ workout }: { workout: any }) => {
  const { saved = [], setSaved } = useContext(WorkoutsContext) || {};

  const handleSaveForLater = () => {
    const isAlreadySaved = saved.some((item) => item.id === workout.id);

    if (isAlreadySaved) {
      toast("Workout is already saved", {
        duration: 2500,
        icon: "ℹ️",
        style: {
          background: "#1A1A1A",
          color: "#F3F4F6",
          border: "1px solid #374151",
          borderRadius: "12px",
          padding: "12px 16px",
        },
      });

      return;
    }

    setSaved?.([...saved, workout]);

    toast.success("Workout saved for later", {
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
        onClick={handleSaveForLater}
        className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-700 px-3 py-2.5 text-[14px] font-medium text-gray-300 transition hover:bg-gray-800 sm:px-4 sm:py-3"
      >
        <Bookmark size={15} />
        Save for later
      </button>
    </div>
  );
};

export default SavedForLater;
