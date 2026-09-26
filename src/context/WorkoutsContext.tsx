"use client";

import React, { createContext, useEffect, useState } from "react";

interface WorkoutsContextType {
  myPlan: any[];
  setPlan: React.Dispatch<React.SetStateAction<any[]>>;
  saved: any[];
  setSaved: React.Dispatch<React.SetStateAction<any[]>>;
  isLoading: boolean;
}

export const WorkoutsContext = createContext<
  WorkoutsContextType | undefined
>(undefined);

const WorkoutsProvider = ({ children }: { children: React.ReactNode }) => {
  const [myPlan, setMyPlan] = useState<any[]>([]);
  const [saved, setSavedWorkouts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedPlan = localStorage.getItem("myWorkoutPlan");

    if (savedPlan) {
      setMyPlan(JSON.parse(savedPlan));
    }

    const savedWorkouts = localStorage.getItem("savedWorkouts");

    if (savedWorkouts) {
      setSavedWorkouts(JSON.parse(savedWorkouts));
    }

    setIsLoading(false);
  }, []);

  const setPlan = (action: any) => {
    setMyPlan((prevPlan) => {
      const updatedPlan =
        typeof action === "function" ? action(prevPlan) : action;

      localStorage.setItem("myWorkoutPlan", JSON.stringify(updatedPlan));

      return updatedPlan;
    });
  };

  const setSaved = (action: any) => {
    setSavedWorkouts((prevSaved) => {
      const updatedSaved =
        typeof action === "function" ? action(prevSaved) : action;

      localStorage.setItem("savedWorkouts", JSON.stringify(updatedSaved));

      return updatedSaved;
    });
  };

  const sharedData = {
    myPlan,
    setPlan,
    saved,
    setSaved,
    isLoading,
  };

  return (
    <WorkoutsContext.Provider value={sharedData}>
      {children}
    </WorkoutsContext.Provider>
  );
};

export default WorkoutsProvider;