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
  goUp: boolean;
  setGoUp: React.Dispatch<React.SetStateAction<boolean>>;
  showAnswer: {
    q1: boolean;
    q2: boolean;
    q3: boolean;
  };
  setShowAnswer: React.Dispatch<
    React.SetStateAction<{
      q1: boolean;
      q2: boolean;
      q3: boolean;
    }>
  >;
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
  goUp: false,
  setGoUp: () => {},
  showAnswer: { q1: false, q2: false, q3: false },
  setShowAnswer: () => {},
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
  const [goUp, setGoUp] = useState(false);
  const [showAnswer, setShowAnswer] = useState({
    q1: false,
    q2: false,
    q3: false,
  });

  return (
    <TogglersContext.Provider
      value={{
        mobileNavbar,
        setMobileNavbar,
        bookingFields,
        setBookingFields,
        bookingModal,
        setBookingModal,
        goUp,
        setGoUp,
        showAnswer,
        setShowAnswer,
      }}
    >
      {children}
    </TogglersContext.Provider>
  );
};
