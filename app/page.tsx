"use client";

import Header from "./components/Header";
import MobileNavbar from "./components/MobileNavbar";
import React from "react";
import { TogglersProvider } from "./context/togglers";
import Hero from "./components/Hero";
import Booking from "./components/Booking";
import { InputValueProvider } from "./context/inputValue";
import BookingModal from "./components/BookingModal";

function Home() {
  return (
    <TogglersProvider>
      <InputValueProvider>
        <main>
          <Header />
          <MobileNavbar />
          <Hero />
          <Booking />
          <BookingModal />
        </main>
      </InputValueProvider>
    </TogglersProvider>
  );
}

export default Home;
