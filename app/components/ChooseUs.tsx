import Image from "next/image";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { chooseUs } from "../data/content";

function ChooseUs() {
  return (
    <div className="p-8 bg-chooseus-bg bg-no-repeat bg-cover">
      <div className="space-y-6">
        <div>
          <Image
            src="/images/chooseus-threecars.png"
            alt="choose us"
            width={600}
            height={600}
          />
        </div>
        <div className="text-center font-bold space-y-2">
          <h3 className="text-xl">Why Choose Us</h3>
          <h1 className="text-2.5rem leading-tight">
            Best valued deals you will ever find
          </h1>
        </div>
        <div>
          <p className="text-center text-custom-grey">
            Discover the best deals you'll ever find with our unbeatable offers.
            We're dedicated to providing you with the best value for your money.
          </p>
        </div>
      </div>
      <div className="flex justify-center my-10">
        <button className="bg-custom-orange flex items-center gap-2 justify-center py-3 px-4 shadow-orange-bottom hover:shadow-orange-bottom-hov transition-all duration-300 ease-linear rounded border-2 border-custom-orange font-bold text-white">
          <span>Find Details</span>
          <span className="text-xl">
            <IoIosArrowForward />
          </span>
        </button>
      </div>
      <div className="grid grid-cols-fluid gap-8">
        {chooseUs.map((data) => (
          <div key={data.id} className="flex flex-col text-center">
            <Image
              src={data.img}
              alt={data.title}
              width={110}
              height={110}
              className="m-auto"
            />
            <h1 className="font-bold text-2xl">{data.title}</h1>
            <p className="text-custom-grey p-4">{data.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChooseUs;
