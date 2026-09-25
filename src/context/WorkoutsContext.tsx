'use client'

import React, { createContext, useState } from "react";

interface WorkoutsContextType {
  myPlan: any[];
  setPlan: React.Dispatch<React.SetStateAction<any[]>>;
  saved: any[];
  setSaved: React.Dispatch<React.SetStateAction<any[]>>;
}




// create context
export const WorkoutsContext = createContext<WorkoutsContextType | undefined>(undefined);



//  provider 
const WorkoutsProvider = ({ children }: { children: React.ReactNode }) => {
  const [myPlan, setPlan] = useState<any[]>([]);
  const [saved, setSaved] = useState<any[]>([]);


  const sharedData = {
    myPlan, 
    setPlan,
    saved, 
    setSaved
  }

  return <WorkoutsContext.Provider value={sharedData}>{children}</WorkoutsContext.Provider>;
};

export default WorkoutsProvider;
