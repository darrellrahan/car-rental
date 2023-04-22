import React from "react";
import { carDetails } from "../data/content";
import Image from "next/image";
import { AiFillCar, AiFillStar, AiFillTool } from "react-icons/ai";
import { GiCarDoor } from "react-icons/gi";
import { BsFillFuelPumpFill } from "react-icons/bs";

function Models() {
  return (
    <section id="models-main">
      <div className="py-8 px-8 lg:px-48 lg:py-16 my-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {carDetails.map((data) => (
            <div
              key={data.id}
              className="border border-lighter-grey bg-white rounded"
            >
              <div>
                <Image
                  src={`/images/box-${data.car}.png`}
                  alt={data.car}
                  width={800}
                  height={800}
                  className="w-full h-full lg:h-60 object-cover rounded-t"
                />
              </div>
              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div>
                      <h1 className="font-bold text-xl lg:text-2xl">
                        {data.car}
                      </h1>
                    </div>
                    <div className="text-[#ffc933] flex items-center">
                      <span>
                        <AiFillStar />
                      </span>
                      <span>
                        <AiFillStar />
                      </span>
                      <span>
                        <AiFillStar />
                      </span>
                      <span>
                        <AiFillStar />
                      </span>
                      <span>
                        <AiFillStar />
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <h1 className="font-bold text-xl lg:text-2xl">
                      ${data.price}
                    </h1>
                    <p className="text-custom-grey">per day</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-lg">
                  <div className="flex items-center gap-2">
                    <span>
                      <AiFillCar />
                    </span>
                    <span>{data.model}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>{data.doors}</span>
                    <span>
                      <GiCarDoor />
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-lg">
                  <div className="flex items-center gap-2">
                    <span>
                      <AiFillTool />
                    </span>
                    <span>{data.transmission}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>{data.fuel}</span>
                    <span>
                      <BsFillFuelPumpFill />
                    </span>
                  </div>
                </div>
                <div>
                  <hr className="border border-lighter-grey" />
                </div>
                <div>
                  <a
                    href="/#booking"
                    className="block text-center bg-custom-orange p-3 font-bold text-white rounded shadow-orange-bottom hover:shadow-orange-bottom-hov transition-all duration-300 ease-linear w-full"
                  >
                    Book Ride
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Models;
