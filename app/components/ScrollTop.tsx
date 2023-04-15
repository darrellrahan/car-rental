import React from "react";
import { useTogglersContext } from "../context/togglers";
import { IoIosArrowUp } from "react-icons/io";

function ScrollTop() {
  const { goUp, toTop } = useTogglersContext();

  if (!goUp) return null;

  return (
    <button
      onClick={() => toTop()}
      className="fixed bottom-8 right-8 bg-custom-orange p-1.5 text-3xl text-white"
    >
      <IoIosArrowUp />
    </button>
  );
}

export default ScrollTop;
