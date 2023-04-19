"use client";

import React from "react";
import Header from "../components/Header";
import MobileNavbar from "../components/MobileNavbar";
import BannerHero from "../components/BannerHero";
import ToTop from "../components/ToTop";
import { TogglersProvider } from "../context/togglers";
import Models from "../components/Models";
import GetTouch from "../components/GetTouch";
import Footer from "../components/Footer";

function page() {
  return (
    <TogglersProvider>
      <main>
        <Header />
        <MobileNavbar />
        <BannerHero htmlId="models-hero" page="Vehicle Models" />
        <ToTop />
        <Models />
        <GetTouch />
        <Footer />
      </main>
    </TogglersProvider>
  );
}

export default page;
