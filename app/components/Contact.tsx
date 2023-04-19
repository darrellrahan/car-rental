import Link from "next/link";
import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { IoLocationSharp } from "react-icons/io5";
import { GoMailRead } from "react-icons/go";

function Contact() {
  return (
    <section id="contact-main">
      <div className="p-8 my-16 bg-[url('/images/contact-bg.png')] bg-[50%] bg-no-repeat bg-auto text-center space-y-12">
        <div className="space-y-4">
          <div>
            <h1 className="font-bold text-2.5rem">
              Need additional information?
            </h1>
          </div>
          <div>
            <p className="text-custom-grey">
              A multifaceted professional skilled in multiple fields of
              research, development as well as a learning specialist. Over 15
              years of experience.
            </p>
          </div>
        </div>
        <div>
          <ul className="space-y-4">
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
            <li>
              <a
                href="#top"
                className="flex items-center justify-center gap-2 hover:text-custom-orange transition-all duration-300 ease-linear"
              >
                <span>
                  <IoLocationSharp />
                </span>
                <span className="font-semibold">Bandung, Indonesia</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <div className="flex flex-col items-center gap-4">
            <label htmlFor="full-name">
              <span className="font-medium">Full Name</span>{" "}
              <span className="text-custom-orange">*</span>
            </label>
            <input
              type="text"
              placeholder='E.g: "Darrell Rafa"'
              className="bg-lighter-grey p-3 text-sm placeholder:text-custom-grey rounded w-full"
              id="full-name"
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            <label htmlFor="contact-email">
              <span className="font-medium">Email</span>{" "}
              <span className="text-custom-orange">*</span>
            </label>
            <input
              type="email"
              placeholder="youremail@example.com"
              className="bg-lighter-grey p-3 text-sm placeholder:text-custom-grey rounded w-full"
              id="contact-email"
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            <label htmlFor="textarea">
              <span className="font-medium">Tell us about it</span>{" "}
              <span className="text-custom-orange">*</span>
            </label>
            <textarea
              placeholder="Write Here..."
              className="bg-lighter-grey p-3 text-sm placeholder:text-custom-grey rounded w-full h-60"
              id="textarea"
            />
          </div>
          <div>
            <button className="bg-custom-orange flex items-center gap-2 justify-center p-3 shadow-orange-bottom hover:shadow-orange-bottom-hov transition-all duration-300 ease-linear rounded w-full text-white font-bold">
              <span className="text-xl">
                <GoMailRead />
              </span>
              <span>Send Message</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
