"use client";

import Header from "./components/Header";
import MobileNavbar from "./components/MobileNavbar";
import React from "react";
import { TogglersProvider } from "./context/togglers";
import Hero from "./components/Hero";
import Booking from "./components/Booking";

function Home() {
  return (
    <TogglersProvider>
      <main>
        <Header />
        <MobileNavbar />
        <Hero />
        <Booking />
      </main>
    </TogglersProvider>
  );
}

export default Home;
