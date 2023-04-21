import Link from "next/link";
import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";

function GetTouch() {
  return (
    <section id="get-in-touch">
      <div className="px-8 py-8 lg:py-20 lg:mt-16 bg-[url('/images/getintouch-banner-bg.png')] relative">
        <div className="absolute inset-0 bg-lighter-black/80" />
        <div className="z-50 relative text-center text-2xl font-bold flex flex-col gap-8 lg:flex-row lg:justify-center lg:text-4xl">
          <div>
            <h1 className="leading-tight text-white">
              Book a car by getting in touch with us
            </h1>
          </div>
          <div>
            <Link
              href="tel:123456789"
              className="flex items-center justify-center gap-2 text-custom-orange"
            >
              <span>
                <BsFillTelephoneFill />
              </span>
              <span className="font-semibold">(123)-456-789</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetTouch;
