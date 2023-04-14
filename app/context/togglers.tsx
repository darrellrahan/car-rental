"use client";

import React, { useContext, useEffect, useState } from "react";

type TogglersContextType = {
  mobileNavbar: boolean;
  setMobileNavbar: React.Dispatch<React.SetStateAction<boolean>>;
  bookingFields: boolean;
  setBookingFields: React.Dispatch<React.SetStateAction<boolean>>;
  bookingModal: boolean;
  setBookingModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const TogglersContext = React.createContext<TogglersContextType>({
  mobileNavbar: false,
  setMobileNavbar: () => {},
  bookingFields: true,
  setBookingFields: () => {},
  bookingModal: false,
  setBookingModal: () => {},
});

export const useTogglersContext = () => useContext(TogglersContext);

export const TogglersProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [bookingFields, setBookingFields] = useState(true);
  const [bookingModal, setBookingModal] = useState(false);

  useEffect(() => {
    document.body.style.overflowY =
      mobileNavbar || bookingModal ? "hidden" : "auto";
  }, [mobileNavbar, bookingModal]);

  return (
    <TogglersContext.Provider
      value={{
        mobileNavbar,
        setMobileNavbar,
        bookingFields,
        setBookingFields,
        bookingModal,
        setBookingModal,
      }}
    >
      {children}
    </TogglersContext.Provider>
  );
};
