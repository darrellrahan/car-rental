import Image from "next/image";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { chooseUs } from "../data/content";

function ChooseUs() {
  return (
    <section id="choose">
      <div className="py-8 px-8 lg:px-28 my-8 bg-chooseus-bg bg-no-repeat bg-cover text-center lg:text-left space-y-8">
        <div>
          <Image
            src="/images/chooseus-threecars.png"
            alt="choose us"
            width={1000}
            height={1000}
            className="m-auto w-full"
          />
        </div>
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-32 lg:items-center">
          <div className="space-y-8 lg:basis-1/2">
            <div className="font-bold space-y-2">
              <h3 className="text-xl">Why Choose Us</h3>
              <h1 className="text-2.5rem leading-tight">
                Best valued deals you will ever find
              </h1>
            </div>
            <div>
              <p className="text-custom-grey">
                Discover the best deals you'll ever find with our unbeatable
                offers. We're dedicated to providing you with the best value for
                your money, so you can enjoy top-quality services and products
                without breaking the bank. Our deals are designed to give you
                the ultimate renting experience, so don't miss out on your
                chance to save big.
              </p>
            </div>
            <div className="flex justify-center lg:justify-start">
              <a
                href="#booking"
                className="bg-custom-orange flex items-center gap-2 justify-center p-4 shadow-orange-bottom hover:shadow-orange-bottom-hov transition-all duration-300 ease-linear rounded font-bold text-white"
              >
                <span>Find Details</span>
                <span className="text-xl">
                  <IoIosArrowForward />
                </span>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:gap-8 lg:basis-1/2">
            {chooseUs.map((data) => (
              <div
                key={data.id}
                className="flex flex-col gap-4 lg:flex-row text-center lg:text-left"
              >
                <div>
                  <Image
                    src={data.img}
                    alt={data.title}
                    width={500}
                    height={500}
                    className="m-auto w-28 lg:w-48"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="font-bold text-2xl">{data.title}</h1>
                  <p className="text-custom-grey">{data.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChooseUs;
