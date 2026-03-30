"use client";

import { createContext, useContext } from "react";

const SchoolContext = createContext<any>(null);

export function SchoolProvider({ children, value }: any) {
  return (
    <SchoolContext.Provider value={value}>{children}</SchoolContext.Provider>
  );
}

// custom hook biar clean
export function useSchool() {
  const context = useContext(SchoolContext);

  if (!context) {
    throw new Error("useSchool must be used within SchoolProvider");
  }

  return context;
}
