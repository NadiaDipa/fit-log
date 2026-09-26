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
      toast("This is already saved!", { icon: "ℹ️" });
      return;
    }

    setSaved?.([...saved, workout]);

    toast("This is added to save later", {
      icon: "📌",
    });
  };

  return (
    <div>
      <button
        onClick={handleSaveForLater}
        className="flex items-center gap-2 rounded-lg border border-gray-700 px-4 py-3 text-[14px] font-medium text-gray-300 transition hover:bg-gray-800 cursor-pointer"
      >
        <Bookmark size={15} />
        Save for later
      </button>
    </div>
  );
};

export default SavedForLater;