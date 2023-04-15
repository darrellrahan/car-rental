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
  toTop(): void;
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
  toTop: () => {},
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

  useEffect(() => {
    document.body.style.overflowY =
      mobileNavbar || bookingModal ? "hidden" : "auto";
  }, [mobileNavbar, bookingModal]);

  useEffect(() => {
    const onPageScroll = () => setGoUp(window.pageYOffset > 600 ? true : false);
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  function toTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

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
        toTop,
      }}
    >
      {children}
    </TogglersContext.Provider>
  );
};
