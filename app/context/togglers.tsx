"use client";

import React, { useContext, useEffect, useState } from "react";

type TogglersContextType = {
  mobileNavbar: boolean;
  setMobileNavbar: React.Dispatch<React.SetStateAction<boolean>>;
  bookingFields: {
    red: boolean;
    green: boolean;
  };
  setBookingFields: React.Dispatch<
    React.SetStateAction<{
      red: boolean;
      green: boolean;
    }>
  >;
  bookingModal: boolean;
  setBookingModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const TogglersContext = React.createContext<TogglersContextType>({
  mobileNavbar: false,
  setMobileNavbar: () => {},
  bookingFields: {
    red: false,
    green: false,
  },
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
  const [bookingFields, setBookingFields] = useState({
    red: false,
    green: false,
  });
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
