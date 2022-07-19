import React, { createContext, ReactNode, useState } from "react";

export type ContextSchedules = {
  schedules: string[];
  addScheduling: (name: string) => void;
};

const contextDefaultValues: ContextSchedules = {
  schedules: [],
  addScheduling: () => { }
};

export const SchedulesContext = createContext<ContextSchedules>(contextDefaultValues);

export function SchedulesProvider({ children }) {
  const [schedules, setSchedules] = useState<string[]>(contextDefaultValues.schedules);

  function addScheduling(date) {
    setSchedules([...schedules, date])
  }

  return (
    <SchedulesContext.Provider value={{ addScheduling, schedules }}>
      {children}
    </SchedulesContext.Provider>
  )
}