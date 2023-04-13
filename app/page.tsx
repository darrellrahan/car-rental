"use client";

import Header from "./components/Header";
import MobileNavbar from "./components/MobileNavbar";
import React from "react";
import { TogglersProvider } from "./context/togglers";
import Hero from "./components/Hero";

function Home() {
  return (
    <TogglersProvider>
      <main>
        <Header />
        <MobileNavbar />
        <Hero />
      </main>
    </TogglersProvider>
  );
}

export default Home;
