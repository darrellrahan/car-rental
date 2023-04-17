import Image from "next/image";
import React from "react";

function Testimonials() {
  return (
    <div className="p-8 my-8 space-y-10">
      <div className="space-y-6">
        <div className="text-center font-bold space-y-2">
          <h3 className="text-xl">Reviewed by People</h3>
          <h1 className="text-2.5rem leading-tight">Client's Testimonials</h1>
        </div>
        <div>
          <p className="text-center text-custom-grey">
            Discover the positive impact we've made on the our clients by
            reading through their testimonials.
          </p>
        </div>
      </div>
      <div className="p-8 bg-white rounded shadow-white-box space-y-8">
        <div>
          <p className="font-medium text-xl">
            "We rented a car from this website and had an amazing experience!
            The booking was easy and the rental rates were very affordable. "
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <Image
              src="/images/parry-hotter.jpg"
              alt="parry hotter"
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>
          <div>
            <h3 className="font-bold text-lg">Parry Hotter</h3>
            <p>Bandung</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
