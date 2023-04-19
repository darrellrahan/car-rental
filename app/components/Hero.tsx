import Image from "next/image";
import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

function Hero() {
  return (
    <section id="hero">
      <div className="px-8 lg:px-28 py-12 lg:py-0 h-screen flex items-center relative">
        <Image
          src="/images/home-hero-bg.png"
          alt="hero"
          width={680}
          height={870}
          className="absolute inset-y-0 right-0 -z-10 hidden lg:inline-block"
        />
        <Image
          src="/images/hero-big-car.png"
          alt="hero"
          width={800}
          height={450}
          className="absolute right-0 hidden lg:inline-block"
        />
        <div className="space-y-8 text-center lg:text-left lg:max-w-lg">
          <div className="font-bold space-y-2">
            <h3 className="text-xl">Plan your trip now</h3>
            <h1 className="text-[3.2rem] leading-tight">
              Save <span className="text-custom-orange">big</span> with our car
              rental
            </h1>
          </div>
          <div>
            <p className="text-custom-grey">
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row text-white font-bold gap-6">
            <a
              href="#booking"
              className="bg-custom-orange flex items-center gap-2 justify-center py-4 px-4 lg:px-8 shadow-orange-bottom hover:shadow-orange-bottom-hov transition-all duration-300 ease-linear rounded border-2 border-custom-orange"
            >
              <span>Book Ride</span>
              <span className="text-xl">
                <AiFillCheckCircle />
              </span>
            </a>
            <a
              href="#booking"
              className="bg-black flex items-center gap-2 justify-center py-4 px-4 lg:px-8 transition-all duration-300 ease-linear hover:bg-transparent hover:text-black rounded border-2 border-black"
            >
              <span>Learn More</span>
              <span className="text-xl">
                <IoIosArrowForward />
              </span>
            </a>
          </div>
        </div>
        <a
          href="#booking"
          className="absolute bottom-16 inset-x-1/2 text-3xl animate-bounce"
        >
          <IoIosArrowDown />
        </a>
      </div>
    </section>
  );
}

export default Hero;
