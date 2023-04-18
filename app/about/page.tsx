"use client";

import React from "react";
import Header from "../components/Header";
import MobileNavbar from "../components/MobileNavbar";
import { TogglersProvider } from "../context/togglers";
import { InputValueProvider } from "../context/inputValue";
import { CurrentValueProvider } from "../context/currentValue";
import BannerHero from "../components/BannerHero";
import About from "../components/About";
import QuickEasy from "../components/QuickEasy";
import GetTouch from "../components/GetTouch";
import Footer from "../components/Footer";
import ToTop from "../components/ToTop";

function page() {
  return (
    <TogglersProvider>
      <InputValueProvider>
        <CurrentValueProvider>
          <main>
            <Header absolute />
            <MobileNavbar />
            <BannerHero htmlId="about-hero" page="About" />
            <ToTop />
            <About />
            <QuickEasy />
            <GetTouch />
            <Footer />
          </main>
        </CurrentValueProvider>
      </InputValueProvider>
    </TogglersProvider>
  );
}

export default page;
