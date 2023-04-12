"use client";

import Header from "./components/Header";
import MobileNavbar from "./components/MobileNavbar";
import React, { useState } from "react";

function Home() {
  const [togglers, setTogglers] = useState({ mobileNavbar: false });

  return (
    <>
      <Header togglers={togglers} setTogglers={setTogglers} />
      <MobileNavbar togglers={togglers} setTogglers={setTogglers} />
    </>
  );
}

export default Home;
