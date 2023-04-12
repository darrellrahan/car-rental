"use client";

import React, { useContext, useState } from "react";

type TogglersContextType = {
  mobileNavbar: boolean;
  setMobileNavbar: React.Dispatch<React.SetStateAction<boolean>>;
};

const TogglersContext = React.createContext<TogglersContextType>({
  mobileNavbar: false,
  setMobileNavbar: () => {},
});

export const useTogglersContext = () => useContext(TogglersContext);

export const TogglersProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mobileNavbar, setMobileNavbar] = useState(false);

  return (
    <TogglersContext.Provider
      value={{
        mobileNavbar,
        setMobileNavbar,
      }}
    >
      {children}
    </TogglersContext.Provider>
  );
};
