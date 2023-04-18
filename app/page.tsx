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
import ToTop from "./components/ToTop";
import RentalFleet from "./components/RentalFleet";
import { CurrentValueProvider } from "./context/currentValue";
import SaveBig from "./components/SaveBig";
import ChooseUs from "./components/ChooseUs";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import DownloadApp from "./components/DownloadApp";
import Footer from "./components/Footer";

function Home() {
  return (
    <TogglersProvider>
      <InputValueProvider>
        <CurrentValueProvider>
          <main>
            <Header />
            <MobileNavbar />
            <Hero />
            <ToTop />
            <Booking />
            <BookingModal />
            <QuickEasy />
            <RentalFleet />
            <SaveBig />
            <ChooseUs />
            <Testimonials />
            <Faq />
            <DownloadApp />
            <Footer />
          </main>
        </CurrentValueProvider>
      </InputValueProvider>
    </TogglersProvider>
  );
}

export default Home;
