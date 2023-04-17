import React, { useEffect } from "react";
import { useTogglersContext } from "../context/togglers";
import { IoIosArrowUp } from "react-icons/io";

function ScrollTop() {
  const { goUp, setGoUp } = useTogglersContext();

  useEffect(() => {
    const onPageScroll = () => setGoUp(window.pageYOffset > 600 ? true : false);
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  function toTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

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