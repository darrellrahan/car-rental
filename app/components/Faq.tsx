import React from "react";
import { faq } from "../data/content";
import { useTogglersContext } from "../context/togglers";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Faq() {
  const { showAnswer, setShowAnswer } = useTogglersContext();

  function getParams(id: number): { q1: boolean; q2: boolean; q3: boolean } {
    switch (id) {
      case 1:
        return { q1: !showAnswer.q1, q2: false, q3: false };
      case 2:
        return { q1: false, q2: !showAnswer.q2, q3: false };
      case 3:
        return { q1: false, q2: false, q3: !showAnswer.q3 };
    }
    return { q1: false, q2: false, q3: false };
  }

  function getState(id: number) {
    switch (id) {
      case 1:
        return showAnswer.q1;
      case 2:
        return showAnswer.q2;
      case 3:
        return showAnswer.q3;
    }
  }

  return (
    <section id="faq">
      <div className="bg-faq-bg bg-white bg-no-repeat bg-[0_70%] px-8 py-16 my-16 space-y-16">
        <div className="space-y-6">
          <div className="text-center font-bold space-y-2">
            <h3 className="text-xl">FAQ</h3>
            <h1 className="text-2.5rem leading-tight">
              Frequently Asked Questions
            </h1>
          </div>
          <div>
            <p className="text-center text-custom-grey">
              Frequently Asked Questions About the Booking Process on Our
              Website.
            </p>
          </div>
        </div>
        <div className="bg-white rounded shadow-white-box">
          {faq.map((data) => (
            <div className="shadow-faq-divider" key={data.id}>
              <button
                className={`${
                  getState(data.id)
                    ? "bg-custom-orange text-white shadow-orange-bottom"
                    : ""
                } text-left font-medium text-lg flex items-center justify-between p-6 w-full`}
                onClick={() => setShowAnswer(getParams(data.id))}
              >
                <span>
                  {data.id}. {data.question}
                </span>
                <span className="text-xl">
                  {getState(data.id) ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </button>
              <p
                className={`${
                  getState(data.id) ? "max-h-[30rem] py-6" : "max-h-0 py-0"
                } text-left px-6 transiion-all duration-300 ease-linear overflow-hidden text-custom-grey leading-relaxed`}
              >
                {data.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
