import Image from "next/image";
import React from "react";
import { aboutGrid } from "../data/content";

function About() {
  return (
    <section id="about-main">
      <div className="px-8 py-8 lg:px-60 lg:py-28 text-center lg:text-left grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:items-center">
        <div>
          <Image
            src="/images/about-main.jpg"
            alt="about"
            width={1000}
            height={1000}
            className="m-auto w-full h-full"
          />
        </div>
        <div className="space-y-12">
          <div className="space-y-6">
            <div className="font-bold space-y-2">
              <h3 className="text-xl">About Company</h3>
              <h1 className="text-2.5rem leading-tight">
                You start the engine and your adventure begins
              </h1>
            </div>
            <div>
              <p className="text-custom-grey">
                Certain but she but shyness why cottage. Guy the put instrument
                sir entreaties affronting. Pretended exquisite see cordially the
                you. Weeks quiet do vexed or whose. Motionless if no to
                affronting imprudence no precaution. My indulged as disposal
                strongly attended.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:w-fit">
            {aboutGrid.map((data) => (
              <div key={data.id} className="flex flex-col gap-4 lg:gap-6">
                <Image
                  src={data.img}
                  alt={data.text}
                  width={data.id === 3 ? 50 : 70}
                  height={data.id === 3 ? 50 : 70}
                  className="m-auto lg:m-0"
                />
                <div className="flex flex-col gap-4 lg:flex-row lg:gap-2 lg:items-center">
                  <h1 className="font-bold text-5xl">{data.amount}</h1>
                  <p className="text-custom-grey">{data.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
