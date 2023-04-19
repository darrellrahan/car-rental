import React from "react";
import { team } from "../data/content";
import Image from "next/image";

function Team() {
  return (
    <section id="team-main">
      <div className="px-8 py-16 bg-white">
        <div className="grid grid-cols-fluid gap-12">
          {team.map((data) => (
            <div
              key={data.id}
              className="shadow-[0_20px_10px_0_rgba(0,0,0,.08)]"
            >
              <div className="bg-[#f6f6f6]">
                <Image
                  src={data.img}
                  alt={data.name}
                  width={800}
                  height={800}
                  className="w-full h-full"
                />
              </div>
              <div className="bg-white p-8 flex flex-col items-center justify-center gap-1">
                <h1 className="font-bold text-xl">{data.name}</h1>
                <p>{data.job}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
