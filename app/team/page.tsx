"use client";

import React from "react";
import { TogglersProvider } from "../context/togglers";
import Header from "../components/Header";
import MobileNavbar from "../components/MobileNavbar";
import BannerHero from "../components/BannerHero";
import ToTop from "../components/ToTop";
import GetTouch from "../components/GetTouch";
import Footer from "../components/Footer";
import Team from "../components/Team";

function page() {
  return (
    <TogglersProvider>
      <main>
        <Header absolute />
        <MobileNavbar />
        <BannerHero htmlId="team-hero" page="Our Team" />
        <ToTop />
        <Team />
        <GetTouch />
        <Footer />
      </main>
    </TogglersProvider>
  );
}

export default page;
