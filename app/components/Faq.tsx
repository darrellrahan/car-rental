import React from "react";
import { faq } from "../data/content";
import SingleFaq from "./SingleFaq";

function Faq() {
  return (
    <div className="bg-faq-bg bg-white bg-no-repeat bg-left-bottom p-8 my-16 space-y-16">
      <div className="space-y-6">
        <div className="text-center font-bold space-y-2">
          <h3 className="text-xl">FAQ</h3>
          <h1 className="text-2.5rem leading-tight">
            Frequently Asked Questions
          </h1>
        </div>
        <div>
          <p className="text-center text-custom-grey">
            Frequently Asked Questions About the Booking Process on Our Website.
          </p>
        </div>
      </div>
      <div className="bg-white rounded shadow-white-box">
        {faq.map((data) => (
          <SingleFaq
            key={data.id}
            id={data.id}
            question={data.question}
            answer={data.answer}
          />
        ))}
      </div>
    </div>
  );
}

export default Faq;
