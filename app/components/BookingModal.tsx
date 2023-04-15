import React from "react";
import { AiFillInfoCircle, AiOutlineClose } from "react-icons/ai";
import { useTogglersContext } from "../context/togglers";
import { useInputValueContext } from "../context/inputValue";
import Image from "next/image";
import { personalInfo } from "../data/input";

function BookingModal() {
  const { bookingModal, setBookingModal, bookingFields, setBookingFields } =
    useTogglersContext();
  const { bookingSelect, bookingDate, clearBookingInputs } =
    useInputValueContext();

  if (!bookingModal) return null;

  return (
    <div className="bg-white fixed inset-x-0 top-0 bottom-0 z-1000 overflow-y-auto">
      <div className="bg-custom-orange flex items-center justify-between text-white text-2xl p-4 font-bold">
        <h1>COMPLETE RESERVATION</h1>
        <button onClick={() => setBookingModal(false)}>
          <AiOutlineClose />
        </button>
      </div>
      <div className="bg-custom-pink p-4 space-y-4">
        <div className="text-custom-orange flex items-center gap-2">
          <span className="text-2xl">
            <AiFillInfoCircle />
          </span>
          <span className="font-bold">
            Upon completing this reservation enquiry, you will receive:
          </span>
        </div>
        <div>
          <p className="text-custom-grey font-medium">
            Your rental voucher to produce on arrival at the rental desk and a
            toll-free customer support number.
          </p>
        </div>
      </div>
      <div className="text-center px-8 py-10 space-y-8">
        <div>
          <h1 className="text-custom-orange font-bold text-lg">
            Location & Date
          </h1>
        </div>
        <div className="space-y-2">
          <div>
            <h3 className="font-bold">Pick Up Date & Time</h3>
          </div>
          <div>
            <span className="flex items-center justify-center gap-2 text-custom-grey">
              <p>{bookingDate["pickup-date"]} / </p>
              <input
                type="time"
                className="border border-lightest-grey rounded text-sm px-2 text-center bg-transparent w-fit"
              />
            </span>
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <h3 className="font-bold">Drop Off Date & Time</h3>
          </div>
          <div>
            <span className="flex items-center justify-center gap-2 text-custom-grey">
              <p>{bookingDate["dropof-date"]} / </p>
              <input
                type="time"
                className="border border-lightest-grey rounded text-sm px-2 text-center bg-transparent w-fit"
              />
            </span>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="font-bold">Pick Up Location</h3>
          <p className="text-custom-grey">{bookingSelect["pickup-location"]}</p>
        </div>
        <div className="space-y-2">
          <h3 className="font-bold">Drop Off Location</h3>
          <p className="text-custom-grey">{bookingSelect["dropof-location"]}</p>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-lg">
              Car -{" "}
              <span className="text-custom-orange">
                {bookingSelect["car-type"]}
              </span>
            </h3>
          </div>
          <div>
            <Image
              src={`/images/${bookingSelect["car-type"]}.png`}
              alt={bookingSelect["car-type"]}
              width={300}
              height={300}
              className="m-auto"
            />
          </div>
        </div>
      </div>
      <hr className="border border-custom-grey/25" />
      <div className="px-8 py-10 space-y-8">
        <div>
          <h1 className="font-bold text-custom-orange text-lg">
            PERSONAL INFORMATION
          </h1>
        </div>
        <div className="space-y-6">
          {personalInfo.map((data) => (
            <div key={data.id} className="flex flex-col gap-2">
              <label htmlFor={data.htmlId}>
                <span className="text-dark-grey font-medium">{data.label}</span>{" "}
                <span className="text-custom-orange">*</span>
              </label>
              <input
                type={data.type}
                placeholder={data.placeholder}
                className="bg-lighter-grey text p-3 text-sm placeholder:text-custom-grey rounded"
              />
              <span className="text-xxs">This field is required.</span>
            </div>
          ))}
        </div>
        <div>
          <button
            className="bg-custom-orange w-full shadow-orange-bottom hover:shadow-orange-bottom-hov transition-all duration-300 ease-linear text-white p-3 font-bold rounded"
            onClick={() => {
              setBookingModal(false);
              setBookingFields({ ...bookingFields, green: true });
              clearBookingInputs();
            }}
          >
            Reserve Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingModal;
