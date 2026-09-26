'use client'

import React, { createContext, useState } from "react";

interface WorkoutsContextType {
  myPlan: any[];
  setPlan: React.Dispatch<React.SetStateAction<any[]>>;
  saved: any[];
  setSaved: React.Dispatch<React.SetStateAction<any[]>>;
}

export const WorkoutsContext = createContext<WorkoutsContextType | undefined>(undefined);

const WorkoutsProvider = ({ children }: { children: React.ReactNode }) => {
  const [myPlan, setMyPlan] = useState<any[]>(() => {
    if (typeof window !== 'undefined') {
      const savedPlan = localStorage.getItem('myWorkoutPlan');
      return savedPlan ? JSON.parse(savedPlan) : [];
    }
    return [];
  });

  const [saved, setSavedWorkouts] = useState<any[]>(() => {
    if (typeof window !== 'undefined') {
      const savedWorkouts = localStorage.getItem('savedWorkouts');
      return savedWorkouts ? JSON.parse(savedWorkouts) : [];
    }
    return [];
  });

  const setPlan = (action: any) => {
    setMyPlan((prevPlan) => {
      const updatedPlan = typeof action === 'function' ? action(prevPlan) : action;
      if (typeof window !== 'undefined') {
        localStorage.setItem('myWorkoutPlan', JSON.stringify(updatedPlan));
      }
      return updatedPlan;
    });
  };

  const setSaved = (action: any) => {
    setSavedWorkouts((prevSaved) => {
      const updatedSaved = typeof action === 'function' ? action(prevSaved) : action;
      
   
      if (typeof window !== 'undefined') {
        localStorage.setItem('savedWorkouts', JSON.stringify(updatedSaved));
      }
      return updatedSaved;
    });
  };

  const sharedData = {
    myPlan, 
    setPlan,
    saved, 
    setSaved
  }

  return <WorkoutsContext.Provider value={sharedData}>{children}</WorkoutsContext.Provider>;
};

export default WorkoutsProvider;