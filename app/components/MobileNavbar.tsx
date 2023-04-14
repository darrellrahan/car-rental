import Link from "next/link";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { navLink } from "../data/link";
import { useTogglersContext } from "../context/togglers";

function MobileNavbar() {
  const { mobileNavbar, setMobileNavbar } = useTogglersContext();

  return (
    <nav
      className={`fixed inset-y-0 right-0 bg-white ${
        mobileNavbar ? "left-0" : "left-150%"
      } z-50 transition-all duration-300 ease-linear p-8 flex items-center justify-center flex-col`}
    >
      <button
        className="text-3xl absolute top-10 right-10 hover:text-custom-orange transition-all duration-300 ease-linear"
        onClick={() => setMobileNavbar(false)}
      >
        <AiOutlineClose />
      </button>
      <ul className="flex flex-col items-center gap-8 font-medium text-2xl">
        {navLink.map((data) => (
          <li key={data.id}>
            <Link
              href={data.url}
              className="hover:text-custom-orange transition-all duration-300 ease-linear"
              onClick={() => setMobileNavbar(false)}
            >
              {data.link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MobileNavbar;
