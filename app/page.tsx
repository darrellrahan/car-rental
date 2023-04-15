"use client";

import Header from "./components/Header";
import MobileNavbar from "./components/MobileNavbar";
import React from "react";
import { TogglersProvider } from "./context/togglers";
import Hero from "./components/Hero";
import Booking from "./components/Booking";
import { InputValueProvider } from "./context/inputValue";
import BookingModal from "./components/BookingModal";
import QuickEasy from "./components/QuickEasy";
import ScrollTop from "./components/ScrollTop";
import RentalFleet from "./components/RentalFleet";
import { CurrentValueProvider } from "./context/currentValue";

function Home() {
  return (
    <TogglersProvider>
      <InputValueProvider>
        <CurrentValueProvider>
          <main>
            <Header />
            <MobileNavbar />
            <Hero />
            <ScrollTop />
            <Booking />
            <BookingModal />
            <QuickEasy />
            <RentalFleet />
          </main>
        </CurrentValueProvider>
      </InputValueProvider>
    </TogglersProvider>
  );
}

export default Home;
