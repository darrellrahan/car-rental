import React from "react";
import { quickEasy } from "../data/content";
import Image from "next/image";

function QuickEasy() {
  return (
    <div className="px-8 py-16 text-center space-y-8">
      <div className="font-bold space-y-2">
        <h3 className="text-xl">Plan your trip now</h3>
        <h1 className="text-5xl leading-tight">Quick & easy car rental</h1>
      </div>
      <div className="grid grid-cols-fluid gap-8">
        {quickEasy.map((data) => (
          <div key={data.id} className="flex flex-col">
            <Image
              src={data.img}
              alt={data.title}
              width={170}
              height={170}
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

export default QuickEasy;
