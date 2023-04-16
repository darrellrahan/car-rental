import React from "react";
import { useTogglersContext } from "../context/togglers";
import { IoIosArrowUp } from "react-icons/io";

function ScrollTop() {
  const { goUp, toTop } = useTogglersContext();

  return (
    <button
      onClick={() => toTop()}
      className={`fixed ${
        !goUp ? "-bottom-16" : "bottom-8"
      } right-8 bg-custom-orange p-1.5 text-3xl text-white transition-all duration-300 ease-linear`}
    >
      <IoIosArrowUp />
    </button>
  );
}

export default ScrollTop;
