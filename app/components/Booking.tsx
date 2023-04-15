import React from "react";
import { bookingInputs } from "../data/input";
import { AiFillCalendar } from "react-icons/ai";
import { useInputValueContext } from "../context/inputValue";
import { AiOutlineClose } from "react-icons/ai";
import { useTogglersContext } from "../context/togglers";

function Booking() {
  const { bookingSelect, setBookingSelect, bookingDate, setBookingDate } =
    useInputValueContext();
  const { bookingFields, setBookingFields, setBookingModal } =
    useTogglersContext();

  return (
    <div className="m-8 p-6 bg-white bg-book-bg rounded shadow-booking-box space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Book a car</h1>
      </div>
      <div className="space-y-5">
        {!bookingFields && (
          <div className="flex items-center justify-between bg-custom-pink py-2 px-4 rounded text-custom-maroon font-medium">
            <p>All fields required!</p>
            <button onClick={() => setBookingFields(true)}>
              <AiOutlineClose />
            </button>
          </div>
        )}
        {bookingInputs.select.map((data) => (
          <div key={data.id} className="flex flex-col gap-4">
            <label htmlFor={data.htmlId} className="flex items-center gap-2">
              <span className="text-custom-orange text-xl">
                <data.label.icon />
              </span>
              <span className="font-semibold">{data.label.text}</span>
              <span className="text-custom-orange font-bold">*</span>
            </label>
            <select
              id={data.htmlId}
              className="p-2 border border-light-grey text-custom-grey rounded text-sm bg-transparent"
              onChange={(e) =>
                setBookingSelect({
                  ...bookingSelect,
                  [data.htmlId]: e.target.value,
                })
              }
            >
              {data.options.map((data) => (
                <option key={data.id} value={data.option} className="m-8">
                  {data.option}
                </option>
              ))}
            </select>
          </div>
        ))}
        {bookingInputs.input.map((data) => (
          <div key={data.id} className="flex flex-col gap-4">
            <label htmlFor={data.htmlId} className="flex items-center gap-2">
              <span className="text-custom-orange text-xl">
                <AiFillCalendar />
              </span>
              <span className="font-semibold">{data.label}</span>
              <span className="text-custom-orange font-bold">*</span>
            </label>
            <input
              type="date"
              id={data.htmlId}
              className="p-2 border border-light-grey text-custom-grey rounded text-sm w-full bg-transparent"
              onChange={(e) =>
                setBookingDate({
                  ...bookingDate,
                  [data.htmlId]: e.target.value,
                })
              }
            />
          </div>
        ))}
      </div>
      <div>
        <button
          className="bg-custom-orange w-full shadow-orange-bottom hover:shadow-orange-bottom-hov transition-all duration-300 ease-linear text-white p-4 font-bold rounded"
          onClick={() => {
            if (
              bookingDate["pickup-date"] !== "" &&
              bookingDate["dropof-date"] !== ""
            ) {
              setBookingFields(true);
              setBookingModal(true);
            } else {
              setBookingFields(false);
            }
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Booking;
