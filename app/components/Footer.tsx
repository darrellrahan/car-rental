import Link from "next/link";
import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

function Footer() {
  return (
    <section id="footer">
      <div className="bg-white px-8 py-16 mt-16 space-y-20 text-center">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="font-bold text-2xl">CAR RENTAL</h1>
            <p className="text-custom-grey">
              We offer a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs.
            </p>
          </div>
          <div>
            <ul className="space-y-2">
              <li>
                <Link
                  href="tel:123456789"
                  className="flex items-center justify-center gap-2 hover:text-custom-orange transition-all duration-300 ease-linear"
                >
                  <span>
                    <BsFillTelephoneFill />
                  </span>
                  <span className="font-semibold">(123)-456-789</span>
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:carrental@gmail.com"
                  className="flex items-center justify-center gap-2 hover:text-custom-orange transition-all duration-300 ease-linear"
                >
                  <span>
                    <GrMail />
                  </span>
                  <span className="font-semibold">carrental@gmail.com</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="font-bold text-2xl">COMPANY</h1>
          <ul className="space-y-2">
            <li>
              <a
                href="#top"
                className="hover:text-custom-orange transition-all duration-300 ease-linear"
              >
                New York
              </a>
            </li>
            <li>
              <a
                href="#top"
                className="hover:text-custom-orange transition-all duration-300 ease-linear"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#top"
                className="hover:text-custom-orange transition-all duration-300 ease-linear"
              >
                Mobile
              </a>
            </li>
            <li>
              <a
                href="#top"
                className="hover:text-custom-orange transition-all duration-300 ease-linear"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#top"
                className="hover:text-custom-orange transition-all duration-300 ease-linear"
              >
                How we work
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <div>
            <h1 className="font-bold text-2xl">WORKING HOURS</h1>
          </div>
          <div className="space-y-2">
            <p>Mon - Fri: 9:00AM - 9:00PM</p>
            <p>Sat: 9:00AM - 19:00PM</p>
            <p>Sun: Closed</p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="font-bold text-2xl">SUBSCRIPTION</h1>
            <p className="text-custom-grey">
              Subscribe your Email address for latest news & updates.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <input
              type="email"
              className="bg-lighter-grey rounded p-4 placeholder:text-custom-grey"
              placeholder="Enter Email Address"
            />
            <button className="bg-custom-orange p-4 font-bold text-white rounded shadow-orange-bottom hover:shadow-orange-bottom-hov transition-all duration-300 ease-linear">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
