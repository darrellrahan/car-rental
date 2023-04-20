import React from "react";
import { quickEasy } from "../data/content";
import Image from "next/image";

function QuickEasy() {
  return (
    <section id="quick-easy">
      <div className="px-8 lg:px-28 py-16 text-center space-y-8 lg:space-y-16">
        <div className="font-bold space-y-2">
          <h3 className="text-xl">Plan your trip now</h3>
          <h1 className="text-5xl leading-tight">Quick & easy car rental</h1>
        </div>
        <div className="grid grid-cols-fluid gap-8">
          {quickEasy.map((data) => (
            <div key={data.id} className="flex flex-col gap-4">
              <Image
                src={data.img}
                alt={data.title}
                width={170}
                height={170}
                className="m-auto"
              />
              <h1 className="font-bold text-2xl">{data.title}</h1>
              <p className="text-custom-grey px-4 lg:px-12">{data.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default QuickEasy;
