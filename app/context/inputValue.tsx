"use client";

import React, { useContext, useState } from "react";

type InputValueContextType = {
  bookingSelect: {
    "car-type": string;
    "pickup-location": string;
    "dropof-location": string;
  };
  setBookingSelect: React.Dispatch<
    React.SetStateAction<{
      "car-type": string;
      "pickup-location": string;
      "dropof-location": string;
    }>
  >;
  bookingDate: {
    "pickup-date": string;
    "dropof-date": string;
  };
  setBookingDate: React.Dispatch<
    React.SetStateAction<{
      "pickup-date": string;
      "dropof-date": string;
    }>
  >;
};

const InputValueContext = React.createContext<InputValueContextType>({
  bookingSelect: {
    "car-type": "Audi A1 S-Line",
    "pickup-location": "Bandung",
    "dropof-location": "Bandung",
  },
  setBookingSelect: () => {},
  bookingDate: {
    "pickup-date": "",
    "dropof-date": "",
  },
  setBookingDate: () => {},
});

export const useInputValueContext = () => useContext(InputValueContext);

export const InputValueProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [bookingSelect, setBookingSelect] = useState({
    "car-type": "Audi A1 S-Line",
    "pickup-location": "Bandung",
    "dropof-location": "Bandung",
  });
  const [bookingDate, setBookingDate] = useState({
    "pickup-date": "",
    "dropof-date": "",
  });

  return (
    <InputValueContext.Provider
      value={{
        bookingSelect,
        setBookingSelect,
        bookingDate,
        setBookingDate,
      }}
    >
      {children}
    </InputValueContext.Provider>
  );
};
