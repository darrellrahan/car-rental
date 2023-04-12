import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useTogglersContext } from "../context/togglers";

function Header() {
  const { setMobileNavbar } = useTogglersContext();

  return (
    <header className="m-6 flex items-center justify-between">
      <div>
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={140}
            height={140}
            priority
          />
        </Link>
      </div>
      <div>
        <button
          className="text-3xl transition-all duration-300 ease-linear hover:text-custom-orange"
          onClick={() => setMobileNavbar(true)}
        >
          <AiOutlineMenu />
        </button>
      </div>
    </header>
  );
}

export default Header;
