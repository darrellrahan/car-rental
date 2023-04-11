"use client";

import React, { useContext, useState } from "react";

type GlobalContextType = {
  togglers: { mobileNavbar: boolean };
  setTogglers: React.Dispatch<
    React.SetStateAction<{
      mobileNavbar: boolean;
    }>
  >;
};

const GlobalContext = React.createContext<GlobalContextType>({
  togglers: { mobileNavbar: false },
  setTogglers() {},
});

export function useGlobalContext() {
  return useContext(GlobalContext);
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [togglers, setTogglers] = useState({
    mobileNavbar: false,
  });

  return (
    <GlobalContext.Provider
      value={{
        togglers,
        setTogglers,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
