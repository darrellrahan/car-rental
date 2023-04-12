"use client";

import Header from "./components/Header";
import MobileNavbar from "./components/MobileNavbar";
import React from "react";
import { TogglersProvider } from "./context/togglers";

function Home() {
  return (
    <TogglersProvider>
      <Header />
      <MobileNavbar />
    </TogglersProvider>
  );
}

export default Home;
