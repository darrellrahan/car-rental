import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useTogglersContext } from "../context/togglers";

function SingleFaq({
  id,
  question,
  answer,
}: {
  id: number;
  question: string;
  answer: string;
}) {
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
    <div className="shadow-faq-divider">
      <button
        className={`${
          getState(id) ? "bg-custom-orange text-white shadow-orange-bottom" : ""
        } text-left font-medium text-lg flex items-center gap-2 p-6`}
        onClick={() => setShowAnswer(getParams(id))}
      >
        <span>
          {id}. {question}
        </span>
        <span className="text-xl">
          {getState(id) ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
      </button>
      <p
        className={`${
          getState(id) ? "max-h-[28rem] py-6" : "max-h-0 py-0"
        } text-left px-6 transiion-all duration-300 ease-linear overflow-hidden text-custom-grey leading-relaxed`}
      >
        {answer}
      </p>
    </div>
  );
}

export default SingleFaq;
