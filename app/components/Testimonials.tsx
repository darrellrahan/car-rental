import Image from "next/image";
import React from "react";
import { ImQuotesRight } from "react-icons/im";

function Testimonials() {
  return (
    <section id="testimonials">
      <div className="py-8 px-8 lg:px-60 my-20 space-y-10 lg:space-y-16">
        <div className="space-y-6">
          <div className="text-center font-bold space-y-2">
            <h3 className="text-xl">Reviewed by People</h3>
            <h1 className="text-2.5rem leading-tight">Client's Testimonials</h1>
          </div>
          <div>
            <p className="text-center text-custom-grey lg:px-36">
              Discover the positive impact we've made on the our clients by
              reading through their testimonials. Our clients have experienced
              our service and results, and they're eager to share their positive
              experiences with you.
            </p>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="p-8 lg:p-12 bg-white rounded shadow-white-box flex flex-col justify-between gap-8">
            <div>
              <p className="font-medium text-xl lg:text-[1.35rem] lg:leading-relaxed">
                "We rented a car from this website and had an amazing
                experience! The booking was easy and the rental rates were very
                affordable. "
              </p>
            </div>
            <div className="lg:flex lg:justify-between lg:items-center">
              <div className="flex items-center justify-center gap-4">
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
              <div className="hidden lg:block">
                <span className="text-custom-orange text-5xl">
                  <ImQuotesRight />
                </span>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex flex-col justify-between p-8 lg:p-12 bg-white rounded shadow-white-box">
            <div>
              <p className="font-medium text-xl lg:text-[1.35rem] lg:leading-relaxed">
                "The car was in great condition and made our trip even better.
                Highly recommend for this car rental website!"
              </p>
            </div>
            <div className="lg:flex lg:justify-between lg:items-center">
              <div className="flex items-center justify-center gap-4">
                <div>
                  <Image
                    src="/images/noah-rizzly.jpg"
                    alt="noah rizzly"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Noah Rizzly</h3>
                  <p>Jakarta</p>
                </div>
              </div>
              <div className="hidden lg:block">
                <span className="text-custom-orange text-5xl">
                  <ImQuotesRight />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
