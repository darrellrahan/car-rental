import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";

function Hero() {
  return (
    <section id="hero">
      <div className="px-8 py-12 space-y-8">
        <div className="text-center font-bold space-y-2">
          <h3 className="text-xl">Plan your trip now</h3>
          <h1 className="text-[3.2rem] leading-tight">
            Save <span className="text-custom-orange">big</span> with our car
            rental
          </h1>
        </div>
        <div>
          <p className="text-center text-custom-grey">
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>
        </div>
        <div className="flex flex-col text-white font-bold gap-6">
          <a
            href="#booking"
            className="bg-custom-orange flex items-center gap-2 justify-center p-4 shadow-orange-bottom hover:shadow-orange-bottom-hov transition-all duration-300 ease-linear rounded border-2 border-custom-orange"
          >
            <span>Book Ride</span>
            <span className="text-xl">
              <AiFillCheckCircle />
            </span>
          </a>
          <a
            href="#booking"
            className="bg-black flex items-center gap-2 justify-center p-4 transition-all duration-300 ease-linear hover:bg-transparent hover:text-black rounded border-2 border-black"
          >
            <span>Learn More</span>
            <span className="text-xl">
              <IoIosArrowForward />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
